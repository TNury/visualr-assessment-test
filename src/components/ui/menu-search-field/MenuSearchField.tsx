'use client';

import { ChangeEvent, useCallback } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { TextField } from '@vat/components/ui/text-field/TextField';

export const MenuSearchField = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const returnMenu = useCallback(() => {
    return searchParams.get('menu');
  }, []);

  let interval: NodeJS.Timeout;
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (interval) {
      clearInterval(interval);
    }

    interval = setTimeout(() => {
      if (value) {
        router.replace(`?search=${value}`);
      } else {
        router.push(`?menu=${returnMenu()}`);
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
