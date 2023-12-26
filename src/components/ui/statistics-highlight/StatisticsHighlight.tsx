import { Arrow } from '@vat/icons/Arrow';
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
  percentage: string;
};

export const StatisticsHighlight: React.FC<StatisticsHighlightProps> = ({
  statisticType,
  total,
  label,
  percentage,
}) => {
  const isNegative = percentage.includes('-');

  return (
    <div className='flex w-full flex-col gap-2 rounded-lg bg-base-dark-bg-2 p-4'>
      <div className='flex items-center gap-3'>
        <div className='rounded-lg bg-base-dark-bg-1 p-2'>
          {statisticsIconsMap[statisticType]}
        </div>
        <div data-negative={isNegative} className='group flex gap-[6px]'>
          <p className='text-body-sm-medium text-accents-red group-data-[negative="false"]:text-accents-green'>
            {percentage}
          </p>
          <div className='flex h-[18px] w-[18px] items-center justify-center rounded-full bg-accents-bg-red group-data-[negative="false"]:bg-accents-bg-green'>
            <Arrow className='text-accents-red group-data-[negative="true"]:-rotate-180 group-data-[negative="false"]:text-accents-green' />
          </div>
        </div>
      </div>
      <p className='text-heading-h1 text-white'>{total}</p>
      <p className='text-body-base-medium text-text-light'>{label}</p>
    </div>
  );
};
