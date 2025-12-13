<template>
    <section class="cta-section py-16 sm:py-20 lg:py-24">
        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
            <div class="max-w-[1720px] mx-auto">

                <!-- CTA Container -->
                <div
                    class="cta-container relative overflow-hidden rounded-[40px] px-8 sm:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20 text-center"
                    :style="{
                        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }"
                >
                    <!-- Dark Overlay -->
                    <div class="absolute inset-0 bg-black/60 rounded-[40px]"></div>

                    <!-- Animated Background Elements -->
                    <div class="absolute inset-0 overflow-hidden rounded-[40px]">
                        <!-- Orange gradient lines -->
                        <div class="absolute top-1/4 right-0 w-full h-px bg-gradient-to-l from-orange-500/30 via-red-500/20 to-transparent"></div>
                        <div class="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-orange-400/20 via-red-400/30 to-transparent"></div>

                        <!-- Diagonal lines -->
                        <svg class="absolute top-0 right-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="ctaLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#FF3621;stop-opacity:0.3" />
                                    <stop offset="100%" style="stop-color:#FFA500;stop-opacity:0.1" />
                                </linearGradient>
                            </defs>
                            <path d="M20,10 L90,30 L80,70 L30,90" stroke="url(#ctaLineGradient)" stroke-width="0.5" fill="none"/>
                            <path d="M10,30 L70,10 L90,50 L40,80" stroke="url(#ctaLineGradient)" stroke-width="0.3" fill="none"/>
                        </svg>
                    </div>

                    <!-- Content -->
                    <div class="relative z-10 max-w-6xl mx-auto">
                        <!-- Main Headline -->
                        <h2 class="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[3rem] font-semibold leading-tight font-instrument-sans mb-4 sm:mb-6">
                            {{ title || 'Unlock the full potential of Databricks with expert-led guidance built for enterprise scale.' }}
                        </h2>

                        <!-- Subtitle -->
                        <p v-if="subtitle" class="text-white/90 text-base sm:text-lg lg:text-xl font-normal font-instrument-sans mb-8 sm:mb-12 max-w-4xl mx-auto">
                            {{ subtitle }}
                        </p>

                        <!-- CTA Button -->
                        <div class="flex justify-center">
                            <button
                                class="group bg-[#FF3621] hover:bg-[#FF3621]/90 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-[50px] text-lg sm:text-xl font-semibold font-instrument-sans transition-all duration-300 hover:shadow-xl hover:shadow-[#FF3621]/20 flex items-center space-x-3 hover:scale-105"
                                @click="handleCTAClick"
                            >
                                <!-- Phone Icon -->
                                <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>

                                <span>{{ ctaText || 'Book A Free Strategy Call' }}</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Unlock the full potential of Databricks with expert-led guidance built for enterprise scale.'
    },
    subtitle: {
        type: String,
        default: null
    },
    ctaText: {
        type: String,
        default: 'Book A Free Strategy Call'
    },
    ctaLink: {
        type: String,
        default: '/contact'
    },
    backgroundImage: {
        type: String,
        default: null
    }
});

const emit = defineEmits(['cta-click']);

const handleCTAClick = () => {
    // Emit event for parent component to handle
    emit('cta-click');

    // Default behavior - navigate to contact or provided link
    if (props.ctaLink) {
        window.location.href = props.ctaLink;
    } else {
        window.location.href = '/contact';
    }
};
</script>

<style scoped>
/* Font Family - Instrument Sans */
.font-instrument-sans {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Container Custom */
.container-custom {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
}

/* CTA Section */
.cta-section {
    position: relative;
    background-color: #ffffff;
}

/* CTA Container */
.cta-container {
    position: relative;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Button Hover Effects */
button {
    position: relative;
    overflow: hidden;
}

button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
}

button:hover::before {
    width: 300px;
    height: 300px;
}

/* Phone icon animation */
button:hover svg {
    animation: phoneRing 0.6s ease;
}

@keyframes phoneRing {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-15deg); }
    75% { transform: rotate(15deg); }
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .cta-container {
        border-radius: 32px;
        padding: 3rem 2rem;
    }

    .cta-container h2 {
        font-size: 2.5rem !important;
        line-height: 1.2 !important;
    }
}

@media (max-width: 768px) {
    .cta-section {
        padding: 2.5rem 0;
    }

    .cta-container {
        border-radius: 24px;
        padding: 2.5rem 1.5rem;
    }

    .cta-container h2 {
        font-size: 2rem !important;
        line-height: 1.3 !important;
        margin-bottom: 2rem !important;
    }

    button {
        padding: 1rem 2rem !important;
        font-size: 1rem !important;
    }
}

@media (max-width: 640px) {
    .cta-container {
        border-radius: 20px;
        padding: 2rem 1rem;
    }

    .cta-container h2 {
        font-size: 1.75rem !important;
        line-height: 1.4 !important;
        margin-bottom: 1.5rem !important;
    }

    button {
        padding: 0.875rem 1.5rem !important;
        font-size: 0.875rem !important;
    }

    button svg {
        width: 1rem !important;
        height: 1rem !important;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .cta-container {
        animation: none;
    }

    button:hover {
        transform: none;
    }

    button::before {
        transition: none;
    }

    button:hover svg {
        animation: none;
    }
}
</style>