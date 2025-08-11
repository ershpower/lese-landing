import React from 'react';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';

interface AccordionCardProps {
  title: string;
  subtitle?: string;
  inner: React.ReactNode;
}

export const AccordionCard = ({
  inner,
  title,
  subtitle,
}: AccordionCardProps) => {
  return (
    <div className={'rounded-20 bg-light-gray p-20'}>
      <div className={'flex items-center justify-between pb-20'}>
        <div>
          <p className={'h4 text-dark-blue'}>{title}</p>
          {subtitle && (
            <p className={'h6 mt-12 h-[34px] text-black-70'}>{subtitle}</p>
          )}
        </div>
        <div>
          <ArrowRightUp
            width={16}
            height={16}
            className={'rotate-90 text-dark-blue'}
          />
        </div>
      </div>
      {inner}
    </div>
  );
};
