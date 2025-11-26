<template>
    <section
        v-if="coreServicesSection && coreServicesSection.is_active"
        id="services"
        class="core-services-section relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32"
    >
        <!-- Background Image -->
        <div class="absolute inset-0 z-0" :style="{backgroundImage: 'url(/images/heroobannersinki.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}">
        </div>

        <div class="container-custom max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
            <!-- Section Label -->
            <div class="mb-6 sm:mb-8 text-center animate-fade-in">
                <span class="text-brand-dark text-sm sm:text-base md:text-lg font-medium uppercase tracking-[1.8px]">
                    {{ coreServicesSection.label || 'Core Services' }}
                </span>
            </div>

            <!-- Main Heading -->
            <h2 class="text-brand-dark font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[78px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[85.8px] mb-4 sm:mb-6 text-center max-w-full lg:max-w-[1281px] mx-auto animate-slide-up">
                {{ coreServicesSection.heading || 'Databricks Services We Deliver' }}
            </h2>

            <!-- Description -->
            <p class="text-brand-dark text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[45px] mb-8 sm:mb-12 md:mb-16 text-center max-w-full lg:max-w-[1094px] mx-auto animate-slide-up-delayed">
                {{ coreServicesSection.description || 'From data engineering and governance to AI and analytics, we make sure your Databricks investment delivers measurable impact.' }}
            </p>

            <!-- Service Cards Grid -->
            <div v-if="coreServicesSection.services && coreServicesSection.services.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">

                <!-- Dynamic Service Card -->
                <div
                    v-for="(service, index) in coreServicesSection.services"
                    :key="service.id"
                    @click="navigateToService(service.link_url)"
                    :class="[
                        'service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-4 sm:p-6 md:p-8 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]',
                        `service-card-${index + 1}`
                    ]"
                >
                    <!-- Icon and Arrow -->
                    <div class="flex items-start justify-between mb-4 sm:mb-6">
                        <div class="icon-wrapper w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0">
                            <svg class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" :d="service.icon_svg"/>
                            </svg>
                        </div>
                        <div v-if="service.link_url" class="arrow-icon opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/>
                            </svg>
                        </div>
                    </div>

                    <!-- Title -->
                    <h3 class="text-brand-dark text-xl sm:text-2xl md:text-[22px] lg:text-[24px] font-semibold leading-tight sm:leading-tight md:leading-[28px] lg:leading-[30px] mb-4 sm:mb-6 group-hover:text-brand-red transition-colors duration-300">
                        {{ service.title }}
                    </h3>

                    <!-- Description (if available) -->
                    <p v-if="service.description" class="text-brand-dark text-sm sm:text-base mb-4 opacity-80 line-clamp-3">
                        {{ service.description }}
                    </p>

                    <!-- Tags -->
                    <div v-if="service.tags && service.tags.length" class="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3">
                        <span
                            v-for="tag in service.tags"
                            :key="tag"
                            class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]"
                        >
                            {{ tag }}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { router } from '@inertiajs/vue3'

// Define props
const props = defineProps({
    coreServicesSection: {
        type: Object,
        default: () => null
    }
})

const navigateToService = (url) => {
    if (url) {
        router.visit(url)
    }
}
</script>

<style scoped>
/* Core Services Section Styles */
.core-services-section {
    position: relative;
    background: transparent;
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

.border-brand-red {
    border-color: #FF3621;
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.animate-fade-in {
    animation: fadeIn 0.8s ease-out;
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
}

.service-card-1 { animation-delay: 0.6s; }
.service-card-2 { animation-delay: 0.7s; }
.service-card-3 { animation-delay: 0.8s; }
.service-card-4 { animation-delay: 0.9s; }
.service-card-5 { animation-delay: 1.0s; }
.service-card-6 { animation-delay: 1.1s; }

/* Card Hover Effects */
.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 25px;
    background: linear-gradient(135deg, rgba(255, 54, 33, 0.05) 0%, rgba(255, 107, 90, 0.02) 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
}

.service-card:hover::before {
    opacity: 1;
}

/* Icon Wrapper */
.icon-wrapper {
    position: relative;
    box-shadow: 0 10px 30px rgba(255, 54, 33, 0.3);
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

.service-card:hover .icon-wrapper::after {
    opacity: 0.3;
    inset: -8px;
}

/* Tags */
.tag {
    display: inline-block;
    padding: 6px 16px;
    background: transparent;
    border: 1px solid rgba(18, 18, 18, 0.25);
    border-radius: 40px;
    color: #121212;
    line-height: 1.4;
    letter-spacing: 0.3px;
    transition: all 0.3s ease;
    font-weight: 500;
}

.service-card:hover .tag {
    background: rgba(255, 54, 33, 0.1);
    border-color: #FF3621;
}

/* Arrow Icon */
.arrow-icon {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
}

/* Extra responsive adjustments for very small screens */
@media (max-width: 374px) {
    .service-card {
        min-height: 380px !important;
        padding: 1rem !important;
    }
    
    .icon-wrapper {
        width: 50px !important;
        height: 50px !important;
    }
    
    .icon-wrapper svg {
        width: 28px !important;
        height: 28px !important;
    }
    
    .service-card h3 {
        font-size: 18px !important;
        line-height: 24px !important;
    }
    
    .tag {
        font-size: 11px !important;
        padding: 3px 10px !important;
    }
}
</style>