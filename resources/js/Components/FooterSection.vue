<template>
    <!-- Footer Content -->
    <div class="w-full bg-[#121212] relative">
        <footer class="footer-section relative pt-16 sm:pt-20 lg:pt-24">
            <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">

                <!-- Main Footer Content -->
                <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-16 xl:gap-20 pb-12 border-b border-white/10">

                    <!-- Column 1: Logo and Description -->
                    <div class="flex-1 flex flex-col justify-center lg:max-w-sm footer-col">
                        <!-- Logo -->
                        <div class="mb-6">
                            <img
                                :src="footerData?.content?.logo_url || '/images/sinkidarkmode.png'"
                                alt="Sinki Logo"
                                class="h-20 w-auto"
                                @error="handleImageError"
                            >
                        </div>

                        <!-- Description -->
                        <p class="text-white text-xl leading-[28px] tracking-[0.4px]">
                            {{ footerData?.content?.description || 'Data & AI That Drives Real Business Impact' }}
                        </p>
                    </div>

                    <!-- Column 2: Quick Link -->
                    <div class="flex-1 footer-col">
                        <h3 class="text-white text-2xl font-bold tracking-[0.48px] mb-8">
                            Quick Links
                        </h3>
                        <ul class="space-y-5">
                            <li v-for="(link, index) in (footerData?.links?.quick_links || quickLinks)" :key="link.id || index">
                                <a
                                    :href="link.url"
                                    class="text-white text-xl font-medium hover:text-brand-red transition-colors duration-300 inline-block relative"
                                >
                                    {{ link.name }}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Column 3: Services -->
                    <div class="flex-1 footer-col">
                        <h3 class="text-white text-2xl font-bold tracking-[0.48px] mb-8">
                            Services
                        </h3>
                        <ul class="space-y-5">
                            <li v-for="(service, index) in (footerData?.links?.services || services)" :key="service.id || index">
                                <a
                                    :href="service.url"
                                    class="text-white text-xl font-medium hover:text-brand-red transition-colors duration-300 inline-block relative"
                                >
                                    {{ service.name }}
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <!-- Copyright Section -->
                <div class="pt-8 pb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <!-- Footer Links (Left Side) -->
                    <div class="flex items-center gap-4 text-white text-lg font-medium order-2 sm:order-1 flex-wrap justify-center sm:justify-start">
                        <template v-for="(link, index) in (footerData?.links?.bottom_links || bottomLinks)" :key="link.id || index">
                            <a
                                :href="link.url"
                                class="hover:text-brand-red transition-colors duration-300 whitespace-nowrap"
                            >
                                {{ link.name }}
                            </a>
                            <span
                                v-if="index < (footerData?.links?.bottom_links || bottomLinks).length - 1"
                                class="text-white/30"
                            >
                                |
                            </span>
                        </template>
                    </div>

                    <!-- Copyright (Right Side) -->
                    <p class="text-white text-lg font-medium leading-[25.2px] tracking-[0.36px] order-1 sm:order-2">
                        Copyright © {{ currentYear }} {{ footerData?.content?.copyright_text || 'All Rights Reserved.' }}
                    </p>
                </div>

            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// Footer data from API
const footerData = ref(null);
const isLoading = ref(true);

// Default/fallback data
const quickLinks = ref([
    { name: 'Company', url: '#company' },
    { name: 'Insights', url: '#insights' },
    { name: 'Industries', url: '#industries' },
    { name: 'Contact Us', url: '/contact' }
]);

const services = ref([
    { name: 'Data Engineering & Modernization', url: '#services' },
    { name: 'Data Management & Governance', url: '#services' },
    { name: 'Data Analytics & Business Intelligence', url: '#services' },
    { name: 'AI & ML Solutions', url: '#services' }
]);

const bottomLinks = ref([
    { name: 'Privacy Policy', url: '/privacy-policy' },
    { name: "Terms & Conditions", url: '/terms-and-conditions' }
]);

// Current Year
const currentYear = computed(() => new Date().getFullYear());

// Fetch footer data from API
const fetchFooterData = async () => {
    try {
        const response = await fetch('/api/footer');
        if (response.ok) {
            footerData.value = await response.json();
        }
    } catch (error) {
        console.error('Error fetching footer data:', error);
    } finally {
        isLoading.value = false;
    }
};

// Handle image loading errors
const handleImageError = (event) => {
    console.error('Failed to load footer logo:', event.target.src);
    event.target.style.display = 'none';
};

// Fetch data on component mount
onMounted(() => {
    fetchFooterData();
});
</script>

<style scoped>
/* Footer Section Styles */
.footer-section {
    position: relative;
    background: #121212;
    font-family: 'Instrument Sans', sans-serif;
}

/* Footer Column Animation */
.footer-col {
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: backwards;
    min-width: 0;
}

.footer-col:nth-child(1) { animation-delay: 0.1s; }
.footer-col:nth-child(2) { animation-delay: 0.2s; }
.footer-col:nth-child(3) { animation-delay: 0.3s; }

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Link Hover Effects */
.footer-col a {
    position: relative;
}

.footer-col a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #FF3621;
    transition: width 0.3s ease;
}

.footer-col a:hover::after {
    width: 100%;
}

/* Responsive Styles */
@media (max-width: 1536px) {
    .container-custom {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
}

@media (max-width: 1280px) {
    .container-custom {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    h3 {
        font-size: 20px;
    }

    p, a {
        font-size: 18px;
    }
}

@media (max-width: 1024px) {
    .container-custom {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .flex.flex-col.lg\:flex-row {
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .container-custom {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }

    h3 {
        font-size: 18px;
        margin-bottom: 1.5rem;
    }

    p, a {
        font-size: 16px;
    }

    .flex.items-center.gap-4 {
        gap: 0.75rem;
        font-size: 14px;
    }
}

@media (max-width: 640px) {
    .footer-section {
        padding-top: 3rem;
    }

    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    h3 {
        font-size: 16px;
    }

    p, a {
        font-size: 14px;
    }

    .flex.items-center.gap-4 {
        font-size: 12px;
        gap: 0.5rem;
    }

    img.h-20 {
        height: 3rem;
    }
}

/* Separator positioning fix for responsive */
@media (max-width: 640px) {
    .flex.items-center.gap-4 {
        flex-direction: column;
        gap: 0.75rem;
    }
    
    .flex.items-center.gap-4 span {
        display: none;
    }
}
</style>