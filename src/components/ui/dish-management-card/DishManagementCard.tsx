import Link from 'next/link';

import { Edit } from '@vat/icons/Edit';

import { Button } from '@vat/components/ui/button/Button';
import { RoundedImage } from '@vat/components/ui/rounded-image/RoundedImage';

import { returnFormattedPrice, returnMediaProps } from '@vat/lib/utils';

import { DishByMenuEntityProps } from '@vat/types/menu.types';

export type DishManagementCardProps = {
  dishProps: DishByMenuEntityProps;
  activeMenu: string;
};

export const DishManagementCard: React.FC<DishManagementCardProps> = ({
  dishProps,
  activeMenu,
}) => {
  return (
    <div className='relative flex w-full flex-col items-center gap-4 rounded-lg border border-base-dark-line'>
      <div className='flex h-full w-full flex-col items-center gap-4 p-6 pb-0'>
        <RoundedImage
          src={returnMediaProps(dishProps.attributes.media.data).src}
          alt={dishProps.attributes.title}
          width={528}
          height={528}
          className='h-33 w-33 overflow-clip rounded-full object-cover'
        />

        <div className='z-20 flex h-full w-full flex-col items-center gap-2'>
          <p className='line-clamp-2 max-w-36 text-center text-body-base-medium text-white'>
            {dishProps.attributes.title}
          </p>

          <p className='mt-auto text-center text-body-base-regular text-text-light'>
            {returnFormattedPrice(dishProps.attributes.price)}
          </p>
        </div>
      </div>

      <Link
        href={{
          query: {
            menu: activeMenu,
            openDishManagementDrawerOnDish: dishProps.attributes.title,
          },
        }}
        className='w-full'>
        <Button
          variant='ghost-2'
          shape='rounded-bottom'
          className='flex w-full items-center justify-center gap-2'
          tabIndex={-1}>
          <Edit className='h-5 w-5' />
          Edit dish
        </Button>
      </Link>
    </div>
  );
};
