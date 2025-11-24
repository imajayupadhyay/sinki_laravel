<?php

namespace Database\Seeders;

use App\Models\OurApproachSection;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OurApproachSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        OurApproachSection::create([
            'label' => 'Our Approach',
            'heading' => 'How We Make Databricks Work for You',
            'description' => 'Our proven 3-step approach ensures Databricks adapts to your business needs, not the other way around.',
            'image_path' => null, // Will be set when admin uploads image
            'image_alt' => 'Our 3-Step Approach',
            'is_active' => true
        ]);
    }
}
