<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AuthMiddleware;
use App\Http\Middleware\RoleMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/gioi-thieu', function () {
    return '<h1>Giới thiệu</h1>';
});

Route::get('/blocked', [AuthController::class, 'blocked']);

Route::group(['middleware' => AuthMiddleware::class], function () {
    Route::get('/users', [UserController::class, 'index']);

    Route::get('/users/create', [UserController::class, 'create']);

    Route::post('/users/create', [UserController::class, 'store']);

    Route::get('/users/edit/{id}', [UserController::class, 'editForm']);

    Route::put('/users/update/{id}', [UserController::class, 'update']);

    Route::get('/users/delete/{id}', [UserController::class, 'delete']);

    Route::get('/users/{id}', [UserController::class, 'detail']);
});

Route::get('/login', [AuthController::class, 'formLogin']);

Route::post('/login', [AuthController::class, 'doLogin']);

Route::post('/logout', [AuthController::class, 'logout']);



//HTTP METHOD
//- get: Lấy dữ liệu từ server về
//- post: Thêm dữ liệu lên server
//- put, patch: Cập nhật dữ liệu trên server
//- delete: Xóa dữ liệu trên server

//Controller: Class -> Method (Action)
//Ví dụ: Product -> ProductController --> listed, create, update, delete

//Truy vấn database
// - Create: TenModel::create(mang-data)
// - Read: TenModel::find(id)
// - Update: TenModel::where->update(mang-data)
// - Delete: TenModel::where->delete()
// - Listed: TenModel::all()

//- Filter: TenModel::where(field, operator, value)->get()