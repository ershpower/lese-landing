import React from 'react';
import { Dots } from '@/app/icons/dots';
import RetinaImage from '@/app/ui-lit/retina-image';

interface CardImageProps {
  title: string;
  img: string;
}

export const CardImage = ({ title, img }: CardImageProps) => {
  return (
    <div className={'bg-light-gray min-h-[168px] rounded-20 p-10'}>
      <Dots className={'ml-auto mr-10 mt-10'} />
      <p className={'h6 text-black-70 mt-16'}>{title}</p>
      {/*<RetinaImage src1x={} src2x={} />*/}
    </div>
  );
};
