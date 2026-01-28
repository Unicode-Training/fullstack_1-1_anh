<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $isAccess = false;
        if ($request->user === 'admin') {
            $isAccess = true;
        }
        if (!$isAccess) {
            abort(403, "Không có quyền");
        }
        return $next($request);
    }
}
