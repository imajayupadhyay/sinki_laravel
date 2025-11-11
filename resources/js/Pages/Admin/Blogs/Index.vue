<template>
    <AdminLayout
        page-title="Blog Posts Management"
        page-subtitle="Manage all blog posts, drafts and published content"
    >
        <Head title="Blog Posts - Admin Dashboard" />

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

        <!-- Filters Section -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
            <div class="px-6 py-4 border-b border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900 flex items-center">
                    <svg class="h-5 w-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"/>
                    </svg>
                    Filters
                </h3>
            </div>
            <div class="p-6">
                <form @submit.prevent="applyFilters" class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <!-- Search -->
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700">Search</label>
                            <div class="relative">
                                <input
                                    v-model="filterForm.search"
                                    type="text"
                                    placeholder="Search by title, content..."
                                    class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                                    @keyup.enter="applyFilters"
                                />
                                <svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </div>
                        </div>

                        <!-- Status Filter -->
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700">Status</label>
                            <select
                                v-model="filterForm.status"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                            >
                                <option value="all">All Status</option>
                                <option value="published">Published</option>
                                <option value="draft">Draft</option>
                            </select>
                        </div>

                        <!-- Category Filter -->
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700">Category</label>
                            <select
                                v-model="filterForm.category"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                            >
                                <option value="all">All Categories</option>
                                <option v-for="category in categories" :key="category.id" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                        </div>

                        <!-- Author Filter -->
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700">Author</label>
                            <select
                                v-model="filterForm.author"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                            >
                                <option value="all">All Authors</option>
                                <option v-for="author in authors" :key="author.id" :value="author.id">
                                    {{ author.name }}
                                </option>
                            </select>
                        </div>

                        <!-- Date From -->
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700">Date From</label>
                            <input
                                v-model="filterForm.date_from"
                                type="date"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                            />
                        </div>

                        <!-- Date To -->
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700">Date To</label>
                            <input
                                v-model="filterForm.date_to"
                                type="date"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                            />
                        </div>

                        <!-- Per Page -->
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700">Per Page</label>
                            <select
                                v-model="filterForm.per_page"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                            >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </div>

                        <!-- Sort By -->
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700">Sort By</label>
                            <select
                                v-model="filterForm.sort_by"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-colors"
                            >
                                <option value="created_at">Created Date</option>
                                <option value="title">Title</option>
                                <option value="published_at">Published Date</option>
                                <option value="status">Status</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div class="flex items-center space-x-2">
                            <label class="text-sm font-medium text-gray-700">Sort Order:</label>
                            <div class="flex rounded-lg border border-gray-300 overflow-hidden">
                                <button
                                    type="button"
                                    @click="filterForm.sort_order = 'asc'"
                                    :class="[
                                        'px-3 py-1 text-sm font-medium transition-colors',
                                        filterForm.sort_order === 'asc'
                                            ? 'bg-brand-red text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-50'
                                    ]"
                                >
                                    Asc
                                </button>
                                <button
                                    type="button"
                                    @click="filterForm.sort_order = 'desc'"
                                    :class="[
                                        'px-3 py-1 text-sm font-medium transition-colors border-l border-gray-300',
                                        filterForm.sort_order === 'desc'
                                            ? 'bg-brand-red text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-50'
                                    ]"
                                >
                                    Desc
                                </button>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <button
                                type="button"
                                @click="clearFilters"
                                class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                Clear Filters
                            </button>
                            <button
                                type="submit"
                                class="px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-lg transition-colors"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Blog Posts Table -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <!-- Header -->
            <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <h2 class="text-lg font-semibold text-gray-900">Blog Posts</h2>
                    <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        {{ blogs.total }} {{ blogs.total === 1 ? 'post' : 'posts' }}
                    </span>
                </div>
                <Link
                    :href="route('admin.blogs.create')"
                    class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center"
                >
                    <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                    </svg>
                    Create New Post
                </Link>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Published</th>
                            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="blog in blogs.data" :key="blog.id" class="hover:bg-gray-50">
                            <td class="px-6 py-4">
                                <div class="flex items-start">
                                    <div class="h-12 w-12 bg-brand-red rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                        </svg>
                                    </div>
                                    <div class="ml-4 min-w-0 flex-1">
                                        <div class="text-sm font-medium text-gray-900 truncate">{{ blog.title }}</div>
                                        <div class="text-xs text-gray-500">{{ blog.slug }}</div>
                                        <div v-if="blog.tags" class="mt-1 flex flex-wrap gap-1">
                                            <span
                                                v-for="tag in blog.tags.split(', ').slice(0, 3)"
                                                :key="tag"
                                                class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800"
                                            >
                                                {{ tag }}
                                            </span>
                                            <span
                                                v-if="blog.tags.split(', ').length > 3"
                                                class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600"
                                            >
                                                +{{ blog.tags.split(', ').length - 3 }} more
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span
                                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                                    :class="{
                                        'bg-green-100 text-green-800': blog.status === 'published',
                                        'bg-yellow-100 text-yellow-800': blog.status === 'draft'
                                    }"
                                >
                                    {{ blog.status === 'published' ? 'Published' : 'Draft' }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ blog.category || 'Uncategorized' }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ blog.author }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div v-if="blog.published_at" class="text-sm text-gray-900">{{ blog.published_at }}</div>
                                <div v-else class="text-xs text-gray-500">{{ blog.created_at_human }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex items-center justify-end space-x-2">
                                    <Link
                                        :href="route('admin.blogs.edit', blog.id)"
                                        class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        :href="route('admin.blogs.preview', blog.id)"
                                        target="_blank"
                                        class="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-md transition-colors duration-200"
                                    >
                                        Preview
                                    </Link>
                                    <Link
                                        :href="route('admin.blogs.duplicate', blog.id)"
                                        class="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md transition-colors duration-200"
                                    >
                                        Duplicate
                                    </Link>
                                    <button
                                        @click="confirmDelete(blog)"
                                        class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- Empty State -->
                <div v-if="!blogs.data || blogs.data.length === 0" class="text-center py-12">
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    <h3 class="mt-4 text-lg font-medium text-gray-900">No blog posts found</h3>
                    <p class="mt-2 text-gray-600">{{ hasActiveFilters ? 'Try adjusting your filters or' : '' }} Get started by creating your first blog post.</p>
                    <div class="mt-6 space-x-3">
                        <button
                            v-if="hasActiveFilters"
                            @click="clearFilters"
                            class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Clear Filters
                        </button>
                        <Link
                            :href="route('admin.blogs.create')"
                            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-red hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                            </svg>
                            Create New Post
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pagination -->
        <div v-if="blogs.data && blogs.data.length > 0" class="bg-white rounded-xl shadow-sm border border-gray-200 mt-6">
            <div class="px-6 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex-1 flex justify-between sm:hidden">
                        <Link
                            v-if="blogs.prev_page_url"
                            :href="blogs.prev_page_url"
                            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Previous
                        </Link>
                        <Link
                            v-if="blogs.next_page_url"
                            :href="blogs.next_page_url"
                            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Next
                        </Link>
                    </div>
                    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p class="text-sm text-gray-700">
                                Showing
                                <span class="font-medium">{{ blogs.from || 0 }}</span>
                                to
                                <span class="font-medium">{{ blogs.to || 0 }}</span>
                                of
                                <span class="font-medium">{{ blogs.total }}</span>
                                results
                            </p>
                        </div>
                        <div>
                            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                <!-- Previous Page -->
                                <Link
                                    v-if="blogs.prev_page_url"
                                    :href="blogs.prev_page_url"
                                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span class="sr-only">Previous</span>
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                    </svg>
                                </Link>
                                <span
                                    v-else
                                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-400"
                                >
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                    </svg>
                                </span>

                                <!-- Page Numbers -->
                                <template v-for="(link, index) in blogs.links" :key="index">
                                    <Link
                                        v-if="link.url && link.label !== '&laquo; Previous' && link.label !== 'Next &raquo;'"
                                        :href="link.url"
                                        :class="[
                                            'relative inline-flex items-center px-4 py-2 border text-sm font-medium',
                                            link.active
                                                ? 'z-10 bg-brand-red border-brand-red text-white'
                                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                        ]"
                                        v-html="link.label"
                                    ></Link>
                                    <span
                                        v-else-if="link.label !== '&laquo; Previous' && link.label !== 'Next &raquo;'"
                                        :class="[
                                            'relative inline-flex items-center px-4 py-2 border text-sm font-medium',
                                            link.active
                                                ? 'z-10 bg-brand-red border-brand-red text-white'
                                                : 'bg-gray-100 border-gray-300 text-gray-400'
                                        ]"
                                        v-html="link.label"
                                    ></span>
                                </template>

                                <!-- Next Page -->
                                <Link
                                    v-if="blogs.next_page_url"
                                    :href="blogs.next_page_url"
                                    class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                    <span class="sr-only">Next</span>
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                    </svg>
                                </Link>
                                <span
                                    v-else
                                    class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-400"
                                >
                                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                    </svg>
                                </span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Delete Confirmation Modal -->
        <div
            v-if="showDeleteModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            @click.self="closeDeleteModal"
        >
            <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Delete Blog Post</h3>
                <p class="text-gray-600 mb-6">
                    Are you sure you want to delete <strong>{{ selectedBlog?.title }}</strong>? This action cannot be undone.
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
                        @click="deleteBlog"
                        :disabled="deleteForm.processing"
                        class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50"
                    >
                        {{ deleteForm.processing ? 'Deleting...' : 'Delete Post' }}
                    </button>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';
