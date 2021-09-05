<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "id" => 1,
            "role_id" => 1,
            "is_super_admin" => 1,
            "name" => 'Admin',
            "email" => 'admin@dastak.com',
            "phone" => '+923001234567',
            "password" => 'admin',
        ]);

        User::create([
            "id" => 2,
            "role_id" => 2,
            "name" => 'Vendor',
            "email" => 'vendor@dastak.com',
            "phone" => '+923001234568',
            "password" => 'vendor',
        ]);

        User::create([
            "id" => 3,
            "role_id" => 3,
            "name" => 'Rider',
            "email" => 'rider@dastak.com',
            "phone" => '+923001234569',
            "password" => 'rider',
        ]);

        User::create([
            "id" => 4,
            "role_id" => 4,
            "name" => 'Customer',
            "email" => 'customer@dastak.com',
            "phone" => '+923001234560',
            "password" => 'customer',
        ]);
    }
}
