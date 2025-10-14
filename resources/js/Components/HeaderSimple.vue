<template>
    <!-- Scroll Progress Bar -->
    <div class="scroll-progress-bar fixed top-0 left-0 right-0 h-1 bg-gray-200 z-[100]">
        <div
            class="scroll-progress-fill h-full bg-brand-red transition-all duration-300 ease-out"
            :style="{ width: scrollProgress + '%' }"
        ></div>
    </div>

    <!-- Navigation Section -->
    <div id="navigation">
        <nav class="navigation bg-white/75 backdrop-blur-sm shadow-custom z-50 rounded-[20px] border border-gray-200" :class="isSticky ? 'nav-sticky' : 'nav-floating'">
            <div class="container-custom">
                <div class="flex items-center justify-between h-[80px] px-6 relative">
                    <!-- Logo - Left Side -->
                    <div class="flex items-center flex-shrink-0 z-10">
                        <a href="/" class="flex items-center space-x-2 logo-container">
                            <img class="sinkilogoclass w-[135px] h-[60px] transition-transform duration-300" src="/images/sinkilogo1.png" alt="Sinki Logo">
                        </a>
                    </div>

                    <!-- CTA Buttons - Right Side -->
                    <div class="hidden lg:flex items-center gap-3">
                        <!-- Primary Button - Book a Strategy Session -->
                        <button
                            @click="openCalendlyModal"
                            class="btn-primary group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-red border-2 border-brand-red rounded-full text-white text-sm font-bold capitalize transition-all duration-300"
                        >
                            Book a Strategy Session
                            <div class="w-5 h-5 flex items-center justify-center">
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </div>
                        </button>

                        <!-- Secondary Button - Back to Home -->
                        <a
                            href="/"
                            class="btn-secondary group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-transparent border-2 border-brand-red rounded-full text-brand-red text-sm font-bold capitalize transition-all duration-300"
                        >
                            Back to Home
                            <div class="w-5 h-5 flex items-center justify-center">
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                </svg>
                            </div>
                        </a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button @click="toggleMobileMenu" class="lg:hidden mobile-menu-btn p-2 z-50 relative ml-auto">
                        <svg class="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

        <!-- Mobile Menu -->
        <div :class="['mobile-menu lg:hidden fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-2xl transition-transform duration-300 z-50', mobileMenuOpen ? 'translate-x-0' : 'translate-x-full']">
            <div class="p-6 h-full flex flex-col overflow-y-auto">
                <!-- Close Button -->
                <button @click="closeMobileMenu" class="mobile-menu-close mb-8 ml-auto block p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                    <svg class="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>

                <!-- Menu Items -->
                <div class="flex flex-col space-y-4">
                    <!-- Book a Strategy Session -->
                    <button
                        @click="openCalendlyModalMobile"
                        class="mobile-menu-link group w-full flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300"
                    >
                        <div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                            <svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <div class="text-left">
                            <span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300">Book a Strategy Session</span>
                            <p class="text-gray-500 text-xs font-normal">Schedule a Call</p>
                        </div>
                    </button>

                    <!-- Back to Home -->
                    <a
                        href="/"
                        @click="closeMobileMenu"
                        class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300"
                    >
                        <div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                            <svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                            </svg>
                        </div>
                        <div>
                            <span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300">Back to Home</span>
                            <p class="text-gray-500 text-xs font-normal">Return to Homepage</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div
            @click="closeMobileMenu"
            :class="['mobile-menu-overlay fixed inset-0 bg-black/50 z-40 transition-opacity duration-300', mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible']"
        ></div>
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
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const scrollProgress = ref(0);
const isSticky = ref(false);
const mobileMenuOpen = ref(false);
const showCalendlyModal = ref(false);
const isLoading = ref(false);
const loadingProgress = ref(0);
const calendlyContainer = ref(null);
let progressInterval = null;

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
    if (mobileMenuOpen.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

const closeMobileMenu = () => {
    mobileMenuOpen.value = false;
    document.body.style.overflow = '';
};

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

const openCalendlyModalMobile = () => {
    closeMobileMenu();
    setTimeout(() => {
        openCalendlyModal();
    }, 300);
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

// Handle escape key to close modal/menu
const handleEscape = (e) => {
    if (e.key === 'Escape') {
        if (showCalendlyModal.value) {
            closeCalendlyModal();
        } else if (mobileMenuOpen.value) {
            closeMobileMenu();
        }
    }
};

// Handle scroll effect and progress bar
const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Make header sticky after scrolling past the first viewport
    isSticky.value = scrollTop > windowHeight * 0.8;

    const navigation = document.querySelector('.navigation');
    if (navigation) {
        if (window.scrollY > 50) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }
    }

    // Calculate scroll progress
    const documentHeight = document.documentElement.scrollHeight;
    const scrollableHeight = documentHeight - windowHeight;

    if (scrollableHeight > 0) {
        const progress = (scrollTop / scrollableHeight) * 100;
        scrollProgress.value = Math.min(100, Math.max(0, progress));
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEscape);
    // Initial calculation
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('keydown', handleEscape);
    document.body.style.overflow = '';
    if (progressInterval) {
        clearInterval(progressInterval);
    }
});
</script>

