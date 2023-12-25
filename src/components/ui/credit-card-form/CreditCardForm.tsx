import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';

import { TextField } from '@vat/components/ui/text-field/TextField';

import { OrderContextProps } from '@vat/types/order.types';
import { SnackbarContextProps } from '@vat/types/snackbar.types';

import { useCreditCardForm } from './useCreditCardForm';
import {
  cardCvcElementOptions,
  cardExpiryElementOptions,
  cardNumberElementOptions,
} from './utils/creditCardForm.utils';

type CreditCardFormProps = {
  tableNo: string;
  orderContext: OrderContextProps;
  snackbarContext: SnackbarContextProps;
};

export const CreditCardForm: React.FC<CreditCardFormProps> = ({
  orderContext,
  tableNo,
  snackbarContext,
}) => {
  const {
    cardHolderName,
    setCardHolderName,
    errors,
    setErrors,
    handleOnChange,
    triggerPayment,
  } = useCreditCardForm({ tableNo, orderContext, snackbarContext });

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4'>
        <TextField
          label='Cardholder Name'
          placeholder='John Doe'
          className='w-full'
          value={cardHolderName}
          error={errors.cardHolderName}
          onChange={(e) => {
            setCardHolderName(e.target.value);

            if (errors['cardHolderName']) {
              setErrors((prev) => ({
                ...prev,
                cardHolderName: '',
              }));
            }
          }}
        />
        <div className='flex flex-col gap-2'>
          <p className='text-body-base-medium text-white'>Card number</p>
          <CardNumberElement
            onChange={handleOnChange}
            options={cardNumberElementOptions}
          />
          {errors.cardNumber && (
            <p className='text-body-base-medium text-accents-red'>
              {errors.cardNumber}
            </p>
          )}
        </div>
        <div className='flex gap-4'>
          <div className='flex w-full flex-col gap-2'>
            <p className='text-body-base-medium text-white'>Expiration</p>
            <CardExpiryElement
              onChange={handleOnChange}
              options={cardExpiryElementOptions}
            />
            {errors.cardExpiry && (
              <p className='text-body-base-medium text-accents-red'>
                {errors.cardExpiry}
              </p>
            )}
          </div>
          <div className='flex w-full flex-col gap-2'>
            <p className='text-body-base-medium text-white'>CVC</p>
            <CardCvcElement
              onChange={handleOnChange}
              options={cardCvcElementOptions}
            />
            {errors.cardCvc && (
              <p className='text-body-base-medium text-accents-red'>
                {errors.cardCvc}
              </p>
            )}
          </div>
        </div>
        <button
          id='creditCardFormBtn'
          className='hidden'
          onClick={triggerPayment}></button>
      </div>
    </div>
  );
};
