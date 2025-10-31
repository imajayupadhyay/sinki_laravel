<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * Display the Data Engineering & Modernization Services page.
     */
    public function dataEngineering()
    {
        return Inertia::render('Services/DataEngineering', [
            // You can pass any additional data here
            // Example: case studies, testimonials, etc.
        ]);
    }

    /**
     * Display other service pages (add as needed)
     */
    
    // Example for future service pages:
    // public function cloudMigration()
    // {
    //     return Inertia::render('Services/CloudMigration', []);
    // }
    
    // public function aiImplementation()
    // {
    //     return Inertia::render('Services/AIImplementation', []);
    // }
}