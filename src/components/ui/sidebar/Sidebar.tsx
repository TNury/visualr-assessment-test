'use client';

import Image from 'next/image';

import { Button } from '@vat/components/ui/button/Button';
import { Background } from '@vat/icons/Background';
import { Dashboard } from '@vat/icons/Dashboard';
import { Home } from '@vat/icons/Home';
import { Logout } from '@vat/icons/Logout';
import { Settings } from '@vat/icons/Settings';

export const Sidebar = () => {
  return (
    <div className='fixed left-0 top-0 gap-4 flex h-screen flex-col items-center rounded-r-lg bg-base-dark-bg-2 py-6'>
      <Image
        src='/assets/media/png/logo.png'
        width={224}
        height={224}
        alt='logo'
        className='h-14 w-14'
      />
      <div className='flex flex-col pl-3 pr-0'>
        <div className='relative -mr-[1px] flex items-center justify-center pr-0'>
          <Background className='text-base-dark-bg-1' />
          <Button
            variant='contained'
            className='absolute left-3 z-10 flex h-14 w-14 items-center justify-center'>
            <Home className='z-10 h-6 w-6 text-white' />
          </Button>
        </div>

        <div className='relative -mr-[1px] flex items-center justify-center pr-0'>
          <Background className='text-base-dark-bg-1 opacity-0' />
          <Button
            variant='base'
            className='absolute left-3 z-10 flex h-14 w-14 items-center justify-center'>
            <Dashboard className='z-10 h-6 w-6 text-primary' />
          </Button>
        </div>
        <div className='relative -mr-[1px] flex items-center justify-center pr-0'>
          <Background className='text-base-dark-bg-1 opacity-0' />
          <Button
            variant='base'
            className='absolute left-3 z-10 flex h-14 w-14 items-center justify-center'>
            <Settings className='z-10 h-6 w-6 text-primary' />
          </Button>
        </div>
      </div>
      <Button
        variant='base'
        className='z-10 mt-auto flex h-14 w-14 items-center justify-center'>
        <Logout className='z-10 h-6 w-6 text-primary' />
      </Button>
    </div>
  );
};
