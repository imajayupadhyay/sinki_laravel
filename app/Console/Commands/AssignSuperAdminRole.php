<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class AssignSuperAdminRole extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:assign-super-admin {email : User email address}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Assign super admin role to a user by email';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $email = $this->argument('email');

        $user = User::where('email', $email)->first();

        if (!$user) {
            $this->error("User with email '{$email}' not found.");
            return 1;
        }

        // Set as admin
        $user->update([
            'is_admin' => true,
            'is_active' => true,
        ]);

        // Also assign super admin role
        $user->assignRole('super_admin');

        $this->info("Super admin role assigned to user: {$user->name} ({$user->email})");
        $this->info("User can now access all admin functions.");

        return 0;
    }
}
