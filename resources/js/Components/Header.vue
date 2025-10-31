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
                    <!-- Logo -->
                    <div class="flex items-center flex-shrink-0 z-10">
                        <a href="/" class="flex items-center space-x-2 logo-container">
                            <img class="sinkilogoclass w-[135px] h-[60px] transition-transform duration-300" src="/images/sinkilogo1.png" alt="Sinki Logo">
                        </a>
                    </div>

                    <!-- Desktop Navigation - Centered -->
                    <div class="hidden 2xl:flex items-center absolute left-1/2 transform -translate-x-1/2 z-0">
                        <div class="flex items-center space-x-10">
                            <div class="nav-item">
                                <a href="#services" @click.prevent="scrollToSection('services')" :class="['nav-link text-base font-bold uppercase tracking-wide transition-colors duration-300', activeSection === 'services' ? 'text-brand-red active' : 'text-brand-dark hover:text-brand-red']">
                                    Services
                                </a>
                            </div>
                            <div class="nav-item">
                                <a href="#approach" @click.prevent="scrollToSection('approach')" :class="['nav-link text-base font-bold uppercase tracking-wide transition-colors duration-300', activeSection === 'approach' ? 'text-brand-red active' : 'text-brand-dark hover:text-brand-red']">
                                    Our Approach
                                </a>
                            </div>
                            <div class="nav-item">
                                <a href="#platforms" @click.prevent="scrollToSection('platforms')" :class="['nav-link text-base font-bold uppercase tracking-wide transition-colors duration-300', activeSection === 'platforms' ? 'text-brand-red active' : 'text-brand-dark hover:text-brand-red']">
                                    Platforms
                                </a>
                            </div>
                            <div class="nav-item relative group">
                                <a href="#insights" @click.prevent="scrollToSection('insights')" :class="['nav-link text-base font-bold uppercase tracking-wide transition-colors duration-300 flex items-center', activeSection === 'insights' ? 'text-brand-red active' : 'text-brand-dark hover:text-brand-red']">
                                    Insights
                                    <svg class="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </a>

                                <!-- Mega Menu Dropdown -->
                                <div class="mega-menu absolute left-1/2 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-80 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl z-50 p-6">
                                 
                                    <div class="space-y-4">
                                        <!-- Blog Item -->
                                        <a href="/blog" class="mega-menu-item block p-4 bg-white/60 backdrop-blur-sm border border-gray-100 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300 group/item">
                                            <div class="flex items-start space-x-4">
                                                <!-- Icon -->
                                                <div class="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-red group-hover/item:scale-110 transition-all duration-300">
                                                    <svg class="w-6 h-6 text-brand-red group-hover/item:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"/>
                                                    </svg>
                                                </div>

                                                <!-- Content -->
                                                <div class="flex-1 min-w-0">
                                                    <h3 class="text-brand-dark text-lg font-bold group-hover/item:text-brand-red transition-colors duration-300">
                                                        Blog
                                                    </h3>
                                                    <!-- <p class="text-gray-600 text-sm mt-1 leading-relaxed">
                                                        Latest insights on Databricks, Data & AI development
                                                    </p> -->

                                                    <!-- Read More Arrow -->
                                                    <div class="flex items-center mt-3 text-brand-red group-hover/item:translate-x-1 transition-transform duration-300">
                                                        <span class="text-sm font-semibold">Read Articles</span>
                                                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CTA Buttons -->
                    <div class="hidden 2xl:flex items-center gap-4">
                        <!-- Book a Meeting Button -->
                        <button
                            @click="openCalendlyModal"
                            class="cta-button inline-flex items-center px-8 py-2.5 border-2 border-brand-dark rounded-full text-brand-dark text-base font-bold uppercase tracking-wide transition-all duration-300"
                        >
                            Book a Meeting
                        </button>

                        <!-- Contact Us Button -->
                        <a href="/contact" class="cta-button-contact inline-flex items-center px-8 py-2.5 border-2 border-brand-dark rounded-full bg-brand-dark text-white text-base font-bold uppercase tracking-wide transition-all duration-300">
                            Contact Us
                        </a>
                    </div>

                    <!-- Medium Screen Navigation (lg to 2xl) -->
                    <div class="hidden lg:flex 2xl:hidden items-center justify-center flex-1 mx-8">
                        <div class="flex items-center space-x-6">
                            <div class="nav-item">
                                <a href="#services" @click.prevent="scrollToSection('services')" :class="['nav-link text-sm font-bold uppercase tracking-wide transition-colors duration-300', activeSection === 'services' ? 'text-brand-red active' : 'text-brand-dark hover:text-brand-red']">
                                    Services
                                </a>
                            </div>
                            <div class="nav-item">
                                <a href="#approach" @click.prevent="scrollToSection('approach')" :class="['nav-link text-sm font-bold uppercase tracking-wide transition-colors duration-300', activeSection === 'approach' ? 'text-brand-red active' : 'text-brand-dark hover:text-brand-red']">
                                    Approach
                                </a>
                            </div>
                            <div class="nav-item">
                                <a href="#platforms" @click.prevent="scrollToSection('platforms')" :class="['nav-link text-sm font-bold uppercase tracking-wide transition-colors duration-300', activeSection === 'platforms' ? 'text-brand-red active' : 'text-brand-dark hover:text-brand-red']">
                                    Platforms
                                </a>
                            </div>
                            <div class="nav-item">
                                <a href="#insights" @click.prevent="scrollToSection('insights')" :class="['nav-link text-sm font-bold uppercase tracking-wide transition-colors duration-300', activeSection === 'insights' ? 'text-brand-red active' : 'text-brand-dark hover:text-brand-red']">
                                    Insights
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Medium Screen CTA Buttons -->
                    <div class="hidden lg:flex 2xl:hidden items-center gap-3">
                        <button
                            @click="openCalendlyModal"
                            class="cta-button inline-flex items-center px-4 py-2 border-2 border-brand-dark rounded-full text-brand-dark text-xs font-bold uppercase tracking-wide transition-all duration-300"
                        >
                            Book Meeting
                        </button>
                        <a href="/contact" class="cta-button-contact inline-flex items-center px-4 py-2 border-2 border-brand-dark rounded-full bg-brand-dark text-white text-xs font-bold uppercase tracking-wide transition-all duration-300">
                            Contact
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

        <!-- Mobile Menu Overlay -->
        <div 
            @click="closeMobileMenu" 
            :class="['mobile-menu-overlay fixed inset-0 bg-black/50 z-40 transition-opacity duration-300', mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible']"
        ></div>

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
                    <!-- Services -->
                    <a
                        href="#services"
                        @click.prevent="scrollToSection('services'); closeMobileMenu()"
                        class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300"
                    >
                        <div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                            <svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                            </svg>
                        </div>
                        <div>
                            <span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300">Services</span>
                            <p class="text-gray-500 text-xs font-normal">Our Solutions</p>
                        </div>
                    </a>

                    <!-- Our Approach -->
                    <a
                        href="#approach"
                        @click.prevent="scrollToSection('approach'); closeMobileMenu()"
                        class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300"
                    >
                        <div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                            <svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <div>
                            <span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300">Our Approach</span>
                            <p class="text-gray-500 text-xs font-normal">How We Work</p>
                        </div>
                    </a>

                    <!-- Platforms -->
                    <a
                        href="#platforms"
                        @click.prevent="scrollToSection('platforms'); closeMobileMenu()"
                        class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300"
                    >
                        <div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                            <svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                            </svg>
                        </div>
                        <div>
                            <span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300">Platforms</span>
                            <p class="text-gray-500 text-xs font-normal">Technology Stack</p>
                        </div>
                    </a>

                    <!-- Insights -->
                    <a
                        href="#insights"
                        @click.prevent="scrollToSection('insights'); closeMobileMenu()"
                        class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300"
                    >
                        <div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                            <svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                            </svg>
                        </div>
                        <div>
                            <span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300">Insights</span>
                            <p class="text-gray-500 text-xs font-normal">Resources & Blog</p>
                        </div>
                    </a>

                    <!-- Blog -->
                    <a
                        href="/blog"
                        @click="closeMobileMenu"
                        class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300"
                    >
                        <div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                            <svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"/>
                            </svg>
                        </div>
                        <div>
                            <span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300">Blog</span>
                            <p class="text-gray-500 text-xs font-normal">Latest insights & updates</p>
                        </div>
                    </a>

                    <!-- Book a Meeting -->
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
                            <span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300">Book a Meeting</span>
                            <p class="text-gray-500 text-xs font-normal">Schedule a Call</p>
                        </div>
                    </button>

                    <!-- Contact Us -->
                    <a
                        href="/contact"
                        @click="closeMobileMenu"
                        class="mobile-menu-link group flex items-center px-4 py-4 border border-gray-200 rounded-xl hover:border-brand-red hover:bg-brand-red/5 transition-all duration-300"
                    >
                        <div class="w-10 h-10 bg-brand-red/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                            <svg class="w-6 h-6 text-brand-red group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <div>
                            <span class="text-brand-dark text-base font-bold uppercase group-hover:text-brand-red transition-colors duration-300">Contact Us</span>
                            <p class="text-gray-500 text-xs font-normal">Get in Touch</p>
                        </div>
                    </a>
                </div>
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
                            <h2 class="text-2xl sm:text-3xl font-bold text-white">Book a Meeting</h2>
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
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const mobileMenuOpen = ref(false);
const scrollProgress = ref(0);
const isSticky = ref(false);
const activeSection = ref('');
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

