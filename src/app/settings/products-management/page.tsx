import { DishCreationDrawer } from '@vat/components/ui/dish-creation-drawer/DishCreationDrawer';
import { DishesManagementView } from '@vat/components/ui/dishes-management-view/DishesManagementView';
import { DishesMenuNav } from '@vat/components/ui/dishes-menu-nav/DishesMenuNav';
import { ProductsManagementHeader } from '@vat/components/ui/products-management-header/ProductsManagementHeader';

type ProductsManagementProps = {
  params: {};
  searchParams: {
    menu?: string;
    search?: string;
    openDishCreationDrawerOnMenu?: string;
  };
};

const ProductsManagement: React.FC<ProductsManagementProps> = (props) => {
  const activeMenu = props.searchParams.menu;
  const searchQuery = props.searchParams.search;

  const openDishCreationDrawer =
    props.searchParams.openDishCreationDrawerOnMenu;

  return (
    <div className='flex h-full w-full flex-col'>
      <ProductsManagementHeader />
      <div className='border-b border-base-dark-line px-6'>
        <DishesMenuNav activeMenu={activeMenu} />
      </div>
      <DishesManagementView searchQuery={searchQuery} activeMenu={activeMenu} />

      {Boolean(openDishCreationDrawer) && (
        <DishCreationDrawer
          menuId={activeMenu}
          menuTitle={openDishCreationDrawer}
        />
      )}
    </div>
  );
};

export default ProductsManagement;
