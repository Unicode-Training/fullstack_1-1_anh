<?php
// - Thuộc tính
// - Phương thức

//Phạm vi: public | private | protected
// class User
// {
//     private $name; //null
//     private $email; //null

//     public function __construct($name, $email)
//     {
//         $this->name = $name;
//         $this->email = $email;
//     }

//     public function getName()
//     {
//         return $this->name;
//     }

//     public function getEmail()
//     {
//         return $this->email;
//     }
// }

// $user = new User("Hoàng An", 'hoangan.web@gmail.com');
// var_dump($user);
// echo $user->name . '<br/>';
// echo $user->email . '<br/>';

// echo $user->getName() . '<br/>';
// echo $user->getEmail() . '<br/>';

// $customer = new User("Thắng Anh", 'thanganh@gmail.com');
// echo $customer->getName() . '<br/>';
// echo $customer->getEmail() . '<br/>';
class Product
{
    public $name;
    public $price;
    public function __construct($name, $price)
    {
        $this->name = $name;
        $this->price = $price;
    }
}
class ProductService
{
    private $products = [];
    public function add($name, $price)
    {
        $product = new Product($name, $price);
        $this->products[] = $product;
    }

    public function getAll()
    {
        return $this->products;
    }
}

$productService = new ProductService();
$productService->add('Laptop', 1000);
$productService->add('Iphone', 500);
$productService->add('Samsung', 300);

echo '<pre>';
print_r($productService->getAll());
echo '</pre>';

foreach ($productService->getAll() as $product) {
    echo $product->name . '<br/>';
}

//Trả về 1 mảng chứa thông tin từng sản phẩm

// [
//     [
//         name: Laptop,
//         price: 1000
//     ],
//     [
//         name: Iphone,
//         price: 500
//     ],
//     [
//         name: Samsung,
//         price: 300
//     ]
// ]