import React, { ReactNode } from "react";
import MenuTree from '../organisms/MenuTree';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className="flex">
      <aside className="w-1/4 p-4 bg-darkGray text-white">
        <h2 className="text-xl font-bold mb-4">Menus</h2>
        <MenuTree />
      </aside>
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
);

export default MainLayout;
