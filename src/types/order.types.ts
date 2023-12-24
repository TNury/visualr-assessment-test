import { DishEntityProps } from '@vat/types/menu.types';

export type OrderItemProps = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  notes?: string;
  media: DishEntityProps['attributes']['media'];
};

export type OrderStateProps = {
  items: OrderItemProps[];
  subtotal: number;
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
