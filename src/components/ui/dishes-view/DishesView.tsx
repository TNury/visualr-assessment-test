import { DishCard } from '@vat/components/ui/dish-card/DishCard';

import {
  getDishesBySearchString,
  getMenuById,
} from '@vat/actions/menu.actions';

import { GetDishesBySearchStringResponse } from '@vat/types/menu.types';

type DishesViewProps = {
  activeMenu: string;
  searchQuery?: string;
};

export const DishesView: React.FC<DishesViewProps> = async ({
  searchQuery,
  activeMenu,
}) => {
  const menuResponse = await getMenuById({ id: activeMenu });
  let searchResponse: GetDishesBySearchStringResponse;

  if (searchQuery) {
    searchResponse = await getDishesBySearchString({
      searchString: searchQuery,
    });
  }

  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-heading-h2 text-white'>Choose Dishes</h2>
      <div className='row-gap grid w-full grid-cols-3 gap-x-7 gap-y-6 xl:grid-cols-6'>
        {searchQuery
          ? searchResponse.data.dishes.data.map((entry) => (
              <DishCard dishProps={entry} key={entry.id} />
            ))
          : menuResponse.data.menu.data.attributes.dishes.data.map((entry) => (
              <DishCard dishProps={entry} key={entry.id} />
            ))}
      </div>
    </div>
  );
};
