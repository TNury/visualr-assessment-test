import Link from 'next/link';

import { getMenusData } from '@vat/actions/menu.actions';

type MenuNavProps = {
  activeMenu: string;
};

export const MenuNav: React.FC<MenuNavProps> = async ({ activeMenu }) => {
  const menusData = await getMenusData();

  return (
    <nav className='relative flex gap-8'>
      {menusData.data.menus.data.map((entry, index) => (
        <Link
          data-active={entry.id === activeMenu}
          href={`/?menu=${entry.id}`}
          key={index}
          className='z-10 flex flex-col gap-3'
          role='button'>
          <span
            data-active={entry.id === activeMenu}
            className='text-body-base-semibold text-white data-[active="true"]:text-primary'>
            {entry.attributes.title}
          </span>
          {entry.id === activeMenu && (
            <div className='h-[3px] w-1/2 rounded-sm bg-primary' />
          )}
        </Link>
      ))}
      <hr className='absolute bottom-[1.1px] left-0 w-full border-base-dark-line' />
    </nav>
  );
};
