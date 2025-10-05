<template>
    <div class="min-h-screen bg-white">
        <Head title="Thank You - Databricks Consulting Services" />

        <!-- Header Component -->
        <HeaderSimple />

        <!-- Thank You Section -->
        <section class="thank-you-section bg-white pt-32">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-6xl mx-auto">
                    <!-- Success Content - Logo Left, Text Right Layout -->
                    <div class="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16">
                        <!-- Success Icon with Green Checkmark - Left Side -->
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                                <!-- Success Check SVG -->
                                <svg class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>

                        <!-- Thank You Message - Right Side -->
                        <div class="flex-1 text-center lg:text-left mt-6">
                            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                                Thank You For Your Enquiry.
                            </h1>

                            <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
                                We've received your request. In the meantime, feel free to choose a time that works best for you to connect with our experts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Full Width Calendly Section -->
        <section class="calendly-section bg-white pb-8">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-6xl mx-auto">
                    <!-- Calendly Loading State -->
                    <div v-show="showLoading" class="calendly-thank-you-loading">
                        <div class="loading-content">
                            <div class="loading-spinner-calendly"></div>
                            <h3>Loading Calendar</h3>
                            <p>Preparing your booking experience...</p>
                        </div>
                    </div>

                    <!-- Calendly Embed -->
                    <div ref="calendlyEmbed" :style="{ opacity: showLoading ? 0 : 1, transition: 'opacity 0.5s ease' }">
                        <!-- Calendly inline widget begin -->
                        <div class="calendly-inline-widget" data-url="https://calendly.com/d/ctcw-g33-d53/book-a-free-consultation-on-databricks-solutions" style="min-width:320px;height:700px;"></div>
                        <!-- Calendly inline widget end -->
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer Component -->
        <FooterSection />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Head } from '@inertiajs/vue3';
import HeaderSimple from '@/Components/HeaderSimple.vue';
import FooterSection from '@/Components/FooterSection.vue';

const showLoading = ref(true);
const calendlyEmbed = ref(null);
let checkCalendlyWidget = null;
let messageListener = null;

const hideCalendlyLoading = () => {
    showLoading.value = false;
    console.log('Calendly widget loaded and visible');
};

onMounted(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for Calendly events
    messageListener = (e) => {
        if (e.origin === 'https://calendly.com') {
            if (e.data.event === 'calendly.profile_page_viewed' ||
                e.data.event === 'calendly.event_type_viewed') {
                hideCalendlyLoading();
            }
        }
    };
    window.addEventListener('message', messageListener);

    // Check for Calendly widget initialization
    checkCalendlyWidget = setInterval(() => {
        const calendlyFrame = document.querySelector('.calendly-inline-widget iframe');
        
        if (calendlyFrame) {
            console.log('Calendly widget iframe found');
            clearInterval(checkCalendlyWidget);
            
            // Add a small delay to ensure content is loaded
            setTimeout(() => {
                hideCalendlyLoading();
            }, 2000);
        }
    }, 500);

    // Auto-hide loading after 8 seconds as final fallback
    setTimeout(() => {
        if (showLoading.value) {
            console.log('Auto-hiding loading after timeout');
            hideCalendlyLoading();
        }
        if (checkCalendlyWidget) {
            clearInterval(checkCalendlyWidget);
        }
    }, 8000);

    // Smooth scroll to Calendly section if user comes from form submission
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('scroll') === 'calendar' || window.location.hash === '#calendar') {
        setTimeout(() => {
            const calendlySection = document.querySelector('.calendly-section');
            if (calendlySection) {
                calendlySection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 1000);
    }
});

onBeforeUnmount(() => {
    if (checkCalendlyWidget) {
        clearInterval(checkCalendlyWidget);
    }
    if (messageListener) {
        window.removeEventListener('message', messageListener);
    }
});
</script>

<style scoped>
/* Thank You Page Calendly Section Styles */
.calendly-section {
    font-family: 'Instrument Sans', sans-serif;
}

.thank-you-section {
    background: #ffffff;
    padding-top: 9rem;
}

.calendly-thank-you-loading {
    position: relative;
    min-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #fafafa 0%, #f9fafb 100%);
    transition: opacity 0.5s ease, visibility 0.5s ease;
    border-radius: 24px;
}

.loading-content {
    text-align: center;
    padding: 60px 20px;
}

.loading-spinner-calendly {
    width: 50px;
    height: 50px;
    border: 4px solid #f3f4f6;
    border-top: 4px solid #FF3621;
    border-radius: 50%;
    animation: calendlySpinThankYou 1s linear infinite;
    margin: 0 auto 24px;
}

@keyframes calendlySpinThankYou {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loading-content h3 {
    color: #374151;
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 12px 0;
}

.loading-content p {
    color: #6b7280;
    font-size: 16px;
    margin: 0;
    font-weight: 500;
}

/* Calendly widget styling */
.calendly-inline-widget {
    border-radius: 24px;
    overflow: hidden;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .thank-you-section {
        padding-top: 7rem;
    }
    
    .calendly-inline-widget {
        height: 600px !important;
        border-radius: 16px;
    }
}

@media (max-width: 480px) {
    .thank-you-section {
        padding-top: 6rem;
    }
}
</style>