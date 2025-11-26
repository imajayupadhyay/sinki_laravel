<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUsLeadershipMember extends Model
{
    protected $fillable = [
        'leadership_section_id',
        'name',
        'position',
        'image',
        'bio',
        'linkedin_url',
        'twitter_url',
        'sort_order',
        'is_active'
    ];

    protected $casts = [
        'sort_order' => 'integer',
        'is_active' => 'boolean'
    ];

    public function leadershipSection()
    {
        return $this->belongsTo(AboutUsLeadershipSection::class, 'leadership_section_id');
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
