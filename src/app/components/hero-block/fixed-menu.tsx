import React from 'react';
import { BurgerIcon } from '@/app/icons/burger';

interface FixedMenuProps {
  onOpenMenu: () => void;
}

function FixedMenu({ onOpenMenu }: FixedMenuProps) {
  return (
    <div
      onClick={onOpenMenu}
      className={
        'fixed right-20 top-20 z-10 flex h-[40px] w-[40px] items-center justify-center rounded-10 bg-hero-bg'
      }
    >
      <BurgerIcon width={22} height={22} />
    </div>
  );
}

export default FixedMenu;
