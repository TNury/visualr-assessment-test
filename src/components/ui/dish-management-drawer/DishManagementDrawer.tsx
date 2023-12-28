import { redirect } from 'next/navigation';

import { DeleteDishButton } from '@vat/components/ui/delete-dish-button/DeleteDishButton';
import { DishManagementForm } from '@vat/components/ui/dish-management-form/DishManagementForm';
import { Drawer } from '@vat/components/ui/drawer/Drawer';
import { Back } from '@vat/components/ui/icons/Back';
import { ReturnLink } from '@vat/components/ui/return-link/ReturnLink';

import { getDishById } from '@vat/actions/menu.actions';

import { DrawerHead } from '../drawer-head/DrawerHead';

type DishManagementDrawerProps = {
  dishId: string;
};

// Add delete button
export const DishManagementDrawer: React.FC<
  DishManagementDrawerProps
> = async ({ dishId }) => {
  const dishProps = await getDishById({ id: dishId });

  if (!dishProps.data.dish.data) {
    redirect('/app/settings/products-management');

    return null;
  }

  return (
    <Drawer>
      <div className='flex h-full w-[410px] flex-col overflow-auto pt-6'>
        <DrawerHead
          title='Manage your dish'
          subtitle={`Managing ${dishProps.data.dish.data.attributes.title}'s details`}
          endAddornment={<DeleteDishButton dishProps={dishProps} />}
        />

        <DishManagementForm dishProps={dishProps} />
      </div>
    </Drawer>
  );
};
