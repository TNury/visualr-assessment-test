'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { useFormik } from 'formik';

import { useDrawerLoading } from '@vat/components/ui/drawer/useDrawerLoading';

import { useSnackbarContext } from '@vat/context/snackbar-context/SnackbarContext';

import { updateDish } from '@vat/actions/menu.actions';

import { floatNumberRegex, priceRegex } from '@vat/lib/regex';
import { dishFormSchema } from '@vat/lib/schemas';
import { returnFormattedPrice } from '@vat/lib/utils';

import {
  GetDishByIdResponse,
  ManageDishFormProps,
} from '@vat/types/menu.types';

type useDishManagementFormProps = {
  dishProps: GetDishByIdResponse;
};

export const useDishManagementForm = ({
  dishProps,
}: useDishManagementFormProps) => {
  const menuId = useSearchParams().get('menu');

  const { setLoading } = useDrawerLoading();

  const router = useRouter();

  const { dispatch } = useSnackbarContext();

  const formik = useFormik<ManageDishFormProps>({
    initialValues: {
      media: dishProps.data.dish.data.attributes.media.data.id,
      title: dishProps.data.dish.data.attributes.title,
      price: returnFormattedPrice(dishProps.data.dish.data.attributes.price),
    },
    validationSchema: dishFormSchema,
    onSubmit: handleOnSubmit,
  });

  async function handleOnSubmit(values: ManageDishFormProps) {
    setLoading(true);

    try {
      await updateDish(dishProps, values);

      router.push(`?menu=${menuId}`);

      dispatch({
        type: 'SET_SNACKBAR',
        payload: {
          message: 'Dish updated successfully',
          severity: 'success',
        },
      });
    } catch (error) {
      console.error(error);

      dispatch({
        type: 'SET_SNACKBAR',
        payload: {
          message: 'An error occurred while updated the dish.',
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

  const handleMediaRemoval = () => {
    formik.setFieldValue('media', null);
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

  return {
    formik,
    handleMediaAddition,
    handleMediaRemoval,
    handlePriceChange,
    handlePriceOnBlur,
  };
};
