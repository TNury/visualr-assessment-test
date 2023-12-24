import { returnFormattedPrice } from '@vat/lib/utils';

import { OrderStateProps } from '@vat/types/order.types';

type OrderSubtotalsProps = {
  orderState: OrderStateProps;
};

export const OrderSubtotals: React.FC<OrderSubtotalsProps> = ({
  orderState,
}) => {
  return (
    <div className='flex flex-col gap-4 p-6'>
      <div className='flex justify-between'>
        <p className='text-body-base-regular text-text-light'>Discount</p>
        <p className='min-w-12 text-right text-body-lg-medium text-white'>
          {returnFormattedPrice(0)}
        </p>
      </div>
      <div className='flex justify-between'>
        <p className='text-body-base-regular text-text-light'>Sub total</p>
        <p className='min-w-12 text-right text-body-lg-medium text-white'>
          {returnFormattedPrice(orderState.subtotal)}
        </p>
      </div>
    </div>
  );
};
