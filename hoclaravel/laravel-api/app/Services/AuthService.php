<?php

namespace App\Services;

use App\Jobs\SendEmailLoginNotify;
use App\Mail\LoginNotify;
use App\Models\User;
use Exception;
use Firebase\JWT\JWT;
use Illuminate\Support\Facades\Auth;
use Firebase\JWT\Key;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redis;

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
        $accessToken = $this->createAccessToken($user);
        $refreshToken = $this->createRefreshToken($user);

        //Dispatch job --> Đẩy job vào queue, để worker lấy từng job ra thực thi
        SendEmailLoginNotify::dispatch($user);

        return compact('accessToken', 'refreshToken');
    }

    private function createAccessToken($user)
    {
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

    private function createRefreshToken($user)
    {
        $secret = env('JWT_REFRESH_SECRET');
        $expired = env('JWT_REFRESH_EXPIRED');
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
            return compact('user', 'decoded');
        } catch (Exception $exception) {
            return false;
        }
    }

    public function refreshToken($refreshToken)
    {
        //verify refresh token
        // - Không hợp lệ -> return false
        // - Hợp lệ -> Tạo accessToken mới
        $secret = env('JWT_REFRESH_SECRET');
        try {
            $decoded = JWT::decode($refreshToken, new Key($secret, 'HS256'));
            $accessToken = $this->createAccessToken($decoded);
            return compact('accessToken', 'refreshToken');
        } catch (Exception $exception) {
            return false;
        }
    }

    public function logout($token, $exp)
    {
        //Lưu token vào redis
        //key redis: blacklist:$token
        // Redis::set("blacklist:$token", 1);
        // return true;
        $seconds = $exp - time();
        Redis::setex("blacklist:$token", $seconds, 1);
        return true;
    }
}
