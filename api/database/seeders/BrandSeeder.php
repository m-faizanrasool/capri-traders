<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Brand::create([
            'id' => 1,
            'name' => 'Coke'
        ]);
        Brand::create([
            'id' => 2,
            'name' => 'Pepsi'
        ]);
        Brand::create([
            'id' => 3,
            'name' => 'Kenwood'
        ]);
        Brand::create([
            'id' => 4,
            'name' => 'National'
        ]);
        Brand::create([
            'id' => 5,
            'name' => 'Outfitters'
        ]);
        Brand::create([
            'id' => 6,
            'name' => 'Nestle'
        ]);

    }
}