// Smooth scroll to section
const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        const yOffset = -85; // Offset for fixed header
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
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

// Handle Escape key
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

    // Make header sticky after scrolling past the first viewport (hero section)
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

    // Detect active section
    const sections = ['services', 'approach', 'platforms', 'insights'];
    const offset = 200; // Offset to trigger section change earlier

    for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= offset && rect.bottom > offset) {
                activeSection.value = sectionId;
                break;
            }
        }
    }
};

onMounted(() => {
    window.addEventListener('keydown', handleEscape);
    window.addEventListener('scroll', handleScroll);
    // Initial calculation
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape);
    window.removeEventListener('scroll', handleScroll);
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

/* Navigation Links */
.nav-link {
    position: relative;
    display: inline-block;
    padding: 10px 5px;
}

.nav-link.flex {
    display: flex !important;
    align-items: center;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #FF3621;
    transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

/* CTA Button - Book a Meeting - Black background with white text on hover */
.cta-button {
    position: relative;
    overflow: hidden;
}

.cta-button:hover {
    background-color: #121212;
    color: white;
    border-color: #121212;
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 54, 33, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.cta-button:hover::before {
    width: 300px;
    height: 300px;
}

/* CTA Button Contact - White background with black text on hover (flipped) */
.cta-button-contact {
    position: relative;
    overflow: hidden;
}

.cta-button-contact:hover {
    background-color: white;
    color: #121212;
    border-color: #121212;
}

.cta-button-contact::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 54, 33, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.cta-button-contact:hover::before {
    width: 300px;
    height: 300px;
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

/* Mega Menu Styles */
.mega-menu {
    backdrop-filter: blur(20px);
    transform: translateX(-50%) translateY(10px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05);
}

.mega-menu::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    height: 10px;
}

.group:hover .mega-menu {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
    visibility: visible;
}

.mega-menu-item {
    transform: translateY(5px);
    transition: all 0.3s ease;
    border-radius: 12px;
}

.mega-menu-item:hover {
    transform: translateY(0);
    box-shadow: 0 8px 25px rgba(255, 54, 33, 0.15);
    border-color: #FF3621 !important;
}

/* Enhanced hover states for mega menu */
.mega-menu-item .group\/item:hover .w-12 {
    background-color: #FF3621;
    transform: scale(1.1);
}

.mega-menu-item .group\/item:hover svg {
    color: white;
}

.mega-menu-item .group\/item:hover h3 {
    color: #FF3621;
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

.mobile-menu-link:nth-child(3) {
    animation-delay: 0.3s;
}

.mobile-menu-link:nth-child(4) {
    animation-delay: 0.4s;
}

.mobile-menu-link:nth-child(5) {
    animation-delay: 0.5s;
}

.mobile-menu-link:nth-child(6) {
    animation-delay: 0.6s;
}

.mobile-menu-link:nth-child(7) {
    animation-delay: 0.7s;
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

/* Responsive Styles */
@media (max-width: 1535px) {
    /* Hide mega menu on smaller screens */
    .mega-menu {
        display: none;
    }
}

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
    scroll-padding-top: 85px;
}

section[id] {
    scroll-margin-top: 85px;
}

@media (max-width: 1023px) {
    html {
        scroll-padding-top: 65px;
    }

    section[id] {
        scroll-margin-top: 65px;
    }
}

@media (max-width: 640px) {
    html {
        scroll-padding-top: 55px;
    }

    section[id] {
        scroll-margin-top: 55px;
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