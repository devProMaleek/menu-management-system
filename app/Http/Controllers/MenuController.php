<?php

namespace App\Http\Controllers;

use App\Http\Resources\MenuResource;
use App\Models\Menu;
use App\Http\Requests\StoreMenuRequest;
use App\Http\Requests\UpdateMenuRequest;
use App\Services\MenuService;

class MenuController extends Controller
{
  protected $menuService;

  public function __construct(MenuService $menuService)
  {
    $this->menuService = $menuService;
  }
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $menus = $this->menuService->getAllMenus();
    return MenuResource::collection($menus);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(StoreMenuRequest $request)
  {
    $data = $request->validated();
    $menu = $this->menuService->createMenu($data);
    return new MenuResource($menu);
  }

  /**
   * Display the specified resource.
   */
  public function show(Menu $menu)
  {
    return new MenuResource($menu);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(UpdateMenuRequest $request, Menu $menu)
  {
    $data = $request->validated();
    $updatedMenu = $this->menuService->updateMenu($menu, $data);
    return new MenuResource($updatedMenu);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Menu $menu)
  {
    $this->menuService->deleteMenu($menu);
    return response()->json(['message' => 'Menu deleted successfully']);
  }
}
