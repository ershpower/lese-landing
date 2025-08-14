import React from 'react';
import RetinaImage from '@/app/ui-lit/retina-image';

function PersonInfo() {
  return (
    <div
      className={
        '2xl:bg-profile-bg-desktop2xl xl:bg-profile-bg-desktop col-start-4 row-start-1 flex h-full flex-col justify-end gap-10 rounded-20 border border-black-20 bg-profile-bg bg-left-top bg-no-repeat p-18 2xl:p-40'
      }
    >
      <RetinaImage
        className={
          'h-[60px] w-[60px] xl:h-[100px] xl:w-[100px] 2xl:h-[200px] 2xl:w-[200px]'
        }
        src1x={'/hero/avatar1x.png'}
        src2x={'/hero/avatar2x.png'}
      />
      <p className={'h4 text-dark-blue'}>Алеся Ершова</p>
      <p className={'h6 text-black-70'}>
        впечатляю аудиторию, <br /> привлекаю инвестиции,
        <br /> увеличиваю продажи
      </p>
    </div>
  );
}

export default PersonInfo;
