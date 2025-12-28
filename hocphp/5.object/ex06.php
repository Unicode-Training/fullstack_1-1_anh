<?php
//Phương thức trừu tượng
abstract class Model
{
    public function getName()
    {
        return 'Hoàng An';
    }

    abstract protected function setTable($name);
}

class User extends Model
{
    protected function setTable($name) {}
}

$user = new User();
