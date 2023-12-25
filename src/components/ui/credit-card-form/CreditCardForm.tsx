import { useState } from 'react';

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import {
  StripeCardCvcElementChangeEvent,
  StripeCardCvcElementOptions,
  StripeCardExpiryElementChangeEvent,
  StripeCardExpiryElementOptions,
  StripeCardNumberElementChangeEvent,
  StripeCardNumberElementOptions,
} from '@stripe/stripe-js';

import { TextField } from '@vat/components/ui/text-field/TextField';

import { createPaymentIntent } from '@vat/actions/payment.actions';

const baseOptions:
  | StripeCardNumberElementOptions
  | StripeCardExpiryElementOptions
  | StripeCardCvcElementOptions = {
  classes: {
    focus: 'border-base-dark-line-2 !bg-base-dark-bg-2',
    invalid: 'border-red-500',
    base: 'h-12 rounded-lg border border-base-dark-line bg-base-form-bg p-[14px] text-sm leading-[140%] text-text-lighter caret-white outline-none hover:bg-base-form-bg-hover',
  },
  style: {
    invalid: {
      color: '#ef4444',
    },
    base: {
      color: 'white',
      fontSize: '14px',
      fontFamily: `'Barlow', sans-serif`,
      fontWeight: 400,
      '::placeholder': {
        color: '#889898',
      },
    },
  },
};

const cardNumberElementOptions: StripeCardNumberElementOptions = {
  ...baseOptions,
  showIcon: false,
};

const cardExpiryElementOptions: StripeCardExpiryElementOptions = {
  ...baseOptions,
};

const cardCvcElementOptions: StripeCardCvcElementOptions = {
  ...baseOptions,
};

export const CreditCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [creditCardHolderName, setCreditCardHolderName] = useState('');
  const [errors, setErrors] = useState({
    cardHolderName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const handleOnChange = (
    event:
      | StripeCardNumberElementChangeEvent
      | StripeCardExpiryElementChangeEvent
      | StripeCardCvcElementChangeEvent
  ) => {
    if (event.error && errors[event.elementType] !== event.error.message) {
      setErrors((prev) => ({
        ...prev,
        [event.elementType]: event.error.message,
      }));

      return;
    }

    // Clear errors
    if (!event.error && errors[event.elementType]) {
      setErrors((prev) => ({
        ...prev,
        [event.elementType]: '',
      }));
    }
  };

  const triggerPayment = async () => {
    if (!stripe || !elements) {
      // In case Stripe.js has not yet loaded.
      return;
    }

    const cardNumberElement = elements.getElement('cardNumber');
    const cardExpiryElement = elements.getElement('cardExpiry');
    const cardCvcElement = elements.getElement('cardCvc');

    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
      return;
    }

    if (!creditCardHolderName) {
      setErrors((prev) => ({
        ...prev,
        cardHolderName: 'Card holder name is required.',
      }));

      return;
    }

    const paymentIntent = await createPaymentIntent(1000);

    const result = await stripe.confirmCardPayment(
      paymentIntent.client_secret,
      {
        payment_method: {
          card: cardNumberElement,
          billing_details: {
            name: 'John Doe',
          },
        },
      }
    );
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4'>
        <TextField
          label='Cardholder Name'
          placeholder='John Doe'
          className='w-full'
          value={creditCardHolderName}
          error={errors.cardHolderName}
          onChange={(e) => {
            setCreditCardHolderName(e.target.value);

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
            <p className='text-body-base-medium text-red-500'>
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
              <p className='text-body-base-medium text-red-500'>
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
              <p className='text-body-base-medium text-red-500'>
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
