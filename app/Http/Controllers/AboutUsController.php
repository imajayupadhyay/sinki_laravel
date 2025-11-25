<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\AboutUsHeroSection;
use Inertia\Inertia;

class AboutUsController extends Controller
{
    public function index()
    {
        // Get the active hero section from the database
        $heroSection = AboutUsHeroSection::active()->first();

        return Inertia::render('AboutUs', [
            'heroSection' => $heroSection
        ]);
    }
}