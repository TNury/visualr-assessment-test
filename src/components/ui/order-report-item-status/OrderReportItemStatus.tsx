import { cn } from '@vat/lib/utils';

import { OrderReportByPaginationResponseEntityProps } from '@vat/types/order.types';

import { VariantProps, cva } from 'class-variance-authority';

// @ TODO, GET RID OF THE ARBITRARY PADDING VALUE OF 14PX
// @ TODO, CHECK THE PADDING OF THE SM VARIANT
const orderReportItemStatusVariants = cva(
  'h-fit w-full text-center rounded-full px-3 py-1',
  {
    variants: {
      variant: {
        completed: 'bg-accents-bg-green text-accents-green',
        pending: 'bg-accents-bg-orange text-accents-orange',
        preparing: 'bg-accents-bg-purple text-accents-purple',
      },
    },
    defaultVariants: {
      variant: 'completed',
    },
  }
);

type OrderReportItemStatus = {
  orderProps: OrderReportByPaginationResponseEntityProps;
};

export const OrderReportItemStatus: React.FC<OrderReportItemStatus> = ({
  orderProps,
}) => {
  const status = orderProps.attributes.status;

  return (
    <div
      className={cn(
        orderReportItemStatusVariants({
          variant: status.toLowerCase() as
            | 'completed'
            | 'pending'
            | 'preparing',
        })
      )}>
      <p className='text-body-base-medium'>{status}</p>
    </div>
  );
};