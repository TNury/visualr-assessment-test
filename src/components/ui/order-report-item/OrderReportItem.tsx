import { OrderReportItemStatus } from '@vat/components/ui/order-report-item-status/OrderReportItemStatus';

import { returnFormattedPrice } from '@vat/lib/utils';

import { PaginatedOrderReportByDateQueryEntityProps } from '@vat/types/order.types';

type OrderReportItemPropsProps = {
  orderProps: PaginatedOrderReportByDateQueryEntityProps;
};

export const OrderReportItem: React.FC<OrderReportItemPropsProps> = ({
  orderProps,
}) => {
  return (
    <div className='flex gap-6 py-3 first:pt-4 last:pb-4'>
      <p className='w-[35%] text-body-base-regular text-text-lighter'>
        {orderProps.attributes.owner}
      </p>
      <p className='w-1/4 text-body-base-regular text-text-lighter'>
        {orderProps.attributes.dishes.data
          .map((entry) => entry.attributes.title)
          .join(', ')}
      </p>
      <p className='w-1/4 text-body-base-regular text-text-lighter'>
        {returnFormattedPrice(orderProps.attributes.total)}
      </p>
      <div className='w-[15%]'>
        <OrderReportItemStatus orderProps={orderProps} />
      </div>
    </div>
  );
};
