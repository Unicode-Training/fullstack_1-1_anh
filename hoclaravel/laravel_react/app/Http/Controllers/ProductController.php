<?php

namespace App\Http\Controllers;

use App\Services\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct(private ProductService $productService) {}
    public function index()
    {
        return $this->productService->getAll();
    }
    public function changeImage(Request $request, $id)
    {
        $image =  $request->file('image')->store('images', 'public');
        if (!$image) {
            return response()->json([
                'success' => false,
                'message' => 'Upload ảnh thất bại'
            ], 400);
        }
        $this->productService->changeImage($image, $id);
        return response()->json([
            'success' => true,
            'message' => 'Update ảnh thành công'
        ]);
    }
}
