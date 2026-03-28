<?php

namespace App\Services;

use App\Models\Video;
use DateInterval;
use DateTime;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class VideoService
{
    public function create($link)
    {
        return Video::create([
            'link' => $link
        ]);
    }

    public function syncDataListVideo()
    {
        $videoList = Video::all();
        foreach ($videoList as $video) {
            $videoId = $video->id;
            $this->getVideoInfo($videoId);
        }
    }

    public function getVideoInfo($id)
    {
        //Truy vấn database
        $video = Video::find($id);
        if (!$video) {
            return;
        }
        $videoId = $this->getVideoId($video->link); //id
        if (!$videoId) {
            return;
        }
        $url = "https://www.googleapis.com/youtube/v3/videos?id=$videoId&part=contentDetails,snippet,statistics&key=" . env('YOUTUBE_API_KEY');
        $response = Http::get($url)->json();
        if (count($response['items'])) {
            $snippet = $response['items'][0]['snippet'];
            $title = $snippet['title'];
            $thumbnail = $snippet['thumbnails']['maxres']['url'];

            $contentDetails = $response['items'][0]['contentDetails'];
            $durations = $this->covtime($contentDetails['duration']);
            $statistics = $response['items'][0]['statistics'];
            $views = $statistics['viewCount'];
            $comments = $statistics['commentCount'];
            Log::info('Sync data');
            $updateStatus =  Video::where('id', $video->id)->update(compact(
                'durations',
                'views',
                'comments',
                'thumbnail',
                'title'
            ));
            Log::info($updateStatus);
            return true;
        }
        return false;
    }

    private function covtime($youtube_time)
    {
        if ($youtube_time) {
            $start = new DateTime('@0'); // Unix epoch
            $start->add(new DateInterval($youtube_time));
            $youtube_time = $start->getTimestamp();
        }
        return $youtube_time;
    }

    private function getVideoId($url)
    {
        $pattern = '#^(?:https?://)?(?:www\.)?(?:youtu\.be/|youtube\.com(?:/embed/|/v/|/watch\?v=|/watch\?.+&v=))([\w-]{11})(?:.+)?$#x';
        preg_match($pattern, $url, $matches);
        return (isset($matches[1])) ? $matches[1] : false;
    }
}

//Scheduling --> add job queue --> worker queue chạy --> update Database