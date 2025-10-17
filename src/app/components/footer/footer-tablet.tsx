import React from 'react';
import TgTransparent from '@/app/icons/tg-transparent';
import PinterestTransparent from '@/app/icons/pinterest-transparent';
import BehanceTransparent from '@/app/icons/behance-transparent';
import Link from 'next/link';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';
import PersonInfo from '@/app/ui-lit/person-info';
import OrderButtonDesktop from '@/app/ui-lit/order-button-desktop';
import { BEHANCE_LINK, CHANNEL_TG_LINK, PINTEREST_LINK } from '@/app/consts';

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
          Ваш проект <br /> заслуживает <br /> впечатляющего <br /> визуала!
        </p>
        <p className={'h5 text-white'}>
          Доверьтесь моему опыту и креативу, <br /> чтобы получить эффектную
          презентацию
        </p>
        <div className={'grid grid-cols-3'}>
          {/*tg*/}
          <Link
            target={'_blank'}
            href={CHANNEL_TG_LINK}
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
            target={'_blank'}
            href={BEHANCE_LINK}
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
            target={'_blank'}
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
            target={'_blank'}
            href={PINTEREST_LINK}
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
