<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Menu;

class MenuSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $rootMenus = Menu::factory()->count(3)->create();

    foreach ($rootMenus as $rootMenu) {
      $level1Menus = Menu::factory()->count(2)->create([
        'parent_id' => $rootMenu->id,
        'depth' => 1
      ]);

      foreach ($level1Menus as $level1Menu) {
        Menu::factory()->count(2)->create([
          'parent_id' => $level1Menu->id,
          'depth' => 2
        ]);
      }
    }
  }
}
