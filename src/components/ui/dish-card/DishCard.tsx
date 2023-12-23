import Image from 'next/image';

import { Button } from '@vat/components/ui/button/Button';
import { Add } from '@vat/icons/Add';
import { returnMediaProps } from '@vat/lib/utils';
import { GetMenuByIdResponse } from '@vat/types/menu.types';

type DishCardProps = {
  dishProps: GetMenuByIdResponse['data']['menu']['data']['attributes']['dishes']['data'][0];
};

// @ TODO, REVIEW THE ARBITRARY VALUES USED HERE
export const DishCard: React.FC<DishCardProps> = ({ dishProps }) => {
  return (
    <div className='group relative flex w-full flex-col items-center gap-[10px] px-6 pb-[18px] pt-0'>
      <div className='z-20 flex w-full items-end justify-center'>
        <Image
          src={returnMediaProps(dishProps.attributes.media.data).src}
          alt={dishProps.attributes.title}
          width={528}
          height={528}
          className='h-[132px] w-[132px] transition-all duration-200 group-hover:-rotate-45 group-hover:scale-110'
        />
      </div>
      <div className='z-20 flex flex-col gap-2'>
        <p className='max-w-36 text-center text-body-base-medium text-white'>
          {dishProps.attributes.title}
        </p>
        <div className='flex flex-col gap-1'>
          <p className='text-center text-body-base-regular text-white'>
            $ 2.29
          </p>
          <Button
            variant='base'
            size='sm'
            className='flex items-center justify-center gap-2'>
            <Add className='h-5 w-5' />
            Add to order
          </Button>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 z-10 h-[226px] w-full rounded-2xl bg-base-dark-bg-2 group-hover:bg-base-dark-bg-2-hover' />
    </div>
  );
};
