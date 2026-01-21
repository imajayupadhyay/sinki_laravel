<template>
    <!-- Footer Content -->
    <div class="w-full relative mt-16 sm:mt-20 lg:mt-24 overflow-hidden"
        style="background-image: url('/images/aboutussecbanner.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">
        <!-- Dark overlay for better text visibility -->
        <div class="absolute inset-0 bg-black/70 z-[1]"></div>
        <footer class="footer-section relative pt-16 sm:pt-20 lg:pt-24 z-[2]">
            <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 relative">

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
                        <p class="text-white text-xl leading-[28px] tracking-[0.4px] mb-6">
                            {{ footerData?.content?.description || 'Data & AI That Drives Real Business Impact' }}
                        </p>

                        <!-- Bottom Links -->
                        <div class="flex items-center gap-4 text-white text-lg font-medium flex-wrap">
                            <a
                                href="/privacy-policy"
                                class="hover:text-brand-red transition-colors duration-300 whitespace-nowrap"
                            >
                                Privacy Policy
                            </a>
                            <span class="text-white/30">|</span>
                            <a
                                href="/terms-and-conditions"
                                class="hover:text-brand-red transition-colors duration-300 whitespace-nowrap"
                            >
                                Terms & Conditions
                            </a>
                        </div>
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

                    <!-- Column 4: Newsletter Subscription -->
                    <div class="flex-1 footer-col min-w-0">
                        <h3 class="text-white text-2xl font-bold tracking-[0.48px] mb-8">
                            Subscribe to Our Newsletter
                        </h3>
                        <form @submit.prevent="handleNewsletterSubmit" class="w-full">
                            <div class="flex items-center w-full mb-4">
                                <input
                                    v-model="newsletterEmail"
                                    type="email"nfdskn
                                    placeholder="Email Address"
                                    required
                                    class="flex-grow min-w-0 px-6 py-3.5 bg-white text-gray-800 placeholder-gray-500 focus:outline-none text-base rounded-[5px]"
                                />
                               
                            </div>

                            <div class="flex items-center w-full justify-end">
                               
                                <button
                                    type="submit"
                                    :disabled="isSubmitting"
                                    class="flex-shrink-0 bg-[#FF3621] hover:bg-[#FF3621]/90 disabled:bg-[#FF3621]/50 text-white px-6 py-3.5 text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#FF3621]/20 whitespace-nowrap rounded-[5px]"
                                >
                                    Subscribe now
                                </button>
                            </div>
                        </form>
                        <p v-if="subscriptionMessage"
                           :class="['text-sm mt-3', subscriptionSuccess ? 'text-green-400' : 'text-red-400']">
                            {{ subscriptionMessage }}
                        </p>
                    </div>

                </div>

                <!-- Copyright Section -->
                <div class="pt-8 pb-8 flex justify-center">
                    <!-- Copyright (Center) -->
                    <p class="text-white text-lg font-medium leading-[25.2px] tracking-[0.36px] text-center">
                        Copyright © {{ currentYear }} {{ footerData?.content?.copyright_text || 'All Rights Reserved.' }}
                    </p>
                </div>

            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

// Footer data from API
const footerData = ref(null);
const isLoading = ref(true);

// Default/fallback data
const quickLinks = ref([
    { name: 'About us', url: '/about-us' },
    { name: 'Insights', url: '#insights' },
    // { name: 'Industries', url: '#industries' },
    { name: 'Contact Us', url: '/contact' }
]);

const services = ref([
    { name: 'Data Engineering & Modernization', url: '#services' },
    { name: 'Data Management & Governance', url: '#services' },
    { name: 'Data Analytics & Business Intelligence', url: '#services' },
    { name: 'AI & ML Solutions', url: '#services' }
]);

// Current Year
const currentYear = computed(() => 2026);

// Newsletter form state
const newsletterEmail = ref('');
const isSubmitting = ref(false);
const subscriptionMessage = ref('');
const subscriptionSuccess = ref(false);

// Handle newsletter submission
const handleNewsletterSubmit = async () => {
    if (!newsletterEmail.value) return;

    isSubmitting.value = true;
    subscriptionMessage.value = '';

    try {
        // Replace with your actual newsletter API endpoint
        // const response = await axios.post('/api/newsletter/subscribe', {
        //     email: newsletterEmail.value
        // });

        const response = await axios.post('/subscribe', {
            email: newsletterEmail.value
        });

        if (response.status === 200) {
            subscriptionSuccess.value = true;
            subscriptionMessage.value = response.data.message || 'Thank you for subscribing!';
            newsletterEmail.value = '';

            // Clear message after 5 seconds
            setTimeout(() => {
                subscriptionMessage.value = '';
            }, 5000);
        }
    } catch (error) {
        subscriptionSuccess.value = false;
        if (error.response?.data?.message) {
            subscriptionMessage.value = error.response.data.message;
        } else {
            subscriptionMessage.value = 'Something went wrong. Please try again.';
        }

        // Clear error message after 5 seconds
        setTimeout(() => {
            subscriptionMessage.value = '';
        }, 5000);
    } finally {
        isSubmitting.value = false;
    }
};

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
.footer-col:nth-child(4) { animation-delay: 0.4s; }

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