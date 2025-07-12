import React from 'react';
import { StepCard } from '@/app/components/work-steps/step-card';

const cards = [
  {
    img: '/work-steps/one.svg',
    title: 'Краткое обсуждение проекта',
    subtitle:
      'Определяем цель и сроки проекта. Согласовываем коммерческое предложение и стоимость работы',
  },
  {
    img: '/work-steps/two.svg',
    title: 'Интервью',
    subtitle:
      'Определяем задачи дизайн-продукта, целевую аудиторию, УТП, «боли» ЦА и другие детали брифа',
  },
  {
    img: '/work-steps/three.svg',
    title: 'Формирование структуры и продающих текстов',
    subtitle:
      'После изучения информации и анализа конкурентов, прописываю текстовую часть',
  },
  {
    img: '/work-steps/four.svg',
    title: 'Разработка мудборда',
    subtitle:
      'В формате PDF-файла показываю  2 концепции визуала, сформированные на основе ваших пожеланий  для согласования стилистики',
  },
  {
    img: '/work-steps/five.svg',
    title: 'Дизайн-концепция на первых трех слайдах',
    subtitle:
      'Закрепляю стиль работы, дизайн-приёмы и т.д. На данном этапе предварительно утверждаем итоговый дизайн',
  },
  {
    img: '/work-steps/six.svg',
    title: 'Масштабирование на все слайды',
    subtitle: 'Полностью заверстываю презентацию',
  },
  {
    img: '/work-steps/seven.svg',
    title: 'Редактирование  (3 круга правок)',
    subtitle:
      'По необходимости, но я постараюсь сделать все возможное, чтобы вам понравилось с первого раза!',
  },
  {
    img: '/work-steps/eight.svg',
    title: 'Внесение второй части оплаты и отправка файлов',
    subtitle:
      'Работаю в PowerPoint и Figma. Предоставляю готовую презентацию  в форматах pptx и pdf, либо передаю права на владение проектом (в Figma)',
  },
];

export const WorkSteps = () => {
  return (
    <section className={'section'}>
      <p className={'h3 text-dark-blue'}>Этапы работы</p>

      <div className={'mt-20 flex flex-col gap-8'}>
        {cards.map((card, index) => (
          <StepCard
            key={index}
            img={card.img}
            title={card.title}
            subtitle={card.subtitle}
            isAccent={index === 2}
            withArrow={index !== 7}
          />
        ))}
      </div>
    </section>
  );
};
