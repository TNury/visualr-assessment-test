'use server';

import { revalidatePath } from 'next/cache';

import callAPI from '@vat/services/api';

import { uploadMedia } from '@vat/actions/media.actions';

import { floatNumberRegex } from '@vat/lib/regex';

import {
  CreateDishArgs,
  CreateDishFormProps,
  CreateDishResponse,
  GetDishByIdArgs,
  GetDishByIdResponse,
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

export async function getDishById(
  args: GetDishByIdArgs
): Promise<GetDishByIdResponse> {
  const response: GetDishByIdResponse = await callAPI('DishById', args, {
    cache: 'no-cache',
  });

  return response;
}

export async function createDish(
  menuId: string,
  args: CreateDishFormProps
): Promise<CreateDishResponse> {
  const mediaUploadResponse = await uploadMedia(args.media);

  // If there was an error uploading the media, log the error and return the response
  if (mediaUploadResponse.error) {
    console.error(mediaUploadResponse.error);
    return mediaUploadResponse;
  }

  const payload: CreateDishArgs = {
    data: {
      ...args,
      media: String(mediaUploadResponse[0].id),
      menu: menuId,
      price: Number(args.price.replace(floatNumberRegex, '')),
    },
  };

  const response: CreateDishResponse = await callAPI(
    'CreateDish',
    {
      ...payload,
    },
    {
      cache: 'no-cache',
    }
  );

  revalidatePath('/settings/products-management?menu=1', 'page');

  return response;
}
