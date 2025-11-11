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
            $table->string('key_benefits_title')->nullable()->after('our_approach_content');
            $table->text('key_benefits_description')->nullable()->after('key_benefits_title');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('service_pages', function (Blueprint $table) {
            $table->dropColumn(['key_benefits_title', 'key_benefits_description']);
        });
    }
};
