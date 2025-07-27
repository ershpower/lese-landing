'use client';

import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { OrderButton } from '@/app/ui-lit/order-button';
import { Dots } from '@/app/icons/dots';
import RetinaImage from '@/app/ui-lit/retina-image';
import Burger from '@/app/components/burger';
import { BurgerIcon } from '@/app/icons/burger';
import HeroBlockMobile from './mobile/hero-block-mobile';
import HeroBlockTablet from '@/app/components/hero-block/mobile/hero-block-tablet';

const bullets = ['стартапов', 'спикеров', 'компаний'];

const row1 = ['Коммерческие предложения', 'Pitch Deck', 'Шаблоны'];
const row2 = ['Инвестиционные презентации', 'Консультации', 'Анимация'];
const row3 = ['Презентаций для выступления', 'Бизнес - презентации'];

function HeroBlock() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    document.body.style.overflow = 'hidden';
    setIsOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <HeroBlockMobile row1={row1} row2={row2} row3={row3} bullets={bullets} />
      <HeroBlockTablet row1={row1} row2={row2} bullets={bullets} />
    </>
  );
}

export default HeroBlock;
