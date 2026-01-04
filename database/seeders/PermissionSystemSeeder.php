<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSystemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create permission actions first
        $actions = [
            ['name' => 'read', 'display_name' => 'View'],
            ['name' => 'write', 'display_name' => 'Create/Edit'],
            ['name' => 'delete', 'display_name' => 'Delete'],
        ];

        foreach ($actions as $action) {
            DB::table('permission_actions')->updateOrInsert(
                ['name' => $action['name']],
                array_merge($action, ['created_at' => now(), 'updated_at' => now()])
            );
        }

        // Define all admin permissions based on the routes
        $permissions = [
            // Core Admin
            ['name' => 'dashboard', 'display_name' => 'Dashboard', 'description' => 'View and manage admin dashboard', 'module' => 'core'],
            ['name' => 'profile', 'display_name' => 'Profile Management', 'description' => 'Manage own profile settings', 'module' => 'core'],
            ['name' => 'settings', 'display_name' => 'System Settings', 'description' => 'Access system configuration', 'module' => 'core'],

            // User Management
            ['name' => 'users', 'display_name' => 'User Management', 'description' => 'Manage user accounts and permissions', 'module' => 'users'],

            // Content Management
            ['name' => 'submissions', 'display_name' => 'Contact Submissions', 'description' => 'View and manage contact form submissions', 'module' => 'content'],
            ['name' => 'categories', 'display_name' => 'Blog Categories', 'description' => 'Manage blog categories', 'module' => 'content'],
            ['name' => 'tags', 'display_name' => 'Blog Tags', 'description' => 'Manage blog tags', 'module' => 'content'],
            ['name' => 'blogs', 'display_name' => 'Blog Posts', 'description' => 'Create, edit and manage blog posts', 'module' => 'content'],
            ['name' => 'service-pages', 'display_name' => 'Service Pages', 'description' => 'Manage service pages content', 'module' => 'content'],

            // Weekly Databricks Management
            ['name' => 'weekly-databricks', 'display_name' => 'Weekly Databricks Articles', 'description' => 'Create, edit and manage Weekly Databricks articles', 'module' => 'weekly-databricks'],
            ['name' => 'weekly-databricks-categories', 'display_name' => 'Weekly Databricks Categories', 'description' => 'Manage Weekly Databricks categories', 'module' => 'weekly-databricks'],
            ['name' => 'weekly-databricks-tags', 'display_name' => 'Weekly Databricks Tags', 'description' => 'Manage Weekly Databricks tags', 'module' => 'weekly-databricks'],

            // Media Management
            ['name' => 'media', 'display_name' => 'Media Upload', 'description' => 'Upload and manage media files', 'module' => 'media'],

            // Website Management
            ['name' => 'homepage', 'display_name' => 'Homepage Management', 'description' => 'Edit homepage sections and content', 'module' => 'website'],
            ['name' => 'about-us', 'display_name' => 'About Us Management', 'description' => 'Edit about us page sections', 'module' => 'website'],
            ['name' => 'footer', 'display_name' => 'Footer Management', 'description' => 'Manage footer content and links', 'module' => 'website'],
        ];

        foreach ($permissions as $permission) {
            DB::table('permissions')->updateOrInsert(
                ['name' => $permission['name']],
                array_merge($permission, [
                    'is_active' => true,
                    'created_at' => now(),
                    'updated_at' => now()
                ])
            );
        }

        // Create default admin role
        DB::table('roles')->updateOrInsert(
            ['name' => 'super_admin'],
            [
                'name' => 'super_admin',
                'display_name' => 'Super Administrator',
                'description' => 'Full access to all admin functions',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ]
        );

        // Create editor role
        DB::table('roles')->updateOrInsert(
            ['name' => 'editor'],
            [
                'name' => 'editor',
                'display_name' => 'Content Editor',
                'description' => 'Can manage content but not users or system settings',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ]
        );

        // Create viewer role
        DB::table('roles')->updateOrInsert(
            ['name' => 'viewer'],
            [
                'name' => 'viewer',
                'display_name' => 'Viewer',
                'description' => 'Can only view content, no editing permissions',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now()
            ]
        );

        // Assign all permissions to super admin role
        $superAdminRoleId = DB::table('roles')->where('name', 'super_admin')->first()->id;
        $editorRoleId = DB::table('roles')->where('name', 'editor')->first()->id;
        $viewerRoleId = DB::table('roles')->where('name', 'viewer')->first()->id;

        $permissionIds = DB::table('permissions')->pluck('id', 'name');
        $actionIds = DB::table('permission_actions')->pluck('id', 'name');

        // Super Admin gets all permissions with all actions
        foreach ($permissionIds as $permissionName => $permissionId) {
            foreach ($actionIds as $actionName => $actionId) {
                DB::table('role_permissions')->updateOrInsert(
                    [
                        'role_id' => $superAdminRoleId,
                        'permission_id' => $permissionId,
                        'permission_action_id' => $actionId
                    ],
                    [
                        'created_at' => now(),
                        'updated_at' => now()
                    ]
                );
            }
        }

        // Editor gets content permissions with read/write, limited delete
        $editorPermissions = ['dashboard', 'profile', 'categories', 'tags', 'blogs', 'service-pages', 'media', 'homepage', 'about-us', 'footer'];
        foreach ($editorPermissions as $permissionName) {
            if (isset($permissionIds[$permissionName])) {
                $permissionId = $permissionIds[$permissionName];

                // Read and write access
                foreach (['read', 'write'] as $actionName) {
                    if (isset($actionIds[$actionName])) {
                        DB::table('role_permissions')->updateOrInsert(
                            [
                                'role_id' => $editorRoleId,
                                'permission_id' => $permissionId,
                                'permission_action_id' => $actionIds[$actionName]
                            ],
                            [
                                'created_at' => now(),
                                'updated_at' => now()
                            ]
                        );
                    }
                }

                // Delete access only for content items, not core features
                if (in_array($permissionName, ['categories', 'tags', 'blogs', 'service-pages'])) {
                    DB::table('role_permissions')->updateOrInsert(
                        [
                            'role_id' => $editorRoleId,
                            'permission_id' => $permissionId,
                            'permission_action_id' => $actionIds['delete']
                        ],
                        [
                            'created_at' => now(),
                            'updated_at' => now()
                        ]
                    );
                }
            }
        }

        // Viewer gets read-only access to most sections
        $viewerPermissions = ['dashboard', 'profile', 'submissions', 'categories', 'tags', 'blogs', 'service-pages'];
        foreach ($viewerPermissions as $permissionName) {
            if (isset($permissionIds[$permissionName])) {
                DB::table('role_permissions')->updateOrInsert(
                    [
                        'role_id' => $viewerRoleId,
                        'permission_id' => $permissionIds[$permissionName],
                        'permission_action_id' => $actionIds['read']
                    ],
                    [
                        'created_at' => now(),
                        'updated_at' => now()
                    ]
                );
            }
        }
    }
}
