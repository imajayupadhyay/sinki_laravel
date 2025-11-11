<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FooterContent extends Model
{
    protected $fillable = [
        'logo_url',
        'description',
        'copyright_text',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];
}
