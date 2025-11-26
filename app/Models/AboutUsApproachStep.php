<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUsApproachStep extends Model
{
    protected $fillable = [
        'approach_section_id',
        'number',
        'title',
        'short_description',
        'description',
        'icon_svg',
        'sort_order',
        'is_active'
    ];

    protected $casts = [
        'number' => 'integer',
        'sort_order' => 'integer',
        'is_active' => 'boolean'
    ];

    public function approachSection()
    {
        return $this->belongsTo(AboutUsApproachSection::class, 'approach_section_id');
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
