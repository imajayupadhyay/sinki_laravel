<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WhatSetsUsApartSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'label',
        'heading',
        'description',
        'background_image',
        'background_image_alt',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    /**
     * Scope to get active sections
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Get the items for this section
     */
    public function items()
    {
        return $this->hasMany(WhatSetsUsApartItem::class)->orderBy('sort_order');
    }

    /**
     * Get active items for this section
     */
    public function activeItems()
    {
        return $this->items()->where('is_active', true);
    }
}
