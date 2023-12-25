
import { CreateOrderArgs, CreateOrderResponse } from '@vat/types/order.types';

import callAPI from '@vat/services/api';

export async function createOrder(
  args: CreateOrderArgs
): Promise<CreateOrderResponse> {
  const response: CreateOrderResponse = await callAPI('CreateOrder', args, {
    cache: 'no-cache',
  });

  return response;
}
