<template>
    <AdminLayout
        page-title="Weekly Databricks Tags"
        page-subtitle="Manage Weekly Databricks tags for content organization"
    >
        <Head title="Weekly Databricks Tags - Admin Dashboard" />

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

        <!-- Tags Table -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <!-- Header -->
            <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">Weekly Databricks Tags</h2>
                <button
                    @click="openAddModal"
                    class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center"
                >
                    <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                    </svg>
                    Add New Tag
                </button>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tag</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weekly Articles</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-if="tags.length === 0">
                            <td colspan="5" class="px-6 py-8 text-center text-gray-500">
                                <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                                </svg>
                                <p class="text-lg font-medium">No tags found</p>
                                <p class="mt-1">Get started by creating your first Weekly Databricks tag.</p>
                            </td>
                        </tr>
                        <tr v-for="tag in tags" :key="tag.id" class="hover:bg-gray-50 transition-colors">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex flex-col">
                                    <div class="text-sm font-medium text-gray-900">{{ tag.name }}</div>
                                    <div v-if="tag.description" class="text-sm text-gray-500 mt-1">{{ tag.description.substring(0, 60) }}{{ tag.description.length > 60 ? '...' : '' }}</div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 font-mono">
                                    {{ tag.slug }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {{ tag.weekly_databricks_count }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ tag.created_at }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                    @click="openEditModal(tag)"
                                    class="text-brand-red hover:text-red-700 mr-3 transition-colors"
                                >
                                    Edit
                                </button>
                                <button
                                    @click="deleteTag(tag)"
                                    class="text-red-600 hover:text-red-800 transition-colors"
                                    :disabled="tag.weekly_databricks_count > 0"
                                    :class="tag.weekly_databricks_count > 0 ? 'opacity-50 cursor-not-allowed' : ''"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Add/Edit Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-xl shadow-xl max-w-lg w-full mx-4">
                <div class="px-6 py-4 border-b border-gray-200">
                    <h3 class="text-lg font-semibold text-gray-900">
                        {{ isEditing ? 'Edit Tag' : 'Add New Tag' }}
                    </h3>
                </div>

                <form @submit.prevent="submitForm" class="p-6 space-y-6">
                    <!-- Name -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Tag Name *</label>
                        <input
                            v-model="form.name"
                            type="text"
                            required
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                            placeholder="Enter tag name"
                        >
                        <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                    </div>

                    <!-- Slug -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                        <input
                            v-model="form.slug"
                            type="text"
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent font-mono"
                            placeholder="Auto-generated from name"
                        >
                        <p class="mt-1 text-sm text-gray-500">Leave empty to auto-generate from name</p>
                        <p v-if="errors.slug" class="mt-1 text-sm text-red-600">{{ errors.slug }}</p>
                    </div>

                    <!-- Description -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                        <textarea
                            v-model="form.description"
                            rows="3"
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                            placeholder="Brief description of this tag"
                        ></textarea>
                        <p v-if="errors.description" class="mt-1 text-sm text-red-600">{{ errors.description }}</p>
                    </div>

                    <!-- Buttons -->
                    <div class="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                        <button
                            type="button"
                            @click="closeModal"
                            class="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            :disabled="processing"
                            class="px-4 py-2 bg-brand-red text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
                        >
                            {{ processing ? 'Saving...' : (isEditing ? 'Update Tag' : 'Create Tag') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Head, router } from '@inertiajs/vue3';
import AdminLayout from '@/Components/Admin/AdminLayout.vue';

// Props
const props = defineProps({
    tags: Array
});

// Data
const showModal = ref(false);
const isEditing = ref(false);
const processing = ref(false);
const errors = ref({});

const form = reactive({
    id: null,
    name: '',
    slug: '',
    description: ''
});

// Methods
const openAddModal = () => {
    isEditing.value = false;
    showModal.value = true;
    resetForm();
};

const openEditModal = (tag) => {
    isEditing.value = true;
    showModal.value = true;
    form.id = tag.id;
    form.name = tag.name;
    form.slug = tag.slug;
    form.description = tag.description || '';
};

const closeModal = () => {
    showModal.value = false;
    resetForm();
    errors.value = {};
};

const resetForm = () => {
    form.id = null;
    form.name = '';
    form.slug = '';
    form.description = '';
};

const submitForm = () => {
    processing.value = true;
    errors.value = {};

    const url = isEditing.value
        ? route('admin.weekly-databricks-tags.update', form.id)
        : route('admin.weekly-databricks-tags.store');

    const method = isEditing.value ? 'put' : 'post';

    router[method](url, {
        name: form.name,
        slug: form.slug || null,
        description: form.description || null
    }, {
        onSuccess: () => {
            closeModal();
        },
        onError: (err) => {
            errors.value = err;
        },
        onFinish: () => {
            processing.value = false;
        }
    });
};

const deleteTag = (tag) => {
    if (tag.weekly_databricks_count > 0) {
        alert('Cannot delete a tag that has weekly databricks articles.');
        return;
    }

    if (confirm(`Are you sure you want to delete the tag "${tag.name}"?`)) {
        router.delete(route('admin.weekly-databricks-tags.destroy', tag.id));
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
</style>