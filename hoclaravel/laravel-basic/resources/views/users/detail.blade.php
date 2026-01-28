@extends('layouts.main')
@section('content')
    <h1>Chi tiết user</h1>
    <p>Name: {{ $user->name }}</p>
    <p>Email: {{ $user->email }}</p>
    <p>Thời gian tạo: {{ $user->created_at }}</p>
    <p>Thời gian cập nhật: {{ $user->updated_at }}</p>
@endsection
@section('css')
    <style>
        h1 {
            background: yellow
        }
    </style>
@endsection
@section('js')
    <script>
        const btn = document.createElement('button');
        btn.innerText = 'Top';
        document.body.append(btn);
    </script>
@endsection
