<template>
    <section
        class="industry-challenges-section relative overflow-hidden py-20 lg:py-32"
        :style="{
            backgroundImage: 'url(/images/aboutussecbanner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }"
    >
        <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10">
            <!-- Section Header - Center Aligned -->
            <div class="text-center mb-18 lg:mb-24">
                <!-- Main Title -->
                <h2 class="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-4 animate-slide-up-title">
                    Solving Industry-Specific BI Challenges with Databricks
                </h2>

                <!-- Subtitle -->
                <p class="text-white text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[1200px] mx-auto animate-slide-up-subtitle">
                    Enterprises across industries rely on Databricks to solve BI challenges<br class="hidden lg:block">
                    that traditional tools cannot, delivering faster insights and consistent decision clarity.
                </p>
            </div>

            <!-- Slider Container -->
            <div class="slider-container relative overflow-hidden">
                <!-- Cards Wrapper -->
                <div class="cards-wrapper flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentCard * slidePercentage}%)` }">

                    <!-- Card 1: Retail and E-Commerce -->
                    <div class="industry-card flex-shrink-0 w-[300px] lg:w-[350px] xl:w-[400px] group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer mr-6">
                        <div class="flex flex-col h-full">
                            <!-- Icon -->
                            <div class="flex-shrink-0 mb-6">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    Retail and E-Commerce
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    Fragmented customer data and slow reporting cycles are unified through scalable Lakehouse BI models, enabling real-time insights, accurate demand forecasting, and consistently higher personalization across every customer touchpoint.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Healthcare and Life Sciences -->
                    <div class="industry-card flex-shrink-0 w-[300px] lg:w-[350px] xl:w-[400px] group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer mr-6">
                        <div class="flex flex-col h-full">
                            <!-- Icon -->
                            <div class="flex-shrink-0 mb-6">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    Healthcare and Life Sciences
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    Scattered clinical data and complex compliance needs are streamlined with secure Databricks BI models, delivering faster insights, improved care decisions, and consistently stronger regulatory readiness across healthcare workflows.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Financial Services -->
                    <div class="industry-card flex-shrink-0 w-[300px] lg:w-[350px] xl:w-[400px] group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer mr-6">
                        <div class="flex flex-col h-full">
                            <!-- Icon -->
                            <div class="flex-shrink-0 mb-6">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    Financial Services
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    Disparate risk signals and limited fraud visibility are consolidated into real-time BI dashboards, enabling faster anomaly detection, stronger risk oversight, and more reliable, audit-ready regulatory reporting.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Manufacturing and Logistics -->
                    <div class="industry-card flex-shrink-0 w-[300px] lg:w-[350px] xl:w-[400px] group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer mr-6">
                        <div class="flex flex-col h-full">
                            <!-- Icon -->
                            <div class="flex-shrink-0 mb-6">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    Manufacturing and Logistics
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    Operational delays and unpredictable performance are addressed with IoT-driven BI pipelines that provide real-time visibility, accurate demand forecasting, and proactive maintenance insights that significantly reduce downtime.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 5: Technology and Software -->
                    <div class="industry-card flex-shrink-0 w-[300px] lg:w-[350px] xl:w-[400px] group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer mr-6">
                        <div class="flex flex-col h-full">
                            <!-- Icon -->
                            <div class="flex-shrink-0 mb-6">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    Media and Telecom
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    Massive engagement data and disconnected insights are unified through scalable analytics models, enabling real-time audience understanding, smarter retention strategies, and faster optimization across high-volume digital platforms.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 6: Energy and Utilities -->
                    <div class="industry-card flex-shrink-0 w-[300px] lg:w-[350px] xl:w-[400px] group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer mr-6">
                        <div class="flex flex-col h-full">
                            <!-- Icon -->
                            <div class="flex-shrink-0 mb-6">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    SaaS and Technology
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    Fragmented product usage signals and slow experimentation insights are unified through centralized BI layers, enabling faster feature decisions, deeper user understanding, and more informed roadmap prioritization.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>

                <!-- Navigation Arrows -->
                <div class="slider-navigation flex justify-center mt-12 gap-4">
                    <button
                        @click="previousCard"
                        :disabled="currentCard === 0"
                        class="nav-arrow bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 rounded-full p-3 transition-all duration-300"
                    >
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    <button
                        @click="nextCard"
                        :disabled="isLastCardVisible"
                        class="nav-arrow bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 rounded-full p-3 transition-all duration-300"
                    >
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Slider state
const currentCard = ref(0);
const totalCards = ref(6); // Total number of cards

