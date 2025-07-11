import React from 'react';
import { IconProps } from '@/app/icons/types';

export const Burger = ({ height, width, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_631_95)">
        <path
          d="M26.25 24.5H1.75001C0.783473 24.5 0 23.7165 0 22.75C0 21.7835 0.783473 21 1.75001 21H26.25C27.2165 21 28.0001 21.7835 28.0001 22.75C28 23.7165 27.2165 24.5 26.25 24.5Z"
          fill="white"
        />
        <path
          d="M26.25 15.75H1.75001C0.783473 15.75 0 14.9665 0 14C0 13.0335 0.783473 12.25 1.75001 12.25H26.25C27.2165 12.25 28.0001 13.0335 28.0001 14C28.0001 14.9665 27.2165 15.75 26.25 15.75Z"
          fill="white"
        />
        <path
          d="M26.25 7.00002H1.75001C0.783473 7.00002 0 6.21655 0 5.25001C0 4.28347 0.783473 3.5 1.75001 3.5H26.25C27.2165 3.5 28.0001 4.28347 28.0001 5.25001C28.0001 6.21655 27.2165 7.00002 26.25 7.00002Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_631_95">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
