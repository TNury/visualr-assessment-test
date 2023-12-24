import { DishesView } from '@vat/components/ui/dishes-view/DishesView';
import { Header } from '@vat/components/ui/header/Header';
import { MenuNav } from '@vat/components/ui/header/menu-nav/MenuNav';
import { OrderPanel } from '@vat/components/ui/order-panel/OrderPanel';

import { RootProvider } from '@vat/context/RootProvider';

type HomeProps = {
  params: {};
  searchParams: {
    menu: string;
  };
};

// @ TODO, GET RID OF THE ARBITRARY WIDTH VALUE OF 663PX
export const Home: React.FC<HomeProps> = async (props) => {
  const activeMenu = props.searchParams.menu;

  return (
    <main className='flex flex-col pb-6 pl-[128px] pr-[434px]'>
      <Header>
        <MenuNav activeMenu={activeMenu} />
      </Header>
      <RootProvider>
        <DishesView activeMenu={activeMenu} />
        <OrderPanel />
      </RootProvider>
    </main>
  );
};

export default Home;
