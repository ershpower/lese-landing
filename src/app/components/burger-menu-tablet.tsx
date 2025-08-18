'use client';
import React from 'react';
import CloseIcon from '@/app/icons/close';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';
import { menuItems, PERSON_TG_LINK } from '@/app/consts';
import Link from 'next/link';
import { Tg } from '@/app/icons/tg';
import RetinaImage from '@/app/ui-lit/retina-image';
import TgChannelBtnTablet from '@/app/ui-lit/tg-channel-btn-tablet';

interface BurgerProps {
  isOpen: boolean;
  onClose: () => void;
}

function BurgerMenuTablet({ isOpen, onClose }: BurgerProps) {
  if (!isOpen) return null;

  const handleClick = () => {
    onClose();
  };

  return (
    <div
      className={
        'fixed inset-0 z-50 hidden grid-cols-4 gap-10 bg-burger-gradient p-10 backdrop-blur md:grid'
      }
    >
      <div className={'col-span-3 flex-col justify-between rounded-20 p-10'}>
        <div className={'flex h-full flex-auto items-center justify-center'}>
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
      </div>
      <div className={'col-span-1 flex flex-col gap-10'}>
        <Link
          href={PERSON_TG_LINK}
          className={'flex flex-auto flex-col rounded-20 bg-white pt-40'}
        >
          <div className={'flex-auto px-20'}>
            <Tg className={'h-[40px] w-[40px]'} />
            <p className={'h4 mt-6 text-dark-blue'}>Заказать презентацию</p>
            <p className={'h6 mt-12'}>
              Напишите мне, чтобы обсудить все детали и начать ваш проект
            </p>
          </div>
          <RetinaImage
            className={'h-[190px] w-[180px]'}
            src1x={'/burger-tablet.png'}
            src2x={'/burger-tablet.png'}
          />
        </Link>
        <TgChannelBtnTablet />
      </div>
      <div
        onClick={onClose}
        className={
          'absolute right-20 top-20 ml-auto w-fit rounded-16 border border-black-30 p-12 text-black-30'
        }
      >
        <CloseIcon />
      </div>
    </div>
  );
}

export default BurgerMenuTablet;
