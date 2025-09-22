import React from 'react';
import { Dots } from '@/app/icons/dots';
import RetinaImage from '@/app/ui-lit/retina-image';

const images = [
  {
    img1x: '/experience/pp1x.png',
    img2x: '/experience/pp2x.png',
    alt: 'Power Point',
  },
  {
    img1x: '/experience/figma1x.png',
    img2x: '/experience/figma2x.png',
    alt: 'Figma',
  },
  {
    img1x: '/experience/pdf1x.png',
    img2x: '/experience/pdf2x.png',
    alt: 'PDF',
  },
  {
    img1x: '/experience/exel1x.png',
    img2x: '/experience/exel2x.png',
    alt: 'Exel',
  },
  {
    img1x: '/experience/ps1x.png',
    img2x: '/experience/ps2x.png',
    alt: 'Photoshop',
  },
  {
    img1x: '/experience/ai1x.png',
    img2x: '/experience/ai2x.png',
    alt: '',
  },
  {
    img1x: '/experience/blender1x.png',
    img2x: '/experience/blender2x.png',
    alt: 'Blender',
  },
];

export const BigCard = () => {
  return (
    <div
      className={
        'relative flex h-full min-h-[188px] flex-col justify-center rounded-20 bg-light-gray p-10 lg:p-14 xl:min-h-[220px] xl:p-20 2xl:h-[320px] 2xl:p-40'
      }
    >
      <div>
        <p className={'h2 text-dark-blue'}> 25+ </p>
        <p className={'h4 text-dark-blue'}>
          Пройденных учебных курсов <br /> и изученных программ
        </p>
        <div className={'mt-10 flex flex-wrap gap-6'}>
          {images.map((img, i) => (
            <RetinaImage
              className={
                'h-[30px] w-[30px] xl:h-[40px] xl:w-[40px] 2xl:h-[60px] 2xl:w-[60px]'
              }
              key={i}
              src1x={img.img1x}
              src2x={img.img2x}
              alt={img.alt}
            />
          ))}
          <RetinaImage
            className={
              'h-[30px] w-[36px] xl:h-[40px] xl:w-[50px] 2xl:h-[60px] 2xl:w-[70px]'
            }
            src1x={'/experience/plus1x.png'}
            src2x={'/experience/plus2x.png'}
          />
        </div>
      </div>
    </div>
  );
};
