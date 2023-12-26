import Image from 'next/image';

import { returnFormattedPrice, returnMediaProps } from '@vat/lib/utils';

import { DishEntityProps } from '@vat/types/menu.types';

import { AddToOrderButton } from '../add-to-order-button/AddToOrderButton';

export type DishCardProps = {
  dishProps: DishEntityProps;
};

export const DishCard: React.FC<DishCardProps> = ({ dishProps }) => {
  return (
    <div className='pb-4.5 group relative flex w-full flex-col items-center gap-2.5 px-6 pt-0'>
      <div className='z-20 flex w-full items-end justify-center'>
        <Image
          src={returnMediaProps(dishProps.attributes.media.data).src}
          alt={dishProps.attributes.title}
          width={528}
          height={528}
          className='h-33 w-33 transition-all duration-150 group-hover:-rotate-45 group-hover:scale-110'
        />
      </div>
      <div className='z-20 flex h-full flex-col gap-2'>
        <p className='max-w-36 text-center text-body-base-medium text-white'>
          {dishProps.attributes.title}
        </p>
        <div className='flex h-full flex-col gap-1'>
          <p className='text-center text-body-base-regular text-white'>
            {returnFormattedPrice(dishProps.attributes.price)}
          </p>
          <div className='mt-auto'>
            <AddToOrderButton dishProps={dishProps} />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 z-10 h-[226px] w-full rounded-2xl bg-base-dark-bg-2 transition-all duration-150 group-hover:bg-base-dark-bg-2-hover' />
    </div>
  );
};
