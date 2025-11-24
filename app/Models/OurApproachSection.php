<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OurApproachSection extends Model
{
    protected $fillable = [
        'label',
        'heading',
        'description',
        'image_path',
        'image_alt',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function getImageUrlAttribute()
    {
        return $this->image_path ? asset('storage/' . $this->image_path) : null;
    }
}
