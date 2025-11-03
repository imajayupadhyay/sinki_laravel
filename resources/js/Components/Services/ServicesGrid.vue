<template>
    <section class="services-grid-section relative overflow-hidden py-20 lg:py-32">

        <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
            <!-- Main Heading -->
            <h2 class="text-brand-dark font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-6 text-center max-w-[1210px] mx-auto animate-slide-up">
                {{ title }}
            </h2>

            <!-- Description -->
            <p v-if="description" class="text-brand-dark text-base sm:text-lg md:text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] mb-16 text-center max-w-[1210px] mx-auto animate-slide-up-delayed">
                {{ description }}
            </p>

            <!-- Service Cards Grid - 6 Cards (3x2) -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    v-for="(service, index) in services"
                    :key="index"
                    class="service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-10 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                >
                    <!-- Icon -->
                    <div class="mb-8 flex justify-center">
                        <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                            <!-- Dynamic Icon -->
                            <component
                                :is="'div'"
                                v-html="service.icon"
                                class="w-12 h-12 text-white"
                            />
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="text-center">
                        <h3 class="text-brand-dark text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                            {{ service.title }}
                        </h3>
                        <p class="text-brand-dark text-[18px] font-normal leading-[27px] tracking-[0.36px]">
                            {{ service.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

// Props for customization
const props = defineProps({
    sectionLabel: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    services: {
        type: Array,
        required: true,
        default: () => []
    },
    backgroundColor: {
        type: String,
        default: 'bg-white'
    }
});
</script>

<style scoped>
/* Font Family - Instrument Sans */
.services-grid-section {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Services Grid Section Styles */
.services-grid-section {
    position: relative;
    background: linear-gradient(180deg, #f5f5dc 0%, #fffef8 100%);
}

/* Container Custom */
.container-custom {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
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

/* Fade In Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fadeIn 0.8s ease-out;
}

/* Slide Up Animations */
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

.animate-slide-up {
    animation: slideUp 0.8s ease-out 0.2s;
    animation-fill-mode: backwards;
}

.animate-slide-up-delayed {
    animation: slideUp 0.8s ease-out 0.4s;
    animation-fill-mode: backwards;
}

/* Service Card Styles */
.service-card {
    position: relative;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation: slideUp 0.8s ease-out;
    animation-fill-mode: backwards;
    overflow: hidden;
}

/* Ripple effect on hover */
.service-card::before {
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
    z-index: 0;
}

.service-card:hover::before {
    width: 400px;
    height: 400px;
}

/* Glow effect on hover */
.service-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 25px;
    opacity: 0;
    transition: opacity 0.5s ease;
    background: radial-gradient(
        circle at center,
        rgba(255, 54, 33, 0.1) 0%,
        transparent 70%
    );
    z-index: 0;
    pointer-events: none;
}

.service-card:hover::after {
    opacity: 1;
}

/* Ensure content is above effects */
.service-card > * {
    position: relative;
    z-index: 1;
}

/* Card Hover Effects */
.service-card:hover {
    transform: translateY(-8px);
}

/* Icon Wrapper Effects */
.icon-wrapper {
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Responsive Styles */
@media (min-width: 1536px) {
    .container-custom {
        padding-left: 3rem;
        padding-right: 3rem;
    }
}


/* New breakpoint for 1200px range */
@media (max-width: 1200px) {
    .icon-wrapper {
        width: 75px !important;
        height: 75px !important;
    }

    .icon-wrapper svg {
        width: 38px !important;
        height: 38px !important;
    }

    .service-card h3 {
        font-size: 20px !important;
        line-height: 30px !important;
    }

    .service-card p {
        font-size: 18px !important;
        line-height: 27px !important;
    }
}

@media (max-width: 1024px) {
    .services-grid-section {
        padding: 60px 0;
    }
}

@media (max-width: 768px) {

    .icon-wrapper {
        width: 70px !important;
        height: 70px !important;
    }

    .icon-wrapper svg {
        width: 36px !important;
        height: 36px !important;
    }

    .service-card h3 {
        font-size: 22px !important;
    }

    .service-card p {
        font-size: 18px !important;
        line-height: 27px !important;
    }
}

@media (max-width: 640px) {
    .services-grid-section {
        padding: 40px 0;
    }

    .service-card {
        padding: 1.5rem !important;
    }
}

@media (max-width: 480px) {
    .services-grid-section {
        padding: 30px 0;
    }

    .service-card {
        padding: 1.25rem !important;
    }

    .icon-wrapper {
        width: 60px !important;
        height: 60px !important;
    }

    .icon-wrapper svg {
        width: 32px !important;
        height: 32px !important;
    }

    .service-card h3 {
        font-size: 18px !important;
        line-height: 26px !important;
    }

    .service-card p {
        font-size: 16px !important;
        line-height: 24px !important;
    }
}

/* Hover state disabled on touch devices */
@media (hover: none) {
    .service-card:hover {
        transform: none;
        box-shadow: none;
    }

    .service-card:active {
        transform: translateY(-4px);
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .service-card,
    .animate-fade-in,
    .animate-slide-up,
    .animate-slide-up-delayed {
        animation: none;
        opacity: 1;
    }

    .service-card:hover {
        transform: none;
    }

    .icon-wrapper {
        transition: none;
    }
}
</style>