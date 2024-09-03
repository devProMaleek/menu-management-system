<?php

namespace App\Repositories;

use App\Models\Menu;

class MenuRepository
{
  public function getAllMenus()
  {
    return Menu::with('children')->whereNull('parent_id')->get();
  }

  public function getMenuById($id)
  {
    return Menu::with('children')->findOrFail($id);
  }

  public function createMenu(array $data): Menu
  {
    return Menu::create($data);
  }

  public function updateMenu(Menu $menu, array $data)
  {
    $menu->update($data);
    return $menu;
  }

  public function deleteMenu(Menu $menu)
  {
    $menu->delete();
  }
}
