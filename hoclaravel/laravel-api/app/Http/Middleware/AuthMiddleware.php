<?php

namespace App\Http\Middleware;

use App\Services\AuthService;
use Closure;
use Illuminate\Http\Request;
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
        $token = explode(' ', $authHeader)[1];

        $user = $this->authService->profile($token);

        if (!$user) {
            return response()->json([
                'message' => 'Unauthorize',
                'success' => false
            ], 401);
        }
        $request->user = $user;
        return $next($request);
    }
}
