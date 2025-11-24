<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoreService extends Model
{
    use HasFactory;

    protected $fillable = [
        'core_services_section_id',
        'title',
        'description',
        'icon_svg',
        'link_url',
        'tags',
        'sort_order',
        'is_active',
    ];

    protected $casts = [
        'tags' => 'array',
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];
}