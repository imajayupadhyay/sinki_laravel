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
        Schema::create('our_approach_sections', function (Blueprint $table) {
            $table->id();
            $table->string('label');
            $table->string('heading');
            $table->text('description');
            $table->string('image_path')->nullable();
            $table->string('image_alt')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('our_approach_sections');
    }
};
