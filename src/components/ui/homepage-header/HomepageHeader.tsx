import { MenuSearchField } from '@vat/components/ui/menu-search-field/MenuSearchField';

import { getTodayFormatted } from '@vat/lib/utils';

type HeaderProps = {
  children?: React.ReactNode;
};

// @TODO - CORRECT ARBRITRARY VALUES
export const HomepageHeader: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className='sticky top-0 z-40 flex flex-col gap-6 border-b border-base-dark-line bg-base-dark-bg-1 pt-6'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex w-full flex-col justify-start gap-1'>
          <h1 className='text-heading-h1 text-white'>Jaegar Resto</h1>
          <p className='text-body-lg-regular text-text-lighter'>
            {getTodayFormatted()}
          </p>
        </div>
        <MenuSearchField />
      </div>
      {children}
    </header>
  );
};
