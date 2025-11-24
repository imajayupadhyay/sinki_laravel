<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\WhatSetsUsApartSection;
use App\Models\WhatSetsUsApartItem;

class WhatSetsUsApartSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // First, clear existing data - disable foreign key checks temporarily
        \DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        WhatSetsUsApartItem::truncate();
        WhatSetsUsApartSection::truncate();
        \DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // Create the main What Sets Us Apart section
        $section = WhatSetsUsApartSection::create([
            'label' => 'What Sets Us Apart',
            'heading' => 'Your Databricks Partner, Every Step of the Way',
            'description' => 'We don\'t just implement Databricks. We simplify it, tailor it, and make it deliver real business outcomes.',
            'background_image' => 'heroobannersinki.png',
            'background_image_alt' => 'Background',
            'is_active' => true,
        ]);

        // Create the four feature items based on the current hardcoded data

        // Item 1: We Simplify Databricks
        WhatSetsUsApartItem::create([
            'what_sets_us_apart_section_id' => $section->id,
            'title' => 'We Simplify Databricks',
            'description' => 'Tailored solutions aligned to your business objectives and operating model',
            'icon_svg' => 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
            'sort_order' => 1,
            'is_active' => true,
        ]);

        // Item 2: We Accelerate Adoption
        WhatSetsUsApartItem::create([
            'what_sets_us_apart_section_id' => $section->id,
            'title' => 'We Accelerate Adoption',
            'description' => 'Rapid prioritization and delivery of high-impact use cases to demonstrate value early.',
            'icon_svg' => 'M13 10V3L4 14h7v7l9-11h-7z',
            'sort_order' => 2,
            'is_active' => true,
        ]);

        // Item 3: We Engineer for Scale
        WhatSetsUsApartItem::create([
            'what_sets_us_apart_section_id' => $section->id,
            'title' => 'We Engineer for Scale',
            'description' => 'Architectures designed for performance, governance, and long-term sustainability.',
            'icon_svg' => 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
            'sort_order' => 3,
            'is_active' => true,
        ]);

        // Item 4: We Partner Strategically
        WhatSetsUsApartItem::create([
            'what_sets_us_apart_section_id' => $section->id,
            'title' => 'We Partner Strategically',
            'description' => 'Transparent, collaborative guidance that keeps projects aligned to business goals.',
            'icon_svg' => 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
            'sort_order' => 4,
            'is_active' => true,
        ]);

        $this->command->info('What Sets Us Apart section seeded successfully!');
        $this->command->info('- Created 1 What Sets Us Apart Section');
        $this->command->info('- Created 4 Feature Items');
        $this->command->info('- All items are active and properly ordered');
    }
}
