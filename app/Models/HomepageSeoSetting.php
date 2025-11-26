<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HomepageSeoSetting extends Model
{
    protected $fillable = [
        'title',
        'description',
        'keywords',
        'og_title',
        'og_description',
        'og_image',
        'og_url',
        'twitter_card',
        'twitter_title',
        'twitter_description',
        'twitter_image',
        'custom_head_tags',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    // Accessor to get Open Graph image URL
    public function getOgImageUrlAttribute()
    {
        return $this->og_image ? asset('storage/' . $this->og_image) : null;
    }

    // Accessor to get Twitter image URL
    public function getTwitterImageUrlAttribute()
    {
        return $this->twitter_image ? asset('storage/' . $this->twitter_image) : null;
    }

    // Get formatted keywords as array
    public function getKeywordsArrayAttribute()
    {
        return $this->keywords ? explode(',', $this->keywords) : [];
    }
}
