@extends('layouts.main')
@section('content')
    <div class="bg-white p-3 rounded-lg">
        <h1 class="text-3xl font-medium mb-3">{{ $post->title }}</h1>
        <div class="flex gap-3 mb-3 text-sm">
            <span>Đăng bởi: {{ $post->user?->name }}</span>
            <span>Lúc: {{ Carbon\Carbon::parse($post->created_at)->diffForHumans() }}</span>
        </div>
        <div>
            {{ $post->content }}
        </div>
    </div>
@endsection
