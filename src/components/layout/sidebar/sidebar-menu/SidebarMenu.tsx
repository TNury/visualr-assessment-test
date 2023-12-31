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

  const handleHighlight = (href: string) => {
    if (href !== '/') {
      return pathname.includes(href);
    } else {
      return pathname === href;
    }
  };

  return (
    <ul className='flex flex-col overflow-hidden pl-3 pr-0'>
      {navLinks.map((entry, index) => (
        <li key={index}>
          <Link
            href={entry.href}
            data-active={handleHighlight(entry.href)}
            className='group relative -mr-[1px] flex items-center justify-center pr-0'>
            <Background className='text-base-dark-bg-1 transition-transform duration-150 group-data-[active="false"]:translate-x-full' />

            <Button
              variant={handleHighlight(entry.href) ? 'contained' : 'ghost-5'}
              layout='centered'
              size='icon-2'
              className='z-10 text-primary absolute left-3 group-data-[active="true"]:text-white'
              role='none'
              tabIndex={-1}>
              {icons[entry.id]}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};
