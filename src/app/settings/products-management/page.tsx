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
    openMenusManagementDrawer?: string;
    openCreateMenuModal?: string;
    openMenuManagementModalOnMenu?: string;
  };
};

const ProductsManagement: React.FC<ProductsManagementProps> = ({
  searchParams,
}) => {
  const {
    menu: activeMenu,
    search: searchQuery,
    openDishCreationDrawerOnMenu: dishCreationDrawerMenuTitle,
    openDishManagementDrawerOnDish: dishManagementDrawerDishId,
    openMenusManagementDrawer: isMenusManagementDrawerOpen,
    openCreateMenuModal: isCreateMenuModalOpen,
    openMenuManagementModalOnMenu: isMenuManagementModalOnMenuOpen,
  } = searchParams;

  return (
    <div className='flex h-full w-full flex-col'>
      <ProductsManagementHeader />
      <div className='border-b border-base-dark-line px-6'>
        <DishesMenuNav activeMenu={activeMenu} />
      </div>

      <DishesManagementView searchQuery={searchQuery} activeMenu={activeMenu} />

      {dishCreationDrawerMenuTitle && (
        <DishCreationDrawer menuTitle={dishCreationDrawerMenuTitle} />
      )}

      {dishManagementDrawerDishId && (
        <DishManagementDrawer dishId={dishManagementDrawerDishId} />
      )}

      {isMenusManagementDrawerOpen && (
        <MenusManagementDrawer
          openCreateMenuModal={isCreateMenuModalOpen === 'true'}
          openMenuManagementModalOnMenu={isMenuManagementModalOnMenuOpen}
        />
      )}
    </div>
  );
};

export default ProductsManagement;
