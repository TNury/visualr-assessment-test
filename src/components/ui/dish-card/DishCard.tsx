import { AddToOrderButton } from '@vat/components/ui/add-to-order-button/AddToOrderButton';
import { RoundedImage } from '@vat/components/ui/rounded-image/RoundedImage';

import { returnFormattedPrice, returnMediaProps } from '@vat/lib/utils';

import { DishEntityProps } from '@vat/types/menu.types';

export type DishCardProps = {
  dishProps: DishEntityProps;
};

export const DishCard: React.FC<DishCardProps> = ({ dishProps }) => {
  return (
    <div className='group relative flex w-full flex-col items-center gap-2.5 px-6 pb-4.5 pt-0'>
      <RoundedImage
        wrapperProps={{
          className: 'z-20',
        }}
        src={returnMediaProps(dishProps.attributes.media.data).src}
        alt={dishProps.attributes.title}
        width={528}
        height={528}
        className='h-33 w-33 object-cover transition-transform duration-150 group-hover:-rotate-45 group-hover:scale-110'
      />

      <div className='z-20 flex h-full flex-col gap-2'>
        <p className='min-h-[36.4px] max-w-36 text-center text-body-base-medium text-white'>
          {dishProps.attributes.title}
        </p>
        <div className='mt-auto flex flex-col gap-1'>
          <p className='text-center text-body-base-regular text-white'>
            {returnFormattedPrice(dishProps.attributes.price)}
          </p>

          <AddToOrderButton dishProps={dishProps} />
        </div>
      </div>
      <div className='absolute bottom-0 left-0 z-10 h-[calc(100%-34px)] w-full rounded-2xl bg-base-dark-bg-2 transition-colors duration-150 group-hover:bg-base-dark-bg-2-hover' />
    </div>
  );
};
