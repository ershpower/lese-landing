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
      <>Дизайн на вымышленном тексте для самостоятельного редактирования</>
    ),
    inner: (
      <div className={'border-t border-black-10 pt-10'}>
        <div className={'flex items-end gap-10'}>
          <span className={'h3 text-dark-blue'}>от</span>
          <span className={'h2 text-dark-blue'}>25 000₽</span>
        </div>
        <div className={'mt-10 flex items-center gap-6 text-black-70'}>
          <Clock className={'text-icon'} />
          <span className={'h6'}>Выполнение от 7 дней (30 слайдов)</span>
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
          <span className={'h3 text-dark-blue'}>от</span>
          <span className={'h2 text-dark-blue'}>30 000₽</span>
        </div>
        <div className={'mt-10 flex items-center gap-6 text-black-70'}>
          <Clock className={'text-icon'} />
          <span className={'h6'}>Выполнение от 3 дней (10-15 слайдов)</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Под ключ',
    subtitle: 'Структура, текст, дизайн',
    isAccent: true,
    inner: (
      <div className={'border-t border-white-30 pt-10'}>
        <div className={'flex items-end gap-10'}>
          <span className={'h3 text-white'}>от</span>
          <span className={'h2 text-white'}>45 000₽</span>
        </div>
        <div className={'mt-10 flex items-center gap-6 text-white-70'}>
          <Clock className={'text-icon'} />
          <span className={'h6'}>Выполнение от 5 дней (10-15 слайдов)</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Консультация',
    subtitle: (
      <>
        Для дизайнеров и других смежных специалистов. Обсуждаем любой
        интересующий вас вопрос и разбираем ваши работы
      </>
    ),
    inner: (
      <div className={'border-t border-black-10 pt-10'}>
        <div className={'flex items-end gap-10'}>
          <span className={'h2 text-dark-blue'}>3000₽</span>
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
      <div className={'mb-40 gap-60 md:flex md:pl-10 xl:mb-40 2xl:pl-40'}>
        <p className={'h5 mt-20 pl-10 text-black-70'}>
          Итоговая цена рассчитывается <br /> индивидуально на основе объема,{' '}
          <br />
          сложности и специфики задачи
        </p>
        <p className={'h5 mt-20 pl-10 text-black-70'}>
          Больше деталей, точные сроки и стоимость <br /> работы можно узнать
          после обсуждения <br /> и составления полной сметы вашего проекта
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
        <div className={'text-black-20'}>
          <Info />
        </div>
        <p className={'h6'}>
          Время работы рассчитывается в рабочих будних <br /> днях (пн – пт) и
          начинается с момента получения обратной связи от клиента
        </p>
      </div>
    </section>
  );
}

export default Price;
