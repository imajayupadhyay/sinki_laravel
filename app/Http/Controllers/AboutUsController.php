<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\AboutUsHeroSection;
use App\Models\AboutUsPartnerBadge;
use App\Models\AboutUsStorySection;
use App\Models\AboutUsWhatWeDoSection;
use App\Models\AboutUsApproachSection;
use App\Models\AboutUsLeadershipSection;
use App\Models\AboutUsWhyPartnerSection;
use App\Models\AboutUsCTASection;
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
        $approachSection = AboutUsApproachSection::with(['steps' => function($query) {
            $query->active()->orderBy('sort_order');
        }])->active()->first();
        $leadershipSection = AboutUsLeadershipSection::with(['members' => function($query) {
            $query->active()->orderBy('sort_order');
        }])->active()->first();
        $whyPartnerSection = AboutUsWhyPartnerSection::with(['features' => function($query) {
            $query->active()->orderBy('sort_order');
        }])->active()->first();
        $ctaSection = AboutUsCTASection::active()->first();

        return Inertia::render('AboutUs', [
            'heroSection' => $heroSection,
            'partnerBadge' => $partnerBadge,
            'storySection' => $storySection,
            'whatWeDoSection' => $whatWeDoSection,
            'approachSection' => $approachSection,
            'leadershipSection' => $leadershipSection,
            'whyPartnerSection' => $whyPartnerSection,
            'ctaSection' => $ctaSection
        ]);
    }
}