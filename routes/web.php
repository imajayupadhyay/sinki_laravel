<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\BlogController;
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

    return Inertia::render('Home', [
        'latestBlogs' => $latestBlogs,
    ]);
})->name('home');


// Contact Routes
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

// Thank You Page Route
Route::get('/thank-you', [ContactController::class, 'thankYou'])->name('thank-you');

// Blog Routes
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}', [BlogController::class, 'show'])->name('blog.show');

// Terms and Conditions Route
Route::get('/terms-and-conditions', function () {
    return Inertia::render('TermsAndConditions');
})->name('terms');

// Privacy Policy Route
Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
})->name('privacy-policy');

// Include admin routes
require __DIR__.'/admin.php';