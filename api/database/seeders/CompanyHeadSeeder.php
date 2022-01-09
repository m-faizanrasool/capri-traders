<?php

namespace Database\Seeders;

use App\Models\CompanyHead;
use Illuminate\Database\Seeder;

class CompanyHeadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CompanyHead::create([
            'id' => 1,
            'name' => 'Capri Traders'
        ]);
        CompanyHead::create([
            'id' => 2,
            'name' => 'Company Head 2'
        ]);
        CompanyHead::create([
            'id' => 3,
            'name' => 'Company Head 3'
        ]);
    }
}
