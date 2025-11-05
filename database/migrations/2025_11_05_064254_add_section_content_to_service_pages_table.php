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
        Schema::table('service_pages', function (Blueprint $table) {
            // Image Content Section fields
            $table->string('image_content_title')->nullable();
            $table->string('image_content_subtitle')->nullable();
            $table->json('image_content_descriptions')->nullable();
            $table->string('image_content_image')->nullable();
            $table->string('image_content_cta_text')->nullable();

            // Services Grid Section
            $table->string('services_grid_title')->nullable();
            $table->text('services_grid_description')->nullable();

            // Platforms Section
            $table->string('platforms_title')->nullable();
            $table->text('platforms_description')->nullable();

            // Why Choose Us Section
            $table->string('why_choose_title')->nullable();
            $table->text('why_choose_description')->nullable();

            // Service CTA Section
            $table->string('service_cta_title')->nullable();
            $table->text('service_cta_description')->nullable();
            $table->string('service_cta_text')->nullable();
            $table->string('service_cta_image')->nullable();

            // Our Approach Section (custom content)
            $table->json('our_approach_content')->nullable();

            // Key Benefits Section (custom content)
            $table->json('key_benefits_content')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('service_pages', function (Blueprint $table) {
            $table->dropColumn([
                'image_content_title',
                'image_content_subtitle',
                'image_content_descriptions',
                'image_content_image',
                'image_content_cta_text',
                'services_grid_title',
                'services_grid_description',
                'platforms_title',
                'platforms_description',
                'why_choose_title',
                'why_choose_description',
                'service_cta_title',
                'service_cta_description',
                'service_cta_text',
                'service_cta_image',
                'our_approach_content',
                'key_benefits_content'
            ]);
        });
    }
};
