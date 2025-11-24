<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PlatformsSection;
use App\Models\Platform;

class PlatformsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // First, clear existing data - disable foreign key checks temporarily
        \DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Platform::truncate();
        PlatformsSection::truncate();
        \DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // Create the main Platforms section
        $section = PlatformsSection::create([
            'label' => 'Platforms We Work With',
            'heading' => 'Built on the Platforms You Trust',
            'description' => 'We bring Databricks to life on the enterprise platforms you already rely on.',
            'is_active' => true,
        ]);

        // Create Platform entries based on the current structure

        // Row 1 - Databricks (single platform)
        Platform::create([
            'platforms_section_id' => $section->id,
            'name' => 'Databricks',
            'image_path' => 'databricks.png',
            'row_number' => 1,
            'sort_order' => 1,
            'is_active' => true,
        ]);

        // Row 2 - Three platforms (Azure, Google Cloud, AWS)
        Platform::create([
            'platforms_section_id' => $section->id,
            'name' => 'Microsoft Azure',
            'image_path' => 'azure-logo.png',
            'row_number' => 2,
            'sort_order' => 1,
            'is_active' => true,
        ]);

        Platform::create([
            'platforms_section_id' => $section->id,
            'name' => 'Google Cloud',
            'image_path' => 'Google-Cloud.png',
            'row_number' => 2,
            'sort_order' => 2,
            'is_active' => true,
        ]);

        Platform::create([
            'platforms_section_id' => $section->id,
            'name' => 'AWS',
            'image_path' => 'aws-logo.png',
            'row_number' => 2,
            'sort_order' => 3,
            'is_active' => true,
        ]);

        // Row 3 - Two platforms (Power BI, Tableau)
        Platform::create([
            'platforms_section_id' => $section->id,
            'name' => 'Power BI',
            'image_path' => 'Power-Bi-Logo.png',
            'row_number' => 3,
            'sort_order' => 1,
            'is_active' => true,
        ]);

        Platform::create([
            'platforms_section_id' => $section->id,
            'name' => 'Tableau',
            'image_path' => 'Tableau.png',
            'row_number' => 3,
            'sort_order' => 2,
            'is_active' => true,
        ]);

        $this->command->info('Platforms seeded successfully!');
        $this->command->info('- Created 1 Platforms Section');
        $this->command->info('- Created 6 Platform entries across 3 rows');
        $this->command->info('- All platforms are active and properly ordered');
    }
}
