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

            <!-- Two Column Layout -->
            <div class="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">

                <!-- Left Side - Fixed Title and Description -->
                <div class="lg:sticky lg:top-24 text-left lg:h-fit lg:flex lg:flex-col lg:justify-start">
                    <!-- Main Title -->
                    <h2 class="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-8 animate-slide-up-title">
                        Databricks Professional Services We Offer
                    </h2>

                    <!-- Description -->
                    <p class="text-white text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[600px] animate-slide-up-subtitle">
                        From migration to governance, our Databricks consulting expertise empowers enterprises to build scalable, compliant, and insight-ready ecosystems that accelerate value realization.
                    </p>
                </div>

                <!-- Right Side - Scrollable Services -->
                <div class="space-y-6">

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
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
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

                    <!-- Service 5: MLOps & Model Operations -->
                    <div class="service-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer fade-up-5">
                        <div class="flex items-start gap-6">
                            <!-- Icon -->
                            <div class="flex-shrink-0">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    MLOps & Model Operations
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    Our Databricks consulting experts establish scalable MLOps pipelines with CI/CD, automated validation, and monitoring, ensuring consistent, production-grade model performance across business functions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Service 6: Real-time Analytics & Streaming -->
                    <div class="service-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer fade-up-6">
                        <div class="flex items-start gap-6">
                            <!-- Icon -->
                            <div class="flex-shrink-0">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    Real-time Analytics & Streaming
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    We deliver real-time analytics solutions using Databricks streaming to provide low-latency insights, operational visibility, and immediate decision support across enterprise workloads.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Service 7: Databricks SQL & BI Optimization -->
                    <div class="service-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer fade-up-7">
                        <div class="flex items-start gap-6">
                            <!-- Icon -->
                            <div class="flex-shrink-0">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    Databricks SQL & BI Optimization
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    Our Databricks consultants optimize SQL workloads, improve query performance, and strengthen BI delivery to enable faster dashboards, reduced costs, and consistent enterprise-wide insights.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Service 8: GenAI & LLMops -->
                    <div class="service-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer fade-up-8">
                        <div class="flex items-start gap-6">
                            <!-- Icon -->
                            <div class="flex-shrink-0">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    GenAI & LLMops
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    We build secure generative AI solutions and LLMops workflows that fine-tune models, automate retraining, and deliver domain-specific intelligence aligned with enterprise compliance.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Service 9: Cost Optimization & Managed Services -->
                    <div class="service-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer fade-up-9">
                        <div class="flex items-start gap-6">
                            <!-- Icon -->
                            <div class="flex-shrink-0">
                                <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="flex-1">
                                <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    Cost Optimization & Managed Services
                                </h3>
                                <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                    Our Databricks Managed Services reduce compute waste, optimize cluster usage, automate platform maintenance, and ensure continuous performance improvement through proactive monitoring and expert support.
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

.fade-up-5 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 1.6s;
    animation-fill-mode: both;
}

.fade-up-6 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 1.8s;
    animation-fill-mode: both;
}

.fade-up-7 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 2.0s;
    animation-fill-mode: both;
}

.fade-up-8 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 2.2s;
    animation-fill-mode: both;
}

.fade-up-9 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 2.4s;
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

/* Sticky Layout Implementation */
@media (min-width: 1024px) {
    .professional-services-section {
        contain: none;
        transform: none;
        will-change: auto;
        overflow: visible;
        position: relative;
    }

    .professional-services-section .container-custom {
        overflow: visible;
        position: relative;
    }

    /* Ensure parent container doesn't interfere with sticky */
    .professional-services-section > * {
        overflow: visible;
    }

    /* Make sure sticky positioning works */
    .professional-services-section [class*="lg:sticky"] {
        position: sticky !important;
        top: 6rem !important;
        z-index: 10;
        height: fit-content !important;
        transform: none !important;
        will-change: auto !important;
    }

    /* Ensure proper height for scrolling */
    .professional-services-section .space-y-6 {
        min-height: 200vh;
        padding-top: 2rem;
        padding-bottom: 10rem;
    }

    /* Override any animation transforms that might break sticky */
    .professional-services-section [class*="lg:sticky"] .animate-slide-up-title,
    .professional-services-section [class*="lg:sticky"] .animate-slide-up-subtitle {
        transform: none !important;
        animation: none !important;
    }
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

    .professional-services-section div[class*="lg:grid"] {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .professional-services-section div[class*="lg:sticky"] {
        position: static !important;
        height: auto !important;
        display: block !important;
        margin-bottom: 2rem;
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
    .fade-up-4,
    .fade-up-5,
    .fade-up-6,
    .fade-up-7,
    .fade-up-8,
    .fade-up-9 {
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