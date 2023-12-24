'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Background } from '@vat/icons/Background';
import { Dashboard } from '@vat/icons/Dashboard';
import { Home } from '@vat/icons/Home';
import { Settings } from '@vat/icons/Settings';

import { Button } from '@vat/components/ui/button/Button';

const icons = {
  home: <Home className='z-10 h-6 w-6' />,
  dashboard: <Dashboard className='z-10 h-6 w-6' />,
  settings: <Settings className='z-10 h-6 w-6' />,
};

const navLinks = [
  {
    id: 'home',
    href: '/',
  },
  {
    id: 'dashboard',
    href: '/dashboard',
  },
  {
    id: 'settings',
    href: '/settings',
  },
];

export const SidebarMenu = () => {
  const pathname = usePathname();

  return (
    <div className='flex flex-col pl-3 pr-0'>
      {navLinks.map((entry, index) => (
        <Link
          key={index}
          href={entry.href}
          data-active={pathname === entry.href}
          className='group relative -mr-[1px] flex items-center justify-center pr-0'>
          <Background className='text-base-dark-bg-1 opacity-0 group-data-[active="true"]:opacity-100' />

          <Button
            variant={pathname === entry.href ? 'contained' : 'base'}
            className='absolute left-3 z-10 flex h-14 w-14 items-center justify-center text-primary group-data-[active="true"]:text-white'>
            {icons[entry.id]}
          </Button>
        </Link>
      ))}
    </div>
  );
};
