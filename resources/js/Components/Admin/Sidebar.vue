<template>
    <!-- Mobile sidebar overlay -->
    <div
        v-if="isMobileMenuOpen"
        @click="closeMobileMenu"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
    ></div>

    <!-- Sidebar -->
    <aside
        :class="[
            'fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:shadow-none border-r border-gray-200',
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        ]"
    >
        <!-- Logo Section -->
        <div class="flex items-center justify-center h-16 px-4 border-b border-gray-200">
            <img
                src="/images/sinkilogo1.png"
                alt="Sinki.ai"
                class="h-10 w-auto"
            />
        </div>

        <!-- Navigation -->
        <nav class="mt-8 px-4 flex-1">
            <div class="space-y-2">
                <!-- Dashboard -->
                <Link
                    :href="route('admin.dashboard')"
                    class="nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                    :class="isActive('admin.dashboard') ? 'bg-brand-red text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100 hover:text-brand-red'"
                >
                    <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v1H8V5z"/>
                    </svg>
                    Dashboard
                </Link>

                <!-- Submissions -->
                <Link
                    :href="route('admin.submissions.index')"
                    class="nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                    :class="isActive('admin.submissions.index') ? 'bg-brand-red text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100 hover:text-brand-red'"
                >
                    <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Submissions
                </Link>


                <!-- Blog Section -->
                <div class="pt-4 pb-2">
                    <h3 class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Blog Management</h3>
                </div>

                <!-- Blog Posts -->
                <Link
                    :href="route('admin.blogs.index')"
                    class="nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                    :class="isActive('admin.blogs') ? 'bg-brand-red text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100 hover:text-brand-red'"
                >
                    <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Blog Posts
                </Link>

                <!-- Categories -->
                <Link
                    :href="route('admin.categories.index')"
                    class="nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                    :class="isActive('admin.categories') ? 'bg-brand-red text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100 hover:text-brand-red'"
                >
                    <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                    </svg>
                    Categories
                </Link>

                <!-- Tags -->
                <Link
                    :href="route('admin.tags.index')"
                    class="nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                    :class="isActive('admin.tags') ? 'bg-brand-red text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100 hover:text-brand-red'"
                >
                    <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
                    </svg>
                    Tags
                </Link>

                <!-- Service Pages Section -->
                <div class="pt-4 pb-2">
                    <h3 class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Services Management</h3>
                </div>

                <!-- Service Pages -->
                <Link
                    :href="route('admin.service-pages.index')"
                    class="nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                    :class="isActive('admin.service-pages') ? 'bg-brand-red text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100 hover:text-brand-red'"
                >
                    <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                    Service Pages
                </Link>

                <!-- System Section -->
                <div class="pt-4 pb-2">
                    <h3 class="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">System</h3>
                </div>

                <!-- Users -->
                <Link
                    :href="route('admin.users.index')"
                    class="nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                    :class="isActive('admin.users.index') ? 'bg-brand-red text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100 hover:text-brand-red'"
                >
                    <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                    </svg>
                    Users
                </Link>

                <!-- Footer -->
                <Link
                    :href="route('admin.footer.index')"
                    class="nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                    :class="isActive('admin.footer.index') ? 'bg-brand-red text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100 hover:text-brand-red'"
                >
                    <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                    </svg>
                    Footer
                </Link>

                <!-- Settings -->
                <Link
                    :href="route('admin.settings.index')"
                    class="nav-item group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                    :class="isActive('admin.settings.index') ? 'bg-brand-red text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100 hover:text-brand-red'"
                >
                    <svg class="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    Settings
                </Link>
            </div>
        </nav>

        <!-- Bottom section -->
        <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
            <div class="flex items-center">
                <div class="flex-shrink-0">
                    <div class="h-8 w-8 bg-brand-red rounded-full flex items-center justify-center">
                        <span class="text-white text-sm font-semibold">A</span>
                    </div>
                </div>
                <div class="ml-3 flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate">
                        Admin User
                    </p>
                    <p class="text-xs text-gray-500 truncate">
                        {{ $page.props.auth?.user?.email || 'admin@sinki.ai' }}
                    </p>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { computed } from 'vue';
import { usePage, Link } from '@inertiajs/vue3';

const props = defineProps({
    isMobileMenuOpen: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close-mobile-menu']);

const page = usePage();

const closeMobileMenu = () => {
    emit('close-mobile-menu');
};

const isActive = (routeName) => {
    const currentRoute = route().current();
    const currentComponent = page.component;

    // Check if the current route matches exactly
    if (currentRoute === routeName) return true;

    // Check component-based routing for admin pages
    if (routeName === 'admin.dashboard' && currentComponent === 'Admin/Dashboard') return true;
    if (routeName === 'admin.submissions.index' && currentComponent === 'Admin/Submissions/Index') return true;
    if (routeName === 'admin.users.index' && currentComponent === 'Admin/Users/Index') return true;
    if (routeName === 'admin.settings.index' && currentComponent === 'Admin/Settings/Index') return true;

    // Blog management routes
    if (routeName === 'admin.blogs' && (
        currentComponent === 'Admin/Blogs/Index' ||
        currentComponent === 'Admin/Blogs/Create' ||
        currentComponent === 'Admin/Blogs/Edit'
    )) return true;
    if (routeName === 'admin.categories' && currentComponent === 'Admin/Categories/Index') return true;
    if (routeName === 'admin.tags' && currentComponent === 'Admin/Tags/Index') return true;

    // Service Pages management routes
    if (routeName === 'admin.service-pages' && (
        currentComponent === 'Admin/ServicePages/Index' ||
        currentComponent === 'Admin/ServicePages/Create' ||
        currentComponent === 'Admin/ServicePages/Edit'
    )) return true;

    // Footer management routes
    if (routeName === 'admin.footer.index' && currentComponent === 'Admin/Footer/Index') return true;

    return false;
};
</script>

<style scoped>
.bg-brand-red {
    background-color: #FF3621;
}

.text-brand-red {
    color: #FF3621;
}

.hover\:text-brand-red:hover {
    color: #FF3621;
}

/* Sidebar specific styles */
aside {
    height: 100vh;
    min-height: 100vh;
}

/* Remove any gaps and ensure perfect fit */
@media (min-width: 1024px) {
    aside {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 16rem; /* 256px */
        z-index: 10;
    }
}

/* Active nav item animation */
.nav-item.router-link-active {
    background-color: #FF3621;
    color: white;
    box-shadow: 0 4px 14px rgba(255, 54, 33, 0.3);
}

/* Smooth transitions */
.nav-item {
    transition: all 0.2s ease-in-out;
}

.nav-item:hover {
    transform: translateX(4px);
}

.nav-item.router-link-active:hover {
    transform: translateX(0);
}

/* Ensure navigation takes up available space */
nav {
    height: calc(100vh - 4rem - 80px); /* Full height minus logo section and bottom section */
    overflow-y: auto;
}

/* Perfect bottom positioning */
.absolute.bottom-0 {
    background-color: white;
    z-index: 10;
}
</style>