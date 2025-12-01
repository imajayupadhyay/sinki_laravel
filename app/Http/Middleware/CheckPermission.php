<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     * @param  string  $permission  Permission name
     * @param  string  $action  Action name (read, write, delete)
     */
    public function handle(Request $request, Closure $next, string $permission, string $action = 'read'): Response
    {
        $user = Auth::user();

        if (!$user) {
            return redirect()->route('admin.login')
                ->with('error', 'Please login to access admin area.');
        }

        if (!$user->is_active) {
            Auth::logout();
            return redirect()->route('admin.login')
                ->with('error', 'Your account has been deactivated.');
        }

        // Check permission
        if (!$user->hasPermission($permission, $action)) {
            // If it's an API request, return JSON
            if ($request->expectsJson()) {
                return response()->json([
                    'message' => 'You do not have permission to perform this action.',
                    'permission' => $permission,
                    'action' => $action
                ], 403);
            }

            // For web requests, check if user has dashboard permission to avoid redirect loops
            if ($user->hasPermission('dashboard', 'read')) {
                return redirect()->route('admin.dashboard')
                    ->with('error', "You do not have permission to {$action} {$permission}.");
            } else {
                // If user doesn't have dashboard permission either, logout and redirect to login
                Auth::logout();
                return redirect()->route('admin.login')
                    ->with('error', 'You do not have sufficient permissions to access the admin area.');
            }
        }

        return $next($request);
    }
}
