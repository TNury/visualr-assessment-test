import Link from 'next/link';

import { getMenusData } from '@vat/actions/menu.actions';

type MenuNavProps = {
  activeMenu: string;
};

export const MenuNav: React.FC<MenuNavProps> = async ({ activeMenu }) => {
  const menusData = await getMenusData();

  return (
    <nav className='h-fit w-full'>
      <ul className='relative flex gap-8'>
        {menusData.data.menus.data.map((entry, index) => (
          <li key={index} className='z-10'>
            <Link
              data-active={entry.id === activeMenu}
              href={`/?menu=${entry.id}`}
              key={index}
              className='flex flex-col gap-3 text-body-base-semibold text-white data-[active="true"]:text-primary'>
              {entry.attributes.title}

              {entry.id === activeMenu && (
                <div className='h-[3px] w-1/2 rounded-sm bg-primary' />
              )}
            </Link>
          </li>
        ))}
        <div className='absolute bottom-[1.1px] left-0 h-[1px] w-full bg-base-dark-line' />
      </ul>
    </nav>
  );
};
