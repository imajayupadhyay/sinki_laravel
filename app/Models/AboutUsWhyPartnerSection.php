<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUsWhyPartnerSection extends Model
{
    protected $fillable = [
        'title',
        'subtitle',
        'background_color',
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

    public function features()
    {
        return $this->hasMany(AboutUsWhyPartnerFeature::class, 'why_partner_section_id')
                    ->where('is_active', true)
                    ->orderBy('sort_order');
    }
}
