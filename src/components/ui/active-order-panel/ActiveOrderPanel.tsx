'use client';

import { AddQueryLink } from '@vat/components/ui/add-query-link/AddQueryLink';
import { Button } from '@vat/components/ui/button/Button';
import { OrderSummary } from '@vat/components/ui/order-summary/OrderSummary';
import { PlaceholderMessage } from '@vat/components/ui/placeholder-message/PlaceholderMessage';

import { useOrderContext } from '@vat/context/order-context/OrderContext';

export const ActiveOrderPanel = () => {
  const { orderState, dispatch } = useOrderContext();

  return (
    <div className='fixed right-0 top-0 z-40 flex h-full w-[410px] flex-col rounded-l-lg bg-base-dark-bg-2'>
      <div className='mx-6 flex flex-col gap-[42px] border-b border-base-dark-line py-6'>
        <h1 className='text-heading-h2 text-white'>{`Order #${orderState.id}`}</h1>
        <div className='flex gap-[42px]'>
          <p className='mr-auto text-body-lg-semibold text-white'>Item</p>
          <p className='text-body-lg-semibold text-white'>Qty</p>
          <p className='text-body-lg-semibold text-white'>Price</p>
        </div>
      </div>
      {orderState.items.length > 0 ? (
        <div className='grid h-full grid-rows-[1fr,auto] overflow-auto'>
          <OrderSummary orderState={orderState} dispatch={dispatch} />

          <div className='mt-auto px-6 pb-6 pt-4.5'>
            <AddQueryLink query='openConfirmationDrawer=true'>
              <Button variant='contained'>Continue to Payment</Button>
            </AddQueryLink>
          </div>
        </div>
      ) : (
        <PlaceholderMessage
          title='Your cart is empty'
          body='Add items to create an order'
        />
      )}
    </div>
  );
};
