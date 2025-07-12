import React from 'react';
import { Finger } from '@/app/icons/finger';

export const Portfolio = () => {
  return (
    <section className={'mx-10 mt-40'}>
      <div className={'overflow-hidden rounded-20 bg-white'}>
        <p className={'h3 p-20 text-dark-blue'}>
          Создам презентацию, даже если у вас сплошной текст и море графиков
        </p>
        <div
          className={
            'bg-portfolio-bg relative mt-[-30px] min-h-[510px] bg-cover bg-no-repeat'
          }
        >
          <div
            className={
              'absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full p-16 backdrop-blur'
            }
          >
            <div
              className={
                'bg-portfolio-bg-circle flex h-full w-full flex-col items-center justify-center rounded-full border-[10px] border-white bg-cover'
              }
            >
              <p className={'h2 text-white'}>6000+</p>
              <p className={'h4 mt-10 text-white'}>Слайдов отрисовано*</p>
              <p className={'text-white-70 mt-10'}>*И не только слайдов)</p>
            </div>
          </div>
        </div>
      </div>
      <div className={'mt-8 flex gap-8'}>
        <a href={''} className={'bg-red block rounded-20 p-20'}>
          <p className={'h6 text-white'}>Больше работ можно посмотреть на: </p>
          <img
            src="/portfolio/big-pinerest.svg"
            alt="Pinterest"
            className={'mt-16'}
          />
          <Finger
            height={30}
            width={30}
            className={'ml-auto mt-10 text-white'}
          />
        </a>
        <a href={''} className={'bg-behance-blue block rounded-20 p-20'}>
          <p className={'h6 text-white'}>
            Подробные кейсы можно посмотреть на:
          </p>
          <img
            src="/portfolio/big-behance.svg"
            alt="Behance"
            className={'mt-16'}
          />
          <Finger
            height={30}
            width={30}
            className={'ml-auto mt-14 text-white'}
          />
        </a>
      </div>
    </section>
  );
};
