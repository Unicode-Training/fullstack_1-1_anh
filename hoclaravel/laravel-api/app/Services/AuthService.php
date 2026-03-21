<?php

namespace App\Services;

use App\Models\User;
use Exception;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Auth;
use Firebase\JWT\Key;

class AuthService
{
    public function login($email, $password)
    {
        $status = Auth::attempt([
            'email' => $email,
            'password' => $password
        ]);
        if (!$status) {
            return false;
        }
        //Cấp phát token để trả về cho client
        $user = User::where('email', $email)->first();
        $secret = env('JWT_SECRET');
        $expired = env('JWT_EXPIRED');
        $issuedAt = time();
        $expirationTime = $issuedAt + $expired;
        $payload = [
            'id' => $user->id,
            'exp' => $expirationTime
        ];
        $jwt = JWT::encode($payload, $secret, 'HS256');
        return $jwt;
    }

    public function profile($token)
    {
        //verify token
        $secret = env('JWT_SECRET');
        try {
            $decoded = JWT::decode($token, new Key($secret, 'HS256'));

            $userId = $decoded->id;
            $user = User::find($userId);
            return $user;
        } catch (Exception $exception) {
            return false;
        }
    }
}
