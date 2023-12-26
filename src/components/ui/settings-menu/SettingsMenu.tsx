import { Appereance } from '@vat/icons/Appereance';
import { Discount } from '@vat/icons/Discount';
import { Notifications } from '@vat/icons/Notifications';
import { Restaurant } from '@vat/icons/Restaurant';
import { Security } from '@vat/icons/Security';

const menuItems = [
  {
    name: 'Appereance',
    description: 'Dark and Light mode, Font size',
    icon: <Appereance />,
  },
  {
    name: 'Products Management',
    description: 'Manage your product, pricing, etc',
    icon: <Discount />,
  },
  {
    name: 'Your Restaurant',
    description: 'Name, working hours, etc',
    icon: <Restaurant />,
  },
  {
    name: 'Notifications',
    description: 'Customize your notifications',
    icon: <Notifications />,
  },
  {
    name: 'Security',
    description: 'Configure Password, PIN, etc',
    icon: <Security />,
  },
];

export const SettingsMenu = () => {
  return (
    <div className='h-full w-full overflow-clip rounded-lg bg-base-dark-bg-2'>
      {menuItems.map((item, index) => (
        <div
          key={index}
          data-active={index === 1}
          className='hover:bg-base-dark-bg-1-hover group flex flex-col gap-1 p-6 data-[active="true"]:bg-primary-hover-2'
          role='button'>
          <div className='flex items-center gap-2'>
            <div className='text-text-light group-data-[active="true"]:!text-primary'>
              {item.icon}
            </div>
            <h2 className='text-body-base-medium text-white group-data-[active="true"]:!text-primary'>
              {item.name}
            </h2>
          </div>
          <p className='ml-[24px] text-body-sm-regular text-text-light'>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