// Calculate visible cards based on screen size
const cardsVisible = computed(() => {
    if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        if (width >= 1280) return 3; // Desktop: 3 cards visible
        if (width >= 1024) return 2.5; // Tablet: 2.5 cards visible
        if (width >= 768) return 2; // Mobile: 2 cards visible
        return 1.5; // Small mobile: 1.5 cards visible
    }
    return 3;
});

// Check if the last card is visible in current viewport
const isLastCardVisible = computed(() => {
    // Calculate which cards are currently visible
    const firstVisibleCard = currentCard.value + 1; // 1-indexed
    const lastVisibleCard = firstVisibleCard + Math.floor(cardsVisible.value) - 1;

    // If the last card (6th card) is visible, disable next button
    return lastVisibleCard >= totalCards.value;
});

const maxSlidePosition = computed(() => {
    // Calculate the maximum slide position where the last card becomes visible
    return Math.max(0, totalCards.value - Math.floor(cardsVisible.value));
});

const slidePercentage = computed(() => {
    // Each slide moves by one card width
    // Calculate percentage based on how many cards fit in viewport
    return 100 / cardsVisible.value;
});

// Slider navigation methods
const nextCard = () => {
    if (!isLastCardVisible.value) {
        currentCard.value++;
    }
};

const previousCard = () => {
    if (currentCard.value > 0) {
        currentCard.value--;
    }
};

// Auto-play functionality (optional)
const autoPlay = ref(false); // Disabled for better UX with individual cards
const autoPlayInterval = ref(null);

const startAutoPlay = () => {
    if (autoPlay.value) {
        autoPlayInterval.value = setInterval(() => {
            if (isLastCardVisible.value) {
                currentCard.value = 0;
            } else {
                currentCard.value++;
            }
        }, 3000); // Change card every 3 seconds
    }
};

const stopAutoPlay = () => {
    if (autoPlayInterval.value) {
        clearInterval(autoPlayInterval.value);
        autoPlayInterval.value = null;
    }
};

// Keyboard navigation
const handleKeydown = (event) => {
    if (event.key === 'ArrowLeft') {
        previousCard();
    } else if (event.key === 'ArrowRight') {
        nextCard();
    }
};

// Handle window resize for responsive calculations
const handleResize = () => {
    // Force reactivity update for cardsVisible
    cardsVisible.value;
    // Reset to safe position if last card is now visible
    if (isLastCardVisible.value && currentCard.value > 0) {
        // Move back one position to ensure we don't show blank space
        currentCard.value = Math.max(0, currentCard.value - 1);
    }
};

