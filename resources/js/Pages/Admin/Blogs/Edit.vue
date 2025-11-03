<template>
    <AdminLayout
        page-title="Edit Blog Post"
        page-subtitle="Update and manage your blog post"
    >
        <Head :title="'Edit: ' + blog.title + ' - Admin Dashboard'" />

        <form @submit.prevent="submitBlog" class="space-y-6">
            <!-- Main Content Card -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div class="px-6 py-4 border-b border-gray-200">
                    <h2 class="text-lg font-semibold text-gray-900">Post Content</h2>
                </div>

                <div class="p-6 space-y-6">
                    <!-- Title -->
                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <input
                            id="title"
                            v-model="blogForm.title"
                            type="text"
                            class="w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                            :class="{ 'border-red-500': blogForm.errors.title }"
                            placeholder="Enter your blog post title..."
                            required
                        />
                        <div v-if="blogForm.errors.title" class="text-red-600 text-sm mt-1">
                            {{ blogForm.errors.title }}
                        </div>
                    </div>

                    <!-- Slug -->
                    <div>
                        <label for="slug" class="block text-sm font-medium text-gray-700 mb-2">URL Slug</label>
                        <input
                            id="slug"
                            v-model="blogForm.slug"
                            type="text"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                            :class="{ 'border-red-500': blogForm.errors.slug }"
                            placeholder="Leave empty to auto-generate from title"
                        />
                        <div v-if="blogForm.errors.slug" class="text-red-600 text-sm mt-1">
                            {{ blogForm.errors.slug }}
                        </div>
                    </div>

                    <!-- Content Editor -->
                    <div>
                        <label for="content" class="block text-sm font-medium text-gray-700 mb-2">Content</label>
                        <QuillEditor
                            v-model="blogForm.content"
                            placeholder="Start editing your blog post content..."
                            height="500px"
                            :class="{ 'border-red-500': blogForm.errors.content }"
                        />
                        <div v-if="blogForm.errors.content" class="text-red-600 text-sm mt-1">
                            {{ blogForm.errors.content }}
                        </div>
                        <p class="text-xs text-gray-500 mt-2">
                            Use the toolbar above to format your content. Click "HTML" to edit the source code directly.
                        </p>
                    </div>

                    <!-- Excerpt -->
                    <div>
                        <label for="excerpt" class="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                        <textarea
                            id="excerpt"
                            v-model="blogForm.excerpt"
                            rows="3"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                            :class="{ 'border-red-500': blogForm.errors.excerpt }"
                            placeholder="Brief summary of your post (optional)"
                        ></textarea>
                        <div v-if="blogForm.errors.excerpt" class="text-red-600 text-sm mt-1">
                            {{ blogForm.errors.excerpt }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Main Content (spans 2 columns on large screens) -->
                <div class="lg:col-span-2 space-y-6">
                    <!-- SEO Settings -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-semibold text-gray-900">SEO Settings</h3>
                        </div>
                        <div class="p-6 space-y-4">
                            <!-- Meta Title -->
                            <div>
                                <label for="meta_title" class="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
                                <input
                                    id="meta_title"
                                    v-model="blogForm.meta_title"
                                    type="text"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                    :class="{ 'border-red-500': blogForm.errors.meta_title }"
                                    placeholder="SEO title for search engines"
                                />
                                <div v-if="blogForm.errors.meta_title" class="text-red-600 text-sm mt-1">
                                    {{ blogForm.errors.meta_title }}
                                </div>
                            </div>

                            <!-- Meta Description -->
                            <div>
                                <label for="meta_description" class="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                                <textarea
                                    id="meta_description"
                                    v-model="blogForm.meta_description"
                                    rows="3"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                    :class="{ 'border-red-500': blogForm.errors.meta_description }"
                                    placeholder="SEO description for search engines (150-160 characters)"
                                ></textarea>
                                <div v-if="blogForm.errors.meta_description" class="text-red-600 text-sm mt-1">
                                    {{ blogForm.errors.meta_description }}
                                </div>
                            </div>

                            <!-- Meta Keywords -->
                            <div>
                                <label for="meta_keywords" class="block text-sm font-medium text-gray-700 mb-2">Meta Keywords</label>
                                <input
                                    id="meta_keywords"
                                    v-model="blogForm.meta_keywords"
                                    type="text"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                    :class="{ 'border-red-500': blogForm.errors.meta_keywords }"
                                    placeholder="keyword1, keyword2, keyword3"
                                />
                                <div v-if="blogForm.errors.meta_keywords" class="text-red-600 text-sm mt-1">
                                    {{ blogForm.errors.meta_keywords }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="space-y-6">
                    <!-- Publish Settings -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-semibold text-gray-900">Publish Settings</h3>
                        </div>
                        <div class="p-6 space-y-4">
                            <!-- Status -->
                            <div>
                                <label for="status" class="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                <select
                                    id="status"
                                    v-model="blogForm.status"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                    :class="{ 'border-red-500': blogForm.errors.status }"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                                <div v-if="blogForm.errors.status" class="text-red-600 text-sm mt-1">
                                    {{ blogForm.errors.status }}
                                </div>
                            </div>

                            <!-- Published At -->
                            <div>
                                <label for="published_at" class="block text-sm font-medium text-gray-700 mb-2">Publish Date</label>
                                <input
                                    id="published_at"
                                    v-model="blogForm.published_at"
                                    type="datetime-local"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                    :class="{ 'border-red-500': blogForm.errors.published_at }"
                                />
                                <div v-if="blogForm.errors.published_at" class="text-red-600 text-sm mt-1">
                                    {{ blogForm.errors.published_at }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Category & Tags -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h3 class="text-lg font-semibold text-gray-900">Organization</h3>
                        </div>
                        <div class="p-6 space-y-4">
                            <!-- Category -->
                            <div>
                                <label for="category_id" class="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                <select
                                    id="category_id"
                                    v-model="blogForm.category_id"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                    :class="{ 'border-red-500': blogForm.errors.category_id }"
                                >
                                    <option value="">Select a category</option>
                                    <option v-for="category in categories" :key="category.id" :value="category.id">
                                        {{ category.name }}
                                    </option>
                                </select>
                                <div v-if="blogForm.errors.category_id" class="text-red-600 text-sm mt-1">
                                    {{ blogForm.errors.category_id }}
                                </div>
                            </div>

                            <!-- Tags -->
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                                <div class="space-y-2 max-h-48 overflow-y-auto border border-gray-300 rounded-md p-3">
                                    <label v-for="tag in tags" :key="tag.id" class="flex items-center">
                                        <input
                                            type="checkbox"
                                            :value="tag.id"
                                            v-model="blogForm.tags"
                                            class="rounded border-gray-300 text-brand-red focus:border-brand-red focus:ring-brand-red"
                                        />
                                        <span class="ml-2 text-sm text-gray-700">{{ tag.name }}</span>
                                    </label>
                                </div>
                                <div v-if="blogForm.errors.tags" class="text-red-600 text-sm mt-1">
                                    {{ blogForm.errors.tags }}
                                </div>
                            </div>

                            <!-- Featured Image -->
                            <ImageUpload
                                v-model="blogForm.featured_image"
                                label="Featured Image"
                                alt-text="Blog featured image"
                            />
                            <div v-if="blogForm.errors.featured_image" class="text-red-600 text-sm mt-1">
                                {{ blogForm.errors.featured_image }}
                            </div>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div class="p-6 space-y-3">
                            <button
                                type="submit"
                                :disabled="blogForm.processing"
                                class="w-full px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-md transition-colors duration-200 disabled:opacity-50"
                            >
                                {{ blogForm.processing ? 'Updating...' : 'Update Blog Post' }}
                            </button>
                            <Link
                                :href="route('admin.blogs.preview', blog.id)"
                                target="_blank"
                                class="w-full px-4 py-2 text-sm font-medium text-green-700 bg-green-100 hover:bg-green-200 rounded-md transition-colors duration-200 text-center block"
                            >
                                Preview Blog Post
                            </Link>
                            <Link
                                :href="route('admin.blogs.index')"
                                class="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200 text-center block"
                            >
                                Cancel
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>

<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AdminLayout from '@/Components/Admin/AdminLayout.vue';
import QuillEditor from '@/Components/QuillEditor.vue';
import ImageUpload from '@/Components/ImageUpload.vue';

// Props
const props = defineProps({
    blog: {
        type: Object,
        required: true
    },
    categories: {
        type: Array,
        default: () => []
    },
    tags: {
        type: Array,
        default: () => []
    }
});

// Forms
const blogForm = useForm({
    title: props.blog.title || '',
    slug: props.blog.slug || '',
    content: props.blog.content || '',
    excerpt: props.blog.excerpt || '',
    meta_title: props.blog.meta_title || '',
    meta_description: props.blog.meta_description || '',
    meta_keywords: props.blog.meta_keywords || '',
    featured_image: props.blog.featured_image || '',
    status: props.blog.status || 'draft',
    category_id: props.blog.category_id || '',
    tags: props.blog.tags || [],
    published_at: props.blog.published_at || ''
});

// Form submission
const submitBlog = () => {
    blogForm.put(route('admin.blogs.update', props.blog.id));
};

// Remove old editor initialization
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

/* Editor wrapper styling */

/* Button transitions */
button {
    transition: all 0.2s ease-in-out;
}

/* Form input focus styles */
input:focus, textarea:focus, select:focus {
    box-shadow: 0 0 0 3px rgba(255, 54, 33, 0.1);
}

/* Disabled button styles */
button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
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