<style scoped>
/* Scroll Progress Bar */
.scroll-progress-bar {
    background-color: rgba(18, 18, 18, 0.1);
}

.scroll-progress-fill {
    background: linear-gradient(90deg, #FF3621 0%, #ff5842 100%);
    box-shadow: 0 2px 8px rgba(255, 54, 33, 0.3);
}

/* Navigation Section Styles */
.navigation {
    animation: slideDown 0.6s ease-out;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Floating Navigation (Default state) */
.nav-floating {
    position: fixed;
    top: 24px;
    left: 24px;
    right: 24px;
}

/* Sticky Navigation (After scrolling past hero) */
.nav-sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-top: none;
}

@keyframes slideDown {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.navigation.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Container Custom */
.container-custom {
    max-width: 1920px;
    margin: 0 auto;
    width: 100%;
}

/* Logo Animation */
.logo-container:hover img {
    transform: rotate(6deg) scale(1.05);
}

/* Brand Colors */
.text-brand-dark {
    color: #121212;
}

.text-brand-red {
    color: #FF3621;
}

.bg-brand-red {
    background-color: #FF3621;
}

.border-brand-dark {
    border-color: #121212;
}

/* Custom Shadow */
.shadow-custom {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .nav-floating {
        top: 12px;
        left: 12px;
        right: 12px;
    }
}

@media (max-width: 1024px) {
    .sinkilogoclass {
        width: 140px !important;
        height: 50px !important;
    }

    .navigation .flex {
        justify-content: flex-start !important;
    }

    .navigation .flex .flex-shrink-0 {
        margin-right: auto;
    }
}

@media (max-width: 768px) {
    .sinkilogoclass {
        width: 130px !important;
        height: 50px !important;
    }
}

@media (max-width: 640px) {
    .sinkilogoclass {
        width: 120px !important;
        height: 50px !important;
    }

    .nav-floating {
        top: 12px;
        left: 12px;
        right: 12px;
    }

    .navigation .flex {
        height: 70px !important;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
        justify-content: flex-start !important;
    }

    .navigation .flex .flex-shrink-0 {
        margin-right: auto;
    }
}

@media (max-width: 480px) {
    .sinkilogoclass {
        width: 110px !important;
        height: 50px !important;
    }

    .nav-floating {
        top: 8px;
        left: 8px;
        right: 8px;
    }

    .navigation .flex {
        height: 60px !important;
        padding-left: 0.75rem !important;
        padding-right: 0.75rem !important;
        justify-content: flex-start !important;
    }

    .navigation .flex .flex-shrink-0 {
        margin-right: auto;
    }
}

/* Smooth Scroll */
html {
    scroll-behavior: smooth;
    scroll-padding-top: 144px;
}

section[id] {
    scroll-margin-top: 144px;
}

@media (max-width: 1023px) {
    html {
        scroll-padding-top: 124px;
    }

    section[id] {
        scroll-margin-top: 124px;
    }
}

/* CTA Button Styles */
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

/* Mobile Menu Link Animation */
.mobile-menu-link {
    animation: slideInRight 0.3s ease-out forwards;
    opacity: 0;
}

.mobile-menu-link:nth-child(1) {
    animation-delay: 0.1s;
}

.mobile-menu-link:nth-child(2) {
    animation-delay: 0.2s;
}

@keyframes slideInRight {
    from {
        transform: translateX(30px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
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
