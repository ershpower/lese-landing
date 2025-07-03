import React from 'react';
import TextCard from './text-card';
import ImageCard from './image-card';
import { Dots } from '@/app/icons/dots';
import RetinaImage from '@/app/ui-lit/retina-image';

const images = [
  {
    image1x: '/pp1x.png',
    image2x: '/pp2x.png',
  },
  {
    image1x: '/figma1x.png',
    image2x: '/figma2x.png',
  },
  {
    image1x: '/blender1x.png',
    image2x: '/blender2x.png',
  },
  {
    image1x: '/ps1x.png',
    image2x: '/ps2x.png',
  },
  {
    image1x: '/ai1x.png',
    image2x: '/ai2x.png',
  },
  {
    image1x: '/pr1x.png',
    image2x: '/pr2x.png',
  },
  {
    image1x: '/ae1x.png',
    image2x: '/ae2x.png',
  },
  {
    image1x: '/pdf1x.png',
    image2x: '/pdf2x.png',
  },
  {
    image1x: '/exel1x.png',
    image2x: '/exel2x.png',
  },
  {
    image1x: '/google-slide1x.png',
    image2x: '/google-slide2x.png',
  },
  {
    image1x: '/plus1x.png',
    image2x: '/plus2x.png',
  },
];

function Experience() {
  return (
    <section className={'mt-80 rounded-20 bg-white p-40'}>
      <h3 className={'h3 text-dark-blue mb-40'}>
        Мой опыт для вашей <br /> эффектной презентации
      </h3>
      <div className={'mt-40 grid grid-cols-4 gap-10'}>
        <TextCard
          title={'3'}
          subtitle={'года'}
          text={'Работала ведущим дизайнером в студии презентации'}
        />
        <ImageCard
          text={
            'Дизайнила презентации для топовых российских  компаний и стартапов из разных уголков мира'
          }
          image1x={'/moon1x.png'}
          image2x={'/moon2x.png'}
        />
        <TextCard
          title={'>400'}
          subtitle={'Проектов'}
          text={'Выполнила за 6 лет работы дизайнеров'}
        />

        <div className={'col-span-1 row-span-2 rounded-20 bg-light-blue p-40'}>
          <div className={'flex justify-end text-black'}>
            <Dots />
          </div>
          <p className={'h2 text-dark-blue'}>25+</p>
          <p className={'h5 text-dark-blue mt-10'}>
            Пройденных учебных курсов и изученных программ
          </p>
          <div
            className={
              'mt-40 grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))] gap-10'
            }
          >
            {images.map((img, i) => (
              <RetinaImage
                key={i}
                src1x={img.image1x}
                src2x={img.image2x}
                className={'col-span-1 justify-self-center'}
              />
            ))}
          </div>
        </div>

        <ImageCard
          text={'Красный диплом «Реклама и связи с общественностью»'}
          image1x={'/diplom1x.png'}
          image2x={'/diplom2x.png'}
        />

        <TextCard
          title={'7'}
          subtitle={'лет'}
          text={'Дополнительного художественного образования'}
        />

        <div
          className={
            'bg-attention-gradient relative col-span-1 min-h-[334px] rounded-20 p-40'
          }
        >
          <div className={'flex justify-end overflow-visible text-black'}>
            <Dots />
          </div>
          <p className={'h7 mt-10 text-black'}>
            Всегда соблюдаю дедлайны, <br /> не «пропадаю», строго следую <br />{' '}
            NDA и авторскому праву
          </p>
          <RetinaImage
            src1x={'/ex-cube1x.png'}
            src2x={'/ex-cube2x.png'}
            className={'absolute bottom-0 right-[-30px]'}
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;
