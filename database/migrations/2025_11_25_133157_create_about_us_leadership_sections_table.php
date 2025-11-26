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
        Schema::create('about_us_leadership_sections', function (Blueprint $table) {
            $table->id();
            $table->string('header_tag');
            $table->string('title');
            $table->text('description');
            $table->string('background_image')->nullable();
            $table->string('background_color')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('about_us_leadership_sections');
    }
};
