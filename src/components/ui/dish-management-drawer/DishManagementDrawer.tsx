import { redirect } from 'next/navigation';

import { DeleteDishButton } from '@vat/components/ui/delete-dish-button/DeleteDishButton';
import { DishManagementForm } from '@vat/components/ui/dish-management-form/DishManagementForm';
import { Drawer } from '@vat/components/ui/drawer/Drawer';
import { Back } from '@vat/components/ui/icons/Back';
import { ReturnLink } from '@vat/components/ui/return-link/ReturnLink';

import { getDishById } from '@vat/actions/menu.actions';

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
        <div className='mx-6 flex flex-col gap-4 border-b border-base-dark-line pb-6'>
          <ReturnLink>
            <Back className='text-white' />
          </ReturnLink>
          <div className='flex items-center justify-between gap-4'>
            <div className='flex w-4/5 flex-col gap-2'>
              <h1 className='text-heading-h1 text-white'>Manage your dish</h1>
              <p className='text-body-lg-medium text-text-light'>
                Managing{' '}
                <span className='text-body-lg-semibold text-primary'>
                  {dishProps.data.dish.data.attributes.title}'s
                </span>{' '}
                details
              </p>
            </div>

            <DeleteDishButton dishProps={dishProps} />
          </div>
        </div>

        <DishManagementForm dishProps={dishProps} />
      </div>
    </Drawer>
  );
};
