@extends('layouts.main')
@section('content')
    <h1 class="text-3xl mb-3">Danh sách khóa học</h1>
    <a href="/courses/create" class="bg-green-600 text-white inline-block px-5 py-2 mb-3">Thêm khóa học</a>
    <table class="table-auto w-full border-collapse border border-gray-400">
        <thead>
            <tr>
                <th width="5%" class="border border-gray-300 p-2">STT</th>
                <th class="border border-gray-300 p-2">Tên</th>
                <th class="border border-gray-300 p-2">Giá</th>
                <th width="5%" class="border border-gray-300 p-2">Sửa</th>
                <th width="5%" class="border border-gray-300 p-2">Xóa</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($courses as $key => $value)
                <tr>
                    <td class="border border-gray-300 p-2">{{ $key + 1 }}</td>
                    <td class="border border-gray-300 p-2">{{ $value->name }}</td>
                    <td class="border border-gray-300 p-2">{{ $value->price }}</td>
                    <td class="border border-gray-300 p-2">
                        <a href="#" class="bg-yellow-600 inline-block px-3 py-1 text-white">Sửa</a>
                    </td>
                    <td class="border border-gray-300 p-2">
                        <a href="#" class="bg-red-600 inline-block px-3 py-1 text-white">Xóa</a>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
