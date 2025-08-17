import React from 'react';
import Link from 'next/link';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';
import TgTransparent from '@/app/icons/tg-transparent';
import { CHANNEL_TG_LINK } from '@/app/consts';

function TgChannelBtn() {
  return (
    <Link
      href={CHANNEL_TG_LINK}
      target={'_blank'}
      className={
        'relative flex min-h-[140px] items-center rounded-20 bg-blue px-10 py-20 2xl:min-h-[270px] 2xl:p-40'
      }
    >
      <div>
        <TgTransparent className={'h-[40px] w-[40px]'} />
        <p className={'h5 mt-10 text-white'}>Telegram канал creat.ershova</p>
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

export default TgChannelBtn;
