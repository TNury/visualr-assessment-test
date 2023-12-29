'use client';

import { cn } from '@vat/lib/utils';

import { type VariantProps, cva } from 'class-variance-authority';

// @ TODO, GET RID OF THE ARBITRARY PADDING VALUE OF 14PX
// @ TODO, CHECK THE PADDING OF THE SM VARIANT
const buttonVariants = cva(
  'w-full p-[14px] text-sm font-semibold leading-[140%] transition-colors duration-150 active:opacity-70 disabled:pointer-events-none disabled:opacity-70',
  {
    variants: {
      variant: {
        ghost: 'bg-transparent text-primary hover:bg-primary-hover-2',
        'ghost-2':
          'bg-primary-hover-2 text-primary hover:bg-primary hover:text-white',
        'ghost-3':
          'bg-transparent text-text-lighter hover:bg-base-dark-bg-1 hover:text-white',
        'ghost-4':
          'bg-base-dark-bg-1 text-text-lighter hover:bg-base-form-bg hover:text-white',
        'ghost-5': 'bg-transparent text-primary hover:bg-base-form-bg-hover',
        contained: 'bg-primary text-base-bg shadow-md hover:bg-primary-hover-1',
        'contained-2': 'bg-primary text-base-bg hover:bg-primary-hover-1',
        outlined:
          'border border-primary bg-transparent text-primary hover:bg-primary-hover-2',
        'outlined-2':
          'border border-base-dark-line bg-base-dark-bg-2 text-white hover:bg-base-dark-bg-1',
      },
      shape: {
        rounded: 'rounded-lg',
        'rounded-bottom': 'rounded-b-lg',
      },
      layout: {
        centered: 'flex items-center justify-center',
      },
      size: {
        default: 'h-12',
        sm: 'h-8',
        'icon-1': 'h-12 w-12 p-0',
        'icon-2': 'h-14 w-14 p-0',
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
  const { children, className, variant, size, shape, layout, ...restOfProps } =
    props;

  return (
    <button
      className={cn(
        buttonVariants({ variant, size, shape, layout, className })
      )}
      {...restOfProps}>
      {children}
    </button>
  );
};
