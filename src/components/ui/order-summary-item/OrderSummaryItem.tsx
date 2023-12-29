'use client';

import { Dispatch } from 'react';

import { useRouter } from 'next/navigation';

import { Trash } from '@vat/icons/Trash';

import { Button } from '@vat/components/ui/button/Button';
import { RoundedImage } from '@vat/components/ui/rounded-image/RoundedImage';
import { TextField } from '@vat/components/ui/text-field/TextField';

import { returnFormattedPrice, returnMediaProps } from '@vat/lib/utils';

import { OrderActionProps, OrderItemProps } from '@vat/types/order.types';

type OrderSummaryItemProps = {
  orderItem: OrderItemProps;
  // useContext is called in OrderSummaryItem.tsx to pass the dispatch function,
  // preventing unnecessary re-renders of OrderSummary.tsx and its children on orderState changes,
  // and avoiding a React warning.
  dispatch: Dispatch<OrderActionProps>;
  isLastItem: boolean;
};

export const OrderSummaryItem: React.FC<OrderSummaryItemProps> = ({
  orderItem,
  dispatch,
  isLastItem,
}) => {
  const router = useRouter();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');

    const quantity = parseInt(value);

    if (Number.isNaN(quantity)) {
      dispatch({
        type: 'UPDATE_QUANTITY',
        id: orderItem.id,
        quantity: 0,
      });

      return;
    }

    dispatch({ type: 'UPDATE_QUANTITY', id: orderItem.id, quantity });
  };

  const handleQuantityOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');

    const quantity = parseInt(value);

    if (quantity === 0) {
      handleRemoveClick();

      return;
    }
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const notes = e.target.value;
    dispatch({ type: 'UPDATE_NOTES', id: orderItem.id, notes });
  };

  const handleRemoveClick = () => {
    dispatch({ type: 'REMOVE_ITEM', id: orderItem.id });

    if (isLastItem) {
      router.back();
    }
  };

  return (
    <div className='flex flex-col gap-2.5'>
      <div className='flex items-center gap-4'>
        <RoundedImage
          src={returnMediaProps(orderItem.media.data).src}
          alt={orderItem.title}
          width={528}
          height={528}
          className='h-10 w-10 object-cover'
        />

        <div className='flex flex-col gap-2'>
          <p className='w-36 truncate text-body-base-medium text-white'>
            {orderItem.title}
          </p>
          <p className='text-body-base-medium text-text-light'>
            {returnFormattedPrice(orderItem.price)}
          </p>
        </div>
        <TextField
          value={orderItem.quantity}
          className='w-12 text-center'
          variant='text-body-lg-medium'
          wrapperProps={{ className: 'ml-auto' }}
          onChange={handleQuantityChange}
          onBlur={handleQuantityOnBlur}
        />
        <p className='min-w-12 text-right text-body-lg-medium text-white'>
          {returnFormattedPrice(orderItem.price * orderItem.quantity)}
        </p>
      </div>
      <div className='flex gap-4'>
        <TextField
          value={orderItem.notes}
          placeholder='Order Note...'
          className='w-full'
          onChange={handleNotesChange}
          wrapperProps={{ className: 'flex-1' }}
        />
        <Button
          variant='outlined'
          size='icon-1'
          layout='centered'
          onClick={handleRemoveClick}>
          <Trash className='h-5 w-5' />
        </Button>
      </div>
    </div>
  );
};
