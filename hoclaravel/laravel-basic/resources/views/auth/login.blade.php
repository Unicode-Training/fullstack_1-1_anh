@extends('layouts.main')
@section('content')
    <form method="POST" class="max-w-[300px] mx-auto">

        <h1 class="text-center mb-3 text-3xl">Login</h1>
        @if (session('msg'))
            <div class="bg-red-400 text-white px-3 py-2 text-center rounded-full">{{ session('msg') }}</div>
        @endif
        <div class="mb-3">
            <label class="font-medium mb-1 block">Email</label>
            <input name="email" type="text" class="border px-3 py-1 border-[#ccc] outline-none w-full rounded-md"
                placeholder="Email...">
            @error('email')
                <span class="text-red-600">{{ $message }}</span>
            @enderror
        </div>
        <div class="mb-3">
            <label class="font-medium mb-1 block">Password</label>
            <input name="password" type="password" class="border px-3 py-1 border-[#ccc] outline-none w-full rounded-md"
                placeholder="Password...">
            @error('password')
                <span class="text-red-600">{{ $message }}</span>
            @enderror
        </div>
        <button class="px-3 py-1 bg-green-800 text-white w-full rounded-full">Login</button>
        @csrf
    </form>
@endsection
