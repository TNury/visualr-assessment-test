'use client';

import { ChangeEvent } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { TextField } from '@vat/components/ui/text-field/TextField';

export const MenuSearchField = () => {
  const searchParams = useSearchParams();
  const activeMenu = searchParams.get('menu');

  const router = useRouter();

  let interval: NodeJS.Timeout;
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (interval) {
      clearInterval(interval);
    }

    interval = setTimeout(() => {
      if (value) {
        router.push(`/?menu=${activeMenu}&search=${value}`);
      } else {
        router.push(`/?menu=${activeMenu}`);
      }
    }, 1000);
  };

  return (
    <TextField
      icon='search'
      placeholder='Search for food, coffee, etc...'
      onChange={handleSearch}
    />
  );
};
