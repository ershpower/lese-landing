import React from 'react';
import { Dots } from '@/app/icons/dots';
import { ArrowRoundedRight } from '@/app/icons/arrow-rounded-right';

const cards = [
  {
    img: '/one.svg',
    title: 'Краткое обсуждение проекта',
    subtitle:
      'Определяем цель и сроки проекта. Согласовываем коммерческое предложение и стоимость работы',
  },
  {
    img: '/two.svg',
    title: 'Интервью',
    subtitle:
      'Определяем задачи дизайн-продукта, целевую аудиторию, УТП, «боли» ЦА и другие детали брифа',
  },
  {
    img: '/three.svg',
    title: 'Формирование структуры и продающих текстов',
    subtitle:
      'После изучения информации и анализа конкурентов, прописываю текстовую часть',
  },
  {
    img: '/four.svg',
    title: 'Разработка мудборда',
    subtitle:
      'В формате PDF-файла показываю 2 концепции визуала, сформированные на основе ваших пожеланий для согласования стилистики',
  },
  {
    img: '/five.svg',
    title: 'Дизайн-концепция на первых трех слайдах',
    subtitle:
      'Закрепляю стиль работы, дизайн-приёмы и т.д. На данном этапе предварительно утверждаем итоговый дизайн',
  },
  {
    img: '/six.svg',
    title: 'Масштабирование на все слайды',
    subtitle: 'Полностью заверстываю презентацию',
  },
  {
    img: '/seven.svg',
    title: 'Редактирование (3 круга правок)',
    subtitle:
      'По необходимости, но я постараюсь сделать все возможное, чтобы вам понравилось с первого раза!',
  },
  {
    img: '/eight.svg',
    title: 'Внесение второй части оплаты и отправка файлов',
    subtitle:
      'Работаю в PowerPoint и Figma. Предоставляю готовую презентацию в форматах pptx и pdf, либо передаю права на владение проектом (в Figma)',
  },
];

function WorkSteps() {
  return (
    <section className={'mt-f80 rounded-20 bg-white p-f40'}>
      <h3 className={'h3 text-dark-blue'}>Этапы работы</h3>
      <div className={'mt-f40 grid grid-cols-4 gap-10'}>
        {cards.map((card, i) => (
          <div
            key={i}
            className={`relative col-span-1 rounded-20 p-f40 ${i === 2 ? 'bg-attention-gradient' : 'bg-light-blue'}`}
          >
            <div className={'flex justify-between'}>
              <img src={card.img} alt="" />
              <Dots />
            </div>
            <p className={'h6 mt-f20 text-dark-blue'}>{card.title}</p>
            <p className={'h7 mt-f20 text-gray'}>{card.subtitle}</p>
            {i === 2 && (
              <p className={'h8 mt-f60 text-dark-blue'}>
                *В формате “Под ключ”
              </p>
            )}

            {i !== 3 && i !== 7 && (
              <div
                className={
                  'absolute right-0 top-[50%] z-20 w-fit translate-x-[50%] translate-y-[-50%] rounded-full bg-white p-10 text-dark-blue'
                }
              >
                <ArrowRoundedRight />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkSteps;
