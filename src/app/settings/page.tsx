import { SettingsMenu } from '@vat/components/ui/settings-menu/SettingsMenu';

const Settings = () => {
  return (
    <main className='flex h-screen flex-col gap-6 bg-base-dark-bg-1 p-6 pl-[128px]'>
      <h1 className='text-heading-h1 text-white'>Settings</h1>
      <div className='flex h-full gap-6'>
        <div className='h-full w-[275px] rounded-lg bg-base-dark-bg-2'>
          <SettingsMenu />
        </div>
        <div className='h-full flex-1 rounded-lg bg-base-dark-bg-2'></div>
      </div>
    </main>
  );
};

export default Settings;
