<?php

namespace App\Http\Controllers;

use App\Models\ServicePage;
use App\Models\Blog;
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

        // Fetch latest published blogs for insights section
        $blogs = Blog::with(['category', 'author'])
            ->published()
            ->orderBy('published_at', 'desc')
            ->limit(3)
            ->get()
            ->map(function ($blog) {
                return [
                    'id' => $blog->id,
                    'title' => $blog->title,
                    'slug' => $blog->slug,
                    'featured_image' => $blog->featured_image,
                    'category' => $blog->category ? [
                        'id' => $blog->category->id,
                        'name' => $blog->category->name,
                        'slug' => $blog->category->slug,
                    ] : null,
                ];
            });

        return Inertia::render('Services/DynamicServicePage', [
            'servicePage' => $servicePage,
            'isPreview' => false,
            'blogs' => $blogs
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
