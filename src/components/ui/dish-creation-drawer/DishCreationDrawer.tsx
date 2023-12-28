import { DishCreationForm } from '@vat/components/ui/dish-creation-form/DishCreationForm';
import { Drawer } from '@vat/components/ui/drawer/Drawer';
import { Back } from '@vat/components/ui/icons/Back';
import { ReturnLink } from '@vat/components/ui/return-link/ReturnLink';

import { DrawerHead } from '../drawer-head/DrawerHead';

type DishCreationDrawerProps = {
  menuId: string;
  menuTitle: string;
};

export const DishCreationDrawer: React.FC<DishCreationDrawerProps> = ({
  menuId,
  menuTitle,
}) => {
  return (
    <Drawer>
      <div className='flex h-full w-[410px] flex-col overflow-auto pt-6'>
        <DrawerHead
          title='Create a new dish'
          subtitle={`Fill in the details below to create a new dish for the ${menuTitle} menu`}
        />

        <DishCreationForm menuId={menuId} />
      </div>
    </Drawer>
  );
};
