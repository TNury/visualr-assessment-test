'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Button } from '@vat/components/ui/button/Button';

import { useOrderContext } from '@vat/context/order-context/OrderContext';

import { OrderSummary } from '../order-summary/OrderSummary';

export const ActiveOrderPanel = () => {
  const { orderState, dispatch } = useOrderContext();
  const activeMenu = useSearchParams().get('menu');

  return (
    <div className='fixed right-0 top-0 z-40 flex h-full w-[410px] flex-col rounded-l-lg bg-base-dark-bg-2'>
      <div className='mx-6 flex flex-col gap-[42px] border-b border-base-dark-line py-6'>
        <h1 className='text-heading-h2 text-white'>Order #34562</h1>
        <div className='flex gap-[42px]'>
          <p className='mr-auto text-body-lg-semibold text-white'>Item</p>
          <p className='text-body-lg-semibold text-white'>Qty</p>
          <p className='text-body-lg-semibold text-white'>Price</p>
        </div>
      </div>
      {orderState.items.length > 0 ? (
        <div className='flex h-full flex-col'>
          <OrderSummary
            maxHeight={390.4}
            orderState={orderState}
            dispatch={dispatch}
          />
          <div className='mt-[18px] px-6 pb-6'>
            <Link href={`/?menu=${activeMenu}&openConfirmationDrawer=true`}>
              <Button variant='contained'>Continue to Payment</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center gap-4 p-6 text-center'>
          <h2 className='text-heading-h1 text-white'>Your cart is empty</h2>
          <p className='max-w-36 text-body-lg-semibold text-text-lighter'>
            Add items to create an order
          </p>
        </div>
      )}
    </div>
  );
};
