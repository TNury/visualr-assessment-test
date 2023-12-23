import { ErrorProps } from '@vat/types/error.types';
import { MenusDataQuery } from '@vat/types/queries.types';

export type GetMenusDataResponse = {
  errors?: ErrorProps[];
  data: MenusDataQuery | null;
};
