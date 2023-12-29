import React from 'react';

import { OrderReportItem } from '@vat/components/ui/order-report-item/OrderReportItem';
import { PlaceholderMessage } from '@vat/components/ui/placeholder-message/PlaceholderMessage';

import { PaginatedOrderReportByDateRespose } from '@vat/types/order.types';

import { Button } from '../button/Button';
import { Option } from '../icons/Option';

type OrderReportProps = {
  orderReport: PaginatedOrderReportByDateRespose;
};

export const OrderReport: React.FC<OrderReportProps> = ({ orderReport }) => {
  const isEmpty = orderReport.data.orders.data.length === 0;

  return (
    <div className='flex flex-1 flex-col overflow-auto rounded-lg bg-base-dark-bg-2'>
      <div className='flex flex-col gap-6 border-b border-base-dark-line p-6 pb-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-heading-h2 text-white'>Order Report</h2>
          <Button
            variant='outlined-2'
            className='flex w-fit gap-2'
            tabIndex={-1}>
            Filter Order
            <Option />
          </Button>
        </div>
        <div className='flex gap-6'>
          <p className='w-[35%] text-body-base-semibold text-white'>Customer</p>
          <p className='w-1/4 text-body-base-semibold text-white'>Menu</p>
          <p className='w-1/4 text-body-base-semibold text-white'>
            Total Payment
          </p>
          <p className='w-[15%] text-body-base-semibold text-white'>Status</p>
        </div>
      </div>
      <div className='flex h-full w-full flex-col overflow-auto px-6'>
        {isEmpty ? (
          <PlaceholderMessage
            title='No orders yet'
            body='Start taking orders by going to the menu page and add dishes to your menu.'
            bodySize='lg'
          />
        ) : (
          orderReport.data.orders.data.map((entry, index) => (
            <OrderReportItem key={entry.id} orderProps={entry} index={index} />
          ))
        )}
      </div>
    </div>
  );
};
