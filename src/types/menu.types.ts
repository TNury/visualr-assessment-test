import { ErrorProps } from '@vat/types/error.types';
import {
  CreateDishMutation,
  CreateDishMutationVariables,
  DishByIdQuery,
  DishesBySearchStringQuery,
  DishesBySearchStringQueryVariables,
  FeaturedMenuIdQuery,
  MenuByIdQuery,
  MenuByIdQueryVariables,
  MenusTitlesAndDishCountQuery,
  MenusTitlesQuery,
  MutationDeleteDishArgs,
  UpdateDishMutation,
  UpdateDishMutationVariables,
} from '@vat/types/queries.types';

export type GetFeaturedMenuIdResponse = {
  errors?: ErrorProps[];
  data: FeaturedMenuIdQuery | null;
};

export type GetMenusTitlesResponse = {
  errors?: ErrorProps[];
  data: MenusTitlesQuery | null;
};

export type GetMenuTitlesAndDishCountResponse = {
  errors?: ErrorProps[];
  data: MenusTitlesAndDishCountQuery | null;
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

export type DishByMenuEntityProps =
  MenuByIdQuery['menu']['data']['attributes']['dishes']['data'][0];

export type GetDishByIdArgs = MenuByIdQueryVariables;

export type GetDishByIdResponse = {
  errors?: ErrorProps[];
  data: DishByIdQuery | null;
};

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

export type UpdateDishArgs = UpdateDishMutationVariables;

export type ManageDishFormProps = Omit<
  UpdateDishMutationVariables['data'],
  'media' | 'price'
> & {
  media: FormData | null | string;
  price: string;
};

export type UpdateDishResponse = {
  errors?: ErrorProps[];
  data: UpdateDishMutation | null;
};

export type DeleteDishArgs = MutationDeleteDishArgs;

export type DeleteDishResponse = {
  errors?: ErrorProps[];
  data: MutationDeleteDishArgs | null;
};
