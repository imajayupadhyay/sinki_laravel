<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Here is where you can register admin routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "admin" middleware group. All admin routes require authentication.
|
*/

// Admin login route
Route::get('/sinki-secure-login', function () {
    // If user is already authenticated, redirect to admin dashboard
    if (Auth::check()) {
        return redirect()->route('admin.dashboard');
    }

    return Inertia::render('Auth/SecureLogin');
})->name('admin.login');

Route::post('/sinki-secure-login', function () {
    // If user is already authenticated, redirect to admin dashboard
    if (Auth::check()) {
        return redirect()->route('admin.dashboard');
    }

    $credentials = request()->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if (Auth::attempt($credentials)) {
        request()->session()->regenerate();
        return redirect()->intended(route('admin.dashboard'));
    }

    return back()->withErrors([
        'email' => 'The provided credentials do not match our records.',
    ]);
})->name('admin.login.store');

// Protected admin routes
Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {

    // Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');

    // Users Management
    Route::get('/users', [App\Http\Controllers\Admin\UsersController::class, 'index'])->name('users.index');
    Route::post('/users', [App\Http\Controllers\Admin\UsersController::class, 'store'])->name('users.store');
    Route::put('/users/{user}', [App\Http\Controllers\Admin\UsersController::class, 'update'])->name('users.update');
    Route::put('/users/{user}/password', [App\Http\Controllers\Admin\UsersController::class, 'updatePassword'])->name('users.password');
    Route::delete('/users/{user}', [App\Http\Controllers\Admin\UsersController::class, 'destroy'])->name('users.destroy');

    // Contact Submissions Management
    Route::get('/submissions', [App\Http\Controllers\Admin\SubmissionsController::class, 'index'])->name('submissions.index');
    Route::get('/submissions/{submission}', [App\Http\Controllers\Admin\SubmissionsController::class, 'show'])->name('submissions.show');
    Route::delete('/submissions/{submission}', [App\Http\Controllers\Admin\SubmissionsController::class, 'destroy'])->name('submissions.destroy');
    Route::get('/submissions/export/csv', [App\Http\Controllers\Admin\SubmissionsController::class, 'export'])->name('submissions.export');

    // Blog Categories Management
    Route::get('/categories', [App\Http\Controllers\Admin\CategoriesController::class, 'index'])->name('categories.index');
    Route::post('/categories', [App\Http\Controllers\Admin\CategoriesController::class, 'store'])->name('categories.store');
    Route::put('/categories/{category}', [App\Http\Controllers\Admin\CategoriesController::class, 'update'])->name('categories.update');
    Route::delete('/categories/{category}', [App\Http\Controllers\Admin\CategoriesController::class, 'destroy'])->name('categories.destroy');

    // Blog Tags Management
    Route::get('/tags', [App\Http\Controllers\Admin\TagsController::class, 'index'])->name('tags.index');
    Route::post('/tags', [App\Http\Controllers\Admin\TagsController::class, 'store'])->name('tags.store');
    Route::put('/tags/{tag}', [App\Http\Controllers\Admin\TagsController::class, 'update'])->name('tags.update');
    Route::delete('/tags/{tag}', [App\Http\Controllers\Admin\TagsController::class, 'destroy'])->name('tags.destroy');

    // Blog Posts Management
    Route::get('/blogs', [App\Http\Controllers\Admin\BlogsController::class, 'index'])->name('blogs.index');
    Route::get('/blogs/create', [App\Http\Controllers\Admin\BlogsController::class, 'create'])->name('blogs.create');
    Route::post('/blogs', [App\Http\Controllers\Admin\BlogsController::class, 'store'])->name('blogs.store');
    Route::get('/blogs/{blog}/edit', [App\Http\Controllers\Admin\BlogsController::class, 'edit'])->name('blogs.edit');
    Route::put('/blogs/{blog}', [App\Http\Controllers\Admin\BlogsController::class, 'update'])->name('blogs.update');
    Route::get('/blogs/{blog}/preview', [App\Http\Controllers\Admin\BlogsController::class, 'preview'])->name('blogs.preview');
    Route::get('/blogs/{blog}/duplicate', [App\Http\Controllers\Admin\BlogsController::class, 'duplicate'])->name('blogs.duplicate');
    Route::delete('/blogs/{blog}', [App\Http\Controllers\Admin\BlogsController::class, 'destroy'])->name('blogs.destroy');

    // Image Upload Routes
    Route::post('/upload/featured-image', [App\Http\Controllers\Admin\ImageUploadController::class, 'uploadFeaturedImage'])->name('upload.featured-image');
    Route::delete('/upload/delete-image', [App\Http\Controllers\Admin\ImageUploadController::class, 'deleteImage'])->name('upload.delete-image');

    // Service Pages Management
    Route::resource('service-pages', App\Http\Controllers\Admin\ServicePageController::class);
    Route::post('/service-pages/{servicePage}/toggle-featured', [App\Http\Controllers\Admin\ServicePageController::class, 'toggleFeatured'])->name('service-pages.toggle-featured');
    Route::put('/service-pages/{servicePage}/status', [App\Http\Controllers\Admin\ServicePageController::class, 'updateStatus'])->name('service-pages.update-status');
    Route::post('/service-pages/sort-order', [App\Http\Controllers\Admin\ServicePageController::class, 'updateSortOrder'])->name('service-pages.sort-order');
    Route::post('/service-pages/upload-image', [App\Http\Controllers\Admin\ServicePageController::class, 'uploadImage'])->name('service-pages.upload-image');
    Route::get('/service-pages/{servicePage}/preview', [App\Http\Controllers\Admin\ServicePageController::class, 'preview'])->name('service-pages.preview');

    // Profile Management
    Route::get('/profile', [App\Http\Controllers\Admin\ProfileController::class, 'show'])->name('profile.show');
    Route::put('/profile', [App\Http\Controllers\Admin\ProfileController::class, 'update'])->name('profile.update');
    Route::put('/profile/password', [App\Http\Controllers\Admin\ProfileController::class, 'updatePassword'])->name('profile.password');
    Route::post('/profile/image', [App\Http\Controllers\Admin\ProfileController::class, 'uploadProfileImage'])->name('profile.image.upload');
    Route::delete('/profile/image', [App\Http\Controllers\Admin\ProfileController::class, 'deleteProfileImage'])->name('profile.image.delete');

    // Homepage Management
    Route::get('/homepage', [App\Http\Controllers\Admin\HomepageController::class, 'index'])->name('homepage.index');
    Route::put('/homepage/hero', [App\Http\Controllers\Admin\HomepageController::class, 'updateHero'])->name('homepage.hero.update');
    Route::post('/homepage/hero/image', [App\Http\Controllers\Admin\HomepageController::class, 'uploadHeroImage'])->name('homepage.hero.image.upload');
    Route::delete('/homepage/hero/image', [App\Http\Controllers\Admin\HomepageController::class, 'deleteHeroImage'])->name('homepage.hero.image.delete');
    Route::put('/homepage/partner-badge', [App\Http\Controllers\Admin\HomepageController::class, 'updatePartnerBadge'])->name('homepage.partner-badge.update');
    Route::post('/homepage/partner-badge/logo', [App\Http\Controllers\Admin\HomepageController::class, 'uploadPartnerLogo'])->name('homepage.partner-badge.logo.upload');
    Route::delete('/homepage/partner-badge/logo', [App\Http\Controllers\Admin\HomepageController::class, 'deletePartnerLogo'])->name('homepage.partner-badge.logo.delete');
    Route::put('/homepage/what-we-do', [App\Http\Controllers\Admin\HomepageController::class, 'updateWhatWeDo'])->name('homepage.what-we-do.update');
    Route::post('/homepage/what-we-do/items', [App\Http\Controllers\Admin\HomepageController::class, 'storeWhatWeDoItem'])->name('homepage.what-we-do.items.store');
    Route::put('/homepage/what-we-do/items/{item}', [App\Http\Controllers\Admin\HomepageController::class, 'updateWhatWeDoItem'])->name('homepage.what-we-do.items.update');
    Route::delete('/homepage/what-we-do/items/{item}', [App\Http\Controllers\Admin\HomepageController::class, 'deleteWhatWeDoItem'])->name('homepage.what-we-do.items.delete');
    Route::put('/homepage/outcomes', [App\Http\Controllers\Admin\HomepageController::class, 'updateOutcomes'])->name('homepage.outcomes.update');
    Route::post('/homepage/outcomes/items', [App\Http\Controllers\Admin\HomepageController::class, 'storeOutcomesItem'])->name('homepage.outcomes.items.store');
    Route::put('/homepage/outcomes/items/{item}', [App\Http\Controllers\Admin\HomepageController::class, 'updateOutcomesItem'])->name('homepage.outcomes.items.update');
    Route::delete('/homepage/outcomes/items/{item}', [App\Http\Controllers\Admin\HomepageController::class, 'deleteOutcomesItem'])->name('homepage.outcomes.items.delete');

    // Footer Management
    Route::get('/footer', [App\Http\Controllers\Admin\FooterController::class, 'index'])->name('footer.index');
    Route::put('/footer/content', [App\Http\Controllers\Admin\FooterController::class, 'updateContent'])->name('footer.content.update');
    Route::post('/footer/links', [App\Http\Controllers\Admin\FooterController::class, 'storeLink'])->name('footer.links.store');
    Route::put('/footer/links/{link}', [App\Http\Controllers\Admin\FooterController::class, 'updateLink'])->name('footer.links.update');
    Route::delete('/footer/links/{link}', [App\Http\Controllers\Admin\FooterController::class, 'destroyLink'])->name('footer.links.destroy');

    // Settings (placeholder for future)
    Route::get('/settings', function () {
        return Inertia::render('Admin/Settings/Index');
    })->name('settings.index');


    // Logout route
    Route::post('/logout', function () {
        Auth::logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();
        return redirect('/');
    })->name('logout');
});