import React from 'react';

import { ArrowRoundedRight } from '@/app/icons/arrow-rounded-right';

interface StepCardProps {
  img: string;
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  index: number;
}

function StepCardDesktop({ img, subtitle, title, index }: StepCardProps) {
  const isLast = index === 7;
  const classNames = isLast ? 'col-span-2' : 'col-span-1';
  const isAccent = index === 2;
  const withArrow =
    index === 0 || index === 1 || index === 3 || index === 4 || index === 6;

  return (
    <div
      className={`relative rounded-20 p-20 md:h-[260px] xl:h-[280px] xl:p-30 2xl:min-h-[350px] 2xl:p-50 ${isAccent ? 'bg-brand-gradient' : 'bg-light-gray'} ${classNames}`}
    >
      {isAccent && (
        <div
          className={
            'absolute right-10 top-10 rounded-[60px] bg-white px-24 py-4 xl:right-20 xl:top-20'
          }
        >
          <p className={'h6 text-dark-blue'}>
            *В формате <br /> “Под ключ”
          </p>
        </div>
      )}

      <img
        src={img}
        alt=""
        className={
          'h-[40px] w-[55px] xl:h-[50px] xl:w-[65px] 2xl:h-[70px] 2xl:w-[85px]'
        }
      />
      <p
        className={`h4 mt-10 ${isLast ? 'max-w-[234px] xl:max-w-[390px] 2xl:max-w-[500px]' : ''} ${isAccent ? 'text-white' : 'text-dark-blue'}`}
      >
        {title}
      </p>
      <p
        className={`h6 mt-10 text-black-70 ${isLast ? 'max-w-[238px] xl:max-w-[400px] 2xl:max-w-[700px]' : ''} ${isAccent ? 'text-white-70' : 'text-black-70'}`}
      >
        {subtitle}
      </p>
      {withArrow && (
        <div
          className={
            'absolute right-[-26px] top-1/2 z-10 -translate-y-1/2 rotate-[270deg] rounded-full bg-white p-8'
          }
        >
          <ArrowRoundedRight
            className={
              'h-[20px] w-[20px] rotate-90 text-dark-blue xl:h-[30px] xl:w-[30px] 2xl:h-[40px] 2xl:w-[40px]'
            }
          />
        </div>
      )}
    </div>
  );
}

export default StepCardDesktop;
