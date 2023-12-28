'use client';

import { ChangeEvent } from 'react';

import { useRouter } from 'next/navigation';

import { TextField } from '@vat/components/ui/text-field/TextField';

export const MenuSearchField = () => {
  const router = useRouter();

  let interval: NodeJS.Timeout;
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (interval) {
      clearInterval(interval);
    }

    interval = setTimeout(() => {
      if (value) {
        router.push(`?search=${value}`);
      } else {
        router.back();
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
