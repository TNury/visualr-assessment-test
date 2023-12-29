'use client';

import { useState } from 'react';

import { Dropdown } from '@vat/icons/Dropdown';

import { Button } from '@vat/components/ui/button/Button';
import { RoundedImage } from '@vat/components/ui/rounded-image/RoundedImage';

import { returnMediaProps } from '@vat/lib/utils';

import { GetMostOrderedDishesResponseEntity } from '@vat/types/order.types';

type MostOrderedDishesProps = {
  dishes: GetMostOrderedDishesResponseEntity[];
};

export const MostOrderedDishes: React.FC<MostOrderedDishesProps> = ({
  dishes,
}) => {
  const [trim, setTrim] = useState(3);

  return (
    <div className='flex h-fit w-full flex-col overflow-auto rounded-lg bg-base-dark-bg-2'>
      <div className='mx-6 flex items-center justify-between border-b border-base-dark-line py-6'>
        <h2 className='text-heading-h2 text-white'>Most Ordered</h2>
        <Button variant='outlined-2' className='flex w-fit gap-2' tabIndex={-1}>
          Today
          <Dropdown />
        </Button>
      </div>
      <div className='mx-6 flex flex-1 flex-col gap-6 overflow-auto'>
        {dishes.slice(0, trim).map((entry, index) => (
          <div key={index} className='flex gap-4 first:pt-6 last:pb-6'>
            <RoundedImage
              src={returnMediaProps(entry.dish.data.attributes.media.data).src}
              alt={entry.dish.data.attributes.title}
              width={528}
              height={528}
              className='h-10 w-10'
              wrapperProps={{
                className: 'h-fit w-fit',
              }}
            />

            <div className='flex flex-col gap-2'>
              <p className='text-body-base-medium text-white'>
                {entry.dish.data.attributes.title}
              </p>
              <p className='text-body-sm-regular text-text-light'>
                {entry.quantity} Dishes ordered
              </p>
            </div>
          </div>
        ))}
      </div>
      {trim === 3 && (
        <div className='p-6'>
          <Button variant='outlined' onClick={() => setTrim(Infinity)}>
            View all
          </Button>
        </div>
      )}
    </div>
  );
};
