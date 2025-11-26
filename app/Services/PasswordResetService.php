<?php

namespace App\Services;

use App\Models\AdminPasswordReset;
use App\Models\User;
use App\Mail\AdminPasswordResetMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class PasswordResetService
{
    const OTP_EXPIRY_MINUTES = 15;
    const MAX_RESET_ATTEMPTS_PER_HOUR = 3;

    public function initiatePasswordReset(string $email, string $ipAddress = null): array
    {
        // Check if user exists
        $user = User::where('email', $email)->first();
        if (!$user) {
            // Don't reveal that email doesn't exist for security
            return [
                'success' => true,
                'message' => 'If an account with this email exists, you will receive password reset instructions.'
            ];
        }

        // Check rate limiting
        if (!$this->checkRateLimit($email, $ipAddress)) {
            return [
                'success' => false,
                'message' => 'Too many password reset attempts. Please try again later.'
            ];
        }

        // Clean up expired reset requests
        AdminPasswordReset::cleanupExpired();

        // Generate OTP and token
        $otpCode = str_pad(random_int(100000, 999999), 6, '0', STR_PAD_LEFT);
        $resetToken = AdminPasswordReset::generateToken();

        // Create password reset record
        $passwordReset = AdminPasswordReset::create([
            'email' => $email,
            'otp_code' => $otpCode,
            'reset_token' => $resetToken,
            'expires_at' => Carbon::now()->addMinutes(self::OTP_EXPIRY_MINUTES),
            'ip_address' => $ipAddress,
        ]);

        // Send reset email
        try {
            Mail::to($email)->send(new AdminPasswordResetMail($otpCode, self::OTP_EXPIRY_MINUTES));

            Log::info('Password reset OTP sent successfully', [
                'email' => $email,
                'ip_address' => $ipAddress,
                'reset_id' => $passwordReset->id
            ]);

            return [
                'success' => true,
                'message' => 'Password reset code sent to your email address.',
                'expires_in' => self::OTP_EXPIRY_MINUTES,
                'reset_token' => $resetToken
            ];

        } catch (\Exception $e) {
            Log::error('Failed to send password reset email', [
                'email' => $email,
                'error' => $e->getMessage(),
                'reset_id' => $passwordReset->id
            ]);

            // Delete the reset record if email fails
            $passwordReset->delete();

            return [
                'success' => false,
                'message' => 'Failed to send reset code. Please try again.'
            ];
        }
    }

    public function verifyResetOtp(string $email, string $otpCode, string $resetToken, string $ipAddress = null): array
    {
        // Find valid reset request
        $passwordReset = AdminPasswordReset::where('email', $email)
            ->where('otp_code', $otpCode)
            ->where('reset_token', $resetToken)
            ->where('is_used', false)
            ->where('expires_at', '>', Carbon::now())
            ->first();

        if (!$passwordReset) {
            Log::warning('Invalid password reset OTP attempt', [
                'email' => $email,
                'otp_code' => $otpCode,
                'ip_address' => $ipAddress
            ]);

            return [
                'success' => false,
                'message' => 'Invalid or expired reset code.'
            ];
        }

        Log::info('Password reset OTP verified successfully', [
            'email' => $email,
            'ip_address' => $ipAddress,
            'reset_id' => $passwordReset->id
        ]);

        return [
            'success' => true,
            'message' => 'Reset code verified. You can now set a new password.',
            'reset_token' => $resetToken
        ];
    }

    public function resetPassword(string $email, string $resetToken, string $newPassword, string $ipAddress = null): array
    {
        // Find valid reset request
        $passwordReset = AdminPasswordReset::where('email', $email)
            ->where('reset_token', $resetToken)
            ->where('is_used', false)
            ->where('expires_at', '>', Carbon::now())
            ->first();

        if (!$passwordReset) {
            Log::warning('Invalid password reset token attempt', [
                'email' => $email,
                'ip_address' => $ipAddress
            ]);

            return [
                'success' => false,
                'message' => 'Invalid or expired reset session.'
            ];
        }

        // Find user
        $user = User::where('email', $email)->first();
        if (!$user) {
            return [
                'success' => false,
                'message' => 'User not found.'
            ];
        }

        // Update password
        try {
            $user->update([
                'password' => Hash::make($newPassword)
            ]);

            // Mark reset as used
            $passwordReset->markAsUsed();

            Log::info('Password reset completed successfully', [
                'email' => $email,
                'ip_address' => $ipAddress,
                'reset_id' => $passwordReset->id
            ]);

            return [
                'success' => true,
                'message' => 'Password has been reset successfully. You can now login with your new password.'
            ];

        } catch (\Exception $e) {
            Log::error('Failed to reset password', [
                'email' => $email,
                'error' => $e->getMessage(),
                'reset_id' => $passwordReset->id
            ]);

            return [
                'success' => false,
                'message' => 'Failed to reset password. Please try again.'
            ];
        }
    }

    public function resendResetOtp(string $email, string $resetToken, string $ipAddress = null): array
    {
        // Find existing reset request
        $passwordReset = AdminPasswordReset::where('email', $email)
            ->where('reset_token', $resetToken)
            ->where('is_used', false)
            ->where('expires_at', '>', Carbon::now())
            ->first();

        if (!$passwordReset) {
            return [
                'success' => false,
                'message' => 'Invalid reset session. Please start over.'
            ];
        }

        // Check rate limiting
        if (!$this->checkRateLimit($email, $ipAddress)) {
            return [
                'success' => false,
                'message' => 'Too many resend attempts. Please try again later.'
            ];
        }

        // Generate new OTP but keep same token
        $newOtpCode = str_pad(random_int(100000, 999999), 6, '0', STR_PAD_LEFT);

        $passwordReset->update([
            'otp_code' => $newOtpCode,
            'expires_at' => Carbon::now()->addMinutes(self::OTP_EXPIRY_MINUTES),
        ]);

        // Send new OTP
        try {
            Mail::to($email)->send(new AdminPasswordResetMail($newOtpCode, self::OTP_EXPIRY_MINUTES));

            Log::info('Password reset OTP resent successfully', [
                'email' => $email,
                'ip_address' => $ipAddress,
                'reset_id' => $passwordReset->id
            ]);

            return [
                'success' => true,
                'message' => 'New reset code sent to your email.'
            ];

        } catch (\Exception $e) {
            Log::error('Failed to resend password reset email', [
                'email' => $email,
                'error' => $e->getMessage(),
                'reset_id' => $passwordReset->id
            ]);

            return [
                'success' => false,
                'message' => 'Failed to resend reset code. Please try again.'
            ];
        }
    }

    private function checkRateLimit(string $email, string $ipAddress = null): bool
    {
        $oneHourAgo = Carbon::now()->subHour();

        // Check email rate limit
        $emailCount = AdminPasswordReset::where('email', $email)
            ->where('created_at', '>', $oneHourAgo)
            ->count();

        if ($emailCount >= self::MAX_RESET_ATTEMPTS_PER_HOUR) {
            Log::warning('Password reset rate limit exceeded for email', [
                'email' => $email,
                'attempts' => $emailCount
            ]);
            return false;
        }

        // Check IP rate limit if IP is provided
        if ($ipAddress) {
            $ipCount = AdminPasswordReset::where('ip_address', $ipAddress)
                ->where('created_at', '>', $oneHourAgo)
                ->count();

            if ($ipCount >= self::MAX_RESET_ATTEMPTS_PER_HOUR) {
                Log::warning('Password reset rate limit exceeded for IP', [
                    'ip_address' => $ipAddress,
                    'attempts' => $ipCount
                ]);
                return false;
            }
        }

        return true;
    }

    public function cleanupExpiredResets(): void
    {
        AdminPasswordReset::cleanupExpired();
    }
}