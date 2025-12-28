<?php
//__call(): Chạy khi gọi 1 phương thức private
//__callStatic()
//Method Chaining

// class User
// {
//     private $name;
//     private $email;
//     private function doSomething($value, $status)
//     {
//         echo "Do Something: " . $value . '<br/>';
//         echo $status;
//     }

//     public function __call($name, $arguments)
//     {
//         return $this->$name(...$arguments);
//     }

//     private static function doSomething2($value)
//     {
//         echo "Do Something2: " . $value;
//     }

//     public static function __callStatic($name, $arguments)
//     {
//         return self::$name(...$arguments);
//     }

//     public function setName($name)
//     {
//         $this->name = $name;
//         return $this;
//     }
//     public function setEmail($email)
//     {
//         $this->email = $email;
//         return $this;
//     }
//     public function show()
//     {
//         echo $this->name . '<br/>';
//         echo $this->email . '<br/>';
//     }
// }

// $user = new User();
// $user->doSomething("Unicode", 'success');

// User::doSomething2("Unicode");

// $user = new User();
// $user->setName('Hoàng An')->setEmail('hoangan.web@gmail.com')->show();

// class Calc
// {
//     private $result;
//     private $initialValue;
//     public function __construct($value)
//     {
//         $this->result = $value;
//         $this->initialValue = $value;
//     }
//     public function add($value)
//     {
//         $this->result += $value;
//         return $this;
//     }
//     public function minus($value)
//     {
//         $this->result -= $value;
//         return $this;
//     }
//     public function multi($value)
//     {
//         $this->result *= $value;
//         return $this;
//     }
//     public function divi($value)
//     {
//         if ($value != 0) {
//             $this->result /= $value;
//         }
//         return $this;
//     }
//     public function get()
//     {
//         $data = $this->result;
//         $this->result = $this->initialValue;
//         return $data;
//     }
// }

// $calc = new Calc(10);
// echo $calc->add(5)->minus(2)->multi(5)->divi(2)->get() . '<br/>';
// echo $calc->add(5)->get();

class Calc
{
    private $result;
    public static function add($value)
    {
        $obj = new Calc; //Khởi tạo object
        $obj->result = $value;
        return $obj;
    }
    public function minus($value)
    {
        $this->result -= $value;
        return $this;
    }
    public function multi($value)
    {
        $this->result *= $value;
        return $this;
    }
    public function divi($value)
    {
        if ($value != 0) {
            $this->result /= $value;
        }
        return $this;
    }
    public function get()
    {
        return $this->result;
    }
}
echo Calc::add(5)->minus(2)->multi(5)->divi(2)->get() . '<br/>';
echo Calc::add(5)->minus(2)->get();
