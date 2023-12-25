import { useState } from 'react';

import { useRouter } from 'next/navigation';

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

import { createOrder } from '@vat/actions/order.actions';
import { createPaymentIntent } from '@vat/actions/payment.actions';

import { OrderContextProps } from '@vat/types/order.types';
import { Enum_Order_Status } from '@vat/types/queries.types';

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

type CreditCardFormProps = {
  tableNo: string;
  orderContext: OrderContextProps;
};

export const CreditCardForm: React.FC<CreditCardFormProps> = ({
  orderContext,
  tableNo,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const router = useRouter();

  const { orderState, dispatch } = orderContext;

  const [cardHolderName, setCardHolderName] = useState('');
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

  const toggleSubmitBtns = (disabled: boolean) => {
    const submitBtnWrapper = document.getElementById('orderPaymentPanelBtns');

    if (disabled) {
      submitBtnWrapper?.classList.add('opacity-70');
      submitBtnWrapper?.classList.add('pointer-events-none');
    } else {
      submitBtnWrapper?.classList.remove('opacity-70');
      submitBtnWrapper?.classList.remove('pointer-events-none');
    }
  };

  const triggerPayment = async () => {
    toggleSubmitBtns(true);

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

    if (!cardHolderName) {
      setErrors((prev) => ({
        ...prev,
        cardHolderName: 'Card holder name is required.',
      }));

      return;
    }

    const paymentIntent = await createPaymentIntent(orderState.subtotal);

    const result = await stripe.confirmCardPayment(
      paymentIntent.client_secret,
      {
        payment_method: {
          card: cardNumberElement,
          billing_details: {
            name: cardHolderName,
          },
        },
      }
    );

    if (result.paymentIntent?.status === 'succeeded') {
      // The payment has been processed!
      const orderCreationResponse = await createOrder({
        data: {
          owner: cardHolderName,
          total: orderState.subtotal,
          dishes: orderState.items.map((item) => item.id),
          status: Enum_Order_Status.Pending,
          tableNumber: tableNo,
        },
      });

      if (orderCreationResponse.data.createOrder.data.id) {
        router.push('/', {
          scroll: false,
        });

        dispatch({
          type: 'CLEAR_ORDER',
        });
      }

      toggleSubmitBtns(false);
    } else {
      toggleSubmitBtns(false);
    }
  };

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
