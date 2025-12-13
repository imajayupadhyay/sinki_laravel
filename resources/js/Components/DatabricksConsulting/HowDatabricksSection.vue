<template>
    <section
        class="how-databricks-section relative overflow-hidden py-20 lg:py-32"
        :style="{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'url(/images/aboutussecbanner.png)',
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
                    How Databricks Simplifies Enterprise Analytics
                </h2>

                <!-- Subtitle -->
                <p class="text-white text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[1000px] mx-auto animate-slide-up-subtitle">
                    Powering unified, governed, and real-time enterprise insights.
                </p>
            </div>

            <!-- Features Grid - 2x3 Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">

                <!-- Feature 1: Scalable Data Pipelines -->
                <div class="feature-item group p-8 lg:p-10 transition-all duration-300 fade-up-1 border-b border-white/20">
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
                                Scalable Data Pipelines
                            </h3>
                            <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                We design pipelines that ingest, transform, and deliver data reliably at scale, enabling enterprises to achieve faster insights and greater operational agility, led by Certified Databricks Consultants.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Feature 2: Optimized Data Lakes -->
                <div class="feature-item group p-8 lg:p-10 transition-all duration-300 fade-up-2 border-b border-white/20">
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
                                Optimized Data Lakes
                            </h3>
                            <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                We build efficient, high-performance data lakes that reduce processing delays, improve accessibility, and give teams a faster, more reliable foundation for advanced analytics.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Feature 3: Unified Analytics Workspace -->
                <div class="feature-item group p-8 lg:p-10 transition-all duration-300 fade-up-3 border-b border-white/20">
                    <div class="flex items-start gap-6">
                        <!-- Icon -->
                        <div class="flex-shrink-0">
                            <div class="icon-wrapper w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                                </svg>
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="flex-1">
                            <h3 class="text-white text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                Unified Analytics Workspace
                            </h3>
                            <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                We unify notebooks, dashboards, workflows, and collaboration tools into one environment, simplifying analytics execution and empowering teams to deliver insights without platform friction.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Feature 4: Automated Machine Learning -->
                <div class="feature-item group p-8 lg:p-10 transition-all duration-300 fade-up-4 border-b border-white/20">
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
                                Automated Machine Learning
                            </h3>
                            <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                We implement automated training, tuning, and validation workflows that reduce manual effort, accelerate model delivery, and improve prediction reliability across enterprise use cases.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Feature 5: Real-Time Intelligence Delivery -->
                <div class="feature-item group p-8 lg:p-10 transition-all duration-300 fade-up-5 lg:border-b-0 border-b border-white/20">
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
                                Real-Time Intelligence Delivery
                            </h3>
                            <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                We enable real-time data processing that surfaces anomalies, patterns, and performance signals instantly, helping leaders respond faster and maintain operational confidence.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Feature 6: Built-In Governance Control -->
                <div class="feature-item group p-8 lg:p-10 transition-all duration-300 fade-up-6 lg:border-b-0 border-b border-white/20">
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
                                Built-In Governance Control
                            </h3>
                            <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                We implement governance foundations that ensure secure access, lineage visibility, and policy compliance, enabling enterprises to maintain complete oversight across all analytics workflows and data assets.
                            </p>
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

/* Font Family - Instrument Sans */
.how-databricks-section {
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

/* Feature Item Styles - Clean without containers */
.feature-item {
    position: relative;
    transition: all 0.3s ease;
    animation: slideUp 0.8s ease-out;
    animation-fill-mode: backwards;
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

/* Simple hover effects */
.feature-item:hover {
    transform: translateY(-2px);
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

.feature-card:hover .icon-wrapper::after {
    opacity: 0.5;
    inset: -8px;
}

/* Icon Animation */
.feature-card:hover .icon-wrapper svg {
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
.feature-item > * {
    position: relative;
    z-index: 3;
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .how-databricks-section {
        padding: 60px 0;
    }

    .how-databricks-section h2 {
        font-size: 42px !important;
        line-height: 48px !important;
    }

    .how-databricks-section > div > div > p {
        font-size: 22px !important;
        line-height: 33px !important;
    }

    .grid {
        grid-template-columns: 1fr;
        gap: 0;
    }

    /* Maintain border-bottom on mobile */
    .feature-item {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
    }
}

@media (max-width: 768px) {
    .how-databricks-section {
        padding: 40px 0;
    }

    .how-databricks-section h2 {
        font-size: 36px !important;
        line-height: 42px !important;
        margin-bottom: 1.5rem !important;
    }

    .how-databricks-section > div > div > p {
        font-size: 20px !important;
        line-height: 30px !important;
        margin-bottom: 2.5rem !important;
    }

    .feature-item {
        padding: 1.5rem !important;
    }

    .feature-item h3 {
        font-size: 20px !important;
        line-height: 26px !important;
    }

    .feature-item p {
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
    .how-databricks-section {
        padding: 30px 0;
    }

    .how-databricks-section h2 {
        font-size: 28px !important;
        line-height: 36px !important;
        margin-bottom: 1rem !important;
    }

    .how-databricks-section > div > div > p {
        font-size: 18px !important;
        line-height: 27px !important;
        margin-bottom: 2rem !important;
    }

    .feature-item {
        padding: 1.25rem !important;
    }

    .feature-item h3 {
        font-size: 18px !important;
        line-height: 24px !important;
        margin-bottom: 0.5rem !important;
    }

    .feature-item p {
        font-size: 14px !important;
        line-height: 20px !important;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .feature-item,
    .animate-slide-up-title,
    .animate-slide-up-subtitle,
    .fade-up-1,
    .fade-up-2,
    .fade-up-3,
    .fade-up-4,
    .fade-up-5,
    .fade-up-6 {
        animation: none;
        opacity: 1;
    }

    .feature-item:hover {
        transform: none;
    }

    .icon-wrapper {
        transition: none;
    }
}
</style>