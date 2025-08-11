import React from 'react';
import FooterMobile from '@/app/components/footer/footer-mobile';
import FooterTablet from '@/app/components/footer/footer-tablet';

function Footer() {
  return (
    <div className={'mx-10 mb-10 mt-20'}>
      <div className={'block md:hidden'}>
        <FooterMobile />
      </div>
      <div className={'hidden md:block'}>
        <FooterTablet />
      </div>
    </div>
  );
}

export default Footer;
