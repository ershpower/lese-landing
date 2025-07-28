import React from 'react';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';

interface AccordionCardProps {
  title: string;
  inner: React.ReactNode;
}

export const AccordionCard = ({ inner, title }: AccordionCardProps) => {
  return (
    <div className={'rounded-20 bg-light-gray p-20'}>
      <div className={'flex items-center justify-between pb-20'}>
        <p className={'h4 text-dark-blue'}>{title}</p>
        <ArrowRightUp
          width={16}
          height={16}
          className={'rotate-90 text-dark-blue'}
        />
      </div>
      {inner}
    </div>
  );
};
