import {
  StripeCardCvcElementOptions,
  StripeCardExpiryElementOptions,
  StripeCardNumberElementOptions,
} from '@stripe/stripe-js';

const baseOptions:
  | StripeCardNumberElementOptions
  | StripeCardExpiryElementOptions
  | StripeCardCvcElementOptions = {
  classes: {
    focus: 'border-base-dark-line-2 !bg-base-dark-bg-2',
    invalid: 'border-accents-red',
    base: 'h-12 rounded-lg border border-base-dark-line bg-base-form-bg p-[14px] text-sm leading-[140%] text-text-lighter caret-white outline-none hover:bg-base-form-bg-hover',
  },
  style: {
    invalid: {
      color: '#FF7CA3',
    },
    base: {
      color: 'white',
      fontSize: '14px',
      fontFamily: `'Barlow', sans-serif`,
      fontWeight: 400,
      '::placeholder': {
        color: '#889898',
      },
    },
  },
};

export const cardNumberElementOptions: StripeCardNumberElementOptions = {
  ...baseOptions,
  showIcon: false,
};

export const cardExpiryElementOptions: StripeCardExpiryElementOptions = {
  ...baseOptions,
};

export const cardCvcElementOptions: StripeCardCvcElementOptions = {
  ...baseOptions,
};
