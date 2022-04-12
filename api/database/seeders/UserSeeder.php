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
            "name" => 'Developer',
            "email" => 'faizan@capri.com',
            "phone" => '+923016336171',
            "password" => 'boss',
        ]);

        User::create([
            "id" => 2,
            "role_id" => 1,
            "is_super_admin" => 1,
            "name" => 'client',
            "email" => 'client@capri.com',
            "phone" => '+923001234567',
            "password" => 'client',
        ]);
    }
}
