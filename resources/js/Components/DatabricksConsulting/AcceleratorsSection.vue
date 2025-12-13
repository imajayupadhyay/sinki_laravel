<template>
    <section class="accelerators-section relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <!-- Background Image -->
        <div
            class="absolute inset-0 bg-cover bg-center bg-no-repeat"
            :style="{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'url(/images/aboutussecbanner.png)',
            }"
        ></div>

        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-black/60"></div>

        <!-- Animated Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <!-- Floating particles -->
            <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500/20 rounded-full animate-pulse"></div>
            <div class="absolute top-3/4 right-1/3 w-3 h-3 bg-red-500/15 rounded-full animate-ping"></div>
            <div class="absolute bottom-1/4 left-1/2 w-1 h-1 bg-yellow-400/25 rounded-full animate-bounce"></div>

            <!-- Gradient lines -->
            <div class="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-orange-500/30 via-red-500/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-orange-400/20 via-red-400/30 to-transparent"></div>

            <!-- Diagonal decorative lines -->
            <svg class="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#FF3621;stop-opacity:0.1" />
                        <stop offset="50%" style="stop-color:#FFA500;stop-opacity:0.05" />
                        <stop offset="100%" style="stop-color:#FF3621;stop-opacity:0.1" />
                    </linearGradient>
                </defs>
                <path d="M0,20 Q25,10 50,15 T100,10" stroke="url(#diagonalGradient)" stroke-width="0.5" fill="none"/>
                <path d="M0,80 Q25,70 50,75 T100,70" stroke="url(#diagonalGradient)" stroke-width="0.3" fill="none"/>
                <path d="M20,0 Q30,25 35,50 T40,100" stroke="url(#diagonalGradient)" stroke-width="0.4" fill="none"/>
            </svg>
        </div>

        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] relative z-10">
            <div class="max-w-[1720px] mx-auto">

                <!-- Section Header -->
                <div class="text-center mb-12 sm:mb-16 lg:mb-20">
                    <!-- Main Title -->
                    <h2 class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight font-instrument-sans mb-6">
                        Accelerate Your Databricks Journey With
                        <br>
                        Proven Accelerators
                    </h2>

                    <!-- Section Subtitle -->
                    <p class="text-gray-300 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed font-instrument-sans max-w-7xl mx-auto">
                        Our Databricks accelerators cut implementation time, reduce engineering effort, and deliver production-<br class="hidden lg:block">ready architectures faster with pre-built templates designed by certified experts.
                    </p>
                </div>

                <!-- Accelerators Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    <!-- Accelerator 1: Lakehouse Foundation Accelerator -->
                    <div class="accelerator-card group">
                        <div class="glass-container h-full p-6 sm:p-8 lg:p-10">
                            <!-- Red Icon -->
                            <div class="mb-6">
                                <div class="w-16 h-16 bg-[#FF3621] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Title -->
                            <h3 class="text-white text-xl sm:text-2xl font-semibold leading-tight font-instrument-sans mb-4 group-hover:text-[#FF3621] transition-colors duration-300">
                                Lakehouse Foundation Accelerator
                            </h3>

                            <!-- Description -->
                            <p class="text-gray-300 text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                                A ready-to-deploy lakehouse blueprint that delivers standardized ingestion, Delta storage patterns, governance layers, and monitoring to help enterprises establish a reliable analytics foundation faster.
                            </p>
                        </div>
                    </div>

                    <!-- Accelerator 2: Unity Catalog QuickStart Accelerator -->
                    <div class="accelerator-card group">
                        <div class="glass-container h-full p-6 sm:p-8 lg:p-10">
                            <!-- Red Icon -->
                            <div class="mb-6">
                                <div class="w-16 h-16 bg-[#FF3621] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Title -->
                            <h3 class="text-white text-xl sm:text-2xl font-semibold leading-tight font-instrument-sans mb-4 group-hover:text-[#FF3621] transition-colors duration-300">
                                Unity Catalog QuickStart Accelerator
                            </h3>

                            <!-- Description -->
                            <p class="text-gray-300 text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                                Prebuilt governance templates that streamline catalog setup, access policies, lineage configuration, and workspace onboarding so teams achieve secure, compliant data management rapidly.
                            </p>
                        </div>
                    </div>

                    <!-- Accelerator 3: Data Pipeline Accelerator -->
                    <div class="accelerator-card group">
                        <div class="glass-container h-full p-6 sm:p-8 lg:p-10">
                            <!-- Red Icon -->
                            <div class="mb-6">
                                <div class="w-16 h-16 bg-[#FF3621] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Title -->
                            <h3 class="text-white text-xl sm:text-2xl font-semibold leading-tight font-instrument-sans mb-4 group-hover:text-[#FF3621] transition-colors duration-300">
                                Data Pipeline Accelerator
                            </h3>

                            <!-- Description -->
                            <p class="text-gray-300 text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                                Reusable ingestion and ETL frameworks with Auto Loader and Delta best practices that reduce engineering effort and enable consistent, production-grade pipeline deployment across domains.
                            </p>
                        </div>
                    </div>

                    <!-- Accelerator 4: MLOps Deployment Accelerator -->
                    <div class="accelerator-card group">
                        <div class="glass-container h-full p-6 sm:p-8 lg:p-10">
                            <!-- Red Icon -->
                            <div class="mb-6">
                                <div class="w-16 h-16 bg-[#FF3621] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Title -->
                            <h3 class="text-white text-xl sm:text-2xl font-semibold leading-tight font-instrument-sans mb-4 group-hover:text-[#FF3621] transition-colors duration-300">
                                MLOps Deployment Accelerator
                            </h3>

                            <!-- Description -->
                            <p class="text-gray-300 text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                                A standardized CI/CD and MLflow-driven workflow enabling automated model training, validation, versioning, and deployment pipelines that accelerate time-to-production for ML initiatives.
                            </p>
                        </div>
                    </div>

                    <!-- Accelerator 5: Streaming Analytics Accelerator -->
                    <div class="accelerator-card group">
                        <div class="glass-container h-full p-6 sm:p-8 lg:p-10">
                            <!-- Red Icon -->
                            <div class="mb-6">
                                <div class="w-16 h-16 bg-[#FF3621] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Title -->
                            <h3 class="text-white text-xl sm:text-2xl font-semibold leading-tight font-instrument-sans mb-4 group-hover:text-[#FF3621] transition-colors duration-300">
                                Streaming Analytics Accelerator
                            </h3>

                            <!-- Description -->
                            <p class="text-gray-300 text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                                Preconfigured patterns for real-time ingestion, event processing, and low-latency dashboards that help teams deploy streaming analytics capabilities quickly and reliably at enterprise scale.
                            </p>
                        </div>
                    </div>

                    <!-- Accelerator 6: GenAI + RAG Accelerator -->
                    <div class="accelerator-card group">
                        <div class="glass-container h-full p-6 sm:p-8 lg:p-10">
                            <!-- Red Icon -->
                            <div class="mb-6">
                                <div class="w-16 h-16 bg-[#FF3621] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Title -->
                            <h3 class="text-white text-xl sm:text-2xl font-semibold leading-tight font-instrument-sans mb-4 group-hover:text-[#FF3621] transition-colors duration-300">
                                GenAI + RAG Accelerator
                            </h3>

                            <!-- Description -->
                            <p class="text-gray-300 text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                                Enterprise-ready retrieval-augmented generation workflows that combine governed content retrieval with foundation models to deliver context-aware, compliant AI assistants faster.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    accelerators: {
        type: Array,
        default: () => []
    },
    backgroundImage: {
        type: String,
        default: '/images/aboutussecbanner.png'
    }
});
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

