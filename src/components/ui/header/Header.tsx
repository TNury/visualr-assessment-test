import React from 'react';

import Link from 'next/link';

import { getMenusData } from '@vat/actions/menu.actions';
import { TextField } from '@vat/components/ui/text-field/TextField';

// @TODO - CORRECT ARBRITRARY VALUES
export const Header = async () => {
  const menusData = await getMenusData();

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex w-full flex-col justify-start gap-1'>
          <h1 className='text-heading-h1 text-white'>Jaegar Resto</h1>
          <p className='text-body-lg-regular text-text-lighter'>
            Tuesday 2 Feb, 2021
          </p>
        </div>
        <TextField icon='search' />
      </div>
      <div className='flex gap-8'>
        {menusData.data.menus.data.map((entry, index) => (
          <Link
            href={`/?menu=${entry.id}`}
            key={index}
            className='flex flex-col gap-3'
            role='button'>
            <p
              data-active={index === 0}
              className='text-body-base-semibold text-white data-[active="true"]:text-primary'>
              {entry.attributes.title}
            </p>
            {index === 0 && (
              <div className='h-[3px] w-9 rounded-sm bg-primary' />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
