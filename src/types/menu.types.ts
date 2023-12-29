import { ErrorProps } from '@vat/types/error.types';
import {
  CreateDishMutation,
  CreateDishMutationVariables,
  CreateMenuMutation,
  DishByIdQuery,
  DishesBySearchStringQuery,
  DishesBySearchStringQueryVariables,
  FeaturedMenuIdQuery,
  DishesByMenuIdQuery,
  DishesByMenuIdQueryVariables,
  MenusManagementDataQuery,
  MenusTitlesQuery,
  MutationCreateMenuArgs,
  MutationDeleteDishArgs,
  MutationDeleteMenuArgs,
  MutationUpdateMenuArgs,
  UpdateDishMutation,
  UpdateDishMutationVariables,
  UpdateMenuMutation,
} from '@vat/types/queries.types';

export type GetFeaturedMenuIdResponse = {
  errors?: ErrorProps[];
  data: FeaturedMenuIdQuery | null;
};

export type GetMenusTitlesResponse = {
  errors?: ErrorProps[];
  data: MenusTitlesQuery | null;
};

export type GetMenusManagementDataResponse = {
  errors?: ErrorProps[];
  data: MenusManagementDataQuery | null;
};

export type GetMenusManagementDataResponseEntity =
  GetMenusManagementDataResponse['data']['menus']['data'][0];

export type GetDishesByMenuIdArgs = DishesByMenuIdQueryVariables;

export type GetDishesByMenuIdResponse = {
  errors?: ErrorProps[];
  data: DishesByMenuIdQuery | null;
};

export type CreateMenuArgs = MutationCreateMenuArgs;

export type CreateMenuFormProps = Omit<
  MutationCreateMenuArgs['data'],
  'index'
> & {
  index: string;
};

export type CreateMenuResponse = {
  errors?: ErrorProps[];
  data: CreateMenuMutation | null;
};

export type UpdateMenuArgs = MutationUpdateMenuArgs;

export type UpdateMenuFormProps = Omit<
  MutationUpdateMenuArgs['data'],
  'index'
> & {
  index: string;
};

export type UpdateMenuResponse = {
  errors?: ErrorProps[];
  data: UpdateMenuMutation | null;
};

export type DeleteMenuArgs = MutationDeleteMenuArgs;

export type DeleteMenuResponse = {
  errors?: ErrorProps[];
  data: MutationDeleteMenuArgs | null;
};

export type GetDishesBySearchStringArgs = DishesBySearchStringQueryVariables;

export type GetDishesBySearchStringResponse = {
  errors?: ErrorProps[];
  data: DishesBySearchStringQuery | null;
};

export type DishByMenuEntityProps =
  DishesByMenuIdQuery['menu']['data']['attributes']['dishes']['data'][0];

export type GetDishByIdArgs = DishesByMenuIdQueryVariables;

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
