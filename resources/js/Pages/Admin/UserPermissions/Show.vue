<template>
    <AdminLayout
        page-title="Manage User Permissions"
        :page-subtitle="`Configure detailed permissions for ${user.name}`"
    >
        <Head :title="`${user.name} Permissions - Admin Dashboard`" />

        <!-- Success/Error Messages -->
        <div v-if="$page.props.flash?.success" class="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div class="flex">
                <svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="ml-3 text-sm text-green-800">{{ $page.props.flash.success }}</p>
            </div>
        </div>

        <div v-if="$page.props.flash?.error" class="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div class="flex">
                <svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="ml-3 text-sm text-red-800">{{ $page.props.flash.error }}</p>
            </div>
        </div>

        <!-- Back Button -->
        <div class="mb-6">
            <Link
                :href="route('admin.user-permissions.index')"
                class="inline-flex items-center text-gray-600 hover:text-gray-900"
            >
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Back to User Permissions
            </Link>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- User Info Sidebar -->
            <div class="lg:col-span-1">
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div class="text-center">
                        <div class="h-20 w-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-brand-red">
                            <span class="text-white text-2xl font-semibold">{{ user.name.charAt(0).toUpperCase() }}</span>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900">{{ user.name }}</h3>
                        <p class="text-sm text-gray-600">{{ user.email }}</p>

                        <!-- Admin Badge -->
                        <div class="mt-4">
                            <span
                                v-if="user.is_admin"
                                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800"
                            >
                                <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.586-4.414A2 2 0 0118 9.172v2.828a2 2 0 01-.586 1.414L13 18H9l-4.414-4.414A2 2 0 014 12.172V9.172a2 2 0 01.586-1.414L9 3h4l4.414 4.414z"/>
                                </svg>
                                Super Administrator
                            </span>
                            <span
                                v-else
                                :class="user.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                            >
                                {{ user.is_active ? 'Active User' : 'Inactive User' }}
                            </span>
                        </div>
                    </div>

                    <!-- Current Roles -->
                    <div class="mt-6">
                        <h4 class="text-sm font-medium text-gray-700 mb-3">Current Roles</h4>
                        <div v-if="user.roles && user.roles.length > 0" class="space-y-2">
                            <div
                                v-for="role in user.roles"
                                :key="role.id"
                                class="flex items-center justify-between p-3 bg-blue-50 rounded-lg"
                            >
                                <div>
                                    <div class="font-medium text-blue-900">{{ role.display_name }}</div>
                                    <div class="text-sm text-blue-600">{{ role.description }}</div>
                                </div>
                                <button
                                    @click="removeRole(role.id)"
                                    class="text-red-600 hover:text-red-800 p-1"
                                    :disabled="user.is_admin"
                                >
                                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div v-else class="text-sm text-gray-500 italic">
                            No roles assigned
                        </div>

                        <!-- Add Role -->
                        <div class="mt-4">
                            <select
                                v-model="selectedRoleId"
                                class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                :disabled="user.is_admin"
                            >
                                <option value="">Add a role...</option>
                                <option
                                    v-for="role in availableRoles"
                                    :key="role.id"
                                    :value="role.id"
                                >
                                    {{ role.display_name }}
                                </option>
                            </select>
                            <button
                                @click="assignRole"
                                :disabled="!selectedRoleId || user.is_admin"
                                class="mt-2 w-full bg-brand-red text-white px-3 py-2 rounded-lg text-sm hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Assign Role
                            </button>
                        </div>

                        <div v-if="user.is_admin" class="mt-4 p-3 bg-yellow-50 rounded-lg">
                            <p class="text-sm text-yellow-700">
                                Super admins have all permissions automatically and cannot be modified.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Permissions Grid -->
            <div class="lg:col-span-2">
                <form @submit.prevent="updatePermissions">
                    <!-- Permission Groups -->
                    <div class="space-y-6">
                        <div
                            v-for="(modulePermissions, module) in permissions"
                            :key="module"
                            class="bg-white rounded-xl shadow-sm border border-gray-200"
                        >
                            <div class="px-6 py-4 border-b border-gray-200">
                                <h3 class="text-lg font-medium text-gray-900 capitalize">
                                    {{ module }} Management
                                </h3>
                                <p class="text-sm text-gray-600 mt-1">
                                    Control access to {{ module }}-related features
                                </p>
                            </div>

                            <div class="p-6">
                                <div class="grid grid-cols-1 gap-4">
                                    <div
                                        v-for="permission in modulePermissions"
                                        :key="permission.id"
                                        class="border border-gray-200 rounded-lg p-4"
                                    >
                                        <div class="flex items-center justify-between mb-3">
                                            <div>
                                                <h4 class="font-medium text-gray-900">{{ permission.display_name }}</h4>
                                                <p class="text-sm text-gray-600">{{ permission.description }}</p>
                                            </div>
                                            <!-- Effective Permissions Indicator -->
                                            <div class="text-xs text-gray-500">
                                                <div v-if="hasEffectivePermission(permission.name, 'read')" class="text-green-600">
                                                    ✓ Has Access
                                                </div>
                                                <div v-else class="text-gray-400">
                                                    ✗ No Access
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Action Checkboxes -->
                                        <div class="grid grid-cols-3 gap-4">
                                            <div
                                                v-for="action in actions"
                                                :key="action.id"
                                                class="flex items-center"
                                            >
                                                <input
                                                    :id="`permission_${permission.id}_${action.id}`"
                                                    type="checkbox"
                                                    :checked="isPermissionChecked(permission.id, action.id)"
                                                    @change="updatePermissionState(permission.id, action.id, $event.target.checked)"
                                                    :disabled="user.is_admin"
                                                    class="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded"
                                                />
                                                <label
                                                    :for="`permission_${permission.id}_${action.id}`"
                                                    class="ml-2 block text-sm text-gray-700"
                                                >
                                                    {{ action.display_name }}
                                                </label>
                                                <!-- Role vs Direct Indicator -->
                                                <span
                                                    v-if="getPermissionSource(permission.name, action.name)"
                                                    :class="getPermissionSource(permission.name, action.name) === 'role' ? 'text-blue-600' : 'text-green-600'"
                                                    class="ml-1 text-xs"
                                                >
                                                    ({{ getPermissionSource(permission.name, action.name) === 'role' ? 'R' : 'D' }})
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Save Button -->
                    <div class="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div class="flex items-center justify-between">
                            <div class="text-sm text-gray-600">
                                <div class="flex items-center space-x-4">
                                    <div class="flex items-center">
                                        <span class="w-3 h-3 bg-blue-600 rounded mr-2"></span>
                                        <span>(R) = Via Role</span>
                                    </div>
                                    <div class="flex items-center">
                                        <span class="w-3 h-3 bg-green-600 rounded mr-2"></span>
                                        <span>(D) = Direct Assignment</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                :disabled="permissionForm.processing || user.is_admin"
                                class="bg-brand-red text-white px-6 py-2 rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {{ permissionForm.processing ? 'Saving...' : 'Save Permissions' }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AdminLayout from '@/Components/Admin/AdminLayout.vue';

