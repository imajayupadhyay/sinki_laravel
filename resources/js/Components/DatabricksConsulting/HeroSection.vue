<template>
    <section class="hero-section relative overflow-hidden h-[80vh] flex items-center">
        <!-- Background Image (will be set later) -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40">
            <!-- Background image will be added here later -->
            <div class="absolute inset-0 bg-[#1a1a1a]"></div>
        </div>

        <!-- Animated Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <!-- Orange dots/particles animation -->
            <div class="absolute top-20 right-20 w-4 h-4 bg-orange-400 rounded-full opacity-60 animate-pulse"></div>
            <div class="absolute top-40 right-40 w-2 h-2 bg-orange-300 rounded-full opacity-80 animate-bounce"></div>
            <div class="absolute top-60 right-60 w-3 h-3 bg-orange-500 rounded-full opacity-40 animate-pulse"></div>
            <div class="absolute bottom-40 right-20 w-5 h-5 bg-orange-400 rounded-full opacity-50 animate-bounce"></div>
            <div class="absolute bottom-60 right-80 w-2 h-2 bg-orange-300 rounded-full opacity-70 animate-pulse"></div>

            <!-- Left side particles -->
            <div class="absolute top-32 left-20 w-3 h-3 bg-orange-400 rounded-full opacity-40 animate-pulse"></div>
            <div class="absolute bottom-32 left-40 w-4 h-4 bg-orange-300 rounded-full opacity-60 animate-bounce"></div>

            <!-- Center particles -->
            <div class="absolute top-1/3 left-1/2 w-2 h-2 bg-orange-500 rounded-full opacity-50 animate-pulse"></div>
            <div class="absolute bottom-1/3 left-1/3 w-3 h-3 bg-orange-400 rounded-full opacity-30 animate-bounce"></div>
        </div>

        <!-- Content Container -->
        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] relative z-10">
            <div class="max-w-[1720px] mx-auto">
                <div class="w-full max-w-[70%]">
                    <!-- Main Heading -->
                    <h1 class="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-semibold leading-tight font-instrument-sans mb-8">
                        Databricks Consulting Services
                    </h1>

                    <!-- Description -->
                    <p class="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] font-normal leading-relaxed font-instrument-sans mb-12">
                        Sinki.ai empowers enterprises to realize the full power of Databricks through strategy-led consulting, hands-on implementation, and continuous optimization that drives innovation and performance excellence.
                    </p>

                    <!-- CTA Button -->
                    <div class="flex items-center">
                        <button
                            class="group bg-[#FF3621] hover:bg-[#FF3621]/90 text-white px-8 py-4 rounded-[50px] text-lg font-semibold font-instrument-sans transition-all duration-300 hover:shadow-xl hover:shadow-[#FF3621]/20 flex items-center space-x-3"
                            @click="handleCTAClick"
                        >
                            <span>Let's Talk About Databricks</span>
                            <!-- Arrow -->
                            <div class="flex items-center space-x-1 ml-2">
                                <!-- Arrow Line -->
                                <div class="w-8 h-[2px] bg-white transition-transform duration-200 group-hover:translate-x-1"></div>
                                <!-- Arrow Head -->
                                <svg class="transition-transform duration-200 group-hover:translate-x-1" width="8" height="10" viewBox="0 0 8 10" fill="none">
                                    <path d="M7.5 5L0 0v10l7.5-5z" fill="white"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Geometric Lines/Elements (similar to the background pattern) -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <svg class="absolute top-0 right-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#FF3621;stop-opacity:0.3" />
                        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:0.1" />
                    </linearGradient>
                </defs>
                <path d="M20,10 L90,30 L80,70 L30,90" stroke="url(#lineGradient)" stroke-width="0.5" fill="none"/>
                <path d="M10,30 L70,10 L90,50 L40,80" stroke="url(#lineGradient)" stroke-width="0.3" fill="none"/>
                <path d="M30,0 L100,20 L90,60 L20,90" stroke="url(#lineGradient)" stroke-width="0.4" fill="none"/>
            </svg>
        </div>
    </section>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    backgroundImage: {
        type: String,
        default: null
    }
});

const emit = defineEmits(['cta-click']);

const handleCTAClick = () => {
    // Emit event for parent component to handle
    emit('cta-click');

    // Default behavior - scroll to contact or navigate to contact page
    // You can customize this based on your needs
    window.location.href = '/contact';
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

/* Custom animations for particles */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

/* Pulse animation for particles */
@keyframes pulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
}

/* Bounce animation for particles */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
</style>