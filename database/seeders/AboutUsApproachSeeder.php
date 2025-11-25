<?php

namespace Database\Seeders;

use App\Models\AboutUsApproachSection;
use App\Models\AboutUsApproachStep;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutUsApproachSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create the approach section
        $approachSection = AboutUsApproachSection::create([
            'header_tag' => 'HOW WE WORK',
            'title' => 'Our Data-First Approach',
            'subtitle' => 'How We Transform Your Data Vision Into Reality',
            'cta_text' => 'Book A Discovery Session',
            'cta_link' => null,
            'background_color' => 'bg-white',
            'is_active' => true
        ]);

        // Create the approach steps with current content from frontend
        $steps = [
            [
                'number' => 1,
                'title' => 'DEFINE',
                'short_description' => 'We start by getting clear on what you need.',
                'description' => 'We map your business goals, challenges, and desired outcomes so every solution is aligned from day one, no assumptions, no misdirection.',
                'icon_svg' => '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>',
                'sort_order' => 1
            ],
            [
                'number' => 2,
                'title' => 'BUILD',
                'short_description' => 'We engineer with purpose and precision.',
                'description' => 'From data platforms and pipelines to BI and AI models, our Databricks-certified team builds reliable, scalable solutions using modern architecture and hands-on engineering.',
                'icon_svg' => '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>',
                'sort_order' => 2
            ],
            [
                'number' => 3,
                'title' => 'ELEVATE',
                'short_description' => 'Delivery is only the starting point.',
                'description' => 'We help you operationalize, adopt, optimize, and extend your data capabilities, ensuring long-term value and continuous improvement.',
                'icon_svg' => '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>',
                'sort_order' => 3
            ]
        ];

        foreach ($steps as $stepData) {
            AboutUsApproachStep::create([
                'approach_section_id' => $approachSection->id,
                'number' => $stepData['number'],
                'title' => $stepData['title'],
                'short_description' => $stepData['short_description'],
                'description' => $stepData['description'],
                'icon_svg' => $stepData['icon_svg'],
                'sort_order' => $stepData['sort_order'],
                'is_active' => true
            ]);
        }
    }
}
