import React from 'react';
import { OrderButton } from '@/app/ui-lit/order-button';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';
import TgTransparent from '@/app/icons/tg-transparent';
import BehanceTransparent from '@/app/icons/behance-transparent';
import PinterestTransparent from '@/app/icons/pinterest-transparent';

function FooterMobile() {
  return (
    <footer className={'mt-40 rounded-20 bg-brand-gradient px-20 py-30'}>
      <p className={'h1 text-40 text-white'}>
        Ваш проект заслуживает впечатляющего визуала!
      </p>
      <p className={'h5 mb-30 mt-20 text-white-70'}>
        Доверьтесь моему опыту и креативу, <br /> чтобы получить эффектную
        презентацию
      </p>
      <OrderButton />

      <div className={'mt-40 grid grid-cols-3'}>
        {/*tg*/}
        <a
          href="https://t.me/Ershova_Presentation"
          className={
            'col-span-2 flex items-center gap-6 border-r border-white-50 py-10'
          }
        >
          <div>
            <TgTransparent />
          </div>
          <p className={'h6 text-white'}>Telegram канал</p>
          <div className={'text-white'}>
            <ArrowRightUp width={10} height={10} />
          </div>
        </a>
        {/*behance*/}
        <a
          href="https://www.behance.net/Ershova_Presentation"
          className={'col-span-1 flex items-center gap-6 py-10 pl-10'}
        >
          <div>
            <BehanceTransparent />
          </div>
          <p className={'h6 text-white'}>Behance</p>
          <div className={'text-white'}>
            <ArrowRightUp width={10} height={10} />
          </div>
        </a>
        {/*email*/}
        <a
          href=""
          className={'col-span-2 border-r border-t border-white-50'}
        ></a>
        {/*pinterest*/}
        <a
          href="https://ru.pinterest.com/Ershova_Presentation/"
          className={
            'col-span-1 flex items-center gap-6 border-t border-white-50 py-10 pl-10'
          }
        >
          <div>
            <PinterestTransparent />
          </div>
          <p className={'h6 text-white'}>Behance</p>
          <div className={'text-white'}>
            <ArrowRightUp width={10} height={10} />
          </div>
        </a>
      </div>
    </footer>
  );
}

export default FooterMobile;
