import React from 'react';
import { Col } from '@/app/components/whom/col';
import RetinaImage from '@/app/ui-lit/retina-image';
import { ArrowWhom } from '@/app/icons/arrow-whom';
import { Info } from '@/app/icons/info';

const col1Items = [
  'Привлекать инвестиции',
  'Раскрывать смысл идеи для инвесторов',
  'Транслировать надёжность проекта',
];

const col2Items = [
  'Увеличивать продажи',
  'Тестировать спрос',
  'Запускать новый/ую продукт/ услугу',
  'Заключать соглашения о бизнес партнёрстве',
];
const col3Items = [
  'Усиливать личный бренд',
  'Удерживать фокус внимания аудитории',
  'Активно взаимодействовать со зрителем',
  'Впечатлять аудиторию',
];
export const Whom = () => {
  return (
    <section className={'relative mt-f80 rounded-20 bg-white p-f40'}>
      <h3 className={'h3 text-dark-blue'}>
        Мои услуги для тех, кто нуждается в эффективных решениях
      </h3>
      <p className={'h4 mt-f40 text-gray'}>
        Работаю в различных дизайн-стилях. Помогаю:
      </p>

      <div className={'mt-40 grid grid-cols-4 gap-10'}>
        <Col title={'Стартапам'} items={col1Items} />
        <Col title={'Компаниям'} items={col2Items} />
        <Col title={'Спикерам'} items={col2Items} />

        <div className={'relative col-span-1 rounded-20 bg-attention-gradient'}>
          <div className={'h5 p-f40 text-dark-blue'}>Универсально</div>
          <div className={'px-f40'}>
            <p className={'h7 text-gray'}>
              Разрабатываю индивидуальные шаблоны с актуальным дизайном для
              самостоятельного редактирования и независимости от времени и
              работы дизайнера
            </p>
          </div>
          <RetinaImage
            src1x={'/whom-cube1x.png'}
            src2x={'/whom-cube2x.png'}
            className={'absolute bottom-0 right-[-9%]'}
          />

          <div className={'absolute left-[10%] top-[-17%]'}>
            <div className={'flex gap-10'}>
              <div
                className={
                  'mt-14 h-[3.385vw] min-h-[40px] w-[1.979vw] min-w-[23px]'
                }
              >
                <ArrowWhom height={'100%'} width={'100%'} />
              </div>
              <p className={'h8 text-black-30 max-w-[235px]'}>
                Идеальное решение для тех, кто не может тратить крупные
                бюджеты,и хочет быстро обновить старый дизайн
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