/* Accelerators Section */
.accelerators-section {
    position: relative;
}

/* Accelerator Card */
.accelerator-card {
    transition: all 0.3s ease;
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
}

/* Staggered animations */
.accelerator-card:nth-child(1) {
    animation-delay: 0.1s;
}

.accelerator-card:nth-child(2) {
    animation-delay: 0.2s;
}

.accelerator-card:nth-child(3) {
    animation-delay: 0.3s;
}

.accelerator-card:nth-child(4) {
    animation-delay: 0.4s;
}

.accelerator-card:nth-child(5) {
    animation-delay: 0.5s;
}

.accelerator-card:nth-child(6) {
    animation-delay: 0.6s;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Glass Container */
.glass-container {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.glass-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    opacity: 0.6;
}

.glass-container:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 54, 33, 0.3);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Red Icon Hover Effects */
.accelerator-card:hover .bg-[#FF3621] {
    background-color: #FF3621;
    box-shadow: 0 8px 25px rgba(255, 54, 33, 0.4);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .accelerators-section {
        padding: 60px 0;
    }

    .accelerators-section h2 {
        font-size: 42px !important;
        line-height: 48px !important;
    }

    .accelerators-section > div > div > div > p {
        font-size: 20px !important;
        line-height: 30px !important;
    }

    .grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .glass-container {
        padding: 2rem !important;
    }
}

@media (max-width: 768px) {
    .accelerators-section {
        padding: 40px 0;
    }

    .accelerators-section h2 {
        font-size: 32px !important;
        line-height: 38px !important;
        margin-bottom: 1.5rem !important;
    }

    .accelerators-section > div > div > div > p {
        font-size: 18px !important;
        line-height: 27px !important;
        margin-bottom: 2rem !important;
    }

    .glass-container h3 {
        font-size: 18px !important;
        line-height: 24px !important;
    }

    .glass-container p {
        font-size: 14px !important;
        line-height: 21px !important;
    }

    .w-16.h-16 {
        width: 3rem !important;
        height: 3rem !important;
    }

    .w-16.h-16 svg {
        width: 1.5rem !important;
        height: 1.5rem !important;
    }
}

@media (max-width: 640px) {
    .accelerators-section {
        padding: 30px 0;
    }

    .accelerators-section h2 {
        font-size: 28px !important;
        line-height: 34px !important;
        margin-bottom: 1rem !important;
    }

    .accelerators-section > div > div > div > p {
        font-size: 16px !important;
        line-height: 24px !important;
        margin-bottom: 1.5rem !important;
    }

    .glass-container {
        padding: 1.5rem !important;
    }

    .glass-container h3 {
        font-size: 16px !important;
        line-height: 22px !important;
        margin-bottom: 0.75rem !important;
    }

    .glass-container p {
        font-size: 14px !important;
        line-height: 20px !important;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .accelerator-card {
        animation: none;
        opacity: 1;
    }

    .accelerator-card:hover .glass-container {
        transform: none;
    }

    .accelerator-card:hover .bg-[#FF3621] {
        transform: none;
    }
}
</style>