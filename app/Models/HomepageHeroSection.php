<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomepageHeroSection extends Model
{
    protected $fillable = [
        'heading',
        'paragraph',
        'cta_text',
        'cta_link',
        'background_image',
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
