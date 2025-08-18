import React from 'react';
import { Dots } from '@/app/icons/dots';
import RetinaImage from '@/app/ui-lit/retina-image';

interface CardImageProps {
  title: string | React.ReactNode;
  src1x: string;
  src2x: string;
}

export const CardImage = ({ title, src2x, src1x }: CardImageProps) => {
  return (
    <div
      className={
        'relative h-full min-h-[168px] resize rounded-20 bg-light-gray p-10 lg:min-h-[220px] lg:p-14 xl:p-20 2xl:h-[320px] 2xl:p-40'
      }
    >
      <Dots className={'absolute right-20 top-20'} />
      <p className={'h6 mt-30 text-black-70'}>{title}</p>
      <RetinaImage
        className={
          'absolute bottom-0 right-0 w-[150px] md:w-[130px] lg:w-full xl:w-[230px] 2xl:w-[330px]'
        }
        src1x={src1x}
        src2x={src2x}
        alt=""
      />
    </div>
  );
};
