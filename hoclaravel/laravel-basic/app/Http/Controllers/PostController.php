<?php

namespace App\Http\Controllers;

use App\Services\PostService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    private $postService;
    public function __construct(PostService $postService)
    {
        $this->postService = $postService;
    }
    public function detail($id)
    {
        $post = $this->postService->getPostById($id);
        return view('posts.detail', compact('post'));
    }
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required'
        ]);
        $user = Auth::user();
        $post = $this->postService->createPost($request->all(), $user);
        if ($post) {
            return back()->with('msg', 'Thêm thành công');
        }
        return back()->with('msg', 'Thêm thất bại');
    }
}
