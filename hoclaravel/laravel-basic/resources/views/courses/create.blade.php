@extends('layouts.main')
@section('content')
    <h1 class="mb-3 text-3xl">Thêm khóa học</h1>
    <form method="POST" class="bg-white mb-3 border border-[#ddd] p-5 rounded-lg">
        <div class="mb-3">
            <label for="">Tên</label>
            <input name="name" type="text" class="outline-none w-full border border-[#ddd] px-5 py-1 rounded-md"
                placeholder="Tên...">
            @error('name')
                <span class="text-red-600">{{ $message }}</span>
            @enderror
        </div>
        <div class="mb-3">
            <label for="">Giá</label>
            <input name="price" type="number" class="outline-none w-full border border-[#ddd] px-5 py-1 rounded-md"
                placeholder="Giá...">
            @error('price')
                <span class="text-red-600">{{ $message }}</span>
            @enderror
        </div>
        <div class="mb-3">
            <label class="block mb-3">Danh sách người dùng</label>
            @foreach ($users as $value)
                <label class="block mb-1">
                    <input name="users[]" type="checkbox" value="{{ $value->id }}"> {{ $value->name }}
                </label>
            @endforeach
        </div>
        <button class="py-1 px-5 bg-green-800 text-white rounded-full cursor-pointer">Lưu</button>
        @csrf
    </form>
@endsection
