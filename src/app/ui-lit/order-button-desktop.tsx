import React from 'react';
import { Tg } from '@/app/icons/tg';
import { Finger } from '@/app/icons/finger';
import Link from 'next/link';
import { PERSON_TG_LINK } from '@/app/consts';

function OrderButtonDesktop() {
  return (
    <Link
      href={PERSON_TG_LINK}
      target={'_blank'}
      className={
        'relative block flex h-full flex-col justify-center rounded-20 bg-white px-18 py-30 shadow-custom-blue hover:cursor-pointer 2xl:h-[350px] 2xl:p-40'
      }
    >
      <Tg
        className={
          'h-[27px] w-[27px] lg:h-[40px] lg:w-[40px] 2xl:h-[60px] 2xl:w-[60px]'
        }
      />
      <div>
        <h1 className={'h4 mt-6 text-dark-blue'}>
          Заказать <br /> презентацию
        </h1>

        <p className={'h6 mt-10 text-black-70'}>
          Напишите мне, чтобы <br /> обсудить все детали <br /> и начать ваш
          проект
        </p>
        <Finger
          className={
            'absolute right-[24px] top-[50px] h-[20px] w-[20px] xl:h-[30px] xl:w-[30px] 2xl:h-[60px] 2xl:w-[60px]'
          }
        />
      </div>
    </Link>
  );
}

export default OrderButtonDesktop;
