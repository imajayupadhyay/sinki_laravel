<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUsLeadershipSection extends Model
{
    protected $fillable = [
        'header_tag',
        'title',
        'description',
        'background_image',
        'background_color',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function members()
    {
        return $this->hasMany(AboutUsLeadershipMember::class, 'leadership_section_id');
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
