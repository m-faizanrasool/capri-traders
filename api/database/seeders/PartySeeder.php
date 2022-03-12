<?php

namespace Database\Seeders;

use App\Models\Party;
use Illuminate\Database\Seeder;

class PartySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Party::create([
            'id' => 1,
            'name' => 'Qasim Traders'
        ]);
        Party::create([
            'id' => 2,
            'name' => 'Party 2'
        ]);
        Party::create([
            'id' => 3,
            'name' => 'Party 3'
        ]);
    }
}
