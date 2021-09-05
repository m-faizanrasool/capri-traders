<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create([
            'id' => 1,
            'name' => 'Food'
        ]);

        Category::create([
            'id' => 2,
            'name' => 'Clothes'
        ]);

        Category::create([
            'id' => 3,
            'name' => 'Air Conditioners'
        ]);

        Category::create([
            'id' => 4,
            'name' => 'Beverages'
        ]);

        Category::create([
            'id' => 5,
            'name' => 'Snacks'
        ]);

    }
}
