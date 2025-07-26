'use client';

import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { OrderButton } from '@/app/ui-lit/order-button';
import { Dots } from '@/app/icons/dots';
import RetinaImage from '@/app/ui-lit/retina-image';
import Burger from '@/app/components/burger';
import { BurgerIcon } from '@/app/icons/burger';

const bullets = ['стартапов', 'спикеров', 'компаний'];

const row1 = ['Коммерческие предложения', 'Pitch Deck', 'Шаблоны'];
const row2 = ['Инвестиционные презентации', 'Консультации', 'Анимация'];
const row3 = ['Презентаций для выступления', 'Бизнес - презентации'];

function HeroBlock() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    document.body.style.overflow = 'hidden';
    setIsOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
    document.body.style.overflow = 'auto';
  };

  const [activeBullet, setActiveBullet] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBullet((prev) => {
        if (prev === 2) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={'flex h-screen flex-col gap-6 overflow-x-hidden p-6'}>
      <div
        className={
          'relative min-h-[625px] flex-auto rounded-20 bg-hero-bg bg-cover bg-no-repeat p-10 pb-40'
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
            <div onClick={handleOpenMenu}>
              <BurgerIcon
                width={28}
                height={28}
                className={'ml-auto mr-6 mt-6'}
              />
            </div>
            <h1 className={'h1 mt-16 text-center text-white'}>
              Оригинально визуализирую сложные идеи
            </h1>

            <div className={'mt-40 flex w-full gap-6'}>
              <p
                className={`h5 flex-auto rounded-20 border border-white bg-white px-12 py-8 text-center text-dark-blue`}
              >
                Для:
              </p>
              {bullets.map((bullet, index) => {
                const classNames =
                  activeBullet === index
                    ? 'bg-white text-dark-blue'
                    : 'bg-transparent text-white opacity-50';
                return (
                  <p
                    key={index}
                    className={`h5 flex-auto rounded-20 border border-white px-12 py-8 text-center ${classNames}`}
                  >
                    {bullet}
                  </p>
                );
              })}
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
      <Burger isOpen={isOpenMenu} onClose={handleCloseMenu} />
    </section>
  );
}

export default HeroBlock;
