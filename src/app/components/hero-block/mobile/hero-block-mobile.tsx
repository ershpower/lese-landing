'use client';

import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { OrderButton } from '@/app/ui-lit/order-button';
import { Dots } from '@/app/icons/dots';
import RetinaImage from '@/app/ui-lit/retina-image';
import BurgerMenu from '@/app/components/burger-menu';
import { BurgerIcon } from '@/app/icons/burger';
import Bullets from '@/app/components/hero-block/bullets';

interface HeroBlockMobileProps {
  row1: string[];
  row2: string[];
  row3: string[];
  bullets: string[];
  onOpenMenu: () => void;
}

function HeroBlockMobile({
  row1,
  row2,
  row3,
  bullets,
  onOpenMenu,
}: HeroBlockMobileProps) {
  return (
    <section
      className={'flex h-screen flex-col gap-6 overflow-x-hidden p-6 md:hidden'}
    >
      <div
        className={
          'relative z-30 min-h-[625px] flex-auto rounded-20 bg-brand-gradient p-10 pb-40'
        }
      >
        <div className={'flex h-full flex-col justify-between'}>
          <div className={'absolute bottom-[25%] left-[-10px] w-[110%]'}>
            <div className={'w-full rotate-[-5deg] shadow-marquee'}>
              <Marquee className={'bg-marquee-gradient-1 p-6'}>
                {[...row1, ...row1].map((word, index) => (
                  <div key={index} className={'flex items-center gap-8 pl-8'}>
                    {word}
                    <div
                      className={'h-[4px] w-[4px] rounded-full bg-dark-blue'}
                    ></div>
                  </div>
                ))}
              </Marquee>
            </div>

            <div className={'mt-30 w-full rotate-[5deg] shadow-marquee'}>
              <Marquee
                className={'bg-marquee-gradient-2 p-6'}
                direction={'right'}
              >
                {[...row2, ...row2].map((word, index) => (
                  <div key={index} className={'flex items-center gap-8 pl-8'}>
                    {word}
                    <div
                      className={'h-[4px] w-[4px] rounded-full bg-[#150197]'}
                    ></div>
                  </div>
                ))}
              </Marquee>
            </div>

            <div className={'mt-30 w-full rotate-[-5deg] shadow-marquee'}>
              <Marquee className={'bg-marquee-gradient-1 p-6'} speed={70}>
                {[...row3, ...row3].map((word, index) => (
                  <div key={index} className={'flex items-center gap-8 pl-8'}>
                    {word}
                    <div
                      className={'h-[4px] w-[4px] rounded-full bg-[#150197]'}
                    ></div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>

          <div>
            <div onClick={onOpenMenu}>
              <BurgerIcon
                width={28}
                height={28}
                className={'ml-auto mr-6 mt-6'}
              />
            </div>
            <h1 className={'h1 mt-16 text-center text-white'}>
              Оригинально визуализирую сложные идеи
            </h1>

            <div className={'mt-40'}>
              <Bullets bullets={bullets} />
            </div>
          </div>

          <OrderButton />
        </div>
      </div>
      <div
        className={
          'flex justify-between rounded-20 border border-black-20 bg-transparent p-16'
        }
      >
        <div className={'flex items-center gap-10'}>
          <RetinaImage
            width={60}
            height={60}
            src1x={'/hero/avatar1x.png'}
            src2x={'/hero/avatar2x.png'}
          />
          <div>
            <p className={'h4 text-dark-blue'}>Алеся Ершова</p>
            <p className={'h6 mt-8 text-black-70'}>
              впечатляю аудиторию, привлекаю <br /> инвестиции, увеличиваю
              продажи
            </p>
          </div>
        </div>
        <Dots />
      </div>
    </section>
  );
}

export default HeroBlockMobile;
