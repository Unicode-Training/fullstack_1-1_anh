<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class AuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $isAuth = Auth::check();
        if (!$isAuth) {
            return redirect('/login');
        }
        //Lấy thông tin user đang login
        //Check status = 0 --> abort(503) hoặc tạo route, view mới sau redirect qua route đó
        $user = Auth::user();
        if ($user->status === 0) {
            return redirect('/blocked');
        }

        //Lấy sessionId hiện tại
        $sessionId = $request->session()->getId();
        // $sessionId = Session::getId();
        // $sessionId = session()->getId();
        echo $sessionId;

        return $next($request);
    }
}
