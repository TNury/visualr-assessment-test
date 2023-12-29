import { Back } from '@vat/components/ui/icons/Back';
import { ReturnLink } from '@vat/components/ui/return-link/ReturnLink';

import { cn } from '@vat/lib/utils';

import { Close } from '../icons/Close';

type ModalHeadProps = {
  title: string;
  subtitle: string;
  endAddornment?: React.ReactNode;
  className?: string;
  hideReturnLink?: boolean;
  children?: React.ReactNode;
};

export const ModalHead: React.FC<ModalHeadProps> = ({
  title,
  subtitle,

  className,
  hideReturnLink,
}) => {
  return (
    <div className='flex w-full px-6'>
      <div
        data-hide-return-link={hideReturnLink}
        className={cn(
          'relative flex h-fit w-full flex-col gap-4 border-b border-base-dark-line pb-6 data-[hide-return-link="true"]:pt-16',
          className
        )}>
        <ReturnLink>
          <Close className='absolute right-0 top-0 ml-auto text-white' />
        </ReturnLink>

        <div className='flex w-4/5 flex-col gap-2'>
          <h1 className='text-heading-h1 text-white'>{title}</h1>
          <p className='text-body-lg-medium text-text-light'>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
