import React from 'react';
import { Logo } from '@/app/icons/logo';
import { menuItems } from '@/app/consts';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';

function Menu() {
  return (
    <div
      className={
        'h sticky left-0 top-10 h-[calc(100vh-20px)] rounded-20 bg-menu-gradient p-10'
      }
    >
      <Logo />
      <ul className={'mt-30'}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              className={`flex items-center gap-10 py-16 text-dark-blue ${index !== 0 ? 'border-t border-white' : ''}`}
              href={item.href}
            >
              <span className={'h6 text-black-40'}>0{index + 1}</span>
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
