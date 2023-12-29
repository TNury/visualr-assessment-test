import { DishCreationDrawer } from '@vat/components/ui/dish-creation-drawer/DishCreationDrawer';
import { DishManagementDrawer } from '@vat/components/ui/dish-management-drawer/DishManagementDrawer';
import { DishesManagementView } from '@vat/components/ui/dishes-management-view/DishesManagementView';
import { DishesMenuNav } from '@vat/components/ui/dishes-menu-nav/DishesMenuNav';
import { MenusManagementDrawer } from '@vat/components/ui/menu-management-drawer/MenusManagementDrawer';
import { ProductsManagementHeader } from '@vat/components/ui/products-management-header/ProductsManagementHeader';

type ProductsManagementProps = {
  params: {};
  searchParams: {
    menu?: string;
    search?: string;
    openDishCreationDrawerOnMenu?: string;
    openDishManagementDrawerOnDish?: string;
    openMenusManagementDrawer?: boolean;
    openMenuManagementModal?: boolean;
  };
};

const ProductsManagement: React.FC<ProductsManagementProps> = (props) => {
  const activeMenu = props.searchParams.menu;
  const searchQuery = props.searchParams.search;

  const openDishCreationDrawer =
    props.searchParams.openDishCreationDrawerOnMenu;

  const openDishManagementDrawer =
    props.searchParams.openDishManagementDrawerOnDish;

  const openMenusManagementDrawer =
    props.searchParams.openMenusManagementDrawer;

  const openMenuManagementModal = props.searchParams.openMenuManagementModal;

  return (
    <div className='flex h-full w-full flex-col'>
      <ProductsManagementHeader />
      <div className='border-b border-base-dark-line px-6'>
        <DishesMenuNav activeMenu={activeMenu} />
      </div>

      <DishesManagementView searchQuery={searchQuery} activeMenu={activeMenu} />

      {Boolean(openDishCreationDrawer) && (
        <DishCreationDrawer menuTitle={openDishCreationDrawer} />
      )}

      {Boolean(openDishManagementDrawer) && (
        <DishManagementDrawer dishId={openDishManagementDrawer} />
      )}

      {Boolean(openMenusManagementDrawer) && (
        <MenusManagementDrawer
          openMenuManagementModal={openMenuManagementModal}
        />
      )}
    </div>
  );
};

export default ProductsManagement;
