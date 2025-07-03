import React from 'react';
import { Info } from '@/app/icons/info';
import { Clock } from '@/app/icons/clock';
import { ArrowRoundedRight } from '@/app/icons/arrow-rounded-right';
import RetinaImage from '@/app/ui-lit/retina-image';

export const Prices = () => {
  return (
    <section className={'mt-f80 rounded-20 bg-white p-f40'}>
      <div className={'grid grid-cols-3 grid-rows-2 gap-10'}>
        <div className={'col-span-1 row-span-2 flex flex-col justify-between'}>
          <div>
            <h3 className={'h3 text-dark-blue'}>Цена</h3>
            <p className={'h4 mt-f40 text-gray'}>
              Итоговая стоимость рассчитывается индивидуально на основе объема,
              сложности и специфики задачи
            </p>
            <p className={'h7 mt-f40 text-gray'}>
              *Больше деталей, точные сроки и стоимость работы можно узнать
              после обсуждения и составления полной сметы вашего проекта
            </p>
          </div>
          <div className={'flex gap-10'}>
            <div>
              <Info />
            </div>
            <p className={'h8 text-gray'}>
              Время работы рассчитывается в рабочих будних днях (пн – пт) и
              начинается с момента получения обратной связи от клиента
            </p>
          </div>
        </div>

        <div className={'col-span-1 row-span-1 rounded-20 bg-light-blue'}>
          <div className={'px-f40 pt-f40'}>
            <p className={'h5 text-dark-blue'}>Только дизайн</p>
            <p className={'h7 mb-f30 mt-f20 text-gray'}>
              Без редактуры текстов и структуры
            </p>
          </div>
          <div
            className={
              'bg-split-light-blue-gradient h-[80px] w-full border-t border-b-color'
            }
          ></div>

          <div className={'px-f40 pb-f40'}>
            <div className={'flex items-end gap-10 text-dark-blue'}>
              <p className={'h5'}>от</p>
              <p className={'h3'}>20 000₽</p>
            </div>
            <div className={'mt-f20 flex items-center gap-10'}>
              <div className={'text-extra-light-gray'}>
                <Clock />
              </div>
              <p className={'h8 text-gray'}>
                Срок выполнения от 2 дней (15-20 слайдов)
              </p>
            </div>
            <div className={'ml-auto w-fit text-dark-blue'}>
              <ArrowRoundedRight />
            </div>
          </div>
        </div>

        <div
          className={
            'relative col-span-1 row-span-1 overflow-visible rounded-20 bg-attention-gradient'
          }
        >
          <div className={'px-f40 pt-f40'}>
            <p className={'h5 text-dark-blue'}>Под ключ</p>
            <p className={'h7 mb-f30 mt-f20 text-gray'}>
              Структура, текст, дизайн
            </p>
          </div>
          <div className={'h-[80px] w-full border-t border-b-color-2'}></div>

          <div className={'px-f40 pb-f40'}>
            <div className={'flex items-end gap-10 text-dark-blue'}>
              <p className={'h5'}>от</p>
              <p className={'h3'}>35 000₽</p>
            </div>
            <div className={'mt-f20 flex items-center gap-10'}>
              <div className={'text-blue'}>
                <Clock />
              </div>
              <p className={'h8 text-gray'}>
                Срок выполнения от 2 дней (15-20 слайдов)
              </p>
            </div>
            <div className={'ml-auto w-fit text-dark-blue'}>
              <ArrowRoundedRight />
            </div>
          </div>
          <RetinaImage
            src1x={'/price-cube1x.png'}
            src2x={'/price-cube2x.png'}
            className={'absolute right-0 top-[-42px]'}
          />
        </div>

        <div
          className={
            'col-span-1 row-span-1 max-h-[405px] rounded-20 bg-light-blue'
          }
        >
          <div className={'px-f40 pt-f40'}>
            <p className={'h5 text-dark-blue'}>Разработка шаблона</p>
            <p className={'h7 mb-f30 mt-f20 text-gray'}>
              Дизайн на вымышленном тексте для последующего самостоятельного
              редактирования
            </p>
          </div>
          <div
            className={
              'bg-split-light-blue-gradient h-[80px] w-full border-t border-b-color'
            }
          ></div>

          <div className={'px-f40 pb-f40'}>
            <div className={'flex items-end gap-10 text-dark-blue'}>
              <p className={'h5'}>от</p>
              <p className={'h3'}>10 000₽</p>
            </div>
            <div className={'mt-f20 flex items-center gap-10'}>
              <div className={'text-extra-light-gray'}>
                <Clock />
              </div>
              <p className={'h8 text-gray'}>
                Срок выполнения от 7 дней (30 слайдов)
              </p>
            </div>
            <div className={'ml-auto w-fit text-dark-blue'}>
              <ArrowRoundedRight />
            </div>
          </div>
        </div>

        <div
          className={
            'border-b-color-3 relative col-span-1 row-span-1 max-h-[405px] overflow-visible rounded-20 border bg-white'
          }
        >
          <div className={'px-f40 pt-f40'}>
            <p className={'h5 text-dark-blue'}>Консультация</p>
            <p className={'h7 mb-f30 mt-f20 text-gray'}>
              Для дизайнеров и других смежных специалистов. Обсуждаем любой
              интересующий вас вопрос и разбираем ваши работы
            </p>
          </div>
          <div className={'bg-split-white-gradient h-[80px] w-full'}></div>

          <div className={'px-f40 pb-f40'}>
            <div className={'flex items-end gap-10 text-dark-blue'}>
              <p className={'h3'}>20 000₽</p>
            </div>
            <div className={'mt-f20 flex items-center gap-10'}>
              <div className={'text-extra-light-gray'}>
                <Clock />
              </div>
              <p className={'h8 text-gray'}>Продолжительность 1,5 - 2 часа</p>
            </div>
            <div className={'ml-auto w-fit text-dark-blue'}>
              <ArrowRoundedRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
