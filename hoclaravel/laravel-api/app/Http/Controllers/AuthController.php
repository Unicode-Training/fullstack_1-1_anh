<?php

namespace App\Http\Controllers;

use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    private $authService = null;
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        $token = $this->authService->login($request->email, $request->password);
        if (!$token) {
            return response()->json([
                'success' => false,
                'message' => 'Email or password is not correct'
            ], 401);
        }
        return response()->json([
            'success' => true,
            'message' => 'Login success',
            'data' => $token
        ]);
    }

    public function profile(Request $request)
    {
        return $request->user;
    }

    public function refreshToken(Request $request)
    {
        $refreshToken = $request->refreshToken;
        $newToken = $this->authService->refreshToken($refreshToken);
        if (!$newToken) {
            return response()->json([
                'success' => false,
                'message' => 'Refresh token invalid'
            ], 401);
        }
        return response()->json([
            'success' => true,
            'message' => 'Refresh token success',
            'data' => $newToken
        ]);
    }

    public function logout(Request $request)
    {
        $this->authService->logout($request->token, $request->exp);
        return response()->json([
            'message' => 'Logout success',
            'success' => true
        ]);
    }
}
