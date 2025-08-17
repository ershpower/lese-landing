import React from 'react';
import { Finger } from '@/app/icons/finger';
import { BEHANCE_LINK, PINTEREST_LINK, PORTFOLIO_ID } from '@/app/consts';
import Title from '@/app/ui-lit/title';

export const Portfolio = () => {
  return (
    <div
      className={
        'mx-6 mt-40 grid grid-cols-4 gap-10 md:mx-10 md:grid-rows-2 xl:mt-80'
      }
      id={PORTFOLIO_ID}
    >
      <div
        className={
          'col-span-4 overflow-hidden rounded-20 bg-white pt-20 md:col-span-3 md:row-span-2 2xl:pt-40'
        }
      >
        <div className={'px-10'}>
          <Title
            title={
              <>
                Создам презентацию, <br className={'block'} /> даже если у вас
                сплошной <br className={'block'} /> текст и море графиков
              </>
            }
          />
        </div>
        <div className={'relative -mt-30 md:mt-0 2xl:-mt-60'}>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/portfolio/desk-bg.png"
            ></source>
            <source
              media="(min-width: 768px)"
              srcSet="/portfolio/tablet-bg.png"
            ></source>
            <img
              src="/portfolio/mobile-bg.png"
              className={'w-full object-cover'}
              alt=""
            />
          </picture>
          <div
            className={
              'absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full p-16 backdrop-blur xl:h-[360px] xl:w-[360px] 2xl:h-[500px] 2xl:w-[500px]'
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
        href={PINTEREST_LINK}
        target={'_blank'}
        className={
          'col-span-2 flex flex-col justify-between rounded-20 bg-red p-20 md:col-span-1 xl:p-40'
        }
      >
        <p className={'h6 text-white'}>
          Больше работ <br /> можно посмотреть на:
        </p>
        <img
          src="/portfolio/big-pinerest.svg"
          alt="Pinterest"
          className={'mt-16'}
        />
        <Finger
          className={
            'ml-auto mt-10 h-[30px] w-[30px] text-white xl:h-[40px] xl:w-[40px] 2xl:h-[60px] 2xl:w-[60px]'
          }
        />
      </a>
      <a
        href={BEHANCE_LINK}
        target={'_blank'}
        className={
          'col-span-2 flex flex-col justify-between rounded-20 bg-behance-blue p-20 md:col-span-1 xl:p-40'
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
        <Finger
          className={
            'ml-auto mt-14 h-[30px] w-[30px] text-white xl:h-[40px] xl:w-[40px] 2xl:h-[60px] 2xl:w-[60px]'
          }
        />
      </a>
    </div>
  );
};
