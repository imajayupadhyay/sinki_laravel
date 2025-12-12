<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PermissionAction extends Model
{
    protected $fillable = [
        'name',
        'display_name'
    ];

    public function userPermissions()
    {
        return $this->hasMany(UserPermission::class);
    }
}
