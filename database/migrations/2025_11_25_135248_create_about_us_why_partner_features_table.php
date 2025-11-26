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
        Schema::create('about_us_why_partner_features', function (Blueprint $table) {
            $table->id();
            $table->foreignId('why_partner_section_id')->constrained('about_us_why_partner_sections')->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->string('icon')->nullable(); // For potential icon customization
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
        Schema::dropIfExists('about_us_why_partner_features');
    }
};
