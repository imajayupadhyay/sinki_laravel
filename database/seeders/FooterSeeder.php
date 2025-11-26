<?php

namespace Database\Seeders;

use App\Models\FooterContent;
use App\Models\FooterLink;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FooterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create footer content
        FooterContent::firstOrCreate(
            ['is_active' => true],
            [
                'logo_url' => '/images/sinkidarkmode.png',
                'description' => 'Data & AI That Drives Real Business Impact',
                'copyright_text' => 'All Rights Reserved.',
                'is_active' => true
            ]
        );

        // Create quick links
        $quickLinks = [
            ['name' => 'Company', 'url' => '#company', 'section' => 'quick_links', 'order' => 1],
            ['name' => 'Insights', 'url' => '#insights', 'section' => 'quick_links', 'order' => 2],
            ['name' => 'Industries', 'url' => '#industries', 'section' => 'quick_links', 'order' => 3],
            ['name' => 'Contact Us', 'url' => '/contact', 'section' => 'quick_links', 'order' => 4],
        ];

        // Create services links
        $servicesLinks = [
            ['name' => 'Data Engineering & Modernization', 'url' => '#services', 'section' => 'services', 'order' => 1],
            ['name' => 'Data Management & Governance', 'url' => '#services', 'section' => 'services', 'order' => 2],
            ['name' => 'Data Analytics & Business Intelligence', 'url' => '#services', 'section' => 'services', 'order' => 3],
            ['name' => 'AI & ML Solutions', 'url' => '#services', 'section' => 'services', 'order' => 4],
        ];

        // Create bottom links
        $bottomLinks = [
            ['name' => 'Privacy Policy', 'url' => '/privacy-policy', 'section' => 'bottom_links', 'order' => 1],
            ['name' => 'Terms & Conditions', 'url' => '/terms-and-conditions', 'section' => 'bottom_links', 'order' => 2],
        ];

        // Insert all links
        foreach ([$quickLinks, $servicesLinks, $bottomLinks] as $linksGroup) {
            foreach ($linksGroup as $link) {
                FooterLink::firstOrCreate(
                    ['name' => $link['name'], 'section' => $link['section']],
                    array_merge($link, ['is_active' => true])
                );
            }
        }
    }
}
