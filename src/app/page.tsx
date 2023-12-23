import { DishesView } from '@vat/components/ui/dishes-view/DishesView';
import { Header } from '@vat/components/ui/header/Header';
import { MenuNav } from '@vat/components/ui/header/menu-nav/MenuNav';
import { OrderPanel } from '@vat/components/ui/order-panel/OrderPanel';

type HomeProps = {
  params: {};
  searchParams: {
    menu: string;
  };
};

// @ TODO, GET RID OF THE ARBITRARY WIDTH VALUE OF 663PX
export const Home: React.FC<HomeProps> = (props) => {
  const activeMenu = props.searchParams.menu;

  return (
    <main className='flex flex-col gap-6 p-6 pl-[128px] pr-[434px]'>
      <Header>
        <MenuNav activeMenu={activeMenu} />
      </Header>
      <DishesView activeMenu={activeMenu} />
      <OrderPanel />
    </main>
  );
};

export default Home;
