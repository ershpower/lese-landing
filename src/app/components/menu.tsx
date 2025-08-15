'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Logo } from '@/app/icons/logo';
import { menuItems } from '@/app/consts';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';
import TgChannelBtn from '@/app/ui-lit/tg-channel-btn';

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

  return (
    <div
      className={
        'h sticky left-0 top-10 flex h-[calc(100vh-20px)] flex-col gap-10'
      }
    >
      <div className={'flex-auto rounded-20 bg-menu-gradient'}>
        <div className={'p-10'}>
          <Logo className={'h-[40px] w-[40px] xl:h-[50px] xl:w-[50px]'} />
        </div>
        <ul className={'mt-30'}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                className={`flex items-center gap-10 px-10 py-16 xl:gap-20 2xl:py-20 ${index !== 0 ? 'border-t border-white' : ''} ${activeSection === item.href ? 'rounded-10 bg-button-gradient text-white' : 'text-dark-blue'}`}
                href={`#${item.href}`}
              >
                <span
                  className={`h6 ${activeSection === item.href ? 'text-white-70' : 'text-black-40'}`}
                >
                  0{index + 1}
                </span>
                <span className={'h5 flex-auto'}>{item.title}</span>
                <ArrowRightUp
                  className={'h-[10px] w-[10px] 2xl:h-[16px] 2xl:w-[16px]'}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <TgChannelBtn />
    </div>
  );
}

export default Menu;
