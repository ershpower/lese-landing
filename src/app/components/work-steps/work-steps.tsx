import React from 'react';
import { WORK_STEPS_ID } from '@/app/consts';
import WorkStepsMobile from '@/app/components/work-steps/work-steps-mobile';
import WorkStepsDesktop from '@/app/components/work-steps/work-steps-desktop';
import RetinaImage from '@/app/ui-lit/retina-image';

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
    title: (
      <span>
        Масштабирование <br /> на все слайды
      </span>
    ),
    subtitle: 'Полностью заверстываю презентацию',
  },
  {
    img: '/work-steps/seven.svg',
    title: (
      <span>
        Редактирование <br /> (3 круга правок)
      </span>
    ),
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
    <section className={'section relative'} id={WORK_STEPS_ID}>
      <p className={'h3 text-dark-blue'}>Этапы работы</p>

      <div className={'block md:hidden'}>
        <WorkStepsMobile cards={cards} />
      </div>

      <div className={'hidden md:block'}>
        <WorkStepsDesktop cards={cards} />
        <RetinaImage
          className={'absolute bottom-0 right-0 h-[229px] w-[270px]'}
          src1x={'/work-steps/abstract1x.png'}
          src2x={'/work-steps/abstract1x.png'}
        />
      </div>
    </section>
  );
};
