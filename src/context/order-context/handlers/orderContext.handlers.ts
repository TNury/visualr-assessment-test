import { deleteCookie, storeCookie } from '@vat/actions/cookies.actions';
import { DishEntityProps } from '@vat/types/menu.types';
import { OrderStateProps } from '@vat/types/order.types';

export function handleOrderItemAddition(
  currentState: OrderStateProps,
  item: DishEntityProps
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
  currentState: OrderStateProps,
  id: string
): OrderStateProps {
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
  currentState: OrderStateProps,
  id: string,
  quantity: number
): OrderStateProps {
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

export function handleOrderClear(currentState: OrderStateProps): OrderStateProps {
  deleteCookie('order');

  return {
    ...currentState,
    items: [],
  };
}
