import { SettingsMenu } from '@vat/components/layout/settings-menu/SettingsMenu';

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex h-screen flex-col gap-6 bg-base-dark-bg-1 p-6 pl-[128px]'>
      <h1 className='text-heading-h1 text-white'>Settings</h1>
      <div className='flex h-full gap-6 overflow-auto'>
        <SettingsMenu />

        <div className='h-full w-full flex-1 rounded-lg bg-base-dark-bg-2'>
          {children}
        </div>
      </div>
    </main>
  );
};

export default SettingsLayout;
