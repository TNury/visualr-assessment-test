'use client';

import { useRouter } from 'next/navigation';

import { useFormik } from 'formik';

import { Button } from '@vat/components/ui/button/Button';
import { useDrawerLoading } from '@vat/components/ui/drawer/useDrawerLoading';
import { ReturnLink } from '@vat/components/ui/return-link/ReturnLink';
import { TextField } from '@vat/components/ui/text-field/TextField';

import { useSnackbarContext } from '@vat/context/snackbar-context/SnackbarContext';

import { createMenu, updateMenu } from '@vat/actions/menu.actions';

import { intNumberRegex } from '@vat/lib/regex';
import { menuFormSchema } from '@vat/lib/schemas';

import {
  GetMenuByIdResponse,
  UpdateMenuFormProps,
} from '@vat/types/menu.types';

type MenuManagementFormProps = {
  menuProps: GetMenuByIdResponse;
};

export const MenuManagementForm: React.FC<MenuManagementFormProps> = ({
  menuProps,
}) => {
  const { dispatch } = useSnackbarContext();
  const { setLoading } = useDrawerLoading();

  const router = useRouter();

  const formik = useFormik<UpdateMenuFormProps>({
    initialValues: {
      title: menuProps.data.menu.data.attributes.title,
      index: String(menuProps.data.menu.data.attributes.index),
    },
    validationSchema: menuFormSchema,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values: UpdateMenuFormProps) {
    try {
      setLoading(true);

      const response = await updateMenu(menuProps, values);

      if (response.errors) {
        throw new Error(response.errors[0].message);
      }

      dispatch({
        type: 'SET_SNACKBAR',
        payload: {
          severity: 'success',
          message: 'Menu updated successfully',
        },
      });

      router.back();

      setLoading(false);
    } catch (error) {
      console.error(error);

      setLoading(false);

      dispatch({
        type: 'SET_SNACKBAR',
        payload: {
          severity: 'error',
          message: 'Something went wrong. Please try again.',
        },
      });
    }
  }

  const handleIndexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(intNumberRegex, '');

    if (value || value === '') {
      formik.setFieldValue('index', value);
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='flex flex-1 flex-col gap-4 overflow-auto p-6'>
      <div className='flex flex-1 gap-4 overflow-auto'>
        <TextField
          id='title'
          label='Title'
          placeholder='Vegetarian'
          wrapperProps={{
            className: 'w-4/5 h-fit',
          }}
          value={formik.values.title}
          error={formik.touched.title && formik.errors.title}
          onChange={formik.handleChange}
        />
        <TextField
          id='index'
          label='Index'
          placeholder='0'
          variant='text-body-lg-medium'
          wrapperProps={{
            className: 'w-12 h-fit',
          }}
          value={formik.values.index}
          error={formik.touched.index && formik.errors.index}
          onChange={handleIndexChange}
          className='text-center'
        />
      </div>
      <div className='flex gap-4 pt-6'>
        <ReturnLink>
          <Button type='button' variant='outlined' className='w-1/2'>
            Cancel
          </Button>
        </ReturnLink>
        <Button className='w-1/2'>Update menu</Button>
      </div>
    </form>
  );
};
