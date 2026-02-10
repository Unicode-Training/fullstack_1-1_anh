<?php

namespace App\Services;

use App\models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function getUsers($request)
    {
        $status = $request->status;
        $q = $request->q;
        $users = User::with('phone')->latest();
        if ($q) {
            $users->where('name', 'like', '%' . $q . '%')->orWhere('email', 'like', '%' . $q . '%');
        }
        if ($status == "active" || $status == "inactive") {
            $users->where('status', $status == "active" ? 1 : 0);
        }
        $users = $users->paginate(3)->withQueryString();
        return $users;
    }

    public function getUser($id)
    {
        $user = User::find($id); //Truy vấn theo khóa chính
        return $user;
    }

    public function createUser($data)
    {
        $data['password'] = Hash::make($data['password']);
        $user = User::create($data);
        if ($user) {
            //Thêm phone
            $user->phone()->create([
                'phone' => $data['phone']
            ]);
        }
        return $user;
    }

    public function updateUser($id, $data)
    {
        User::where('id', $id)->update([
            'name' => $data['name'],
            'email' => $data['email']
        ]);
        $user = User::find($id);
        $user->phone()->update([
            'phone' => $data['phone']
        ]);
    }

    public function deleteUser($id)
    {

        $user = User::find($id);
        $user->phone()->delete(); //Xóa phone của user
        $user->delete(); //Xóa user
    }
}
