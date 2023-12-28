'use client';

import { useEffect } from 'react';

import { ReturnLink } from '@vat/components/ui/return-link/ReturnLink';

type DrawerProps = {
  children: React.ReactNode;
};

export const Drawer: React.FC<DrawerProps> = ({ children }) => {
  useEffect(() => {
    const bodyRef = document.querySelector('body');

    bodyRef.classList.add('overflow-hidden');

    return () => {
      bodyRef.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className='group fixed right-0 top-0 z-50 flex h-screen w-screen flex-col items-end'>
      <ReturnLink>
        <div className='absolute inset-0 -z-10 animate-fade-in bg-base-overlay' />
      </ReturnLink>

      <div className='z-60 flex h-screen animate-slide-in-left rounded-l-2xl bg-base-dark-bg-2'>
        <div id='drawerContent' className='flex h-full w-fit flex-col'>
          {children}
        </div>
      </div>
    </div>
  );
};
