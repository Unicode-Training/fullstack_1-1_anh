<?php
//Interface --> Khuôn mẫu của 1 class

interface AuthInterface
{
    public function isLogin();
}

interface UserInterfce extends AuthInterface
{
    public function getName();
    public function setName($value);
}

interface PersonInterface
{
    public function getAge();
}


class User implements UserInterfce, PersonInterface
{
    public function getName() {}
    public function setName($value) {}
    public function show() {}
    public function getAge() {}
    public function isLogin() {}
}
