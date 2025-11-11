<template>
    <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div class="flex items-center justify-between h-16 px-4 lg:px-6">
            <!-- Left side: Mobile menu button + Page title -->
            <div class="flex items-center">
                <!-- Mobile menu button -->
                <button
                    @click="toggleMobileMenu"
                    class="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-red transition-colors duration-200"
                >
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>

                <!-- Page title -->
                <div class="ml-2 lg:ml-0">
                    <h1 class="text-xl font-bold text-gray-900">
                        {{ pageTitle }}
                    </h1>
                    <p v-if="pageSubtitle" class="text-sm text-gray-500">
                        {{ pageSubtitle }}
                    </p>
                </div>
            </div>

            <!-- Right side: Search, notifications, profile -->
            <div class="flex items-center space-x-4">
                <!-- Search (hidden on mobile) -->
                <div class="hidden md:block relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        class="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-200"
                    />
                </div>

                <!-- Notifications -->
                <div class="relative">
                    <button
                        @click="toggleNotifications"
                        class="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-red transition-colors duration-200"
                    >
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-3.5-3.5c-.6-.6-.9-1.3-.9-2.1V7c0-3.9-3.1-7-7-7S1 3.1 1 7v4.4c0 .8-.3 1.5-.9 2.1L0 17h5m10 0v1a3 3 0 11-6 0v-1m10 0H5"/>
                        </svg>
                        <!-- Notification badge -->
                        <span class="absolute top-1 right-1 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    <!-- Notifications dropdown -->
                    <div
                        v-if="showNotifications"
                        @click.away="showNotifications = false"
                        class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                    >
                        <div class="p-4 border-b border-gray-200">
                            <h3 class="text-sm font-semibold text-gray-900">Notifications</h3>
                        </div>
                        <div class="max-h-64 overflow-y-auto">
                            <div class="p-4 text-center text-gray-500 text-sm">
                                No new notifications
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Profile dropdown -->
                <div class="relative">
                    <button
                        @click="toggleProfileMenu"
                        class="flex items-center space-x-2 p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-red transition-colors duration-200"
                    >
                        <div class="h-8 w-8 bg-brand-red rounded-full flex items-center justify-center">
                            <span class="text-white text-sm font-semibold">A</span>
                        </div>
                        <span class="hidden md:block text-sm font-medium">Admin</span>
                        <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>

                    <!-- Profile dropdown menu -->
                    <div
                        v-if="showProfileMenu"
                        @click.away="showProfileMenu = false"
                        class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                    >
                        <div class="p-2">
                            <div class="px-3 py-2 border-b border-gray-100">
                                <p class="text-sm font-medium text-gray-900">Admin User</p>
                                <p class="text-xs text-gray-500">{{ $page.props.auth?.user?.email || 'admin@sinki.ai' }}</p>
                            </div>

                            <Link
                                :href="route('admin.profile.show')"
                                class="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
                            >
                                <svg class="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                                Profile
                            </Link>

                            <Link
                                :href="route('admin.settings.index')"
                                class="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
                            >
                                <svg class="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                Settings
                            </Link>

                            <hr class="my-1">

                            <button
                                @click="logout"
                                class="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                            >
                                <svg class="mr-3 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                                </svg>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { router, Link } from '@inertiajs/vue3';

const props = defineProps({
    pageTitle: {
        type: String,
        default: 'Dashboard'
    },
    pageSubtitle: {
        type: String,
        default: null
    }
});

const emit = defineEmits(['toggle-mobile-menu']);

const showNotifications = ref(false);
const showProfileMenu = ref(false);

const toggleMobileMenu = () => {
    emit('toggle-mobile-menu');
};

const toggleNotifications = () => {
    showNotifications.value = !showNotifications.value;
    showProfileMenu.value = false;
};

const toggleProfileMenu = () => {
    showProfileMenu.value = !showProfileMenu.value;
    showNotifications.value = false;
};

const logout = () => {
    router.post(route('admin.logout'));
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

.focus\:border-brand-red:focus {
    border-color: #FF3621;
}

/* Click away directive alternative */
[v-click-away] {
    position: relative;
}
</style>