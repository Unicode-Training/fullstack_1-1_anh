<?php

namespace App\Jobs;

use App\Services\PostService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class DeleteAllPost implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct() {}

    /**
     * Execute the job.
     */
    public function handle(PostService $postService): void
    {
        $postService->deleteAll();
    }
}
