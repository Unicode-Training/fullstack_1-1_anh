<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Middleware\AuthMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{id}', [PostController::class, 'find']);
Route::post('/posts', [PostController::class, 'create']);
Route::patch('/posts/{id}', [PostController::class, 'update']);
Route::delete('/posts/{id}', [PostController::class, 'delete']);

Route::post('/auth/login', [AuthController::class, 'login']);
Route::get('/auth/profile', [AuthController::class, 'profile'])->middleware(AuthMiddleware::class);
Route::post('/auth/refresh-token', [AuthController::class, 'refreshToken']);
Route::delete('/auth/logout', [AuthController::class, 'logout'])->middleware(AuthMiddleware::class);
