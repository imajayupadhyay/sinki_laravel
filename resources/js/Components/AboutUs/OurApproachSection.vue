<template>
    <section class="our-approach-section bg-white py-20 lg:py-32 relative overflow-hidden w-full">
        <!-- Background decorative elements -->
        <div class="absolute top-10 right-10 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-10 left-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl animate-pulse-delayed"></div>

        <div class="w-full px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-24">
            <!-- Section Header -->
            <div class="text-center mb-18 lg:mb-24">
                <!-- Header Tag -->
                <div class="section-header mb-8">
                    <span class="text-gray-600 text-sm sm:text-base font-medium uppercase tracking-wider">
                        {{ headerTag }}
                    </span>
                </div>

                <!-- Main Title -->
                <h2 class="text-brand-dark font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-4">
                    Our Data-First Approach
                </h2>

                <!-- Subtitle -->
                <p class="text-brand-dark text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[1200px] mx-auto">
                    How We Transform Your Data Vision Into Reality
                </p>
            </div>

            <!-- Flow Steps -->
            <div class="relative mb-18 lg:mb-24">
                <!-- Desktop Flow (lg and up) -->
                <div class="hidden lg:block">
                    <!-- Steps Container -->
                    <div class="flex items-start justify-between relative">
                        <!-- Connecting Lines with centered arrows -->
                        <div class="absolute top-[45px] left-0 w-full h-[2px] z-0 flex items-center justify-between">
                            <!-- Line segments between each step -->
                            <div class="flex-1 flex items-center relative">
                                <div class="w-full h-[2px] bg-brand-red"></div>
                                <!-- Centered Arrow 1 -->
                                <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-1 rounded-full">
                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                                        <path d="M12 2L18 7L12 12" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="flex-1 flex items-center relative ml-4">
                                <div class="w-full h-[2px] bg-brand-red"></div>
                                <!-- Centered Arrow 2 -->
                                <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-1 rounded-full">
                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                                        <path d="M12 2L18 7L12 12" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- Step Items -->
                        <div
                            v-for="(step, index) in approachSteps"
                            :key="index"
                            class="flex-1 relative z-10 max-w-[400px]"
                        >
                            <!-- Step Circle with Icon -->
                            <div class="flex justify-center mb-6">
                                <div class="step-circle w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500 group cursor-pointer">
                                    <component
                                        :is="'div'"
                                        v-html="step.icon"
                                        class="w-12 h-12 text-white"
                                    />
                                </div>
                            </div>

                            <!-- Step Content -->
                            <div class="text-center space-y-4">
                                <h3 class="text-brand-dark text-[20px] font-semibold leading-[26px] tracking-[0.4px]">
                                    {{ step.number }}. {{ step.title }}
                                </h3>
                                <p class="text-brand-dark text-[16px] font-medium leading-[24px] tracking-[0.32px] mb-2">
                                    {{ step.shortDescription }}
                                </p>
                                <p class="text-brand-dark text-[16px] font-normal leading-[24px] tracking-[0.32px]">
                                    {{ step.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile/Tablet Flow (below lg) -->
                <div class="lg:hidden space-y-8">
                    <div
                        v-for="(step, index) in approachSteps"
                        :key="index"
                        class="flex items-start gap-6"
                    >
                        <!-- Step Circle with Icon -->
                        <div class="flex-shrink-0">
                            <div class="step-circle w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center shadow-lg">
                                <component
                                    :is="'div'"
                                    v-html="step.icon"
                                    class="w-8 h-8 text-white"
                                />
                            </div>
                        </div>

                        <!-- Step Content -->
                        <div class="flex-1 pt-2">
                            <h3 class="text-brand-dark text-[18px] font-semibold leading-[24px] tracking-[0.36px] mb-2">
                                {{ step.number }}. {{ step.title }}
                            </h3>
                            <p class="text-brand-dark text-[16px] font-medium leading-[24px] tracking-[0.32px] mb-2">
                                {{ step.shortDescription }}
                            </p>
                            <p class="text-brand-dark text-[16px] font-normal leading-[24px] tracking-[0.32px]">
                                {{ step.description }}
                            </p>
                        </div>

                        <!-- Connecting line for mobile -->
                        <div v-if="index < approachSteps.length - 1" class="absolute left-[35px] mt-[70px] w-[2px] h-8 bg-brand-red"></div>
                    </div>
                </div>
            </div>

            <!-- CTA Button Section -->
            <div class="flex justify-center">
                <button
                    @click="openCalendlyModal"
                    class="cta-button group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-dark hover:bg-brand-red border-2 border-brand-dark hover:border-brand-red rounded-full text-white text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                    {{ ctaText }}
                    <div class="w-6 h-6 flex items-center justify-center">
                        <svg
                            class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </div>
                </button>
            </div>
        </div>

        <!-- Calendly Modal -->
        <Teleport to="body">
            <Transition name="modal-fade">
                <div v-if="showCalendlyModal" class="calendly-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center p-4" @click.self="closeCalendlyModal">
                    <div class="calendly-modal-container bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative">
                        <!-- Close Button -->
                        <button
                            @click="closeCalendlyModal"
                            class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                        >
                            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>

                        <!-- Modal Header -->
                        <div class="bg-gradient-to-r from-brand-dark to-gray-800 px-8 py-6">
                            <h2 class="text-2xl sm:text-3xl font-bold text-white">Book a Discovery Session</h2>
                            <p class="text-gray-300 mt-2">Let's discuss how we can help unlock the value of your data</p>
                        </div>

                        <!-- Loading Progress Bar -->
                        <div v-if="isLoading" class="calendly-loading-container px-8 py-20">
                            <div class="text-center mb-6">
                                <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-4 border-brand-red mb-4"></div>
                                <p class="text-lg font-semibold text-brand-dark">Loading Calendar...</p>
                                <p class="text-sm text-gray-500 mt-2">{{ loadingProgress }}%</p>
                            </div>

                            <!-- Progress Bar -->
                            <div class="w-full max-w-md mx-auto bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div
                                    class="bg-gradient-to-r from-brand-red to-red-500 h-full rounded-full transition-all duration-300 ease-out"
                                    :style="{ width: loadingProgress + '%' }"
                                ></div>
                            </div>
                        </div>

                        <!-- Calendly Widget -->
                        <div v-show="!isLoading" class="calendly-widget-wrapper" style="height: 700px; overflow: hidden;">
                            <div
                                ref="calendlyContainer"
                                class="calendly-inline-widget"
                                data-url="https://calendly.com/connect-sinki-ai/schedule-a-free-consultation-on-databricks-services"
                                style="min-width:320px;height:100%;"
                            ></div>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </section>
</template>

<script setup>
import { reactive, defineProps, defineEmits, ref, onMounted, onUnmounted, nextTick } from 'vue';

// Props for customization
const props = defineProps({
    headerTag: {
        type: String,
        default: 'HOW WE WORK'
    },
    title: {
        type: String,
        default: 'Our Approach'
    },
    subtitle: {
        type: String,
        default: 'A clear, outcome-driven approach that keeps your business goals at the center.'
    },
    ctaText: {
        type: String,
        default: 'Book A Discovery Session'
    }
});

// Emits
const emit = defineEmits(['cta-click']);

// Calendly modal functionality
const showCalendlyModal = ref(false);
const isLoading = ref(false);
const loadingProgress = ref(0);
const calendlyContainer = ref(null);
let progressInterval = null;

const openCalendlyModal = () => {
    showCalendlyModal.value = true;
    isLoading.value = true;
    loadingProgress.value = 0;
    document.body.style.overflow = 'hidden';

    // Simulate loading progress from 0 to 100
    let progress = 0;
    progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 95) {
            loadingProgress.value = 95;
            clearInterval(progressInterval);
        } else {
            loadingProgress.value = Math.floor(progress);
        }
    }, 150);

    // Load Calendly script and initialize widget
    nextTick(() => {
        loadCalendlyScript();
    });
};

