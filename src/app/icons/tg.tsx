import React from 'react';
import { IconProps } from '@/app/icons/types';

export const Tg = ({ height, width, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 27 24"
      fill="none"
      className={className}
    >
      <path
        d="M10.5946 15.8176L10.1479 22.5184C10.787 22.5184 11.0637 22.2256 11.3956 21.874L14.3915 18.82L20.5994 23.6692C21.738 24.346 22.5401 23.9896 22.8472 22.552L26.9221 2.18568L26.9232 2.18448C27.2844 0.389285 26.3146 -0.312712 25.2053 0.127686L1.25348 9.90884C-0.381184 10.5856 -0.356434 11.5576 0.975599 11.998L7.09912 14.0296L21.3228 4.53646C21.9922 4.06367 22.6009 4.32526 22.1002 4.79806L10.5946 15.8176Z"
        fill="currentColor"
      />
    </svg>
  );
};
