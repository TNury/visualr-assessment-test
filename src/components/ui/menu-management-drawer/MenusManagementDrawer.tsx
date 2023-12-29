import Link from 'next/link';

import { Button } from '@vat/components/ui/button/Button';
import { DrawerHead } from '@vat/components/ui/drawer-head/DrawerHead';
import { Drawer } from '@vat/components/ui/drawer/Drawer';
import { Add } from '@vat/components/ui/icons/Add';
import { MenusManagementList } from '@vat/components/ui/menus-management-list/MenusManagementList';
import { Modal } from '@vat/components/ui/modal/Modal';

import { getMenusManagementData } from '@vat/actions/menu.actions';

import { AddQueryLink } from '../add-query-link/AddQueryLink';

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

        {openMenuManagementModal && <Modal>"Hello world"</Modal>}

        {/* <div className='mx-6 flex gap-2 border-t border-base-dark-line py-6'>
          <Button className='flex items-center justify-center gap-2'>
            <Add className='h-5 w-5' />
            Add new menu
          </Button>
        </div> */}
      </div>
    </Drawer>
  );
};