// Props
const props = defineProps({
    user: {
        type: Object,
        required: true
    },
    permissions: {
        type: Object,
        default: () => ({})
    },
    actions: {
        type: Array,
        default: () => []
    },
    roles: {
        type: Array,
        default: () => []
    },
    effectivePermissions: {
        type: Object,
        default: () => ({})
    }
});

// State
const selectedRoleId = ref('');
const permissionStates = reactive({});

// Initialize permission states
Object.keys(props.permissions).forEach(module => {
    props.permissions[module].forEach(permission => {
        if (!permissionStates[permission.id]) {
            permissionStates[permission.id] = {};
        }
        props.actions.forEach(action => {
            permissionStates[permission.id][action.id] = isPermissionChecked(permission.id, action.id);
        });
    });
});

// Computed
const availableRoles = computed(() => {
    const currentRoleIds = props.user.roles?.map(r => r.id) || [];
    return props.roles.filter(role => !currentRoleIds.includes(role.id));
});

// Forms
const roleForm = useForm({
    role_id: null
});

const removeRoleForm = useForm({
    role_id: null
});

const permissionForm = useForm({
    permissions: []
});

// Functions
function isPermissionChecked(permissionId, actionId) {
    // Check if user has direct permission
    const userPermissions = props.user.userPermissions || [];
    return userPermissions.some(up =>
        up.permission_id === permissionId &&
        up.permission_action_id === actionId &&
        up.is_granted
    );
}

function hasEffectivePermission(permissionName, actionName) {
    if (props.user.is_admin) return true;

    return props.effectivePermissions[permissionName]?.[actionName] !== undefined;
}

function getPermissionSource(permissionName, actionName) {
    if (props.user.is_admin) return 'admin';

    return props.effectivePermissions[permissionName]?.[actionName] || null;
}

function updatePermissionState(permissionId, actionId, checked) {
    if (props.user.is_admin) return;

    permissionStates[permissionId][actionId] = checked;
}

function assignRole() {
    if (!selectedRoleId.value) return;

    roleForm.role_id = selectedRoleId.value;
    roleForm.post(route('admin.user-permissions.assign-role', props.user.id), {
        onSuccess: () => {
            selectedRoleId.value = '';
        }
    });
}

function removeRole(roleId) {
    removeRoleForm.role_id = roleId;
    removeRoleForm.delete(route('admin.user-permissions.remove-role', props.user.id));
}

function updatePermissions() {
    if (props.user.is_admin) return;

    const permissions = [];

    Object.keys(permissionStates).forEach(permissionId => {
        Object.keys(permissionStates[permissionId]).forEach(actionId => {
            permissions.push({
                permission_id: parseInt(permissionId),
                action_id: parseInt(actionId),
                granted: permissionStates[permissionId][actionId]
            });
        });
    });

    permissionForm.permissions = permissions;
    permissionForm.put(route('admin.user-permissions.update', props.user.id));
}
</script>

<style scoped>
.bg-brand-red {
    background-color: #FF3621;
}

.text-brand-red {
    color: #FF3621;
}

.focus\:ring-brand-red:focus {
    --tw-ring-color: #FF3621;
}

.border-brand-red {
    border-color: #FF3621;
}

.hover\:bg-red-600:hover {
    background-color: #e53e3e;
}

/* Permission grid animations */
.permission-card {
    transition: all 0.2s ease-in-out;
}

.permission-card:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Checkbox styling */
input[type="checkbox"]:checked {
    background-color: #FF3621;
    border-color: #FF3621;
}

input[type="checkbox"]:focus {
    ring-color: #FF3621;
}
</style>