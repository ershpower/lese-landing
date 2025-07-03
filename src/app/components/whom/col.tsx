import React from 'react';
import { Check } from '@/app/icons/check';

interface ColProps {
  title: string;
  items: string[];
}

export const Col = ({ title, items }: ColProps) => {
  return (
    <div className={'col-span-1 overflow-hidden rounded-20 bg-light-blue'}>
      <div className={'p-f40'}>
        <p className={'h5 text-dark-blue'}>{title}</p>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className={
            'bg-split-light-blue-gradient flex items-center gap-16 border-t border-b-color px-f40 py-f30'
          }
        >
          <div>
            <Check />
          </div>
          <p className={'h7 text-gray'}>{item}</p>
        </div>
      ))}
      <div
        className={
          'bg-split-light-blue-gradient border-t border-b-color px-f40 py-f30'
        }
      ></div>
    </div>
  );
};
