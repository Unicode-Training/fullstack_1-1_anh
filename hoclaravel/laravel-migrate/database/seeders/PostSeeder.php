<?php

namespace Database\Seeders;

use App\Models\Post;
use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::truncate(); //Xóa sạch dữ liệu

        $faker = Factory::create();
        for ($i = 0; $i < 10; $i++) {
            Post::create([
                'title' => $faker->sentence(),
                'content' => $faker->paragraph(10)
            ]);
        }
    }
}
