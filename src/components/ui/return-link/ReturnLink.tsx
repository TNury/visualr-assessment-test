'use client';

import { Children, ReactNode, cloneElement } from 'react';

import { useRouter } from 'next/navigation';

import { cn } from '@vat/lib/utils';

type ReturnLinkProps = {
  children: ReactNode;
};

/**
 * Renders a return link component that navigates back in the router history when clicked.
 * @param props - The component props.
 * @param props.children - The child elements to render.
 * @returns The rendered return link component.
 */
export const ReturnLink = ({ children }: ReturnLinkProps) => {
  const router = useRouter();

  return Children.map(children, (child) => {
    return cloneElement(child as React.ReactElement, {
      onClick: () => router.back(),
      className: cn(
        (child as React.ReactElement).props.className,
        'cursor-pointer'
      ),
      role: 'link',
    });
  });
};
