import React from 'react';
import { Tg } from '@/app/icons/tg';
import { Finger } from '@/app/icons/finger';

function OrderButtonDesktop() {
  return (
    <div
      className={
        'shadow-custom-blue relative h-full rounded-20 bg-white px-18 py-30 hover:cursor-pointer 2xl:h-[300px] 2xl:p-40'
      }
    >
      <Tg
        className={
          'h-[27px] w-[27px] lg:h-[40px] lg:w-[40px] 2xl:h-[60px] 2xl:w-[60px]'
        }
      />
      <h1 className={'h4 mt-6 text-dark-blue'}>
        Заказать <br className={'hidden 2xl:block'} /> презентацию
      </h1>

      <p className={'h6 mt-10 text-black-70'}>
        Напишите мне, чтобы <br className={'hidden 2xl:block'} /> обсудить все
        детали <br className={'xl:hidden'} />
        <br className={'hidden xl:block'} /> и начать ваш проект
      </p>
      <Finger
        className={
          'absolute right-[24px] top-[50px] h-[20px] w-[20px] xl:h-[30px] xl:w-[30px] 2xl:h-[60px] 2xl:w-[60px]'
        }
      />
    </div>
  );
}

export default OrderButtonDesktop;
