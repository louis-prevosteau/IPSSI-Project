<?php

namespace App\Http\Controllers;

use App\Http\Resources\Review as ResourcesReview;
use App\Models\Product;
use App\Models\Review as ModelsReview;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Review extends Controller
{
    public function create(Request $request, $productId) {
        $reviewData = $this->validate($request, [
            'title' => 'required',
            'description' => 'required',
            'rating' => 'required|between:0,5',
        ]);
        try {
            Product::find($productId);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), $e->getCode());
        }
        $review = new ModelsReview($reviewData);
        $review->productId = $productId;
        $review->userId = Auth::user()->id;
        $review->save();
        $data = new ResourcesReview($review);
        return response()->json($data);
    }

    public function getReviewByUser() {
        $reviews = DB::table('review')
            ->where('userId','=', Auth::user()->id)
            ->get();
        $data = ResourcesReview::collection($reviews);
        return response()->json($data);
    }

    public function getReviewByProduct($productId) {
        $reviews = DB::table('review')
            ->where('productId','=', $productId)
            ->get();
        $data = ResourcesReview::collection($reviews);
        return response()->json($data);
    }
}
