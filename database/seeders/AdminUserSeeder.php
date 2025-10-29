<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Check if admin user already exists
        $adminEmail = 'ajayupadhyay@gmail.com';

        $existingAdmin = User::where('email', $adminEmail)->first();

        if (!$existingAdmin) {
            User::create([
                'name' => 'Ajay Upadhyay',
                'email' => $adminEmail,
                'email_verified_at' => now(),
                'password' => Hash::make('Ajay@123#'),
            ]);

            $this->command->info('Default admin user created successfully!');
            $this->command->info('Email: ' . $adminEmail);
            $this->command->info('Password: Ajay@123#');
        } else {
            $this->command->info('Admin user already exists with email: ' . $adminEmail);
        }
    }
}
