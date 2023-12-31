import { redirect } from 'next/navigation';

import { AddQueryLink } from '@vat/components/ui/add-query-link/AddQueryLink';
import { Button } from '@vat/components/ui/button/Button';
import { DishManagementCard } from '@vat/components/ui/dish-management-card/DishManagementCard';
import { Add } from '@vat/components/ui/icons/Add';
import { PlaceholderMessage } from '@vat/components/ui/placeholder-message/PlaceholderMessage';

import {
  getDishesByMenuId,
  getDishesBySearchString,
} from '@vat/actions/menu.actions';

import {
  GetDishesByMenuIdResponse,
  GetDishesBySearchStringResponse,
} from '@vat/types/menu.types';

type DishesManagementViewProps = {
  activeMenu: string;
  searchQuery?: string;
};

export const DishesManagementView: React.FC<
  DishesManagementViewProps
> = async ({ searchQuery, activeMenu }) => {
  let results:
    | GetDishesByMenuIdResponse['data']['menu']['data']['attributes']['dishes']['data']
    | GetDishesBySearchStringResponse['data']['dishes']['data'];

  let menuTitle: string;

  if (searchQuery) {
    const searchResponse = await getDishesBySearchString({
      searchString: searchQuery,
    });

    results = searchResponse.data.dishes.data;
  } else {
    const menuResponse = await getDishesByMenuId({ id: activeMenu });

    if (!menuResponse.data.menu.data) {
      redirect('/settings/products-management');
    }

    menuTitle = menuResponse.data.menu.data.attributes.title;
    results = menuResponse.data.menu.data.attributes.dishes.data;
  }

  return searchQuery && results.length === 0 ? (
    <PlaceholderMessage
      title='No dishes found'
      body='Try searching for something else'
      bodySize='lg'
    />
  ) : (
    <div className='grid w-full flex-1 auto-rows-[302px] grid-cols-3 gap-4 overflow-auto p-6 lg:grid-cols-4 xl:grid-cols-6'>
      {!searchQuery && (
        <div className='relative flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-primary'>
          <AddQueryLink query={`openDishCreationDrawerOnMenu=${menuTitle}`}>
            <Button variant='ghost' className='w-fit' role='none' tabIndex={-1}>
              <Add className='h-5 w-5' />
            </Button>
          </AddQueryLink>
          <p className='text-body-lg-semibold text-primary'>Add new dish</p>
        </div>
      )}
      {results.map((entry, index) => (
        <DishManagementCard key={index} dishProps={entry} />
      ))}
    </div>
  );
};
