'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Appereance } from '@vat/icons/Appereance';
import { Discount } from '@vat/icons/Discount';
import { Notifications } from '@vat/icons/Notifications';
import { Restaurant } from '@vat/icons/Restaurant';
import { Security } from '@vat/icons/Security';

const menuItems = [
  {
    name: 'Appearance',
    description: 'Dark and Light mode, Font size',
    href: '/settings/appearance',
    icon: <Appereance />,
  },
  {
    name: 'Products Management',
    description: 'Manage your product, pricing, etc',
    href: '/settings/products-management',
    icon: <Discount />,
  },
  {
    name: 'Your Restaurant',
    description: 'Name, working hours, etc',
    href: '/settings/your-restaurant',
    icon: <Restaurant />,
  },
  {
    name: 'Notifications',
    description: 'Customize your notifications',
    href: '/settings/notifications',
    icon: <Notifications />,
  },
  {
    name: 'Security',
    description: 'Configure Password, PIN, etc',
    href: '/settings/security',
    icon: <Security />,
  },
];

export const SettingsMenu = () => {
  const pathname = usePathname();

  return (
    <nav className='h-full w-[275px] rounded-lg bg-base-dark-bg-2'>
      <ul className='h-full w-full overflow-clip rounded-lg bg-base-dark-bg-2'>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              data-active={item.href === pathname}
              className='hover:bg-base-dark-bg-1-hover group flex p-6 transition-all duration-150 data-[active="true"]:bg-primary-hover-2'>
              <div className='relative flex w-full flex-col gap-1'>
                <div className='flex w-full items-center gap-2'>
                  <div className='text-text-light group-data-[active="true"]:!text-primary'>
                    {item.icon}
                  </div>
                  <p className='text-body-base-medium text-white group-data-[active="true"]:!text-primary'>
                    {item.name}
                  </p>
                </div>
                <p className='ml-[24px] text-body-sm-regular text-text-light'>
                  {item.description}
                </p>
                {item.href === pathname && (
                  <div className='absolute -right-6 top-0 h-full w-1 rounded-full bg-primary' />
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
