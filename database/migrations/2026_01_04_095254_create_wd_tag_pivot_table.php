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
        Schema::create('wd_tag_pivot', function (Blueprint $table) {
            $table->id();
            $table->foreignId('weekly_databricks_id')->constrained('weekly_databricks')->onDelete('cascade');
            $table->foreignId('weekly_databricks_tag_id')->constrained('weekly_databricks_tags')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wd_tag_pivot');
    }
};
