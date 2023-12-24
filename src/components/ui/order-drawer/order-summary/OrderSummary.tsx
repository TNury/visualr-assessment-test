'use client';

import { OrderSubtotals } from '@vat/components/ui/order-drawer/order-subtotals/OrderSubtotals';
import { OrderSummaryItem } from '@vat/components/ui/order-drawer/order-summary-item/OrderSummaryItem';

import { OrderStateProps } from '@vat/types/order.types';

type OrderSummaryProps = {
  dispatch: React.Dispatch<any>;
  orderState: OrderStateProps;
};

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  orderState,
  dispatch,
}) => {
  return (
    <div className='flex h-full flex-col'>
      <div className='flex h-full flex-col'>
        <hr className='mx-6 border-base-dark-line' />
        <div className='flex max-h-[390.4px] flex-1 flex-col gap-6 overflow-auto overscroll-contain px-6'>
          {orderState.items.map((orderItem, index) => (
            <div key={index} className='w-full first:pt-6 last:pb-6'>
              <OrderSummaryItem dispatch={dispatch} orderItem={orderItem} />
            </div>
          ))}
        </div>

        <hr className='mx-6 border-base-dark-line' />
        <OrderSubtotals orderState={orderState} />
      </div>
    </div>
  );
};
