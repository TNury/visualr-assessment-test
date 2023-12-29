import { AddQueryLink } from '@vat/components/ui/add-query-link/AddQueryLink';
import { Button } from '@vat/components/ui/button/Button';
import { Option } from '@vat/components/ui/icons/Option';

type ProductsManagementHeaderProps = {};

export const ProductsManagementHeader: React.FC<
  ProductsManagementHeaderProps
> = () => {
  return (
    <div className='flex items-center gap-2 p-6'>
      <h2 className='mr-auto text-heading-h2 text-white'>
        Products Management
      </h2>

      <AddQueryLink query='openMenusManagementDrawer=true'>
        <Button variant='outlined-2' className='flex w-fit gap-2' tabIndex={-1}>
          <Option />
          Manage Categories
        </Button>
      </AddQueryLink>
    </div>
  );
};
