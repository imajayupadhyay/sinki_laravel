<?php

namespace Database\Seeders;

use App\Models\AboutUsCTASection;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutUsCTASeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create the CTA section with current content from frontend
        AboutUsCTASection::create([
            'title' => 'Wherever you are in your data journey, we can<br />help you move faster.',
            'description' => 'We\'ll help you adopt, scale, and succeed with Databricks.',
            'cta_text' => 'Start A Conversation',
            'cta_link' => '/contact',
            'background_image' => null, // Will use default /images/cta.webp from frontend
            'background_color' => null,
            'is_active' => true
        ]);
    }
}
