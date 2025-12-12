<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\OtpService;
use App\Services\PasswordResetService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AdminAuthController extends Controller
{
    protected OtpService $otpService;
    protected PasswordResetService $passwordResetService;

    public function __construct(OtpService $otpService, PasswordResetService $passwordResetService)
    {
        $this->otpService = $otpService;
        $this->passwordResetService = $passwordResetService;
    }

    public function showLoginForm()
    {
        if (Auth::check()) {
            $user = Auth::user();
            if ($user->hasPermission('dashboard', 'read')) {
                return redirect()->route('admin.dashboard');
            } else {
                return redirect()->route('admin.no-permissions');
            }
        }

        return Inertia::render('Auth/SecureLogin');
    }

    public function login(Request $request)
    {
        if (Auth::check()) {
            $user = Auth::user();
            if ($user->hasPermission('dashboard', 'read')) {
                return redirect()->route('admin.dashboard');
            } else {
                return redirect()->route('admin.no-permissions');
            }
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

                // Check if user has dashboard permission, if not redirect to safe page
                $user = Auth::user();
                if ($user->hasPermission('dashboard', 'read')) {
                    return redirect()->intended(route('admin.dashboard'));
                } else {
                    return redirect()->intended(route('admin.no-permissions'));
                }
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

    // Password Reset Methods

    public function showForgotPasswordForm()
    {
        return Inertia::render('Auth/ForgotPassword');
    }

    public function sendResetCode(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $result = $this->passwordResetService->initiatePasswordReset(
            $request->email,
            $request->ip()
        );

        if ($result['success']) {
            if (isset($result['reset_token'])) {
                // Store reset token in session
                Session::put('reset_email', $request->email);
                Session::put('reset_token', $result['reset_token']);

                return Inertia::render('Auth/PasswordResetOtp', [
                    'email' => $request->email,
                    'expiresIn' => $result['expires_in'],
                    'message' => $result['message']
                ]);
            } else {
                return back()->with('success', $result['message']);
            }
        } else {
            return back()->withErrors(['email' => $result['message']]);
        }
    }

    public function verifyResetCode(Request $request)
    {
        $request->validate([
            'otp_code' => 'required|string|size:6',
        ]);

        $email = Session::get('reset_email');
        $resetToken = Session::get('reset_token');

        if (!$email || !$resetToken) {
            return redirect()->route('admin.forgot-password')
                ->withErrors(['email' => 'Session expired. Please start over.']);
        }

        $result = $this->passwordResetService->verifyResetOtp(
            $email,
            $request->otp_code,
            $resetToken,
            $request->ip()
        );

        if ($result['success']) {
            return Inertia::render('Auth/ResetPassword', [
                'email' => $email,
                'resetToken' => $resetToken
            ]);
        }

        return back()->withErrors(['otp_code' => $result['message']]);
    }

    public function resetPassword(Request $request)
    {
        $request->validate([
            'password' => 'required|string|min:8|confirmed',
            'reset_token' => 'required|string',
        ]);

        $email = Session::get('reset_email');

        if (!$email) {
            return redirect()->route('admin.forgot-password')
                ->withErrors(['email' => 'Session expired. Please start over.']);
        }

        $result = $this->passwordResetService->resetPassword(
            $email,
            $request->reset_token,
            $request->password,
            $request->ip()
        );

        if ($result['success']) {
            // Clear reset session data
            Session::forget(['reset_email', 'reset_token']);

            return redirect()->route('admin.login')
                ->with('success', $result['message']);
        }

        return back()->withErrors(['password' => $result['message']]);
    }

    public function resendResetCode(Request $request)
    {
        $email = Session::get('reset_email');
        $resetToken = Session::get('reset_token');

        if (!$email || !$resetToken) {
            return redirect()->route('admin.forgot-password')
                ->withErrors(['email' => 'Session expired. Please start over.']);
        }

        $result = $this->passwordResetService->resendResetOtp(
            $email,
            $resetToken,
            $request->ip()
        );

        if ($result['success']) {
            return back()->with('success', $result['message']);
        }

        return back()->withErrors(['otp_code' => $result['message']]);
    }
}
