import { TextField } from '@vat/components/ui/text-field/TextField';

type HeaderProps = {
  children?: React.ReactNode;
};

// @TODO - CORRECT ARBRITRARY VALUES
export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className='sticky top-0 z-40 flex flex-col gap-6 bg-base-dark-bg-1 py-6'>
      <div className='flex w-full items-center justify-between'>
        <div className='flex w-full flex-col justify-start gap-1'>
          <h1 className='text-heading-h1 text-white'>Jaegar Resto</h1>
          <p className='text-body-lg-regular text-text-lighter'>
            Tuesday 2 Feb, 2021
          </p>
        </div>
        <TextField icon='search' placeholder='Search for food, coffe, etc...' />
      </div>
      {children}
    </header>
  );
};
