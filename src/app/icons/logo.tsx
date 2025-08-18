import React from 'react';
import { IconProps } from '@/app/icons/types';

export const Logo = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <rect width="40" height="40" rx="12" fill="white" />
      <path
        d="M19.8894 12C19.0814 12.1449 18.4667 12.8674 18.4667 13.7396C18.4667 13.8484 18.4778 13.9547 18.4961 14.0581H11.1878V18.556H19.8634V20.5925H11.1878V24.9419H18.4919C18.4767 25.0364 18.4667 25.133 18.4667 25.2319C18.4667 26.1122 19.0929 26.8396 19.9121 26.975V27H10C9.44772 27 9 26.5523 9 26V13C9 12.4477 9.44772 12 10 12H19.8894Z"
        fill="url(#paint0_radial_859_97)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.6544 12C27.4386 12 28.1544 12.085 28.801 12.2547C29.4476 12.4103 30.0118 12.6717 30.4933 13.0394C30.9748 13.393 31.3464 13.8739 31.6078 14.482C31.8692 15.0901 32 15.84 32 16.7309C32 17.5372 31.862 18.2307 31.5868 18.8106C31.3116 19.3904 30.9336 19.8714 30.4522 20.2532C29.9706 20.6351 29.4266 20.9254 28.8212 21.1235L31.9379 27H29.5233L26.6334 21.4835H23.2278V27H22.7667C21.8168 27 21.0467 26.2084 21.0467 25.2319V13.7396C21.0467 12.8674 21.6614 12.1449 22.4694 12H26.6544ZM23.2278 19.4685H26.2C26.6954 19.4685 27.1567 19.433 27.5833 19.3623C28.0234 19.2774 28.4087 19.1355 28.7389 18.9376C29.069 18.7254 29.3235 18.4425 29.5023 18.0889C29.6949 17.7212 29.7912 17.2543 29.7912 16.6886C29.8049 16.0381 29.6814 15.5217 29.42 15.1399C29.1724 14.7439 28.8007 14.4684 28.3055 14.3128C27.8102 14.1431 27.2116 14.0582 26.5099 14.0581H23.2278V19.4685Z"
        fill="url(#paint1_radial_859_97)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_859_97"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(14.59 14.6521) rotate(35.8671) scale(20.2367 16.9647)"
        >
          <stop offset="0.0625" stopColor="#1ED1F9" />
          <stop offset="0.232787" stopColor="#11B8DD" />
          <stop offset="0.390224" stopColor="#1166DD" />
          <stop offset="0.541323" stopColor="#1F07BB" />
          <stop offset="0.762103" stopColor="#150197" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_859_97"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(14.59 14.6521) rotate(35.8671) scale(20.2367 16.9647)"
        >
          <stop offset="0.0625" stopColor="#1ED1F9" />
          <stop offset="0.232787" stopColor="#11B8DD" />
          <stop offset="0.390224" stopColor="#1166DD" />
          <stop offset="0.541323" stopColor="#1F07BB" />
          <stop offset="0.762103" stopColor="#150197" />
        </radialGradient>
      </defs>
    </svg>
  );
};
