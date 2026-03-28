<?php

namespace App\Http\Controllers;

use App\Jobs\SyncVideoInfo;
use App\Services\VideoService;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    private $videoService = null;
    public function __construct(VideoService $videoService)
    {
        $this->videoService = $videoService;
    }
    public function create(Request $request)
    {
        $request->validate([
            'link' => 'required|url'
        ]);
        $video = $this->videoService->create($request->link);
        //Dispatch job
        SyncVideoInfo::dispatch($video);
        return response()->json([
            'message' => "Add video success",
            'success' => true,
            'data' => $video
        ], 201);
    }
}
