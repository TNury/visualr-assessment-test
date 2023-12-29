import { Back } from '@vat/components/ui/icons/Back';
import { ReturnLink } from '@vat/components/ui/return-link/ReturnLink';

import { cn } from '@vat/lib/utils';

type DrawerHeadProps = {
  title: string;
  subtitle: string;
  endAddornment?: React.ReactNode;
  className?: string;
  hideReturnLink?: boolean;
  children?: React.ReactNode;
};

export const DrawerHead: React.FC<DrawerHeadProps> = ({
  title,
  subtitle,
  endAddornment,
  className,
  hideReturnLink,
  children,
}) => {
  return (
    <div
      data-hide-return-link={hideReturnLink}
      className={cn(
        'mx-6 flex flex-col gap-4 border-b border-base-dark-line pb-6 data-[hide-return-link="true"]:pt-16',
        className
      )}>
      {!hideReturnLink && (
        <ReturnLink>
          <Back className='text-white' />
        </ReturnLink>
      )}
      <div className='flex items-center justify-between gap-4'>
        <div className='flex w-4/5 flex-col gap-2'>
          <h1 className='text-heading-h1 text-white'>{title}</h1>
          <p className='text-body-lg-medium text-text-light'>{subtitle}</p>
        </div>

        {endAddornment && endAddornment}
      </div>
      {children && children}
    </div>
  );
};
