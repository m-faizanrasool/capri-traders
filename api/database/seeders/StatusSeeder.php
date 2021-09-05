<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Status::create([
            "key" => 'pending',
            "name" => 'Pending'
        ]);

        Status::create([
            "key" => 'accepted',
            "name" => 'Accepted'
        ]);

        Status::create([
            "key" => 'picked',
            "name" => 'Picked'
        ]);

        Status::create([
            "key" => 'delivered',
            "name" => 'Delivered'
        ]);

        Status::create([
            "key" => 'cancelled',
            "name" => 'Cancelled'
        ]);
    }
}
