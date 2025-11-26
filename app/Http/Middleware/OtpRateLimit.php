<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Symfony\Component\HttpFoundation\Response;

class OtpRateLimit
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Create a unique key for rate limiting based on IP and email
        $key = 'otp_attempts:' . $request->ip();
        if ($request->has('email') || session('otp_email')) {
            $email = $request->input('email') ?: session('otp_email');
            $key .= ':' . $email;
        }

        // Allow 10 attempts per hour
        $maxAttempts = 10;
        $decayMinutes = 60;

        if (RateLimiter::tooManyAttempts($key, $maxAttempts)) {
            $seconds = RateLimiter::availableIn($key);

            return response()->json([
                'message' => 'Too many OTP attempts. Please try again in ' . ceil($seconds / 60) . ' minutes.',
                'retry_after' => $seconds
            ], 429);
        }

        // Increment the attempt counter
        RateLimiter::hit($key, $decayMinutes * 60);

        return $next($request);
    }
}
