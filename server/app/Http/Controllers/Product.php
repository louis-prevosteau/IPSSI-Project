<?php

namespace App\Http\Controllers;

use App\Http\Resources\Product as ResourcesProduct;
use App\Models\Category;
use App\Models\Product as ModelsProduct;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Product extends Controller
{
    public function index() {
        $products = ModelsProduct::all();
        $data = ResourcesProduct::collection($products);
        return response()->json($data);
    }

    public function show($id) {
        $product = ModelsProduct::find($id);
        $data = new ResourcesProduct($product);
        return response()->json($data);
    }

    public function create(Request $request) {
        try {
            $this->validate(
                $request,
                [
                    'name' => 'required',
                    'description' => 'required',
                    'price' => 'required',
                    'image' => 'required'
                ]
            );
            $product = new ModelsProduct();
            $product->name = $request->name;
            $product->description = $request->description;
            $product->price = $request->price;
            if ($request->hasFile('image')) {
                $path = $request->file('image')->storeAs('products', 'prod'.$product->id.'.'.$request->file('image')->extension(), 'public');
                $product->image = $path;
                $product->save();
            }
            $data = new ResourcesProduct($product);
            return response()->json($data);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }

    public function update(Request $request, $id) {
        try {
            $product = ModelsProduct::find($id);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
        try {
            $this->validate(
                $request,
                [
                    'name' => 'required',
                    'description' => 'required',
                    'price' => 'required',
                    'image' => 'required'
                ]
            );
            $product->name = $request->name;
            $product->description = $request->description;
            $product->price = $request->price;
            if ($request->hasFile('image')) {
                $path = $request->file('image')->storeAs('products', 'prod'.$product->id.'.'.$request->file('image')->extension(), 'public');
                $product->image = $path;
                $product->save();
            }
            $data = new ResourcesProduct($product);
            return response()->json($data);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
    }

    public function delete($id) {
        $product = ModelsProduct::find($id);
        $product->delete();
    }

    public function addCategory($productId, $categoryId) {
        try {
            $product = ModelsProduct::find($productId);
            $category = Category::find($categoryId);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
        DB::table('product_has_category')->insert(['productId' => $productId, 'categoryId' => $categoryId]);
        return response()->json("Add category successfully");
    }

    public function getProductByCategory($categoryId) {
        try {
            $category = Category::find($categoryId);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
        $products = DB::table('products')
            ->join('product_has_category', 'product.id', '=', 'product_has_category.productId')
            ->join('category', 'category.id', '=', 'product_has_category.categoryId')
            ->where('category.id', '=', $categoryId)
            ->get();
        $data = ResourcesProduct::collection($products);
        return response()->json($data);
    }
}
