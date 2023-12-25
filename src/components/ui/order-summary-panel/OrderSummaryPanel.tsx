'use client';

import Link from 'next/link';

import { Button } from '@vat/components/ui/button/Button';
import { Add } from '@vat/components/ui/icons/Add';
import { Back } from '@vat/components/ui/icons/Back';
import { OrderSummary } from '@vat/components/ui/order-summary/OrderSummary';

import { useOrderContext } from '@vat/context/order-context/OrderContext';

export const OrderSummaryPanel = () => {
  const { orderState, dispatch } = useOrderContext();

  return (
    <div className='flex h-full w-[410px] flex-col'>
      <div className='mx-6 flex flex-col gap-4 border-b border-base-dark-line py-6'>
        <Link href='/' scroll={false} className='w-fit'>
          <Back className='text-white' />
        </Link>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-heading-h1 text-white'>Your order</h1>
            <p className='text-body-lg-medium text-text-light'>
              {`Order ID #${orderState.id}`}
            </p>
          </div>
          <Link href='/' scroll={false}>
            <Button variant='contained-secondary' className='w-fit'>
              <Add className='h-5 w-5' />
            </Button>
          </Link>
        </div>
      </div>

      <OrderSummary
        maxHeight={268}
        orderState={orderState}
        dispatch={dispatch}
      />
    </div>
  );
};
