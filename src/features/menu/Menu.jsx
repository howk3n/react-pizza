import { getMenu } from '@/services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';

export async function menuLoader() {
  const menu = await getMenu();
  return menu;
}

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y-2 divide-stone-200 px-2">
      {menu.map((data) => (
        <MenuItem pizza={data} key={data.id} />
      ))}
    </ul>
  );
}

export default Menu;
