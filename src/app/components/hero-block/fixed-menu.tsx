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
        'rounded-12 fixed right-20 top-20 z-10 flex h-[40px] w-[40px] items-center justify-center bg-brand-gradient'
      }
    >
      <BurgerIcon width={20} height={20} />
    </div>
  );
}

export default FixedMenu;
