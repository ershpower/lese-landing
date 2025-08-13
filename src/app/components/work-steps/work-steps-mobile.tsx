import React from 'react';
import { StepCardMobile } from '@/app/components/work-steps/step-card/step-card-mobile';
import { StepCardMobileTwo } from '@/app/components/work-steps/step-card/step-card-mobile-two';

interface WorkStepsMobileProps {
  cards: Array<{
    img: string;
    title: string | React.ReactNode;
    subtitle: string | React.ReactNode;
  }>;
}
function WorkStepsMobile({ cards }: WorkStepsMobileProps) {
  return (
    <div className={'mt-20 flex flex-col gap-8'}>
      {cards.map((card, index) => {
        if (index === 2) {
          return (
            <StepCardMobileTwo
              key={index}
              img={card.img}
              title={card.title}
              subtitle={card.subtitle}
              isAccent={index === 2}
              withArrow={true}
            />
          );
        }
        if (index === 7) {
          return (
            <StepCardMobileTwo
              key={index}
              img={card.img}
              title={card.title}
              subtitle={card.subtitle}
              withArrow={false}
            />
          );
        }
        return (
          <StepCardMobile
            key={index}
            img={card.img}
            title={card.title}
            subtitle={card.subtitle}
            isAccent={index === 2}
            withArrow={index !== 7}
          />
        );
      })}
    </div>
  );
}

export default WorkStepsMobile;
