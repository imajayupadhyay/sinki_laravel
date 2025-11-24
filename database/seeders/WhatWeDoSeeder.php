<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\WhatWeDoSection;
use App\Models\WhatWeDoItem;

class WhatWeDoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create the main What We Do section
        $section = WhatWeDoSection::create([
            'label' => 'What We Do',
            'heading' => 'We Simplify Your Databricks Journey End-to-End',
            'description' => 'Wherever you are in your Databricks journey, planning, migrating, or scaling, we help you move faster and with confidence.',
            'is_active' => true
        ]);

        // Create the three service items
        $items = [
            [
                'title' => 'Strategy & Planning',
                'description' => 'Design data & AI roadmaps tailored to your business goals',
                'icon_svg' => '<svg class="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
                'sort_order' => 1,
                'is_active' => true
            ],
            [
                'title' => 'Implementation & Migration',
                'description' => 'Migrate workloads and deploy scalable, reliable data systems',
                'icon_svg' => '<svg class="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
                'sort_order' => 2,
                'is_active' => true
            ],
            [
                'title' => 'Support & Enablement',
                'description' => 'Train teams and optimize Databricks adoption for long-term success',
                'icon_svg' => '<svg class="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',
                'sort_order' => 3,
                'is_active' => true
            ]
        ];

        foreach ($items as $itemData) {
            WhatWeDoItem::create([
                'what_we_do_section_id' => $section->id,
                ...$itemData
            ]);
        }
    }
}
