import { OrderSummaryPanel } from '@vat/components/ui/order-summary-panel/OrderSummaryPanel';

// @TODO - Make order number dynamic
export const OrderDrawer = () => {
  return (
    <div className='fixed right-0 top-0 z-40 flex h-screen w-[410px] flex-col rounded-l-lg bg-base-dark-bg-2'>
      {<OrderSummaryPanel />}
    </div>
  );
};
