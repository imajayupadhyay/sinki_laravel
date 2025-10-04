<template>
    <!-- Hero Section -->
    <section
        class="hero-section relative flex items-center justify-center overflow-hidden pt-20 sm:pt-32 pb-16 sm:pb-20"
        :style="{
            backgroundImage: 'url(/images/heroobannersinki.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh'
        }"
    >
        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 z-0"></div>

        <!-- Content Container -->
        <div class="container-custom relative z-10 px-3 sm:px-6 py-6 sm:py-20">
            <div class="max-w-[1518px] mx-auto text-center">
                <!-- Main Heading -->
                <h1 class="hero-title text-brand-dark font-semibold leading-tight sm:leading-relaxed lg:leading-[100px] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[100px] mb-4 sm:mb-8 animate-fadeInUp">
                    We Help You Unlock The Value Of Your Data
                </h1>

                <!-- Subtitle -->
                <p class="hero-subtitle text-brand-light text-lg sm:text-xl md:text-2xl lg:text-[26px] leading-snug sm:leading-relaxed lg:leading-[39px] max-w-[95%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[1200px] mx-auto mb-8 sm:mb-12 animate-fadeInUp animation-delay-200">
                    We turn raw data into intelligence with Databricks. From data foundations to AI adoption, we deliver secure, scalable systems.
                </p>

                <!-- CTA Buttons -->
                <div class="hero-cta flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 animate-fadeInUp animation-delay-400">
                    <!-- Primary Button - Book a Strategy Session -->
                    <button
                        @click="openCalendlyModal"
                        class="btn-primary group inline-flex items-center justify-center gap-3 px-6 sm:px-9 py-3 sm:py-4 bg-brand-red border-2 border-brand-red rounded-full text-white text-base sm:text-lg font-bold capitalize transition-all duration-300 w-full sm:w-auto"
                    >
                        Book a Strategy Session
                        <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                            <svg class="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </div>
                    </button>

                    <!-- Secondary Button - Explore Services -->
                    <a
                        href="#services"
                        class="btn-secondary group inline-flex items-center justify-center gap-3 px-6 sm:px-9 py-3 sm:py-4 bg-transparent border-2 border-brand-red rounded-full text-brand-red text-base sm:text-lg font-bold capitalize transition-all duration-300 w-full sm:w-auto"
                    >
                        Explore Services
                        <div class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                            <svg class="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <!-- Calendly Modal -->
        <Teleport to="body">
            <Transition name="modal-fade">
                <div v-if="showCalendlyModal" class="calendly-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center p-4" @click.self="closeCalendlyModal">
                    <div class="calendly-modal-container bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative">
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
                            <h2 class="text-2xl sm:text-3xl font-bold text-white">Book a Strategy Session</h2>
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
                                data-url="https://calendly.com/connect-jellyfishtechnologies/meeting-with-jellyfish-technologies-clone"
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
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

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
                url: 'https://calendly.com/connect-jellyfishtechnologies/meeting-with-jellyfish-technologies-clone',
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
</script>

<style scoped>
/* Hero Section Custom Styles */
.hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-custom {
    max-width: 1920px;
    margin: 0 auto;
    width: 100%;
}

/* Brand Colors */
.text-brand-dark {
    color: #121212;
}

.text-brand-light {
    color: #4A5568;
}

.bg-brand-red {
    background-color: #FF3621;
}

.border-brand-red {
    border-color: #FF3621;
}

.text-brand-red {
    color: #FF3621;
}

/* Primary Button - Red to White with Border on Hover */
.btn-primary {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
    background-color: white;
    color: #FF3621;
    border-color: #FF3621;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 54, 33, 0.3);
}

.btn-primary:active {
    transform: translateY(-1px);
}

/* Secondary Button - White with Border to Red on Hover */
.btn-secondary {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
    background-color: #FF3621;
    color: white;
    border-color: #FF3621;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 54, 33, 0.3);
}

