'use client';

import { useSearchParams } from 'next/navigation';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Drawer } from '@vat/components/ui/drawer/Drawer';
import { OrderPaymentPanel } from '@vat/components/ui/order-payment-panel/OrderPaymentPanel';
import { OrderSummaryPanel } from '@vat/components/ui/order-summary-panel/OrderSummaryPanel';

const stripePromise = loadStripe(
  'pk_test_51JDDw8FcRQWdCUNX8vvnirOihRxh6yftU5OYL6ZAM4gR6BijUFs8uxXlZKqxw7aYqXMoJwAWIYaifWtylafwFb3Q00pZS0KQny'
);

// @TODO - Make order number dynamic
export const OrderConfirmationDrawer = () => {
  const openConfirmationDrawer =
    useSearchParams().get('openConfirmationDrawer') === 'true';

  return (
    <Drawer open={openConfirmationDrawer}>
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
    </Drawer>
  );
};
