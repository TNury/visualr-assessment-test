import { capitalizeFirstLetter, cn } from '@vat/lib/utils';

import { PaginatedOrderReportByDateQueryEntityProps } from '@vat/types/order.types';

import { VariantProps, cva } from 'class-variance-authority';

// @ TODO, GET RID OF THE ARBITRARY PADDING VALUE OF 14PX
// @ TODO, CHECK THE PADDING OF THE SM VARIANT
const orderReportItemStatusVariants = cva(
  'h-fit w-full rounded-full px-3 py-1 text-center',
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
  status: 'completed' | 'pending' | 'preparing';
};

export const OrderReportItemStatus: React.FC<OrderReportItemStatus> = ({
  status,
}) => {
  return (
    <div
      className={cn(
        orderReportItemStatusVariants({
          variant: status,
        })
      )}>
      <p className='text-body-base-medium'>{capitalizeFirstLetter(status)}</p>
    </div>
  );
};
