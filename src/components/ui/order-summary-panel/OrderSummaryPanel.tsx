'use client';

import { Button } from '@vat/components/ui/button/Button';

import { useOrderContext } from '@vat/context/order-context/OrderContext';

import { OrderSummary } from '../order-summary/OrderSummary';

export const OrderSummaryPanel = () => {
  const { orderState, dispatch } = useOrderContext();

  return (
    <div className='flex h-full flex-col'>
      <div className='flex flex-col gap-[42px] p-6'>
        <h1 className='text-heading-h2 text-white'>Order #34562</h1>
        <div className='flex gap-[42px]'>
          <p className='mr-auto text-body-lg-semibold text-white'>Item</p>
          <p className='text-body-lg-semibold text-white'>Qty</p>
          <p className='text-body-lg-semibold text-white'>Price</p>
        </div>
      </div>
      {orderState.items.length > 0 ? (
        <div className='flex h-full flex-col'>
          <OrderSummary orderState={orderState} dispatch={dispatch} />
          <div className='mt-[18px] px-6 pb-6'>
            <Button variant='contained'>Continue to Payment</Button>
          </div>
        </div>
      ) : (
        <div className='flex flex-col gap-6 px-6'>
          <hr className='border-base-dark-line' />
          <div className='flex flex-col items-center gap-4 text-center'>
            <h2 className='text-heading-h1 text-white'>Your cart is empty</h2>
            <p className='max-w-36 text-body-lg-semibold text-text-lighter'>
              Add items to create an order
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
