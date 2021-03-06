<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function category() {
        return $this->belongsToMany(Category::class);
    }

    public function command() {
        return $this->belongsToMany(Command::class);
    }

    public function review() {
        return $this->hasMany(Review::class);
    }
}
