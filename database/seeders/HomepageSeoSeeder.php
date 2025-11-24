<?php

namespace Database\Seeders;

use App\Models\HomepageSeoSetting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HomepageSeoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HomepageSeoSetting::create([
            'title' => 'Sinki.ai: Your Databricks Strategy & Innovation Partner',
            'description' => 'At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes.',
            'keywords' => 'Databricks, Data Analytics, AI Solutions, Business Intelligence, Data Strategy, Data Engineering, Machine Learning, Big Data',
            'og_title' => 'Sinki.ai - Databricks Strategy & Innovation Partner',
            'og_description' => 'Transform your business with Databricks. We help organizations unify data, accelerate analytics, and deliver AI-powered outcomes.',
            'og_url' => 'https://www.sinki.ai',
            'twitter_card' => 'summary_large_image',
            'twitter_title' => 'Sinki.ai - Your Databricks Innovation Partner',
            'twitter_description' => 'Unlock the value of your data with Databricks. Expert strategy, implementation, and optimization services.',
            'custom_head_tags' => '<meta name="robots" content="index, follow">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="author" content="Sinki.ai">
<link rel="canonical" href="https://www.sinki.ai/">',
            'is_active' => true
        ]);
    }
}
