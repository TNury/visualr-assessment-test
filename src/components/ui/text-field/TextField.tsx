'use client';

import { Search } from '@vat/icons/Search';

import { cn } from '@vat/lib/utils';

const icons = {
  search: <Search className='absolute left-[14px] h-5 w-5' />,
};

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  icon?: 'search';
}

// @TODO - CORRECT ARBRITRARY VALUES
export const TextField: React.FC<TextFieldProps> = (props) => {
  const { wrapperProps, className, size, icon, ...restOfProps } = props;
  const { className: wrapperClassName, ...restOfWrapperProps } =
    wrapperProps || {};

  return (
    <div
      className={cn('relative flex items-center', wrapperClassName)}
      {...restOfWrapperProps}>
      {icon ? icons['search'] : null}
      <input
        {...restOfProps}
        data-has-icon={Boolean(icon)}
        className={cn(
          'h-12 cursor-pointer rounded-lg border border-base-dark-line bg-base-form-bg p-[14px] text-sm leading-[140%] text-text-lighter caret-white outline-none placeholder:text-text-gray hover:bg-base-form-bg-hover focus:border-base-dark-line-2 focus:bg-base-dark-bg-2 data-[has-icon="true"]:pl-[42px]',
          className
        )}
        placeholder={props.placeholder}
      />
    </div>
  );
};
