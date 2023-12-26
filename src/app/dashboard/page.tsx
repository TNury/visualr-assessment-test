import { StatisticsHighlight } from '@vat/components/ui/statistics-highlight/StatisticsHighlight';

import { getDashboardHighlights } from '@vat/actions/order.actions';

import {
  getTodayFormatted,
  returnFormattedNumber,
  returnFormattedPrice,
} from '@vat/lib/utils';

const Dashboard = async () => {
  const dashboardHighlights = await getDashboardHighlights();
  const { totalOrdersRevenue, totalDishesOrdered, totalCustomers } =
    dashboardHighlights;

  return (
    <main className='flex flex-col gap-6 bg-base-dark-bg-1 p-6 pl-[128px] pr-[434px]'>
      <div className='flex flex-col gap-1 border-b border-base-dark-line pb-6'>
        <h1 className='text-heading-h1 text-white'>Dashboard</h1>
        <p className='text-body-lg-regular text-text-light'>
          {getTodayFormatted()}
        </p>
      </div>
      <div className='grid grid-cols-3 gap-6'>
        <StatisticsHighlight
          label='Total Revenue'
          statisticType='totalRevenue'
          total={returnFormattedPrice(totalOrdersRevenue)}
        />
        <StatisticsHighlight
          label='Total Dish Ordered'
          statisticType='totalDishes'
          total={returnFormattedNumber(totalDishesOrdered)}
        />
        <StatisticsHighlight
          label='Total Customer'
          statisticType='totalCustomers'
          total={returnFormattedNumber(totalCustomers)}
        />
      </div>
    </main>
  );
};

export default Dashboard;
