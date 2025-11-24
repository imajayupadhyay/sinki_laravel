<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OutcomesSection extends Model
{
    protected $fillable = [
        'label',
        'heading',
        'description',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function items()
    {
        return $this->hasMany(OutcomesItem::class)->orderBy('sort_order');
    }

    public function activeItems()
    {
        return $this->hasMany(OutcomesItem::class)->where('is_active', true)->orderBy('sort_order');
    }
}
