import { AddQueryLink } from '@vat/components/ui/add-query-link/AddQueryLink';
import { Button } from '@vat/components/ui/button/Button';
import { DrawerHead } from '@vat/components/ui/drawer-head/DrawerHead';
import { Drawer } from '@vat/components/ui/drawer/Drawer';
import { Add } from '@vat/components/ui/icons/Add';
import { MenuCreationModal } from '@vat/components/ui/menu-creation-modal/MenuCreationModal';
import { MenusManagementList } from '@vat/components/ui/menus-management-list/MenusManagementList';

import { getMenusManagementData } from '@vat/actions/menu.actions';

type MenusManagementDrawerProps = {
  openMenuManagementModal?: boolean;
};

export const MenusManagementDrawer: React.FC<
  MenusManagementDrawerProps
> = async ({ openMenuManagementModal }) => {
  const response = await getMenusManagementData();

  return (
    <Drawer>
      <div className='flex h-full w-[410px] flex-col overflow-auto py-6'>
        <DrawerHead
          title='Manage menus'
          subtitle='Interact with the options below to manage your menus'
          endAddornment={
            <AddQueryLink query='openMenuManagementModal=true'>
              <Button variant='contained-2' className='h-12 w-12' tabIndex={-1}>
                <Add className='h-5 w-5' />
              </Button>
            </AddQueryLink>
          }
        />
        <MenusManagementList menusProps={response} />

        {openMenuManagementModal && <MenuCreationModal />}
      </div>
    </Drawer>
  );
};
