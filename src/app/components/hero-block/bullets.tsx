'use client';

import React, { useEffect, useState } from 'react';

function Bullets({ bullets }: { bullets: string[] }) {
  const [activeBullet, setActiveBullet] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBullet((prev) => {
        if (prev === 2) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={'flex w-full gap-6 2xl:gap-14'}>
      <p
        className={`flex-auto rounded-20 border border-white bg-white px-12 py-8 text-center text-14 text-dark-blue md:text-20 2xl:rounded-30 2xl:text-30`}
      >
        Для:
      </p>
      {bullets.map((bullet, index) => {
        const classNames =
          activeBullet === index
            ? 'bg-white text-dark-blue'
            : 'bg-transparent text-white opacity-50';
        return (
          <p
            key={index}
            className={`flex-auto rounded-20 border border-white px-12 py-8 text-center text-14 md:px-24 md:text-20 2xl:rounded-30 2xl:text-30 ${classNames}`}
          >
            {bullet}
          </p>
        );
      })}
    </div>
  );
}

export default Bullets;
