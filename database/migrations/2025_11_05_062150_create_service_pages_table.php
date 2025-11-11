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
        Schema::create('service_pages', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('subtitle');
            $table->longText('description')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->text('meta_keywords')->nullable();
            $table->string('hero_background_image')->nullable();
            $table->string('hero_background_color')->default('#121212');
            $table->text('hero_overlay_gradient')->nullable();
            $table->string('cta_text')->default('Talk To Our Experts');
            $table->string('cta_link')->nullable();
            $table->json('sections')->nullable(); // Store dynamic sections configuration
            $table->json('services_data')->nullable(); // Store services grid data
            $table->json('faqs_data')->nullable(); // Store FAQs data
            $table->json('custom_content')->nullable(); // Store any custom content
            $table->enum('status', ['draft', 'published'])->default('draft');
            $table->boolean('is_featured')->default(false);
            $table->integer('sort_order')->default(0);
            $table->timestamps();

            $table->index('slug');
            $table->index('status');
            $table->index('is_featured');
            $table->index('sort_order');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_pages');
    }
};
