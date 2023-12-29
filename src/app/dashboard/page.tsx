import { MostOrderedDishes } from '@vat/components/ui/most-ordered-dishes/MostOrderedDishes';
import { OrderReport } from '@vat/components/ui/order-report/OrderReport';
import { StatisticsHighlight } from '@vat/components/ui/statistics-highlight/StatisticsHighlight';

import {
  getDashboardHighlights,
  getMostOrderedDishesByPagination,
  getPaginatedOrderReportsByDate,
} from '@vat/actions/order.actions';

import {
  getDateAtMidnight,
  getTodayFormatted,
  returnFormattedNumber,
  returnFormattedPrice,
} from '@vat/lib/utils';

const Dashboard = async () => {
  const dashboardHighlights = await getDashboardHighlights();
  const { totalOrdersRevenue, totalDishesOrdered, totalCustomers } =
    dashboardHighlights;

  const orderReport = await getPaginatedOrderReportsByDate({
    pagination: {
      start: 0,
      limit: 10,
    },
    date: {
      gte: getDateAtMidnight(),
    },
  });

  const mostOrderedDishes = await getMostOrderedDishesByPagination({
    pagination: {
      start: 0,
      limit: 10,
    },
    date: {
      gte: getDateAtMidnight(),
    },
  });

  return (
    <main className='flex h-screen w-full gap-6 bg-base-dark-bg-1 p-6 pl-[128px]'>
      <div className='grid h-full w-full grid-rows-[auto,auto,1fr] gap-6'>
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
            total={returnFormattedPrice(totalOrdersRevenue.value)}
            percentage={totalOrdersRevenue.percentage}
          />
          <StatisticsHighlight
            label='Total Dish Ordered'
            statisticType='totalDishes'
            total={returnFormattedNumber(totalDishesOrdered.value)}
            percentage={totalDishesOrdered.percentage}
          />
          <StatisticsHighlight
            label='Total Customer'
            statisticType='totalCustomers'
            total={returnFormattedNumber(totalCustomers.value)}
            percentage={totalCustomers.percentage}
          />
        </div>
        <OrderReport orderReport={orderReport} />
      </div>
      <div className='flex min-w-[375px] flex-col gap-6'>
        {mostOrderedDishes.length > 0 && (
          <MostOrderedDishes dishes={mostOrderedDishes} />
        )}
      </div>
    </main>
  );
};

export default Dashboard;
