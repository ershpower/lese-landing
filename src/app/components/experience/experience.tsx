import React from 'react';
import { CardText } from '@/app/components/experience/card-text';
import { CardImage } from '@/app/components/experience/card-image';
import { Dots } from '@/app/icons/dots';
import { BigCard } from '@/app/components/experience/big-card';
import { ABOUT_ME_ID } from '@/app/consts';

function Experience() {
  return (
    <section className={'section'} id={ABOUT_ME_ID}>
      <h3 className={'h3 px-10 text-dark-blue'}>
        Мой опыт для вашей эффектной презентации
      </h3>

      <div className={'mt-20 grid grid-cols-2 gap-6'}>
        <div className={'col-span-1'}>
          <CardText
            title={'года'}
            bigTitle={'3'}
            subtitle={'Работала ведущим дизайнером в студии презентации'}
          />
        </div>

        <div className="col-span-1">
          <CardImage
            title={
              'Дизайнила презентации для топовых российских  компаний и стартапов из разных уголков мира'
            }
            img={''}
          />
        </div>

        <div className="col-span-1">
          <CardImage
            title={'Красный диплом «Реклама и связи с общественностью»'}
            img={''}
          />
        </div>

        <div className={'col-span-1'}>
          <CardText
            title={'Проектов'}
            bigTitle={'>400'}
            subtitle={'Выполнила за 6 лет работы дизайнеров'}
          />
        </div>

        <div className={'col-span-1'}>
          <CardText
            title={'лет'}
            bigTitle={'7'}
            subtitle={'Дополнительного художественного  образования'}
          />
        </div>

        <div className={'col-span-1'}>
          <div className={'min-h-[168px] rounded-20 bg-hero-bg p-10'}>
            <Dots className={'ml-auto mr-10 mt-10 text-white'} />
            <p className={'h6 mt-28 text-white'}>
              Всегда строго соблюдаю дедлайны, не «пропадаю», строго следую NDA
              и авторскому праву
            </p>
          </div>
        </div>

        <div className={'col-span-2'}>
          <BigCard />
        </div>
      </div>
    </section>
  );
}

export default Experience;
