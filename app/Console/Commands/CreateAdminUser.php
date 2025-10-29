<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateAdminUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:create {--reset : Reset existing admin user}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create or reset the default admin user';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $adminEmail = 'ajay.upadhyay@jellyfishtechnologies.com';
        $adminName = 'Ajay Upadhyay';
        $adminPassword = 'Ajay@99N#';

        $existingAdmin = User::where('email', $adminEmail)->first();

        if ($existingAdmin && !$this->option('reset')) {
            $this->info('Admin user already exists with email: ' . $adminEmail);
            $this->info('Use --reset flag to reset the password: php artisan admin:create --reset');
            return;
        }

        if ($existingAdmin && $this->option('reset')) {
            // Update existing admin
            $existingAdmin->update([
                'name' => $adminName,
                'password' => Hash::make($adminPassword),
                'email_verified_at' => now(),
            ]);
            $this->info('Admin user password has been reset!');
        } else {
            // Create new admin
            User::create([
                'name' => $adminName,
                'email' => $adminEmail,
                'email_verified_at' => now(),
                'password' => Hash::make($adminPassword),
            ]);
            $this->info('Default admin user created successfully!');
        }

        $this->info('Admin Credentials:');
        $this->info('Email: ' . $adminEmail);
        $this->info('Password: ' . $adminPassword);
        $this->warn('Please change this password after first login for security!');
    }
}
