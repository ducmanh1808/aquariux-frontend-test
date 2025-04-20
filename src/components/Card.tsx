import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type CardProps = {
  className?: string;
};

const Card: React.FC<PropsWithChildren<CardProps>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={twMerge(
        'bg-white text-black rounded-lg p-6 shadow-lg',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
