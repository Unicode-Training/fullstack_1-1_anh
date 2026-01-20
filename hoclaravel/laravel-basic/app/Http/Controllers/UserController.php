<?php

namespace App\Http\Controllers;

use App\models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $title = 'Hello';
        $subTitle = 'Thắng Anh';
        $status = $request->status;
        $q = $request->q;
        $status = false;
        $userList = ['User 1', 'User 2', 'User 3'];
        $users = User::all();
        return view("users.index", compact('title', 'subTitle', 'status', 'q', 'userList', 'users'));
    }

    public function detail($id)
    {
        return view('users.detail', compact('id'));
    }

    public function create()
    {
        return view('users.create');
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $name = $request->name;
        $email = $request->email;
        $password = Hash::make($request->password);
        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => $password
        ]);
        if ($user) {
            return redirect('/users/create')->with('msg', 'Thêm thành công');
        }
        return redirect('/users/create')->with('msg', 'Thêm thất bại');
    }
}
