import { OrderSummary } from '@vat/components/ui/order-panel/order-summary/OrderSummary';

export const OrderPanel = () => {
  return (
    <div className='fixed right-0 z-40 top-0 flex h-screen w-[410px] flex-col gap-6 rounded-l-lg bg-base-dark-bg-2 p-6'>
      <div className='flex flex-col gap-[42px]'>
        <h1 className='text-heading-h2 text-white'>Order #34562</h1>
        <div className='flex gap-[42px]'>
          <p className='mr-auto text-body-lg-semibold text-white'>Item</p>
          <p className='text-body-lg-semibold text-white'>Qty</p>
          <p className='text-body-lg-semibold text-white'>Price</p>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        <hr className='border-base-dark-line' />
        {<OrderSummary />}
      </div>
    </div>
  );
};
