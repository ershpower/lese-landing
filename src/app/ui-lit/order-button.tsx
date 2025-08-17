import React from 'react';
import { Tg } from '@/app/icons/tg';
import { Finger } from '@/app/icons/finger';
import { PERSON_TG_LINK } from '@/app/consts';

export const OrderButton = () => {
  return (
    <div>
      <a
        href={PERSON_TG_LINK}
        target={'_blank'}
        className={
          'relative flex items-center justify-center gap-6 rounded-20 bg-white p-16'
        }
      >
        <Tg />
        <span className={'h4 text-dark-blue'}>Заказать презентацию</span>
        <Finger
          className={'absolute bottom-[12px] right-[24px]'}
          width={24}
          height={24}
        />
      </a>

      <p className={'mt-10 flex items-center justify-center gap-10'}>
        <span className={'h6 max-w-[250px] text-center text-white'}>
          Напишите мне, чтобы обсудить <br /> все детал и начать ваш проект
        </span>
      </p>
    </div>
  );
};
