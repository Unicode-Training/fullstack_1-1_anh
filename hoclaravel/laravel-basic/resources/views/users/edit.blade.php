@extends('layouts.main')
@section('content')
    <h1>Update</h1>
    @if (session('msg'))
        <p>{{ session('msg') }}</p>
    @endif
    <form action="/users/update/{{ $user->id }}" method="post">
        <div>
            <input type="text" placeholder="Name..." name="name" value="{{ $user->name }}">
        </div>
        <div>
            <input type="text" placeholder="Email..." name="email" value="{{ $user->email }}">
        </div>
        <button>Submit</button>
        @method('PUT')
        @csrf
    </form>
@endsection
