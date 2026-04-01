<?php

namespace App\Services;

use App\Models\Product;

class ProductService
{
    public function getAll()
    {
        return Product::latest()->get();
    }

    public function changeImage($image, $id)
    {
        return Product::where('id', $id)->update([
            'thumbnail' => '/storage/' . $image
        ]);
    }
}
