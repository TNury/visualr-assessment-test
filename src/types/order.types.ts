import { ErrorProps } from '@vat/types/error.types';
import { DishByMenuEntityProps } from '@vat/types/menu.types';
import {
  CreateOrderMutation,
  CreateOrderMutationVariables,
  HighestIdOrderQuery,
  MostOrderedDishesByPaginationQuery,
  MostOrderedDishesByPaginationQueryVariables,
  PaginatedOrderReportByDateQuery,
  PaginatedOrderReportByDateQueryVariables,
  RawDashboardHighlightsByDateRangeQuery,
} from '@vat/types/queries.types';

export type OrderItemProps = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  notes?: string;
  media: DishByMenuEntityProps['attributes']['media'];
};

export type OrderStateProps = {
  id: string;
  items: OrderItemProps[];
  subtotal: number;
  itemsCount: number;
};

export type OrderActionProps =
  | { type: 'ADD_ITEM'; item: DishByMenuEntityProps }
  | { type: 'REMOVE_ITEM'; id: string }
  | { type: 'UPDATE_QUANTITY'; id: string; quantity: number }
  | { type: 'UPDATE_NOTES'; id: string; notes: string }
  | { type: 'CLEAR_ORDER' };

export type OrderContextProps = {
  orderState: OrderStateProps;
  dispatch: React.Dispatch<OrderActionProps>;
};

export type CreateOrderArgs = CreateOrderMutationVariables;

export type CreateOrderResponse = {
  errors?: ErrorProps[];
  data?: CreateOrderMutation;
};

export type HighestIdOrderResponse = {
  errors?: ErrorProps[];
  data?: HighestIdOrderQuery;
};

export type RawDashboardHighlightsByDateRangeResponse = {
  errors?: ErrorProps[];
  data?: RawDashboardHighlightsByDateRangeQuery;
};

export type PaginatedOrderReportByDateArgs =
  PaginatedOrderReportByDateQueryVariables;

export type PaginatedOrderReportByDateRespose = {
  errors?: ErrorProps[];
  data?: PaginatedOrderReportByDateQuery;
};

export type PaginatedOrderReportByDateQueryEntityProps =
  PaginatedOrderReportByDateRespose['data']['orders']['data'][0];

export type GetMostOrderedDishesByPaginationArgs =
  MostOrderedDishesByPaginationQueryVariables;

export type GetMostOrderedDishesByPaginationResponse = {
  errors?: ErrorProps[];
  data?: MostOrderedDishesByPaginationQuery;
};

export type GetMostOrderedDishesResponseEntity =
  MostOrderedDishesByPaginationQuery['orders']['data'][0]['attributes']['dishesQuantities'][0];
