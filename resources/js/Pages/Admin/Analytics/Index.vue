<template>
    <AdminLayout
        page-title="Analytics"
        page-subtitle="View system analytics and reports"
    >
        <Head title="Analytics - Admin Dashboard" />

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div class="text-center py-12">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                <h3 class="mt-4 text-lg font-medium text-gray-900">Analytics Dashboard</h3>
                <p class="mt-2 text-gray-600">Analytics and reporting features will be implemented here.</p>
                <div class="mt-6">
                    <button class="bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200">
                        Generate Report
                    </button>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import AdminLayout from '@/Components/Admin/AdminLayout.vue';
</script>

<style scoped>
.bg-brand-red {
    background-color: #FF3621;
}
</style>