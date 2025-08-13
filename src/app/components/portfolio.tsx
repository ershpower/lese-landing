import React from 'react';
import { Finger } from '@/app/icons/finger';
import { PORTFOLIO_ID } from '@/app/consts';
import Title from '@/app/ui-lit/title';

export const Portfolio = () => {
  return (
    <div
      className={'mx-6 mt-40 grid grid-cols-4 gap-10 md:mx-10 md:grid-rows-2'}
      id={PORTFOLIO_ID}
    >
      <div
        className={
          'col-span-4 overflow-hidden rounded-20 bg-white pt-20 md:col-span-3 md:row-span-2'
        }
      >
        <div className={'px-10'}>
          <Title
            title={
              <>
                Создам презентацию, <br />
                даже если у вас сплошной <br /> текст и море графиков
              </>
            }
          />
        </div>
        <div
          className={
            'relative mt-[-30px] min-h-[510px] bg-portfolio-bg bg-cover bg-no-repeat'
          }
        >
          <div
            className={
              'absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full p-16 backdrop-blur'
            }
          >
            <div
              className={
                'flex h-full w-full flex-col items-center justify-center rounded-full border-[10px] border-white bg-portfolio-bg-circle bg-cover'
              }
            >
              <p className={'h2 text-white'}>6000+</p>
              <p className={'h4 mt-10 text-white'}>Слайдов отрисовано*</p>
              <p className={'h6 mt-10 text-white-70'}>*И не только слайдов)</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href={'https://ru.pinterest.com/Ershova_Presentation/'}
        target={'_blank'}
        className={
          'col-span-2 flex flex-col justify-between rounded-20 bg-red p-20 md:col-span-1'
        }
      >
        <p className={'h6 text-white'}>
          Больше работ <br /> можно посмотреть на:{' '}
        </p>
        <img
          src="/portfolio/big-pinerest.svg"
          alt="Pinterest"
          className={'mt-16'}
        />
        <Finger height={30} width={30} className={'ml-auto mt-10 text-white'} />
      </a>
      <a
        href={'https://www.behance.net/Ershova_Presentation'}
        target={'_blank'}
        className={
          'col-span-2 flex flex-col justify-between rounded-20 bg-behance-blue p-20 md:col-span-1'
        }
      >
        <p className={'h6 text-white'}>
          Подробные кейсы <br /> можно посмотреть на:
        </p>
        <img
          src="/portfolio/big-behance.svg"
          alt="Behance"
          className={'mt-16'}
        />
        <Finger height={30} width={30} className={'ml-auto mt-14 text-white'} />
      </a>
    </div>
  );
};
