<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OutcomesItem extends Model
{
    protected $fillable = [
        'outcomes_section_id',
        'title',
        'description',
        'icon_svg',
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

    public function section()
    {
        return $this->belongsTo(OutcomesSection::class, 'outcomes_section_id');
    }
}
