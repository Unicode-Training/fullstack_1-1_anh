<?php

namespace App\Http\Controllers;

use App\models\User;
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
        //Login thành công
        // - Lấy sessionId
        // - Cập nhật vào cột session_id của bảng users
        $sessionId = $request->session()->getId();
        User::where('email', $request->email)->update([
            'session_id' => $sessionId
        ]);
        return redirect('/users');
    }

    public function logout()
    {
        Auth::logout();
        return redirect('/login');
    }

    public function blocked()
    {
        //Xử lý
        // - Nếu đã mở khóa -> Chuyển về /users
        if (!Auth::check()) {
            abort(404);
        }
        $user = Auth::user();
        if ($user->status) {
            return redirect('/users');
        }
        return view('auth.blocked');
    }
}
