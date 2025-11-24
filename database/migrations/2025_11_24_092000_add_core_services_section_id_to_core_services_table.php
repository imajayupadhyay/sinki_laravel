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
        Schema::table('core_services', function (Blueprint $table) {
            $table->foreignId('core_services_section_id')->nullable()->after('id')->constrained('core_services_sections')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('core_services', function (Blueprint $table) {
            $table->dropForeign(['core_services_section_id']);
            $table->dropColumn('core_services_section_id');
        });
    }
};