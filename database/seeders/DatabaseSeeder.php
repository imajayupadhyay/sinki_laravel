<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create permission system first
        $this->call([
            PermissionSystemSeeder::class,
            AdminUserSeeder::class,
            CoreServicesSeeder::class,
        ]);

        // User::factory(10)->create();

        // Commented out test user - using real admin instead
        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
