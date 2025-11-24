<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WhatSetsUsApartItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'what_sets_us_apart_section_id',
        'title',
        'description',
        'icon_svg',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];

    /**
     * Get the section that owns the item
     */
    public function section()
    {
        return $this->belongsTo(WhatSetsUsApartSection::class, 'what_sets_us_apart_section_id');
    }
}
