import { DishEntityProps } from '@vat/types/menu.types';

export type OrderItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  notes?: string;
  media: DishEntityProps['attributes']['media'];
};

export type OrderState = {
  items: OrderItem[];
};

export type OrderAction =
  | { type: 'ADD_ITEM'; item: DishEntityProps }
  | { type: 'REMOVE_ITEM'; id: 'string' }
  | { type: 'UPDATE_QUANTITY'; id: 'string'; quantity: number }
  | { type: 'CLEAR_ORDER' };

export type OrderContextProps = {
  orderState: OrderState;
  dispatch: React.Dispatch<OrderAction>;
};
