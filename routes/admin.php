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

    // Settings (placeholder for future)
    Route::get('/settings', function () {
        return Inertia::render('Admin/Settings/Index');
    })->name('settings.index');

    // Analytics (placeholder for future)
    Route::get('/analytics', function () {
        return Inertia::render('Admin/Analytics/Index');
    })->name('analytics.index');

    // Logout route
    Route::post('/logout', function () {
        Auth::logout();
        request()->session()->invalidate();
        request()->session()->regenerateToken();
        return redirect('/');
    })->name('logout');
});