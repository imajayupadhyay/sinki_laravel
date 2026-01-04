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

// Admin login routes
Route::get('/sinki-secure-login', [App\Http\Controllers\Admin\AdminAuthController::class, 'showLoginForm'])->name('admin.login');
Route::post('/sinki-secure-login', [App\Http\Controllers\Admin\AdminAuthController::class, 'login'])
    ->middleware('otp.rate.limit')
    ->name('admin.login.store');

// OTP verification routes
Route::post('/verify-otp', [App\Http\Controllers\Admin\AdminAuthController::class, 'verifyOtp'])
    ->middleware('otp.rate.limit')
    ->name('admin.otp.verify');
Route::post('/resend-otp', [App\Http\Controllers\Admin\AdminAuthController::class, 'resendOtp'])
    ->middleware('otp.rate.limit')
    ->name('admin.otp.resend');

// Password reset routes
Route::get('/forgot-password', [App\Http\Controllers\Admin\AdminAuthController::class, 'showForgotPasswordForm'])
    ->name('admin.forgot-password');
Route::post('/forgot-password', [App\Http\Controllers\Admin\AdminAuthController::class, 'sendResetCode'])
    ->middleware('otp.rate.limit')
    ->name('admin.forgot-password.send');
Route::post('/verify-reset-code', [App\Http\Controllers\Admin\AdminAuthController::class, 'verifyResetCode'])
    ->middleware('otp.rate.limit')
    ->name('admin.password.verify-code');
Route::post('/reset-password', [App\Http\Controllers\Admin\AdminAuthController::class, 'resetPassword'])
    ->middleware('otp.rate.limit')
    ->name('admin.password.reset');
Route::post('/resend-reset-code', [App\Http\Controllers\Admin\AdminAuthController::class, 'resendResetCode'])
    ->middleware('otp.rate.limit')
    ->name('admin.password.resend');

