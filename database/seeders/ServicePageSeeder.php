<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServicePageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $servicePages = [
            [
                'title' => 'AI/ML Consulting & Implementation',
                'slug' => 'ai-ml-consulting',
                'subtitle' => 'Transform your business with AI and Machine Learning solutions that deliver real results.',
                'description' => 'Our AI/ML consulting services help organizations implement intelligent automation, predictive analytics, and data-driven decision making systems.',
                'meta_title' => 'AI/ML Consulting & Implementation Services',
                'meta_description' => 'Expert AI and Machine Learning consulting services to transform your business with intelligent automation and predictive analytics.',
                'meta_keywords' => 'AI consulting, ML implementation, machine learning, artificial intelligence, automation',
                'hero_background_image' => '/images/herobannerservice.webp',
                'hero_background_color' => '#121212',
                'hero_overlay_gradient' => 'linear-gradient(180deg, rgba(18,18,18,0.4) 0%, rgba(18,18,18,0.4) 100%)',
                'cta_text' => 'Get AI/ML Strategy',
                'cta_link' => '/contact',
                'sections' => \App\Models\ServicePage::getDefaultSections(),
                'services_data' => [
                    [
                        'title' => 'AI Strategy & Roadmap',
                        'description' => 'Develop comprehensive AI strategies aligned with your business objectives, including technology assessment, use case identification, and implementation roadmaps.',
                        'icon' => '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
                    ],
                    [
                        'title' => 'Machine Learning Models',
                        'description' => 'Build, train, and deploy custom ML models for predictive analytics, classification, regression, and recommendation systems.',
                        'icon' => '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
                    ],
                    [
                        'title' => 'Computer Vision',
                        'description' => 'Implement image recognition, object detection, and visual analytics solutions for automated inspection and monitoring.',
                        'icon' => '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'
                    ]
                ],
                'faqs_data' => [
                    [
                        'question' => 'How long does an AI implementation take?',
                        'answer' => 'AI implementations typically range from 3-6 months for pilot projects to 12-18 months for enterprise-wide deployments, depending on complexity and scope.'
                    ],
                    [
                        'question' => 'Do you provide ongoing AI model maintenance?',
                        'answer' => 'Yes, we offer comprehensive MLOps services including model monitoring, retraining, performance optimization, and continuous improvement.'
                    ]
                ],
                'status' => 'published',
                'is_featured' => true,
                'sort_order' => 1
            ],
            [
                'title' => 'Cloud Migration & Architecture',
                'slug' => 'cloud-migration-architecture',
                'subtitle' => 'Seamlessly migrate to the cloud with enterprise-grade architecture and security.',
                'description' => 'Our cloud migration services ensure smooth transitions with minimal downtime, optimized costs, and enhanced scalability.',
                'meta_title' => 'Cloud Migration & Architecture Services',
                'meta_description' => 'Expert cloud migration and architecture services for AWS, Azure, and GCP with enterprise-grade security.',
                'meta_keywords' => 'cloud migration, cloud architecture, AWS, Azure, GCP, cloud consulting',
                'hero_background_image' => '/images/herobannerservice.webp',
                'hero_background_color' => '#1a202c',
                'cta_text' => 'Start Migration',
                'cta_link' => '/contact',
                'sections' => \App\Models\ServicePage::getDefaultSections(),
                'services_data' => [
                    [
                        'title' => 'Cloud Strategy & Assessment',
                        'description' => 'Comprehensive analysis of your current infrastructure and development of cloud adoption strategies tailored to your business needs.',
                        'icon' => '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>'
                    ],
                    [
                        'title' => 'Application Migration',
                        'description' => 'Migrate applications using lift-and-shift, re-platforming, or cloud-native refactoring approaches based on your requirements.',
                        'icon' => '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>'
                    ]
                ],
                'faqs_data' => [
                    [
                        'question' => 'How do you minimize downtime during migration?',
                        'answer' => 'We use phased migration approaches, parallel running systems, and automated rollback procedures to ensure minimal disruption to your operations.'
                    ]
                ],
                'status' => 'published',
                'is_featured' => true,
                'sort_order' => 2
            ]
        ];

        foreach ($servicePages as $pageData) {
            \App\Models\ServicePage::create($pageData);
        }
    }
}
