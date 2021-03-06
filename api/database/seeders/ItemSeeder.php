<?php

namespace Database\Seeders;

use App\Models\Item;
use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Item::create([
            'id' => 1,
            'brand_id' => 3,
            'unit_id' => 7,
            'name' => 'Kenwood',
            'description' => 'Kenwood Inverter AC',
            'unit_quantity' => 1.50,
            'purchase_price' => 72000.00,
            'sale_price' => 72000.00,
            'discount' => 1000.00
        ]);

        Item::create([
            'id' => 2,
            'brand_id' => 1,
            'unit_id' => 4,
            'name' => 'Coke',
            'description' => 'Coke Tinpack',
            'unit_quantity' => 245.00,
            'purchase_price' => 40.00,
            'sale_price' => 40.00,
            'discount' => 0.00
        ]);

        Item::create([
            'id' => 3,
            'brand_id' => 5,
            'unit_id' => 6,
            'name' => 'Pent',
            'description' => 'Outfitters pent',
            'unit_quantity' => 1.00,
            'purchase_price' => 1500.00,
            'sale_price' => 1500.00,
            'discount' => 100.00
        ]);

        Item::create([
            'id' => 4,
            'brand_id' => 2,
            'unit_id' => 2,
            'name' => 'Lays',
            'description' => 'Lays French Cheese',
            'unit_quantity' => 50.00,
            'purchase_price' => 50.00,
            'sale_price' => 50.00,
            'discount' => 0.00
        ]);

        Item::create([
            'id' => 5,
            'brand_id' => 4,
            'unit_id' => 1,
            'name' => 'Salt',
            'description' => 'National Iodized salt',
            'unit_quantity' => 1.00,
            'purchase_price' => 20.00,
            'sale_price' => 20.00,
            'discount' => 0.00
        ]);

        Item::create([
            'id' => 6,
            'brand_id' => 2,
            'unit_id' => 3,
            'name' => 'Pepsi',
            'description' => 'Pepsi 1.5 Litre.',
            'unit_quantity' => 1.50,
            'purchase_price' => 100.00,
            'sale_price' => 100.00,
            'discount' => 10.00
        ]);

        Item::create([
            'id' => 7,
            'brand_id' => 6,
            'unit_id' => 3,
            'name' => 'water',
            'description' => 'water',
            'unit_quantity' => 1.50,
            'purchase_price' => 60.00,
            'sale_price' => 60.00,
            'discount' => 0.00
        ]);
    }
}
