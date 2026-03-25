<?php

namespace App\Http\Middleware;

use App\Services\AuthService;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Symfony\Component\HttpFoundation\Response;

class AuthMiddleware
{
    private $authService = null;
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $authHeader = $request->header('authorization');
        if (!$authHeader) {
            return response()->json([
                'message' => 'Unauthorize',
                'success' => false
            ], 401);
        }
        $token = explode(' ', $authHeader)[1];
        //Kiểm tra blacklist
        $blacklist = Redis::get("blacklist:$token");
        if ($blacklist) {
            return response()->json([
                'message' => 'Unauthorize',
                'success' => false
            ], 401);
        }
        ['user' => $user, 'decoded' => $decoded] = $this->authService->profile($token);

        if (!$user) {
            return response()->json([
                'message' => 'Unauthorize',
                'success' => false
            ], 401);
        }
        $request->user = $user;
        $request->token = $token;
        $request->exp = $decoded->exp;
        return $next($request);
    }
}
