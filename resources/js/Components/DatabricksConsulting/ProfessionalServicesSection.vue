<template>
    <section
        class="professional-services-section relative overflow-hidden py-20 lg:py-32"
        :style="{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'url(/images/aboutussecbanner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }"
    >
        <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10">

            <!-- Left Content Section -->
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

                <!-- Left Side - Title and Description (40%) -->
                <div class="text-left lg:col-span-2 lg:sticky lg:top-24 lg:self-start">
                    <!-- Main Title -->
                    <h2 class="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-8 animate-slide-up-title">
                        Databricks Professional Services We Offer
                    </h2>

                    <!-- Description -->
                    <p class="text-white text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[600px] animate-slide-up-subtitle">
                        Sinki.ai enables enterprises to unlock Databricks' full potential by aligning architecture, automation, and analytics for secure, insight-driven data ecosystems.
                    </p>
                </div>

                <!-- Right Side - Services Grid (60%) -->
                <div class="space-y-6 lg:col-span-3">

                    <!-- Service 1: Databricks Migration & Modernization -->
                    <div class="service-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer fade-up-1">
                        <div class="flex items-start gap-6">
                            <!-- Icon -->
                            <div class="flex-shrink-0">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    Databricks Migration & Modernization
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    Our certified Databricks consultants migrate legacy systems to Lakehouse architecture using structured, low-risk approaches that improve performance, unify data, and accelerate enterprise-wide analytics.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Service 2: Lakehouse Architecture Design -->
                    <div class="service-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer fade-up-2">
                        <div class="flex items-start gap-6">
                            <!-- Icon -->
                            <div class="flex-shrink-0">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    Lakehouse Architecture Design
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    We architect scalable Databricks Lakehouse environments that unify storage, governance, and compute to deliver faster insights, lower costs, and a modern analytics foundation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Service 3: Data Engineering & ETL Pipelines -->
                    <div class="service-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer fade-up-3">
                        <div class="flex items-start gap-6">
                            <!-- Icon -->
                            <div class="flex-shrink-0">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    Data Engineering & ETL Pipelines
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    Our Databricks consultants build automated ETL pipelines that ingest, clean, and transform enterprise data for reliable reporting, ML feature generation, and downstream intelligence.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Service 4: Unity Catalog & Data Governance -->
                    <div class="service-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer fade-up-4">
                        <div class="flex items-start gap-6">
                            <!-- Icon -->
                            <div class="flex-shrink-0">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    Unity Catalog & Data Governance
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    We implement Unity Catalog with centralized governance, lineage, and access controls, enabling secure data usage, regulatory compliance, and trusted analytics across your organization.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    backgroundImage: {
        type: String,
        default: '/images/aboutussecbanner.png'
    }
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

.fade-up-1 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 0.8s;
    animation-fill-mode: both;
}

.fade-up-2 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 1.0s;
    animation-fill-mode: both;
}

.fade-up-3 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 1.2s;
    animation-fill-mode: both;
}

.fade-up-4 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 1.4s;
    animation-fill-mode: both;
}

/* Font Family - Instrument Sans */
.professional-services-section {
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

/* Enhanced Service Card Styles with Glass Effect */
.service-card {
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

/* Glass effect enhancement */
.service-card::before {
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

.service-card:hover::before {
    opacity: 1;
}

/* Card Hover Effects */
.service-card:hover {
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

.service-card:hover .icon-wrapper::after {
    opacity: 0.5;
    inset: -8px;
}

/* Icon Animation */
.service-card:hover .icon-wrapper svg {
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

/* Ensure content is above effects */
.service-card > * {
    position: relative;
    z-index: 3;
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .professional-services-section {
        padding: 60px 0;
    }

    .professional-services-section h2 {
        font-size: 42px !important;
        line-height: 48px !important;
    }

    .professional-services-section > div > div > div > p {
        font-size: 22px !important;
        line-height: 33px !important;
    }

    .grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
}

@media (max-width: 768px) {
    .professional-services-section {
        padding: 40px 0;
    }

    .professional-services-section h2 {
        font-size: 36px !important;
        line-height: 42px !important;
        margin-bottom: 1.5rem !important;
    }

    .professional-services-section > div > div > div > p {
        font-size: 20px !important;
        line-height: 30px !important;
        margin-bottom: 2.5rem !important;
    }

    .service-card {
        padding: 1.5rem !important;
    }

    .service-card h3 {
        font-size: 20px !important;
        line-height: 26px !important;
    }

    .service-card p {
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

    .flex {
        gap: 1rem !important;
    }
}

@media (max-width: 640px) {
    .professional-services-section {
        padding: 30px 0;
    }

    .professional-services-section h2 {
        font-size: 28px !important;
        line-height: 36px !important;
        margin-bottom: 1rem !important;
    }

    .professional-services-section > div > div > div > p {
        font-size: 18px !important;
        line-height: 27px !important;
        margin-bottom: 2rem !important;
    }

    .service-card {
        padding: 1.25rem !important;
    }

    .service-card h3 {
        font-size: 18px !important;
        line-height: 24px !important;
        margin-bottom: 0.5rem !important;
    }

    .service-card p {
        font-size: 14px !important;
        line-height: 20px !important;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .service-card,
    .animate-slide-up-title,
    .animate-slide-up-subtitle,
    .fade-up-1,
    .fade-up-2,
    .fade-up-3,
    .fade-up-4 {
        animation: none;
        opacity: 1;
    }

    .service-card:hover {
        transform: translateY(-2px);
    }

    .icon-wrapper {
        transition: none;
    }
}
</style>