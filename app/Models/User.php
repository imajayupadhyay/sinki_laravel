<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'profile_image',
        'is_admin',
        'is_active',
        'last_login_at',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_admin' => 'boolean',
            'is_active' => 'boolean',
            'last_login_at' => 'datetime',
        ];
    }

    public function getProfileImageUrlAttribute()
    {
        if ($this->profile_image) {
            return asset('storage/profile_images/' . $this->profile_image);
        }
        return null;
    }

    // Permission system relationships
    public function permissions(): BelongsToMany
    {
        return $this->belongsToMany(Permission::class, 'user_permissions')
            ->withPivot(['permission_action_id', 'is_granted', 'granted_at', 'granted_by'])
            ->withTimestamps();
    }

    public function userPermissions(): HasMany
    {
        return $this->hasMany(UserPermission::class);
    }

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class, 'user_roles')
            ->withPivot(['assigned_at', 'assigned_by'])
            ->withTimestamps();
    }

    // Permission checking methods
    public function hasPermission(string $permissionName, string $actionName = 'read'): bool
    {
        // Super admin always has all permissions
        if ($this->is_admin) {
            return true;
        }

        // Check direct user permissions first
        $hasDirectPermission = $this->userPermissions()
            ->whereHas('permission', function ($query) use ($permissionName) {
                $query->where('name', $permissionName);
            })
            ->whereHas('action', function ($query) use ($actionName) {
                $query->where('name', $actionName);
            })
            ->where('is_granted', true)
            ->exists();

        if ($hasDirectPermission) {
            return true;
        }

        // Check permissions through roles
        $hasRolePermission = DB::table('user_roles')
            ->join('role_permissions', 'user_roles.role_id', '=', 'role_permissions.role_id')
            ->join('permissions', 'role_permissions.permission_id', '=', 'permissions.id')
            ->join('permission_actions', 'role_permissions.permission_action_id', '=', 'permission_actions.id')
            ->where('user_roles.user_id', $this->id)
            ->where('permissions.name', $permissionName)
            ->where('permission_actions.name', $actionName)
            ->where('permissions.is_active', true)
            ->exists();

        return $hasRolePermission;
    }

    public function hasAnyPermission(array $permissions): bool
    {
        foreach ($permissions as $permission) {
            if (is_array($permission)) {
                $permissionName = $permission[0] ?? '';
                $actionName = $permission[1] ?? 'read';
            } else {
                $permissionName = $permission;
                $actionName = 'read';
            }

            if ($this->hasPermission($permissionName, $actionName)) {
                return true;
            }
        }

        return false;
    }

    public function assignPermission(string $permissionName, string $actionName, ?User $grantedBy = null): void
    {
        $permission = Permission::where('name', $permissionName)->first();
        $action = PermissionAction::where('name', $actionName)->first();

        if ($permission && $action) {
            UserPermission::updateOrCreate(
                [
                    'user_id' => $this->id,
                    'permission_id' => $permission->id,
                    'permission_action_id' => $action->id,
                ],
                [
                    'is_granted' => true,
                    'granted_at' => now(),
                    'granted_by' => $grantedBy?->id,
                ]
            );
        }
    }

    public function revokePermission(string $permissionName, string $actionName): void
    {
        $permission = Permission::where('name', $permissionName)->first();
        $action = PermissionAction::where('name', $actionName)->first();

        if ($permission && $action) {
            UserPermission::where([
                'user_id' => $this->id,
                'permission_id' => $permission->id,
                'permission_action_id' => $action->id,
            ])->delete();
        }
    }

    public function assignRole(string $roleName, ?User $assignedBy = null): void
    {
        $role = Role::where('name', $roleName)->first();

        if ($role) {
            $this->roles()->syncWithoutDetaching([
                $role->id => [
                    'assigned_at' => now(),
                    'assigned_by' => $assignedBy?->id,
                ]
            ]);
        }
    }

    public function removeRole(string $roleName): void
    {
        $role = Role::where('name', $roleName)->first();

        if ($role) {
            $this->roles()->detach($role->id);
        }
    }

    public function getUserPermissionsStructured(): array
    {
        $permissions = Permission::with([
            'userPermissions' => function ($query) {
                $query->where('user_id', $this->id)->granted();
            },
            'userPermissions.action'
        ])->active()->get();

        $structured = [];
        foreach ($permissions as $permission) {
            $actions = [];
            foreach ($permission->userPermissions as $userPermission) {
                $actions[] = $userPermission->action->name;
            }

            if (!empty($actions)) {
                $structured[$permission->module][$permission->name] = [
                    'display_name' => $permission->display_name,
                    'actions' => $actions
                ];
            }
        }

        return $structured;
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    protected static function boot()
    {
        parent::boot();

        static::created(function ($user) {
            $user->assignDefaultRole();
        });
    }

    public function assignDefaultRole(): void
    {
        if ($this->is_admin) {
            $this->assignRole('super_admin');
        } else {
            $defaultRoleName = config('app.default_user_role', 'viewer');
            $this->assignRole($defaultRoleName);
        }
    }
}
