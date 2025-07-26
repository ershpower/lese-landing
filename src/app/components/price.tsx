import React from 'react';
import { Clock } from '@/app/icons/clock';
import { Accordion } from '@/app/ui-lit/accordion';
import { Info } from '@/app/icons/info';
import { PRICE_ID } from '@/app/consts';

const items = [
  {
    title: 'Разработка шаблона',
    subtitle:
      'Дизайн на вымышленном тексте  для самостоятельного редактирования',
    inner: (
      <div className={'border-t border-black-10 pt-20'}>
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
      <div className={'border-t border-black-10 pt-20'}>
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
    inner: (
      <div className={'border-t border-black-10 pt-20'}>
        <div className={'flex items-end gap-10'}>
          <span className={'text-dark-blue'}>от</span>
          <span className={'h2 text-dark-blue'}>35 000₽</span>
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
    title: 'Консультация',
    subtitle:
      'Для дизайнеров и других смежных  специалистов. Обсуждаем любой интересующий вас вопрос и разбираем ваши работы',
    inner: (
      <div className={'border-t border-black-10 pt-20'}>
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
      <p className={'h3 text-dark-blue'}>Цена</p>
      <p className={'h5 mt-20 text-black-70'}>
        Итоговая стоимость рассчитывается индивидуально на основе объема,
        сложности и специфики задачи
      </p>
      <p className={'h5 mb-20 mt-20 text-black-70'}>
        Больше деталей, точные сроки и стоимость работы можно узнать после
        обсуждения  и составления полной сметы вашего проекта
      </p>
      <Accordion items={items} />
      <div className={'text-black-50 mt-10 flex items-start gap-6'}>
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
