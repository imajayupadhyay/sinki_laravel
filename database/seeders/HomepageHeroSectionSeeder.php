<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\HomepageHeroSection;

class HomepageHeroSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HomepageHeroSection::create([
            'heading' => 'We Help You Unlock The Value Of Your Data',
            'paragraph' => 'We turn raw data into intelligence with Databricks. From data foundations to AI adoption, we deliver secure, scalable systems.',
            'cta_text' => 'Schedule Free Consultation',
            'cta_link' => '#calendly-modal',
            'background_image' => null, // Will use the current hardcoded image initially
            'is_active' => true
        ]);
    }
}
