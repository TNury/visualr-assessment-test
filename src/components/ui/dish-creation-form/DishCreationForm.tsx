'use client';

import { Button } from '@vat/components/ui/button/Button';
import { MediaField } from '@vat/components/ui/media-field/MediaField';
import { ReturnLink } from '@vat/components/ui/return-link/ReturnLink';
import { TextField } from '@vat/components/ui/text-field/TextField';

import { useDishCreationForm } from './useDishCreationForm';

export const DishCreationForm: React.FC = () => {
  const {
    formik,
    handleMediaAddition,
    handleMediaRemoval,
    handlePriceChange,
    handlePriceOnBlur,
  } = useDishCreationForm();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='flex h-full flex-col overflow-auto'>
      <div className='flex flex-1 flex-col gap-4 overflow-auto p-6'>
        <MediaField
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
        <Button type='submit'>Create dish</Button>
      </div>
    </form>
  );
};
