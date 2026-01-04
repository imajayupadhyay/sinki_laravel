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
            // Add new column for weekly databricks category
            $table->foreignId('weekly_databricks_category_id')->nullable()->after('status')->constrained()->onDelete('set null');

            // Drop old category foreign key if it exists
            $table->dropForeign(['category_id']);
            $table->dropColumn('category_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('weekly_databricks', function (Blueprint $table) {
            // Add back the old category_id column
            $table->foreignId('category_id')->nullable()->after('status')->constrained()->onDelete('set null');

            // Drop the weekly databricks category foreign key
            $table->dropForeign(['weekly_databricks_category_id']);
            $table->dropColumn('weekly_databricks_category_id');
        });
    }
};
