<template>
    <!-- Service Hero Section - Reusable Component -->
    <section
        class="service-hero-section relative flex items-center justify-center overflow-hidden pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-16 sm:pb-20 md:pb-28 lg:pb-36"
        :style="{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
            backgroundColor: backgroundColor || '#121212',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: minHeight || '90vh'
        }"
    >

       

        <!-- Content Container -->
        <div class="container-custom relative z-10 px-4 sm:px-6 lg:px-8 xl:px-[100px]">
            <div class="max-w-[1518px] mx-auto">
                <!-- Content with responsive width for proper line breaking -->
                <div class="max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
                    <!-- Main Heading - Left Aligned with line break -->
                    <h1
                        :class="['service-hero-title text-white font-semibold mb-4 sm:mb-6 md:mb-8 animate-fadeInUp leading-[1.1] sm:leading-[1.15] md:leading-[1.1]', titleClasses]"
                    >
                        {{ title }}
                    </h1>

                    <!-- Subtitle/Description - Left Aligned -->
                    <p
                        :class="['service-hero-subtitle text-white/90 leading-relaxed mb-8 sm:mb-10 md:mb-12 animate-fadeInUp animation-delay-200', subtitleClasses]"
                    >
                        {{ subtitle }}
                    </p>

                    <!-- CTA Button - Left Aligned -->
                    <div class="flex justify-start animate-fadeInUp animation-delay-400">
                        <button
                            v-if="ctaText"
                            @click="handleCtaClick"
                            class="service-cta-button group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-red hover:bg-white border-2 border-brand-red rounded-full text-white hover:text-brand-white text-base sm:text-lg font-bold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
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
        default: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'
    },
    subtitleClasses: {
        type: String,
        default: 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px]'
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
    word-wrap: break-word;
    hyphens: auto;
}

/* Hero Subtitle Styles */
.service-hero-subtitle {
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    word-wrap: break-word;
    line-height: 1.5;
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

/* Override inline minHeight with responsive values */
.service-hero-section {
    min-height: 90vh !important;
}

/* Extra Large Screens (2XL) */
@media (min-width: 1536px) {
    .service-hero-section {
        min-height: 95vh !important;
    }
}

/* Extra Large Screens */
@media (max-width: 1536px) {
    .service-hero-section {
        min-height: 90vh !important;
    }
}

/* Large Screens (XL) */
@media (max-width: 1280px) {
    .service-hero-section {
        min-height: 85vh !important;
        padding-top: 11rem;
        padding-bottom: 6rem;
    }
}

/* Large Screens (LG) - Laptop/Tablet Landscape */
@media (max-width: 1024px) {
    .service-hero-section {
        min-height: 80vh !important;
        padding-top: 9rem;
        padding-bottom: 5rem;
    }

    .service-cta-button {
        padding: 0.875rem 1.75rem;
        font-size: 0.9375rem;
    }
}

/* Medium Screens (MD) - Tablet Portrait */
@media (max-width: 768px) {
    .service-hero-section {
        min-height: 60vh !important;
        padding-top: 6rem;
        padding-bottom: 3rem;
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

/* Small Screens (SM) - Mobile Landscape / Large Phones */
@media (max-width: 640px) {
    .service-hero-section {
        min-height: 60vh !important;
        padding-top: 5rem;
        padding-bottom: 2.5rem;
    }

    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .service-cta-button {
        padding: 0.75rem 1.25rem;
        font-size: 0.8125rem;
        gap: 0.375rem;
    }

    .service-cta-button svg {
        width: 0.875rem;
        height: 0.875rem;
    }
}

/* Small Mobile */
@media (max-width: 480px) {
    .service-hero-section {
        min-height: 60vh !important;
        padding-top: 4rem;
        padding-bottom: 2rem;
    }

    .container-custom {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }

    .service-cta-button {
        width: 100%;
        max-width: 280px;
        padding: 0.6875rem 1rem;
        font-size: 0.75rem;
    }
}

/* Extra Small Mobile */
@media (max-width: 375px) {
    .service-hero-section {
        min-height: 60vh !important;
        padding-top: 3.5rem;
        padding-bottom: 1.5rem;
    }

    .container-custom {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .service-cta-button {
        max-width: 260px;
        padding: 0.625rem 0.875rem;
        font-size: 0.6875rem;
    }
}
</style>