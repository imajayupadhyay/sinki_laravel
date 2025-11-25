<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\AboutUsHeroSection;
use App\Models\AboutUsPartnerBadge;
use App\Models\AboutUsStorySection;
use App\Models\AboutUsWhatWeDoSection;
use Inertia\Inertia;

class AboutUsController extends Controller
{
    public function index()
    {
        // Get the active sections from the database
        $heroSection = AboutUsHeroSection::active()->first();
        $partnerBadge = AboutUsPartnerBadge::active()->first();
        $storySection = AboutUsStorySection::active()->first();
        $whatWeDoSection = AboutUsWhatWeDoSection::with(['items' => function($query) {
            $query->active()->orderBy('sort_order');
        }])->active()->first();

        return Inertia::render('AboutUs', [
            'heroSection' => $heroSection,
            'partnerBadge' => $partnerBadge,
            'storySection' => $storySection,
            'whatWeDoSection' => $whatWeDoSection
        ]);
    }
}