'use client';

import { useState } from 'react';

import { CreditCardForm } from '@vat/components/ui/credit-card-form/CreditCardForm';
import { PaymentOption } from '@vat/components/ui/payment-option/PaymentOption';

import { useOrderContext } from '@vat/context/order-context/OrderContext';
import { useSnackbarContext } from '@vat/context/snackbar-context/SnackbarContext';

const availableOptions = ['credit-card', 'paypal', 'cash'];

type PaymentFormGroupProps = {
  tableNo: string;
};

export const PaymentFormGroup: React.FC<PaymentFormGroupProps> = ({
  tableNo,
}) => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const orderContext = useOrderContext();
  const snackbarContext = useSnackbarContext();

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2'>
        {availableOptions.map((option, index) => (
          <PaymentOption
            key={index}
            active={paymentMethod === option}
            type={option as 'credit-card' | 'paypal' | 'cash'}
            // onClick={() => setPaymentMethod(option)}
          />
        ))}
      </div>
      <CreditCardForm
        orderContext={orderContext}
        snackbarContext={snackbarContext}
        tableNo={tableNo}
      />
    </div>
  );
};
