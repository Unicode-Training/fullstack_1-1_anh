<?php

namespace App;

use App\Home;
use App\models\User;
use Input;

class App
{
    public function __construct()
    {
        echo 'App Index <br/>';
        new Home();
        echo '<br/>';
        $user = new User();
        $user->index();
        doSomething();
        echo '<br/>';
        new Input();
    }
}
