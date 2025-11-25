<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUsStorySection extends Model
{
    protected $fillable = [
        'header_tag',
        'title',
        'subtitle',
        'descriptions',
        'image_path',
        'image_alt',
        'image_position',
        'background_color',
        'is_active'
    ];

    protected $casts = [
        'descriptions' => 'array',
        'is_active' => 'boolean'
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}