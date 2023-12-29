import { MenuCreationForm } from '@vat/components/ui/menu-creation-form/MenuCreationForm';
import { MenuManagementForm } from '@vat/components/ui/menu-management-form/MenuManagementForm';
import { ModalHead } from '@vat/components/ui/modal-head/ModalHead';
import { Modal } from '@vat/components/ui/modal/Modal';

import { getMenuById } from '@vat/actions/menu.actions';

type MenuManagementModalProps = {
  menuId: string;
};

export const MenuManagementModal: React.FC<MenuManagementModalProps> = async ({
  menuId,
}) => {
  const menuProps = await getMenuById({ id: menuId });

  return (
    <Modal>
      <ModalHead
        title='Manage menu'
        subtitle={`Interact with the fields below to manage the ${menuProps.data.menu.data.attributes.title} menu.`}
      />
      <MenuManagementForm menuProps={menuProps} />
    </Modal>
  );
};
