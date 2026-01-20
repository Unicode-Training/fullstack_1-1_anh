<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/gioi-thieu', function () {
    return '<h1>Giới thiệu</h1>';
});

Route::get('/users', [UserController::class, 'index']);

Route::get('/users/create', [UserController::class, 'create']);

Route::post('/users/create', [UserController::class, 'store']);

Route::get('/users/{id}', [UserController::class, 'detail']);


//HTTP METHOD
//- get: Lấy dữ liệu từ server về
//- post: Thêm dữ liệu lên server
//- put, patch: Cập nhật dữ liệu trên server
//- delete: Xóa dữ liệu trên server

//Controller: Class -> Method (Action)
//Ví dụ: Product -> ProductController --> listed, create, update, delete