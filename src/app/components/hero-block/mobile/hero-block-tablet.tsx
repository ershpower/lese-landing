import React from 'react';
import Bullets from '@/app/components/hero-block/bullets';
import Marquee from 'react-fast-marquee';
import PersonInfo from '@/app/ui-lit/person-info';
import OrderButtonDesktop from '@/app/ui-lit/order-button-desktop';

interface HeroBlockTabletProps {
  row1: string[];
  row2: string[];
  bullets: string[];
}

function HeroBlockTablet({ bullets, row2, row1 }: HeroBlockTabletProps) {
  return (
    <section className={'hidden h-screen min-h-[510px] p-10 md:block'}>
      <div className={'grid h-full grid-cols-4 gap-10'}>
        {/*left*/}
        <div
          className={
            'relative col-span-3 flex flex-col items-center rounded-20 bg-brand-gradient md:overflow-hidden'
          }
        >
          <h2 className={'h1 mt-60 text-center text-white'}>
            Оригинально <br /> визуализирую <br /> сложные идеи
          </h2>
          <div className={'mt-30'}>
            <Bullets bullets={bullets} />
          </div>

          <div
            className={
              'absolute bottom-[7%] left-[-10px] w-[103%] xl:bottom-[10%]'
            }
          >
            <div className={'w-full rotate-[-5deg] shadow-marquee'}>
              <Marquee className={'bg-marquee-gradient-1 p-6 xl:p-14'}>
                {[...row1, ...row1, ...row1, ...row1, ...row1, ...row1].map(
                  (word, index) => (
                    <div
                      key={index}
                      className={'h6 flex items-center gap-8 pl-8'}
                    >
                      {word}
                      <div
                        className={'h-[4px] w-[4px] rounded-full bg-dark-blue'}
                      ></div>
                    </div>
                  ),
                )}
              </Marquee>
            </div>

            <div className={'mt-30 w-full rotate-[5deg] shadow-marquee'}>
              <Marquee
                className={'bg-marquee-gradient-2 p-6 xl:p-14'}
                direction={'right'}
              >
                {[...row2, ...row2, ...row2, ...row2, ...row2].map(
                  (word, index) => (
                    <div
                      key={index}
                      className={'h6 flex items-center gap-8 pl-8'}
                    >
                      {word}
                      <div
                        className={'h-[4px] w-[4px] rounded-full bg-[#150197]'}
                      ></div>
                    </div>
                  ),
                )}
              </Marquee>
            </div>
          </div>
        </div>
        {/*right */}
        <div className={'col-span-1 flex h-full flex-col gap-10'}>
          <div className={'flex-auto'}>
            <PersonInfo />
          </div>
          <div>
            <OrderButtonDesktop />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBlockTablet;
