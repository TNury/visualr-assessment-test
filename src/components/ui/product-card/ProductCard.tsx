import Image from 'next/image';

import { Button } from '@vat/components/ui/button/Button';
import { Add } from '@vat/icons/Add';

// @ TODO, REVIEW THE ARBITRARY VALUES USED HERE
export const ProductCard = () => {
  return (
    <div className='group relative flex w-full flex-col items-center gap-[10px] px-6 pb-[18px] pt-0'>
      <div className='z-20 flex w-full items-end justify-center'>
        <Image
          src='/assets/media/png/product_example.png'
          width={528}
          height={528}
          alt='Product example'
          className='h-[132px] w-[132px] transition-all duration-200 group-hover:-rotate-45 group-hover:scale-110'
        />
      </div>
      <div className='z-20 flex flex-col gap-2'>
        <p className='max-w-36 text-center text-body-base-medium text-white'>
          Spicy seasoned seafood noodles
        </p>
        <div className='flex flex-col gap-1'>
          <p className='text-center text-body-base-regular text-white'>
            $ 2.29
          </p>
          <Button variant='base' size='sm' className='flex gap-2 items-center justify-center'>
            <Add className='h-5 w-5' />
            Add to order
          </Button>
        </div>
      </div>
      <div className='group-hover:bg-base-dark-bg-2-hover absolute bottom-0 left-0 z-10 h-[226px] w-full rounded-2xl bg-base-dark-bg-2' />
    </div>
  );
};
