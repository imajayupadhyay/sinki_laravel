<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\SubscribeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

// Home Page Route
Route::get('/', function () {
    // Fetch latest 2 published blogs for Insights & Resources section
    $latestBlogs = \App\Models\Blog::with(['category', 'author'])
        ->published()
        ->orderBy('published_at', 'desc')
        ->limit(2)
        ->get()
        ->map(function ($blog) {
            return [
                'id' => $blog->id,
                'title' => $blog->title,
                'slug' => $blog->slug,
                'excerpt' => $blog->excerpt ?: substr(strip_tags($blog->content), 0, 150) . '...',
                'featured_image' => $blog->featured_image,
                'category' => $blog->category ? [
                    'name' => $blog->category->name,
                    'slug' => $blog->category->slug,
                ] : null,
                'published_at' => $blog->published_at->format('M d, Y'),
            ];
        });

    // Fetch homepage hero section data
    $heroSection = \App\Models\HomepageHeroSection::active()->first();

    // Fetch homepage partner badge data
    $partnerBadge = \App\Models\HomepagePartnerBadge::active()->first();

    // Fetch what we do section data with items
    $whatWeDoSection = \App\Models\WhatWeDoSection::with(['activeItems'])->active()->first();

    // Fetch outcomes section data with items
    $outcomesSection = \App\Models\OutcomesSection::with(['activeItems'])->active()->first();

    // Fetch our approach section data
    $ourApproachSection = \App\Models\OurApproachSection::active()->first();

    // Fetch core services section data with services
    $coreServicesSection = \App\Models\CoreServicesSection::with(['services' => function($query) {
        $query->where('is_active', true)->orderBy('sort_order');
    }])->where('is_active', true)->first();

    // Fetch platforms section data with platforms
    $platformsSection = \App\Models\PlatformsSection::with(['activePlatforms'])->active()->first();

    // Fetch what sets us apart section data with items
    $whatSetsUsApartSection = \App\Models\WhatSetsUsApartSection::with(['activeItems'])->active()->first();

    // Fetch SEO settings
    $seoSettings = \App\Models\HomepageSeoSetting::active()->first();

    return Inertia::render('Home', [
        'latestBlogs' => $latestBlogs,
        'heroSection' => $heroSection,
        'partnerBadge' => $partnerBadge,
        'whatWeDoSection' => $whatWeDoSection,
        'outcomesSection' => $outcomesSection,
        'ourApproachSection' => $ourApproachSection,
        'coreServicesSection' => $coreServicesSection,
        'platformsSection' => $platformsSection,
        'whatSetsUsApartSection' => $whatSetsUsApartSection,
        'seoSettings' => $seoSettings,
    ]);
})->name('home');


// Contact Routes
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
Route::post('/subscribe', [SubscribeController::class, 'store']);
// Thank You Page Route
Route::get('/thank-you', [ContactController::class, 'thankYou'])->name('thank-you');

// Blog Routes
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}/preview', [BlogController::class, 'preview'])->name('blog.preview');
Route::get('/blog/{slug}', [BlogController::class, 'show'])->name('blog.show');

// This Week in Databricks Routes
Route::prefix('this-week-in-databricks')->name('weekly-databricks.')->group(function () {
    Route::get('/', [App\Http\Controllers\WeeklyDatabricksController::class, 'index'])->name('index');
    Route::get('/{slug}/preview', [App\Http\Controllers\WeeklyDatabricksController::class, 'preview'])->name('preview');
    Route::get('/{slug}', [App\Http\Controllers\WeeklyDatabricksController::class, 'show'])->name('show');
});

// Terms and Conditions Route
Route::get('/terms-and-conditions', function () {
    return Inertia::render('TermsAndConditions');
})->name('terms');

// Privacy Policy Route
Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy-policy');


// Services Routes Group
Route::prefix('services')->name('services.')->group(function () {

    // Specific static service pages - add before dynamic routes
    Route::get('/databricks-consulting', function () {
        return Inertia::render('Services/DatabricksConsulting/Index');
    })->name('databricks-consulting');

    // Services index page (optional - shows all published services)
    Route::get('/', [App\Http\Controllers\ServicePageController::class, 'index'])
        ->name('index');

    // Dynamic service pages - this should be last to avoid conflicts
    Route::get('/{slug}', [App\Http\Controllers\ServicePageController::class, 'show'])
        ->name('show')
        ->where('slug', '[a-zA-Z0-9\-]+');
});

// About Us Route
Route::get('/about-us', [App\Http\Controllers\AboutUsController::class, 'index'])->name('about-us');

// Sitemap Route
Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');

// API Routes
Route::prefix('api')->name('api.')->group(function () {
    Route::get('/footer', [App\Http\Controllers\Api\FooterController::class, 'index'])->name('footer.index');
});

// Include admin routes
require __DIR__.'/admin.php';