<?php

namespace Database\Seeders;

use App\Models\Unit;
use Illuminate\Database\Seeder;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Unit::create([
            "id" => 1,
            "abbr" => 'kg',
            "name" => 'Kilogram'
        ]);

        Unit::create([
            "id" => 2,
            "abbr" => 'g',
            "name" => 'Gram'
        ]);

        Unit::create([
            "id" => 3,
            "abbr" => 'L',
            "name" => 'Litre'
        ]);

        Unit::create([
            "id" => 4,
            "abbr" => 'mL',
            "name" => 'Mili Litre'
        ]);

        Unit::create([
            "id" => 5,
            "abbr" => 'lb',
            "name" => 'Pound'
        ]);

        Unit::create([
            "id" => 6,
            "abbr" => 'pc',
            "name" => 'Piece'
        ]);

        Unit::create([
            "id" => 7,
            "abbr" => 'ton',
            "name" => 'Ton'
        ]);
    }
}
