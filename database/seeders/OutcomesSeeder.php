<?php

namespace Database\Seeders;

use App\Models\OutcomesSection;
use App\Models\OutcomesItem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OutcomesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create the outcomes section
        $outcomesSection = OutcomesSection::create([
            'label' => 'Outcomes You Can Expect',
            'heading' => 'Real Results You\'ll Achieve With Us',
            'description' => 'Think outcomes, not overhead. Our expertise ensures Databricks delivers exactly what you need.',
            'is_active' => true
        ]);

        // Create the outcome items
        $outcomes = [
            [
                'title' => 'Smarter, Faster Decisions',
                'description' => 'Actionable insights that drive real business outcomes',
                'icon_svg' => '<svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
                'sort_order' => 1
            ],
            [
                'title' => 'Faster Time to Value',
                'description' => 'Achieve measurable results in weeks, not months',
                'icon_svg' => '<svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
                'sort_order' => 2
            ],
            [
                'title' => 'Optimized Spend',
                'description' => 'Reduce costs across Databricks and cloud infrastructure',
                'icon_svg' => '<svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
                'sort_order' => 3
            ],
            [
                'title' => 'Modern, Efficient Data Platform',
                'description' => 'Clean, governed, and ready for enterprise growth',
                'icon_svg' => '<svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>',
                'sort_order' => 4
            ],
            [
                'title' => 'AI On Demand',
                'description' => 'Scalable, practical AI solutions available when you need them',
                'icon_svg' => '<svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>',
                'sort_order' => 5
            ],
            [
                'title' => 'Streamlined Governance',
                'description' => 'Security and compliance integrated from day one',
                'icon_svg' => '<svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
                'sort_order' => 6
            ]
        ];

        foreach ($outcomes as $outcome) {
            OutcomesItem::create([
                'outcomes_section_id' => $outcomesSection->id,
                'title' => $outcome['title'],
                'description' => $outcome['description'],
                'icon_svg' => $outcome['icon_svg'],
                'sort_order' => $outcome['sort_order'],
                'is_active' => true
            ]);
        }
    }
}
