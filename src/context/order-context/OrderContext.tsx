'use client';

import { ReactNode, createContext, useContext, useReducer } from 'react';

import {
  handleOrderClear,
  handleOrderItemAddition,
  handleOrderItemQuantityUpdate,
  handleOrderItemRemoval,
} from '@vat/context/order-context/handlers/orderContext.handlers';
import {
  OrderActionProps,
  OrderContextProps,
  OrderStateProps,
} from '@vat/types/order.types';

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

const orderReducer = (state: OrderStateProps, action: OrderActionProps): OrderStateProps => {
  switch (action.type) {
    case 'ADD_ITEM':
      return handleOrderItemAddition(state, action.item);
    case 'REMOVE_ITEM':
      return handleOrderItemRemoval(state, action.id);
    case 'UPDATE_QUANTITY':
      return handleOrderItemQuantityUpdate(state, action.id, action.quantity);
    case 'CLEAR_ORDER':
      return handleOrderClear(state);
    default:
      return state;
  }
};

export const OrderProvider: React.FC<{
  children: ReactNode;
  initialOrderData?: OrderStateProps;
}> = ({ children, initialOrderData }) => {
  const [orderState, dispatch] = useReducer(
    orderReducer,
    initialOrderData
      ? initialOrderData
      : {
          items: [],
        }
  );

  return (
    <OrderContext.Provider value={{ orderState, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within a OrderProvider');
  }
  return context;
};