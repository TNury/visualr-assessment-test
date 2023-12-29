'use client';

import { Button } from '@vat/components/ui/button/Button';
import { useDishManagementForm } from '@vat/components/ui/dish-management-form/useDishManagementForm';
import { MediaField } from '@vat/components/ui/media-field/MediaField';
import { ReturnLink } from '@vat/components/ui/return-link/ReturnLink';
import { TextField } from '@vat/components/ui/text-field/TextField';

import { returnMediaProps } from '@vat/lib/utils';

import { GetDishByIdResponse } from '@vat/types/menu.types';

type DishManagementFormProps = {
  dishProps: GetDishByIdResponse;
};

export const DishManagementForm: React.FC<DishManagementFormProps> = ({
  dishProps,
}) => {
  const {
    formik,
    handleMediaAddition,
    handleMediaRemoval,
    handlePriceChange,
    handlePriceOnBlur,
  } = useDishManagementForm({ dishProps });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='flex h-full flex-col overflow-auto'>
      <div className='flex flex-1 flex-col gap-4 overflow-auto p-6 pb-4'>
        <MediaField
          mediaUrl={
            returnMediaProps(dishProps.data.dish.data.attributes.media.data).src
          }
          label='Media'
          error={formik.touched.media && (formik.errors.media as string)}
          addMedia={handleMediaAddition}
          removeMedia={handleMediaRemoval}
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

      <div className='mx-6 flex gap-2 border-t border-base-dark-line py-6'>
        <ReturnLink>
          <Button variant='outlined'>Cancel</Button>
        </ReturnLink>

        <Button type='submit'>Update dish</Button>
      </div>
    </form>
  );
};
