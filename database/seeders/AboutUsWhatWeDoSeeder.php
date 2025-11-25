<?php

namespace Database\Seeders;

use App\Models\AboutUsWhatWeDoSection;
use App\Models\AboutUsWhatWeDoItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutUsWhatWeDoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create or update the main section
        $section = AboutUsWhatWeDoSection::updateOrCreate(
            ['id' => 1],
            [
                'header_tag' => 'HOW WE HELP',
                'title' => 'What We Do',
                'subtitle' => 'We help enterprises harness the full power of Databricks to unify data, analytics, and AI.',
                'background_image' => null, // Will use default static image
                'is_active' => true
            ]
        );

        // Service items data from the component
        $services = [
            [
                'title' => 'Data Engineering & Modernization',
                'description' => 'Design and build resilient lakehouse architectures & automated pipelines that deliver reliable, analytics-ready data.',
                'icon_svg' => '<path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>',
                'sort_order' => 1
            ],
            [
                'title' => 'Data Management & Governance',
                'description' => 'Establish strong governance with Unity Catalog-aligned lineage, metadata management, and compliance automation.',
                'icon_svg' => '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
                'sort_order' => 2
            ],
            [
                'title' => 'Data Analytics & Business Intelligence',
                'description' => 'Transform raw data into interactive dashboards, KPIs, and insights that drive faster decisions.',
                'icon_svg' => '<path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>',
                'sort_order' => 3
            ],
            [
                'title' => 'AI & ML Solutions',
                'description' => 'Operationalize AI with scalable, production-ready models that enable prediction, automation, and continuous improvement.',
                'icon_svg' => '<path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>',
                'sort_order' => 4
            ]
        ];

        // Create service items
        foreach ($services as $service) {
            AboutUsWhatWeDoItem::updateOrCreate(
                [
                    'what_we_do_section_id' => $section->id,
                    'title' => $service['title']
                ],
                [
                    'description' => $service['description'],
                    'icon_svg' => $service['icon_svg'],
                    'sort_order' => $service['sort_order'],
                    'is_active' => true
                ]
            );
        }
    }
}
