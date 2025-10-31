<template>
    <section class="key-benefits-section relative overflow-hidden py-20 lg:py-32">
        <!-- Dark Background -->
        <div class="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

        <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
            <!-- Section Header -->
            <div class="text-left mb-16 lg:mb-20">
                <h2 class="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-6 animate-slide-up">
                    Key Benefits
                </h2>
                <p class="text-white text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[1000px] animate-slide-up-delayed">
                    Experience the difference a well-engineered data foundation can make.
                </p>
            </div>

            <!-- Benefits Grid - 2x3 Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                <!-- Benefit 1: Faster Insights -->
                <div class="benefit-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer">
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
                                Faster Insights
                            </h3>
                            <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                Accelerate time from raw data to actionable dashboards and AI models.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Benefit 2: Robust Governance -->
                <div class="benefit-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer">
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
                                Robust Governance
                            </h3>
                            <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                Maintain secure, compliant data with lineage tracking, access controls, and Unity Catalog integration.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Benefit 3: Operational Resilience -->
                <div class="benefit-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer">
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
                                Operational Resilience
                            </h3>
                            <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                Ensure high availability with monitoring, alerts, and automated recovery for production pipelines.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Benefit 4: Scalable Data Architecture -->
                <div class="benefit-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer">
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
                                Scalable Data Architecture
                            </h3>
                            <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                Future-proof your data systems to grow with evolving business needs.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Benefit 5: Cost Efficiency -->
                <div class="benefit-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer">
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
                                Cost Efficiency
                            </h3>
                            <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                Optimize Databricks and cloud usage to reduce operational expenses.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Benefit 6: AI & ML Readiness -->
                <div class="benefit-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer">
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
                                AI & ML Readiness
                            </h3>
                            <p class="text-white text-[18px] font-normal leading-[27px] tracking-[0.36px] opacity-90">
                                Build engineered data foundations that support ML lifecycles and MLOps.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
// No props needed - this is a static section
</script>

<style scoped>
/* Font Family - Instrument Sans */
.key-benefits-section {
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

/* Enhanced Benefit Card Styles with Glass Effect */
.benefit-card {
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

/* Stagger animation delays */
.benefit-card:nth-child(1) {
    animation-delay: 0.6s;
}

.benefit-card:nth-child(2) {
    animation-delay: 0.7s;
}

.benefit-card:nth-child(3) {
    animation-delay: 0.8s;
}

.benefit-card:nth-child(4) {
    animation-delay: 0.9s;
}

.benefit-card:nth-child(5) {
    animation-delay: 1s;
}

.benefit-card:nth-child(6) {
    animation-delay: 1.1s;
}

/* Glass effect enhancement */
.benefit-card::before {
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

.benefit-card:hover::before {
    opacity: 1;
}

/* Card Hover Effects */
.benefit-card:hover {
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

.benefit-card:hover .icon-wrapper::after {
    opacity: 0.5;
    inset: -8px;
}

/* Icon Animation */
.benefit-card:hover .icon-wrapper svg {
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
.benefit-card > * {
    position: relative;
    z-index: 3;
}

/* Responsive Styles */
@media (max-width: 1280px) {
    .key-benefits-section h2 {
        font-size: 48px !important;
        line-height: 54px !important;
    }

    .key-benefits-section > div > div > p {
        font-size: 24px !important;
        line-height: 36px !important;
    }
}

@media (max-width: 1024px) {
    .key-benefits-section {
        padding: 60px 0;
    }

    .key-benefits-section h2 {
        font-size: 42px !important;
        line-height: 48px !important;
    }

    .key-benefits-section > div > div > p {
        font-size: 22px !important;
        line-height: 33px !important;
    }

    .container-custom {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}

@media (max-width: 768px) {
    .key-benefits-section {
        padding: 40px 0;
    }

    .key-benefits-section h2 {
        font-size: 36px !important;
        line-height: 42px !important;
        margin-bottom: 1.5rem !important;
    }

    .key-benefits-section > div > div > p {
        font-size: 20px !important;
        line-height: 30px !important;
        margin-bottom: 2.5rem !important;
    }

    .benefit-card {
        padding: 1.5rem !important;
    }

    .benefit-card h3 {
        font-size: 20px !important;
        line-height: 26px !important;
    }

    .benefit-card p {
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
    .key-benefits-section {
        padding: 30px 0;
    }

    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .key-benefits-section h2 {
        font-size: 28px !important;
        line-height: 36px !important;
        margin-bottom: 1rem !important;
    }

    .key-benefits-section > div > div > p {
        font-size: 18px !important;
        line-height: 27px !important;
        margin-bottom: 2rem !important;
    }

    .benefit-card {
        padding: 1.25rem !important;
    }

    .benefit-card h3 {
        font-size: 18px !important;
        line-height: 24px !important;
        margin-bottom: 0.5rem !important;
    }

    .benefit-card p {
        font-size: 14px !important;
        line-height: 20px !important;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .benefit-card,
    .animate-slide-up,
    .animate-slide-up-delayed {
        animation: none;
        opacity: 1;
    }

    .benefit-card:hover {
        transform: translateY(-2px);
    }

    .icon-wrapper {
        transition: none;
    }
}
</style>