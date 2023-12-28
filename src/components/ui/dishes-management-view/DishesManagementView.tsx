import Link from 'next/link';

import { Button } from '@vat/components/ui/button/Button';
import { DishManagementCard } from '@vat/components/ui/dish-management-card/DishManagementCard';
import { Add } from '@vat/components/ui/icons/Add';

import { getMenuById } from '@vat/actions/menu.actions';

type DishesManagementViewProps = {
  activeMenu: string;
  searchQuery?: string;
};

export const DishesManagementView: React.FC<
  DishesManagementViewProps
> = async ({ searchQuery, activeMenu }) => {
  const menuResponse = await getMenuById({ id: activeMenu });

  return (
    <div className='grid w-full flex-1 auto-rows-[300px] grid-cols-3 gap-4 overflow-auto p-6 lg:grid-cols-4 xl:grid-cols-6'>
      <div className='relative flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-primary'>
        <Link
          href={{
            query: {
              menu: activeMenu,
              openDishCreationDrawerOnMenu:
                menuResponse.data.menu.data.attributes.title,
            },
          }}>
          <Button variant='ghost' className='w-fit' role='none' tabIndex={-1}>
            <Add className='h-5 w-5' />
          </Button>
        </Link>
        <p className='text-body-lg-semibold text-primary'>Add new dish</p>
      </div>
      {menuResponse.data.menu.data.attributes.dishes.data.map(
        (entry, index) => (
          <DishManagementCard
            key={index}
            menuTitle={menuResponse.data.menu.data.attributes.title}
            dishProps={entry}
          />
        )
      )}
    </div>
  );
};