const closeCalendlyModal = () => {
    showCalendlyModal.value = false;
    isLoading.value = false;
    loadingProgress.value = 0;
    document.body.style.overflow = '';
    if (progressInterval) {
        clearInterval(progressInterval);
    }
};

const loadCalendlyScript = () => {
    // Check if script already exists
    if (document.querySelector('script[src*="calendly.com"]')) {
        initializeCalendlyWidget();
        return;
    }

    // Create and load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
        initializeCalendlyWidget();
    };
    document.head.appendChild(script);
};

const initializeCalendlyWidget = () => {
    // Wait a bit for Calendly to fully initialize
    setTimeout(() => {
        if (window.Calendly && calendlyContainer.value) {
            window.Calendly.initInlineWidget({
                url: 'https://calendly.com/connect-sinki-ai/schedule-a-free-consultation-on-databricks-services',
                parentElement: calendlyContainer.value,
            });
        }

        // Complete the progress bar and hide loading
        setTimeout(() => {
            loadingProgress.value = 100;
            setTimeout(() => {
                isLoading.value = false;
            }, 300);
        }, 800);
    }, 500);
};

// Handle escape key to close modal
const handleEscape = (e) => {
    if (e.key === 'Escape' && showCalendlyModal.value) {
        closeCalendlyModal();
    }
};

// Handle CTA click
const handleCtaClick = () => {
    openCalendlyModal();
    emit('cta-click');
};

onMounted(() => {
    window.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape);
    document.body.style.overflow = '';
    if (progressInterval) {
        clearInterval(progressInterval);
    }
});

