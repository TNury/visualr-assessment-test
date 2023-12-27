import callAPI from '@vat/services/api';

import {
  GetDishesBySearchStringArgs,
  GetDishesBySearchStringResponse,
  GetMenuByIdArgs,
  GetMenuByIdResponse,
  GetMenusTitlesResponse,
} from '@vat/types/menu.types';

export async function getMenusTitles(): Promise<GetMenusTitlesResponse> {
  const response: GetMenusTitlesResponse = await callAPI('MenusTitles', null, {
    cache: 'no-cache',
  });

  return response;
}

export async function getMenuById(
  args: GetMenuByIdArgs
): Promise<GetMenuByIdResponse> {
  const response: GetMenuByIdResponse = await callAPI('MenuById', args, {
    cache: 'no-cache',
  });

  return response;
}

export async function getDishesBySearchString(
  args: GetDishesBySearchStringArgs
): Promise<GetDishesBySearchStringResponse> {
  const response: GetDishesBySearchStringResponse = await callAPI(
    'DishesBySearchString',
    args,
    {
      cache: 'no-cache',
    }
  );

  return response;
}
