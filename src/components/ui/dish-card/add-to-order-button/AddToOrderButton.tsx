'use client';

import { Button } from '@vat/components/ui/button/Button';
import { Add } from '@vat/icons/Add';
import { useOrder } from '@vat/context/order-context/OrderContext';
import { DishEntityProps } from '@vat/types/menu.types';

type AddToOrderButtonProps = {
  dishProps: DishEntityProps;
};

export const AddToOrderButton: React.FC<AddToOrderButtonProps> = ({
  dishProps,
}) => {
  const { dispatch } = useOrder();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', item: dishProps });
  };

  return (
    <Button
      variant='base'
      size='sm'
      className='flex items-center justify-center gap-2'
      onClick={handleAddToCart}>
      <Add className='h-5 w-5' />
      Add to order
    </Button>
  );
};
