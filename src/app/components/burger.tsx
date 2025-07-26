'use client';
import React from 'react';
import CloseIcon from '@/app/icons/close';
import {
  ABOUT_ME_ID,
  CONTACTS_ID,
  FAQ_ID,
  FOR_WHO_ID,
  PORTFOLIO_ID,
  PRICE_ID,
  WORK_STEPS_ID,
} from '@/app/consts';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';
import { on } from 'next/dist/client/components/react-dev-overlay/pages/bus';

const menuItems = [
  {
    href: `#${ABOUT_ME_ID}`,
    title: 'Обо мне',
  },
  {
    href: `#${PORTFOLIO_ID}`,
    title: 'Портфолио',
  },
  {
    href: `#${FOR_WHO_ID}`,
    title: 'Для кого',
  },
  {
    href: `#${WORK_STEPS_ID}`,
    title: 'Этапы работы',
  },
  {
    href: `#${PRICE_ID}`,
    title: 'Стоимость',
  },
  {
    href: `#${FAQ_ID}`,
    title: 'FAQ',
  },
  {
    href: `#${CONTACTS_ID}`,
    title: 'Контакты',
  },
];

interface BurgerProps {
  isOpen: boolean;
  onClose: () => void;
}

function Burger({ isOpen, onClose }: BurgerProps) {
  if (!isOpen) return null;

  const handleClick = () => {
    onClose();
  };

  return (
    <div
      className={
        'bg-burger-gradient fixed left-0 top-0 z-50 h-screen w-screen p-10 backdrop-blur'
      }
    >
      <div
        onClick={onClose}
        className={
          'border-white-30 ml-auto w-fit rounded-16 border p-12 text-white'
        }
      >
        <CloseIcon />
      </div>

      <div>
        <ul className={'m-auto max-w-[203px]'}>
          {menuItems.map((item, index) => {
            const className = index === 0 ? 'border-0' : 'border-t';
            return (
              <li
                key={index}
                className={`${className} border-white-30 py-20 text-white`}
              >
                <a
                  className={'flex items-center justify-between'}
                  href={item.href}
                  onClick={handleClick}
                >
                  <span className={'text-white-30 h6'}>0{index + 1}</span>
                  <span className={'h4'}>{item.title}</span>
                  <ArrowRightUp width={10} height={10} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Burger;
