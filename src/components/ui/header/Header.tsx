import { MenuNav } from '@vat/components/ui/header/menu-nav/MenuNav';
import { TextField } from '@vat/components/ui/text-field/TextField';

type HeaderProps = {
  children?: React.ReactNode;
};

// @TODO - CORRECT ARBRITRARY VALUES
export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex w-full flex-col justify-start gap-1'>
          <h1 className='text-heading-h1 text-white'>Jaegar Resto</h1>
          <p className='text-body-lg-regular text-text-lighter'>
            Tuesday 2 Feb, 2021
          </p>
        </div>
        <TextField icon='search' />
      </div>
      {children}
    </div>
  );
};
