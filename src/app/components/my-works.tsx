import React from 'react';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';
import { Finger } from '@/app/icons/finger';
import RetinaImage from '@/app/ui-lit/retina-image';

function MyWorks() {
  return (
    <section className={'mt-f80 grid grid-cols-4 gap-10'}>
      <div
        className={
          'p-f40 relative col-span-4 row-span-2 overflow-hidden rounded-20 bg-white xl:col-span-3'
        }
      >
        <div className={'flex justify-between gap-10'}>
          <h3 className={'h3 text-dark-blue'}>
            Создам презентацию, <br />
            даже если у вас сплошной <br /> текст и море графиков
          </h3>
          <div className={'bg-dark-gradient p-f40 h-[12.500vw] rounded-20'}>
            <p className={'h3 text-white'}>6000+</p>
            <p className={'h6 mt-f10 text-white'}>
              Слайдов <br /> отрисованно*
            </p>
            <p className={'h9 text text-white-80 mt-f20'}>
              *И не только слайдов)
            </p>
          </div>
        </div>
        <RetinaImage
          // style={{ maxWidth: 'unset' }}
          className={'absolute left-[-190px] rotate-[-3.37deg] xl:top-[35%]'}
          src1x={'/all-slides1x.png'}
          src2x={'/all-slides2x.png'}
        />
      </div>
      <div className={'col-span-2 xl:col-span-1'}>
        <a
          href={'#'}
          target={'_blank'}
          className={
            'bg-red p-f40 flex h-[21.354vw] flex-col justify-between rounded-20'
          }
        >
          <div className={'flex justify-between gap-10 text-white'}>
            <p className={'h7'}>
              Больше работ <br /> можно посмотреть на:{' '}
            </p>
            <ArrowRightUp width={20} height={20} />
          </div>
          <img src="/big-pinerest.svg" alt="" />
          <div className={'ml-auto h-[4.167vw] w-[4.167vw]'}>
            <Finger width={'100%'} height={'100%'} />
          </div>
        </a>
      </div>
      <div className={'col-span-2 xl:col-span-1'}>
        <a
          href={'#'}
          target={'_blank'}
          className={
            'bg-blue-behance p-f40 flex h-[21.354vw] flex-col justify-between rounded-20'
          }
        >
          <div className={'flex justify-between gap-10 text-white'}>
            <p className={'h7'}>
              Подробные кейсы <br /> можно посмотреть на:
            </p>
            <ArrowRightUp width={20} height={20} />
          </div>
          <img src="/big-behance.svg" alt="" />
          <div className={'ml-auto h-[4.167vw] w-[4.167vw]'}>
            <Finger width={'100%'} height={'100%'} />
          </div>
        </a>
      </div>
    </section>
  );
}

export default MyWorks;
