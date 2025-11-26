<?php

namespace App\Services;

use App\Models\AdminOtp;
use App\Mail\AdminOtpMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class OtpService
{
    const OTP_EXPIRY_MINUTES = 10;
    const MAX_OTP_ATTEMPTS_PER_HOUR = 5;

    public function generateAndSendOtp(string $email, string $ipAddress = null): array
    {
        // Check rate limiting
        if (!$this->checkRateLimit($email, $ipAddress)) {
            return [
                'success' => false,
                'message' => 'Too many OTP requests. Please try again later.'
            ];
        }

        // Clean up expired OTPs
        AdminOtp::cleanupExpired();

        // Generate 6-digit OTP
        $otpCode = str_pad(random_int(100000, 999999), 6, '0', STR_PAD_LEFT);

        // Create OTP record
        $otp = AdminOtp::create([
            'email' => $email,
            'otp_code' => $otpCode,
            'expires_at' => Carbon::now()->addMinutes(self::OTP_EXPIRY_MINUTES),
            'ip_address' => $ipAddress,
        ]);

        // Send OTP via email
        try {
            Mail::to($email)->send(new AdminOtpMail($otpCode, self::OTP_EXPIRY_MINUTES));

            Log::info('OTP sent successfully', [
                'email' => $email,
                'ip_address' => $ipAddress,
                'otp_id' => $otp->id
            ]);

            return [
                'success' => true,
                'message' => 'OTP sent to your email address.',
                'expires_in' => self::OTP_EXPIRY_MINUTES
            ];

        } catch (\Exception $e) {
            Log::error('Failed to send OTP email', [
                'email' => $email,
                'error' => $e->getMessage(),
                'otp_id' => $otp->id
            ]);

            // Delete the OTP record if email fails
            $otp->delete();

            return [
                'success' => false,
                'message' => 'Failed to send OTP. Please try again.'
            ];
        }
    }

    public function verifyOtp(string $email, string $otpCode, string $ipAddress = null): array
    {
        // Find valid OTP
        $otp = AdminOtp::where('email', $email)
            ->where('otp_code', $otpCode)
            ->where('is_used', false)
            ->where('expires_at', '>', Carbon::now())
            ->first();

        if (!$otp) {
            Log::warning('Invalid OTP attempt', [
                'email' => $email,
                'otp_code' => $otpCode,
                'ip_address' => $ipAddress
            ]);

            return [
                'success' => false,
                'message' => 'Invalid or expired OTP code.'
            ];
        }

        // Mark OTP as used
        $otp->markAsUsed();

        Log::info('OTP verified successfully', [
            'email' => $email,
            'ip_address' => $ipAddress,
            'otp_id' => $otp->id
        ]);

        return [
            'success' => true,
            'message' => 'OTP verified successfully.'
        ];
    }

    private function checkRateLimit(string $email, string $ipAddress = null): bool
    {
        $oneHourAgo = Carbon::now()->subHour();

        // Check email rate limit
        $emailCount = AdminOtp::where('email', $email)
            ->where('created_at', '>', $oneHourAgo)
            ->count();

        if ($emailCount >= self::MAX_OTP_ATTEMPTS_PER_HOUR) {
            Log::warning('Rate limit exceeded for email', [
                'email' => $email,
                'attempts' => $emailCount
            ]);
            return false;
        }

        // Check IP rate limit if IP is provided
        if ($ipAddress) {
            $ipCount = AdminOtp::where('ip_address', $ipAddress)
                ->where('created_at', '>', $oneHourAgo)
                ->count();

            if ($ipCount >= self::MAX_OTP_ATTEMPTS_PER_HOUR) {
                Log::warning('Rate limit exceeded for IP', [
                    'ip_address' => $ipAddress,
                    'attempts' => $ipCount
                ]);
                return false;
            }
        }

        return true;
    }

    public function cleanupExpiredOtps(): void
    {
        AdminOtp::cleanupExpired();
    }
}