// Approach steps data - Updated with new structured content
const approachSteps = reactive([
    {
        number: "1",
        title: "DEFINE",
        shortDescription: "We start by getting clear on what you need.",
        description: "We map your business goals, challenges, and desired outcomes so every solution is aligned from day one, no assumptions, no misdirection.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>`
    },
    {
        number: "2",
        title: "BUILD",
        shortDescription: "We engineer with purpose and precision.",
        description: "From data platforms and pipelines to BI and AI models, our Databricks-certified team builds reliable, scalable solutions using modern architecture and hands-on engineering.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
        </svg>`
    },
    {
        number: "3",
        title: "ELEVATE",
        shortDescription: "Delivery is only the starting point.",
        description: "We help you operationalize, adopt, optimize, and extend your data capabilities, ensuring long-term value and continuous improvement.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
        </svg>`
    }
]);
</script>

<style scoped>
/* Font Family - Instrument Sans */
.our-approach-section {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Container */
.container {
    width: 100%;
}

/* Brand Colors */
.text-brand-dark {
    color: #121212;
}

.bg-brand-red {
    background-color: #FF3621;
}

.text-brand-red {
    color: #FF3621;
}

.bg-brand-dark {
    background-color: #121212;
}

.border-brand-dark {
    border-color: #121212;
}

.border-brand-red {
    border-color: #FF3621;
}

/* Animated Background Pulse */
@keyframes pulse-delayed {
    0%, 100% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.1);
    }
}

.animate-pulse-delayed {
    animation: pulse-delayed 4s ease-in-out infinite;
    animation-delay: 1s;
}

/* Animations removed */

/* All legacy animations removed */

/* Step Circle Styles */
.step-circle {
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
}

.step-circle:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 20px 40px rgba(255, 54, 33, 0.3);
}

/* Step Items Animation */
.flex-1:nth-child(1) { animation: slideUp 0.8s ease-out 0.5s backwards; }
.flex-1:nth-child(2) { animation: slideUp 0.8s ease-out 0.7s backwards; }
.flex-1:nth-child(3) { animation: slideUp 0.8s ease-out 0.9s backwards; }

/* CTA Button */
.cta-button {
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(18, 18, 18, 0.3);
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 54, 33, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.cta-button:hover::before {
    width: 400px;
    height: 400px;
}

/* Responsive Styles */
@media (max-width: 1280px) {
    .our-approach-section h2 {
        font-size: 48px !important;
        line-height: 54px !important;
    }

    .our-approach-section > div > div > p {
        font-size: 24px !important;
        line-height: 36px !important;
    }
}

@media (max-width: 1024px) {
    .our-approach-section {
        padding: 60px 0;
    }

    .our-approach-section h2 {
        font-size: 42px !important;
        line-height: 48px !important;
    }

    .our-approach-section > div > div > p {
        font-size: 22px !important;
        line-height: 33px !important;
    }


    .cta-button {
        padding: 0.875rem 1.75rem;
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    .our-approach-section {
        padding: 40px 0;
    }

    .our-approach-section h2 {
        font-size: 36px !important;
        line-height: 42px !important;
        margin-bottom: 1.5rem !important;
    }

    .our-approach-section > div > div > p {
        font-size: 20px !important;
        line-height: 30px !important;
        margin-bottom: 2.5rem !important;
    }

    .cta-button {
        padding: 0.75rem 1.5rem;
        font-size: 15px;
    }
}

@media (max-width: 640px) {
    .our-approach-section {
        padding: 30px 0;
    }


    .our-approach-section h2 {
        font-size: 28px !important;
        line-height: 36px !important;
        margin-bottom: 1rem !important;
    }

    .our-approach-section > div > div > p {
        font-size: 18px !important;
        line-height: 27px !important;
        margin-bottom: 2rem !important;
    }

    .space-y-8 > * + * {
        margin-top: 1.5rem;
    }

    .cta-button {
        width: 100%;
        max-width: 280px;
        padding: 0.75rem 1.5rem;
        font-size: 14px;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .animate-slide-up,
    .animate-slide-up-delayed,
    .animate-fade-in {
        animation: none;
        opacity: 1;
    }

    .step-circle:hover {
        transform: scale(1.05);
    }

    .cta-button {
        transition: none;
    }
}

/* Calendly Modal Styles */
.calendly-modal-overlay {
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
    animation: fadeInModal 0.3s ease-out;
}

.calendly-modal-container {
    animation: slideUpModal 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeInModal {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideUpModal {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* Modal Transition Classes */
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active .calendly-modal-container,
.modal-fade-leave-active .calendly-modal-container {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
}

.modal-fade-enter-from .calendly-modal-container,
.modal-fade-leave-to .calendly-modal-container {
    transform: translateY(30px) scale(0.95);
    opacity: 0;
}

/* Loading Spinner Animation */
@keyframes spinCalendly {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spinCalendly 1s linear infinite;
}

/* Mobile Responsive Modal */
@media (max-width: 768px) {
    .calendly-modal-container {
        max-height: 95vh;
        margin: 0 1rem;
    }

    .calendly-widget-wrapper {
        height: 600px !important;
    }
}

@media (max-width: 480px) {
    .calendly-modal-container {
        border-radius: 1.5rem;
    }

    .calendly-widget-wrapper {
        height: 500px !important;
    }
}
</style>