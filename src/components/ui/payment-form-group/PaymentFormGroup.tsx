'use client';

import { CreditCardForm } from '@vat/components/ui/credit-card-form/CreditCardForm';
import { PaymentOption } from '@vat/components/ui/payment-option/PaymentOption';

import { OrderContextProps } from '@vat/types/order.types';
import { SnackbarContextProps } from '@vat/types/snackbar.types';

import { PaymentMethodProps } from '../order-payment-panel/OrderPaymentPanel';

const availableOptions: PaymentMethodProps[] = [
  'credit-card',
  'paypal',
  'cash',
];

type PaymentFormGroupProps = {
  orderContext: OrderContextProps;
  snackbarContext: SnackbarContextProps;
  paymentMethod: PaymentMethodProps;
  setPaymentMethod: React.Dispatch<
    React.SetStateAction<'credit-card' | 'paypal' | 'cash'>
  >;
  tableNo: string;
};

export const PaymentFormGroup: React.FC<PaymentFormGroupProps> = ({
  tableNo,
  paymentMethod,
  setPaymentMethod,
  orderContext,
  snackbarContext,
}) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-2'>
        {availableOptions.map((option, index) => (
          <PaymentOption
            key={index}
            active={paymentMethod === option}
            type={option}
            onClick={() => setPaymentMethod(option)}
          />
        ))}
      </div>
      {paymentMethod === 'credit-card' && (
        <CreditCardForm
          orderContext={orderContext}
          snackbarContext={snackbarContext}
          tableNo={tableNo}
        />
      )}
    </div>
  );
};
