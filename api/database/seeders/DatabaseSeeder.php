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
        $this->call(StatusSeeder::class);
        $this->call(NotificationSeeder::class);
        if (env('APP_ENV') !== 'production') {
            $this->call(UserSeeder::class);
            $this->call(CategorySeeder::class);
            $this->call(BrandSeeder::class);
            $this->call(ProductSeeder::class);
        }
    }
}
