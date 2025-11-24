<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlatformsSection extends Model
{
    use HasFactory;

    protected $fillable = [
        'label',
        'heading',
        'description',
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
     * Get the platforms for this section
     */
    public function platforms()
    {
        return $this->hasMany(Platform::class)->orderBy('row_number')->orderBy('sort_order');
    }

    /**
     * Get active platforms for this section
     */
    public function activePlatforms()
    {
        return $this->platforms()->where('is_active', true);
    }
}
