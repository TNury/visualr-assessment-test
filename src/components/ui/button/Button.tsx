'use client';

import { Add } from '@vat/icons/Add';
import { cn } from '@vat/lib/utils';

import { type VariantProps, cva } from 'class-variance-authority';

// @ TODO, GET RID OF THE ARBITRARY PADDING VALUE OF 14PX
// @ TODO, CHECK THE PADDING OF THE SM VARIANT
const buttonVariants = cva(
  'w-full p-[14px] font-semibold leading-[140%] rounded-lg flex gap-2 items-center justify-center',
  {
    variants: {
      variant: {
        text: 'bg-transparent text-primary hover:bg-primary-hover-2 active:opacity-70',
        contained:
          'bg-primary text-base-bg shadow-primary hover:bg-primary-hover-1 active:opacity-70',
        outlined:
          'bg-transparent border text-primary rounded-lg border-primary active:opacity-70',
      },
      size: {
        default: '',
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
    VariantProps<typeof buttonVariants> {
  icon?: 'add';
}

const icons = {
  add: <Add className='w-5 h-5' />,
};

export const Button = (props: ButtonProps) => {
  const { children, className, variant, size, icon, ...restOfProps } = props;

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...restOfProps}>
      {icon && icons[icon]}
      {children}
    </button>
  );
};
