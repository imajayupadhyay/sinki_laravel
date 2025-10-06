<template>
    <AdminLayout
        page-title="Contact Submissions"
        page-subtitle="View and manage contact form submissions"
    >
        <Head title="Submissions - Admin Dashboard" />

        <!-- Success/Error Messages -->
        <div v-if="$page.props.flash?.success" class="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div class="flex">
                <svg class="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="ml-3 text-sm text-green-800">{{ $page.props.flash.success }}</p>
            </div>
        </div>

        <!-- Statistics Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <div class="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-medium text-gray-600">Total Submissions</p>
                        <p class="text-2xl font-bold text-gray-900">{{ stats.total }}</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <div class="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg class="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-medium text-gray-600">Today</p>
                        <p class="text-2xl font-bold text-gray-900">{{ stats.today }}</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <div class="h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <svg class="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-medium text-gray-600">This Week</p>
                        <p class="text-2xl font-bold text-gray-900">{{ stats.this_week }}</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <div class="h-10 w-10 bg-brand-red/10 rounded-lg flex items-center justify-center">
                            <svg class="h-5 w-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="ml-4">
                        <p class="text-sm font-medium text-gray-600">This Month</p>
                        <p class="text-2xl font-bold text-gray-900">{{ stats.this_month }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Filters Section -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-4 lg:mb-0">Filter Submissions</h3>
                <div class="flex flex-col sm:flex-row gap-3">
                    <button
                        @click="exportSubmissions"
                        class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center"
                    >
                        <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        Export CSV
                    </button>
                    <button
                        @click="clearFilters"
                        class="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                        Clear Filters
                    </button>
                </div>
            </div>

            <form @submit.prevent="applyFilters" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                <!-- Search -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Search</label>
                    <input
                        v-model="filterForm.search"
                        type="text"
                        placeholder="Name, email, company..."
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                </div>

                <!-- Date From -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">From Date</label>
                    <input
                        v-model="filterForm.date_from"
                        type="date"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                </div>

                <!-- Date To -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">To Date</label>
                    <input
                        v-model="filterForm.date_to"
                        type="date"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    />
                </div>

                <!-- Service Filter -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Service</label>
                    <select
                        v-model="filterForm.service"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    >
                        <option value="">All Services</option>
                        <option v-for="service in services" :key="service" :value="service">{{ service }}</option>
                    </select>
                </div>

                <!-- Country Filter -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <select
                        v-model="filterForm.country"
                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    >
                        <option value="">All Countries</option>
                        <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
                    </select>
                </div>

                <!-- Apply Button -->
                <div class="lg:col-span-3 xl:col-span-5 flex justify-end">
                    <button
                        type="submit"
                        class="bg-brand-red text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                    >
                        Apply Filters
                    </button>
                </div>
            </form>
        </div>

        <!-- Submissions Table -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <!-- Table Header -->
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">
                    Contact Submissions
                    <span class="text-sm font-normal text-gray-500">
                        ({{ submissions.total }} total)
                    </span>
                </h2>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="submission in submissions.data" :key="submission.id" class="hover:bg-gray-50">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="h-10 w-10 bg-brand-red rounded-full flex items-center justify-center">
                                        <span class="text-white text-sm font-semibold">{{ submission.name.charAt(0).toUpperCase() }}</span>
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">{{ submission.name }}</div>
                                        <div class="text-sm text-gray-500">{{ submission.email }}</div>
                                        <div class="text-xs text-gray-400">{{ submission.phone }}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ submission.company }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                                    {{ submission.services }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ submission.country || 'Unknown' }}</div>
                                <div class="text-xs text-gray-500">{{ submission.city }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ submission.created_at }}</div>
                                <div class="text-xs text-gray-500">{{ submission.created_at_human }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex items-center justify-end space-x-2">
                                    <button
                                        @click="viewSubmission(submission)"
                                        class="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-md transition-colors duration-200"
                                    >
                                        View
                                    </button>
                                    <button
                                        @click="confirmDelete(submission)"
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
                <div v-if="!submissions.data || submissions.data.length === 0" class="text-center py-12">
                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    <h3 class="mt-4 text-lg font-medium text-gray-900">No submissions found</h3>
                    <p class="mt-2 text-gray-600">No contact form submissions match your current filters.</p>
                </div>
            </div>

            <!-- Pagination -->
            <div v-if="submissions.data && submissions.data.length > 0" class="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div class="flex items-center justify-between">
                    <div class="text-sm text-gray-600">
                        Showing {{ submissions.from }} to {{ submissions.to }} of {{ submissions.total }} submissions
                    </div>
                    <div class="flex space-x-2">
                        <Link
                            v-if="submissions.prev_page_url"
                            :href="submissions.prev_page_url"
                            preserve-state
                            class="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                        >
                            Previous
                        </Link>
                        <Link
                            v-if="submissions.next_page_url"
                            :href="submissions.next_page_url"
                            preserve-state
                            class="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                        >
                            Next
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <!-- View Submission Modal -->
        <div
            v-if="showViewModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            @click.self="closeViewModal"
        >
            <div class="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div class="p-6">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-lg font-semibold text-gray-900">Submission Details</h3>
                        <button
                            @click="closeViewModal"
                            class="text-gray-400 hover:text-gray-600"
                        >
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>

                    <div v-if="selectedSubmission" class="space-y-6">
                        <!-- Contact Information -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <p class="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">{{ selectedSubmission.name }}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <p class="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">{{ selectedSubmission.email }}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <p class="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">{{ selectedSubmission.phone }}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                <p class="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">{{ selectedSubmission.company }}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Service</label>
                                <p class="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">{{ selectedSubmission.services }}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <p class="text-sm text-gray-900 bg-gray-50 p-3 rounded-md">{{ selectedSubmission.city }}, {{ selectedSubmission.country }}</p>
                            </div>
                        </div>

                        <!-- Message -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <p class="text-sm text-gray-900 bg-gray-50 p-3 rounded-md whitespace-pre-wrap">{{ selectedSubmission.message }}</p>
                        </div>

                        <!-- Technical Details -->
                        <div class="border-t pt-6">
                            <h4 class="text-sm font-medium text-gray-700 mb-3">Technical Details</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-medium text-gray-500 mb-1">IP Address</label>
                                    <p class="text-xs text-gray-700 bg-gray-50 p-2 rounded-md font-mono">{{ selectedSubmission.ip_address }}</p>
                                </div>
                                <div>
                                    <label class="block text-xs font-medium text-gray-500 mb-1">Submitted At</label>
                                    <p class="text-xs text-gray-700 bg-gray-50 p-2 rounded-md">{{ selectedSubmission.created_at }}</p>
                                </div>
                            </div>
                            <div class="mt-4">
                                <label class="block text-xs font-medium text-gray-500 mb-1">User Agent</label>
                                <p class="text-xs text-gray-700 bg-gray-50 p-2 rounded-md break-all">{{ selectedSubmission.user_agent }}</p>
                            </div>
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
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Delete Submission</h3>
                <p class="text-gray-600 mb-6">
                    Are you sure you want to delete the submission from <strong>{{ selectedSubmission?.name }}</strong>? This action cannot be undone.
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
                        @click="deleteSubmission"
                        :disabled="deleteForm.processing"
                        class="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200 disabled:opacity-50"
                    >
                        {{ deleteForm.processing ? 'Deleting...' : 'Delete Submission' }}
                    </button>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Head, Link, useForm, router } from '@inertiajs/vue3';
