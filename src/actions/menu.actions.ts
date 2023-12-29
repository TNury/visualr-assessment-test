'use server';

import { revalidatePath } from 'next/cache';

import callAPI from '@vat/services/api';

import { deleteMedia, uploadMedia } from '@vat/actions/media.actions';

import { floatNumberRegex } from '@vat/lib/regex';

import {
  CreateDishArgs,
  CreateDishFormProps,
  CreateDishResponse,
  DeleteDishResponse,
  GetDishByIdArgs,
  GetDishByIdResponse,
  GetDishesBySearchStringArgs,
  GetDishesBySearchStringResponse,
  GetFeaturedMenuIdResponse,
  GetMenuByIdArgs,
  GetMenuByIdResponse,
  GetMenusManagementDataResponse,
  GetMenusTitlesResponse,
  ManageDishFormProps,
  UpdateDishArgs,
  UpdateDishResponse,
} from '@vat/types/menu.types';

export async function getFeaturedMenuId(): Promise<GetFeaturedMenuIdResponse> {
  const response: GetFeaturedMenuIdResponse = await callAPI(
    'FeaturedMenuId',
    null,
    {
      cache: 'no-cache',
    }
  );

  return response;
}

export async function getMenusTitles(): Promise<GetMenusTitlesResponse> {
  const response: GetMenusTitlesResponse = await callAPI('MenusTitles', null, {
    cache: 'no-cache',
  });

  return response;
}

export async function getMenusManagementData(): Promise<GetMenusManagementDataResponse> {
  const response: GetMenusManagementDataResponse = await callAPI(
    'MenusManagementData',
    null,
    {
      cache: 'no-cache',
    }
  );

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

  revalidatePath('/settings/products-management');

  return response;
}

export async function updateDish(
  originalDishProps: GetDishByIdResponse,
  args: ManageDishFormProps
): Promise<UpdateDishResponse> {
  const payload: UpdateDishArgs = {
    id: originalDishProps.data.dish.data.id,
    data: {
      ...args,
      media: originalDishProps.data.dish.data.attributes.media.data.id,
      price: Number(args.price.replace(floatNumberRegex, '')),
    },
  };

  // If the media is a FormData instance, it means that the user has uploaded a new media
  if (args.media instanceof FormData) {
    const deleteMediaResponse = await deleteMedia(
      originalDishProps.data.dish.data.attributes.media.data.id
    );

    if (deleteMediaResponse.error) {
      console.error(deleteMediaResponse.error);
      return deleteMediaResponse;
    }

    const mediaUploadResponse = await uploadMedia(args.media);

    // If there was an error uploading the media, log the error and return the response
    if (mediaUploadResponse.error) {
      console.error(mediaUploadResponse.error);
      return mediaUploadResponse;
    }

    payload.data.media = String(mediaUploadResponse[0].id);
  }

  const response: UpdateDishResponse = await callAPI(
    'UpdateDish',
    {
      ...payload,
    },
    {
      cache: 'no-cache',
    }
  );

  revalidatePath('/settings/products-management');

  return response;
}

export async function deleteDish(
  dishProps: GetDishByIdResponse
): Promise<DeleteDishResponse> {
  const response: DeleteDishResponse = await callAPI(
    'DeleteDish',
    {
      id: dishProps.data.dish.data.id,
    },
    {
      cache: 'no-cache',
    }
  );

  const deleteMediaResponse = await deleteMedia(
    dishProps.data.dish.data.attributes.media.data.id
  );

  if (deleteMediaResponse.error) {
    console.error(deleteMediaResponse.error);
    return deleteMediaResponse;
  }

  revalidatePath('/settings/products-management');

  return response;
}
