<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleSeeder::class);
        $this->call(UnitSeeder::class);
        if (env('APP_ENV') !== 'production') {
            $this->call(UserSeeder::class);
            $this->call(BrandSeeder::class);
            $this->call(ItemSeeder::class);
            $this->call(CompanyHeadSeeder::class);
        }
    }
}
