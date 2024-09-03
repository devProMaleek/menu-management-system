<?php

namespace App\Services;

use App\Repositories\MenuRepository;
use App\Models\Menu;

class MenuService
{
  protected $menuRepository;

  public function __construct(MenuRepository $menuRepository)
  {
    $this->menuRepository = $menuRepository;
  }

  public function getAllMenus()
  {
    return $this->menuRepository->getAllMenus();
  }

  public function getMenuById($id)
  {
    return $this->menuRepository->getMenuById($id);
  }

  public function createMenu(array $data): Menu
  {
    return $this->menuRepository->createMenu($data);
  }

  public function updateMenu(Menu $menu, array $data)
  {
    return $this->menuRepository->updateMenu($menu, $data);
  }

  public function deleteMenu(Menu $menu)
  {
    return $this->menuRepository->deleteMenu($menu);
  }
}
