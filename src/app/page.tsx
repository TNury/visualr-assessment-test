import { ActiveOrderPanel } from '@vat/components/ui/active-order-panel/ActiveOrderPanel';
import { DishesView } from '@vat/components/ui/dishes-view/DishesView';
import { Header } from '@vat/components/ui/header/Header';
import { MenuNav } from '@vat/components/ui/menu-nav/MenuNav';
import OrderConfirmationDrawer from '@vat/components/ui/order-confirmation-drawer/OrderConfirmationDrawer';

import { RootProvider } from '@vat/context/RootProvider';

type HomeProps = {
  params: {};
  searchParams: {
    menu: string;
    openConfirmationDrawer?: 'true';
  };
};

// @ TODO, GET RID OF THE ARBITRARY WIDTH VALUE OF 663PX
const Home: React.FC<HomeProps> = async (props) => {
  const activeMenu = props.searchParams.menu;
  const openConfirmationDrawer =
    props.searchParams.openConfirmationDrawer === 'true';

  return (
    <main className='flex flex-col pb-6 pl-[128px] pr-[434px]'>
      <Header>
        <MenuNav activeMenu={activeMenu} />
      </Header>
      <RootProvider>
        <DishesView activeMenu={activeMenu} />
        <ActiveOrderPanel />
        <OrderConfirmationDrawer open={openConfirmationDrawer} />
      </RootProvider>
    </main>
  );
};

export default Home;
