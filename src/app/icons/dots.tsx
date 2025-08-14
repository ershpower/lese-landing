import React from 'react';
import { IconProps } from '@/app/icons/types';

export const Dots = ({ height, width, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="5"
      viewBox="0 0 19 5"
      fill="none"
      className={`${className} xl:h-[10px] xl:w-[24px] 2xl:h-[20px] 2xl:w-[34px]`}
    >
      <circle
        cx="2.5"
        cy="2.5"
        r="2"
        stroke="currentColor"
        strokeOpacity="0.2"
      />
      <circle
        cx="9.5"
        cy="2.5"
        r="2"
        stroke="currentColor"
        strokeOpacity="0.2"
      />
      <circle
        cx="16.5"
        cy="2.5"
        r="2"
        stroke="currentColor"
        strokeOpacity="0.2"
      />
    </svg>
  );
};
