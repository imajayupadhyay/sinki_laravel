<template>
    <section class="our-approach-section bg-gray-50 py-20 lg:py-32 relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute top-10 right-10 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-10 left-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl animate-pulse-delayed"></div>

        <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
            <!-- Section Header -->
            <div class="text-center mb-16 lg:mb-20">
                <h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-tight lg:leading-[64px] mb-6 animate-slide-up">
                    Our Approach
                </h2>
                <p class="text-brand-dark text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[1200px] mx-auto animate-slide-up-delayed">
                    We follow a clear, outcome-driven methodology to help enterprises modernize their data infrastructure, accelerate Databricks implementation, and ensure long-term scalability.
                </p>
            </div>

            <!-- Flow Steps -->
            <div class="relative">
                <!-- Desktop Flow (lg and up) -->
                <div class="hidden lg:block">
                    <!-- Steps Container -->
                    <div class="flex items-start justify-between relative">
                        <!-- Connecting Lines with centered arrows -->
                        <div class="absolute top-[45px] left-0 w-full h-[2px] z-0 flex items-center justify-between">
                            <!-- Line segments between each step -->
                            <div class="flex-1 flex items-center relative">
                                <div class="w-full h-[2px] bg-brand-red"></div>
                                <!-- Centered Arrow 1 -->
                                <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-1 rounded-full">
                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" class="animate-fade-in" style="animation-delay: 1s">
                                        <path d="M12 2L18 7L12 12" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="flex-1 flex items-center relative ml-4">
                                <div class="w-full h-[2px] bg-brand-red"></div>
                                <!-- Centered Arrow 2 -->
                                <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-1 rounded-full">
                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" class="animate-fade-in" style="animation-delay: 1.2s">
                                        <path d="M12 2L18 7L12 12" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="flex-1 flex items-center relative ml-4">
                                <div class="w-full h-[2px] bg-brand-red"></div>
                                <!-- Centered Arrow 3 -->
                                <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-1 rounded-full">
                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" class="animate-fade-in" style="animation-delay: 1.4s">
                                        <path d="M12 2L18 7L12 12" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="flex-1 flex items-center relative ml-4">
                                <div class="w-full h-[2px] bg-brand-red"></div>
                                <!-- Centered Arrow 4 -->
                                <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 p-1 rounded-full">
                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" class="animate-fade-in" style="animation-delay: 1.6s">
                                        <path d="M12 2L18 7L12 12" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- Step Items -->
                        <div
                            v-for="(step, index) in approachSteps"
                            :key="index"
                            class="flex-1 relative z-10 max-w-[220px]"
                            :style="`animation-delay: ${0.3 + index * 0.2}s`"
                        >
                            <!-- Step Circle with Icon -->
                            <div class="flex justify-center mb-6">
                                <div class="step-circle w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-500 group cursor-pointer">
                                    <component
                                        :is="'div'"
                                        v-html="step.icon"
                                        class="w-12 h-12 text-white"
                                    />
                                </div>
                            </div>

                            <!-- Step Content -->
                            <div class="text-center space-y-4">
                                <h3 class="text-brand-dark text-[20px] font-semibold leading-[26px] tracking-[0.4px]">
                                    {{ step.number }}. {{ step.title }}
                                </h3>
                                <p class="text-brand-dark text-[16px] font-normal leading-[24px] tracking-[0.32px]">
                                    {{ step.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile/Tablet Flow (below lg) -->
                <div class="lg:hidden space-y-8">
                    <div
                        v-for="(step, index) in approachSteps"
                        :key="index"
                        class="flex items-start gap-6 animate-slide-up"
                        :style="`animation-delay: ${0.3 + index * 0.2}s`"
                    >
                        <!-- Step Circle with Icon -->
                        <div class="flex-shrink-0">
                            <div class="step-circle w-[70px] h-[70px] bg-brand-red rounded-full flex items-center justify-center shadow-lg">
                                <component
                                    :is="'div'"
                                    v-html="step.icon"
                                    class="w-8 h-8 text-white"
                                />
                            </div>
                        </div>

                        <!-- Step Content -->
                        <div class="flex-1 pt-2">
                            <h3 class="text-brand-dark text-[18px] font-semibold leading-[24px] tracking-[0.36px] mb-2">
                                {{ step.number }}. {{ step.title }}
                            </h3>
                            <p class="text-brand-dark text-[16px] font-normal leading-[24px] tracking-[0.32px]">
                                {{ step.description }}
                            </p>
                        </div>

                        <!-- Connecting line for mobile -->
                        <div v-if="index < approachSteps.length - 1" class="absolute left-[35px] mt-[70px] w-[2px] h-8 bg-brand-red"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';

// Approach steps data
const approachSteps = reactive([
    {
        number: "01",
        title: "Assess & Align",
        description: "We begin by understanding your current data landscape, key challenges, and business goals to create a clear modernization roadmap.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>`
    },
    {
        number: "02",
        title: "Architect & Plan",
        description: "We design a scalable, secure architecture that's tailored to your needs, from pipelines to governance and cost management.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>`
    },
    {
        number: "03",
        title: "Build & Migrate",
        description: "Our experts develop and deploy reliable data pipelines, workflows, and integrations through a phased, low-risk implementation approach.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
        </svg>`
    },
    {
        number: "04",
        title: "Optimize & Govern",
        description: "We enhance performance, improve cost efficiency, and implement governance frameworks to keep your systems compliant and scalable.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>`
    },
    {
        number: "05",
        title: "Operate & Improve",
        description: "Finally, we set up monitoring, alerts, and continuous improvement so your data ecosystem can evolve as your business grows.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>`
    }
]);
</script>

<style scoped>
/* Font Family - Instrument Sans */
.our-approach-section {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
    animation: slideUp 0.8s ease-out;
    animation-fill-mode: backwards;
}

.animate-slide-up-delayed {
    animation: slideUp 0.8s ease-out 0.4s;
    animation-fill-mode: backwards;
}

/* Fade In Animation */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.animate-fade-in {
    animation: fadeIn 0.6s ease-out;
    animation-fill-mode: backwards;
}


/* Step Circle Styles */
.step-circle {
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
}

.step-circle:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 20px 40px rgba(255, 54, 33, 0.3);
}

/* Step Items Animation */
.flex-1:nth-child(1) { animation: slideUp 0.8s ease-out 0.5s backwards; }
.flex-1:nth-child(2) { animation: slideUp 0.8s ease-out 0.7s backwards; }
.flex-1:nth-child(3) { animation: slideUp 0.8s ease-out 0.9s backwards; }
.flex-1:nth-child(4) { animation: slideUp 0.8s ease-out 1.1s backwards; }
.flex-1:nth-child(5) { animation: slideUp 0.8s ease-out 1.3s backwards; }

/* Responsive Styles */
@media (max-width: 1280px) {
    .our-approach-section h2 {
        font-size: 48px !important;
        line-height: 54px !important;
    }

    .our-approach-section > div > div > p {
        font-size: 24px !important;
        line-height: 36px !important;
    }
}

@media (max-width: 1024px) {
    .our-approach-section {
        padding: 60px 0;
    }

    .our-approach-section h2 {
        font-size: 42px !important;
        line-height: 48px !important;
    }

    .our-approach-section > div > div > p {
        font-size: 22px !important;
        line-height: 33px !important;
    }

    .container-custom {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}

@media (max-width: 768px) {
    .our-approach-section {
        padding: 40px 0;
    }

    .our-approach-section h2 {
        font-size: 36px !important;
        line-height: 42px !important;
        margin-bottom: 1.5rem !important;
    }

    .our-approach-section > div > div > p {
        font-size: 20px !important;
        line-height: 30px !important;
        margin-bottom: 2.5rem !important;
    }
}

@media (max-width: 640px) {
    .our-approach-section {
        padding: 30px 0;
    }

    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .our-approach-section h2 {
        font-size: 28px !important;
        line-height: 36px !important;
        margin-bottom: 1rem !important;
    }

    .our-approach-section > div > div > p {
        font-size: 18px !important;
        line-height: 27px !important;
        margin-bottom: 2rem !important;
    }

    .space-y-8 > * + * {
        margin-top: 1.5rem;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .animate-slide-up,
    .animate-slide-up-delayed,
    .animate-draw-line {
        animation: none;
        opacity: 1;
    }

    .step-circle:hover {
        transform: scale(1.05);
    }
}
</style>