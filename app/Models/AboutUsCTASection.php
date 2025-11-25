<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUsCTASection extends Model
{
    protected $fillable = [
        'title',
        'description',
        'cta_text',
        'cta_link',
        'background_image',
        'background_color',
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
