<?php

namespace App\Http\Controllers;

use App\Services\PostService;

class PostController extends Controller
{
    private $postService;
    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }
    public function index()
    {
        $posts = $this->postService->getPosts();
        return response()->json([
            'message' => 'Get posts success',
            'success' => true,
            'data' => $posts
        ]);
    }
}
