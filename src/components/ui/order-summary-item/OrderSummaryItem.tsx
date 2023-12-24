'use client';

import { Dispatch } from 'react';

import Image from 'next/image';

import { Trash } from '@vat/icons/Trash';

import { Button } from '@vat/components/ui/button/Button';
import { TextField } from '@vat/components/ui/text-field/TextField';

import { returnFormattedPrice, returnMediaProps } from '@vat/lib/utils';

import { OrderActionProps, OrderItemProps } from '@vat/types/order.types';

type OrderSummaryItemProps = {
  orderItem: OrderItemProps;
  // useContext is called in OrderSummaryItem.tsx to pass the dispatch function,
  // preventing unnecessary re-renders of OrderSummary.tsx and its children on orderState changes,
  // and avoiding a React warning.
  dispatch: Dispatch<OrderActionProps>;
};

export const OrderSummaryItem: React.FC<OrderSummaryItemProps> = ({
  orderItem,
  dispatch,
}) => {
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
      dispatch({
        type: 'REMOVE_ITEM',
        id: orderItem.id,
      });

      return;
    }
  };

  const handleNotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const notes = e.target.value;
    dispatch({ type: 'UPDATE_NOTES', id: orderItem.id, notes });
  };

  const handleRemoveClick = () => {
    dispatch({ type: 'REMOVE_ITEM', id: orderItem.id });
  };

  return (
    <div className='flex flex-col gap-[10px]'>
      <div className='flex items-center gap-4'>
        <Image
          src={returnMediaProps(orderItem.media.data).src}
          alt={orderItem.title}
          width={528}
          height={528}
          className='h-10 w-10'
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
          className='flex w-12 items-center justify-center'
          onClick={handleRemoveClick}>
          <Trash className='h-5 w-5' />
        </Button>
      </div>
    </div>
  );
};
