import { redirect } from 'next/navigation';

import { DishCard } from '@vat/components/ui/dish-card/DishCard';
import { PlaceholderMessage } from '@vat/components/ui/placeholder-message/PlaceholderMessage';

import { getDishesByMenuId } from '@vat/actions/menu.actions';

type DishesViewByMenuByMenuProps = {
  activeMenu: string;
};

export const DishesViewByMenu: React.FC<DishesViewByMenuByMenuProps> = async ({
  activeMenu,
}) => {
  const menuResponse = await getDishesByMenuId({ id: activeMenu });

  if (!menuResponse.data.menu.data) {
    redirect('/');
  }

  const resultsAreEmpty =
    menuResponse.data.menu.data?.attributes.dishes.data.length === 0;

  return !resultsAreEmpty ? (
    <div className='flex flex-col gap-6'>
      <h2 className='text-heading-h2 text-white'>Choose Dishes</h2>
      <div className='row-gap grid w-full auto-rows-max grid-cols-3 gap-x-7 gap-y-6 lg:grid-cols-4 xl:grid-cols-6'>
        {menuResponse.data.menu.data.attributes.dishes.data.map((entry) => (
          <DishCard dishProps={entry} key={entry.id} />
        ))}
      </div>
    </div>
  ) : (
    <PlaceholderMessage
      title='No dishes on this menu'
      body='Add some dishes to this menu to get started with your order process :)'
      className='pt-0'
      bodySize='lg'
    />
  );
};
