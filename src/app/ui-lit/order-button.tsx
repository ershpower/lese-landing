import React from 'react';
import { Tg } from '@/app/icons/tg';
import { Finger } from '@/app/icons/finger';

export const OrderButton = () => {
  return (
    <div>
      <a
        href="https://t.me/Ershova_Presentation"
        className={
          'relative flex items-center justify-center gap-6 rounded-20 bg-white p-16'
        }
      >
        <Tg />
        <span className={'h4 text-dark-blue'}>Заказать презентацию</span>
        <Finger
          className={'absolute bottom-[12px] right-[24px]'}
          width={24}
          height={24}
        />
      </a>

      <p className={'mt-10 flex items-center justify-center gap-10'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
        >
          <path
            d="M23.2471 16.9053C23.471 16.7437 23.5214 16.4311 23.3597 16.2073C23.198 15.9834 22.8855 15.933 22.6616 16.0947L23.2471 16.9053ZM4.87436 0.728387C4.72435 0.496541 4.4148 0.430199 4.18296 0.580207L0.404818 3.02473C0.172972 3.17473 0.10663 3.48429 0.256638 3.71613C0.406646 3.94798 0.716199 4.01432 0.948044 3.86431L4.30639 1.69141L6.47929 5.04975C6.6293 5.2816 6.93886 5.34794 7.1707 5.19793C7.40255 5.04792 7.46889 4.73837 7.31888 4.50652L4.87436 0.728387ZM22.9544 16.5L22.6616 16.0947C18.3472 19.2105 13.2136 18.8494 9.50626 16.039C5.80292 13.2317 3.47927 7.93671 4.94347 1.10478L4.45457 1L3.96567 0.895221C2.42943 8.06329 4.85555 13.7683 8.90215 16.836C12.9448 19.9006 18.5612 20.2895 23.2471 16.9053L22.9544 16.5Z"
            fill="white"
          />
        </svg>
        <span className={'h6 max-w-[185px] text-white'}>
          Напишите мне, чтобы обсудить <br /> все детал и начать ваш проект
        </span>
      </p>
    </div>
  );
};
