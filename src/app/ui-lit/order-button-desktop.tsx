import React from 'react';
import { Tg } from '@/app/icons/tg';
import { Finger } from '@/app/icons/finger';

function OrderButtonDesktop() {
  return (
    <div
      className={'relative h-full rounded-20 bg-white px-18 py-30 shadow-blue'}
    >
      <Tg />
      <h1 className={'h4 mt-6 text-dark-blue'}>Заказать презентацию</h1>
      <p className={'h6 mt-10'}>
        Напишите мне, чтобы обсудить все детали <br /> и начать ваш проект
      </p>
      <Finger
        width={20}
        height={20}
        className={'absolute right-[24px] top-[50px]'}
      />
    </div>
  );
}

export default OrderButtonDesktop;
