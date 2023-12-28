'use client';

import { Button } from '@vat/components/ui/button/Button';
import { Add } from '@vat/components/ui/icons/Add';
import { Back } from '@vat/components/ui/icons/Back';
import { OrderSummary } from '@vat/components/ui/order-summary/OrderSummary';
import { ReturnLink } from '@vat/components/ui/return-link/ReturnLink';

import { useOrderContext } from '@vat/context/order-context/OrderContext';

import { DrawerHead } from '../drawer-head/DrawerHead';

export const OrderSummaryPanel = () => {
  const { orderState, dispatch } = useOrderContext();

  return (
    <div className='flex h-full w-[410px] flex-col'>
      <DrawerHead
        title='Your order'
        subtitle={`Order ID #${orderState.id}`}
        className='py-6'
        endAddornment={
          <ReturnLink>
            <Button variant='contained-2' className='h-12 w-12' tabIndex={-1}>
              <Add className='h-5 w-5' />
            </Button>
          </ReturnLink>
        }
      />

      <OrderSummary orderState={orderState} dispatch={dispatch} />
    </div>
  );
};
