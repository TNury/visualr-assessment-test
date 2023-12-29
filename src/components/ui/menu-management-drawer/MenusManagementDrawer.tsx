import { Button } from '@vat/components/ui/button/Button';
import { DrawerHead } from '@vat/components/ui/drawer-head/DrawerHead';
import { Drawer } from '@vat/components/ui/drawer/Drawer';
import { Add } from '@vat/components/ui/icons/Add';
import { MenusManagementList } from '@vat/components/ui/menus-management-list/MenusManagementList';

import { getMenusManagementData } from '@vat/actions/menu.actions';

type MenusManagementDrawerProps = {};

export const MenusManagementDrawer: React.FC<
  MenusManagementDrawerProps
> = async () => {
  const response = await getMenusManagementData();

  return (
    <Drawer>
      <div className='flex h-full w-[410px] flex-col overflow-auto pt-6'>
        <DrawerHead
          title='Manage menus'
          subtitle='Interact with the options below to manage your menus'
        />
        <MenusManagementList menusProps={response} />
        <div className='mx-6 flex gap-2 border-t border-base-dark-line py-6'>
          <Button className='flex items-center justify-center gap-2'>
            <Add className='h-5 w-5' />
            Add new menu
          </Button>
        </div>
      </div>
    </Drawer>
  );
};
