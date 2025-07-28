import React from 'react';

interface TitleProps {
  title: string | React.ReactNode;
}

function Title({ title }: TitleProps) {
  return <h3 className={'h3 px-10 text-dark-blue md:px-20'}>{title}</h3>;
}

export default Title;
