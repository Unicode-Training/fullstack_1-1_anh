<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableConstract;

class User extends Model implements AuthenticatableConstract
{
    use Authenticatable;
    protected $table = 'users'; //Ánh xạ tới bảng table
    protected $fillable = ['name', 'email', 'password', 'session_id'];

    public function phone()
    {
        return $this->hasOne(Phone::class, 'user_id', 'id');
    }
}

//Relationship
//1-1
//1-n
//n-n