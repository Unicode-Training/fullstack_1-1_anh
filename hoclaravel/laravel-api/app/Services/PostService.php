<?php

namespace App\Services;

use App\Models\Post;

class PostService
{
    public function getPosts()
    {
        return Post::all();
    }
    public function existPosts()
    {
        return Post::exists();
    }
    public function getPost($id)
    {
        return Post::find($id);
    }
    public function createPost($postData)
    {
        return Post::create($postData);
    }
    public function updatePost($id, $postData)
    {
        $status = Post::where('id', $id)->update($postData);
        if ($status) {
            return Post::find($id);
        }
        return false;
    }
    public function deletePost($id)
    {
        $post = Post::find($id);
        if (!$post) {
            return false;
        }
        $post->delete();
        return $post;
    }

    public function deleteAll()
    {
        Post::truncate(); //Xóa hết dữ liệu bảng post
    }
}
