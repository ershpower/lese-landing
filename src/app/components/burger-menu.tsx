'use client';
import React from 'react';
import CloseIcon from '@/app/icons/close';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';
import { TgGradient } from '@/app/icons/tg-gradient';
import { Finger } from '@/app/icons/finger';
import { menuItems } from '@/app/consts';

interface BurgerProps {
  isOpen: boolean;
  onClose: () => void;
}

function BurgerMenu({ isOpen, onClose }: BurgerProps) {
  if (!isOpen) return null;

  const handleClick = () => {
    onClose();
  };

  return (
    <div
      className={
        'w-[calc(100wv - 12px)] fixed inset-6 z-50 flex h-[calc(100vh-12px)] flex-col justify-between rounded-20 bg-burger-gradient p-10 backdrop-blur'
      }
    >
      <div
        onClick={onClose}
        className={
          'ml-auto w-fit rounded-16 border border-white p-12 text-white'
        }
      >
        <CloseIcon />
      </div>
      <div className={'flex flex-auto items-center justify-center'}>
        <div>
          <ul className={'m-auto w-[230px]'}>
            {menuItems.map((item, index) => {
              const className = index === 0 ? 'border-0' : 'border-t';
              return (
                <li
                  key={index}
                  className={`${className} border-white-30 py-20 text-white`}
                >
                  <a
                    className={'flex items-center justify-between'}
                    href={item.href}
                    onClick={handleClick}
                  >
                    <span className={'h6 text-white-30'}>0{index + 1}</span>
                    <span className={'h4'}>{item.title}</span>
                    <ArrowRightUp width={10} height={10} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <a
        href="#"
        className={
          'relative flex flex-col items-center justify-center rounded-20 bg-white py-30'
        }
      >
        <div className={'flex items-center gap-8'}>
          <div>
            <TgGradient />
          </div>
          <p className={'h4 text-dark-blue'}>Заказать презентацию</p>
        </div>
        <div className={'mt-10 flex gap-8'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
          >
            <path
              d="M23.2471 16.9053C23.471 16.7437 23.5214 16.4311 23.3597 16.2073C23.198 15.9834 22.8855 15.933 22.6616 16.0947L23.2471 16.9053ZM4.87436 0.728387C4.72435 0.496541 4.4148 0.430199 4.18296 0.580207L0.404818 3.02473C0.172972 3.17473 0.10663 3.48429 0.256638 3.71613C0.406646 3.94798 0.716199 4.01432 0.948044 3.86431L4.30639 1.69141L6.47929 5.04975C6.6293 5.2816 6.93886 5.34794 7.1707 5.19793C7.40255 5.04792 7.46889 4.73837 7.31888 4.50652L4.87436 0.728387ZM22.9544 16.5L22.6616 16.0947C18.3472 19.2105 13.2136 18.8494 9.50626 16.039C5.80292 13.2317 3.47927 7.93671 4.94347 1.10478L4.45457 1L3.96567 0.895221C2.42943 8.06329 4.85555 13.7683 8.90215 16.836C12.9448 19.9006 18.5612 20.2895 23.2471 16.9053L22.9544 16.5Z"
              fill="black"
              fillOpacity="0.7"
            />
          </svg>
          <p className={'h6'}>
            Напишите мне, чтобы обсудить <br /> все детали и начать ваш проект
          </p>
        </div>
        <Finger
          width={24}
          height={24}
          className={'absolute bottom-[20px] right-[20px]'}
        />
      </a>
    </div>
  );
}

export default BurgerMenu;
