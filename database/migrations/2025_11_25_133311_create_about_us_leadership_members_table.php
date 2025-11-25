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
        Schema::create('about_us_leadership_members', function (Blueprint $table) {
            $table->id();
            $table->foreignId('leadership_section_id')->constrained('about_us_leadership_sections')->onDelete('cascade');
            $table->string('name');
            $table->string('position');
            $table->string('image')->nullable();
            $table->text('bio')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('twitter_url')->nullable();
            $table->integer('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('about_us_leadership_members');
    }
};
