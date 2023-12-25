'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

type DrawerProps = {
  open: boolean;
  children: React.ReactNode;
};

export const Drawer: React.FC<DrawerProps> = ({ open, children }) => {
  useEffect(() => {
    const bodyRef = document.querySelector('body');

    if (open) {
      bodyRef.classList.add('overflow-hidden');
    }

    return () => {
      bodyRef.classList.remove('overflow-hidden');
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      data-open={open}
      className='group fixed right-0 top-0 z-50 flex h-screen w-screen flex-col items-end rounded-l-lg data-[open="false"]:pointer-events-none'>
      <Link href='/' scroll={false}>
        <div className='animate-fade-in absolute inset-0 -z-10 bg-base-overlay' />
      </Link>
      <div className='z-60 animate-slide-in-left h-screen w-fit'>
        {children}
      </div>
    </div>
  );
};
