<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
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
        //Logic kiểm tra
        // - Hợp lệ --> $next($request)
        // - Không hợp lệ:
        // + Chuyển hướng
        // + Trả về thông báo
        $isAuth = true;
        if (!$isAuth) {
            // return redirect('/');
            abort(401);
        }
        $request->user = 'admin';
        return $next($request);
    }
}
