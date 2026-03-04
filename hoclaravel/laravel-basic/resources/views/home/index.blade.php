@extends('layouts.main')
@section('content')
    <h1 class="text-3xl font-medium mb-3">Posts</h1>
    @if (auth()->check())
        @include('partials.add-post')
    @endif
    @foreach ($posts as $post)
        <div class="mb-3 border border-[#ddd] p-3 bg-white rounded-lg">
            <h2 class="text-xl font-medium mb-2">
                <a href="#">{{ $post->title }}</a>
            </h2>
            <div class="flex gap-3 mb-3 text-sm">
                <span>Đăng bởi: {{ $post->user?->name }}</span>
                <span>Lúc: {{ Carbon\Carbon::parse($post->created_at)->diffForHumans() }}</span>
            </div>
            <p>
                {{ Str::words($post->content, 30, '...') }}
            </p>
            <a href="#"
                class="inline-block px-5 py-1 rounded-full border border-[#ddd] bg-white mt-3 hover:bg-green-700 hover:text-white">Đọc
                tiếp</a>
        </div>
    @endforeach
@endsection
