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
        Schema::table('weekly_databricks', function (Blueprint $table) {
            $table->foreignId('category_id')->nullable()->after('status')->constrained()->onDelete('set null');
            $table->foreignId('author_id')->nullable()->after('category_id')->constrained('users')->onDelete('cascade');
        });

        // Set a default author_id for existing records (first user)
        $firstUser = \App\Models\User::first();
        if ($firstUser) {
            \App\Models\WeeklyDatabricks::whereNull('author_id')->update(['author_id' => $firstUser->id]);
        }

        // Make author_id non-nullable after setting default values
        Schema::table('weekly_databricks', function (Blueprint $table) {
            $table->foreignId('author_id')->nullable(false)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('weekly_databricks', function (Blueprint $table) {
            $table->dropForeign(['author_id']);
            $table->dropForeign(['category_id']);
            $table->dropColumn(['category_id', 'author_id']);
        });
    }
};
