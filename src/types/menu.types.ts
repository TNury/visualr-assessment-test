import { ErrorProps } from '@vat/types/error.types';
import {
  DishesBySearchStringQuery,
  DishesBySearchStringQueryVariables,
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

export type GetDishesBySearchStringArgs = DishesBySearchStringQueryVariables;

export type GetDishesBySearchStringResponse = {
  errors?: ErrorProps[];
  data: DishesBySearchStringQuery | null;
};

export type DishEntityProps =
  MenuByIdQuery['menu']['data']['attributes']['dishes']['data'][0];
