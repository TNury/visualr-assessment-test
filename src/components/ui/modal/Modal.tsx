'use client';

import { useEffect } from 'react';

import { ModalHead } from '@vat/components/ui/modal-head/ModalHead';
import { ReturnLink } from '@vat/components/ui/return-link/ReturnLink';

type ModalProps = {
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ children }) => {
  useEffect(() => {
    const bodyRef = document.querySelector('body');

    bodyRef.classList.add('overflow-hidden');

    return () => {
      bodyRef.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className='group fixed right-0 top-0 z-50 flex h-screen w-screen animate-fade-in items-center justify-center'>
      <ReturnLink>
        <div className='absolute inset-0 -z-10  bg-base-overlay' />
      </ReturnLink>

      <div className='z-60 flex min-h-[410px] min-w-[410px] flex-col rounded-2xl bg-base-dark-bg-2 pt-6'>
        {children}
      </div>
    </div>
  );
};
