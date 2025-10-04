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
                <div class="flex items-center justify-between h-[100px] px-7">
                    <!-- Logo -->
                    <div class="flex items-center">
                        <a href="/" class="flex items-center space-x-2 logo-container">
                            <img class="sinkilogoclass w-[147px] h-[70px] object-contain transition-transform duration-300" src="/images/sinkilogo.png" alt="Sinki Logo">
                        </a>
                    </div>

                    <!-- Desktop Navigation - Centered -->
                    <div class="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
                        <div class="flex items-center space-x-12">
                            <div class="nav-item">
                                <a href="#services" class="nav-link text-brand-dark text-lg font-bold uppercase tracking-wide hover:text-brand-red transition-colors duration-300">
                                    Services
                                </a>
                            </div>
                            <div class="nav-item">
                                <a href="#approach" class="nav-link text-brand-dark text-lg font-bold uppercase tracking-wide hover:text-brand-red transition-colors duration-300">
                                    Our Approach
                                </a>
                            </div>
                            <div class="nav-item">
                                <a href="#platforms" class="nav-link text-brand-dark text-lg font-bold uppercase tracking-wide hover:text-brand-red transition-colors duration-300">
                                    Platforms
                                </a>
                            </div>
                            <div class="nav-item">
                                <a href="#insights" class="nav-link text-brand-dark text-lg font-bold uppercase tracking-wide hover:text-brand-red transition-colors duration-300">
                                    Insights
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Get Started Button -->
                    <div class="hidden lg:block">
                        <a href="/contact" class="cta-button inline-flex items-center px-10 py-3.5 border-2 border-brand-dark rounded-full text-brand-dark text-lg font-bold uppercase tracking-wide transition-all duration-300">
                            Get Started
                        </a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button @click="toggleMobileMenu" class="lg:hidden mobile-menu-btn p-2 z-50 relative">
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
                        @click="closeMobileMenu"
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
                        @click="closeMobileMenu"
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
                        @click="closeMobileMenu"
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
                        @click="closeMobileMenu"
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
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const mobileMenuOpen = ref(false);
const scrollProgress = ref(0);
const isSticky = ref(false);

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

// Handle Escape key
const handleEscape = (e) => {
    if (e.key === 'Escape' && mobileMenuOpen.value) {
        closeMobileMenu();
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

.nav-link:hover::after {
    width: 100%;
}

/* CTA Button - Black background with white text on hover */
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
@media (max-width: 1024px) {
    .nav-floating {
        top: 12px;
        left: 12px;
        right: 12px;
    }
}

@media (max-width: 640px) {
    .sinkilogoclass {
        width: 100px !important;
        height: auto !important;
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
    }
}

@media (max-width: 480px) {
    .sinkilogoclass {
        width: 90px !important;
        height: auto !important;
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
</style>