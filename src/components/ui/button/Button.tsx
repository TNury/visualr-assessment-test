'use client';

import { cn } from '@vat/lib/utils';

import { type VariantProps, cva } from 'class-variance-authority';

// @ TODO, GET RID OF THE ARBITRARY PADDING VALUE OF 14PX
// @ TODO, CHECK THE PADDING OF THE SM VARIANT
const buttonVariants = cva(
  'w-full p-[14px] text-sm font-semibold leading-[140%] rounded-lg',
  {
    variants: {
      variant: {
        base: 'bg-transparent text-primary hover:bg-primary-hover-2 active:opacity-70',
        contained:
          'bg-primary text-base-bg shadow-md hover:bg-primary-hover-1 active:opacity-70',
        outlined:
          'bg-transparent border text-primary rounded-lg border-primary hover:bg-primary-hover-2 active:opacity-70',
      },
      size: {
        default: 'h-12',
        sm: 'h-8',
      },
    },
    defaultVariants: {
      variant: 'contained',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, variant, size, ...restOfProps } = props;

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...restOfProps}>
      {children}
    </button>
  );
};
