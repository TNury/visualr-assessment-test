'use client';

import { Button } from '@vat/components/ui/button/Button';
import { Add } from '@vat/components/ui/icons/Add';
import { Back } from '@vat/components/ui/icons/Back';
import { OrderSummary } from '@vat/components/ui/order-summary/OrderSummary';
import { ReturnLink } from '@vat/components/ui/return-link/ReturnLink';

import { useOrderContext } from '@vat/context/order-context/OrderContext';

export const OrderSummaryPanel = () => {
  const { orderState, dispatch } = useOrderContext();

  return (
    <div className='flex h-full w-[410px] flex-col'>
      <div className='mx-6 flex flex-col gap-4 border-b border-base-dark-line py-6'>
        <ReturnLink>
          <Back className='text-white' />
        </ReturnLink>

        <div className='flex items-center gap-4 justify-between'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-heading-h1 text-white'>Your order</h1>
            <p className='text-body-lg-medium text-text-light'>
              {`Order ID #${orderState.id}`}
            </p>
          </div>
          <ReturnLink>
            <Button variant='contained-2' className='w-12 h-12' tabIndex={-1}>
              <Add className='h-5 w-5' />
            </Button>
          </ReturnLink>
        </div>
      </div>

      <OrderSummary orderState={orderState} dispatch={dispatch} />
    </div>
  );
};
