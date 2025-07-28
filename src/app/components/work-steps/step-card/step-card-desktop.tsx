import React from 'react';
import { Dots } from '@/app/icons/dots';
import { ArrowRoundedRight } from '@/app/icons/arrow-rounded-right';
import RetinaImage from '@/app/ui-lit/retina-image';

interface StepCardProps {
  img: string;
  title: string | React.ReactNode;
  subtitle: string;
  index: number;
}

function StepCardDesktop({ img, subtitle, title, index }: StepCardProps) {
  const isLast = index === 7;
  const classNames = isLast ? 'col-span-2' : 'col-span-1';
  const isAccent = index === 2;
  const withArrow =
    index === 0 || index === 1 || index === 3 || index === 4 || index === 6;

  return (
    <div className={`relative rounded-20 bg-light-gray p-20 ${classNames}`}>
      {!isAccent && (
        <div className={'absolute right-20 top-20'}>
          <Dots />
        </div>
      )}

      {isAccent && (
        <div
          className={
            'absolute right-10 top-10 rounded-[60px] bg-white px-20 py-8'
          }
        >
          <p className={'h6 text-dark-blue'}>
            *В формате <br />
            “Под ключ”
          </p>
        </div>
      )}

      <img src={img} alt="" className={'h-[40px] w-[55px]'} />
      <p className={`h4 mt-10 text-dark-blue ${isLast ? 'max-w-[234px]' : ''}`}>
        {title}
      </p>
      <p className={`h6 mt-10 text-black-70 ${isLast ? 'max-w-[238px]' : ''}`}>
        {subtitle}
      </p>
      {withArrow && (
        <div
          className={
            'absolute right-[-26px] top-1/2 z-10 -translate-y-1/2 rotate-[270deg] rounded-full bg-white p-8'
          }
        >
          <ArrowRoundedRight
            width={20}
            height={20}
            className={'rotate-90 text-dark-blue'}
          />
        </div>
      )}
    </div>
  );
}

export default StepCardDesktop;
