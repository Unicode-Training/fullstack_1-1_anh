<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function formLogin()
    {
        return view('auth.login');
    }
    public function doLogin(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ], [
            'required' => ':attribute bắt buộc phải nhập',
            'email' => ':attribute không đúng định dạng',
        ], [
            'email' => 'Email',
            'password' => 'Mật khẩu'
        ]);

        //Xử lý đăng nhập
        $user = Auth::attempt([
            'email' => $request->email,
            'password' => $request->password
        ]);
        if (!$user) {
            return redirect('/login')->with('msg', 'Email hoặc mật khẩu không chính xác');
        }
        return redirect('/users');
    }

    public function logout()
    {
        Auth::logout();
        return redirect('/login');
    }
}
