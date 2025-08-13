import React from 'react';
import { Dots } from '@/app/icons/dots';

interface CardTextProps {
  bigTitle: string;
  title: string;
  subtitle: string | React.ReactNode;
}
export const CardText = ({ bigTitle, title, subtitle }: CardTextProps) => {
  return (
    <div
      className={
        'relative flex min-h-[168px] items-center rounded-20 bg-light-gray p-10'
      }
    >
      <Dots className={'absolute right-20 top-20'} />
      <div>
        <p className={'text-dark-blue'}>
          <span className={'h2'}>{bigTitle}</span>
          {bigTitle === '>400' && <br />}
          <span className={'h4 text-dark-blue'}>{title}</span>
        </p>
        <p className={'h6 mt-4 text-black-70'}>{subtitle}</p>
      </div>
    </div>
  );
};
