<template>
    <!-- Service Hero Section - Reusable Component -->
    <section
        class="service-hero-section relative flex items-center justify-center overflow-hidden pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 lg:pb-36"
        :style="{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
            backgroundColor: backgroundColor || '#121212',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: minHeight || '90vh'
        }"
    >
        <!-- Background Overlay -->
        <div 
            class="absolute inset-0 z-0"
            :style="{
                background: overlayGradient || 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)'
            }"
        ></div>

        <!-- Content Container -->
        <div class="container-custom relative z-10 px-4 sm:px-6 lg:px-8 xl:px-[100px]">
            <div class="max-w-[1518px] mx-auto">
                <!-- Content limited to 50% width for proper line breaking -->
                <div class="max-w-[60%]">
                    <!-- Main Heading - Left Aligned with line break -->
                    <h1
                        :class="['service-hero-title text-white font-semibold mb-6 sm:mb-8 animate-fadeInUp leading-[1.1]', titleClasses]"
                    >
                        {{ title }}
                    </h1>

                    <!-- Subtitle/Description - Left Aligned -->
                    <p
                        :class="['service-hero-subtitle text-white/90 leading-relaxed mb-10 sm:mb-12 animate-fadeInUp animation-delay-200', subtitleClasses]"
                    >
                        {{ subtitle }}
                    </p>

                    <!-- CTA Button - Left Aligned -->
                    <div class="flex animate-fadeInUp animation-delay-400">
                        <button
                            v-if="ctaText"
                            @click="handleCtaClick"
                            class="service-cta-button group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-red hover:bg-white border-2 border-brand-red rounded-full text-white hover:text-brand-red text-base sm:text-lg font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
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
            </div>
        </div>

        <!-- Decorative Elements (Optional) -->
        <div v-if="showDecorativeElements" class="absolute inset-0 pointer-events-none z-0">
            <div class="absolute top-20 left-10 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>
    </section>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Props for customization
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    ctaText: {
        type: String,
        default: 'Talk To Our Experts'
    },
    backgroundImage: {
        type: String,
        default: '/images/service-hero-bg.png' // Default background image
    },
    backgroundColor: {
        type: String,
        default: '#121212'
    },
    overlayGradient: {
        type: String,
        default: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)'
    },
    minHeight: {
        type: String,
        default: '90vh'
    },
    titleClasses: {
        type: String,
        default: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'
    },
    subtitleClasses: {
        type: String,
        default: 'text-lg sm:text-xl md:text-2xl lg:text-[26px]'
    },
    showDecorativeElements: {
        type: Boolean,
        default: true
    }
});

// Emits
const emit = defineEmits(['cta-click']);

// Handle CTA click
const handleCtaClick = () => {
    emit('cta-click');
};
</script>

<style scoped>
/* Font Family - Instrument Sans */
.service-hero-section {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Container Custom */
.container-custom {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
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

.text-brand-dark {
    color: #121212;
}

/* Hero Title Styles */
.service-hero-title {
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

/* Hero Subtitle Styles */
.service-hero-subtitle {
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
}

/* CTA Button Styles */
.service-cta-button {
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(255, 54, 33, 0.3);
}

.service-cta-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.service-cta-button:hover::before {
    width: 400px;
    height: 400px;
}

/* Animations */
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

.animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
}

.animation-delay-200 {
    animation-delay: 0.2s;
    opacity: 0;
}

.animation-delay-400 {
    animation-delay: 0.4s;
    opacity: 0;
}

.animation-delay-1000 {
    animation-delay: 1s;
}

/* Responsive Styles */

/* Extra Large Screens */
@media (max-width: 1536px) {
    .service-hero-title {
        font-size: 6rem;
        line-height: 1.1;
    }

    .service-hero-subtitle {
        font-size: 1.625rem;
        line-height: 1.6;
    }
}

/* Large Screens */
@media (max-width: 1280px) {
    .service-hero-section {
        padding-top: 140px;
        padding-bottom: 100px;
    }

    .max-w-\[50\%\] {
        max-width: 55%;
    }

    .service-hero-title {
        font-size: 5rem;
        line-height: 1.1;
        margin-bottom: 1.5rem;
    }

    .service-hero-subtitle {
        font-size: 1.5rem;
        line-height: 1.6;
        margin-bottom: 2.5rem;
    }
}

/* Laptop/Tablet Landscape */
@media (max-width: 1024px) {
    .service-hero-section {
        min-height: 85vh;
        padding-top: 120px;
        padding-bottom: 80px;
    }

    .max-w-\[50\%\] {
        max-width: 65%;
    }

    .service-hero-title {
        font-size: 4.5rem;
        line-height: 1.1;
        margin-bottom: 1.5rem;
    }

    .service-hero-subtitle {
        font-size: 1.375rem;
        line-height: 1.6;
        margin-bottom: 2.5rem;
    }

    .service-cta-button {
        padding: 1rem 2rem;
        font-size: 1rem;
    }
}

/* Tablet Portrait */
@media (max-width: 768px) {
    .service-hero-section {
        min-height: 80vh;
        padding-top: 140px;
        padding-bottom: 60px;
    }

    .max-w-\[50\%\] {
        max-width: 80%;
    }

    .service-hero-title {
        font-size: 3.5rem;
        line-height: 1.1;
        margin-bottom: 1.25rem;
    }

    .service-hero-subtitle {
        font-size: 1.25rem;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    .service-cta-button {
        padding: 0.875rem 1.75rem;
        font-size: 0.9375rem;
    }
}

/* Mobile Landscape / Large Phones */
@media (max-width: 640px) {
    .service-hero-section {
        min-height: 100vh;
        padding-top: 140px;
        padding-bottom: 50px;
    }

    .max-w-\[50\%\] {
        max-width: 100%;
    }

    .service-hero-title {
        font-size: 2.75rem;
        line-height: 1.15;
        margin-bottom: 1rem;
    }

    .service-hero-subtitle {
        font-size: 1.125rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
    }

    .service-cta-button {
        padding: 0.75rem 1.5rem;
        font-size: 0.875rem;
        gap: 0.5rem;
    }

    .service-cta-button svg {
        width: 1rem;
        height: 1rem;
    }
}

/* Small Mobile */
@media (max-width: 480px) {
    .service-hero-section {
        padding-top: 120px;
        padding-bottom: 40px;
    }

    .service-hero-title {
        font-size: 2rem;
        line-height: 1.15;
    }

    .service-hero-subtitle {
        font-size: 0.9375rem;
        line-height: 1.5;
    }

    .service-cta-button {
        width: 100%;
        max-width: 300px;
    }
}

/* Extra Small Mobile */
@media (max-width: 375px) {
    .service-hero-title {
        font-size: 1.75rem;
        line-height: 1.2;
    }

    .service-hero-subtitle {
        font-size: 0.875rem;
        line-height: 1.5;
    }
}
</style>