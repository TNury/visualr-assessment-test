import React from 'react';

import { retrieveCookie } from '@vat/actions/cookies.actions';

import { OrderStateProps } from '@vat/types/order.types';

import { OrderProvider } from './order-context/OrderContext';

type RootProviderProps = {
  children: React.ReactNode;
};

export const RootProvider: React.FC<RootProviderProps> = async ({
  children,
}) => {
  const activeOrder: OrderStateProps = await retrieveCookie('order');

  return (
    <OrderProvider initialOrderData={activeOrder}>{children}</OrderProvider>
  );
};
