import React from 'react';

import './style.css';
import {
  Accordion as AccordionUI,
  AccordionItem,
} from '@szhsin/react-accordion';
import { ChevronDown } from '@/app/icons/chevron-down';

interface AccordionProps {
  items: Array<{
    title: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    inner?: React.ReactNode;
    isAccent?: boolean;
  }>;
}
export const Accordion = ({ items }: AccordionProps) => {
  const renderCommonItem = (
    title: string | React.ReactNode,
    inner: string | React.ReactNode,
    subtitle?: string | null,
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
            <ChevronDown width={16} height={16} className={'accordion_arrow'} />
          </div>
        </div>
      }
    >
      <div className={'bg-light-gray px-20 pb-20'}>{inner}</div>
    </AccordionItem>
  );

  const renderAccentItems = (
    title: string | React.ReactNode,
    inner: string | React.ReactNode,
    subtitle?: string | null,
  ) => (
    <AccordionItem
      className={'overflow-hidden rounded-20 bg-brand-gradient'}
      buttonProps={{
        className: `w-full text-white button-gradient rounded-20`,
      }}
      header={
        <div
          className={`button-gradient flex w-full items-start justify-between overflow-hidden rounded-20 p-20`}
        >
          <div>
            <p className={'h4 text-left'}> {title}</p>
            {subtitle && <p className={'h6 mt-10 text-white-70'}>{subtitle}</p>}
          </div>
          <div>
            <ChevronDown width={16} height={16} className={'accordion_arrow'} />
          </div>
        </div>
      }
    >
      <div className={'button-gradient px-20 pb-20 pt-12'}>{inner}</div>
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
            {renderAccentItems(item.title, item.inner, item.subtitle as string)}
          </div>
        ) : (
          <div key={index}>
            {renderCommonItem(item.title, item.inner, item.subtitle as string)}
          </div>
        ),
      )}
    </AccordionUI>
  );
};
