<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableConstract;

class User extends Model implements AuthenticatableConstract
{
    use Authenticatable;
    protected $table = 'users'; //Ánh xạ tới bảng table
    protected $fillable = ['name', 'email', 'password'];
}