import AdminLayout from '@/Components/Admin/AdminLayout.vue';

// Props
const props = defineProps({
    blogs: {
        type: Object,
        default: () => ({ data: [], total: 0 })
    },
    categories: {
        type: Array,
        default: () => []
    },
    authors: {
        type: Array,
        default: () => []
    },
    filters: {
        type: Object,
        default: () => ({})
    }
});

// Filter form
const filterForm = reactive({
    search: props.filters.search || '',
    status: props.filters.status || 'all',
    category: props.filters.category || 'all',
    author: props.filters.author || 'all',
    date_from: props.filters.date_from || '',
    date_to: props.filters.date_to || '',
    per_page: props.filters.per_page || '10',
    sort_by: props.filters.sort_by || 'created_at',
    sort_order: props.filters.sort_order || 'desc'
});

// Modal states
const showDeleteModal = ref(false);
const selectedBlog = ref(null);

// Forms
const deleteForm = useForm({});

// Computed properties
const hasActiveFilters = computed(() => {
    return filterForm.search !== '' ||
           filterForm.status !== 'all' ||
           filterForm.category !== 'all' ||
           filterForm.author !== 'all' ||
           filterForm.date_from !== '' ||
           filterForm.date_to !== '';
});

// Filter methods
const applyFilters = () => {
    const params = {};

    // Only include non-default values
    if (filterForm.search && filterForm.search.trim()) params.search = filterForm.search.trim();
    if (filterForm.status !== 'all') params.status = filterForm.status;
    if (filterForm.category !== 'all') params.category = filterForm.category;
    if (filterForm.author !== 'all') params.author = filterForm.author;
    if (filterForm.date_from) params.date_from = filterForm.date_from;
    if (filterForm.date_to) params.date_to = filterForm.date_to;
    if (filterForm.per_page !== '10') params.per_page = filterForm.per_page;
    if (filterForm.sort_by !== 'created_at') params.sort_by = filterForm.sort_by;
    if (filterForm.sort_order !== 'desc') params.sort_order = filterForm.sort_order;

    router.visit(route('admin.blogs.index'), {
        method: 'get',
        data: params,
        preserveState: true,
        preserveScroll: true
    });
};

