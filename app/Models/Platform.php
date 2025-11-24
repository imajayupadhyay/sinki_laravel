<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Platform extends Model
{
    use HasFactory;

    protected $fillable = [
        'platforms_section_id',
        'name',
        'image_path',
        'row_number',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'row_number' => 'integer',
        'sort_order' => 'integer',
    ];

    /**
     * Get the platforms section that owns the platform
     */
    public function platformsSection()
    {
        return $this->belongsTo(PlatformsSection::class);
    }
}
