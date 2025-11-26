<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoreServicesSection extends Model
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
     * Get the core services for this section
     */
    public function services()
    {
        return $this->hasMany(CoreService::class, 'core_services_section_id')->orderBy('sort_order');
    }
}