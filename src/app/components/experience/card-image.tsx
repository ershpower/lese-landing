import React from 'react';
import { Dots } from '@/app/icons/dots';

interface CardImageProps {
  title: string | React.ReactNode;
  img: string;
}

export const CardImage = ({ title, img }: CardImageProps) => {
  return (
    <div
      className={'relative min-h-[168px] resize rounded-20 bg-light-gray p-10'}
    >
      <Dots className={'absolute right-20 top-20'} />
      <p className={'h6 mt-30 text-black-70'}>{title}</p>
      <img className={'absolute bottom-0 right-0'} src={img} alt="f" />
    </div>
  );
};
