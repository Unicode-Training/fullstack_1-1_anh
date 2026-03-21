<?php

namespace App\Http\Controllers;

use App\Services\PostService;
use Illuminate\Http\Request;

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
    public function find($id)
    {
        $post = $this->postService->getPost($id);
        if (!$post) {
            return response()->json([
                'message' => 'Get post failed',
                'success' => false,
                'error' => 'Post not found'
            ], 404);
        }
        return response()->json([
            'message' => 'Get post success',
            'success' => true,
            'data' => $post
        ]);
    }
    public function create(Request $request)
    {
        //Validate
        $request->validate([
            'title' => 'required',
            'content' => 'required'
        ], [
            'required' => ':attribute không được bỏ trống'
        ]);
        $post = $this->postService->createPost($request->all());
        return response()->json([
            'message' => 'Create post success',
            'success' => true,
            'data' => $post
        ], 201);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'sometimes|required',
            'content' => 'sometimes|required'
        ]);
        $post = $this->postService->updatePost($id, $request->all());
        if (!$post) {
            return response()->json([
                'message' => 'Update post failed',
                'success' => false,
                'error' => 'Server Error'
            ], 500);
        }
        return response()->json([
            'message' => 'Update post success',
            'success' => true,
            'data' => $post
        ]);
    }
    public function delete($id)
    {
        $post = $this->postService->deletePost($id);
        if (!$post) {
            return response()->json([
                'message' => 'Delete post failed',
                'success' => false,
                'error' => 'Server Error'
            ], 500);
        }
        return response()->json([
            'message' => 'Delete post success',
            'success' => true,
            'data' => $post
        ]);
    }
}
