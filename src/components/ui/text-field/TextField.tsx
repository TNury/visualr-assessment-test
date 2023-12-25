'use client';

import { Search } from '@vat/icons/Search';

import { cn } from '@vat/lib/utils';

const icons = {
  search: <Search className='absolute left-[14px] h-5 w-5' />,
};

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  label?: string;
  icon?: 'search';
  error?: string;
}

// @TODO - CORRECT ARBRITRARY VALUES
export const TextField: React.FC<TextFieldProps> = (props) => {
  const { wrapperProps, className, size, icon, label, error, ...restOfProps } =
    props;
  const { className: wrapperClassName, ...restOfWrapperProps } =
    wrapperProps || {};

  return (
    <div
      className={cn(
        'relative flex flex-col justify-center gap-2',
        wrapperClassName
      )}
      {...restOfWrapperProps}>
      {icon ? icons['search'] : null}
      {label && (
        <label className='text-body-base-medium text-white'>{label}</label>
      )}
      <input
        {...restOfProps}
        data-has-icon={Boolean(icon)}
        data-error={Boolean(error)}
        className={cn(
          'data-[error="true"]:border-accents-bg-red data-[error="true"]:bg-accents-bg-red h-12 rounded-lg border border-base-dark-line bg-base-form-bg p-[14px] text-sm leading-[140%] text-text-lighter caret-white outline-none placeholder:text-text-gray hover:!border-base-dark-line hover:!bg-base-form-bg-hover focus:!border-base-dark-line-2 focus:!bg-base-dark-bg-2 data-[has-icon="true"]:pl-[42px] data-[error="true"]:text-accents-red',
          className
        )}
        placeholder={props.placeholder}
      />
      {error && (
        <p className='text-body-base-medium text-accents-red'>{error}</p>
      )}
    </div>
  );
};
