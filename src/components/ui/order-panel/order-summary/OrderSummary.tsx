'use client';

import { useOrderContext } from '@vat/context/order-context/OrderContext';

import { returnFormattedPrice } from '@vat/lib/utils';

import { OrderSummaryItem } from '../order-summary-item/OrderSummaryItem';

export const OrderSummary = () => {
  const { orderState, dispatch } = useOrderContext();

  return (
    <div className='flex h-full flex-col'>
      <hr className='mx-6 border-base-dark-line' />
      {orderState.items.length > 0 ? (
        <div className='flex h-full flex-col'>
          <div className='flex max-h-[480.4px] flex-1 flex-col gap-6 overflow-auto px-6'>
            {orderState.items.map((orderItem, index) => (
              <div key={index} className='w-full first:pt-6 last:pb-6'>
                <OrderSummaryItem dispatch={dispatch} orderItem={orderItem} />
              </div>
            ))}
          </div>

          <hr className='mx-6 border-base-dark-line' />
          <div className='flex flex-col gap-4 p-6'>
            <div className='flex justify-between'>
              <p className='text-body-base-regular text-text-light'>Discount</p>
              <p className='min-w-12 text-right text-body-lg-medium text-white'>
                {returnFormattedPrice(0)}
              </p>
            </div>
            <div className='flex justify-between'>
              <p className='text-body-base-regular text-text-light'>
                Sub total
              </p>
              <p className='min-w-12 text-right text-body-lg-medium text-white'>
                {returnFormattedPrice(orderState.subtotal)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center gap-4 text-center'>
          <h2 className='text-heading-h1 text-white'>Your cart is empty</h2>
          <p className='max-w-36 text-body-lg-semibold text-text-lighter'>
            Add items to create an order
          </p>
        </div>
      )}
    </div>
  );
};
