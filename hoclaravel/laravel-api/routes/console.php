<?php

use App\Jobs\DeleteAllPost;
use App\Jobs\SyncListVideo;
use App\Services\PostService;
use Illuminate\Support\Facades\Schedule;
use Illuminate\Support\Facades\Schema;

// Schedule::call(function (PostService $postService) {
//     $postService->deleteAll();
// })->everyMinute();

// Schedule::job(new DeleteAllPost())->everyMinute()->when(function (PostService $postService) {
//     //Thiết lập chạy khi nào
//     return $postService->existPosts();
// }); //add DeleteAllPost vào queue

Schedule::job(new SyncListVideo)->everySixHours();
