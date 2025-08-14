'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Logo } from '@/app/icons/logo';
import { menuItems } from '@/app/consts';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';

function Menu() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Создаем observer с настройками
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Секция считается видимой, когда 50% ее площади на экране
      },
    );

    // Находим все секции и начинаем их наблюдать
    menuItems.forEach((item) => {
      const section = document.getElementById(item.href);
      if (section) {
        observer.current?.observe(section);
      }
    });

    // Очистка при размонтировании
    return () => {
      observer.current?.disconnect();
    };
  }, []);

  console.log(menuItems);
  console.log(activeSection);
  return (
    <div
      className={
        'h sticky left-0 top-10 h-[calc(100vh-20px)] rounded-20 bg-menu-gradient'
      }
    >
      <div className={'p-10'}>
        <Logo />
      </div>
      <ul className={'mt-30'}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              className={`flex items-center gap-10 px-10 py-16 ${index !== 0 ? 'border-t border-white' : ''} ${activeSection === item.href ? 'rounded-10 bg-button-gradient text-white' : 'text-dark-blue'}`}
              href={`#${item.href}`}
            >
              <span
                className={`h6 ${activeSection === item.href ? 'text-white-70' : 'text-black-40'}`}
              >
                0{index + 1}
              </span>
              <span className={'h5 flex-auto'}>{item.title}</span>
              <ArrowRightUp width={10} height={10} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
