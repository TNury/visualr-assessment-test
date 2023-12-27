import React from 'react';

import { cn } from '@vat/lib/utils';

type PlaceholderMessageProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  body: string;
  bodySize?: 'base' | 'lg';
};

export const PlaceholderMessage: React.FC<PlaceholderMessageProps> = ({
  title,
  body,
  bodySize = 'base',
  className,
  ...restOfProps
}) => {
  return (
    <div
      {...restOfProps}
      className={cn(
        'flex flex-1 flex-col items-center gap-1 p-6 text-center',
        className
      )}>
      <h2 className='text-heading-h1 text-white'>{title}</h2>
      <p
        className={cn(
          'text-body-lg-regular text-text-lighter',
          bodySize === 'base' ? 'max-w-36' : 'max-w-80'
        )}>
        {body}
      </p>
    </div>
  );
};
