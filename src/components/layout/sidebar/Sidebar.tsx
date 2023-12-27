import Image from 'next/image';

import { Logout } from '@vat/icons/Logout';

import { SidebarMenu } from '@vat/components/layout/sidebar/sidebar-menu/SidebarMenu';
import { Button } from '@vat/components/ui/button/Button';

export const Sidebar = () => {
  return (
    <nav className='fixed left-0 top-0 flex h-screen flex-col items-center gap-4 rounded-r-lg bg-base-dark-bg-2 py-6'>
      <Image
        src='/assets/media/png/logo.png'
        width={224}
        height={224}
        alt='logo'
        className='h-14 w-14'
      />
      <ul className='h-full w-full flex flex-col items-center'>
        <SidebarMenu />
        <Button
          variant='ghost'
          className='z-10 mt-auto flex h-14 w-14 items-center justify-center'>
          <Logout className='z-10 h-6 w-6 text-primary' />
        </Button>
      </ul>
    </nav>
  );
};
