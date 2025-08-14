import React from 'react';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';

interface AccordionCardProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  inner: React.ReactNode;
  isAccent?: boolean;
}

export const AccordionCard = ({
  inner,
  title,
  subtitle,
  isAccent,
}: AccordionCardProps) => {
  return (
    <div
      className={`rounded-20 p-20 xl:p-30 2xl:p-40 ${isAccent ? 'bg-brand-gradient' : 'bg-light-gray'}`}
    >
      <div className={'flex items-start justify-between pb-20'}>
        <div>
          <p className={`h4 ${isAccent ? 'text-white' : 'text-dark-blue'}`}>
            {title}
          </p>
          {subtitle && (
            <p
              className={`h6 mt-12 h-[34px] xl:h-[60px] ${isAccent ? 'text-white-70' : 'text-black-70'} `}
            >
              {subtitle}
            </p>
          )}
        </div>
        <ArrowRightUp
          className={`h-[16px] w-[16px] rotate-90 2xl:h-[24px] 2xl:w-[24px] ${isAccent ? 'text-white' : 'text-dark-blue'}`}
        />
      </div>
      {inner}
    </div>
  );
};
