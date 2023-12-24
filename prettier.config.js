/*
  Docs for configs:
  https://prettier.io/docs/en/options.html
*/

module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'always',
  importOrder: [
    '^react$',
    '^react-dom$',
    '^next',
    '<THIRD_PARTY_MODULES>',
    '^clsx$',
    '^@vat/services',
    '^@vat/icons',
    '^@vat/components',
    '^@vat/context',
    '^@vat/services',
    '^@vat/actions',
    '^@vat/lib',
    '^@vat/types',
    '^@vat/styles',
    '^[src/]',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
};
