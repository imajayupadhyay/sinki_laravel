<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Carbon\Carbon;

class AdminPasswordReset extends Model
{
    protected $fillable = [
        'email',
        'otp_code',
        'reset_token',
        'expires_at',
        'is_used',
        'ip_address',
    ];

    protected $casts = [
        'expires_at' => 'datetime',
        'is_used' => 'boolean',
    ];

    public function isExpired(): bool
    {
        return Carbon::now()->isAfter($this->expires_at);
    }

    public function isValid(): bool
    {
        return !$this->is_used && !$this->isExpired();
    }

    public function markAsUsed(): void
    {
        $this->update(['is_used' => true]);
    }

    public static function generateToken(): string
    {
        return Str::random(64);
    }

    public static function cleanupExpired(): void
    {
        static::where('expires_at', '<', Carbon::now())
            ->orWhere('is_used', true)
            ->delete();
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'email', 'email');
    }
}
