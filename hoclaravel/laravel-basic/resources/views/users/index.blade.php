@extends('layouts.main')
@section('content')
    <h1>Danh sách người dùng</h1>
    <form action="">
        <select name="status">
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
        </select>
        <input type="search" name="q" placeholder="Search...">
        <button>Search</button>
    </form>
    @if ($status)
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit velit neque repellendus ratione perspiciatis
            minus
            incidunt explicabo, odit accusamus, officia, tempore asperiores pariatur! Ab tenetur error ad amet alias non.
        </p>
    @else
        <p>Ahihi</p>
    @endif

    @foreach ($userList as $user)
        <h3>{{ $user }}</h3>
    @endforeach

    @for ($i = 1; $i <= 10; $i++)
        <h3>{{ $i }}</h3>
    @endfor

    @foreach ($users as $user)
        <h3>{{ $user->name }}</h3>
    @endforeach
@endsection
