'use client';
import React from 'react';
import CloseIcon from '@/app/icons/close';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';
import { TgGradient } from '@/app/icons/tg-gradient';
import { Finger } from '@/app/icons/finger';
import { menuItems, PERSON_TG_LINK } from '@/app/consts';
import TgChannelBtnMobile from '@/app/ui-lit/tg-channel-btn-mobile';

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
        'w-[calc(100wv - 12px)] fixed inset-6 z-50 flex h-[calc(100vh-12px)] flex-col justify-between rounded-20 bg-burger-gradient p-10 backdrop-blur md:hidden'
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
                    href={`#${item.href}`}
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

      <div className={'grid grid-cols-2 gap-8'}>
        <div className={'col-span-1'}>
          <a
            href={PERSON_TG_LINK}
            className={'relative flex flex-col rounded-20 bg-white p-20'}
          >
            <TgGradient />
            <p className={'h4 mt-10 text-dark-blue'}>Заказать презентацию</p>
            <p className={'h6 mt-10 text-black-70'}>
              Напишите мне, чтобы обсудить все детали и начать ваш проект
            </p>
            <Finger
              width={24}
              height={24}
              className={'absolute right-[20px] top-[20px]'}
            />
          </a>
        </div>
        <div className={'col-span-1'}>
          <TgChannelBtnMobile />
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
