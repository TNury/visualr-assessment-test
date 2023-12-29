'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { Trash } from '@vat/icons/Trash';

import { Button } from '@vat/components/ui/button/Button';

import { useSnackbarContext } from '@vat/context/snackbar-context/SnackbarContext';

import { deleteDish } from '@vat/actions/menu.actions';

import { GetDishByIdResponse } from '@vat/types/menu.types';

type DeleteDishButtonProps = {
  dishProps: GetDishByIdResponse;
};

export const DeleteDishButton: React.FC<DeleteDishButtonProps> = ({
  dishProps,
}) => {
  const { dispatch } = useSnackbarContext();

  const router = useRouter();
  const menuId = useSearchParams().get('menu');

  const handleDeleteButtonClick = async () => {
    try {
      await deleteDish(dishProps);

      dispatch({
        type: 'SET_SNACKBAR',
        payload: {
          message: 'Dish deleted successfully',
          severity: 'success',
        },
      });

      router.push(`?menu=${menuId}`);
    } catch (error) {
      console.error(error);

      dispatch({
        type: 'SET_SNACKBAR',
        payload: {
          message: 'Error deleting dish',
          severity: 'error',
        },
      });
    }
  };

  return (
    <Button
      onClick={handleDeleteButtonClick}
      variant='contained-2'
      size='icon-1'
      layout='centered'
      tabIndex={-1}>
      <Trash className='h-5 w-5' />
    </Button>
  );
};
