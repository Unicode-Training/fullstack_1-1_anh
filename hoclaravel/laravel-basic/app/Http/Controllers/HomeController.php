<?php

namespace App\Http\Controllers;

use App\Services\PostService;

class HomeController extends Controller
{
    private $postService;
    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }
    public function index()
    {
        $posts = $this->postService->getPosts();
        return view('home.index', compact('posts'));
    }
}

/*
Database: Có bảng
Model: Tạo, cấu hình bảng, cấu hình relationship
Controller: Tạo action
Route: Đăng ký route tới controller, action tương ứng
View: Tạo view, gọi view vào controller
Service: Tạo service, gọi model tương ứng vào service, gọi service vào controller
*/