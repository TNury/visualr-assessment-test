'use client';

import { useEffect } from 'react';

import Link, { LinkProps } from 'next/link';

type DrawerProps = {
  children: React.ReactNode;
  urlToReturnTo: LinkProps['href'];
};

export const Drawer: React.FC<DrawerProps> = ({ children, urlToReturnTo }) => {
  useEffect(() => {
    const bodyRef = document.querySelector('body');

    bodyRef.classList.add('overflow-hidden');

    return () => {
      bodyRef.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className='group fixed right-0 top-0 z-50 flex h-screen w-screen flex-col items-end rounded-l-lg'>
      <Link href={urlToReturnTo} scroll={false}>
        <div className='absolute inset-0 -z-10 animate-fade-in bg-base-overlay' />
      </Link>
      <div className='z-60 h-screen w-fit animate-slide-in-left'>
        {children}
      </div>
    </div>
  );
};
