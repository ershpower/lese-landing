import React from 'react';
import { FAQ_ID } from '@/app/consts';
import { Question } from '@/app/icons/question';

function Faq() {
  return (
    <section className={'section'} id={FAQ_ID}>
      <p className={'h3 text-dark-blue'}>
        Предложу решение  для любой задачи в установленные сроки
      </p>
      <div className={'mt-20'}>
        <div
          className={'relative overflow-hidden rounded-20 bg-light-gray p-20'}
        >
          {/*visible*/}
          <div
            className={
              'relative left-0 top-0 flex items-center justify-between gap-10'
            }
          >
            <p className={'h4 text-dark-blue'}>
              Если бюджет <br /> ограничен
            </p>
            <div className={'text-dark-blue'}>
              <Question />
            </div>
          </div>
          {/*hidden*/}
          <div className={'absolute left-[100%] top-0'}>
            <p className={'h6 text-black-70'}>
              Предлагаю несколько вариантов визуализации в зависимости от вашего
              бюджета
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
