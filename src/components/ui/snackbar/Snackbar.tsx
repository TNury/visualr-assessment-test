'use client';

import { useEffect } from 'react';

import { cn } from '@vat/lib/utils';

import { type VariantProps, cva } from 'class-variance-authority';

const snackbarVariants = cva(
  'fixed rounded-lg bottom-4 animate-fade-in left-4 p-[14px] text-white',
  {
    variants: {
      variant: {
        default: 'bg-blue-500',
        error: 'bg-accents-bg-red text-accents-red',
        success: 'bg-accents-bg-green text-accents-green',
        warning: 'bg-yellow-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface SnackbarProps extends VariantProps<typeof snackbarVariants> {
  open: boolean;
  message: string;
  onClose?: () => void;
}

export const Snackbar = (props: SnackbarProps) => {
  const { open, message, variant, onClose } = props;

  useEffect(() => {
    if (open && onClose) {
      setTimeout(() => {
        onClose();
      }, 5000);
    }
  }, [open]);

  return (
    open && (
      <div className={cn(snackbarVariants({ variant }))}>
        <p className='text-body-lg-medium'>{message}</p>
      </div>
    )
  );
};
