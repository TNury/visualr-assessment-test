'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { createOrder } from '@vat/actions/order.actions';

import { OrderContextProps } from '@vat/types/order.types';
import { Enum_Order_Status } from '@vat/types/queries.types';
import { SnackbarContextProps } from '@vat/types/snackbar.types';

import { PaymentMethodProps } from './OrderPaymentPanel';

type UseOrderPaymentPanelProps = {
  orderContext: OrderContextProps;
  snackbarContext: SnackbarContextProps;
};

export const useOrderPaymentPanel = (props: UseOrderPaymentPanelProps) => {
  const [tableNo, setTableNo] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const { orderContext, snackbarContext } = props;
  const { orderState, dispatch: dispatchOrder } = orderContext;
  const { dispatch: dispatchSnackbar } = snackbarContext;

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethodProps>('credit-card');

  const handleClick = async () => {
    if (!tableNo) {
      setError('Table number is required.');
      return;
    }

    if (paymentMethod === 'credit-card') {
      // Triger payment handling on CreditCardForm component
      const paymentBtnRef = document.getElementById('creditCardFormBtn');
      paymentBtnRef?.click();
    } else {
      try {
        const orderCreationResponse = await createOrder(
          'Anonymous',
          tableNo,
          orderState
        );

        if (orderCreationResponse.data.createOrder.data.id) {
          router.push('/', {
            scroll: false,
          });

          dispatchOrder({
            type: 'CLEAR_ORDER',
          });

          dispatchSnackbar({
            type: 'SET_SNACKBAR',
            payload: {
              severity: 'success',
              message: 'Order placed successfully!',
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return {
    tableNo,
    setTableNo,
    error,
    setError,
    paymentMethod,
    setPaymentMethod,
    handleClick,
  };
};
