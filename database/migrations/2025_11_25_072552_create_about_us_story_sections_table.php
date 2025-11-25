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
        Schema::create('about_us_story_sections', function (Blueprint $table) {
            $table->id();
            $table->string('header_tag')->default('OUR STORY');
            $table->string('title');
            $table->string('subtitle')->nullable();
            $table->json('descriptions');
            $table->string('image_path')->nullable();
            $table->string('image_alt')->nullable();
            $table->string('image_position')->default('left');
            $table->string('background_color')->default('bg-white');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('about_us_story_sections');
    }
};
