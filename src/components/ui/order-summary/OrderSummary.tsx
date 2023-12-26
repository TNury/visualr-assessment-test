'use client';

import { OrderSubtotals } from '@vat/components/ui/order-subtotals/OrderSubtotals';
import { OrderSummaryItem } from '@vat/components/ui/order-summary-item/OrderSummaryItem';

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
    <div className='flex h-full flex-col overflow-auto'>
      <div className='flex flex-col gap-6 overflow-auto overscroll-contain px-6'>
        {orderState.items.map((orderItem, index) => (
          <div key={index} className='w-full first:pt-6 last:pb-6'>
            <OrderSummaryItem dispatch={dispatch} orderItem={orderItem} />
          </div>
        ))}
      </div>

      <OrderSubtotals orderState={orderState} />
    </div>
  );
};
