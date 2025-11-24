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
        Schema::create('what_sets_us_apart_sections', function (Blueprint $table) {
            $table->id();
            $table->string('label')->default('What Sets Us Apart');
            $table->string('heading')->default('Your Databricks Partner, Every Step of the Way');
            $table->text('description')->default('We don\'t just implement Databricks. We simplify it, tailor it, and make it deliver real business outcomes.');
            $table->string('background_image')->nullable()->default('heroobannersinki.png');
            $table->string('background_image_alt')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('what_sets_us_apart_sections');
    }
};
