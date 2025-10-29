<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Create default admin user if it doesn't exist
        $adminEmail = 'ajay.upadhyay@jellyfishtechnologies.com';

        $existingAdmin = User::where('email', $adminEmail)->first();

        if (!$existingAdmin) {
            User::create([
                'name' => 'Ajay Upadhyay',
                'email' => $adminEmail,
                'email_verified_at' => now(),
                'password' => '$2y$12$6rHciLVj5IEdBTOHI2OEEeQScmjYCPTFxMqR3uq2BdeFuW8JI4cc2', // Ajay@99N#
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Remove the admin user if it exists
        $adminEmail = 'ajay.upadhyay@jellyfishtechnologies.com';
        User::where('email', $adminEmail)->delete();
    }
};
