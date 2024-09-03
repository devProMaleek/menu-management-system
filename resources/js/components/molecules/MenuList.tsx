import React from "react";
import MenuItem from "./MenuItem";

interface Menu {
  id: string;
  name: string;
  parent_id?: string | null;
  depth: number;
  children: Menu[];
  created_at?: string;
  updated_at?: string;
}

interface MenuListProps {
  menus: Menu[];
}

const MenuList: React.FC<MenuListProps> = ({ menus }) => {
  console.log(menus);
  return (
    <div>
      {menus &&
        menus?.map((menu) => (
          <MenuItem key={menu.id} name={menu.name}>
            {menu.children && <MenuList menus={menu.children} />}
          </MenuItem>
        ))}
    </div>
  );
};

export default MenuList;
