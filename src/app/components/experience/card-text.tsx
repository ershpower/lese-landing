import React from 'react';
import { Dots } from '@/app/icons/dots';

interface CardTextProps {
  bigTitle: string;
  title: string;
  subtitle: string;
}
export const CardText = ({ bigTitle, title, subtitle }: CardTextProps) => {
  return (
    <div className={'bg-light-gray min-h-[168px] rounded-20 p-10'}>
      <Dots className={'ml-auto mr-10 mt-10'} />
      <p className={'text-dark-blue mt-16'}>
        <span className={'h2'}>{bigTitle}</span>
        {bigTitle === '>400' && <br />}
        <span className={'h4 text-dark-blue'}>{title}</span>
      </p>
      <p className={'h6 text-black-70 mt-10'}>{subtitle}</p>
    </div>
  );
};
