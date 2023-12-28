'use client';

import { FC, useRef, useState } from 'react';

import { Add } from '@vat/icons/Add';
import { Trash } from '@vat/icons/Trash';

import { Button } from '@vat/components/ui/button/Button';
import { RoundedImage } from '@vat/components/ui/rounded-image/RoundedImage';

import { getImagePreview } from '@vat/lib/utils';

type MediaFieldProps = {
  label?: string;
  error?: string;
  mediaUrl?: string;
  addMedia: (file: File) => void;
  removeMedia: () => void;
};

export const MediaField: FC<MediaFieldProps> = ({
  label,
  error,
  addMedia,
  removeMedia,
  mediaUrl,
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(mediaUrl); // If the file is an image
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

    removeMedia();

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div
      data-error={Boolean(error)}
      className='group flex h-full w-full flex-col gap-2'>
      {label && (
        <label className='text-body-base-medium text-white'>{label}</label>
      )}
      <div className='flex h-[228px] w-full flex-col items-center justify-center rounded-lg border border-dashed border-base-dark-line group-data-[error="true"]:border-accents-bg-red group-data-[error="true"]:bg-accents-bg-red'>
        {imagePreview ? (
          <div className='flex w-full flex-col items-center'>
            <RoundedImage
              wrapperProps={{
                className: 'py-6',
              }}
              width={528}
              height={528}
              src={imagePreview}
              alt='Media preview'
              className='h-33 w-33 overflow-clip rounded-full object-cover'
            />

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
