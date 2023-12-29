'use client';

import { Children, ReactNode, cloneElement, useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { cn } from '@vat/lib/utils';

type AddQueryLinkProps = {
  query: string;
  children: ReactNode;
};

export const AddQueryLink = ({ query, children }: AddQueryLinkProps) => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [search, setSearch] = useState('');

  useEffect(() => {
    let search = [];

    let i = 0;
    for (const [key, value] of searchParams.entries()) {
      if (i === 0) {
        search.push(`?${key}=${value}`);
      } else {
        search.push(`&${key}=${value}`);
      }

      i++;
    }

    setSearch(search.join(''));
  }, [searchParams]);

  return Children.map(children, (child) => {
    return cloneElement(child as React.ReactElement, {
      onClick: () => {
        router.push(`${search}&${query}`);
      },
      className: cn(
        (child as React.ReactElement).props.className,
        'cursor-pointer'
      ),
      role: 'link',
    });
  });
};
