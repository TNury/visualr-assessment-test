'use client';

import { useState } from 'react';

import { CreditCardForm } from '@vat/components/ui/credit-card-form/CreditCardForm';
import { PaymentOption } from '@vat/components/ui/payment-option/PaymentOption';

const availableOptions = ['credit-card', 'paypal', 'cash'];

export const PaymentFormGroup = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2'>
        {availableOptions.map((option) => (
          <PaymentOption
            active={paymentMethod === option}
            type={option as 'credit-card' | 'paypal' | 'cash'}
            // onClick={() => setPaymentMethod(option)}
          />
        ))}
      </div>
      <CreditCardForm />
    </div>
  );
};
