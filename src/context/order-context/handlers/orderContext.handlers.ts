import _ from 'lodash';

import { storeCookie } from '@vat/actions/cookies.actions';

import { DishByMenuEntityProps } from '@vat/types/menu.types';
import { OrderStateProps } from '@vat/types/order.types';

function debouncedStoreCookie(key: string, value: OrderStateProps): void {
  _.debounce(storeCookie, 1000)(key, value);
}

function returnOrderTotal(orderItems: OrderStateProps['items']): number {
  return orderItems.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
}

function returnItemsCount(orderItems: OrderStateProps['items']): number {
  return orderItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
}

export function handleOrderItemAddition(
  currentState: OrderStateProps,
  item: DishByMenuEntityProps
): OrderStateProps {
  const orderItems = currentState.items;
  let updatedOrderItems: OrderStateProps['items'];

  const itemExists = orderItems.find((orderItem) => orderItem.id === item.id);

  if (itemExists) {
    updatedOrderItems = orderItems.map((orderItem) =>
      orderItem.id === item.id
        ? { ...orderItem, quantity: orderItem.quantity + 1 }
        : orderItem
    );
  } else {
    updatedOrderItems = [
      ...orderItems,
      {
        id: item.id,
        quantity: 1,
        notes: '',
        title: item.attributes.title,
        price: item.attributes.price,
        media: item.attributes.media,
      },
    ];
  }

  const updatedOrderState = {
    ...currentState,
    items: updatedOrderItems,
    subtotal: returnOrderTotal(updatedOrderItems),
    itemsCount: returnItemsCount(updatedOrderItems),
  };

  debouncedStoreCookie('order', updatedOrderState);

  return updatedOrderState;
}

export function handleOrderItemRemoval(
  currentState: OrderStateProps,
  id: string
): OrderStateProps {
  const orderItems = currentState.items;
  const updatedOrderItems = orderItems.filter(
    (orderItem) => orderItem.id !== id
  );

  if (updatedOrderItems.length === 0) {
    return handleOrderClear(currentState);
  }

  const updatedOrderState = {
    ...currentState,
    items: updatedOrderItems,
    subtotal: returnOrderTotal(updatedOrderItems),
    itemsCount: returnItemsCount(updatedOrderItems),
  };

  debouncedStoreCookie('order', updatedOrderState);

  return updatedOrderState;
}

export function handleOrderItemQuantityUpdate(
  currentState: OrderStateProps,
  id: string,
  quantity: number
): OrderStateProps {
  const orderItems = currentState.items;
  const updatedOrderItems = orderItems.map((orderItem) =>
    orderItem.id === id ? { ...orderItem, quantity } : orderItem
  );

  const updatedOrderState = {
    ...currentState,
    items: updatedOrderItems,
    subtotal: returnOrderTotal(updatedOrderItems),
    itemsCount: returnItemsCount(updatedOrderItems),
  };

  debouncedStoreCookie('order', updatedOrderState);

  return updatedOrderState;
}

export function handleOrderItemNotesUpdate(
  currentState: OrderStateProps,
  id: string,
  notes: string
): OrderStateProps {
  const orderItems = currentState.items;
  const updatedOrderItems = orderItems.map((orderItem) =>
    orderItem.id === id ? { ...orderItem, notes } : orderItem
  );

  const updatedOrderState = {
    ...currentState,
    items: updatedOrderItems,
  };

  debouncedStoreCookie('order', updatedOrderState);

  return updatedOrderState;
}

export function handleOrderClear(
  currentState: OrderStateProps
): OrderStateProps {
  const updatedOrderData = {
    ...currentState,
    items: [],
    subtotal: 0,
    itemsCount: 0,
  };

  debouncedStoreCookie('order', updatedOrderData);

  return updatedOrderData;
}