const clearFilters = () => {
    filterForm.search = '';
    filterForm.status = 'all';
    filterForm.category = 'all';
    filterForm.author = 'all';
    filterForm.date_from = '';
    filterForm.date_to = '';
    filterForm.per_page = '10';
    filterForm.sort_by = 'created_at';
    filterForm.sort_order = 'desc';

    router.visit(route('admin.blogs.index'), {
        method: 'get',
        preserveState: true
    });
};

// Auto-apply filters on certain changes (debounced search)
let searchTimeout;
watch(() => filterForm.search, () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        applyFilters();
    }, 500);
});

// Auto-apply filters on dropdown changes
watch(() => filterForm.per_page, () => {
    applyFilters();
});

// Delete functions
const confirmDelete = (blog) => {
    selectedBlog.value = blog;
    showDeleteModal.value = true;
};

const closeDeleteModal = () => {
    showDeleteModal.value = false;
    selectedBlog.value = null;
};

const deleteBlog = () => {
    deleteForm.delete(route('admin.blogs.destroy', selectedBlog.value.id), {
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

/* Custom focus styles for brand red */
.focus\:ring-2:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 54, 33, 0.2);
}

.focus\:border-brand-red:focus {
    border-color: #FF3621;
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

/* Link styling */
a {
    transition: all 0.2s ease-in-out;
}

/* Disabled button styles */
button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}
</style>