import React from 'react';

import Link from 'next/link';

import { Drawer } from '@vat/components/ui/drawer/Drawer';
import { Back } from '@vat/components/ui/icons/Back';

import { DishCreationForm } from '../dish-creation-form/DishCreationForm';

type DishCreationDrawerProps = {
  menuId: string;
  menuTitle: string;
};

export const DishCreationDrawer: React.FC<DishCreationDrawerProps> = ({
  menuId,
  menuTitle,
}) => {
  return (
    <Drawer
      urlToReturnTo={{
        pathname: '/settings/products-management',
        query: { menu: menuId },
      }}>
      <div className='flex h-full w-[410px] flex-col overflow-auto py-6'>
        <div className='mx-6 flex flex-col gap-4 border-b border-base-dark-line pb-6'>
          <Link href='/' scroll={false} className='w-fit'>
            <Back className='text-white' />
          </Link>
          <div className='flex flex-col gap-2'>
            <h1 className='text-heading-h1 text-white'>Create a new dish</h1>
            <p className='text-body-lg-medium text-text-light'>
              Fill in the details below to create a new dish for the{' '}
              <span className='text-body-lg-semibold text-white'>
                {menuTitle}
              </span>{' '}
              menu
            </p>
          </div>
        </div>

        <DishCreationForm menuId={menuId} />
      </div>
    </Drawer>
  );
};
