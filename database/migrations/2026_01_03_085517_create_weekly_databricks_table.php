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
        Schema::create('weekly_databricks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->longText('content');
            $table->text('excerpt')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->text('meta_keywords')->nullable();
            $table->string('featured_image')->nullable();
            $table->enum('status', ['draft', 'published'])->default('draft');
            $table->unsignedInteger('week_number'); // Week number (1-52)
            $table->unsignedInteger('year'); // Year (e.g., 2024, 2025)
            $table->timestamp('published_at')->nullable();
            $table->timestamps();

            // Index for better performance
            $table->index(['status', 'published_at']);
            $table->index(['year', 'week_number']);
            $table->unique(['year', 'week_number']); // Ensure one article per week per year
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('weekly_databricks');
    }
};
