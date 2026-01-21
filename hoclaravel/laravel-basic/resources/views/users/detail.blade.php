@extends('layouts.main')
@section('content')
    <h1>Chi tiết user</h1>
    <p>Name: {{ $user->name }}</p>
    <p>Email: {{ $user->email }}</p>
    <p>Thời gian tạo: {{ $user->created_at }}</p>
    <p>Thời gian cập nhật: {{ $user->updated_at }}</p>
@endsection
