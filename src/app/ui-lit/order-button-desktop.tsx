import React from 'react';
import { Tg } from '@/app/icons/tg';
import { Finger } from '@/app/icons/finger';

function OrderButtonDesktop() {
  return (
    <div
      className={'shadow-blue relative h-full rounded-20 bg-white px-20 py-30'}
    >
      <Tg />
      <h1 className={'h4 mt-6 text-dark-blue'}>Заказать презентацию</h1>
      <p className={'h6 mt-10'}>
        Напишите мне, чтобы обсудить все детали и начать ваш проект
      </p>
      {/*<Finger className={'absolute right-[24px] top-1/2'} />*/}
    </div>
  );
}

export default OrderButtonDesktop;
