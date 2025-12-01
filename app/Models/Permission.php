<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Permission extends Model
{
    protected $fillable = [
        'name',
        'display_name',
        'description',
        'module',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean'
    ];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_permissions')
            ->withPivot(['permission_action_id', 'is_granted', 'granted_at', 'granted_by'])
            ->withTimestamps();
    }

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class, 'role_permissions')
            ->withPivot(['permission_action_id'])
            ->withTimestamps();
    }

    public function userPermissions(): HasMany
    {
        return $this->hasMany(UserPermission::class);
    }

    public function actions(): BelongsToMany
    {
        return $this->belongsToMany(PermissionAction::class, 'user_permissions')
            ->withTimestamps();
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeByModule($query, $module)
    {
        return $query->where('module', $module);
    }
}
