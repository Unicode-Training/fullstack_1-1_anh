<?php

namespace FrontEnd;

use Admin\Product;

class User
{
    public function __construct()
    {
        echo 'Xin chào anh em';
        //Gọi Product
        $product = new Product();
    }
}
