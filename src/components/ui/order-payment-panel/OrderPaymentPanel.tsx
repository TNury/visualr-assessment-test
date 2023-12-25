'use client';

import { useState } from 'react';

import { PaymentFormGroup } from '@vat/components/ui/payment-form-group/PaymentFormGroup';
import { TextField } from '@vat/components/ui/text-field/TextField';

import { Button } from '../button/Button';

export const OrderPaymentPanel = () => {
  const [tableNo, setTableNo] = useState('');
  const [error, setError] = useState('');

  const handleClick = () => {
    if (!tableNo) {
      setError('Table number is required.');
      return;
    }

    const paymentBtnRef = document.getElementById('creditCardFormBtn');

    paymentBtnRef?.click();
  };

  return (
    <div className='flex h-full w-[410px] overflow-auto flex-col'>
      <div className='mx-6 flex flex-col gap-4 border-b border-base-dark-line py-6 pt-16'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-heading-h1 text-white'>Payment</h1>
          <p className='text-body-lg-medium text-text-light'>
            Choose from the payment methods below
          </p>
        </div>
      </div>
      <div className='flex flex-col h-full'>
        <div className='flex flex-col gap-4 overflow-auto px-6 py-4'>
          <h2 className='text-heading-h2 text-white'>Payment Method</h2>

          <PaymentFormGroup />
        </div>
        <div className='mx-6 border-t border-base-dark-line py-4'>
          <TextField
            placeholder='333'
            label='Table no.'
            value={tableNo}
            error={error}
            onChange={(e) => {
              setTableNo(e.target.value);

              if (error) {
                setError('');
              }
            }}
            className='w-[calc(50%-12px)]'
          />
        </div>
      </div>
      <div className='mt-auto flex gap-2 px-6 pb-6'>
        <Button variant='outlined'>Cancel</Button>
        <Button onClick={handleClick}>Confirm Payment</Button>
      </div>
    </div>
  );
};
