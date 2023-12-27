'use client';

import { FC, useRef, useState } from 'react';

import { Add } from '@vat/icons/Add';
import { Trash } from '@vat/icons/Trash';

import { Button } from '@vat/components/ui/button/Button';

import { getImagePreview } from '@vat/lib/utils';

type MediaFieldProps = {
  label?: string;
  error?: string;
  addMedia: (file: File) => void;
};

export const MediaField: FC<MediaFieldProps> = ({ label, error, addMedia }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null); // If the file is an image
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileAddition = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      addMedia(file);
      loadImagePreview(file);
    }
  };

  const openMediaSelector = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const loadImagePreview = async (file: File): Promise<string> => {
    const imagePreview = await getImagePreview(file);

    setImagePreview(imagePreview);

    return imagePreview;
  };

  const handleRemoveMediaClick = () => {
    setImagePreview(null);
  };

  return (
    <div
      data-error={Boolean(error)}
      className='group flex h-full w-full flex-col gap-2'>
      {label && (
        <label className='text-body-base-medium text-white'>{label}</label>
      )}
      <div className='flex h-[228px] w-full flex-col items-center justify-center rounded-lg border border-dashed border-base-dark-line group-data-[error="true"]:border-accents-red group-data-[error="true"]:bg-accents-bg-red'>
        {imagePreview ? (
          <div className='flex w-full flex-col items-center'>
            <div className='flex w-full justify-center py-6'>
              <img
                src={imagePreview}
                alt='Media preview'
                className='h-33 w-33 object-cover'
              />
            </div>
            <Button
              type='button'
              variant='ghost-4'
              shape='rounded-bottom'
              className='flex w-full justify-center gap-2'
              onClick={handleRemoveMediaClick}>
              <Trash /> Remove
            </Button>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center gap-2'>
            <Button
              type='button'
              onClick={openMediaSelector}
              variant='ghost-3'
              className='w-fit'>
              <Add className='h-5 w-5' />
            </Button>
            <p className='max-w-36 text-center text-body-base-semibold text-text-lighter'>
              Add new media
            </p>
          </div>
        )}
        <input
          type='file'
          accept='.png, .jpg, .jpeg'
          ref={fileInputRef}
          className='hidden'
          onChange={handleFileAddition}
        />
      </div>
      {error && (
        <span className='text-body-base-medium text-accents-red'>{error}</span>
      )}
    </div>
  );
};
