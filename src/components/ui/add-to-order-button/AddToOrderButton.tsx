'use client';

import { Button } from '@vat/components/ui/button/Button';
import { useOrderContext } from '@vat/context/order-context/OrderContext';
import { Add } from '@vat/icons/Add';
import { DishByMenuEntityProps } from '@vat/types/menu.types';

type AddToOrderButtonProps = {
  dishProps: DishByMenuEntityProps;
};

export const AddToOrderButton: React.FC<AddToOrderButtonProps> = ({
  dishProps,
}) => {
  const { dispatch } = useOrderContext();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', item: dishProps });
  };

  return (
    <Button
      variant='ghost'
      size='sm'
      className='flex items-center justify-center gap-2'
      onClick={handleAddToCart}>
      <Add className='h-5 w-5' />
      Add to order
    </Button>
  );
};
