'use client';

import { useEffect } from 'react';

import { useSnackbarContext } from '@vat/context/snackbar-context/SnackbarContext';

import { cn } from '@vat/lib/utils';

import { cva } from 'class-variance-authority';

const snackbarVariants = cva(
  'fixed rounded-lg z-[99] bottom-4 animate-fade-in left-32 p-[14px] text-white',
  {
    variants: {
      variant: {
        info: 'bg-blue-500',
        error: 'bg-accents-bg-red text-accents-red',
        success: 'bg-accents-bg-green text-accents-green',
        warning: 'bg-yellow-500',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

export const Snackbar = () => {
  const { snackbarState, dispatch } = useSnackbarContext();
  const { severity, message } = snackbarState;

  useEffect(() => {
    if (severity) {
      setTimeout(() => {
        dispatch({ type: 'CLEAR_SNACKBAR' });
      }, 5000);
    }
  }, [severity]);

  if (!severity) return null;

  return (
    <div className={cn(snackbarVariants({ variant: severity }))}>
      <p className='text-body-lg-medium'>{message}</p>
    </div>
  );
};
