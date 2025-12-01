<template>
    <AdminLayout
        page-title="User Permissions"
        page-subtitle="Manage user roles and permissions for admin panel access"
    >
        <Head title="User Permissions - Admin Dashboard" />

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

        <!-- Users with Permissions Table -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <!-- Header -->
            <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <div>
                    <h2 class="text-lg font-semibold text-gray-900">User Permissions Management</h2>
                    <p class="text-sm text-gray-600 mt-1">Assign roles and specific permissions to users</p>
                </div>
                <div class="flex space-x-3">
                    <!-- Quick Role Assignment -->
                    <select
                        v-model="quickRole"
                        class="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    >
                        <option value="">Quick Role Assignment</option>
                        <option v-for="role in roles" :key="role.id" :value="role.id">
                            {{ role.display_name }}
                        </option>
                    </select>
                    <button
                        @click="applyQuickRole"
                        :disabled="!quickRole || selectedUsers.length === 0"
                        class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Apply to Selected ({{ selectedUsers.length }})
                    </button>
                </div>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left">
                                <input
                                    type="checkbox"
                                    @change="toggleAllUsers"
                                    :checked="selectedUsers.length === users.length && users.length > 0"
                                    class="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded"
                                />
                            </th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roles</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions</th>
                            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <input
                                    type="checkbox"
                                    :value="user.id"
                                    v-model="selectedUsers"
                                    class="h-4 w-4 text-brand-red focus:ring-brand-red border-gray-300 rounded"
                                />
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="h-10 w-10 rounded-full flex-shrink-0 overflow-hidden">
                                        <div v-if="user.is_admin" class="h-full w-full bg-yellow-500 flex items-center justify-center">
                                            <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.586-4.414A2 2 0 0118 9.172v2.828a2 2 0 01-.586 1.414L13 18H9l-4.414-4.414A2 2 0 014 12.172V9.172a2 2 0 01.586-1.414L9 3h4l4.414 4.414z"/>
                                            </svg>
                                        </div>
                                        <div v-else class="h-full w-full bg-brand-red flex items-center justify-center">
                                            <span class="text-white text-sm font-semibold">{{ user.name.charAt(0).toUpperCase() }}</span>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900 flex items-center">
                                            {{ user.name }}
                                            <span v-if="user.is_admin" class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                Super Admin
                                            </span>
                                        </div>
                                        <div class="text-sm text-gray-500">{{ user.email }}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span
                                    :class="user.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                >
                                    {{ user.is_active ? 'Active' : 'Inactive' }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex flex-wrap gap-1">
                                    <span
                                        v-for="role in user.roles"
                                        :key="role.id"
                                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                    >
                                        {{ role.display_name }}
                                    </span>
                                    <span v-if="user.roles.length === 0" class="text-sm text-gray-500 italic">
                                        No roles assigned
                                    </span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">
                                    <span v-if="user.direct_permissions.length > 0" class="text-green-600">
                                        {{ user.direct_permissions.length }} direct permission(s)
                                    </span>
                                    <span v-else class="text-gray-500 italic">
                                        Via roles only
                                    </span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex items-center justify-end space-x-2">
                                    <Link
                                        :href="route('admin.user-permissions.show', user.id)"
                                        class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200"
                                    >
                                        Manage
                                    </Link>
                                    <button
                                        @click="showRoleModal(user)"
                                        class="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md transition-colors duration-200"
                                    >
                                        Roles
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- Empty State -->
                <div v-if="!users || users.length === 0" class="text-center py-12">
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                    </svg>
                    <h3 class="mt-4 text-lg font-medium text-gray-900">No users found</h3>
                    <p class="mt-2 text-gray-600">Create users first before managing permissions.</p>
                    <Link
                        :href="route('admin.users.index')"
                        class="mt-4 inline-flex items-center px-4 py-2 bg-brand-red text-white rounded-lg hover:bg-red-600"
                    >
                        Go to User Management
                    </Link>
                </div>
            </div>
        </div>

        <!-- Role Assignment Modal -->
        <div
            v-if="showRoleModalState"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            @click.self="closeRoleModal"
        >
            <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">
                    Manage Roles for {{ selectedUserForRole?.name }}
                </h3>

                <form @submit.prevent="updateUserRoles">
                    <div class="space-y-4 mb-6">
                        <!-- Current Roles -->
                        <div v-if="selectedUserForRole?.roles && selectedUserForRole.roles.length > 0">
                            <h4 class="text-sm font-medium text-gray-700 mb-2">Current Roles:</h4>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span
                                    v-for="role in selectedUserForRole.roles"
                                    :key="role.id"
                                    class="inline-flex items-center px-2.5 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                                >
                                    {{ role.display_name }}
                                    <button
                                        type="button"
                                        @click="removeUserRole(role.id)"
                                        class="ml-2 text-blue-600 hover:text-blue-800"
                                    >
                                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>

                        <!-- Assign New Role -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Assign New Role:</label>
                            <select
                                v-model="selectedRole"
                                class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-red focus:border-transparent"
                            >
                                <option value="">Select a role...</option>
                                <option
                                    v-for="role in availableRoles"
                                    :key="role.id"
                                    :value="role.id"
                                >
                                    {{ role.display_name }} - {{ role.description }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="flex items-center justify-end space-x-3">
                        <button
                            type="button"
                            @click="closeRoleModal"
                            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            :disabled="!selectedRole"
                            class="px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-md disabled:opacity-50"
                        >
                            Assign Role
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import AdminLayout from '@/Components/Admin/AdminLayout.vue';

// Props
const props = defineProps({
    users: {
        type: Array,
        default: () => []
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
    }
});

// State
const selectedUsers = ref([]);
const quickRole = ref('');
const showRoleModalState = ref(false);
const selectedUserForRole = ref(null);
const selectedRole = ref('');

// Computed
const availableRoles = computed(() => {
    if (!selectedUserForRole.value) return props.roles;

    const currentRoleIds = selectedUserForRole.value.roles?.map(r => r.id) || [];
    return props.roles.filter(role => !currentRoleIds.includes(role.id));
});

// Forms
const bulkForm = useForm({
    user_ids: [],
    role_id: null
});

const roleForm = useForm({
    role_id: null
});

// Functions
const toggleAllUsers = () => {
    if (selectedUsers.value.length === props.users.length) {
        selectedUsers.value = [];
    } else {
        selectedUsers.value = props.users.map(user => user.id);
    }
};

const applyQuickRole = () => {
    if (!quickRole.value || selectedUsers.value.length === 0) return;

    bulkForm.user_ids = [...selectedUsers.value];
    bulkForm.role_id = quickRole.value;

    bulkForm.post(route('admin.user-permissions.bulk'), {
        onSuccess: () => {
            selectedUsers.value = [];
            quickRole.value = '';
        }
    });
};

const showRoleModal = (user) => {
    selectedUserForRole.value = user;
    selectedRole.value = '';
    showRoleModalState.value = true;
};

const closeRoleModal = () => {
    showRoleModalState.value = false;
    selectedUserForRole.value = null;
    selectedRole.value = '';
    roleForm.clearErrors();
};

const updateUserRoles = () => {
    if (!selectedRole.value) return;

    roleForm.role_id = selectedRole.value;

    roleForm.post(route('admin.user-permissions.assign-role', selectedUserForRole.value.id), {
        onSuccess: () => {
            closeRoleModal();
        }
    });
};

const removeUserRole = (roleId) => {
    const removeForm = useForm({
        role_id: roleId
    });

    removeForm.delete(route('admin.user-permissions.remove-role', selectedUserForRole.value.id), {
        onSuccess: () => {
            // Update the local user data
            if (selectedUserForRole.value.roles) {
                selectedUserForRole.value.roles = selectedUserForRole.value.roles.filter(r => r.id !== roleId);
            }
        }
    });
};
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

/* Modal backdrop */
.fixed.inset-0 {
    backdrop-filter: blur(4px);
}
</style>