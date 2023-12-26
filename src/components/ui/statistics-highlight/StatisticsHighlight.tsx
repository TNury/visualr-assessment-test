import { Coin } from '@vat/icons/Coin';
import { Customer } from '@vat/icons/Customer';
import { Order } from '@vat/icons/Order';

const statisticsIconsMap = {
  totalRevenue: <Coin className='text-accents-purple' />,
  totalDishes: <Order className='text-accents-orange' />,
  totalCustomers: <Customer className='text-accents-blue' />,
};

type StatisticsHighlightProps = {
  statisticType: keyof typeof statisticsIconsMap;
  // percentage: string;
  total: string;
  label: string;
};

export const StatisticsHighlight: React.FC<StatisticsHighlightProps> = ({
  statisticType,
  total,
  label,
}) => {
  return (
    <div className='flex w-full flex-col gap-2 rounded-lg bg-base-dark-bg-2 p-4'>
      <div className='flex items-center gap-3'>
        <div className='rounded-lg bg-base-dark-bg-1 p-2'>
          {statisticsIconsMap[statisticType]}
        </div>
        <p className='text-body-sm-medium text-accents-green'>+32.40%</p>
      </div>
      <p className='text-heading-h1 text-white'>{total}</p>
      <p className='text-body-base-medium text-text-light'>{label}</p>
    </div>
  );
};
