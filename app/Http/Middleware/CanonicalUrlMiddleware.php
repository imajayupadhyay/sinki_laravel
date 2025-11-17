<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

class CanonicalUrlMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        // Only add canonical URL for GET requests and successful responses
        if ($request->isMethod('GET') && $response->isSuccessful()) {
            $canonicalUrl = $this->generateCanonicalUrl($request);

            // Share canonical URL with all Inertia pages
            Inertia::share('canonical', $canonicalUrl);
        }

        return $response;
    }

    /**
     * Generate the canonical URL for the current request
     */
    private function generateCanonicalUrl(Request $request): string
    {
        $baseUrl = 'https://www.sinki.ai';
        $path = $request->getPathInfo();

        // Remove trailing slash except for root
        if ($path !== '/' && str_ends_with($path, '/')) {
            $path = rtrim($path, '/');
        }

        // Handle root path
        if ($path === '/') {
            return $baseUrl . '/';
        }

        return $baseUrl . $path;
    }
}