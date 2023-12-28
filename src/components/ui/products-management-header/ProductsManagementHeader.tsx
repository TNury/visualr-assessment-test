import { MenuSearchField } from '@vat/components/ui/menu-search-field/MenuSearchField';

export const ProductsManagementHeader = () => {
  return (
    <div className='flex items-center justify-between p-6'>
      <h2 className='text-heading-h2 text-white'>Products Management</h2>
      <MenuSearchField />
    </div>
  );
};
