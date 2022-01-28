<?php

namespace App\Http\Controllers;

use App\Http\Resources\Category as ResourcesCategory;
use App\Models\Category as ModelsCategory;
use Illuminate\Http\Request;

class Category extends Controller
{

    public function index() {
        $categories = ModelsCategory::all();
        $data = ResourcesCategory::collection($categories);
        return response()->json($data);
    }

    public function create(Request $request) {
        $categoryData = $this->validate($request, [
            'name' => 'required',
            'categoryCol' => 'required'
        ]);
        $category = new ModelsCategory($categoryData);
        $category->name = $request->name;
        $category->categoryCol = $request->categoryCol;
        $category->save();
        $data = new ResourcesCategory($category);
        return response()->json($data);
    }
}
