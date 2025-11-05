<template>
    <AdminLayout
        page-title="Service Pages Management"
        page-subtitle="Manage all service pages, content and sections"
    >
        <Head title="Service Pages - Admin Dashboard" />

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
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div class="flex items-center">
                    <div class="p-2 bg-blue-100 rounded-lg">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-medium text-gray-600">Total Pages</p>
                        <p class="text-2xl font-bold text-gray-900">{{ servicePages.total }}</p>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div class="flex items-center">
                    <div class="p-2 bg-green-100 rounded-lg">
                        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-medium text-gray-600">Published</p>
                        <p class="text-2xl font-bold text-gray-900">{{ publishedCount }}</p>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div class="flex items-center">
                    <div class="p-2 bg-yellow-100 rounded-lg">
                        <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                        </svg>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-medium text-gray-600">Drafts</p>
                        <p class="text-2xl font-bold text-gray-900">{{ draftCount }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Service Pages Table -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <!-- Header -->
            <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">Service Pages</h2>
                <Link
                    :href="route('admin.service-pages.create')"
                    class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center"
                >
                    <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                    </svg>
                    Create New Page
                </Link>
            </div>

                <div v-if="servicePages.data.length === 0" class="text-center py-12">
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    <p class="mt-4 text-lg text-gray-600">No service pages found</p>
                    <p class="text-gray-500">Get started by creating your first service page.</p>
                    <Link
                        :href="route('admin.service-pages.create')"
                        class="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    >
                        Create Service Page
                    </Link>
                </div>

                <div v-else class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sort Order</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                                <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="page in servicePages.data" :key="page.id" class="hover:bg-gray-50">
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div>
                                        <div class="text-sm font-medium text-gray-900">{{ page.title }}</div>
                                        <div class="text-sm text-gray-500">/services/{{ page.slug }}</div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span
                                        :class="{
                                            'bg-green-100 text-green-800': page.status === 'published',
                                            'bg-yellow-100 text-yellow-800': page.status === 'draft'
                                        }"
                                        class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                                    >
                                        {{ page.status }}
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <button
                                        @click="toggleFeatured(page)"
                                        :class="{
                                            'bg-blue-100 text-blue-800': page.is_featured,
                                            'bg-gray-100 text-gray-800': !page.is_featured
                                        }"
                                        class="inline-flex px-2 py-1 text-xs font-semibold rounded-full cursor-pointer hover:opacity-80"
                                    >
                                        {{ page.is_featured ? 'Featured' : 'Normal' }}
                                    </button>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {{ page.sort_order }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {{ formatDate(page.created_at) }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div class="flex items-center justify-end space-x-2">
                                        <Link
                                            :href="route('admin.service-pages.preview', page.id)"
                                            class="text-blue-600 hover:text-blue-900"
                                            target="_blank"
                                        >
                                            Preview
                                        </Link>
                                        <Link
                                            :href="route('admin.service-pages.edit', page.id)"
                                            class="text-indigo-600 hover:text-indigo-900"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            @click="deletePage(page)"
                                            class="text-red-600 hover:text-red-900"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Pagination -->
                <div v-if="servicePages.last_page > 1" class="px-6 py-3 border-t border-gray-200">
                    <div class="flex items-center justify-between">
                        <div class="text-sm text-gray-700">
                            Showing {{ servicePages.from }} to {{ servicePages.to }} of {{ servicePages.total }} results
                        </div>
                        <div class="flex space-x-1">
                            <Link
                                v-for="page in servicePages.links"
                                :key="page.label"
                                :href="page.url"
                                :class="{
                                    'bg-blue-600 text-white': page.active,
                                    'text-gray-500': !page.url,
                                    'text-gray-700 hover:text-gray-900': page.url && !page.active
                                }"
                                class="px-3 py-2 text-sm font-medium rounded"
                                v-html="page.label"
                            />
                        </div>
                    </div>
                </div>
            </div>
    </AdminLayout>
</template>

<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import { computed } from 'vue';
import AdminLayout from '@/Components/Admin/AdminLayout.vue';

const props = defineProps({
    servicePages: Object
});

const publishedCount = computed(() => {
    return props.servicePages.data.filter(page => page.status === 'published').length;
});

const draftCount = computed(() => {
    return props.servicePages.data.filter(page => page.status === 'draft').length;
});

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

const toggleFeatured = (page) => {
    router.post(route('admin.service-pages.toggle-featured', page.id), {}, {
        preserveState: true,
        preserveScroll: true
    });
};

const deletePage = (page) => {
    if (confirm(`Are you sure you want to delete "${page.title}"?`)) {
        router.delete(route('admin.service-pages.destroy', page.id));
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

.hover\:bg-red-600:hover {
    background-color: #dc2626;
}
</style>