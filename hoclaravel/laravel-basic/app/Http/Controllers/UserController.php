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
        $userList = ['User 1', 'User 2', 'User 3'];
        $users = User::latest();
        if ($q) {
            $users->where('name', 'like', '%' . $q . '%')->orWhere('email', 'like', '%' . $q . '%');
        }
        if ($status == "active" || $status == "inactive") {
            $users->where('status', $status == "active" ? 1 : 0);
        }
        $users = $users->get();

        return view("users.index", compact('title', 'subTitle', 'status', 'q', 'userList', 'users'));
    }

    public function detail($id)
    {
        $user = User::find($id); //Truy vấn theo khóa chính
        return view('users.detail', compact('user'));
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

    public function editForm($id)
    {
        $user = User::find($id);
        if (!$user) {
            abort(404);
        }

        return view('users.edit', compact('user'));
    }

    public function update(Request $request, $id)
    {
        $name = $request->name;
        $email = $request->email;
        User::where('id', $id)->update([
            'name' => $name,
            'email' => $email
        ]);
        return redirect('/users/edit/' . $id)->with('msg', 'Cập nhật thành công');
    }

    public function delete($id)
    {
        User::where('id', $id)->delete();
        return redirect('/users')->with('msg', 'Xóa thành công');
    }
}
