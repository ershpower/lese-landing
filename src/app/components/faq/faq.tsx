import React from 'react';
import { Question } from '@/app/icons/question';
import { Info } from '@/app/icons/info';

const arr = [
  {
    title: 'Если бюджет ограничен',
    answer:
      'Предлагаю несколько вариантов визуализации в зависимости от вашего бюджета',
  },
  {
    title: 'Если из исходников только идея',
    answer:
      'Самостоятельно разбираюсь в теме проекта, анализирую конкурентов и подбираю изображения, чтобы предложить наилучшее решение',
  },
  {
    title: 'Если нужна финансовая отчётность',
    answer:
      'Предоставляю чек, составляю смету и при необходимости заключаю договор (зарегистрирована как самозанятая).',
  },
  {
    title: 'Если нельзя подвести по срокам',
    answer:
      'Предоставляю промежуточные результаты проекта, строго придерживаюсь оговорённых сроков и оперативно реагирую на вопросы',
  },
  {
    title: 'Если нужно не «как у всех»',
    answer:
      'Разрабатываю индивидуальную дизайн-концепцию без использования шаблонных решений и банальных картинок',
  },
  {
    title: 'Если важна конфиденциальность',
    answer:
      'Подписываю соглашение о неразглашении (NDA). Ответственно отношусь к хранению и использованию вашей информации',
  },
];

function Faq() {
  return (
    <section className={'mt-f80 rounded-20 bg-white p-f40'}>
      <h3 className={'h3 text-dark-blue'}>
        Предложу решение для любой задачи в установленные сроки
      </h3>
      <div className={'mt-f40 grid grid-cols-3 gap-10'}>
        {arr.map((item, index) => (
          <div
            key={index}
            className={
              'group relative col-span-1 overflow-hidden rounded-20 bg-light-blue hover:cursor-pointer'
            }
          >
            <div
              className={
                'relative left-0 pb-f40 pl-f40 pr-f30 pt-f30 transition-all duration-200 ease-in-out group-hover:left-[-100%]'
              }
            >
              <div className={'flex justify-end'}>
                <Question />
              </div>
              <p className={'h5 text-dark-blue'}>{item.title}</p>
            </div>

            <div
              className={
                'absolute left-[100%] top-0 h-full w-full pb-f40 pl-f40 pr-f30 pt-f30 transition-all duration-200 ease-in-out group-hover:left-[0]'
              }
            >
              <div className={'flex justify-end'}>
                <Info />
              </div>
              <p className={'h7 text-gray'}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
