import { ErrorProps } from '@vat/types/error.types';
import {
  MenuByIdQuery,
  MenuByIdQueryVariables,
  MenusDataQuery,
} from '@vat/types/queries.types';

export type GetMenusDataResponse = {
  errors?: ErrorProps[];
  data: MenusDataQuery | null;
};

export type GetMenuByIdArgs = MenuByIdQueryVariables;

export type GetMenuByIdResponse = {
  errors?: ErrorProps[];
  data: MenuByIdQuery | null;
};

export type DishEntityProps =
  MenuByIdQuery['menu']['data']['attributes']['dishes']['data'][0];