.btn-secondary:active {
    transform: translateY(-1px);
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(60px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 1s ease-out;
    opacity: 0;
    animation-fill-mode: forwards;
}

.animation-delay-200 {
    animation-delay: 0.2s;
}

.animation-delay-400 {
    animation-delay: 0.4s;
}

/* Hero Title */
.hero-title {
    letter-spacing: -0.02em;
}

/* CTA Container */
.hero-cta {
    max-width: 100%;
}

/* Responsive Typography - Extra Large Screens */
@media (min-width: 1536px) {
    .hero-title {
        font-size: 100px;
        line-height: 100px;
    }
    
    .hero-subtitle {
        font-size: 26px;
        line-height: 39px;
    }
    
    .container-custom {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}

/* XL Screens */
@media (max-width: 1536px) {
    .hero-title {
        font-size: 90px;
        line-height: 95px;
    }
    
    .hero-subtitle {
        font-size: 24px;
        line-height: 36px;
        max-width: 1100px;
    }
}

/* Large Screens */
@media (max-width: 1280px) {
    .hero-section {
        padding-top: 100px;
    }
    
    .hero-title {
        font-size: 80px;
        line-height: 85px;
        margin-bottom: 1.5rem;
    }
    
    .hero-subtitle {
        font-size: 22px;
        line-height: 33px;
        max-width: 1000px;
        margin-bottom: 3rem;
    }
    
    .container-custom {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}

/* Laptop/Tablet Landscape */
@media (max-width: 1024px) {
    .hero-section {
        min-height: 90vh;
        padding-top: 120px;
        padding-bottom: 60px;
    }
    
    .hero-title {
        font-size: 64px;
        line-height: 70px;
        margin-bottom: 1.5rem;
    }
    
    .hero-subtitle {
        font-size: 20px;
        line-height: 30px;
        max-width: 900px;
        margin-bottom: 2.5rem;
    }
    
    .hero-cta {
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    }
    
    .hero-cta a {
        width: 100%;
        justify-content: center;
        padding: 1rem 2rem;
        font-size: 16px;
    }
    
    .container-custom {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}

/* Tablet Portrait */
@media (max-width: 768px) {
    .hero-section {
        min-height: 85vh;
        padding-top: 140px;
        padding-bottom: 40px;
    }
    
    .hero-title {
        font-size: 48px;
        line-height: 52px;
        margin-bottom: 1.25rem;
    }
    
    .hero-subtitle {
        font-size: 18px;
        line-height: 27px;
        max-width: 700px;
        margin-bottom: 2rem;
        padding: 0 1rem;
    }
    
    .hero-cta {
        gap: 0.875rem;
        max-width: 450px;
        padding: 0 1rem;
    }
    
    .hero-cta a {
        padding: 0.875rem 1.75rem;
        font-size: 15px;
    }
    
    .hero-cta svg {
        width: 20px;
        height: 20px;
    }
    
    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}

/* Mobile Landscape / Large Phones */
@media (max-width: 640px) {
    .hero-section {
        min-height: 100vh;
        padding-top: 140px;
        padding-bottom: 40px;
    }
    
    .hero-title {
        font-size: 36px;
        line-height: 42px;
        margin-bottom: 1rem;
        padding: 0 0.5rem;
    }
    
    .hero-subtitle {
        font-size: 16px;
        line-height: 24px;
        max-width: 100%;
        margin-bottom: 1.5rem;
        padding: 0 1rem;
    }
    
    .hero-cta {
        flex-direction: column;
        gap: 0.75rem;
        max-width: 100%;
        padding: 0 1rem;
    }
    
    .hero-cta a {
        width: 100%;
        padding: 0.875rem 1.5rem;
        font-size: 14px;
        gap: 0.5rem;
    }
    
    .hero-cta a .w-10 {
        width: 32px;
        height: 32px;
    }
    
    .hero-cta svg {
        width: 18px;
        height: 18px;
    }
}

/* Mobile Portrait */
@media (max-width: 480px) {
    .hero-section {
        min-height: 100vh;
        padding-top: 130px;
        padding-bottom: 30px;
    }

    .hero-title {
        font-size: 32px;
        line-height: 38px;
        margin-bottom: 0.875rem;
        padding: 0 0.5rem;
        font-weight: 600;
    }

    .hero-subtitle {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 1.25rem;
        padding: 0 0.75rem;
    }

    .hero-cta {
        gap: 0.625rem;
        padding: 0 0.75rem;
    }

    .hero-cta a {
        padding: 0.75rem 1.25rem;
        font-size: 13px;
        white-space: nowrap;
    }

    .hero-cta a svg {
        width: 16px;
        height: 16px;
    }
}

/* Extra Small Mobile */
@media (max-width: 375px) {
    .hero-title {
        font-size: 30px;
        line-height: 36px;
        font-weight: 600;
    }

    .hero-subtitle {
        font-size: 15px;
        line-height: 22px;
    }

    .hero-cta a {
        padding: 0.625rem 1rem;
        font-size: 12px;
    }

    .hero-cta a svg {
        width: 14px;
        height: 14px;
    }
}

/* Landscape Orientation */
@media (max-height: 600px) and (orientation: landscape) {
    .hero-section {
        min-height: auto;
        padding-top: 100px;
        padding-bottom: 40px;
    }
    
    .hero-title {
        font-size: 36px;
        line-height: 42px;
        margin-bottom: 0.75rem;
    }
    
    .hero-subtitle {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 1rem;
    }
    
    .hero-cta {
        flex-direction: row;
        gap: 0.75rem;
    }
    
    .hero-cta a {
        padding: 0.625rem 1.25rem;
        font-size: 14px;
    }
}

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {
    .hero-cta a {
        /* Larger touch targets for mobile */
        min-height: 48px;
        padding: 1rem 1.5rem;
    }
    
    .hero-cta a:active {
        transform: scale(0.98);
    }
}

/* High Resolution Displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .hero-section {
        background-attachment: scroll;
    }
}

/* Reduced Motion Preference */
@media (prefers-reduced-motion: reduce) {
    .animate-fadeInUp {
        animation: none;
        opacity: 1;
    }
    
    .btn-primary:hover,
    .btn-secondary:hover {
        transform: none;
    }
    
    .hero-cta svg {
        transition: none;
    }
}

/* Print Styles */
@media print {
    .hero-section {
        min-height: auto;
        page-break-after: always;
    }

    .hero-cta {
        display: none;
    }
}

/* Calendly Modal Styles */
.calendly-modal-overlay {
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
    animation: fadeIn 0.3s ease-out;
}

.calendly-modal-container {
    animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideUp {
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
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
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