<?php

namespace App\Models;

use App\Models\Course;
use App\Models\Post;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableConstract;
use Illuminate\Database\Eloquent\Model;

class User extends Model implements AuthenticatableConstract
{
    use Authenticatable;
    protected $table = 'users'; //Ánh xạ tới bảng table
    protected $fillable = ['name', 'email', 'password', 'session_id'];

    public function phone()
    {
        return $this->hasOne(Phone::class, 'user_id', 'id');
    }

    public function posts()
    {
        return $this->hasMany(Post::class, 'user_id', 'id');
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'users_courses', 'user_id', 'course_id');
    }
}

//Relationship
//1-1
//1-n
//n-n