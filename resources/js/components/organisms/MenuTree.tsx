import React from "react";
import MenuItem from "../molecules/MenuItem";
import { useMenus } from "../../api/menuApi";

const MenuTree: React.FC = () => {
  const { data, isLoading } = useMenus();

  const menus: Menu[] = data?.data || [];

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-gray-50 rounded-md">
      {menus?.map((menu) => (
        <MenuItem key={menu.id} menu={menu} onClick={() => {}} />
      ))}
    </div>
  );
};

export default MenuTree;
