<?php

namespace Database\Seeders;

use App\Models\AboutUsWhyPartnerSection;
use App\Models\AboutUsWhyPartnerFeature;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutUsWhyPartnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create the why partner section
        $whyPartnerSection = AboutUsWhyPartnerSection::create([
            'title' => 'Why Partner With Us',
            'subtitle' => 'We combine strategy, engineering, and agility to turn your data vision into a measurable business impact.',
            'background_color' => null,
            'background_image' => null, // Will use default white background
            'is_active' => true
        ]);

        // Create the features with current content from frontend
        $features = [
            [
                'title' => 'Certified Databricks Expertise',
                'description' => 'Our certified specialists bring deep technical and business understanding of the Databricks ecosystem.',
                'icon' => null,
                'sort_order' => 1
            ],
            [
                'title' => 'End-to-End Implementation',
                'description' => 'From data foundation to AI integration, we support your journey across every stage, design, build, and maintain.',
                'icon' => null,
                'sort_order' => 2
            ],
            [
                'title' => 'Tailored Data Solutions',
                'description' => 'Every architecture, workflow, and integration is designed around your unique data and business needs.',
                'icon' => null,
                'sort_order' => 3
            ],
            [
                'title' => 'Scalable & Secure Delivery',
                'description' => 'We ensure your Databricks environment is performance-ready, compliant, and built for long-term growth.',
                'icon' => null,
                'sort_order' => 4
            ],
            [
                'title' => 'Collaborative Partnership',
                'description' => 'We work as an extension of your team, transparent, proactive, and committed to measurable outcomes.',
                'icon' => null,
                'sort_order' => 5
            ],
            [
                'title' => 'Continuous Improvement',
                'description' => 'Beyond delivery, we help you evolve, refining pipelines, models, and data strategy for lasting value.',
                'icon' => null,
                'sort_order' => 6
            ]
        ];

        foreach ($features as $featureData) {
            AboutUsWhyPartnerFeature::create([
                'why_partner_section_id' => $whyPartnerSection->id,
                'title' => $featureData['title'],
                'description' => $featureData['description'],
                'icon' => $featureData['icon'],
                'sort_order' => $featureData['sort_order'],
                'is_active' => true
            ]);
        }
    }
}
