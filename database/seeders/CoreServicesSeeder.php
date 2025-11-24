<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CoreServicesSection;
use App\Models\CoreService;

class CoreServicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // First, clear existing data - disable foreign key checks temporarily
        \DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        CoreService::truncate();
        CoreServicesSection::truncate();
        \DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        // Create the main Core Services section
        $section = CoreServicesSection::create([
            'label' => 'Core Services',
            'heading' => 'Databricks Services We Deliver',
            'description' => 'From data engineering and governance to AI and analytics, we make sure your Databricks investment delivers measurable impact.',
            'is_active' => true,
        ]);

        // Create Core Service Cards with exact original content

        // Card 1: Data Engineering & Modernization
        CoreService::create([
            'core_services_section_id' => $section->id,
            'title' => 'Data Engineering & Modernization',
            'description' => 'Build robust, scalable data pipelines and modernize your data infrastructure with cutting-edge engineering practices.',
            'icon_svg' => 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
            'link_url' => '/services/data-engineering',
            'tags' => [
                'Data Pipelines',
                'Data Orchestration',
                'Data Integration',
                'Data Migration',
                'Data Modernization',
                'Data Lakehouse Consulting'
            ],
            'sort_order' => 1,
            'is_active' => true,
        ]);

        // Card 2: Data Management & Governance
        CoreService::create([
            'core_services_section_id' => $section->id,
            'title' => 'Data Management & Governance',
            'description' => 'Establish comprehensive data governance frameworks and ensure data quality, security, and compliance across your organization.',
            'icon_svg' => 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
            'link_url' => '/services/data-management',
            'tags' => [
                'Data Management Consulting',
                'Cloud Data Management',
                'Data Governance',
                'Data Quality & Observability',
                'Unity Catalog Implementation',
                'Unity Catalog Migration'
            ],
            'sort_order' => 2,
            'is_active' => true,
        ]);

        // Card 3: Data Analytics & Business Intelligence
        CoreService::create([
            'core_services_section_id' => $section->id,
            'title' => 'Data Analytics & Business Intelligence',
            'description' => 'Transform raw data into actionable insights with advanced analytics, visualization, and business intelligence solutions.',
            'icon_svg' => 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
            'link_url' => '/services/data-analytics',
            'tags' => [
                'Data Analytics Consulting',
                'Business Intelligence Consulting',
                'BI Modernization',
                'Data Visualization & Reporting',
                'Databricks SQL Analytics',
                'Advanced Analytics & Predictive Insights'
            ],
            'sort_order' => 3,
            'is_active' => true,
        ]);

        // Card 4: AI & ML Solutions
        CoreService::create([
            'core_services_section_id' => $section->id,
            'title' => 'AI & ML Solutions',
            'description' => 'Leverage artificial intelligence and machine learning to drive innovation, automate processes, and unlock new business opportunities.',
            'icon_svg' => 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
            'link_url' => '/services/ai-ml-solutions',
            'tags' => [
                'AI Strategy & Consulting',
                'GenAI',
                'ML & Predictive Analytics',
                'MLOps & AI Platforms',
                'LLMOps',
                'Enterprise RAG Applications'
            ],
            'sort_order' => 4,
            'is_active' => true,
        ]);

        $this->command->info('Core Services seeded successfully!');
        $this->command->info('- Created 1 Core Services Section');
        $this->command->info('- Created 4 Core Service Cards');
        $this->command->info('- All services are active and properly ordered');
    }
}