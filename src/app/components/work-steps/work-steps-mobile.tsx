import React from 'react';
import { StepCardMobile } from '@/app/components/work-steps/step-card/step-card-mobile';

interface WorkStepsMobileProps {
  cards: Array<{
    img: string;
    title: string | React.ReactNode;
    subtitle: string;
  }>;
}
function WorkStepsMobile({ cards }: WorkStepsMobileProps) {
  return (
    <div className={'mt-20 flex flex-col gap-8'}>
      {cards.map((card, index) => (
        <StepCardMobile
          key={index}
          img={card.img}
          title={card.title}
          subtitle={card.subtitle}
          isAccent={index === 2}
          withArrow={index !== 7}
        />
      ))}
    </div>
  );
}

export default WorkStepsMobile;
