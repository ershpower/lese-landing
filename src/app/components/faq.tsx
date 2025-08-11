import React from 'react';
import { FAQ_ID } from '@/app/consts';
import { Question } from '@/app/icons/question';

const items = [
  {
    title: (
      <span>
        Если бюджет <br /> ограничен
      </span>
    ),
    answer:
      'Предлагаю несколько вариантов визуализации в зависимости от вашего бюджета',
  },
  {
    title: (
      <span>
        Если из исходников <br /> только идея
      </span>
    ),
    answer:
      'Самостоятельно разбираюсь в теме проекта, анализирую конкурентов и подбираю изображения, чтобы предложить наилучшее решение',
  },
  {
    title: (
      <span>
        Если нужна <br /> финансовая отчётность
      </span>
    ),
    answer:
      'Предоставляю чек, составляю смету и при необходимости заключаю договор (зарегистрирована как самозанятая)',
  },
  {
    title: (
      <span>
        Если нельзя <br /> подвести по срокам
      </span>
    ),
    answer:
      'Предоставляю промежуточные результаты проекта, строго придерживаюсь оговорённых сроков и оперативно реагирую на вопросы',
  },
  {
    title: <span>Если нужно не «как у всех»</span>,
    answer:
      'Разрабатываю индивидуальную дизайн-концепцию без использования шаблонных решений и банальных картинок',
  },
  {
    title: (
      <span>
        Если важна <br /> конфиденциальность
      </span>
    ),
    answer:
      'Подписываю соглашение о неразглашении (NDA). Ответственно отношусь к хранению и использованию вашей информации',
  },
];

function Faq() {
  return (
    <section className={'section'} id={FAQ_ID}>
      <p className={'h3 text-dark-blue'}>
        Предложу решение для любой задачи в установленные сроки
      </p>
      <div className={'mt-20 grid grid-cols-1 gap-8 md:grid-cols-3'}>
        {items.map((item, index) => (
          <div
            key={index}
            className={
              'group relative col-span-1 overflow-hidden rounded-20 bg-light-gray'
            }
          >
            {/*visible*/}
            <div
              className={
                'relative left-0 top-0 flex items-center justify-between gap-10 p-20 transition-all duration-200 ease-in-out group-hover:left-[-100%] md:h-[110px]'
              }
            >
              <p className={'h4 text-dark-blue md:max-w-[133px]'}>
                {item.title}
              </p>
              <div className={'right-20 top-20 text-dark-blue md:absolute'}>
                <Question />
              </div>
            </div>
            {/*hidden*/}
            <div
              className={
                'absolute left-[100%] top-0 h-full w-full p-20 transition-all duration-200 ease-in-out group-hover:left-0'
              }
            >
              <p className={'h6 text-black-70'}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
