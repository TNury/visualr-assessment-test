'use client';

import { useOrderContext } from '@vat/context/order-context/OrderContext';

import { OrderSummaryItem } from '../order-summary-item/OrderSummaryItem';

export const OrderSummary = () => {
  const { orderState, dispatch } = useOrderContext();

  return orderState.items.length > 0 ? (
    <div className='flex flex-col gap-6'>
      {orderState.items.map((orderItem) => (
        <OrderSummaryItem
          dispatch={dispatch}
          key={orderItem.id}
          orderItem={orderItem}
        />
      ))}
    </div>
  ) : (
    <div className='flex flex-col items-center gap-4 text-center'>
      <h2 className='text-heading-h1 text-white'>Your cart is empty</h2>
      <p className='max-w-36 text-body-lg-semibold text-text-lighter'>
        Add items to create an order
      </p>
    </div>
  );
};
