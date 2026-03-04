<?php

namespace App\Services;

use App\Models\Post;

class PostService
{
    public function getPosts()
    {
        return Post::with('user')->latest()->get();
    }

    public function getPostById($id)
    {
        return Post::find($id);
    }

    public function createPost($postData, $user)
    {
        return $user->posts()->create($postData);
    }
}
