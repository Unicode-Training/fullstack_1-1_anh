@extends('layouts.main')
@section('content')
    <h1>Create</h1>
    @if (session('msg'))
        <p>{{ session('msg') }}</p>
    @endif
    <form action="" method="post">
        <div>
            <input type="text" placeholder="Name..." name="name">
        </div>
        <div>
            <input type="text" placeholder="Email..." name="email">
        </div>
        <div>
            <input type="password" placeholder="Password..." name="password">
        </div>
        <div>
            <input type="number" placeholder="Phone..." name="phone">
        </div>
        <button>Submit</button>
        @csrf
    </form>
@endsection
