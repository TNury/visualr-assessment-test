import { ActiveOrderPanel } from '@vat/components/ui/active-order-panel/ActiveOrderPanel';
import { DishesMenuNav } from '@vat/components/ui/dishes-menu-nav/DishesMenuNav';
import { DishesViewByMenu } from '@vat/components/ui/dishes-view-by-menu/DishesViewByMenu';
import { DishesViewBySearch } from '@vat/components/ui/dishes-view-by-search/DishesViewBySearch';
import { HomepageHeader } from '@vat/components/ui/homepage-header/HomepageHeader';
import { OrderConfirmationDrawer } from '@vat/components/ui/order-confirmation-drawer/OrderConfirmationDrawer';

import { OrderProvider } from '@vat/context/order-context/OrderContext';

import { retrieveCookie } from '@vat/actions/cookies.actions';
import { getNextOrderId } from '@vat/actions/order.actions';

import { OrderStateProps } from '@vat/types/order.types';

type HomeProps = {
  params: {};
  searchParams: {
    menu: string;
    openConfirmationDrawer?: 'true';
    search: string;
  };
};

// @ TODO, GET RID OF THE ARBITRARY WIDTH VALUE OF 663PX
const Home: React.FC<HomeProps> = async (props) => {
  const activeMenu = props.searchParams.menu;
  const searchQuery = props.searchParams.search;
  const activeOrder: OrderStateProps = await retrieveCookie('order');

  const nextOrderId = await getNextOrderId();

  return (
    <main className='flex flex-col gap-6 pb-6 pl-[128px] pr-[434px]'>
      <HomepageHeader>
        <DishesMenuNav activeMenu={activeMenu} />
      </HomepageHeader>
      <OrderProvider initialOrderData={activeOrder} nextOrderId={nextOrderId}>
        {searchQuery ? (
          <DishesViewBySearch searchQuery={searchQuery} />
        ) : (
          <DishesViewByMenu activeMenu={activeMenu} />
        )}

        <ActiveOrderPanel />
        <OrderConfirmationDrawer />
      </OrderProvider>
    </main>
  );
};

export default Home;
