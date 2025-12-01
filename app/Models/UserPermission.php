<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserPermission extends Model
{
    protected $fillable = [
        'user_id',
        'permission_id',
        'permission_action_id',
        'is_granted',
        'granted_at',
        'granted_by'
    ];

    protected $casts = [
        'is_granted' => 'boolean',
        'granted_at' => 'datetime'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function permission(): BelongsTo
    {
        return $this->belongsTo(Permission::class);
    }

    public function action(): BelongsTo
    {
        return $this->belongsTo(PermissionAction::class, 'permission_action_id');
    }

    public function grantedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'granted_by');
    }

    public function scopeGranted($query)
    {
        return $query->where('is_granted', true);
    }
}
