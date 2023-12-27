import { DishCreationDrawer } from '@vat/components/ui/dish-creation-drawer/DishCreationDrawer';
import { DishesManagementView } from '@vat/components/ui/dishes-management-view/DishesManagementView';
import { DishesMenuNav } from '@vat/components/ui/dishes-menu-nav/DishesMenuNav';

type ProductsManagementProps = {
  params: {};
  searchParams: {
    menu: string;
    openDishCreationDrawerOnMenu: string;
  };
};

const ProductsManagement: React.FC<ProductsManagementProps> = (props) => {
  const activeMenu = props.searchParams.menu;
  const openDishCreationDrawer =
    props.searchParams.openDishCreationDrawerOnMenu;

  return (
    <div className='flex h-full w-full flex-col'>
      <div className='flex p-6'>
        <h2 className='text-heading-h2 text-white'>Products Management</h2>
      </div>
      <div className='border-b border-base-dark-line px-6'>
        <DishesMenuNav activeMenu={activeMenu} />
      </div>
      <DishesManagementView activeMenu={activeMenu} />
      {Boolean(openDishCreationDrawer) && <DishCreationDrawer />}
    </div>
  );
};

export default ProductsManagement;
