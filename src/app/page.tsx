import { ActiveOrderPanel } from '@vat/components/ui/active-order-panel/ActiveOrderPanel';
import { DishesView } from '@vat/components/ui/dishes-view/DishesView';
import { Header } from '@vat/components/ui/header/Header';
import { MenuNav } from '@vat/components/ui/menu-nav/MenuNav';
import { OrderConfirmationDrawer } from '@vat/components/ui/order-confirmation-drawer/OrderConfirmationDrawer';

import { OrderProvider } from '@vat/context/order-context/OrderContext';

import { retrieveCookie } from '@vat/actions/cookies.actions';
import { getTotalOrdersLength } from '@vat/actions/order.actions';

import { OrderStateProps } from '@vat/types/order.types';

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
  const activeOrder: OrderStateProps = await retrieveCookie('order');
  const totalOrdersLengthResponse = await getTotalOrdersLength();
  const totalOrdersLength = totalOrdersLengthResponse.data.orders.data[0]?.id;

  return (
    <main className='flex flex-col pb-6 pl-[128px] pr-[434px]'>
      <Header>
        <MenuNav activeMenu={activeMenu} />
      </Header>
      <OrderProvider
        initialOrderData={activeOrder}
        initialOrderId={totalOrdersLength ? totalOrdersLength : '1'}>
        <DishesView activeMenu={activeMenu} />
        <ActiveOrderPanel />
        <OrderConfirmationDrawer />
      </OrderProvider>
    </main>
  );
};

export default Home;
