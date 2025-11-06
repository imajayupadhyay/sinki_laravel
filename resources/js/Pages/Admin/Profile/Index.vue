<template>
    <AdminLayout
        page-title="Profile"
        page-subtitle="Manage your account settings and preferences"
    >
        <Head title="Profile - Admin Dashboard" />

        <!-- Profile Header -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            <div class="px-6 py-8">
                <div class="flex items-center space-x-6">
                    <!-- Profile Image -->
                    <div class="relative">
                        <div v-if="user.profile_image_url" class="h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img :src="user.profile_image_url" :alt="user.name" class="h-full w-full object-cover">
                        </div>
                        <div v-else class="h-24 w-24 bg-brand-red rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                            <span class="text-white text-2xl font-bold">{{ getInitials(user.name) }}</span>
                        </div>

                        <!-- Upload/Change Image Button -->
                        <button
                            @click="showImageUploader = true"
                            class="absolute bottom-0 right-0 h-8 w-8 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                        >
                            <svg class="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </button>
                    </div>

                    <!-- User Info -->
                    <div class="flex-1">
                        <h1 class="text-3xl font-bold text-gray-900">{{ user.name }}</h1>
                        <p class="text-gray-600 mt-1">{{ user.email }}</p>
                        <div class="flex items-center mt-3 space-x-4">
                            <div class="flex items-center text-sm text-gray-500">
                                <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                </svg>
                                Member since {{ user.created_at }}
                            </div>
                            <div v-if="user.email_verified_at" class="flex items-center text-sm text-green-600">
                                <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                Email verified
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Settings Tabs -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Main Content -->
            <div class="lg:col-span-2 space-y-8">
                <!-- Personal Information -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h2 class="text-lg font-semibold text-gray-900">Personal Information</h2>
                        <p class="text-sm text-gray-600 mt-1">Update your personal details and contact information.</p>
                    </div>
                    <div class="p-6">
                        <form @submit.prevent="updateProfile" class="space-y-6">
                            <div class="grid grid-cols-1 gap-6">
                                <!-- Name -->
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        id="name"
                                        v-model="profileForm.name"
                                        type="text"
                                        required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200"
                                        :class="{ 'border-red-500': profileForm.errors.name }"
                                    />
                                    <p v-if="profileForm.errors.name" class="mt-1 text-sm text-red-600">{{ profileForm.errors.name }}</p>
                                </div>

                                <!-- Email -->
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        id="email"
                                        v-model="profileForm.email"
                                        type="email"
                                        required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200"
                                        :class="{ 'border-red-500': profileForm.errors.email }"
                                    />
                                    <p v-if="profileForm.errors.email" class="mt-1 text-sm text-red-600">{{ profileForm.errors.email }}</p>
                                </div>
                            </div>

                            <div class="flex justify-end">
                                <button
                                    type="submit"
                                    :disabled="profileForm.processing"
                                    class="px-6 py-3 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 focus:ring-2 focus:ring-brand-red focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                >
                                    <svg v-if="profileForm.processing" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                    </svg>
                                    {{ profileForm.processing ? 'Updating...' : 'Update Profile' }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Change Password -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h2 class="text-lg font-semibold text-gray-900">Change Password</h2>
                        <p class="text-sm text-gray-600 mt-1">Ensure your account is using a long, random password to stay secure.</p>
                    </div>
                    <div class="p-6">
                        <form @submit.prevent="updatePassword" class="space-y-6">
                            <!-- Current Password -->
                            <div>
                                <label for="current_password" class="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                                <input
                                    id="current_password"
                                    v-model="passwordForm.current_password"
                                    type="password"
                                    required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200"
                                    :class="{ 'border-red-500': passwordForm.errors.current_password }"
                                />
                                <p v-if="passwordForm.errors.current_password" class="mt-1 text-sm text-red-600">{{ passwordForm.errors.current_password }}</p>
                            </div>

                            <!-- New Password -->
                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                                <input
                                    id="password"
                                    v-model="passwordForm.password"
                                    type="password"
                                    required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200"
                                    :class="{ 'border-red-500': passwordForm.errors.password }"
                                />
                                <p v-if="passwordForm.errors.password" class="mt-1 text-sm text-red-600">{{ passwordForm.errors.password }}</p>
                            </div>

                            <!-- Confirm Password -->
                            <div>
                                <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                                <input
                                    id="password_confirmation"
                                    v-model="passwordForm.password_confirmation"
                                    type="password"
                                    required
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200"
                                />
                            </div>

                            <div class="flex justify-end">
                                <button
                                    type="submit"
                                    :disabled="passwordForm.processing"
                                    class="px-6 py-3 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 focus:ring-2 focus:ring-brand-red focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                >
                                    <svg v-if="passwordForm.processing" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                    </svg>
                                    {{ passwordForm.processing ? 'Updating...' : 'Update Password' }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="space-y-6">
                <!-- Quick Stats -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900">Account Overview</h3>
                    </div>
                    <div class="p-6 space-y-4">
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600">User ID</span>
                            <span class="text-sm font-medium text-gray-900">#{{ user.id }}</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600">Status</span>
                            <span class="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600">Role</span>
                            <span class="text-sm font-medium text-gray-900">Administrator</span>
                        </div>
                    </div>
                </div>

                <!-- Security Settings -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                    <div class="px-6 py-4 border-b border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900">Security</h3>
                    </div>
                    <div class="p-6 space-y-4">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <svg class="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span class="text-sm text-gray-600">Email Verified</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <svg class="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                </svg>
                                <span class="text-sm text-gray-600">Strong Password</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Image Upload Modal -->
        <div v-if="showImageUploader" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-xl max-w-md w-full p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold text-gray-900">Update Profile Image</h3>
                    <button @click="showImageUploader = false" class="text-gray-400 hover:text-gray-600">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                <form @submit.prevent="uploadProfileImage" enctype="multipart/form-data">
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Choose Image</label>
                        <input
                            ref="fileInput"
                            type="file"
                            accept="image/*"
                            required
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red"
                        />
                        <p class="text-xs text-gray-500 mt-1">JPG, PNG, GIF up to 2MB</p>
                    </div>

                    <div class="flex justify-end space-x-3">
                        <button
                            type="button"
                            @click="showImageUploader = false"
                            class="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            v-if="user.profile_image"
                            type="button"
                            @click="deleteProfileImage"
                            :disabled="imageForm.processing"
                            class="px-4 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 disabled:opacity-50"
                        >
                            Delete Current
                        </button>
                        <button
                            type="submit"
                            :disabled="imageForm.processing"
                            class="px-4 py-2 bg-brand-red text-white rounded-lg hover:bg-brand-red/90 disabled:opacity-50"
                        >
                            {{ imageForm.processing ? 'Uploading...' : 'Upload' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Success/Error Messages -->
        <div v-if="$page.props.flash.success" class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            {{ $page.props.flash.success }}
        </div>
        <div v-if="$page.props.flash.error" class="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            {{ $page.props.flash.error }}
        </div>
    </AdminLayout>
</template>

<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import AdminLayout from '@/Components/Admin/AdminLayout.vue';

const props = defineProps({
    user: Object
});

const showImageUploader = ref(false);

// Profile form
const profileForm = useForm({
    name: props.user.name,
    email: props.user.email,
});

// Password form
const passwordForm = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

// Image form
const imageForm = useForm({});

const getInitials = (name) => {
    return name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

const updateProfile = () => {
    profileForm.put(route('admin.profile.update'), {
        preserveScroll: true,
        onSuccess: () => {
            // Profile updated successfully
        }
    });
};

const updatePassword = () => {
    passwordForm.put(route('admin.profile.password'), {
        preserveScroll: true,
        onSuccess: () => {
            passwordForm.reset();
        }
    });
};

const uploadProfileImage = () => {
    const fileInput = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append('profile_image', fileInput.files[0]);

    imageForm.post(route('admin.profile.image.upload'), {
        data: formData,
        preserveScroll: true,
        onSuccess: () => {
            showImageUploader.value = false;
        }
    });
};

const deleteProfileImage = () => {
    if (confirm('Are you sure you want to delete your profile image?')) {
        imageForm.delete(route('admin.profile.image.delete'), {
            preserveScroll: true,
            onSuccess: () => {
                showImageUploader.value = false;
            }
        });
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

.border-brand-red {
    border-color: #FF3621;
}

.focus\:ring-brand-red:focus {
    --tw-ring-color: #FF3621;
}

.focus\:border-brand-red:focus {
    border-color: #FF3621;
}

.hover\:bg-brand-red\/90:hover {
    background-color: rgba(255, 54, 33, 0.9);
}
</style>