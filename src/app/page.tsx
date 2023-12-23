import { Header } from '@vat/components/ui/header/Header';
import { OrderPanel } from '@vat/components/ui/oder-panel/OrderPanel';
import { ProductCard } from '@vat/components/ui/product-card/ProductCard';

// @ TODO, GET RID OF THE ARBITRARY WIDTH VALUE OF 663PX
export const Home = () => {
  return (
    <main className='flex flex-col gap-6 p-6 pl-[128px] pr-[434px]'>
      <Header />
      <div className='flex flex-col gap-6'>
        <h2 className='text-heading-h2 text-white'>Choose Dishes</h2>
        <div className='row-gap grid w-full grid-cols-3 gap-x-7 gap-y-6'>
          {[1, 2, 3, 4, 5, 6].map((entry) => (
            <ProductCard key={entry} />
          ))}
        </div>
      </div>
      <OrderPanel />
    </main>
  );
};

export default Home;
