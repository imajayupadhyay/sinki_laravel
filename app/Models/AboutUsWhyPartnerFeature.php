<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUsWhyPartnerFeature extends Model
{
    protected $fillable = [
        'why_partner_section_id',
        'title',
        'description',
        'icon',
        'sort_order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function whyPartnerSection()
    {
        return $this->belongsTo(AboutUsWhyPartnerSection::class, 'why_partner_section_id');
    }
}
