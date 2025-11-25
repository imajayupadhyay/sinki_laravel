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
        Schema::create('about_us_approach_steps', function (Blueprint $table) {
            $table->id();
            $table->foreignId('approach_section_id')->constrained('about_us_approach_sections')->onDelete('cascade');
            $table->integer('number');
            $table->string('title');
            $table->text('short_description');
            $table->text('description');
            $table->text('icon_svg');
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
        Schema::dropIfExists('about_us_approach_steps');
    }
};