import AdminLayout from '@/Components/Admin/AdminLayout.vue';

// Props
const props = defineProps({
    submissions: Object,
    filters: Object,
    countries: Array,
    services: Array,
    stats: Object
});

// Modal states
const showViewModal = ref(false);
const showDeleteModal = ref(false);
const selectedSubmission = ref(null);

// Filter form
const filterForm = reactive({
    search: props.filters.search || '',
    date_from: props.filters.date_from || '',
    date_to: props.filters.date_to || '',
    service: props.filters.service || '',
    country: props.filters.country || ''
});

// Delete form
const deleteForm = useForm({});

// Filter functions
const applyFilters = () => {
    router.get(route('admin.submissions.index'), filterForm, {
        preserveState: true,
        replace: true
    });
};

const clearFilters = () => {
    filterForm.search = '';
    filterForm.date_from = '';
    filterForm.date_to = '';
    filterForm.service = '';
    filterForm.country = '';
    applyFilters();
};

const exportSubmissions = () => {
    const params = new URLSearchParams(filterForm).toString();
    window.open(`${route('admin.submissions.export')}?${params}`, '_blank');
};

// View submission functions
const viewSubmission = async (submission) => {
    try {
        const response = await fetch(route('admin.submissions.show', submission.id));
        selectedSubmission.value = await response.json();
        showViewModal.value = true;
    } catch (error) {
        console.error('Error fetching submission details:', error);
    }
};

const closeViewModal = () => {
    showViewModal.value = false;
    selectedSubmission.value = null;
};

// Delete functions
const confirmDelete = (submission) => {
    selectedSubmission.value = submission;
    showDeleteModal.value = true;
};

const closeDeleteModal = () => {
    showDeleteModal.value = false;
    selectedSubmission.value = null;
};

const deleteSubmission = () => {
    deleteForm.delete(route('admin.submissions.destroy', selectedSubmission.value.id), {
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
input:focus,
select:focus {
    box-shadow: 0 0 0 3px rgba(255, 54, 33, 0.1);
}

/* Disabled button styles */
button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

/* Service badge colors */
.bg-blue-100 {
    background-color: #dbeafe;
}

.text-blue-800 {
    color: #1e40af;
}
</style>