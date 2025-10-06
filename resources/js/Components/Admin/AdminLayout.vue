<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Sidebar -->
        <Sidebar
            :is-mobile-menu-open="isMobileMenuOpen"
            @close-mobile-menu="closeMobileMenu"
        />

        <!-- Main content area -->
        <div class="lg:pl-64">
            <!-- Topbar -->
            <Topbar
                :page-title="pageTitle"
                :page-subtitle="pageSubtitle"
                @toggle-mobile-menu="toggleMobileMenu"
            />

            <!-- Main content -->
            <main>
                <div class="p-6">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Sidebar from './Sidebar.vue';
import Topbar from './Topbar.vue';

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

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
};

// Close mobile menu when clicking outside
const handleClickOutside = (event) => {
    if (isMobileMenuOpen.value && !event.target.closest('.sidebar') && !event.target.closest('button')) {
        closeMobileMenu();
    }
};

// Close mobile menu on escape key
const handleEscape = (event) => {
    if (event.key === 'Escape' && isMobileMenuOpen.value) {
        closeMobileMenu();
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    document.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
/* Ensure the layout takes full height */
.min-h-screen {
    min-height: 100vh;
}

/* Remove any default margins/padding that might cause gaps */
* {
    box-sizing: border-box;
}

/* Main content area positioning */
.lg\:pl-64 {
    @media (min-width: 1024px) {
        padding-left: 16rem; /* 256px - exact width of sidebar */
    }
}

/* Ensure no gaps between elements */
main {
    width: 100%;
}

/* Smooth transitions */
* {
    transition-property: transform, opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

/* Remove any default browser spacing */
body {
    margin: 0;
    padding: 0;
}
</style>