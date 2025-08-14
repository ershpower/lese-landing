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
        'fixed right-20 top-20 z-40 flex h-[40px] w-[40px] items-center justify-center rounded-12 bg-brand-gradient lg:hidden'
      }
    >
      <BurgerIcon width={20} height={20} />
    </div>
  );
}

export default FixedMenu;
