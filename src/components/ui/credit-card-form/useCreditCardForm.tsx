'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { useElements, useStripe } from '@stripe/react-stripe-js';
import {
  StripeCardCvcElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementChangeEvent,
} from '@stripe/stripe-js';

import { createOrder } from '@vat/actions/order.actions';
import { createPaymentIntent } from '@vat/actions/payment.actions';

import { OrderContextProps } from '@vat/types/order.types';
import { Enum_Order_Status } from '@vat/types/queries.types';

type UseCreditCardFormProps = {
  tableNo: string;
  orderContext: OrderContextProps;
};

export const useCreditCardForm = (props: UseCreditCardFormProps) => {
  const { tableNo } = props;
  const { orderState, dispatch } = props.orderContext;

  const stripe = useStripe();
  const elements = useElements();

  const router = useRouter();

  const [cardHolderName, setCardHolderName] = useState('');
  const [errors, setErrors] = useState({
    cardHolderName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    request: '',
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
      } else {
        setErrors((prev) => ({
          ...prev,
          request: 'Something went wrong. Please try again.',
        }));
      }

      toggleSubmitBtns(false);
    } else {
      toggleSubmitBtns(false);

      setErrors((prev) => ({
        ...prev,
        request: 'Something went wrong. Please try again.',
      }));
    }
  };

  return {
    cardHolderName,
    setCardHolderName,
    errors,
    setErrors,
    handleOnChange,
    triggerPayment,
  };
};
