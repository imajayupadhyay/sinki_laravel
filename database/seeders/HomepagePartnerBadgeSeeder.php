<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\HomepagePartnerBadge;

class HomepagePartnerBadgeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HomepagePartnerBadge::create([
            'text' => 'An Official Databricks Partner',
            'logo_image' => null, // Will use the current hardcoded image initially
            'logo_alt' => 'Databricks Logo',
            'is_active' => true
        ]);
    }
}
