<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\PermissionAction;
use App\Models\Role;
use App\Models\User;
use App\Models\UserPermission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserPermissionsController extends Controller
{
    public function index()
    {
        $users = User::with(['roles', 'userPermissions.permission', 'userPermissions.action'])
            ->active()
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'is_admin' => $user->is_admin,
                    'is_active' => $user->is_active,
                    'roles' => $user->roles->map(function ($role) {
                        return [
                            'id' => $role->id,
                            'name' => $role->name,
                            'display_name' => $role->display_name,
                        ];
                    }),
                    'direct_permissions' => $user->userPermissions->map(function ($permission) {
                        return [
                            'id' => $permission->id,
                            'permission_name' => $permission->permission->name,
                            'permission_display_name' => $permission->permission->display_name,
                            'action_name' => $permission->action->name,
                            'action_display_name' => $permission->action->display_name,
                            'is_granted' => $permission->is_granted,
                        ];
                    }),
                ];
            });

        $permissions = Permission::active()
            ->orderBy('module')
            ->orderBy('display_name')
            ->get()
            ->groupBy('module');

        $actions = PermissionAction::all();

        $roles = Role::active()->get();

        return Inertia::render('Admin/UserPermissions/Index', [
            'users' => $users,
            'permissions' => $permissions,
            'actions' => $actions,
            'roles' => $roles,
        ]);
    }

    public function show(User $user)
    {
        $user->load(['roles', 'userPermissions.permission', 'userPermissions.action']);

        $permissions = Permission::active()
            ->with(['userPermissions' => function ($query) use ($user) {
                $query->where('user_id', $user->id);
            }])
            ->orderBy('module')
            ->orderBy('display_name')
            ->get()
            ->groupBy('module');

        $actions = PermissionAction::all();
        $roles = Role::active()->get();

        // Get effective permissions (from roles + direct permissions)
        $effectivePermissions = $this->getUserEffectivePermissions($user);

        return Inertia::render('Admin/UserPermissions/Show', [
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'is_admin' => $user->is_admin,
                'is_active' => $user->is_active,
                'roles' => $user->roles,
                'userPermissions' => $user->userPermissions->map(function ($permission) {
                    return [
                        'permission_id' => $permission->permission_id,
                        'permission_action_id' => $permission->permission_action_id,
                        'is_granted' => $permission->is_granted,
                    ];
                }),
            ],
            'permissions' => $permissions,
            'actions' => $actions,
            'roles' => $roles,
            'effectivePermissions' => $effectivePermissions,
        ]);
    }

    public function updatePermissions(Request $request, User $user)
    {
        $request->validate([
            'permissions' => 'required|array',
            'permissions.*.permission_id' => 'required|exists:permissions,id',
            'permissions.*.action_id' => 'required|exists:permission_actions,id',
            'permissions.*.granted' => 'required|boolean',
        ]);

        DB::transaction(function () use ($request, $user) {
            foreach ($request->permissions as $permissionData) {
                if ($permissionData['granted']) {
                    UserPermission::updateOrCreate(
                        [
                            'user_id' => $user->id,
                            'permission_id' => $permissionData['permission_id'],
                            'permission_action_id' => $permissionData['action_id'],
                        ],
                        [
                            'is_granted' => true,
                            'granted_at' => now(),
                            'granted_by' => Auth::id(),
                        ]
                    );
                } else {
                    UserPermission::where([
                        'user_id' => $user->id,
                        'permission_id' => $permissionData['permission_id'],
                        'permission_action_id' => $permissionData['action_id'],
                    ])->delete();
                }
            }
        });

        return redirect()->back()->with('success', 'User permissions updated successfully.');
    }

    public function assignRole(Request $request, User $user)
    {
        $request->validate([
            'role_id' => 'required|exists:roles,id',
        ]);

        $role = Role::findOrFail($request->role_id);

        $user->roles()->syncWithoutDetaching([
            $role->id => [
                'assigned_at' => now(),
                'assigned_by' => Auth::id(),
            ]
        ]);

        return redirect()->back()->with('success', "Role '{$role->display_name}' assigned successfully.");
    }

    public function removeRole(Request $request, User $user)
    {
        $request->validate([
            'role_id' => 'required|exists:roles,id',
        ]);

        $role = Role::findOrFail($request->role_id);
        $user->roles()->detach($role->id);

        return redirect()->back()->with('success', "Role '{$role->display_name}' removed successfully.");
    }

    public function bulkUpdatePermissions(Request $request)
    {
        $request->validate([
            'user_ids' => 'required|array',
            'user_ids.*' => 'exists:users,id',
            'role_id' => 'nullable|exists:roles,id',
            'permissions' => 'nullable|array',
        ]);

        DB::transaction(function () use ($request) {
            $users = User::whereIn('id', $request->user_ids)->get();

            foreach ($users as $user) {
                // Assign role if provided
                if ($request->role_id) {
                    $role = Role::findOrFail($request->role_id);
                    $user->roles()->syncWithoutDetaching([
                        $role->id => [
                            'assigned_at' => now(),
                            'assigned_by' => Auth::id(),
                        ]
                    ]);
                }

                // Assign individual permissions if provided
                if ($request->permissions) {
                    foreach ($request->permissions as $permissionData) {
                        if ($permissionData['granted']) {
                            UserPermission::updateOrCreate(
                                [
                                    'user_id' => $user->id,
                                    'permission_id' => $permissionData['permission_id'],
                                    'permission_action_id' => $permissionData['action_id'],
                                ],
                                [
                                    'is_granted' => true,
                                    'granted_at' => now(),
                                    'granted_by' => Auth::id(),
                                ]
                            );
                        }
                    }
                }
            }
        });

        return redirect()->back()->with('success', 'Bulk permissions updated successfully.');
    }

    private function getUserEffectivePermissions(User $user): array
    {
        if ($user->is_admin) {
            return ['all' => true];
        }

        $effectivePermissions = [];

        // Get permissions from roles
        $rolePermissions = DB::table('user_roles')
            ->join('role_permissions', 'user_roles.role_id', '=', 'role_permissions.role_id')
            ->join('permissions', 'role_permissions.permission_id', '=', 'permissions.id')
            ->join('permission_actions', 'role_permissions.permission_action_id', '=', 'permission_actions.id')
            ->where('user_roles.user_id', $user->id)
            ->where('permissions.is_active', true)
            ->select('permissions.name as permission_name', 'permission_actions.name as action_name')
            ->get();

        foreach ($rolePermissions as $permission) {
            $effectivePermissions[$permission->permission_name][$permission->action_name] = 'role';
        }

        // Get direct user permissions (override role permissions)
        $directPermissions = $user->userPermissions()
            ->with(['permission', 'action'])
            ->granted()
            ->get();

        foreach ($directPermissions as $permission) {
            $effectivePermissions[$permission->permission->name][$permission->action->name] = 'direct';
        }

        return $effectivePermissions;
    }
}
