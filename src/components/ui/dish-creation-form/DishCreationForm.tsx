'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useFormik } from 'formik';

import { Button } from '@vat/components/ui/button/Button';
import { MediaField } from '@vat/components/ui/media-field/MediaField';
import { TextField } from '@vat/components/ui/text-field/TextField';

import { useSnackbarContext } from '@vat/context/snackbar-context/SnackbarContext';

import { createDish } from '@vat/actions/menu.actions';

import { floatNumberRegex, priceRegex } from '@vat/lib/regex';
import { dishCreationSchema } from '@vat/lib/schemas';
import { returnFormattedPrice } from '@vat/lib/utils';

import { CreateDishFormProps } from '@vat/types/menu.types';

import { useDrawerLoading } from '../drawer/useDrawerLoading';

type DishCreationFormProps = {
  menuId: string;
};

export const DishCreationForm: React.FC<DishCreationFormProps> = ({
  menuId,
}) => {
  const { setLoading } = useDrawerLoading();

  const router = useRouter();

  const { dispatch } = useSnackbarContext();

  const formik = useFormik<CreateDishFormProps>({
    initialValues: {
      media: null,
      title: '',
      price: '',
    },
    validationSchema: dishCreationSchema,
    onSubmit: handleOnSubmit,
  });

  async function handleOnSubmit(values: CreateDishFormProps) {
    setLoading(true);

    try {
      await createDish(menuId, values);

      router.push('/settings/products-management');

      dispatch({
        type: 'SET_SNACKBAR',
        payload: {
          message: 'Dish created successfully',
          severity: 'success',
        },
      });
    } catch (error) {
      console.error(error);

      dispatch({
        type: 'SET_SNACKBAR',
        payload: {
          message: 'An error occurred while creating the dish.',
          severity: 'error',
        },
      });
    }

    setLoading(false);
  }

  const handleMediaAddition = (file: File) => {
    const mediaAsFormData = new FormData();
    mediaAsFormData.append('files', file);

    formik.setFieldValue('media', mediaAsFormData);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = event.target.value.replace(priceRegex, '');

    formik.setFieldValue('price', price);
  };

  const handlePriceOnBlur = (
    event: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    const value = event.target.value;

    if (!value) return;

    const cleanedPrice = value.replace(floatNumberRegex, '');

    const formattedPrice = returnFormattedPrice(Number(cleanedPrice));

    formik.setFieldValue('price', formattedPrice);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='flex h-full flex-col overflow-auto'>
      <div className='flex flex-1 flex-col gap-4 overflow-auto px-6 py-4'>
        <h2 className='text-heading-h2 text-white'>Details</h2>
        <div className='flex flex-col gap-4'>
          <MediaField
            label='Media'
            error={formik.touched.media && (formik.errors.media as string)}
            addMedia={handleMediaAddition}
          />

          <TextField
            id='title'
            placeholder='Spaghetti Bolognese'
            label='Title'
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && formik.errors.title}
          />
          <TextField
            id='price'
            placeholder='$ 10.00'
            label='Price'
            onChange={handlePriceChange}
            onBlur={handlePriceOnBlur}
            value={formik.values.price}
            error={formik.touched.price && formik.errors.price}
          />
        </div>
      </div>

      <div className='mx-6 flex gap-2 border-t border-base-dark-line pt-6'>
        <Link
          href={{
            pathname: '/settings/products-management',
          }}
          className='pointer-events-auto w-full'>
          <Button variant='outlined'>Cancel</Button>
        </Link>
        <Button type='submit'>Create dish</Button>
      </div>
    </form>
  );
};
