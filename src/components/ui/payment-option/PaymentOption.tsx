import { Card } from '@vat/icons/Card';
import { Cash } from '@vat/icons/Cash';
import { CheckmarkCircle } from '@vat/icons/CheckmarkCircle';
import { Paypal } from '@vat/icons/Paypal';

type PaymentOptionProps = {
  type: 'credit-card' | 'paypal' | 'cash';
  active?: boolean;
  onClick?: () => void;
};

const typeMap = {
  'credit-card': {
    title: 'Credit Card',
    icon: (
      <Card className='h-6 w-6 text-text-gray group-hover:text-white group-data-[active="true"]:text-white' />
    ),
  },
  paypal: {
    title: 'Paypal',
    icon: (
      <Paypal className='h-6 w-6 text-text-gray group-hover:text-white group-data-[active="true"]:text-white' />
    ),
  },
  cash: {
    title: 'Cash',
    icon: (
      <Cash className='h-6 w-6 text-text-gray group-hover:text-white group-data-[active="true"]:text-white' />
    ),
  },
};

export const PaymentOption: React.FC<PaymentOptionProps> = ({
  type,
  active,
  onClick,
}) => {
  return (
    <div
      role='button'
      data-active={active}
      onClick={onClick}
      className='group relative flex h-16 w-[101px] flex-col items-center justify-center gap-[2px] rounded-lg border border-base-dark-line bg-base-dark-bg-2 hover:bg-base-dark-bg-1 data-[active="true"]:bg-base-dark-bg-1'>
      {typeMap[type].icon}
      {active && (
        <CheckmarkCircle className='absolute right-[3px] top-[3px] text-primary' />
      )}
      <p className='text-body-base-medium text-text-gray group-hover:text-white group-data-[active="true"]:text-white'>
        {typeMap[type].title}
      </p>
    </div>
  );
};
