<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Create permissions table
        Schema::create('permissions', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique(); // e.g., 'dashboard', 'users', 'blogs', etc.
            $table->string('display_name'); // e.g., 'Dashboard Management', 'User Management'
            $table->text('description')->nullable();
            $table->string('module'); // Group permissions by module/section
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // Create permission actions table (read, write, delete)
        Schema::create('permission_actions', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // 'read', 'write', 'delete'
            $table->string('display_name'); // 'View', 'Create/Edit', 'Delete'
            $table->timestamps();
        });

        // Create user permissions table (many-to-many with actions)
        Schema::create('user_permissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('permission_id')->constrained()->onDelete('cascade');
            $table->foreignId('permission_action_id')->constrained()->onDelete('cascade');
            $table->boolean('is_granted')->default(true);
            $table->timestamp('granted_at')->nullable();
            $table->foreignId('granted_by')->nullable()->constrained('users')->onDelete('set null');
            $table->timestamps();

            // Ensure unique combination of user, permission and action
            $table->unique(['user_id', 'permission_id', 'permission_action_id'], 'user_permission_action_unique');
        });

        // Create roles table for future expansion
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('display_name');
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // Create role permissions table
        Schema::create('role_permissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('role_id')->constrained()->onDelete('cascade');
            $table->foreignId('permission_id')->constrained()->onDelete('cascade');
            $table->foreignId('permission_action_id')->constrained()->onDelete('cascade');
            $table->timestamps();

            $table->unique(['role_id', 'permission_id', 'permission_action_id'], 'role_permission_action_unique');
        });

        // Create user roles table
        Schema::create('user_roles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('role_id')->constrained()->onDelete('cascade');
            $table->timestamp('assigned_at')->nullable();
            $table->foreignId('assigned_by')->nullable()->constrained('users')->onDelete('set null');
            $table->timestamps();

            $table->unique(['user_id', 'role_id']);
        });

        // Add is_admin and is_active fields to users table
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('is_admin')->default(false)->after('email_verified_at');
            $table->boolean('is_active')->default(true)->after('is_admin');
            $table->timestamp('last_login_at')->nullable()->after('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['is_admin', 'is_active', 'last_login_at']);
        });

        Schema::dropIfExists('user_roles');
        Schema::dropIfExists('role_permissions');
        Schema::dropIfExists('roles');
        Schema::dropIfExists('user_permissions');
        Schema::dropIfExists('permission_actions');
        Schema::dropIfExists('permissions');
    }
};
