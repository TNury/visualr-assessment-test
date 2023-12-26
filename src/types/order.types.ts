import { ErrorProps } from '@vat/types/error.types';
import { DishEntityProps } from '@vat/types/menu.types';
import {
  CreateOrderMutation,
  CreateOrderMutationVariables,
  OrderReportByPaginationQuery,
  OrderReportByPaginationQueryVariables,
  RawDashboardHighlightsByDateRangeQuery,
  TotalOrdersLengthQuery,
} from '@vat/types/queries.types';

export type OrderItemProps = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  notes?: string;
  media: DishEntityProps['attributes']['media'];
};

export type OrderStateProps = {
  id: string;
  items: OrderItemProps[];
  subtotal: number;
  itemsCount: number;
};

export type OrderActionProps =
  | { type: 'ADD_ITEM'; item: DishEntityProps }
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

export type GetTotalOrdersLengthResponse = {
  errors?: ErrorProps[];
  data?: TotalOrdersLengthQuery;
};

export type RawDashboardHighlightsByDateRangeResponse = {
  errors?: ErrorProps[];
  data?: RawDashboardHighlightsByDateRangeQuery;
};

export type OrderReportByPaginationArgs = OrderReportByPaginationQueryVariables;

export type OrderReportByPaginationResponse = {
  errors?: ErrorProps[];
  data?: OrderReportByPaginationQuery;
};

export type OrderReportByPaginationResponseEntityProps =
  OrderReportByPaginationResponse['data']['orders']['data'][0];
