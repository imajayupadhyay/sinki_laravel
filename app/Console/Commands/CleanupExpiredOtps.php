<?php

namespace App\Console\Commands;

use App\Models\AdminOtp;
use Illuminate\Console\Command;

class CleanupExpiredOtps extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'otp:cleanup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clean up expired and used OTP codes';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $deletedOtpCount = AdminOtp::where('expires_at', '<', now())
            ->orWhere('is_used', true)
            ->count();

        $deletedResetCount = \App\Models\AdminPasswordReset::where('expires_at', '<', now())
            ->orWhere('is_used', true)
            ->count();

        AdminOtp::cleanupExpired();
        \App\Models\AdminPasswordReset::cleanupExpired();

        $this->info("Cleaned up {$deletedOtpCount} expired/used OTP codes.");
        $this->info("Cleaned up {$deletedResetCount} expired/used password reset codes.");

        return 0;
    }
}
