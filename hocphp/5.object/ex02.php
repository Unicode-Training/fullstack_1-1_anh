<?php
//Kế thừa --> Cho phép sử dụng thuộc tính, phương thức của class cha

// class User
// {
//     private $name;
//     protected $email;
//     public function __construct($name, $email)
//     {
//         $this->name = $name;
//         $this->email = $email;
//     }

//     public function getName()
//     {
//         return $this->name;
//     }
// }

// class Auth extends User
// {
//     private $age;
//     public function __construct($name, $email, $age)
//     {
//         parent::__construct($name, $email); //Gọi hàm __construct của class cha
//         $this->age = $age;
//     }
//     public function login()
//     {
//         // echo $this->getName() . ' đã login';
//         echo $this->email . ' đã login';
//     }

//     public function getAge()
//     {
//         return $this->age;
//     }

//     public function getName()
//     {
//         return parent::getName() . ' - new name';
//     }
// }
// $auth = new Auth("Hoàng An", 'hoangan.web@gmail.com', 33);
// $auth->login() . '<br/>';
// echo $auth->getAge() . '<br/>';
// echo $auth->getName();

//Phương thức tĩnh, thuộc tính tĩnh --> Gọi trực tiếp từ class, không phụ thuộc vào object

// class User
// {
//     public static $message = 'Xin chào';
//     public static function getMessage()
//     {
//         return self::$message;
//     }
// }
// // $user = new User();
// echo User::$message . '<br/>';
// echo User::getMessage();

//Setter, Getter
// class User
// {
//     private $name;
//     private $email;

//     public function __construct($name, $email)
//     {
//         $this->name = $name;
//         $this->email = $email;
//     }

//     public function __get($name)
//     {
//         return $this->$name;
//     }

//     public function __set($name, $value)
//     {
//         if ($name === "email" && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
//             return;
//         }
//         $this->$name = $value;
//     }
// }

// $user = new User("Hoàng An", 'hoangan.web@gmail.com');
// // echo $user->getName() . '<br/>';

// // $user->setName("Hoàng An Unicode");
// // echo $user->getName() . '<br/>';

// echo $user->name . '<br/>';
// $user->name = 'Hoàng An Unicode';
// echo $user->name . '<br/>';

// echo $user->email . '<br/>';
// $user->email = 'contact@unicode.vn';
// echo $user->email . '<br/>';

// $user->email = 'ahihi@gmail.com';
// echo $user->email . '<br/>';
