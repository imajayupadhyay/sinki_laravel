<template>
    <section class="what-sets-us-apart-section relative overflow-hidden py-20 lg:py-32">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
            <img 
                src="/images/heroobannersinki.png" 
                alt="Background" 
                class="w-full h-full object-cover"
                @error="handleImageError"
            >
            <div class="absolute inset-0"></div>
        </div>

        <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
            <!-- Section Label -->
            <div class="mb-8 text-center animate-fade-in">
                <span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]">
                    What Sets Us Apart
                </span>
            </div>

            <!-- Main Heading -->
            <h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 text-center max-w-[1210px] mx-auto animate-slide-up">
                Your Databricks Partner, Every Step of the Way
            </h2>

            <!-- Description -->
            <p class="text-brand-dark text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] mb-16 text-center max-w-[1210px] mx-auto animate-slide-up-delayed">
                We don't just implement Databricks. We simplify it, tailor it, and make it deliver real business outcomes.
            </p>

            <!-- Features Cards Grid - 4 Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <!-- Feature Card Component -->
                <div 
                    v-for="(feature, index) in features" 
                    :key="index"
                    class="feature-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-10 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                >
                    <!-- Icon -->
                    <div class="mb-8 flex justify-center">
                        <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" :d="feature.iconPath"/>
                            </svg>
                        </div>
                    </div>
                    
                    <!-- Content -->
                    <div class="text-center">
                        <h3 class="text-brand-dark text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                            {{ feature.title }}
                        </h3>
                        <p class="text-brand-dark text-[18px] font-normal leading-[27px] tracking-[0.36px]">
                            {{ feature.description }}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';

// Features data
const features = reactive([
    {
        title: "We Simplify Databricks",
        description: "Tailored solutions aligned to your business objectives and operating model",
        iconPath: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    },
    {
        title: "We Accelerate Adoption",
        description: "Rapid prioritization and delivery of high-impact use cases to demonstrate value early.",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
        title: "We Engineer for Scale",
        description: "	Architectures designed for performance, governance, and long-term sustainability.",
        iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
        title: "We Partner Strategically",
        description: "Transparent, collaborative guidance that keeps projects aligned to business goals.",
        iconPath: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
    }
]);

// Handle image loading errors
const handleImageError = (event) => {
    console.error('Failed to load background image:', event.target.src);
};
</script>

<style scoped>
/* Animation keyframes */
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
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Animation classes */
.animate-fade-in {
    animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
    animation: slideUp 0.8s ease-out 0.2s both;
}

.animate-slide-up-delayed {
    animation: slideUp 0.8s ease-out 0.4s both;
}

/* Section Styles */
.what-sets-us-apart-section {
    position: relative;
    min-height: 100vh;
}

/* Feature Cards */
.feature-card {
    position: relative;
    overflow: hidden;
}

/* Ripple effect on hover */
.feature-card::before {
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

.feature-card:hover::before {
    width: 400px;
    height: 400px;
}

/* Glow effect on hover */
.feature-card::after {
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

.feature-card:hover::after {
    opacity: 1;
}

/* Ensure content is above effects */
.feature-card > * {
    position: relative;
    z-index: 1;
}

/* Icon hover effects */
.icon-wrapper {
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Responsive Styles */
@media (max-width: 1536px) {
    .container-custom {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
}

@media (max-width: 1280px) {
    .container-custom {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    
    h2 {
        font-size: 64px !important;
        line-height: 70px !important;
    }
    
    p {
        font-size: 24px !important;
        line-height: 36px !important;
    }

    .feature-card h3 {
        font-size: 22px !important;
        line-height: 28px !important;
    }

    .feature-card p {
        font-size: 16px !important;
        line-height: 24px !important;
    }
}

@media (max-width: 1024px) {
    .what-sets-us-apart-section {
        min-height: auto;
        padding: 60px 0;
    }
    
    .container-custom {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    
    h2 {
        font-size: 52px !important;
        line-height: 58px !important;
    }
    
    p {
        font-size: 22px !important;
        line-height: 33px !important;
    }

    .feature-card {
        min-height: auto;
        padding: 2rem;
    }

    .icon-wrapper {
        width: 80px !important;
        height: 80px !important;
    }

    .icon-wrapper svg {
        width: 2.5rem !important;
        height: 2.5rem !important;
    }
}

@media (max-width: 768px) {
    .what-sets-us-apart-section {
        padding: 40px 0;
    }

    h2 {
        font-size: 36px !important;
        line-height: 44px !important;
        margin-bottom: 1.5rem !important;
    }

    p {
        font-size: 18px !important;
        line-height: 27px !important;
        margin-bottom: 2.5rem !important;
    }

    .feature-card {
        padding: 1.5rem;
    }

    .feature-card h3 {
        font-size: 20px !important;
        line-height: 26px !important;
    }

    .feature-card p {
        font-size: 15px !important;
        line-height: 22px !important;
    }

    .icon-wrapper {
        width: 70px !important;
        height: 70px !important;
        margin-bottom: 1.5rem !important;
    }

    .icon-wrapper svg {
        width: 2rem !important;
        height: 2rem !important;
    }
}

@media (max-width: 640px) {
    .what-sets-us-apart-section {
        padding: 30px 0;
    }

    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    h2 {
        font-size: 28px !important;
        line-height: 36px !important;
        margin-bottom: 1rem !important;
    }

    p {
        font-size: 16px !important;
        line-height: 24px !important;
        margin-bottom: 2rem !important;
    }

    .grid {
        gap: 1.5rem;
    }

    .feature-card {
        padding: 1.25rem;
    }

    .feature-card h3 {
        font-size: 18px !important;
        line-height: 24px !important;
        margin-bottom: 0.5rem !important;
    }

    .feature-card p {
        font-size: 14px !important;
        line-height: 20px !important;
    }

    .icon-wrapper {
        width: 60px !important;
        height: 60px !important;
        margin-bottom: 1rem !important;
    }

    .icon-wrapper svg {
        width: 1.75rem !important;
        height: 1.75rem !important;
    }
}

/* Hover state disabled on touch devices */
@media (hover: none) {
    .feature-card:hover {
        transform: none;
        box-shadow: none;
    }

    .feature-card:active {
        transform: translateY(-4px);
    }
}
</style>