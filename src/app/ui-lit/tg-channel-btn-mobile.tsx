import React from 'react';
import Link from 'next/link';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';
import TgTransparent from '@/app/icons/tg-transparent';

function TgChannelBtnMobile() {
  return (
    <Link href={''} className={'bg-blue relative flex h-full rounded-20 p-20'}>
      <div>
        <TgTransparent className={'h-[27px] w-[27px]'} />
        <p className={'h5 mt-10 text-white'}>
          Telegram канал <br />
          creat.ershova
        </p>
      </div>
      <div>
        <ArrowRightUp
          className={
            'absolute right-20 top-20 text-white 2xl:right-60 2xl:top-60 2xl:h-[16px] 2xl:w-[16px]'
          }
          width={10}
          height={10}
        />
      </div>
    </Link>
  );
}

export default TgChannelBtnMobile;
