import { Button } from '@vat/components/ui/button/Button';
import { Edit } from '@vat/components/ui/icons/Edit';
import { Trash } from '@vat/components/ui/icons/Trash';

import { returnFormattedNumber } from '@vat/lib/utils';

import { GetMenusManagementDataResponse } from '@vat/types/menu.types';

import { DeleteMenuButton } from '../delete-menu-button/DeleteMenuButton';

type MenusManagementListProps = {
  menusProps: GetMenusManagementDataResponse;
};

export const MenusManagementList: React.FC<MenusManagementListProps> = ({
  menusProps,
}) => {
  return (
    <div className='flex flex-1 flex-col gap-6 overflow-auto overscroll-contain px-6'>
      {menusProps.data.menus.data.map((entry, index) => (
        <div
          key={index}
          className='flex items-center gap-4 first:pt-6 last:pb-6'>
          <div className='mr-auto flex flex-col gap-2'>
            <p className='w-36 truncate text-body-base-medium text-white'>
              {entry.attributes.title}
            </p>
            <p className='text-body-base-medium text-text-light'>
              {returnFormattedNumber(
                Number(entry.attributes.dishes.data.length || 0)
              )}{' '}
              Dishes included
            </p>
          </div>
          <Button variant='outlined-2' size='icon-1' layout='centered'>
            <Edit className='h-5 w-5' />
          </Button>

          <DeleteMenuButton menuProps={entry} />
        </div>
      ))}
    </div>
  );
};
