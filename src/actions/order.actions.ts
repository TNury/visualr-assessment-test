'use server';

import _ from 'lodash';

import callAPI from '@vat/services/api';

import {
  calculatePercentageChange,
  getCalculatedDashboardHighlights,
  getDateAtMidnight,
} from '@vat/lib/utils';

import {
  CreateOrderArgs,
  CreateOrderResponse,
  GetTotalOrdersLengthResponse,
  PaginatedOrderReportByDateArgs,
  PaginatedOrderReportByDateRespose,
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
  const yesterday = getDateAtMidnight(-1);
  const today = getDateAtMidnight();
  const tomorrow = getDateAtMidnight(1);

  const ordersDataTodayResponse: RawDashboardHighlightsByDateRangeResponse =
    await callAPI(
      'RawDashboardHighlightsByDateRange',
      { dateStart: today, dateEnd: tomorrow },
      {
        cache: 'no-cache',
      }
    );
  const ordersDataToday = ordersDataTodayResponse.data.orders.data;

  const ordersDataYesterdayReponse: RawDashboardHighlightsByDateRangeResponse =
    await callAPI(
      'RawDashboardHighlightsByDateRange',
      { dateStart: yesterday, dateEnd: today },
      {
        cache: 'no-cache',
      }
    );
  const ordersDataYesterday = ordersDataYesterdayReponse.data.orders.data;

  const calculatedHighlightsToday =
    getCalculatedDashboardHighlights(ordersDataToday);

  const calculatedHighlightsYesterday =
    getCalculatedDashboardHighlights(ordersDataYesterday);

  const highlightsPercentages = calculatePercentageChange(
    calculatedHighlightsYesterday,
    calculatedHighlightsToday
  );

  return {
    totalOrdersRevenue: {
      value: calculatedHighlightsToday.totalOrdersRevenue,
      percentage: highlightsPercentages.totalOrdersRevenue,
    },
    totalDishesOrdered: {
      value: calculatedHighlightsToday.totalDishesOrdered,
      percentage: highlightsPercentages.totalDishesOrdered,
    },
    totalCustomers: {
      value: calculatedHighlightsToday.totalCustomers,
      percentage: highlightsPercentages.totalCustomers,
    },
  };
}

export async function getPaginatedOrderReportsByDate(
  args: PaginatedOrderReportByDateArgs
): Promise<PaginatedOrderReportByDateRespose> {
  const response: PaginatedOrderReportByDateRespose = await callAPI(
    'PaginatedOrderReportByDate',
    args,
    {
      cache: 'no-cache',
    }
  );

  return response;
}
