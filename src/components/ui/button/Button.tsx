'use client';

import { cn } from '@vat/lib/utils';

import { type VariantProps, cva } from 'class-variance-authority';

// @ TODO, GET RID OF THE ARBITRARY PADDING VALUE OF 14PX
// @ TODO, CHECK THE PADDING OF THE SM VARIANT
const buttonVariants = cva(
  'w-full p-[14px] text-sm font-semibold leading-[140%] disabled:opacity-70 disabled:pointer-events-none transition-all duration-150',
  {
    variants: {
      variant: {
        base: 'bg-transparent text-primary hover:bg-primary-hover-2 active:opacity-70',
        'base-2':
          'bg-primary-hover-2 text-primary hover:text-white hover:bg-primary active:opacity-70',
        contained:
          'bg-primary text-base-bg shadow-md hover:bg-primary-hover-1 active:opacity-70',
        'contained-secondary':
          'bg-primary text-base-bg hover:bg-primary-hover-1 active:opacity-70',
        outlined:
          'bg-transparent border text-primary border-primary hover:bg-primary-hover-2 active:opacity-70',
      },
      shape: {
        rounded: 'rounded-lg',
        'rounded-bottom': 'rounded-b-lg',
      },
      size: {
        default: 'h-12',
        sm: 'h-8',
      },
    },
    defaultVariants: {
      shape: 'rounded',
      variant: 'contained',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, variant, size, shape, ...restOfProps } = props;

  return (
    <button
      className={cn(buttonVariants({ variant, size, shape, className }))}
      {...restOfProps}>
      {children}
    </button>
  );
};
