<template>
    <AdminLayout
        page-title="Users Management"
        page-subtitle="Manage admin users and permissions"
    >
        <Head title="Users - Admin Dashboard" />

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

        <!-- Users Table -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <!-- Header -->
            <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">Admin Users</h2>
                <button
                    @click="openAddModal"
                    class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center"
                >
                    <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                    </svg>
                    Add New User
                </button>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="h-10 w-10 rounded-full flex-shrink-0 overflow-hidden">
                                        <img
                                            v-if="user.profile_image_url"
                                            :src="user.profile_image_url"
                                            :alt="user.name"
                                            class="h-full w-full object-cover"
                                        />
                                        <div v-else class="h-full w-full bg-brand-red flex items-center justify-center">
                                            <span class="text-white text-sm font-semibold">{{ user.name.charAt(0).toUpperCase() }}</span>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">{{ user.name }}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ user.email }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ user.created_at }}</div>
                                <div class="text-xs text-gray-500">{{ user.created_at_human }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex items-center justify-end space-x-2">
                                    <button
                                        @click="openEditModal(user)"
                                        class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        @click="openPasswordModal(user)"
                                        class="text-yellow-600 hover:text-yellow-900 bg-yellow-50 hover:bg-yellow-100 px-3 py-1 rounded-md transition-colors duration-200"
                                    >
                                        Password
                                    </button>
                                    <button
                                        @click="confirmDelete(user)"
                                        class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200"
                                        :disabled="user.id === $page.props.auth?.user?.id"
                                        :class="{ 'opacity-50 cursor-not-allowed': user.id === $page.props.auth?.user?.id }"
                                    >
                                        Delete
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
                    <p class="mt-2 text-gray-600">Get started by creating a new admin user.</p>
                </div>
            </div>
        </div>

        <!-- Add/Edit User Modal -->
        <div
            v-if="showModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            @click.self="closeModal"
        >
            <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">
                    {{ isEditing ? 'Edit User' : 'Add New User' }}
                </h3>

                <form @submit.prevent="submitUser">
                    <div class="space-y-4">
                        <!-- Name -->
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                id="name"
                                v-model="userForm.name"
                                type="text"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                :class="{ 'border-red-500': userForm.errors.name }"
                                required
                            />
                            <div v-if="userForm.errors.name" class="text-red-600 text-sm mt-1">
                                {{ userForm.errors.name }}
                            </div>
                        </div>

                        <!-- Email -->
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                id="email"
                                v-model="userForm.email"
                                type="email"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                :class="{ 'border-red-500': userForm.errors.email }"
                                required
                            />
                            <div v-if="userForm.errors.email" class="text-red-600 text-sm mt-1">
                                {{ userForm.errors.email }}
                            </div>
                        </div>

                        <!-- Profile Image -->
                        <div>
                            <label for="profile_image" class="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
                            <div class="flex items-center space-x-4">
                                <!-- Current image preview -->
                                <div v-if="isEditing && selectedUser?.profile_image_url" class="flex-shrink-0">
                                    <img
                                        :src="selectedUser.profile_image_url"
                                        :alt="selectedUser.name"
                                        class="h-12 w-12 rounded-full object-cover"
                                    />
                                </div>

                                <!-- New image preview -->
                                <div v-if="profileImagePreview" class="flex-shrink-0">
                                    <img
                                        :src="profileImagePreview"
                                        alt="Preview"
                                        class="h-12 w-12 rounded-full object-cover border-2 border-brand-red"
                                    />
                                </div>

                                <div class="flex-1">
                                    <input
                                        id="profile_image"
                                        type="file"
                                        accept="image/*"
                                        @change="handleImageUpload"
                                        class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-red file:text-white hover:file:bg-red-600"
                                        :class="{ 'border-red-500': userForm.errors.profile_image }"
                                    />
                                    <p class="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 2MB</p>
                                </div>
                            </div>
                            <div v-if="userForm.errors.profile_image" class="text-red-600 text-sm mt-1">
                                {{ userForm.errors.profile_image }}
                            </div>
                        </div>

                        <!-- Password (only for new users) -->
                        <div v-if="!isEditing">
                            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                id="password"
                                v-model="userForm.password"
                                type="password"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                :class="{ 'border-red-500': userForm.errors.password }"
                                required
                            />
                            <div v-if="userForm.errors.password" class="text-red-600 text-sm mt-1">
                                {{ userForm.errors.password }}
                            </div>
                        </div>

                        <!-- Confirm Password (only for new users) -->
                        <div v-if="!isEditing">
                            <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                            <input
                                id="password_confirmation"
                                v-model="userForm.password_confirmation"
                                type="password"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                required
                            />
                        </div>
                    </div>

                    <div class="flex items-center justify-end space-x-3 mt-6">
                        <button
                            type="button"
                            @click="closeModal"
                            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            :disabled="userForm.processing"
                            class="px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-md transition-colors duration-200 disabled:opacity-50"
                        >
                            {{ userForm.processing ? 'Saving...' : (isEditing ? 'Update User' : 'Create User') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Password Change Modal -->
        <div
            v-if="showPasswordModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            @click.self="closePasswordModal"
        >
            <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">
                    Change Password for {{ selectedUser?.name }}
                </h3>

                <form @submit.prevent="submitPasswordChange">
                    <div class="space-y-4">
                        <!-- New Password -->
                        <div>
                            <label for="new_password" class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <input
                                id="new_password"
                                v-model="passwordForm.password"
                                type="password"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                :class="{ 'border-red-500': passwordForm.errors.password }"
                                required
                            />
                            <div v-if="passwordForm.errors.password" class="text-red-600 text-sm mt-1">
                                {{ passwordForm.errors.password }}
                            </div>
                        </div>

                        <!-- Confirm New Password -->
                        <div>
                            <label for="new_password_confirmation" class="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                            <input
                                id="new_password_confirmation"
                                v-model="passwordForm.password_confirmation"
                                type="password"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                required
                            />
                        </div>
                    </div>

                    <div class="flex items-center justify-end space-x-3 mt-6">
                        <button
                            type="button"
                            @click="closePasswordModal"
                            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            :disabled="passwordForm.processing"
                            class="px-4 py-2 text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded-md transition-colors duration-200 disabled:opacity-50"
                        >
                            {{ passwordForm.processing ? 'Updating...' : 'Update Password' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Delete Confirmation Modal -->
        <div
            v-if="showDeleteModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            @click.self="closeDeleteModal"
        >
            <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Delete User</h3>
                <p class="text-gray-600 mb-6">
                    Are you sure you want to delete <strong>{{ selectedUser?.name }}</strong>? This action cannot be undone.
                </p>

                <div class="flex items-center justify-end space-x-3">
                    <button
                        type="button"
                        @click="closeDeleteModal"
                        class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        @click="deleteUser"
                        :disabled="deleteForm.processing"
                        class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50"
                    >
                        {{ deleteForm.processing ? 'Deleting...' : 'Delete User' }}
                    </button>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import AdminLayout from '@/Components/Admin/AdminLayout.vue';

// Props
const props = defineProps({
    users: {
        type: Array,
        default: () => []
    }
});

// Modal states
const showModal = ref(false);
const showPasswordModal = ref(false);
const showDeleteModal = ref(false);
const isEditing = ref(false);
const selectedUser = ref(null);
const profileImagePreview = ref(null);

// Forms
const userForm = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_image: null
});

const passwordForm = useForm({
    password: '',
    password_confirmation: ''
});

const deleteForm = useForm({});

// User CRUD functions
const openAddModal = () => {
    isEditing.value = false;
    profileImagePreview.value = null;
    userForm.reset();
    userForm.clearErrors();
    showModal.value = true;
};

const openEditModal = (user) => {
    isEditing.value = true;
    selectedUser.value = user;
    profileImagePreview.value = null;
    userForm.name = user.name;
    userForm.email = user.email;
    userForm.password = '';
    userForm.password_confirmation = '';
    userForm.profile_image = null;
    userForm.clearErrors();
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    selectedUser.value = null;
    profileImagePreview.value = null;
    userForm.reset();
    userForm.clearErrors();
};

const submitUser = () => {
    if (isEditing.value) {
        userForm.transform((data) => ({
            ...data,
            _method: 'PUT'
        })).post(route('admin.users.update', selectedUser.value.id), {
            onSuccess: () => {
                closeModal();
            }
        });
    } else {
        userForm.post(route('admin.users.store'), {
            onSuccess: () => {
                closeModal();
            }
        });
    }
};

// Password change functions
const openPasswordModal = (user) => {
    selectedUser.value = user;
    passwordForm.reset();
    passwordForm.clearErrors();
    showPasswordModal.value = true;
};

const closePasswordModal = () => {
    showPasswordModal.value = false;
    selectedUser.value = null;
    passwordForm.reset();
    passwordForm.clearErrors();
};

const submitPasswordChange = () => {
    passwordForm.put(route('admin.users.password', selectedUser.value.id), {
        onSuccess: () => {
            closePasswordModal();
        }
    });
};

// Delete functions
const confirmDelete = (user) => {
    selectedUser.value = user;
    showDeleteModal.value = true;
};

const closeDeleteModal = () => {
    showDeleteModal.value = false;
    selectedUser.value = null;
};

const deleteUser = () => {
    deleteForm.delete(route('admin.users.destroy', selectedUser.value.id), {
        onSuccess: () => {
            closeDeleteModal();
        }
    });
};

// Image upload handler
const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        userForm.profile_image = file;

        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImagePreview.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
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

/* Table hover effects */
.hover\:bg-gray-50:hover {
    background-color: #f9fafb;
}

/* Button transitions */
button {
    transition: all 0.2s ease-in-out;
}

/* Form input focus styles */
input:focus {
    box-shadow: 0 0 0 3px rgba(255, 54, 33, 0.1);
}

/* Disabled button styles */
button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
</style>