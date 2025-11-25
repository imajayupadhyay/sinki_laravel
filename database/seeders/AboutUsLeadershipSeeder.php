<?php

namespace Database\Seeders;

use App\Models\AboutUsLeadershipSection;
use App\Models\AboutUsLeadershipMember;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AboutUsLeadershipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create the leadership section
        $leadershipSection = AboutUsLeadershipSection::create([
            'header_tag' => 'OUR LEADERSHIP',
            'title' => 'Visionaries Behind Sinki',
            'description' => 'Our leadership brings years of experience in solving real enterprise data challenges and a shared belief that systems work best when they are intentional, structured, and built for long-term clarity.',
            'background_image' => null, // Will use default background from frontend
            'background_color' => null,
            'is_active' => true
        ]);

        // Create the leadership team members with current content from frontend
        $members = [
            [
                'name' => 'Gaurav Chauhan',
                'position' => 'Co-Founder & CEO',
                'image' => null, // Will use default image path from frontend: '/images/Mr Gaurav Chauhan.png'
                'bio' => 'Experienced leader in enterprise data solutions with a passion for transforming business through strategic data implementation.',
                'linkedin_url' => null,
                'twitter_url' => null,
                'sort_order' => 1
            ],
            [
                'name' => 'Amit Kumar Pandey',
                'position' => 'Co-Founder & CTO',
                'image' => null, // Will use default image path from frontend: '/images/Mr Amit Pandey.png'
                'bio' => 'Technical visionary with deep expertise in Databricks architecture and modern data engineering practices.',
                'linkedin_url' => null,
                'twitter_url' => null,
                'sort_order' => 2
            ],
            [
                'name' => 'Neeraj Kumar',
                'position' => 'Chief Operating Officer',
                'image' => null, // Will use default image path from frontend: '/images/Mr Neeraj Kumar.png'
                'bio' => 'Operations expert focused on scaling data solutions and ensuring seamless client delivery and satisfaction.',
                'linkedin_url' => null,
                'twitter_url' => null,
                'sort_order' => 3
            ]
        ];

        foreach ($members as $memberData) {
            AboutUsLeadershipMember::create([
                'leadership_section_id' => $leadershipSection->id,
                'name' => $memberData['name'],
                'position' => $memberData['position'],
                'image' => $memberData['image'],
                'bio' => $memberData['bio'],
                'linkedin_url' => $memberData['linkedin_url'],
                'twitter_url' => $memberData['twitter_url'],
                'sort_order' => $memberData['sort_order'],
                'is_active' => true
            ]);
        }
    }
}
