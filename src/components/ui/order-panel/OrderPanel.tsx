import React from 'react';

export const OrderPanel = () => {
  return (
    <div className='fixed right-0 top-0 flex h-screen w-[410px] flex-col gap-6 rounded-l-lg bg-base-dark-bg-2 p-6'>
      <div className='flex flex-col gap-[42px]'>
        <h1 className='text-heading-h2 text-white'>Order #34562</h1>
        <div className='flex gap-[42px]'>
          <p className='mr-auto text-body-lg-semibold text-white'>Item</p>
          <p className='text-body-lg-semibold text-white'>Qty</p>
          <p className='text-body-lg-semibold text-white'>Price</p>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <hr className='border-base-dark-line' />
        <div className='flex flex-col items-center gap-4 text-center'>
          <h2 className='text-heading-h1 text-white'>Your cart is empty</h2>
          <p className='max-w-36 text-body-lg-semibold text-text-lighter'>
            Add items to create an order
          </p>
        </div>
      </div>
    </div>
  );
};
