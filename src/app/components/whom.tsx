import React from 'react';
import { Accordion } from '@/app/ui-lit/accordion';
import { Info } from '@/app/icons/info';
import { FOR_WHO_ID } from '@/app/consts';
import { AccordionCard } from '@/app/ui-lit/accordion-card';
import Title from '@/app/ui-lit/title';

const items = [
  {
    title: 'Стартапам',
    inner: (
      <>
        <p
          className={
            'h6 border-t border-black-10 py-10 text-black-70 md:border-dark-blue 2xl:py-16'
          }
        >
          — Привлекать инвестиции
        </p>
        <p
          className={
            'h6 border-t border-black-10 py-10 text-black-70 2xl:py-16'
          }
        >
          — Раскрывать смысл идеи для инвесторов
        </p>
        <p
          className={
            'h6 border-t border-black-10 py-10 text-black-70 2xl:py-16'
          }
        >
          — Транслировать надёжность проекта
        </p>
      </>
    ),
  },
  {
    title: 'Компаниям',
    inner: (
      <>
        <p
          className={
            'h6 border-t border-black-10 py-10 text-black-70 md:border-dark-blue 2xl:py-16'
          }
        >
          — Увеличивать продажи
        </p>
        <p
          className={
            'h6 border-t border-black-10 py-10 text-black-70 2xl:py-16'
          }
        >
          — Тестировать спрос
        </p>
        <p
          className={
            'h6 border-t border-black-10 py-10 text-black-70 2xl:py-16'
          }
        >
          — Запускать новый/ую продукт/ услугу
        </p>
        <p
          className={
            'h6 border-t border-black-10 py-10 text-black-70 2xl:py-16'
          }
        >
          — Заключать соглашения о бизнес партнёрстве
        </p>
      </>
    ),
  },
  {
    title: 'Спикерам',
    inner: (
      <>
        <p
          className={
            'h6 border-t border-black-10 py-10 text-black-70 md:border-dark-blue 2xl:py-16'
          }
        >
          — Усиливать личный бренд
        </p>
        <p
          className={
            'h6 border-t border-black-10 py-10 text-black-70 2xl:py-16'
          }
        >
          — Удерживать фокус внимания аудитории
        </p>
        <p
          className={
            'h6 border-t border-black-10 py-10 text-black-70 2xl:py-16'
          }
        >
          — Активно взаимодействовать созрителем
        </p>{' '}
        <p
          className={
            'h6 border-t border-black-10 py-10 text-black-70 2xl:py-16'
          }
        >
          — Впечатлять аудиторию
        </p>
      </>
    ),
  },
  {
    title: 'Универсально',
    isAccent: true,
    inner: (
      <div>
        <p className={'h6 border-b border-white-30 pb-10 text-white'}>
          Разрабатываю индивидуальные шаблоны с актуальным дизайном для
          самостоятельного редактирования и независимости от времени и работы
          дизайнера
        </p>
        <div className={'mt-10 flex gap-10'}>
          <div className={'text-white-70'}>
            <Info />
          </div>
          <p className={'h6 text-white-70'}>
            Идеальное решение для тех, кто не может тратить крупные бюджеты,и
            хочет быстро обновить старый дизайн
          </p>
        </div>
      </div>
    ),
  },
];

export const Whom = () => {
  return (
    <section className={'section'} id={FOR_WHO_ID}>
      <Title
        title={
          <>
            Мои услуги для тех, кто нуждается
            <br className={'hidden md:block'} /> в эффективных решениях
          </>
        }
      />
      <p className={'h5 mb-20 mt-20 pl-10 text-black-70 2xl:pl-40'}>
        Работаю в различных дизайн-стилях. Помогаю:
      </p>
      <div className={'block md:hidden'}>
        <Accordion items={items} />
      </div>
      <div className={'hidden grid-cols-2 gap-10 md:grid'}>
        {items.map((item, index) => (
          <AccordionCard
            key={index}
            title={item.title}
            inner={item.inner}
            isAccent={item.isAccent}
          />
        ))}
      </div>
    </section>
  );
};
