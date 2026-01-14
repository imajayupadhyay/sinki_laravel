<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class AssignDefaultRoles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'users:assign-default-roles';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Assign default roles to users who do not have any roles';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Assigning default roles to users without roles...');

        $usersWithoutRoles = User::whereDoesntHave('roles')->get();

        if ($usersWithoutRoles->isEmpty()) {
            $this->info('All users already have roles assigned.');
            return;
        }

        $assigned = 0;
        foreach ($usersWithoutRoles as $user) {
            $user->assignDefaultRole();
            $assigned++;
            $this->line("Assigned role to user: {$user->email}");
        }

        $this->info("Successfully assigned default roles to {$assigned} users.");
    }
}