// Protected admin routes
Route::middleware('auth')->prefix('admin')->name('admin.')->group(function () {

    // No Permissions Page - Safe fallback for users with limited access
    Route::get('/no-permissions', function () {
        return Inertia::render('Admin/NoPermissions');
    })->name('no-permissions');

    // Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->middleware('permission:dashboard')->name('dashboard');

    // Users Management
    Route::get('/users', [App\Http\Controllers\Admin\UsersController::class, 'index'])->middleware('permission:users')->name('users.index');
    Route::post('/users', [App\Http\Controllers\Admin\UsersController::class, 'store'])->middleware('permission:users,write')->name('users.store');
    Route::put('/users/{user}', [App\Http\Controllers\Admin\UsersController::class, 'update'])->middleware('permission:users,write')->name('users.update');
    Route::put('/users/{user}/password', [App\Http\Controllers\Admin\UsersController::class, 'updatePassword'])->middleware('permission:users,write')->name('users.password');
    Route::delete('/users/{user}', [App\Http\Controllers\Admin\UsersController::class, 'destroy'])->middleware('permission:users,delete')->name('users.destroy');

    // User Permissions Management (only super admins)
    Route::middleware('permission:users,write')->group(function () {
        Route::get('/user-permissions', [App\Http\Controllers\Admin\UserPermissionsController::class, 'index'])->name('user-permissions.index');
        Route::get('/user-permissions/{user}', [App\Http\Controllers\Admin\UserPermissionsController::class, 'show'])->name('user-permissions.show');
        Route::put('/user-permissions/{user}', [App\Http\Controllers\Admin\UserPermissionsController::class, 'updatePermissions'])->name('user-permissions.update');
        Route::post('/user-permissions/{user}/roles', [App\Http\Controllers\Admin\UserPermissionsController::class, 'assignRole'])->name('user-permissions.assign-role');
        Route::delete('/user-permissions/{user}/roles', [App\Http\Controllers\Admin\UserPermissionsController::class, 'removeRole'])->name('user-permissions.remove-role');
        Route::post('/user-permissions/bulk', [App\Http\Controllers\Admin\UserPermissionsController::class, 'bulkUpdatePermissions'])->name('user-permissions.bulk');
    });

    // Contact Submissions Management
    Route::get('/submissions', [App\Http\Controllers\Admin\SubmissionsController::class, 'index'])->middleware('permission:submissions')->name('submissions.index');
    Route::get('/submissions/{submission}', [App\Http\Controllers\Admin\SubmissionsController::class, 'show'])->middleware('permission:submissions')->name('submissions.show');
    Route::delete('/submissions/{submission}', [App\Http\Controllers\Admin\SubmissionsController::class, 'destroy'])->middleware('permission:submissions,delete')->name('submissions.destroy');
    Route::get('/submissions/export/csv', [App\Http\Controllers\Admin\SubmissionsController::class, 'export'])->middleware('permission:submissions')->name('submissions.export');

    // Blog Categories Management
    Route::get('/categories', [App\Http\Controllers\Admin\CategoriesController::class, 'index'])->middleware('permission:categories')->name('categories.index');
    Route::post('/categories', [App\Http\Controllers\Admin\CategoriesController::class, 'store'])->middleware('permission:categories,write')->name('categories.store');
    Route::put('/categories/{category}', [App\Http\Controllers\Admin\CategoriesController::class, 'update'])->middleware('permission:categories,write')->name('categories.update');
    Route::delete('/categories/{category}', [App\Http\Controllers\Admin\CategoriesController::class, 'destroy'])->middleware('permission:categories,delete')->name('categories.destroy');

    // Blog Tags Management
    Route::get('/tags', [App\Http\Controllers\Admin\TagsController::class, 'index'])->middleware('permission:tags')->name('tags.index');
    Route::post('/tags', [App\Http\Controllers\Admin\TagsController::class, 'store'])->middleware('permission:tags,write')->name('tags.store');
    Route::put('/tags/{tag}', [App\Http\Controllers\Admin\TagsController::class, 'update'])->middleware('permission:tags,write')->name('tags.update');
    Route::delete('/tags/{tag}', [App\Http\Controllers\Admin\TagsController::class, 'destroy'])->middleware('permission:tags,delete')->name('tags.destroy');

    // Blog Posts Management
    Route::get('/blogs', [App\Http\Controllers\Admin\BlogsController::class, 'index'])->middleware('permission:blogs')->name('blogs.index');
    Route::get('/blogs/create', [App\Http\Controllers\Admin\BlogsController::class, 'create'])->middleware('permission:blogs,write')->name('blogs.create');
    Route::post('/blogs', [App\Http\Controllers\Admin\BlogsController::class, 'store'])->middleware('permission:blogs,write')->name('blogs.store');
    Route::get('/blogs/{blog}/edit', [App\Http\Controllers\Admin\BlogsController::class, 'edit'])->middleware('permission:blogs,write')->name('blogs.edit');
    Route::put('/blogs/{blog}', [App\Http\Controllers\Admin\BlogsController::class, 'update'])->middleware('permission:blogs,write')->name('blogs.update');
    Route::get('/blogs/{blog}/preview', [App\Http\Controllers\Admin\BlogsController::class, 'preview'])->middleware('permission:blogs')->name('blogs.preview');
    Route::get('/blogs/{blog}/duplicate', [App\Http\Controllers\Admin\BlogsController::class, 'duplicate'])->middleware('permission:blogs,write')->name('blogs.duplicate');
    Route::delete('/blogs/{blog}', [App\Http\Controllers\Admin\BlogsController::class, 'destroy'])->middleware('permission:blogs,delete')->name('blogs.destroy');

    // Weekly Databricks Management
    Route::get('/weekly-databricks', [App\Http\Controllers\Admin\WeeklyDatabricksController::class, 'index'])->middleware('permission:weekly-databricks')->name('weekly-databricks.index');
    Route::get('/weekly-databricks/create', [App\Http\Controllers\Admin\WeeklyDatabricksController::class, 'create'])->middleware('permission:weekly-databricks,write')->name('weekly-databricks.create');
    Route::post('/weekly-databricks', [App\Http\Controllers\Admin\WeeklyDatabricksController::class, 'store'])->middleware('permission:weekly-databricks,write')->name('weekly-databricks.store');
    Route::get('/weekly-databricks/{weeklyDatabricks}/edit', [App\Http\Controllers\Admin\WeeklyDatabricksController::class, 'edit'])->middleware('permission:weekly-databricks,write')->name('weekly-databricks.edit');
    Route::put('/weekly-databricks/{weeklyDatabricks}', [App\Http\Controllers\Admin\WeeklyDatabricksController::class, 'update'])->middleware('permission:weekly-databricks,write')->name('weekly-databricks.update');
    Route::get('/weekly-databricks/{weeklyDatabricks}/preview', [App\Http\Controllers\Admin\WeeklyDatabricksController::class, 'preview'])->middleware('permission:weekly-databricks')->name('weekly-databricks.preview');
    Route::get('/weekly-databricks/{weeklyDatabricks}/duplicate', [App\Http\Controllers\Admin\WeeklyDatabricksController::class, 'duplicate'])->middleware('permission:weekly-databricks,write')->name('weekly-databricks.duplicate');
    Route::delete('/weekly-databricks/{weeklyDatabricks}', [App\Http\Controllers\Admin\WeeklyDatabricksController::class, 'destroy'])->middleware('permission:weekly-databricks,delete')->name('weekly-databricks.destroy');

    // Weekly Databricks Categories Management
    Route::get('/weekly-databricks-categories', [App\Http\Controllers\Admin\WeeklyDatabricksCategoriesController::class, 'index'])->middleware('permission:weekly-databricks-categories')->name('weekly-databricks-categories.index');
    Route::post('/weekly-databricks-categories', [App\Http\Controllers\Admin\WeeklyDatabricksCategoriesController::class, 'store'])->middleware('permission:weekly-databricks-categories,write')->name('weekly-databricks-categories.store');
    Route::put('/weekly-databricks-categories/{weeklyDatabricksCategory}', [App\Http\Controllers\Admin\WeeklyDatabricksCategoriesController::class, 'update'])->middleware('permission:weekly-databricks-categories,write')->name('weekly-databricks-categories.update');
    Route::delete('/weekly-databricks-categories/{weeklyDatabricksCategory}', [App\Http\Controllers\Admin\WeeklyDatabricksCategoriesController::class, 'destroy'])->middleware('permission:weekly-databricks-categories,delete')->name('weekly-databricks-categories.destroy');

    // Weekly Databricks Tags Management
    Route::get('/weekly-databricks-tags', [App\Http\Controllers\Admin\WeeklyDatabricksTagsController::class, 'index'])->middleware('permission:weekly-databricks-tags')->name('weekly-databricks-tags.index');
    Route::post('/weekly-databricks-tags', [App\Http\Controllers\Admin\WeeklyDatabricksTagsController::class, 'store'])->middleware('permission:weekly-databricks-tags,write')->name('weekly-databricks-tags.store');
    Route::put('/weekly-databricks-tags/{weeklyDatabricksTag}', [App\Http\Controllers\Admin\WeeklyDatabricksTagsController::class, 'update'])->middleware('permission:weekly-databricks-tags,write')->name('weekly-databricks-tags.update');
    Route::delete('/weekly-databricks-tags/{weeklyDatabricksTag}', [App\Http\Controllers\Admin\WeeklyDatabricksTagsController::class, 'destroy'])->middleware('permission:weekly-databricks-tags,delete')->name('weekly-databricks-tags.destroy');

    // Image Upload Routes
    Route::post('/upload/featured-image', [App\Http\Controllers\Admin\ImageUploadController::class, 'uploadFeaturedImage'])->middleware('permission:media,write')->name('upload.featured-image');
    Route::delete('/upload/delete-image', [App\Http\Controllers\Admin\ImageUploadController::class, 'deleteImage'])->middleware('permission:media,delete')->name('upload.delete-image');

    // Service Pages Management
    Route::middleware('permission:service-pages')->group(function () {
        Route::get('/service-pages', [App\Http\Controllers\Admin\ServicePageController::class, 'index'])->name('service-pages.index');
        Route::get('/service-pages/{servicePage}/preview', [App\Http\Controllers\Admin\ServicePageController::class, 'preview'])->name('service-pages.preview');
    });
    Route::middleware('permission:service-pages,write')->group(function () {
        Route::get('/service-pages/create', [App\Http\Controllers\Admin\ServicePageController::class, 'create'])->name('service-pages.create');
        Route::post('/service-pages', [App\Http\Controllers\Admin\ServicePageController::class, 'store'])->name('service-pages.store');
        Route::get('/service-pages/{servicePage}/edit', [App\Http\Controllers\Admin\ServicePageController::class, 'edit'])->name('service-pages.edit');
        Route::put('/service-pages/{servicePage}', [App\Http\Controllers\Admin\ServicePageController::class, 'update'])->name('service-pages.update');
        Route::post('/service-pages/{servicePage}/toggle-featured', [App\Http\Controllers\Admin\ServicePageController::class, 'toggleFeatured'])->name('service-pages.toggle-featured');
        Route::put('/service-pages/{servicePage}/status', [App\Http\Controllers\Admin\ServicePageController::class, 'updateStatus'])->name('service-pages.update-status');
        Route::post('/service-pages/sort-order', [App\Http\Controllers\Admin\ServicePageController::class, 'updateSortOrder'])->name('service-pages.sort-order');
        Route::post('/service-pages/upload-image', [App\Http\Controllers\Admin\ServicePageController::class, 'uploadImage'])->name('service-pages.upload-image');
    });
    Route::delete('/service-pages/{servicePage}', [App\Http\Controllers\Admin\ServicePageController::class, 'destroy'])->middleware('permission:service-pages,delete')->name('service-pages.destroy');

    // Profile Management (everyone can access their own profile)
    Route::middleware('permission:profile')->group(function () {
        Route::get('/profile', [App\Http\Controllers\Admin\ProfileController::class, 'show'])->name('profile.show');
        Route::put('/profile', [App\Http\Controllers\Admin\ProfileController::class, 'update'])->name('profile.update');
        Route::put('/profile/password', [App\Http\Controllers\Admin\ProfileController::class, 'updatePassword'])->name('profile.password');
        Route::post('/profile/image', [App\Http\Controllers\Admin\ProfileController::class, 'uploadProfileImage'])->name('profile.image.upload');
        Route::delete('/profile/image', [App\Http\Controllers\Admin\ProfileController::class, 'deleteProfileImage'])->name('profile.image.delete');
    });

    // Homepage Management
    Route::middleware('permission:homepage')->group(function () {
        Route::get('/homepage', [App\Http\Controllers\Admin\HomepageController::class, 'index'])->name('homepage.index');
    });
    Route::middleware('permission:homepage,write')->group(function () {
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
    Route::put('/homepage/our-approach', [App\Http\Controllers\Admin\HomepageController::class, 'updateOurApproach'])->name('homepage.our-approach.update');
    Route::post('/homepage/our-approach/image', [App\Http\Controllers\Admin\HomepageController::class, 'uploadOurApproachImage'])->name('homepage.our-approach.image.upload');
    Route::delete('/homepage/our-approach/image', [App\Http\Controllers\Admin\HomepageController::class, 'deleteOurApproachImage'])->name('homepage.our-approach.image.delete');
    Route::put('/homepage/core-services', [App\Http\Controllers\Admin\HomepageController::class, 'updateCoreServices'])->name('homepage.core-services.update');
    Route::post('/homepage/core-services/service', [App\Http\Controllers\Admin\HomepageController::class, 'storeCoreService'])->name('homepage.core-services.service.store');
    Route::put('/homepage/core-services/service/{service}', [App\Http\Controllers\Admin\HomepageController::class, 'updateCoreService'])->name('homepage.core-services.service.update');
    Route::delete('/homepage/core-services/service/{service}', [App\Http\Controllers\Admin\HomepageController::class, 'deleteCoreService'])->name('homepage.core-services.service.destroy');
    Route::put('/homepage/platforms', [App\Http\Controllers\Admin\HomepageController::class, 'updatePlatforms'])->name('homepage.platforms.update');
    Route::post('/homepage/platforms/platform', [App\Http\Controllers\Admin\HomepageController::class, 'storePlatform'])->name('homepage.platforms.platform.store');
    Route::put('/homepage/platforms/platform/{platform}', [App\Http\Controllers\Admin\HomepageController::class, 'updatePlatform'])->name('homepage.platforms.platform.update');
    Route::delete('/homepage/platforms/platform/{platform}', [App\Http\Controllers\Admin\HomepageController::class, 'deletePlatform'])->name('homepage.platforms.platform.destroy');
    Route::put('/homepage/what-sets-us-apart', [App\Http\Controllers\Admin\HomepageController::class, 'updateWhatSetsUsApart'])->name('homepage.what-sets-us-apart.update');
    Route::post('/homepage/what-sets-us-apart/item', [App\Http\Controllers\Admin\HomepageController::class, 'storeWhatSetsUsApartItem'])->name('homepage.what-sets-us-apart.item.store');
    Route::put('/homepage/what-sets-us-apart/item/{item}', [App\Http\Controllers\Admin\HomepageController::class, 'updateWhatSetsUsApartItem'])->name('homepage.what-sets-us-apart.item.update');
    Route::delete('/homepage/what-sets-us-apart/item/{item}', [App\Http\Controllers\Admin\HomepageController::class, 'deleteWhatSetsUsApartItem'])->name('homepage.what-sets-us-apart.item.destroy');
        Route::put('/homepage/seo', [App\Http\Controllers\Admin\HomepageController::class, 'updateSeoSettings'])->name('homepage.seo.update');
        Route::post('/homepage/seo/image', [App\Http\Controllers\Admin\HomepageController::class, 'uploadSeoImage'])->name('homepage.seo.image.upload');
        Route::delete('/homepage/seo/image', [App\Http\Controllers\Admin\HomepageController::class, 'deleteSeoImage'])->name('homepage.seo.image.delete');
    });

    // About Us Management
    Route::middleware('permission:about-us')->group(function () {
        Route::get('/about-us', [App\Http\Controllers\Admin\AboutUsController::class, 'index'])->name('about-us.index');
    });
    Route::middleware('permission:about-us,write')->group(function () {
    Route::put('/about-us/hero', [App\Http\Controllers\Admin\AboutUsController::class, 'updateHero'])->name('about-us.hero.update');
    Route::post('/about-us/hero/image', [App\Http\Controllers\Admin\AboutUsController::class, 'uploadHeroImage'])->name('about-us.hero.image.upload');
    Route::delete('/about-us/hero/image', [App\Http\Controllers\Admin\AboutUsController::class, 'deleteHeroImage'])->name('about-us.hero.image.delete');
    Route::put('/about-us/partner-badge', [App\Http\Controllers\Admin\AboutUsController::class, 'updatePartnerBadge'])->name('about-us.partner-badge.update');
    Route::post('/about-us/partner-badge/logo', [App\Http\Controllers\Admin\AboutUsController::class, 'uploadPartnerLogo'])->name('about-us.partner-badge.logo.upload');
    Route::delete('/about-us/partner-badge/logo', [App\Http\Controllers\Admin\AboutUsController::class, 'deletePartnerLogo'])->name('about-us.partner-badge.logo.delete');
    Route::put('/about-us/story-section', [App\Http\Controllers\Admin\AboutUsController::class, 'updateStorySection'])->name('about-us.story-section.update');
    Route::post('/about-us/story-section/image', [App\Http\Controllers\Admin\AboutUsController::class, 'uploadStoryImage'])->name('about-us.story-section.image.upload');
    Route::delete('/about-us/story-section/image', [App\Http\Controllers\Admin\AboutUsController::class, 'deleteStoryImage'])->name('about-us.story-section.image.delete');
    Route::put('/about-us/what-we-do', [App\Http\Controllers\Admin\AboutUsController::class, 'updateWhatWeDo'])->name('about-us.what-we-do.update');
    Route::post('/about-us/what-we-do/background', [App\Http\Controllers\Admin\AboutUsController::class, 'uploadWhatWeDoBackground'])->name('about-us.what-we-do.background.upload');
    Route::delete('/about-us/what-we-do/background', [App\Http\Controllers\Admin\AboutUsController::class, 'deleteWhatWeDoBackground'])->name('about-us.what-we-do.background.delete');
    Route::post('/about-us/what-we-do/items', [App\Http\Controllers\Admin\AboutUsController::class, 'storeWhatWeDoItem'])->name('about-us.what-we-do.items.store');
    Route::put('/about-us/what-we-do/items/{item}', [App\Http\Controllers\Admin\AboutUsController::class, 'updateWhatWeDoItem'])->name('about-us.what-we-do.items.update');
    Route::delete('/about-us/what-we-do/items/{item}', [App\Http\Controllers\Admin\AboutUsController::class, 'deleteWhatWeDoItem'])->name('about-us.what-we-do.items.delete');
    Route::put('/about-us/approach', [App\Http\Controllers\Admin\AboutUsController::class, 'updateApproach'])->name('about-us.approach.update');
    Route::post('/about-us/approach/steps', [App\Http\Controllers\Admin\AboutUsController::class, 'storeApproachStep'])->name('about-us.approach.steps.store');
    Route::put('/about-us/approach/steps/{step}', [App\Http\Controllers\Admin\AboutUsController::class, 'updateApproachStep'])->name('about-us.approach.steps.update');
    Route::delete('/about-us/approach/steps/{step}', [App\Http\Controllers\Admin\AboutUsController::class, 'deleteApproachStep'])->name('about-us.approach.steps.delete');
    Route::put('/about-us/leadership', [App\Http\Controllers\Admin\AboutUsController::class, 'updateLeadership'])->name('about-us.leadership.update');
    Route::post('/about-us/leadership/background', [App\Http\Controllers\Admin\AboutUsController::class, 'uploadLeadershipBackground'])->name('about-us.leadership.background.upload');
    Route::delete('/about-us/leadership/background', [App\Http\Controllers\Admin\AboutUsController::class, 'deleteLeadershipBackground'])->name('about-us.leadership.background.delete');
    Route::post('/about-us/leadership/members', [App\Http\Controllers\Admin\AboutUsController::class, 'storeLeadershipMember'])->name('about-us.leadership.members.store');
    Route::put('/about-us/leadership/members/{member}', [App\Http\Controllers\Admin\AboutUsController::class, 'updateLeadershipMember'])->name('about-us.leadership.members.update');
    Route::delete('/about-us/leadership/members/{member}', [App\Http\Controllers\Admin\AboutUsController::class, 'deleteLeadershipMember'])->name('about-us.leadership.members.delete');

    // Why Partner Section routes
    Route::put('/about-us/why-partner', [App\Http\Controllers\Admin\AboutUsController::class, 'updateWhyPartner'])->name('about-us.why-partner.update');
    Route::post('/about-us/why-partner/background', [App\Http\Controllers\Admin\AboutUsController::class, 'uploadWhyPartnerBackground'])->name('about-us.why-partner.background.upload');
    Route::delete('/about-us/why-partner/background', [App\Http\Controllers\Admin\AboutUsController::class, 'deleteWhyPartnerBackground'])->name('about-us.why-partner.background.delete');
    Route::post('/about-us/why-partner/features', [App\Http\Controllers\Admin\AboutUsController::class, 'storeWhyPartnerFeature'])->name('about-us.why-partner.features.store');
    Route::put('/about-us/why-partner/features/{feature}', [App\Http\Controllers\Admin\AboutUsController::class, 'updateWhyPartnerFeature'])->name('about-us.why-partner.features.update');
    Route::delete('/about-us/why-partner/features/{feature}', [App\Http\Controllers\Admin\AboutUsController::class, 'deleteWhyPartnerFeature'])->name('about-us.why-partner.features.delete');

    // CTA Section routes
        Route::put('/about-us/cta', [App\Http\Controllers\Admin\AboutUsController::class, 'updateCTA'])->name('about-us.cta.update');
        Route::post('/about-us/cta/background', [App\Http\Controllers\Admin\AboutUsController::class, 'uploadCTABackground'])->name('about-us.cta.background.upload');
        Route::delete('/about-us/cta/background', [App\Http\Controllers\Admin\AboutUsController::class, 'deleteCTABackground'])->name('about-us.cta.background.delete');
    });

    // Footer Management
    Route::middleware('permission:footer')->group(function () {
        Route::get('/footer', [App\Http\Controllers\Admin\FooterController::class, 'index'])->name('footer.index');
    });
    Route::middleware('permission:footer,write')->group(function () {
        Route::put('/footer/content', [App\Http\Controllers\Admin\FooterController::class, 'updateContent'])->name('footer.content.update');
        Route::post('/footer/links', [App\Http\Controllers\Admin\FooterController::class, 'storeLink'])->name('footer.links.store');
        Route::put('/footer/links/{link}', [App\Http\Controllers\Admin\FooterController::class, 'updateLink'])->name('footer.links.update');
    });
    Route::delete('/footer/links/{link}', [App\Http\Controllers\Admin\FooterController::class, 'destroyLink'])->middleware('permission:footer,delete')->name('footer.links.destroy');

    // Settings (placeholder for future)
    Route::get('/settings', function () {
        return Inertia::render('Admin/Settings/Index');
    })->middleware('permission:settings')->name('settings.index');


    // Logout route
    Route::post('/logout', [App\Http\Controllers\Admin\AdminAuthController::class, 'logout'])->name('logout');
});