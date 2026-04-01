<?php

namespace Database\Seeders;

use App\Models\Product;
use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Factory::create();
        $faker->addProvider(new \Mmo\Faker\PicsumProvider($faker));
        Product::truncate();
        for ($i = 0; $i < 50; $i++) {
            $name = $faker->sentence(3);
            $description = $faker->paragraph(3, false);
            $price = $faker->numberBetween(500000, 5000000);
            $thumbnail = $faker->picsumUrl();
            Product::create(compact('name', 'description', 'price', 'thumbnail'));
        }
    }
}
