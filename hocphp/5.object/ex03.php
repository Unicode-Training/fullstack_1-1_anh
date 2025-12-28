<?php
//Trait: Kế thừa (Hỗ trợ đa kế thừa)

trait A
{
    public $a = 10;
    public $b = 20;
}

trait B
{
    public $c = 30;
    public $d = 40;
}

trait C
{
    use A, B;
    private $value = 'Ahihi';
    public function getValue()
    {
        return $this->value;
    }
}

class User
{
    use C;
}
$user = new User();
echo $user->a . '<br/>';
echo $user->b . '<br/>';
echo $user->c . '<br/>';
echo $user->d . '<br/>';
echo $user->getValue();
