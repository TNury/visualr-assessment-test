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
  GetMostOrderedDishesByPaginationArgs,
  GetMostOrderedDishesByPaginationResponse,
  GetMostOrderedDishesResponseEntity,
  HighestIdOrderResponse,
  OrderStateProps,
  PaginatedOrderReportByDateArgs,
  PaginatedOrderReportByDateRespose,
  RawDashboardHighlightsByDateRangeResponse,
} from '@vat/types/order.types';
import { Enum_Order_Status } from '@vat/types/queries.types';

export async function createOrder(
  owner: string,
  tableNo: string,
  orderState: OrderStateProps
): Promise<CreateOrderResponse> {
  const payload: CreateOrderArgs = {
    data: {
      owner,
      total: orderState.subtotal,
      dishes: orderState.items.map((item) => item.id),
      dishesQuantities: orderState.items.map((item) => {
        return {
          dish: item.id,
          quantity: item.quantity,
        };
      }),
      status: Enum_Order_Status.Pending,
      tableNumber: tableNo,
      totalDishes: orderState.itemsCount,
    },
  };

  const response: CreateOrderResponse = await callAPI('CreateOrder', payload, {
    cache: 'no-cache',
  });

  return response;
}

export async function getNextOrderId(): Promise<string> {
  const response: HighestIdOrderResponse = await callAPI(
    'HighestIdOrder',
    null,
    {
      cache: 'no-cache',
    }
  );

  const highestOrderId = response.data.orders.data[0]?.id || '0';

  const nextOrderId = String(Number(highestOrderId) + 1);

  return nextOrderId;
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

export async function getMostOrderedDishesByPagination(
  args: GetMostOrderedDishesByPaginationArgs
): Promise<GetMostOrderedDishesResponseEntity[]> {
  const response: GetMostOrderedDishesByPaginationResponse = await callAPI(
    'MostOrderedDishesByPagination',
    args,
    {
      cache: 'no-cache',
    }
  );

  if (!response.data.orders.data.length) return [];

  const groupedDishes = _.groupBy(
    response.data.orders.data.flatMap(
      (order) => order.attributes.dishesQuantities
    ),
    'dish.data.id'
  );

  const dishQuantities = _.map(groupedDishes, (dishQuantities) => ({
    dish: dishQuantities[0].dish,
    quantity: _.sumBy(dishQuantities, 'quantity'),
  }));

  return dishQuantities.sort((a, b) => b.quantity - a.quantity);
}
