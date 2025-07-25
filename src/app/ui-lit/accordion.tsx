import React from 'react';

import './style.css';
import {
  Accordion as AccordionUI,
  AccordionItem,
} from '@szhsin/react-accordion';
import { ArrowRightUp } from '@/app/icons/arrow-right-up';

interface AccordionProps {
  items: Array<{
    title: string;
    subtitle?: string;
    inner?: React.ReactNode;
    isAccent?: boolean;
  }>;
}
export const Accordion = ({ items }: AccordionProps) => {
  const renderCommonItem = (
    title: string,
    inner: React.ReactNode,
    subtitle?: string,
  ) => (
    <AccordionItem
      className={'overflow-hidden rounded-20'}
      buttonProps={{
        className: `w-full text-dark-blue`,
      }}
      header={
        <div
          className={`flex w-full justify-between overflow-hidden bg-light-gray p-20`}
        >
          <div>
            <p className={'h4 text-left'}> {title}</p>
            {subtitle && (
              <p className={'h6 mt-10 text-left text-black-70'}>{subtitle}</p>
            )}
          </div>
          <div>
            <ArrowRightUp
              className={'accordion_arrow'}
              height={16}
              width={16}
            />
          </div>
        </div>
      }
    >
      <div className={'bg-light-gray px-20 pb-20'}>{inner}</div>
    </AccordionItem>
  );

  const renderAccentItems = (
    title: string,
    inner: React.ReactNode,
    subtitle?: string,
  ) => (
    <AccordionItem
      className={'overflow-hidden rounded-20 bg-light-gray'}
      buttonProps={{
        className: `w-full text-white bg-red rounded-20`,
      }}
      header={
        <div
          className={`flex w-full items-center justify-between overflow-hidden rounded-20 bg-red p-20`}
        >
          <p className={'h4'}> {title}</p>
          {subtitle && <p className={'h6 mt-10 text-black-70'}>{subtitle}</p>}
          <div>
            <ArrowRightUp
              className={'accordion_arrow'}
              height={16}
              width={16}
            />
          </div>
        </div>
      }
    >
      <div className={'bg-light-gray px-20 pb-20 pt-12'}>{inner}</div>
    </AccordionItem>
  );

  return (
    <AccordionUI
      transition
      transitionTimeout={250}
      className={'flex flex-col gap-8'}
    >
      {items.map((item, index) =>
        item.isAccent ? (
          <div key={index}>
            {renderAccentItems(item.title, item.inner, item.subtitle)}
          </div>
        ) : (
          <div key={index}>
            {renderCommonItem(item.title, item.inner, item.subtitle)}
          </div>
        ),
      )}
    </AccordionUI>
  );
};
