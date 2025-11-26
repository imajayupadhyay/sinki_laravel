<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUsWhatWeDoSection extends Model
{
    protected $fillable = [
        'header_tag',
        'title',
        'subtitle',
        'background_image',
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
        return $this->hasMany(AboutUsWhatWeDoItem::class, 'what_we_do_section_id');
    }
}