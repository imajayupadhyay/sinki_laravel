<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $user = $request->user();

        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $user,
                'permissions' => $user ? $this->getUserPermissions($user) : [],
            ],
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
            ],
        ]);
    }

    /**
     * Get user permissions for frontend
     */
    private function getUserPermissions($user): array
    {
        if (!$user) {
            return [];
        }

        // If user is super admin, they have all permissions
        if ($user->is_admin) {
            return ['all' => true];
        }

        $permissions = [];

        // Get permissions from roles
        $rolePermissions = \DB::table('user_roles')
            ->join('role_permissions', 'user_roles.role_id', '=', 'role_permissions.role_id')
            ->join('permissions', 'role_permissions.permission_id', '=', 'permissions.id')
            ->join('permission_actions', 'role_permissions.permission_action_id', '=', 'permission_actions.id')
            ->where('user_roles.user_id', $user->id)
            ->where('permissions.is_active', true)
            ->select('permissions.name as permission_name', 'permission_actions.name as action_name')
            ->get();

        foreach ($rolePermissions as $permission) {
            $permissions[$permission->permission_name][$permission->action_name] = true;
        }

        // Get direct user permissions (override role permissions)
        $directPermissions = $user->userPermissions()
            ->with(['permission', 'action'])
            ->granted()
            ->get();

        foreach ($directPermissions as $permission) {
            $permissions[$permission->permission->name][$permission->action->name] = true;
        }

        return $permissions;
    }
}