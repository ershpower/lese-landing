import React from 'react';
import { Dots } from '@/app/icons/dots';
import { ArrowRoundedRight } from '@/app/icons/arrow-rounded-right';

interface StepCardProps {
  img: string;
  title: string;
  subtitle: string;
  isAccent?: boolean;
  withArrow?: boolean;
}

export const StepCard = ({
  img,
  subtitle,
  title,
  isAccent,
  withArrow,
}: StepCardProps) => {
  return (
    <div
      className={`relative flex justify-between gap-30 rounded-20 py-20 pl-10 pr-20 ${isAccent ? 'bg-red' : 'bg-light-gray'}`}
    >
      <div className={'flex items-start gap-20'}>
        <img src={img} alt="" className={'h-[40px] w-[32px]'} />
        <div>
          <p className={`h4 ${isAccent ? 'text-white' : 'text-dark-blue'}`}>
            {title}
          </p>
          <p
            className={`h6 ${isAccent ? 'text-white-70' : 'text-black-70'} mt-10`}
          >
            {subtitle}
          </p>
          {isAccent && (
            <p className={'h5 text-white-50 mt-10'}>*В формате “Под ключ”</p>
          )}
        </div>
      </div>
      <div>
        <Dots />
      </div>

      {withArrow && (
        <div
          className={
            'absolute bottom-[-25px] right-[30px] z-10 rounded-full bg-white p-8'
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
};
