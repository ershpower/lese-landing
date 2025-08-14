import React from 'react';
import { Dots } from '@/app/icons/dots';

interface CardImageProps {
  title: string | React.ReactNode;
  img: string;
}

export const CardImage = ({ title, img }: CardImageProps) => {
  return (
    <div
      className={
        'relative h-full min-h-[168px] resize rounded-20 bg-light-gray p-10 lg:min-h-[220px] xl:p-20 2xl:h-[320px] 2xl:p-40'
      }
    >
      <Dots className={'absolute right-20 top-20'} />
      <p className={'h6 mt-30 text-black-70'}>{title}</p>
      <img
        className={'absolute bottom-0 right-0 xl:w-[230px] 2xl:w-[330px]'}
        src={img}
        alt=""
      />
    </div>
  );
};
