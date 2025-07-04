import React from 'react';
import { FooterTg } from '@/app/icons/footer-tg';
import { FooterMail } from '@/app/icons/footer-mail';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';
import { FooterPinterest } from '@/app/icons/footer-pinterest';
import { FooterBehance } from '@/app/icons/footer-behance';

export const Footer = () => {
  return (
    <footer
      className={
        'bg-footer-gradient mt-10 flex h-[26.852vh] flex-col justify-between gap-20 rounded-20 p-f40'
      }
    >
      <p className={'h3 text-dark-blue'}>
        Ваш проект заслуживает <br /> впечатляющего визуала!
      </p>
      <p className={'h7 text-gray'}>
        Доверьтесь моему опыту и креативу, чтобы получить эффектную презентацию
      </p>

      <div className={'flex items-center gap-f50'}>
        <a className={'flex items-center gap-10 text-dark-blue'} href="">
          <FooterTg />
          <p className={'h6'}>Telegram канал</p>
          <ArrowRightUp width={12} height={12} />
        </a>
        <a className={'flex items-center gap-10 text-dark-blue'} href="">
          <FooterMail />
          <p className={'h6'}>Ershova_Presentation</p>
          <ArrowRightUp width={12} height={12} />
        </a>
        <a className={'flex items-center gap-10 text-dark-blue'} href="">
          <FooterPinterest />
          <p className={'h6'}>Pinterest.com</p>
          <ArrowRightUp width={12} height={12} />
        </a>
        <a className={'flex items-center gap-10 text-dark-blue'} href="">
          <FooterBehance />
          <p className={'h6'}>Behance</p>
          <ArrowRightUp width={12} height={12} />
        </a>
      </div>
    </footer>
  );
};
