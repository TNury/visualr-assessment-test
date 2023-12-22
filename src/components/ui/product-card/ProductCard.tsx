import Image from 'next/image';

import { Button } from '@vat/components/ui/button/Button';

// @ TODO, REVIEW THE ARBITRARY VALUES USED HERE
export const ProductCard = () => {
  return (
    <div className='hover:bg-base-dark-bg-2-hover group flex w-full flex-col items-center gap-[10px] rounded-2xl bg-base-dark-bg-2 px-6 pb-[18px] pt-0'>
      <div className='flex h-[98px] w-full items-end justify-center'>
        <Image
          src='/assets/media/png/product_example.png'
          width={528}
          height={528}
          alt='Product example'
          className='h-[132px] w-[132px] transition-all duration-200 group-hover:-rotate-45 group-hover:scale-110'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-center text-body-base-medium text-white'>
          Spicy seasoned seafood noodles
        </p>
        <div className='flex flex-col gap-1'>
          <p className='text-center text-body-base-regular text-white'>
            $ 2.29
          </p>
          <Button icon='add' variant='text' size='sm'>
            Add to order
          </Button>
        </div>
      </div>
    </div>
  );
};
