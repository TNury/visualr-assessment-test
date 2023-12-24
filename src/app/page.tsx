import { retrieveCookie } from '@vat/actions/cookies.actions';
import { DishesView } from '@vat/components/ui/dishes-view/DishesView';
import { Header } from '@vat/components/ui/header/Header';
import { MenuNav } from '@vat/components/ui/header/menu-nav/MenuNav';
import { OrderPanel } from '@vat/components/ui/order-panel/OrderPanel';
import { OrderProvider } from '@vat/context/order-context/OrderContext';
import { OrderState } from '@vat/types/order.types';

type HomeProps = {
  params: {};
  searchParams: {
    menu: string;
  };
};

// @ TODO, GET RID OF THE ARBITRARY WIDTH VALUE OF 663PX
export const Home: React.FC<HomeProps> = async (props) => {
  const activeOrder: OrderState = await retrieveCookie('order');

  const activeMenu = props.searchParams.menu;

  return (
    <main className='flex flex-col pb-6 pl-[128px] pr-[434px]'>
      <Header>
        <MenuNav activeMenu={activeMenu} />
      </Header>
      <OrderProvider initialOrderData={activeOrder}>
        <DishesView activeMenu={activeMenu} />
        <OrderPanel />
      </OrderProvider>
    </main>
  );
};

export default Home;
