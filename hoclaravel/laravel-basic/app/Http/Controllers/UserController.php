<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    private $userService = null;
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }
    public function index(Request $request)
    {
        $pageTitle = 'Người dùng';
        $users = $this->userService->getUsers($request);
        return view("users.index", compact('users', 'pageTitle'));
    }

    public function detail($id)
    {
        $user = $this->userService->getUser($id);
        $pageTitle = "Chi tiết: " . $user->name;
        return view('users.detail', compact('user', 'pageTitle'));
    }

    public function create()
    {
        $pageTitle = 'Thêm người dùng';
        return view('users.create', compact('pageTitle'));
    }

    public function store(Request $request)
    {
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        $phone = $request->phone;
        $user = $this->userService->createUser(compact('name', 'email', 'password', 'phone'));
        if ($user) {
            return redirect('/users/create')->with('msg', 'Thêm thành công');
        }
        return redirect('/users/create')->with('msg', 'Thêm thất bại');
    }

    public function editForm($id)
    {
        $user = $this->userService->getUser($id);
        if (!$user) {
            abort(404);
        }
        return view('users.edit', compact('user'));
    }

    public function update(Request $request, $id)
    {
        $name = $request->name;
        $email = $request->email;
        $phone = $request->phone;
        $this->userService->updateUser($id, compact('name', 'email', 'phone'));
        return redirect('/users/edit/' . $id)->with('msg', 'Cập nhật thành công');
    }

    public function delete($id)
    {
        $this->userService->deleteUser($id);
        return redirect('/users')->with('msg', 'Xóa thành công');
    }
}

//1 action -> gọi nhiều service
//1 service -> gọi nhiều service khác