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
    <div className={'min-h-[168px] rounded-20 bg-light-gray p-10'}>
      <Dots className={'ml-auto mr-10 mt-10'} />
      <p className={'h2 text-dark-blue'}> 25+</p>
      <p className={'h4 text-dark-blue'}>
        Пройденных учебных курсов и изученных программ
      </p>
      <div className={'mt-10 flex flex-wrap gap-6'}>
        {images.map((img, i) => (
          <RetinaImage
            className={'h-[30px] w-[30px]'}
            key={i}
            src1x={img.img1x}
            src2x={img.img2x}
            alt={img.alt}
          />
        ))}
        <RetinaImage
          className={'h-[30px] w-[36px]'}
          src1x={'/experience/plus1x.png'}
          src2x={'/experience/plus2x.png'}
        />
      </div>
    </div>
  );
};
