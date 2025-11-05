<?php

namespace App\Http\Controllers;

use App\Models\ServicePage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServicePageController extends Controller
{
    /**
     * Display the specified service page.
     */
    public function show(string $slug)
    {
        $servicePage = ServicePage::where('slug', $slug)
            ->published()
            ->firstOrFail();

        return Inertia::render('Services/DynamicServicePage', [
            'servicePage' => $servicePage,
            'isPreview' => false
        ]);
    }

    /**
     * Display all published service pages.
     */
    public function index()
    {
        $servicePages = ServicePage::published()
            ->featured()
            ->ordered()
            ->select(['id', 'title', 'slug', 'subtitle', 'hero_background_image'])
            ->get();

        return Inertia::render('Services/Index', [
            'servicePages' => $servicePages
        ]);
    }
}
