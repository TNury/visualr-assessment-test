import { ErrorProps } from '@vat/types/error.types';
import {
  CreateDishMutation,
  CreateDishMutationVariables,
  DishesBySearchStringQuery,
  DishesBySearchStringQueryVariables,
  MenuByIdQuery,
  MenuByIdQueryVariables,
  MenusTitlesQuery,
} from '@vat/types/queries.types';

export type GetMenusTitlesResponse = {
  errors?: ErrorProps[];
  data: MenusTitlesQuery | null;
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

export type CreateDishArgs = CreateDishMutationVariables;

export type CreateDishFormProps = Omit<
  CreateDishMutationVariables['data'],
  'media' | 'price'
> & {
  media: FormData | null;
  price: string;
};

export type CreateDishResponse = {
  errors?: ErrorProps[];
  data: CreateDishMutation | null;
};
