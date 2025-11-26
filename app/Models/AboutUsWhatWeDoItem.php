<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutUsWhatWeDoItem extends Model
{
    protected $fillable = [
        'what_we_do_section_id',
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
        return $this->belongsTo(AboutUsWhatWeDoSection::class, 'what_we_do_section_id');
    }
}