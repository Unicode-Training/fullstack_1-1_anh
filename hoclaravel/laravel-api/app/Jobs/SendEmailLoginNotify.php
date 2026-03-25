<?php

namespace App\Jobs;

use App\Mail\LoginNotify;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class SendEmailLoginNotify implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    private $user;
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        //Logic của job
        //Gửi email
        Mail::to($this->user->email)->send(new LoginNotify($this->user, request()));
    }
}
