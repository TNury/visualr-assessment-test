import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '0px',
        sm: '640px',
        md: '1024px',
        lg: '1440px',
        xl: '1920px',
      },
      fontSize: {
        'heading-h1': [
          '1.75rem',
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'heading-h2': [
          '1.25rem',
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'body-lg-semibold': [
          '1rem', // 16px
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'body-lg-medium': [
          '1rem', // 16px
          {
            lineHeight: '140%',
            fontWeight: '500',
          },
        ],
        'body-lg-regular': [
          '1rem', // 16px
          {
            lineHeight: '140%',
            fontWeight: '400',
          },
        ],
        'body-base-semibold': [
          '0.875rem', // 14px
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'body-base-medium': [
          '0.875rem', // 14px
          {
            lineHeight: '130%',
            fontWeight: '500',
          },
        ],
        'body-base-regular': [
          '0.875rem', // 14px
          {
            lineHeight: '140%',
            fontWeight: '400',
          },
        ],
        'body-sm-semibold': [
          '0.75rem', // 12px
          {
            lineHeight: '140%',
            fontWeight: '600',
          },
        ],
        'body-sm-medium': [
          '0.75rem', // 12px
          {
            lineHeight: '140%',
            fontWeight: '500',
          },
        ],
        'body-sm-regular': [
          '0.75rem', // 12px
          {
            lineHeight: '140%',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        primary: '#EA7C69',
        secondary: '#9288E0',

        'text-gray': '#889898',
        'text-light': '#ABBBC2',
        'text-lighter': '#E0E6E9',

        'base-bg': '#FAFAFA',
        'base-dark-line': '#393C49',
        'base-dark-bg-1': '#252836',
        'base-dark-bg-2': '#1F1D2B',
        'base-form-bg': '#2D303E',

        'accents-green': '#50D1AA',
        'accents-red': '#FF7CA3',
        'accents-orange': '#FFB572',
        'accents-blue': '#65B0F6',
        'accents-purple': '#9290FE',
      },
    },
    boxShadow: {
      primary: '0px 8px 24px 0px rgba(234, 124, 105, 0.30)',
    },
  },
  plugins: [],
};
export default config;