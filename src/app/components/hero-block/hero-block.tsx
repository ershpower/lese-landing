'use client';

import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { OrderButton } from '@/app/ui-lit/order-button';
import { Dots } from '@/app/icons/dots';
import RetinaImage from '@/app/ui-lit/retina-image';
import BurgerMenu from '@/app/components/burger-menu';
import { BurgerIcon } from '@/app/icons/burger';
import HeroBlockMobile from './mobile/hero-block-mobile';
import HeroBlockTablet from '@/app/components/hero-block/mobile/hero-block-tablet';
import FixedMenu from '@/app/components/hero-block/fixed-menu';
import { MAIN_ID } from '@/app/consts';

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
    <div id={MAIN_ID}>
      <HeroBlockMobile
        row1={row1}
        row2={row2}
        row3={row3}
        bullets={bullets}
        onOpenMenu={handleOpenMenu}
      />
      <HeroBlockTablet row1={row1} row2={row2} bullets={bullets} />
      <FixedMenu onOpenMenu={handleOpenMenu} />
      <BurgerMenu isOpen={isOpenMenu} onClose={handleCloseMenu} />
    </div>
  );
}

export default HeroBlock;
