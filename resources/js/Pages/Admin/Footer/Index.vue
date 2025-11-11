<template>
    <AdminLayout
        page-title="Footer Management"
        page-subtitle="Manage footer content, links and sections"
    >
        <Head title="Footer - Admin Dashboard" />

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

        <!-- Footer Content Section -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Footer Content</h2>
            </div>
            <div class="p-6">
                <form @submit.prevent="updateContent">
                    <div class="grid grid-cols-1 gap-6">
                        <div>
                            <label for="logo_url" class="block text-sm font-medium text-gray-700 mb-2">Logo URL</label>
                            <input
                                id="logo_url"
                                v-model="contentForm.logo_url"
                                type="text"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                placeholder="e.g., /images/sinkidarkmode.png"
                            >
                        </div>
                        <div>
                            <label for="description" class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea
                                id="description"
                                v-model="contentForm.description"
                                rows="3"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                placeholder="Enter footer description"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label for="copyright_text" class="block text-sm font-medium text-gray-700 mb-2">Copyright Text</label>
                            <input
                                id="copyright_text"
                                v-model="contentForm.copyright_text"
                                type="text"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                placeholder="e.g., All Rights Reserved."
                                required
                            >
                        </div>
                    </div>
                    <div class="mt-6">
                        <button
                            type="submit"
                            class="bg-brand-red text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                            :disabled="contentForm.processing"
                        >
                            {{ contentForm.processing ? 'Updating...' : 'Update Content' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Footer Links Section -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900">Footer Links</h2>
                <button
                    @click="openAddLinkModal"
                    class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center"
                >
                    <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                    </svg>
                    Add New Link
                </button>
            </div>

            <!-- Tabs for different sections -->
            <div class="border-b border-gray-200">
                <nav class="-mb-px flex">
                    <button
                        v-for="section in sections"
                        :key="section.key"
                        @click="activeSection = section.key"
                        class="py-2 px-6 text-sm font-medium border-b-2 transition-colors duration-200"
                        :class="activeSection === section.key
                            ? 'text-brand-red border-brand-red'
                            : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'"
                    >
                        {{ section.name }}
                    </button>
                </nav>
            </div>

            <!-- Links Table -->
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL</th>
                            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="link in currentSectionLinks" :key="link.id" class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    {{ link.order }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-gray-900">{{ link.name }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ link.url }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex items-center justify-end space-x-2">
                                    <button
                                        @click="openEditLinkModal(link)"
                                        class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        @click="confirmDeleteLink(link)"
                                        class="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md transition-colors duration-200"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="currentSectionLinks.length === 0">
                            <td colspan="4" class="px-6 py-4 text-center text-gray-500">
                                No links in this section yet.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Add/Edit Link Modal -->
        <div v-if="showLinkModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" @click="closeLinkModal">
            <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" @click.stop>
                <div class="mt-3">
                    <h3 class="text-lg font-medium text-gray-900 mb-4">
                        {{ isEditingLink ? 'Edit Link' : 'Add New Link' }}
                    </h3>
                    <form @submit.prevent="submitLink">
                        <div class="space-y-4">
                            <div>
                                <label for="link_name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    id="link_name"
                                    v-model="linkForm.name"
                                    type="text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                    placeholder="Enter link name"
                                    required
                                >
                            </div>
                            <div>
                                <label for="link_url" class="block text-sm font-medium text-gray-700 mb-1">URL</label>
                                <input
                                    id="link_url"
                                    v-model="linkForm.url"
                                    type="text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                    placeholder="Enter URL"
                                    required
                                >
                            </div>
                            <div>
                                <label for="link_section" class="block text-sm font-medium text-gray-700 mb-1">Section</label>
                                <select
                                    id="link_section"
                                    v-model="linkForm.section"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                    required
                                >
                                    <option value="">Select a section</option>
                                    <option v-for="section in sections" :key="section.key" :value="section.key">
                                        {{ section.name }}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label for="link_order" class="block text-sm font-medium text-gray-700 mb-1">Order</label>
                                <input
                                    id="link_order"
                                    v-model.number="linkForm.order"
                                    type="number"
                                    min="0"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                    placeholder="Enter order number"
                                    required
                                >
                            </div>
                        </div>
                        <div class="flex items-center justify-end space-x-3 mt-6">
                            <button
                                type="button"
                                @click="closeLinkModal"
                                class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                class="px-4 py-2 text-sm font-medium text-white bg-brand-red hover:bg-red-600 rounded-lg transition-colors duration-200"
                                :disabled="linkForm.processing"
                            >
                                {{ linkForm.processing ? 'Saving...' : (isEditingLink ? 'Update Link' : 'Add Link') }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Delete Confirmation Modal -->
        <div v-if="showDeleteModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" @click="closeDeleteModal">
            <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" @click.stop>
                <div class="mt-3 text-center">
                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                        <svg class="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                        </svg>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900 mt-3">Delete Link</h3>
                    <div class="mt-2 px-7 py-3">
                        <p class="text-sm text-gray-500">
                            Are you sure you want to delete "{{ linkToDelete?.name }}"? This action cannot be undone.
                        </p>
                    </div>
                    <div class="items-center px-4 py-3">
                        <div class="flex justify-center space-x-3">
                            <button
                                @click="closeDeleteModal"
                                class="px-4 py-2 bg-gray-100 text-gray-800 text-base font-medium rounded-md shadow-sm hover:bg-gray-200 transition-colors duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                @click="deleteLink"
                                class="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 transition-colors duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Head, useForm, router } from '@inertiajs/vue3'
import AdminLayout from '@/Components/Admin/AdminLayout.vue'

const props = defineProps({
    footerContent: Object,
    footerLinks: Object
})

// Content form
const contentForm = useForm({
    logo_url: props.footerContent?.logo_url || '',
    description: props.footerContent?.description || '',
    copyright_text: props.footerContent?.copyright_text || ''
})

// Modal and form state
const showLinkModal = ref(false)
const showDeleteModal = ref(false)
const isEditingLink = ref(false)
const linkToDelete = ref(null)
const editingLinkId = ref(null)

// Sections definition
const sections = [
    { key: 'quick_links', name: 'Quick Links' },
    { key: 'services', name: 'Services' },
    { key: 'bottom_links', name: 'Bottom Links' }
]

// Active section for tabs
const activeSection = ref('quick_links')

// Link form
const linkForm = useForm({
    name: '',
    url: '',
    section: '',
    order: 0
})

// Computed properties
const currentSectionLinks = computed(() => {
    return props.footerLinks?.[activeSection.value] || []
})

// Methods
const updateContent = () => {
    contentForm.put(route('admin.footer.content.update'))
}

const openAddLinkModal = () => {
    isEditingLink.value = false
    linkForm.reset()
    linkForm.section = activeSection.value
    showLinkModal.value = true
}

const openEditLinkModal = (link) => {
    isEditingLink.value = true
    editingLinkId.value = link.id
    linkForm.name = link.name
    linkForm.url = link.url
    linkForm.section = link.section
    linkForm.order = link.order
    showLinkModal.value = true
}

const closeLinkModal = () => {
    showLinkModal.value = false
    linkForm.reset()
    isEditingLink.value = false
    editingLinkId.value = null
}

const submitLink = () => {
    if (isEditingLink.value) {
        linkForm.put(route('admin.footer.links.update', editingLinkId.value), {
            onSuccess: () => {
                closeLinkModal()
            }
        })
    } else {
        linkForm.post(route('admin.footer.links.store'), {
            onSuccess: () => {
                closeLinkModal()
            }
        })
    }
}

const confirmDeleteLink = (link) => {
    linkToDelete.value = link
    showDeleteModal.value = true
}

const closeDeleteModal = () => {
    showDeleteModal.value = false
    linkToDelete.value = null
}

const deleteLink = () => {
    router.delete(route('admin.footer.links.destroy', linkToDelete.value.id), {
        onSuccess: () => {
            closeDeleteModal()
        }
    })
}
</script>