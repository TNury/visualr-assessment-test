import callAPI from '@vat/services/api';
import { GetMenusDataResponse } from '@vat/types/menu.types';

export async function getMenusData(): Promise<GetMenusDataResponse> {
  const response: GetMenusDataResponse = await callAPI('MenusData', null, {
    cache: 'no-cache',
  });

  return response;
}
