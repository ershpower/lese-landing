import React from 'react';
import { IconProps } from '@/app/icons/types';

export const ChevronDown = ({ height, width, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={4}
      stroke="currentColor"
      width={width}
      height={height}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
