import React from 'react';
import StepCardDesktop from '@/app/components/work-steps/step-card/step-card-desktop';

interface WorkStepsDesktop {
  cards: Array<{
    img: string;
    title: string | React.ReactNode;
    subtitle: string | React.ReactNode;
  }>;
}

function WorkStepsDesktop({ cards }: WorkStepsDesktop) {
  return (
    <div className={'relative mt-20 grid grid-cols-3 gap-10'}>
      {cards.map((card, index) => (
        <StepCardDesktop
          key={index}
          img={card.img}
          title={card.title}
          subtitle={card.subtitle}
          index={index}
        />
      ))}
    </div>
  );
}

export default WorkStepsDesktop;
