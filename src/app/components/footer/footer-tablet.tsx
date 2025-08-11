import React from 'react';
import TgTransparent from '@/app/icons/tg-transparent';
import PinterestTransparent from '@/app/icons/pinterest-transparent';
import BehanceTransparent from '@/app/icons/behance-transparent';
import Link from 'next/link';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';
import PersonInfo from '@/app/ui-lit/person-info';
import OrderButtonDesktop from '@/app/ui-lit/order-button-desktop';

const items = [
  {
    icon: <TgTransparent />,
    title: 'Telegram канал',
    href: '',
  },
  {
    icon: <PinterestTransparent />,
    title: 'Pinterest.com',
    href: '',
  },
  {
    icon: <BehanceTransparent />,
    title: 'Behance',
    href: '',
  },
];

function FooterTablet() {
  return (
    <div className={'grid grid-cols-4 gap-10'}>
      {/*left*/}
      <div
        className={
          'col-span-3 flex flex-col gap-30 rounded-20 bg-hero-bg bg-cover bg-no-repeat p-30'
        }
      >
        <p className={'h1 text-white'}>
          Ваш проект заслуживает впечатляющего визуала!
        </p>
        <p className={'h5 max-w-[280px] text-white'}>
          Доверьтесь моему опыту и креативу, чтобы получить эффектную
          презентацию
        </p>
        <div className={'grid grid-cols-3 gap-20'}>
          {items.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`flex items-center gap-10 text-white ${index !== 2 ? 'border-r border-white-50' : ''}`}
            >
              <div>{item.icon}</div>
              <p>{item.title}</p>
              <div>
                <ArrowRightUp />
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/*right*/}
      <div className={'col-span-1 flex flex-col gap-10'}>
        <PersonInfo />
        <OrderButtonDesktop />
      </div>
    </div>
  );
}

export default FooterTablet;
