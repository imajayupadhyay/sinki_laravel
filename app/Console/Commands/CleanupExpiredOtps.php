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
        $deletedCount = AdminOtp::where('expires_at', '<', now())
            ->orWhere('is_used', true)
            ->count();

        AdminOtp::cleanupExpired();

        $this->info("Cleaned up {$deletedCount} expired/used OTP codes.");

        return 0;
    }
}
