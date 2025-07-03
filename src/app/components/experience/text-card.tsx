import React from 'react';
import { Dots } from '@/app/icons/dots';

interface TextCardProps {
  title: string;
  subtitle: string;
  text: string;
}

function TextCard({ title, subtitle, text }: TextCardProps) {
  return (
    <div className={'p-f40 col-span-1 min-h-[334px] rounded-20 bg-light-blue'}>
      <div className={'flex justify-end text-black'}>
        <Dots />
      </div>
      <p className={'h2 text-dark-blue'}>{title}</p>
      <p className={'h5 text-dark-blue mt-f10'}>{subtitle}</p>
      <p className={'h7 mt-f10 text-black'}>{text}</p>
    </div>
  );
}

export default TextCard;
