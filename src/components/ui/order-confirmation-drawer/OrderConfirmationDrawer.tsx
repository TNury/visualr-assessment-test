'use client';

import { useEffect } from 'react';

import Link from 'next/link';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { OrderPaymentPanel } from '@vat/components/ui/order-payment-panel/OrderPaymentPanel';
import { OrderSummaryPanel } from '@vat/components/ui/order-summary-panel/OrderSummaryPanel';

type OrderConfirmationDrawerProps = {
  open: boolean;
};

const stripePromise = loadStripe(
  'pk_test_51JDDw8FcRQWdCUNX8vvnirOihRxh6yftU5OYL6ZAM4gR6BijUFs8uxXlZKqxw7aYqXMoJwAWIYaifWtylafwFb3Q00pZS0KQny'
);

// @TODO - Make order number dynamic
const OrderConfirmationDrawer: React.FC<OrderConfirmationDrawerProps> = ({
  open,
}) => {
  useEffect(() => {
    const bodyRef = document.querySelector('body');

    if (open) {
      bodyRef.classList.add('overflow-hidden');
    }

    return () => {
      bodyRef.classList.remove('overflow-hidden');
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className='bg-base-overlay fixed right-0 top-0 z-50 flex h-screen w-screen flex-col items-end rounded-l-lg'>
      <Link href='/'>
        <div className='absolute inset-0 -z-10' />
      </Link>
      <div className='z-60 h-screen w-fit'>
        <Elements
          stripe={stripePromise}
          options={{
            fonts: [
              {
                cssSrc:
                  'https://fonts.googleapis.com/css2?family=Barlow&display=swap',
              },
            ],
          }}>
          <div className='flex h-full w-fit rounded-l-2xl bg-base-dark-bg-2'>
            <div className='w-fit border-r border-base-dark-line'>
              <OrderSummaryPanel />
            </div>
            <OrderPaymentPanel />
          </div>
        </Elements>
      </div>
    </div>
  );
};

const OrderConfirmationDrawerWithElements: React.FC<
  OrderConfirmationDrawerProps
> = ({ open }) => {
  return <OrderConfirmationDrawer open={open} />;
};

export default OrderConfirmationDrawerWithElements;
