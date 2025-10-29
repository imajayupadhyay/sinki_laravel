<template>
    <AdminLayout
        page-title="Categories Management"
        page-subtitle="Manage blog categories and their SEO settings"
    >
        <Head title="Categories - Admin Dashboard" />

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

        <!-- Categories Table -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <!-- Header -->
            <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">Blog Categories</h2>
                <button
                    @click="openAddModal"
                    class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center"
                >
                    <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                    </svg>
                    Add New Category
                </button>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blogs</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="category in categories" :key="category.id" class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="h-10 w-10 bg-brand-red rounded-full flex items-center justify-center">
                                        <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                                        </svg>
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">{{ category.name }}</div>
                                        <div v-if="category.description" class="text-xs text-gray-500">{{ category.description.substring(0, 50) }}{{ category.description.length > 50 ? '...' : '' }}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    {{ category.slug }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {{ category.blogs_count }} posts
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ category.created_at }}</div>
                                <div class="text-xs text-gray-500">{{ category.created_at_human }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex items-center justify-end space-x-2">
                                    <button
                                        @click="openEditModal(category)"
                                        class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        @click="confirmDelete(category)"
                                        class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200"
                                        :disabled="category.blogs_count > 0"
                                        :class="{ 'opacity-50 cursor-not-allowed': category.blogs_count > 0 }"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- Empty State -->
                <div v-if="!categories || categories.length === 0" class="text-center py-12">
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                    </svg>
                    <h3 class="mt-4 text-lg font-medium text-gray-900">No categories found</h3>
                    <p class="mt-2 text-gray-600">Get started by creating your first blog category.</p>
                </div>
            </div>
        </div>

        <!-- Add/Edit Category Modal -->
        <div
            v-if="showModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            @click.self="closeModal"
        >
            <div class="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-screen overflow-y-auto">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">
                    {{ isEditing ? 'Edit Category' : 'Add New Category' }}
                </h3>

                <form @submit.prevent="submitCategory">
                    <div class="space-y-4">
                        <!-- Name -->
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                id="name"
                                v-model="categoryForm.name"
                                type="text"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                :class="{ 'border-red-500': categoryForm.errors.name }"
                                required
                            />
                            <div v-if="categoryForm.errors.name" class="text-red-600 text-sm mt-1">
                                {{ categoryForm.errors.name }}
                            </div>
                        </div>

                        <!-- Slug -->
                        <div>
                            <label for="slug" class="block text-sm font-medium text-gray-700 mb-1">Slug (URL-friendly name)</label>
                            <input
                                id="slug"
                                v-model="categoryForm.slug"
                                type="text"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                :class="{ 'border-red-500': categoryForm.errors.slug }"
                                placeholder="Leave empty to auto-generate from name"
                            />
                            <div v-if="categoryForm.errors.slug" class="text-red-600 text-sm mt-1">
                                {{ categoryForm.errors.slug }}
                            </div>
                        </div>

                        <!-- Description -->
                        <div>
                            <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                id="description"
                                v-model="categoryForm.description"
                                rows="3"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                :class="{ 'border-red-500': categoryForm.errors.description }"
                            ></textarea>
                            <div v-if="categoryForm.errors.description" class="text-red-600 text-sm mt-1">
                                {{ categoryForm.errors.description }}
                            </div>
                        </div>

                        <!-- SEO Fields -->
                        <div class="border-t pt-4">
                            <h4 class="text-md font-medium text-gray-900 mb-3">SEO Settings</h4>

                            <!-- Meta Title -->
                            <div class="mb-4">
                                <label for="meta_title" class="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                                <input
                                    id="meta_title"
                                    v-model="categoryForm.meta_title"
                                    type="text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                    :class="{ 'border-red-500': categoryForm.errors.meta_title }"
                                    placeholder="SEO title for search engines"
                                />
                                <div v-if="categoryForm.errors.meta_title" class="text-red-600 text-sm mt-1">
                                    {{ categoryForm.errors.meta_title }}
                                </div>
                            </div>

                            <!-- Meta Description -->
                            <div>
                                <label for="meta_description" class="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                                <textarea
                                    id="meta_description"
                                    v-model="categoryForm.meta_description"
                                    rows="2"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                    :class="{ 'border-red-500': categoryForm.errors.meta_description }"
                                    placeholder="SEO description for search engines (150-160 characters)"
                                ></textarea>
                                <div v-if="categoryForm.errors.meta_description" class="text-red-600 text-sm mt-1">
                                    {{ categoryForm.errors.meta_description }}
                                </div>
                            </div>
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
                            :disabled="categoryForm.processing"
                            class="px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-md transition-colors duration-200 disabled:opacity-50"
                        >
                            {{ categoryForm.processing ? 'Saving...' : (isEditing ? 'Update Category' : 'Create Category') }}
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
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Delete Category</h3>
                <p class="text-gray-600 mb-6">
                    Are you sure you want to delete <strong>{{ selectedCategory?.name }}</strong>? This action cannot be undone.
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
                        @click="deleteCategory"
                        :disabled="deleteForm.processing"
                        class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50"
                    >
                        {{ deleteForm.processing ? 'Deleting...' : 'Delete Category' }}
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
    categories: {
        type: Array,
        default: () => []
    }
});

// Modal states
const showModal = ref(false);
const showDeleteModal = ref(false);
const isEditing = ref(false);
const selectedCategory = ref(null);

// Forms
const categoryForm = useForm({
    name: '',
    slug: '',
    description: '',
    meta_title: '',
    meta_description: ''
});

const deleteForm = useForm({});

// Category CRUD functions
const openAddModal = () => {
    isEditing.value = false;
    categoryForm.reset();
    categoryForm.clearErrors();
    showModal.value = true;
};

const openEditModal = (category) => {
    isEditing.value = true;
    selectedCategory.value = category;
    categoryForm.name = category.name;
    categoryForm.slug = category.slug;
    categoryForm.description = category.description || '';
    categoryForm.meta_title = category.meta_title || '';
    categoryForm.meta_description = category.meta_description || '';
    categoryForm.clearErrors();
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    selectedCategory.value = null;
    categoryForm.reset();
    categoryForm.clearErrors();
};

const submitCategory = () => {
    if (isEditing.value) {
        categoryForm.put(route('admin.categories.update', selectedCategory.value.id), {
            onSuccess: () => {
                closeModal();
            }
        });
    } else {
        categoryForm.post(route('admin.categories.store'), {
            onSuccess: () => {
                closeModal();
            }
        });
    }
};

// Delete functions
const confirmDelete = (category) => {
    selectedCategory.value = category;
    showDeleteModal.value = true;
};

const closeDeleteModal = () => {
    showDeleteModal.value = false;
    selectedCategory.value = null;
};

const deleteCategory = () => {
    deleteForm.delete(route('admin.categories.destroy', selectedCategory.value.id), {
        onSuccess: () => {
            closeDeleteModal();
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

/* Table hover effects */
.hover\:bg-gray-50:hover {
    background-color: #f9fafb;
}

/* Button transitions */
button {
    transition: all 0.2s ease-in-out;
}

/* Form input focus styles */
input:focus, textarea:focus {
    box-shadow: 0 0 0 3px rgba(255, 54, 33, 0.1);
}

/* Disabled button styles */
button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
</style>