'use client';

import { Button } from '@vat/components/ui/button/Button';
import { Trash } from '@vat/components/ui/icons/Trash';

import { useSnackbarContext } from '@vat/context/snackbar-context/SnackbarContext';

import { deleteMenu } from '@vat/actions/menu.actions';

import { GetMenusManagementDataResponseEntity } from '@vat/types/menu.types';

export type DeleteMenuButtonProps = {
  menuProps: GetMenusManagementDataResponseEntity;
};

export const DeleteMenuButton: React.FC<DeleteMenuButtonProps> = ({
  menuProps,
}) => {
  const { dispatch } = useSnackbarContext();

  const handleClick = async () => {
    try {
      const response = await deleteMenu({
        id: menuProps.id,
      });

      if (response.errors) {
        throw new Error(response.errors[0].message);
      }

      dispatch({
        type: 'SET_SNACKBAR',
        payload: {
          severity: 'success',
          message: 'Menu deleted successfully',
        },
      });
    } catch (error) {
      console.error(error);

      dispatch({
        type: 'SET_SNACKBAR',
        payload: {
          severity: 'error',
          message: 'Something went wrong. Please try again later.',
        },
      });
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant='outlined'
      size='icon-1'
      layout='centered'>
      <Trash className='h-5 w-5' />
    </Button>
  );
};
