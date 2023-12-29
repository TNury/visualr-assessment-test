// import { MenuSearchField } from '@vat/components/ui/menu-search-field/MenuSearchField';
import Link from 'next/link';

import { Button } from '@vat/components/ui/button/Button';
import { Option } from '@vat/components/ui/icons/Option';

type ProductsManagementHeaderProps = {
  activeMenu?: string;
  searchQuery?: string;
};

export const ProductsManagementHeader: React.FC<
  ProductsManagementHeaderProps
> = ({ activeMenu, searchQuery }) => {
  const manageCategoriesButtonQuery = {
    openMenusManagementDrawer: true,
  };

  if (searchQuery) {
    manageCategoriesButtonQuery['search'] = searchQuery;
  } else {
    manageCategoriesButtonQuery['menu'] = activeMenu;
  }

  return (
    <div className='flex items-center gap-2 p-6'>
      <h2 className='mr-auto text-heading-h2 text-white'>
        Products Management
      </h2>
      {/* <MenuSearchField /> */}
      <Link
        href={{
          query: manageCategoriesButtonQuery,
        }}>
        <Button variant='outlined-2' className='flex w-fit gap-2' tabIndex={-1}>
          <Option />
          Manage Categories
        </Button>
      </Link>
    </div>
  );
};
