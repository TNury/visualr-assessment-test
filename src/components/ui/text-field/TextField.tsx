'use client';

import { Search } from '@vat/icons/Search';

import { cn } from '@vat/lib/utils';

import { VariantProps, cva } from 'class-variance-authority';

const textFieldVariants = cva(
  'h-12 rounded-lg border border-base-dark-line bg-base-form-bg p-[14px] caret-white outline-none transition-colors duration-150 placeholder:text-text-gray hover:!border-base-dark-line hover:!bg-base-form-bg-hover focus:!border-base-dark-line-2 focus:!bg-base-dark-bg-2 data-[error="true"]:border-accents-bg-red data-[error="true"]:bg-accents-bg-red data-[has-icon="true"]:pl-[42px]',
  {
    variants: {
      variant: {
        'text-sm': 'text-sm leading-[140%]',
        'text-body-lg-medium': 'text-lg font-medium leading-[140%]',
      },
      textColor: {
        'text-text-lighter': 'text-text-lighter',
        'text-white': 'text-white',
      },
    },
    defaultVariants: {
      variant: 'text-sm',
      textColor: 'text-text-lighter',
    },
  }
);

const icons = {
  search: <Search className='absolute left-[14px] h-5 w-5' />,
};

interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof textFieldVariants> {
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
  label?: string;
  icon?: 'search';
  error?: string;
}

// @TODO - CORRECT ARBRITRARY VALUES
export const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    wrapperProps,
    variant,
    textColor,
    className,
    size,
    icon,
    label,
    error,
    ...restOfProps
  } = props;
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
        className={cn(textFieldVariants({ variant, textColor, className }))}
        placeholder={props.placeholder}
      />
      {error && (
        <p className='text-body-base-medium text-accents-red'>{error}</p>
      )}
    </div>
  );
};
