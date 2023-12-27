import Link from 'next/link';

import { getMenusTitles } from '@vat/actions/menu.actions';

type DishesMenuNav = {
  activeMenu: string;
};

export const DishesMenuNav: React.FC<DishesMenuNav> = async ({
  activeMenu,
}) => {
  const menusData = await getMenusTitles();

  return (
    <nav className='h-fit w-full'>
      <ul className='flex gap-8'>
        {menusData.data.menus.data.map((entry, index) => (
          <li key={index} className='z-10'>
            <Link
              data-active={entry.id === activeMenu}
              href={{
                query: { menu: entry.id },
              }}
              key={index}
              className='group relative flex flex-col pb-3 text-body-base-semibold text-white transition-all duration-150 hover:text-primary active:opacity-70 data-[active="true"]:text-primary'>
              {entry.attributes.title}

              <div className='absolute bottom-[-2px] left-0 h-[3px] w-3/5 rounded-sm bg-primary transition-all duration-150 group-data-[active="false"]:w-0' />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
