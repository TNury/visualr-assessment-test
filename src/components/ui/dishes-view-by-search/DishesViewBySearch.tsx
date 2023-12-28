import { DishCard } from '@vat/components/ui/dish-card/DishCard';
import { PlaceholderMessage } from '@vat/components/ui/placeholder-message/PlaceholderMessage';

import { getDishesBySearchString } from '@vat/actions/menu.actions';

type DishesViewBySearchProps = {
  searchQuery: string;
};

// Also, add messag for when theres no items on menu??
// Also, sort dishes by created at date
// Also, add dishes by search thingy i think
// Also, you you search for a dish, maybe it shouldnt show the menu highlighted??
// Have a look at the border dash
export const DishesViewBySearch: React.FC<DishesViewBySearchProps> = async ({
  searchQuery,
}) => {
  const searchResponse = await getDishesBySearchString({
    searchString: searchQuery,
  });

  const resultsAreEmpty = searchResponse.data.dishes.data.length === 0;

  return !resultsAreEmpty ? (
    <div className='flex flex-col gap-6'>
      <h2 className='text-heading-h2 text-white'>
        {searchQuery ? 'Search Results' : 'Choose Dishes'}
      </h2>
      <div className='row-gap grid w-full auto-rows-max grid-cols-3 gap-x-7 gap-y-6 lg:grid-cols-4 xl:grid-cols-6'>
        {searchResponse.data.dishes.data.map((entry) => (
          <DishCard dishProps={entry} key={entry.id} />
        ))}
      </div>
    </div>
  ) : (
    <PlaceholderMessage
      title='No dishes found'
      body='Try searching for something else'
      className='pt-0'
      bodySize='lg'
    />
  );
};
