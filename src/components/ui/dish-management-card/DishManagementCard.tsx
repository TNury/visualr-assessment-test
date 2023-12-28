import Image from 'next/image';

import { Edit } from '@vat/icons/Edit';

import { Button } from '@vat/components/ui/button/Button';

import { returnFormattedPrice, returnMediaProps } from '@vat/lib/utils';

import { DishEntityProps } from '@vat/types/menu.types';

export type DishManagementCardProps = {
  menuTitle: string;
  dishProps: DishEntityProps;
};

export const DishManagementCard: React.FC<DishManagementCardProps> = ({
  dishProps,
}) => {
  return (
    <div className='relative flex  w-full flex-col items-center gap-4 rounded-lg border border-base-dark-line'>
      <div className='flex h-full w-full flex-col items-center gap-4 p-6 pb-0'>
        <Image
          src={returnMediaProps(dishProps.attributes.media.data).src}
          alt={dishProps.attributes.title}
          width={528}
          height={528}
          className='h-33 w-33'
        />

        <div className='z-20 flex h-full w-full flex-col items-center gap-2'>
          <p className='max-w-36 text-center text-body-base-medium text-white'>
            {dishProps.attributes.title}
          </p>

          <p className='mt-auto text-center text-body-base-regular text-text-light'>
            {returnFormattedPrice(dishProps.attributes.price)}
          </p>
        </div>
      </div>

      <Button
        variant='ghost-2'
        shape='rounded-bottom'
        className='flex w-full items-center justify-center gap-2'>
        <Edit className='h-5 w-5' />
        Edit dish
      </Button>
    </div>
  );
};