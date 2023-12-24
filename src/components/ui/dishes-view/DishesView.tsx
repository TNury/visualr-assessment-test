import { DishCard } from '@vat/components/ui/dish-card/DishCard';

import { getMenuById } from '@vat/actions/menu.actions';

type DishesViewProps = {
  activeMenu: string;
};

export const DishesView: React.FC<DishesViewProps> = async ({ activeMenu }) => {
  const response = await getMenuById({ id: activeMenu });

  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-heading-h2 text-white'>Choose Dishes</h2>
      <div className='row-gap grid w-full grid-cols-3 gap-x-7 gap-y-6'>
        {response.data.menu.data.attributes.dishes.data.map((entry) => (
          <DishCard dishProps={entry} key={entry.id} />
        ))}
      </div>
    </div>
  );
};
