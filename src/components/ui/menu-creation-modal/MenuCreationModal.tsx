import { MenuCreationForm } from '@vat/components/ui/menu-creation-form/MenuCreationForm';
import { ModalHead } from '@vat/components/ui/modal-head/ModalHead';
import { Modal } from '@vat/components/ui/modal/Modal';

export const MenuCreationModal = () => {
  return (
    <Modal>
      <ModalHead
        title='Manage menu'
        subtitle='Fill in the fields below to create a new menu.'
      />
      <MenuCreationForm />
    </Modal>
  );
};
