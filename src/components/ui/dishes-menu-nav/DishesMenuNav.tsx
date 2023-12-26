import Link from 'next/link';

import { getMenusData } from '@vat/actions/menu.actions';

type DishesMenuNav = {
  activeMenu: string;
  linkPathname: string;
};

export const DishesMenuNav: React.FC<DishesMenuNav> = async ({
  activeMenu,
  linkPathname,
}) => {
  const menusData = await getMenusData();

  return (
    <nav className='h-fit w-full'>
      <ul className='flex gap-8'>
        {menusData.data.menus.data.map((entry, index) => (
          <li key={index} className='z-10'>
            <Link
              data-active={entry.id === activeMenu}
              href={{
                pathname: linkPathname,
                query: { menu: entry.id },
              }}
              key={index}
              className='relative flex flex-col pb-3 text-body-base-semibold text-white data-[active="true"]:text-primary'>
              {entry.attributes.title}

              {entry.id === activeMenu && (
                <div className='absolute bottom-[-2px] left-0 h-[3px] w-3/5 rounded-sm bg-primary' />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
