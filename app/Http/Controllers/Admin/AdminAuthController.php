<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\OtpService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AdminAuthController extends Controller
{
    protected OtpService $otpService;

    public function __construct(OtpService $otpService)
    {
        $this->otpService = $otpService;
    }

    public function showLoginForm()
    {
        if (Auth::check()) {
            return redirect()->route('admin.dashboard');
        }

        return Inertia::render('Auth/SecureLogin');
    }

    public function login(Request $request)
    {
        if (Auth::check()) {
            return redirect()->route('admin.dashboard');
        }

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // First, verify credentials without logging in
        if (Auth::attempt($credentials, false)) {
            // Credentials are correct, now generate and send OTP
            $result = $this->otpService->generateAndSendOtp(
                $credentials['email'],
                $request->ip()
            );

            if ($result['success']) {
                // Store email in session for OTP verification
                Session::put('otp_email', $credentials['email']);
                Session::put('otp_password', $credentials['password']);

                return Inertia::render('Auth/OtpVerification', [
                    'email' => $credentials['email'],
                    'expiresIn' => $result['expires_in'],
                    'message' => $result['message']
                ]);
            } else {
                return back()->withErrors([
                    'email' => $result['message'],
                ]);
            }
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function verifyOtp(Request $request)
    {
        $request->validate([
            'otp_code' => 'required|string|size:6',
        ]);

        $email = Session::get('otp_email');
        $password = Session::get('otp_password');

        if (!$email || !$password) {
            return redirect()->route('admin.login')
                ->withErrors(['email' => 'Session expired. Please login again.']);
        }

        // Verify OTP
        $result = $this->otpService->verifyOtp(
            $email,
            $request->otp_code,
            $request->ip()
        );

        if ($result['success']) {
            // OTP is valid, now authenticate the user
            $credentials = ['email' => $email, 'password' => $password];

            if (Auth::attempt($credentials, true)) {
                // Clear OTP session data
                Session::forget(['otp_email', 'otp_password']);

                // Regenerate session
                $request->session()->regenerate();

                return redirect()->intended(route('admin.dashboard'));
            }
        }

        return back()->withErrors([
            'otp_code' => $result['message'],
        ]);
    }

    public function resendOtp(Request $request)
    {
        $email = Session::get('otp_email');

        if (!$email) {
            return redirect()->route('admin.login')
                ->withErrors(['email' => 'Session expired. Please login again.']);
        }

        $result = $this->otpService->generateAndSendOtp($email, $request->ip());

        if ($result['success']) {
            return back()->with('success', $result['message']);
        }

        return back()->withErrors(['otp_code' => $result['message']]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        // Clear any OTP session data
        Session::forget(['otp_email', 'otp_password']);

        return redirect('/');
    }
}
