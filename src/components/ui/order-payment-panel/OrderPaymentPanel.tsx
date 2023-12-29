'use client';

import Link from 'next/link';

import { Button } from '@vat/components/ui/button/Button';
import { useOrderPaymentPanel } from '@vat/components/ui/order-payment-panel/useOrderPaymentPanel';
import { PaymentFormGroup } from '@vat/components/ui/payment-form-group/PaymentFormGroup';
import { ReturnLink } from '@vat/components/ui/return-link/ReturnLink';
import { TextField } from '@vat/components/ui/text-field/TextField';

import { useOrderContext } from '@vat/context/order-context/OrderContext';
import { useSnackbarContext } from '@vat/context/snackbar-context/SnackbarContext';

import { DrawerHead } from '../drawer-head/DrawerHead';

export type PaymentMethodProps = 'credit-card' | 'paypal' | 'cash';

export const OrderPaymentPanel = () => {
  const orderContext = useOrderContext();
  const snackbarContext = useSnackbarContext();

  const {
    tableNo,
    setTableNo,
    error,
    setError,
    paymentMethod,
    setPaymentMethod,
    handleClick,
  } = useOrderPaymentPanel({ orderContext, snackbarContext });

  return (
    <div className='flex h-full w-[410px] flex-col overflow-auto'>
      <DrawerHead
        hideReturnLink
        title='Payment'
        subtitle='Choose from the payment methods below'
      />

      <div className='flex h-full flex-1 flex-col overflow-auto'>
        <div className='flex flex-col gap-4 overflow-auto px-6 pb-4 pt-6'>
          <h2 className='text-heading-h2 text-white'>Payment Method</h2>

          <PaymentFormGroup
            orderContext={orderContext}
            snackbarContext={snackbarContext}
            tableNo={tableNo}
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
        </div>
        <div className='mx-6 border-t border-base-dark-line pb-6 pt-4'>
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
      <div id='orderPaymentPanelBtns' className='mt-auto flex gap-2 px-6 pb-6'>
        <ReturnLink>
          <Button variant='outlined'>Cancel</Button>
        </ReturnLink>
        <Button onClick={handleClick}>Confirm Payment</Button>
      </div>
    </div>
  );
};
