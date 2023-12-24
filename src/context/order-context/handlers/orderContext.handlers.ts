import { deleteCookie, storeCookie } from '@vat/actions/cookies.actions';
import { DishEntityProps } from '@vat/types/menu.types';
import { OrderState } from '@vat/types/order.types';

export function handleOrderItemAddition(
  currentState: OrderState,
  item: DishEntityProps
): OrderState {
  const orderItems = currentState.items;
  let updatedOrderItems: OrderState['items'];

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

  storeCookie('order', {
    ...currentState,
    items: updatedOrderItems,
  });

  return {
    ...currentState,
    items: updatedOrderItems,
  };
}

export function handleOrderItemRemoval(
  currentState: OrderState,
  id: string
): OrderState {
  const orderItems = currentState.items;
  const updatedOrderItems = orderItems.filter(
    (orderItem) => orderItem.id !== id
  );

  storeCookie('order', {
    ...currentState,
    items: updatedOrderItems,
  });

  return {
    ...currentState,
    items: updatedOrderItems,
  };
}

export function handleOrderItemQuantityUpdate(
  currentState: OrderState,
  id: string,
  quantity: number
): OrderState {
  const orderItems = currentState.items;
  const updatedOrderItems = orderItems.map((orderItem) =>
    orderItem.id === id ? { ...orderItem, quantity } : orderItem
  );

  storeCookie('order', {
    ...currentState,
    items: updatedOrderItems,
  });

  return {
    ...currentState,
    items: updatedOrderItems,
  };
}

export function handleOrderClear(currentState: OrderState): OrderState {
  deleteCookie('order');

  return {
    ...currentState,
    items: [],
  };
}