onMounted(() => {
    startAutoPlay();
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    stopAutoPlay();
    window.removeEventListener('keydown', handleKeydown);
    window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* Simple Fade Up Animation */
@keyframes simpleFadeUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-up-title {
    animation: simpleFadeUp 1s ease-out;
    animation-delay: 0.4s;
    animation-fill-mode: both;
}

.animate-slide-up-subtitle {
    animation: simpleFadeUp 1s ease-out;
    animation-delay: 0.6s;
    animation-fill-mode: both;
}

/* Font Family - Instrument Sans */
.industry-challenges-section {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Container Custom */
.container-custom {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
}

/* Brand Colors */
.bg-brand-red {
    background-color: #FF3621;
}

.text-brand-red {
    color: #FF3621;
}

/* Slider Styles */
.slider-container {
    position: relative;
}

.cards-wrapper {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

/* Enhanced Industry Card Styles with Glass Effect */
.industry-card {
    position: relative;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation: slideUp 0.8s ease-out;
    animation-fill-mode: backwards;
    box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Glass effect enhancement */
.industry-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 25px;
    background: linear-gradient(135deg, rgba(255, 54, 33, 0.1) 0%, transparent 50%, rgba(255, 54, 33, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 1;
}

.industry-card:hover::before {
    opacity: 1;
}

/* Card Hover Effects */
.industry-card:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 54, 33, 0.3);
    transform: translateY(-5px);
    box-shadow:
        0 15px 45px rgba(255, 54, 33, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* Icon Wrapper Styles */
.icon-wrapper {
    position: relative;
    box-shadow: 0 10px 30px rgba(255, 54, 33, 0.5);
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.icon-wrapper::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 2px solid #FF3621;
    opacity: 0;
    transition: all 0.5s ease;
}

.industry-card:hover .icon-wrapper::after {
    opacity: 0.5;
    inset: -8px;
}

/* Icon Animation */
.industry-card:hover .icon-wrapper svg {
    animation: iconPulse 0.6s ease;
}

@keyframes iconPulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Ensure content is above effects */
.industry-card > * {
    position: relative;
    z-index: 3;
}

/* Navigation Arrows */
.nav-arrow {
    transition: all 0.3s ease;
}

.nav-arrow:hover:not(:disabled) {
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(255, 54, 33, 0.3);
}

/* Responsive Styles */
@media (max-width: 1280px) {
    .industry-challenges-section h2 {
        font-size: 48px !important;
        line-height: 54px !important;
    }

    .industry-challenges-section > div > div > p {
        font-size: 24px !important;
        line-height: 36px !important;
    }

    .industry-card {
        width: 320px !important;
    }
}

@media (max-width: 1024px) {
    .industry-challenges-section {
        padding: 60px 0;
    }

    .industry-challenges-section h2 {
        font-size: 42px !important;
        line-height: 48px !important;
    }

    .industry-challenges-section > div > div > p {
        font-size: 22px !important;
        line-height: 33px !important;
    }

    .industry-card {
        width: 280px !important;
    }
}

@media (max-width: 768px) {
    .industry-challenges-section {
        padding: 40px 0;
    }

    .industry-challenges-section h2 {
        font-size: 36px !important;
        line-height: 42px !important;
        margin-bottom: 1.5rem !important;
    }

    .industry-challenges-section > div > div > p {
        font-size: 20px !important;
        line-height: 30px !important;
        margin-bottom: 2.5rem !important;
    }

    .industry-card {
        width: 250px !important;
        padding: 1.5rem !important;
    }

    .industry-card h3 {
        font-size: 20px !important;
        line-height: 26px !important;
    }

    .industry-card p {
        font-size: 16px !important;
        line-height: 24px !important;
    }

    .icon-wrapper {
        width: 60px !important;
        height: 60px !important;
    }

    .icon-wrapper svg {
        width: 28px !important;
        height: 28px !important;
    }
}

@media (max-width: 640px) {
    .industry-challenges-section {
        padding: 30px 0;
    }

    .industry-challenges-section h2 {
        font-size: 28px !important;
        line-height: 36px !important;
        margin-bottom: 1rem !important;
    }

    .industry-challenges-section > div > div > p {
        font-size: 18px !important;
        line-height: 27px !important;
        margin-bottom: 2rem !important;
    }

    .industry-card {
        width: 220px !important;
        padding: 1.25rem !important;
    }

    .industry-card h3 {
        font-size: 18px !important;
        line-height: 24px !important;
        margin-bottom: 0.5rem !important;
    }

    .industry-card p {
        font-size: 14px !important;
        line-height: 20px !important;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .industry-card,
    .animate-slide-up-title,
    .animate-slide-up-subtitle {
        animation: none;
        opacity: 1;
    }

    .industry-card:hover {
        transform: translateY(-2px);
    }

    .icon-wrapper {
        transition: none;
    }

    .cards-wrapper {
        transition: none;
    }
}
</style>