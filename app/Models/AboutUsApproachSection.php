<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUsApproachSection extends Model
{
    protected $fillable = [
        'header_tag',
        'title',
        'subtitle',
        'cta_text',
        'cta_link',
        'background_color',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function steps()
    {
        return $this->hasMany(AboutUsApproachStep::class, 'approach_section_id');
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
