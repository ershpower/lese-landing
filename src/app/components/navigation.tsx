import React from 'react';
import { Logo } from '@/app/icons/logo';
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
import { Dots } from '@/app/icons/dots';
import { Tg } from '@/app/icons/tg';
import { Finger } from '@/app/icons/finger';

const navItems = [
  {
    title: 'Обо мне',
    id: ABOUT_ME_ID,
  },
  {
    title: 'Портфолио',
    id: PORTFOLIO_ID,
  },
  {
    title: 'Для кого',
    id: FOR_WHO_ID,
  },
  {
    title: 'Этапы работы',
    id: WORK_STEPS_ID,
  },
  {
    title: 'Стоимость',
    id: PRICE_ID,
  },
  {
    title: 'FAQ',
    id: FAQ_ID,
  },
  {
    title: 'Контакты',
    id: CONTACTS_ID,
  },
];

function Navigation() {
  return (
    <div
      className={
        'sticky left-0 top-0 flex h-screen flex-col justify-between gap-10 py-20 pl-20'
      }
    >
      <div className={'flex-grow rounded-20 bg-light-gradient p-20'}>
        <div
          className={
            'flex h-[60px] w-[60px] items-center justify-center rounded-20 bg-white'
          }
        >
          <Logo />
        </div>
        <nav className={'mt-60'}>
          <ul>
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  className={
                    'h8 flex items-center gap-12 border-b border-white py-16'
                  }
                  href={item.id}
                >
                  <span className={'h9'}>0{i + 1}</span>
                  {item.title}
                  <div className={'ml-auto'}>
                    <ArrowRightUp />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <a
        target={'_blank'}
        href={'https://t.me/Ershova_Presentation'}
        className={'bg-dark-gradient block rounded-20 px-20 py-30'}
      >
        <div className={'ml-auto flex justify-end text-white'}>
          <Dots />
        </div>
        <div
          className={
            'text-blue rounded-10 mt-4 flex h-[40px] w-[40px] items-center justify-center bg-white pr-[2px]'
          }
        >
          <Tg />
        </div>
        <h6 className={'h6 mt-12 text-white'}>Заказать презентацию</h6>
        <p className={'h8 text-white-70 mt-12'}>
          Напишите мне, чтобы обсудить все детали и начать ваш проект
        </p>
        <div className={'mt-16 flex justify-end'}>
          <Finger />
        </div>
      </a>
    </div>
  );
}

export default Navigation;
