import React, { MouseEventHandler } from "react";

interface MenuItemProps {
  menu: Menu;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const MenuItem: React.FC<MenuItemProps> = ({ menu, onClick }) => {
  return (
    <div className="pl-4">
      <div className="flex items-center">
        <span className="text-gray-700">{menu.name}</span>
        <button onClick={onClick} className="ml-2 text-blue-500">
          +
        </button>
      </div>
      {menu.children && menu.children.length > 0 && (
        <div className="pl-4">
          {menu.children.map((child) => (
            <MenuItem key={child.id} menu={child} onClick={() => {}} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
