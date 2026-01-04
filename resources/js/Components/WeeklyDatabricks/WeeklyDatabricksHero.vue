<template>
    <section class="hero-section bg-white font-instrument relative overflow-hidden min-h-[70vh] flex items-center pt-[120px]">
        <!-- Background Elements -->
        <div class="hero-background">
            <div class="absolute inset-0 bg-gradient-to-br from-beige/15 to-cream/8"></div>
            <div class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-red/12 to-transparent rounded-full animate-pulse-slow"></div>
            <div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-brand-red/6 to-transparent rounded-full animate-pulse-slow-delayed"></div>
        </div>

        <div class="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
            <div class="py-[40px] sm:py-[60px] text-center">
                <!-- Main Heading -->
                <h1 class="text-[48px] sm:text-[64px] lg:text-[84px] font-semibold text-[#121212] mb-6 leading-[54px] sm:leading-[70px] lg:leading-[92px] max-w-[1200px] mx-auto">
                    This Week in Databricks
                </h1>

                <!-- Subtitle -->
                <p class="text-[16px] sm:text-[18px] font-medium text-[#121212] mb-6 sm:mb-8 leading-[22px] sm:leading-[24px] tracking-[0.36px]">
                    by Sinki.ai
                </p>

                <!-- Description -->
                <p class="text-[20px] sm:text-[24px] lg:text-[30px] text-[#121212] font-normal leading-[30px] sm:leading-[36px] lg:leading-[45px] max-w-[1100px] mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
                    Stay updated with the latest developments in Databricks. From product updates to practical insights, "This Week in Databricks" helps data teams and engineers stay informed and ahead.
                </p>

                <!-- Email Subscription Form -->
                <div class="max-w-[800px] mx-auto mb-8 mobile-form-container">
                    <!-- Desktop Layout -->
                    <div class="hidden sm:block">
                        <div class="relative flex items-center bg-white rounded-full border border-[#DDDDDD] p-2 shadow-sm">
                            <input
                                v-model="emailAddress"
                                type="email"
                                placeholder="Email Address"
                                class="flex-1 h-[64px] px-8 text-[20px] bg-transparent text-[#121212] placeholder-[#AAAAAA] focus:outline-none font-normal border-0 ring-0"
                                @keydown.enter="handleSubscribe"
                            />
                            <button
                                @click="handleSubscribe"
                                :disabled="isSubmitting"
                                class="h-[64px] px-10 bg-[#FF3621] hover:bg-[#FF3621]/90 text-white font-semibold text-[20px] rounded-full transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-3 border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span v-if="!isSubmitting">Subscribe</span>
                                <span v-else>Subscribing...</span>
                                <svg v-if="!isSubmitting" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 10L18 10M14 6L18 10L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <svg v-else class="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="15 5"/>
                                </svg>
                            </button>
                        </div>

                        <!-- Desktop Validation Message -->
                        <div v-if="validationMessage" class="text-center mt-3">
                            <p :class="[
                                'text-[16px] font-medium transition-all duration-300',
                                validationMessage.includes('Thank you') ? 'text-green-600' : 'text-red-500'
                            ]">
                                {{ validationMessage }}
                            </p>
                        </div>
                    </div>

                    <!-- Mobile Layout -->
                    <div class="block sm:hidden space-y-3">
                        <!-- Email Input -->
                        <div class="w-full">
                            <input
                                v-model="emailAddress"
                                type="email"
                                placeholder="Email Address"
                                class="w-full h-[52px] px-6 text-[16px] bg-white text-[#121212] placeholder-[#AAAAAA] focus:outline-none font-normal border border-[#DDDDDD] rounded-full focus:border-[#FF3621] transition-colors duration-300"
                                @keydown.enter="handleSubscribe"
                            />
                        </div>

                        <!-- Subscribe Button -->
                        <button
                            @click="handleSubscribe"
                            :disabled="isSubmitting"
                            class="w-full h-[52px] bg-[#FF3621] hover:bg-[#FF3621]/90 text-white font-semibold text-[16px] rounded-full transition-all duration-300 flex items-center justify-center gap-2 border-0 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span v-if="!isSubmitting">Subscribe</span>
                            <span v-else>Subscribing...</span>
                            <svg v-if="!isSubmitting" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10L18 10M14 6L18 10L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg v-else class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="15 5"/>
                            </svg>
                        </button>

                        <!-- Mobile Validation Message -->
                        <div v-if="validationMessage" class="text-center mt-2">
                            <p :class="[
                                'text-[14px] font-medium transition-all duration-300',
                                validationMessage.includes('Thank you') ? 'text-green-600' : 'text-red-500'
                            ]">
                                {{ validationMessage }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Subscription Details -->
                <p class="text-[16px] sm:text-[18px] lg:text-[20px] text-[#121212] font-medium leading-[22px] sm:leading-[26px] lg:leading-[28px] tracking-[0.4px] px-4 sm:px-0">
                    <span class="hidden sm:inline">Join Our Readers | One email per week | 100% Free</span>
                    <span class="sm:hidden">Join Our Readers<br/>One email per week | 100% Free</span>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// Props
const props = defineProps({
    // Add any props if needed from parent component
});

// Reactive data
const emailAddress = ref('');

// Reactive data for mobile feedback
const isSubmitting = ref(false);
const validationMessage = ref('');

// Methods
const handleSubscribe = async () => {
    if (!emailAddress.value || !isValidEmail(emailAddress.value)) {
        validationMessage.value = 'Please enter a valid email address';
        setTimeout(() => {
            validationMessage.value = '';
        }, 3000);
        return;
    }

    isSubmitting.value = true;
    validationMessage.value = '';

    try {
        // Handle subscription logic here
        console.log('Subscribing email:', emailAddress.value);
        // You can emit event to parent or make API call

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        validationMessage.value = 'Thank you for subscribing!';
        emailAddress.value = '';

        setTimeout(() => {
            validationMessage.value = '';
        }, 4000);
    } catch (error) {
        validationMessage.value = 'Something went wrong. Please try again.';
        setTimeout(() => {
            validationMessage.value = '';
        }, 3000);
    } finally {
        isSubmitting.value = false;
    }
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

</script>

<style scoped>
/* Instrument Sans Font Family */
.font-instrument {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Hero Section Styles */
.hero-section {
    background: linear-gradient(180deg, rgba(235, 235, 210, 0.9) 0%, rgba(235, 235, 210, 0.6) 50%, rgba(245, 245, 220, 0.2) 80%, transparent 100%);
}

/* Background Elements */
.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
}

/* Beige/Cream Colors for Background */
.from-beige\/15 {
    --tw-gradient-from: rgb(235 235 210 / 0.15);
}

.to-cream\/8 {
    --tw-gradient-to: rgb(245 245 220 / 0.08);
}

/* Brand Colors */
.text-brand-red {
    color: #FF3621;
}

.bg-brand-red {
    background-color: #FF3621;
}

.border-brand-red {
    border-color: #FF3621;
}

/* Animations */
@keyframes pulse-slow {
    0%, 100% {
        opacity: 0.4;
        transform: scale(1);
    }
    50% {
        opacity: 0.6;
        transform: scale(1.05);
    }
}

@keyframes pulse-slow-delayed {
    0%, 100% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.08);
    }
}

.animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
}

.animate-pulse-slow-delayed {
    animation: pulse-slow-delayed 10s ease-in-out infinite;
    animation-delay: 2s;
}

/* Typography adjustments to match exact design */
h1 {
    font-family: 'Instrument Sans', sans-serif;
    font-weight: 600;
    color: #121212;
    word-wrap: break-word;
}

/* Input Focus States - Remove any black borders */
input:focus {
    box-shadow: 0 0 0 2px rgba(255, 54, 33, 0.1);
    border: none !important;
    outline: none !important;
    ring: 0 !important;
}

input {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
}

/* Ensure the form container has the correct border color */
.newsletter-form-container {
    border: 1px solid #DDDDDD !important;
    background: white;
    border-radius: 50px;
    padding: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Button Hover Effects */
button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 54, 33, 0.25);
}

/* Form styling to match Figma */
.subscription-form-wrapper {
    max-width: 600px;
    margin: 0 auto;
}

.subscription-form {
    background: white;
    border: 1px solid #DDDDDD;
    border-radius: 50px;
    padding: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.subscription-input {
    border: none;
    background: transparent;
    outline: none;
    flex: 1;
    height: 48px;
    padding: 0 20px;
    font-size: 16px;
    color: #121212;
}

.subscription-input::placeholder {
    color: #999999;
}

.subscription-button {
    background: #FF3621;
    border: none;
    border-radius: 50px;
    color: white;
    font-weight: 600;
    font-size: 16px;
    height: 48px;
    padding: 0 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.subscription-button:hover {
    background: #e52e16;
}

/* Mobile-First Responsive Design */
@media (max-width: 640px) {
    .hero-section {
        min-height: 70vh;
        padding-top: 100px;
    }

    /* Ensure mobile form has proper spacing */
    .space-y-3 > * + * {
        margin-top: 0.75rem;
    }

    /* Mobile subscription form styling */
    .mobile-form-container {
        padding: 0 1rem;
    }

    /* Adjust heading for very small screens */
    h1 {
        word-break: break-word;
        hyphens: auto;
    }
}

@media (max-width: 768px) {
    .hero-section {
        min-height: 75vh;
        padding-top: 110px;
    }

    /* Improve touch targets on mobile */
    button {
        min-height: 48px;
        touch-action: manipulation;
    }

    input {
        min-height: 48px;
        touch-action: manipulation;
    }
}

@media (max-width: 1024px) {
    .hero-section {
        min-height: 80vh;
        padding-top: 120px;
    }
}

/* Enhanced mobile form focus states */
@media (max-width: 639px) {
    input:focus {
        box-shadow: 0 0 0 3px rgba(255, 54, 33, 0.2);
        transform: scale(1.02);
        transition: all 0.2s ease;
    }

    button:active {
        transform: scale(0.98);
        transition: transform 0.1s ease;
    }
}

/* Improve mobile text readability */
@media (max-width: 480px) {
    .hero-section {
        min-height: 65vh;
    }

    /* Even smaller screens - ultra mobile optimization */
    h1 {
        font-size: 2.5rem !important;
        line-height: 2.75rem !important;
        margin-bottom: 1rem !important;
    }

    .description-text {
        font-size: 1.125rem !important;
        line-height: 1.625rem !important;
        margin-bottom: 2rem !important;
    }

    .subscription-details {
        font-size: 0.875rem !important;
        line-height: 1.25rem !important;
    }
}

/* Smooth transitions */
* {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

/* Spin animation for loading states */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>