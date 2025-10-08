<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\BlogController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

// Home Page Route
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');


// Contact Routes
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

// Thank You Page Route
Route::get('/thank-you', [ContactController::class, 'thankYou'])->name('thank-you');

// Blog Routes
Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}', [BlogController::class, 'show'])->name('blog.show');

// Include admin routes
require __DIR__.'/admin.php';