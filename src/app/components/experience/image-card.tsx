import React from 'react';
import { Dots } from '@/app/icons/dots';
import Image from 'next/image';
import RetinaImage from '@/app/ui-lit/retina-image';

interface ImageCardProps {
  text: string;
  image1x: string;
  image2x: string;
}

function ImageCard({ text, image1x, image2x }: ImageCardProps) {
  return (
    <div
      className={
        'relative col-span-1 min-h-[334px] rounded-20 bg-light-blue p-40'
      }
    >
      <div className={'flex justify-end text-black'}>
        <Dots />
      </div>
      <p className={'h7 mt-10 text-black'}>{text}</p>
      <RetinaImage
        src1x={image1x}
        src2x={image2x}
        className={'absolute bottom-0 right-0'}
      />
    </div>
  );
}

export default ImageCard;
