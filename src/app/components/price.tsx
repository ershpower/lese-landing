import React from 'react';
import { Clock } from '@/app/icons/clock';
import { Accordion } from '@/app/ui-lit/accordion';
import { Info } from '@/app/icons/info';
import { PRICE_ID } from '@/app/consts';
import { AccordionCard } from '@/app/ui-lit/accordion-card';
import Title from '@/app/ui-lit/title';

const items = [
  {
    title: 'Разработка шаблона',
    subtitle: (
      <>
        Дизайн на вымышленном тексте <br />
        для самостоятельного редактирования
      </>
    ),
    inner: (
      <div className={'border-t border-black-10 pt-10'}>
        <div className={'flex items-end gap-10'}>
          <span className={'text-dark-blue'}>от</span>
          <span className={'h2 text-dark-blue'}>10 000₽</span>
        </div>
        <div className={'mt-10 flex items-center gap-6 text-black-70'}>
          <Clock className={'text-icon'} />
          <span className={'h6'}>Срок выполнения от 7 дней (30 слайдов)</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Только дизайн',
    subtitle: 'Без редактуры текстов и структуры',
    inner: (
      <div className={'border-t border-black-10 pt-10'}>
        <div className={'flex items-end gap-10'}>
          <span className={'text-dark-blue'}>от</span>
          <span className={'h2 text-dark-blue'}>20 000₽</span>
        </div>
        <div className={'mt-10 flex items-center gap-6 text-black-70'}>
          <Clock className={'text-icon'} />
          <span className={'h6'}>
            Срок выполнения от 2 дней (15-20 слайдов)
          </span>
        </div>
      </div>
    ),
  },
  {
    title: 'Под ключ',
    subtitle: 'Структура, текст, дизайн',
    isAccent: true,
    inner: (
      <div className={'border-white-10 border-t pt-10'}>
        <div className={'flex items-end gap-10'}>
          <span className={'text-white'}>от</span>
          <span className={'h2 text-white'}>35 000₽</span>
        </div>
        <div className={'mt-10 flex items-center gap-6 text-white-70'}>
          <Clock className={'text-icon'} />
          <span className={'h6'}>
            Срок выполнения от 4 дней (10-15 слайдов)
          </span>
        </div>
      </div>
    ),
  },
  {
    title: 'Консультация',
    subtitle: (
      <>
        Для дизайнеров и других смежных <br /> специалистов. Обсуждаем любой
        интересующий <br /> вас вопрос и разбираем ваши работы
      </>
    ),
    inner: (
      <div className={'border-t border-black-10 pt-10'}>
        <div className={'flex items-end gap-10'}>
          <span className={'h2 text-dark-blue'}>2000₽</span>
        </div>
        <div className={'mt-10 flex items-center gap-6 text-black-70'}>
          <Clock className={'text-icon'} />
          <span className={'h6'}>Продолжительность 1,5 - 2 часа</span>
        </div>
      </div>
    ),
  },
];

function Price() {
  return (
    <section className={'section'} id={PRICE_ID}>
      <Title title={'Стоимость'} />
      <div className={'gap-60 md:flex md:pl-10'}>
        <p className={'h5 mt-20 pl-10 text-black-70 md:max-w-[300px]'}>
          Итоговая цена рассчитывается <br /> индивидуально на основе объема,{' '}
          <br />
          сложности и специфики задачи
        </p>
        <p className={'h5 mb-20 mt-20 pl-10 text-black-70 md:max-w-[350px]'}>
          Больше деталей, точные сроки и стоимость{' '}
          <br className={'md:hidden'} /> работы можно узнать после обсуждения{' '}
          <br className={'md:hidden'} /> и составления полной сметы вашего
          проекта
        </p>
      </div>
      <div className={'block md:hidden'}>
        <Accordion items={items} />
      </div>
      <div className={'hidden grid-cols-2 gap-10 md:grid'}>
        {items.map((item, index) => (
          <AccordionCard
            key={index}
            title={item.title}
            inner={item.inner}
            subtitle={item.subtitle}
            isAccent={item.isAccent}
          />
        ))}
      </div>
      <div className={'mt-10 flex items-start gap-6 text-black-50 md:hidden'}>
        <div>
          <Info />
        </div>
        <p className={'h6'}>
          Время работы рассчитывается в рабочих будних днях (пн – пт) и
          начинается с момента получения обратной связи от клиента
        </p>
      </div>
    </section>
  );
}

export default Price;
