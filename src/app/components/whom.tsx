import React from 'react';
import { Accordion } from '@/app/ui-lit/accordion';
import { Info } from '@/app/icons/info';

const items = [
  {
    title: 'Стартапам',
    inner: (
      <>
        <p className={'h6 border-t border-black-10 py-10 text-black-70'}>
          — Привлекать инвестиции
        </p>
        <p className={'h6 border-t border-black-10 py-10 text-black-70'}>
          — Раскрывать смысл идеи для инвесторов
        </p>
        <p className={'h6 border-t border-black-10 py-10 text-black-70'}>
          — Транслировать надёжность проекта
        </p>
      </>
    ),
  },
  {
    title: 'Компаниям',
    inner: (
      <>
        <p className={'h6 border-t border-black-10 py-10 text-black-70'}>
          — Увеличивать продажи
        </p>
        <p className={'h6 border-t border-black-10 py-10 text-black-70'}>
          — Тестировать спрос
        </p>
        <p className={'h6 border-t border-black-10 py-10 text-black-70'}>
          — Запускать новый/ую продукт/ услугу
        </p>
        <p className={'h6 border-t border-black-10 py-10 text-black-70'}>
          — Заключать соглашения о бизнес партнёрстве
        </p>
      </>
    ),
  },
  {
    title: 'Спикерам',
    inner: (
      <>
        <p className={'h6 border-t border-black-10 py-10 text-black-70'}>
          — Усиливать личный бренд
        </p>
        <p className={'h6 border-t border-black-10 py-10 text-black-70'}>
          — Удерживать фокус внимания аудитории
        </p>
        <p className={'h6 border-t border-black-10 py-10 text-black-70'}>
          — Активно взаимодействовать созрителем
        </p>{' '}
        <p className={'h6 border-t border-black-10 py-10 text-black-70'}>
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
        <p className={'h6 border-b border-black-10 pb-10 text-black-70'}>
          Разрабатываю индивидуальные шаблоны с актуальным дизайном для
          самостоятельного редактирования и независимости от времени и работы
          дизайнера
        </p>
        <div className={'mt-10 flex gap-10'}>
          <div>
            <Info />
          </div>
          <p className={'h6 text-black-30'}>
            Идеальное решение для тех, кто не может тратить крупные бюджеты,и
            хочет быстро обновить старый дизайн
          </p>
        </div>
      </div>
    ),
  },
];

export const Whom = () => {
  return (
    <section className={'section'}>
      <p className={'h3 text-dark-blue'}>
        Мои услуги для тех, кто нуждается в эффективных решениях
      </p>
      <p className={'h5 mb-20 mt-20 text-black-70'}>
        Работаю в различных дизайн-стилях. Помогаю:
      </p>
      <Accordion items={items} />
    </section>
  );
};
