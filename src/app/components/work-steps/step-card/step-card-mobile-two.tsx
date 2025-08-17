import React from 'react';
import { Dots } from '@/app/icons/dots';
import { ArrowRoundedRight } from '@/app/icons/arrow-rounded-right';

interface StepCardProps {
  img: string;
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  isAccent?: boolean;
  withArrow?: boolean;
}

export const StepCardMobileTwo = ({
  img,
  subtitle,
  title,
  isAccent,
  withArrow,
}: StepCardProps) => {
  return (
    <div
      className={`relative flex justify-between gap-30 rounded-20 py-20 pl-10 pr-10 ${isAccent ? 'bg-brand-gradient' : 'bg-light-gray'}`}
    >
      <div className={'flex items-start gap-10'}>
        <img src={img} alt="" className={'h-[40px] w-[55px]'} />
        <div>
          <p
            className={`h4 max-w-[270px] md:max-w-[none] ${isAccent ? 'text-white' : 'text-dark-blue'}`}
          >
            {title}
          </p>
          <p
            className={`h6 w-[260px] md:max-w-[none] ${isAccent ? 'text-white-70' : 'text-black-70'} mt-10`}
          >
            {subtitle}
          </p>
          {isAccent && (
            <p className={'h6 mt-10 text-white-50'}>*В формате “Под ключ”</p>
          )}
        </div>
      </div>
      {!isAccent && (
        <div className={'absolute right-20 top-20'}>
          <Dots />
        </div>
      )}

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
