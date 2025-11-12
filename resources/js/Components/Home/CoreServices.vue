<template>
    <section id="services" class="core-services-section relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0" :style="{backgroundImage: 'url(/images/heroobannersinki.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}">
        </div>

        <div class="container-custom max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
            <!-- Section Label -->
            <div class="mb-6 sm:mb-8 text-center animate-fade-in">
                <span class="text-brand-dark text-sm sm:text-base md:text-lg font-medium uppercase tracking-[1.8px]">
                    Core Services
                </span>
            </div>

            <!-- Main Heading -->
            <h2 class="text-brand-dark font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[78px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[85.8px] mb-4 sm:mb-6 text-center max-w-full lg:max-w-[1281px] mx-auto animate-slide-up">
                Databricks Services We Deliver
            </h2>

            <!-- Description -->
            <p class="text-brand-dark text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[45px] mb-8 sm:mb-12 md:mb-16 text-center max-w-full lg:max-w-[1094px] mx-auto animate-slide-up-delayed">
                From data engineering and governance to AI and analytics, we make sure your Databricks investment delivers measurable impact.
            </p>

            <!-- Service Cards Grid - 4 Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                
                <!-- Card 1: Data Engineering & Modernization -->
                <div @click="navigateToService('/services/data-engineering')" class="service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-4 sm:p-6 md:p-8 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
                    <!-- Icon and Arrow -->
                    <div class="flex items-start justify-between mb-4 sm:mb-6">
                        <div class="icon-wrapper w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0">
                            <svg class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                            </svg>
                        </div>
                        <div class="arrow-icon opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/>
                            </svg>
                        </div>
                    </div>
                    
                    <!-- Title -->
                    <h3 class="text-brand-dark text-xl sm:text-2xl md:text-[22px] lg:text-[24px] font-semibold leading-tight sm:leading-tight md:leading-[28px] lg:leading-[30px] mb-4 sm:mb-6 group-hover:text-brand-red transition-colors duration-300">
                        Data Engineering & Modernization
                    </h3>
                    
                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3">
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Data Pipelines</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Data Orchestration</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Data Integration</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Data Migration</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Data Modernization</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Data Lakehouse Consulting</span>
                    </div>
                </div>

                <!-- Card 2: Data Management & Governance -->
                <div @click="navigateToService('/services/data-management')" class="service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-4 sm:p-6 md:p-8 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
                    <!-- Icon and Arrow -->
                    <div class="flex items-start justify-between mb-4 sm:mb-6">
                        <div class="icon-wrapper w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0">
                            <svg class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                        </div>
                        <div class="arrow-icon opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/>
                            </svg>
                        </div>
                    </div>
                    
                    <!-- Title -->
                    <h3 class="text-brand-dark text-xl sm:text-2xl md:text-[22px] lg:text-[24px] font-semibold leading-tight sm:leading-tight md:leading-[28px] lg:leading-[30px] mb-4 sm:mb-6 group-hover:text-brand-red transition-colors duration-300">
                        Data Management & Governance
                    </h3>
                    
                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3">
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Data Management Consulting</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Cloud Data Management</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Data Governance</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Data Quality & Observability</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Unity Catalog Implementation</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Unity Catalog Migration</span>
                    </div>
                </div>

                <!-- Card 3: Data Analytics & Business Intelligence -->
                <div @click="navigateToService('/services/data-analytics')" class="service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-4 sm:p-6 md:p-8 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
                    <!-- Icon and Arrow -->
                    <div class="flex items-start justify-between mb-4 sm:mb-6">
                        <div class="icon-wrapper w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0">
                            <svg class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                            </svg>
                        </div>
                        <div class="arrow-icon opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/>
                            </svg>
                        </div>
                    </div>
                    
                    <!-- Title -->
                    <h3 class="text-brand-dark text-xl sm:text-2xl md:text-[22px] lg:text-[24px] font-semibold leading-tight sm:leading-tight md:leading-[28px] lg:leading-[30px] mb-4 sm:mb-6 group-hover:text-brand-red transition-colors duration-300">
                        Data Analytics & Business Intelligence
                    </h3>
                    
                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3">
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Data Analytics Consulting</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Business Intelligence Consulting</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">BI Modernization</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Data Visualization & Reporting</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Databricks SQL Analytics</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Advanced Analytics & Predictive Insights</span>
                    </div>
                </div>

                <!-- Card 4: AI & ML Solutions -->
                <div @click="navigateToService('/services/ai-ml-solutions')" class="service-card group bg-white/50 backdrop-blur-sm border border-black/10 rounded-[25px] p-4 sm:p-6 md:p-8 hover:bg-white/80 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
                    <!-- Icon and Arrow -->
                    <div class="flex items-start justify-between mb-4 sm:mb-6">
                        <div class="icon-wrapper w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg flex-shrink-0">
                            <svg class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                            </svg>
                        </div>
                        <div class="arrow-icon opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7V17"/>
                            </svg>
                        </div>
                    </div>
                    
                    <!-- Title -->
                    <h3 class="text-brand-dark text-xl sm:text-2xl md:text-[22px] lg:text-[24px] font-semibold leading-tight sm:leading-tight md:leading-[28px] lg:leading-[30px] mb-4 sm:mb-6 group-hover:text-brand-red transition-colors duration-300">
                        AI & ML Solutions
                    </h3>
                    
                    <!-- Tags -->
                    <div class="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3">
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">AI Strategy & Consulting</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">GenAI</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">ML & Predictive Analytics</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">MLOps & AI Platforms</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">LLMOps</span>
                        <span class="tag text-xs sm:text-sm md:text-sm lg:text-[15px]">Enterprise RAG Applications</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { router } from '@inertiajs/vue3'

const navigateToService = (url) => {
    router.visit(url)
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

.service-card:nth-child(1) { animation-delay: 0.6s; }
.service-card:nth-child(2) { animation-delay: 0.7s; }
.service-card:nth-child(3) { animation-delay: 0.8s; }
.service-card:nth-child(4) { animation-delay: 0.9s; }

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