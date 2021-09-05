<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'id' => 1,
            'category_id' => 3,
            'brand_id' => 3,
            'unit_id' => 7,
            'name' => 'Kenwood',
            'description' => 'Kenwood Inverter AC',
            'unit_quantity' => 1.50,
            'price' => 72000.00,
            'discount' => 1000.00
        ])->vendors()->attach(2);

        Product::create([
            'id' => 2,
            'category_id' => 4,
            'brand_id' => 1,
            'unit_id' => 4,
            'name' => 'Coke',
            'description' => 'Coke Tinpack',
            'unit_quantity' => 245.00,
            'price' => 40.00,
            'discount' => 0.00
        ])->vendors()->attach(2);

        Product::create([
            'id' => 3,
            'category_id' => 2,
            'brand_id' => 5,
            'unit_id' => 6,
            'name' => 'Pent',
            'description' => 'Outfitters pent',
            'unit_quantity' => 1.00,
            'price' => 1500.00,
            'discount' => 100.00
        ])->vendors()->attach(2);

        Product::create([
            'id' => 4,
            'category_id' => 5,
            'brand_id' => 2,
            'unit_id' => 2,
            'name' => 'Lays',
            'description' => 'Lays French Cheese',
            'unit_quantity' => 50.00,
            'price' => 50.00,
            'discount' => 0.00
        ])->vendors()->attach(2);

        Product::create([
            'id' => 5,
            'category_id' => 1,
            'brand_id' => 4,
            'unit_id' => 1,
            'name' => 'Salt',
            'description' => 'National Iodized salt',
            'unit_quantity' => 1.00,
            'price' => 20.00,
            'discount' => 0.00
        ])->vendors()->attach(2);

        Product::create([
            'id' => 6,
            'category_id' => 4,
            'brand_id' => 2,
            'unit_id' => 3,
            'name' => 'Pepsi',
            'description' => 'Pepsi 1.5 Litre.',
            'unit_quantity' => 1.50,
            'price' => 100.00,
            'discount' => 10.00
        ])->vendors()->attach(2);

        Product::create([
            'id' => 7,
            'category_id' => 4,
            'brand_id' => 6,
            'unit_id' => 3,
            'name' => 'water',
            'description' => 'water',
            'unit_quantity' => 1.50,
            'price' => 60.00,
            'discount' => 0.00
        ])->vendors()->attach(2);
    }
}
