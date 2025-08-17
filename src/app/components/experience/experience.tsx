import React from 'react';
import { CardText } from '@/app/components/experience/card-text';
import { CardImage } from '@/app/components/experience/card-image';
import { Dots } from '@/app/icons/dots';
import { BigCard } from '@/app/components/experience/big-card';
import { ABOUT_ME_ID } from '@/app/consts';
import Title from '@/app/ui-lit/title';

function Experience() {
  return (
    <section className={'section'} id={ABOUT_ME_ID}>
      <Title
        title={
          <span>
            Мой опыт для вашей <br className={'hidden lg:block'} /> эффектной
            презентации
          </span>
        }
      />

      <div
        className={
          'mt-20 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10 2xl:mt-40'
        }
      >
        <div className={'order-1 col-span-1'}>
          <CardText
            title={'года'}
            bigTitle={'3'}
            subtitle={<>Работала ведущим дизайнером в студии презентации</>}
          />
        </div>

        <div className="order-2 col-span-1">
          <CardImage
            title={
              <>
                Дизайнила презентации для топовых российских компаний и
                стартапов <br className={'2xl:hidden'} /> из разных уголков мира
              </>
            }
            img={'/experience/moon.png'}
          />
        </div>

        <div className="order-3 col-span-1 md:order-5">
          <CardImage
            title={
              <>
                Красный диплом <br /> «Реклама и связи <br /> с общественностью»
              </>
            }
            img={'/experience/diplom.png'}
          />
        </div>

        <div className={'order-4 col-span-1 md:order-6'}>
          <CardText
            title={'Проектов'}
            bigTitle={'>400'}
            subtitle={
              <>
                Выполнила за 6 лет <br /> работы дизайнеров
              </>
            }
          />
        </div>

        <div className={'order-5 col-span-1 md:order-3'}>
          <CardText
            title={'лет'}
            bigTitle={'7'}
            subtitle={
              <>
                Дополнительного <br /> художественного <br /> образования
              </>
            }
          />
        </div>

        <div className={'order-6 col-span-1 md:order-4'}>
          <div
            className={
              'relative flex h-full min-h-[168px] items-center rounded-20 bg-brand-gradient p-10 xl:min-h-[220px] xl:p-20 2xl:h-[320px] 2xl:p-40'
            }
          >
            <Dots
              className={'top absolute right-20 top-20 ml-auto text-white'}
            />
            <div>
              <p className={'h6 text-white'}>
                Всегда соблюдаю дедлайны, не «пропадаю», строго следую NDA и
                авторскому праву
              </p>
            </div>
          </div>
        </div>

        <div className={'order-7 col-span-2'}>
          <BigCard />
        </div>
      </div>
    </section>
  );
}

export default Experience;
