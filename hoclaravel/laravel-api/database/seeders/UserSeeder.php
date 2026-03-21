<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Hoàng An',
            'email' => 'hoangan.web@gmail.com',
            'password' => Hash::make('123456')
        ]);
        User::create([
            'name' => 'Hoàng An Unicode',
            'email' => 'anhoang.unicode@gmail.com',
            'password' => Hash::make('123456')
        ]);
    }
}
