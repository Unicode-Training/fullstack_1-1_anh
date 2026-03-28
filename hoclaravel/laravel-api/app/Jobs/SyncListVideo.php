<?php

namespace App\Jobs;

use App\Services\VideoService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class SyncListVideo implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(VideoService $videoService): void
    {
        $videoService->syncDataListVideo();
    }
}
