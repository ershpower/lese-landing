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
    title: 'Pinterest',
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
          'col-span-3 flex flex-col gap-20 rounded-20 bg-brand-gradient p-30 2xl:p-60'
        }
      >
        <p className={'h1 text-white'}>
          Ваш проект заслуживает впечатляющего визуала!
        </p>
        <p className={'h5 max-w-[280px] text-white xl:max-w-[500px]'}>
          Доверьтесь моему опыту и креативу, чтобы получить эффектную
          презентацию
        </p>
        <div className={'grid grid-cols-3'}>
          {/*tg*/}
          <Link
            href={'https://t.me/Ershova_Presentation'}
            className={`h5 col-span-2 flex items-center gap-10 border-r border-white-50 py-10 text-white 2xl:py-20`}
          >
            <div>
              <TgTransparent />
            </div>
            <p>Telegram канал</p>
            <div>
              <ArrowRightUp width={10} height={10} />
            </div>
          </Link>

          {/*behance*/}
          <Link
            href={'https://www.behance.net/Ershova_Presentation'}
            className={`h5 col-span-1 flex items-center gap-10 py-10 pl-30 text-white 2xl:py-20`}
          >
            <div>
              <BehanceTransparent />
            </div>
            <p>Behance</p>
            <div>
              <ArrowRightUp width={10} height={10} />
            </div>
          </Link>

          {/* email  */}
          <Link
            href={''}
            className={`h5 col-span-2 flex items-center gap-10 border-r border-t border-white-50 py-10 text-white`}
          >
            {/*<div>*/}
            {/*  <PinterestTransparent />*/}
            {/*</div>*/}
            {/*<p>email</p>*/}
            {/*<div>*/}
            {/*  <ArrowRightUp width={10} height={10} />*/}
            {/*</div>*/}
          </Link>

          {/*pinterest*/}
          <Link
            href={'https://ru.pinterest.com/Ershova_Presentation/'}
            className={`h5 col-span-1 flex items-center gap-10 border-t border-white-50 py-10 pl-30 text-white 2xl:py-20`}
          >
            <div>
              <PinterestTransparent />
            </div>
            <p>Pinterest</p>
            <div>
              <ArrowRightUp width={10} height={10} />
            </div>
          </Link>
        </div>
      </div>
      {/*right*/}
      <div className={'col-span-1 flex h-full flex-col gap-10'}>
        <div className={'flex-auto'}>
          <PersonInfo />
        </div>
        <div>
          <OrderButtonDesktop />
        </div>
      </div>
    </div>
  );
}

export default FooterTablet;
