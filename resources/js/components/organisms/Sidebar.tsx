import React from 'react';
import { useMenus } from '../../api/menuApi';
import MenuList from '../molecules/MenuList';

interface Menu {
  id: string;
  name: string;
  parent_id?: string | null;
  depth: number;
  children: Menu[];
  created_at?: string;
  updated_at?: string;
}

const Sidebar: React.FC = () => {
  const { data, isLoading } = useMenus()

  const menus: Menu[] = data?.data || [];

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 p-4">
      <MenuList menus={menus} />
    </div>
  );
};

export default Sidebar;
