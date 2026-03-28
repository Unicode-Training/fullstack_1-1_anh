<?php

namespace App\Jobs;

use App\Services\VideoService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class SyncVideoInfo implements ShouldQueue
{
    use Queueable;

    private $video;
    public function __construct($video)
    {
        $this->video = $video;
    }

    /**
     * Execute the job.
     */
    public function handle(VideoService $videoService): void
    {
        $videoService->getVideoInfo($this->video->id);
    }
}
