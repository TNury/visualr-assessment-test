import _ from 'lodash';

import callAPI from '@vat/services/api';

import { getDateAtMidnight } from '@vat/lib/utils';

import {
  CreateOrderArgs,
  CreateOrderResponse,
  GetTotalOrdersLengthResponse,
  RawDashboardHighlightsByDateRangeResponse,
} from '@vat/types/order.types';

export async function createOrder(
  args: CreateOrderArgs
): Promise<CreateOrderResponse> {
  const response: CreateOrderResponse = await callAPI('CreateOrder', args, {
    cache: 'no-cache',
  });

  return response;
}

export async function getTotalOrdersLength(): Promise<GetTotalOrdersLengthResponse> {
  const response: GetTotalOrdersLengthResponse = await callAPI(
    'TotalOrdersLength',
    null,
    {
      cache: 'no-cache',
    }
  );

  return response;
}

export async function getDashboardHighlights() {
  const today = getDateAtMidnight();
  const tomorrow = getDateAtMidnight(1);

  const response: RawDashboardHighlightsByDateRangeResponse = await callAPI(
    'RawDashboardHighlightsByDateRange',
    { dateStart: today, dateEnd: tomorrow },
    {
      cache: 'no-cache',
    }
  );

  const totalOrdersRevenue: number = _.reduce(
    response.data.orders.data,
    (sum, order) => {
      return sum + order.attributes.total;
    },
    0
  );

  const totalDishesOrdered: number = _.reduce(
    response.data.orders.data,
    (sum, order) => {
      return sum + order.attributes.dishes.data.length;
    },
    0
  );

  const totalCustomers = response.data.orders.data.length + 1;

  return {
    totalOrdersRevenue: Math.round(totalOrdersRevenue),
    totalDishesOrdered,
    totalCustomers,
  };
}
