<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUsPartnerBadge extends Model
{
    protected $fillable = [
        'text',
        'logo_image',
        'logo_alt',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}