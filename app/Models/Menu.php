<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
  use HasFactory, HasUuids;

  public function children()
  {
    return $this->hasMany(Menu::class, 'parent_id')->with('children');
  }

  public function parent()
  {
    return $this->belongsTo(Menu::class, 'parent_id');
  }
}
