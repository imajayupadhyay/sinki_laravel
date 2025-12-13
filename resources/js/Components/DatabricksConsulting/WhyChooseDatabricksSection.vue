<template>
    <section class="why-choose-databricks-section bg-white py-16 sm:py-20 lg:py-24">
        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
            <div class="max-w-[1720px] mx-auto">

                <!-- Section Header -->
                <div class="text-center mb-12 sm:mb-16 lg:mb-20">
                    <!-- Main Title -->
                    <h2 class="text-[#121212] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight font-instrument-sans mb-6">
                        Why Leading Enterprises Choose
                        <br>
                        Databricks for Modern Data Intelligence
                    </h2>

                    <!-- Section Subtitle -->
                    <p class="text-[#666666] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed font-instrument-sans max-w-7xl mx-auto">
                        Databricks stands out by combining unified architecture, automated governance, and production-ready AI capabilities that transform fragmented data operations into strategic advantage.
                    </p>
                </div>

                <!-- Features Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

                    <!-- Feature 1: Unified Lakehouse Power -->
                    <div class="feature-card group p-6 sm:p-8 lg:p-10 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div class="flex items-start gap-4 mb-4">
                            <!-- Green Checkmark -->
                            <div class="flex-shrink-0 mt-1">
                                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                            </div>
                            <!-- Title -->
                            <h3 class="text-[#121212] text-xl sm:text-2xl font-semibold leading-tight font-instrument-sans">
                                Unified Lakehouse Power
                            </h3>
                        </div>
                        <!-- Description -->
                        <p class="text-[#666666] text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                            A single, cohesive Lakehouse platform that unifies storage, analytics, and machine learning to deliver consistent insights and eliminate silos across the enterprise.
                        </p>
                    </div>

                    <!-- Feature 2: Enterprise-Grade Intelligence -->
                    <div class="feature-card group p-6 sm:p-8 lg:p-10 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div class="flex items-start gap-4 mb-4">
                            <!-- Green Checkmark -->
                            <div class="flex-shrink-0 mt-1">
                                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                            </div>
                            <!-- Title -->
                            <h3 class="text-[#121212] text-xl sm:text-2xl font-semibold leading-tight font-instrument-sans">
                                Enterprise-Grade Intelligence
                            </h3>
                        </div>
                        <!-- Description -->
                        <p class="text-[#666666] text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                            Integrated analytics, AI, and real-time processing operating on a secure Lakehouse foundation to support high-stakes decision-making across large, complex organizations.
                        </p>
                    </div>

                    <!-- Feature 3: Production-Ready AI -->
                    <div class="feature-card group p-6 sm:p-8 lg:p-10 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div class="flex items-start gap-4 mb-4">
                            <!-- Green Checkmark -->
                            <div class="flex-shrink-0 mt-1">
                                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                            </div>
                            <!-- Title -->
                            <h3 class="text-[#121212] text-xl sm:text-2xl font-semibold leading-tight font-instrument-sans">
                                Production-Ready AI
                            </h3>
                        </div>
                        <!-- Description -->
                        <p class="text-[#666666] text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                            A complete lifecycle approach that accelerates model training, validation, and deployment, ensuring AI solutions reach production reliably with measurable performance impact.
                        </p>
                    </div>

                    <!-- Feature 4: Governance Built-In -->
                    <div class="feature-card group p-6 sm:p-8 lg:p-10 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div class="flex items-start gap-4 mb-4">
                            <!-- Green Checkmark -->
                            <div class="flex-shrink-0 mt-1">
                                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                            </div>
                            <!-- Title -->
                            <h3 class="text-[#121212] text-xl sm:text-2xl font-semibold leading-tight font-instrument-sans">
                                Governance Built-In
                            </h3>
                        </div>
                        <!-- Description -->
                        <p class="text-[#666666] text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                            Centralized security, access control, lineage tracking, and policy enforcement embedded directly within your Lakehouse to maintain compliance, trust, and operational integrity.
                        </p>
                    </div>

                    <!-- Feature 5: Cost-Optimized Workloads -->
                    <div class="feature-card group p-6 sm:p-8 lg:p-10 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div class="flex items-start gap-4 mb-4">
                            <!-- Green Checkmark -->
                            <div class="flex-shrink-0 mt-1">
                                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                            </div>
                            <!-- Title -->
                            <h3 class="text-[#121212] text-xl sm:text-2xl font-semibold leading-tight font-instrument-sans">
                                Cost-Optimized Workloads
                            </h3>
                        </div>
                        <!-- Description -->
                        <p class="text-[#666666] text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                            Intelligent workload management that reduces compute waste, optimizes cluster usage, and ensures your analytics and AI pipelines run efficiently without unnecessary spend.
                        </p>
                    </div>

                    <!-- Feature 6: Open, Interoperable Stack -->
                    <div class="feature-card group p-6 sm:p-8 lg:p-10 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <div class="flex items-start gap-4 mb-4">
                            <!-- Green Checkmark -->
                            <div class="flex-shrink-0 mt-1">
                                <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                            </div>
                            <!-- Title -->
                            <h3 class="text-[#121212] text-xl sm:text-2xl font-semibold leading-tight font-instrument-sans">
                                Open, Interoperable Stack
                            </h3>
                        </div>
                        <!-- Description -->
                        <p class="text-[#666666] text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                            A flexible, standards-based environment that integrates seamlessly with BI tools, ML platforms, and cloud ecosystems to support long-term scalability and innovation.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    features: {
        type: Array,
        default: () => []
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

/* Why Choose Databricks Section */
.why-choose-databricks-section {
    position: relative;
    background-color: #ffffff;
    overflow: hidden;
}

/* Feature Card Styles */
.feature-card {
    position: relative;
    transition: all 0.3s ease;
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
    background: #ffffff;
}

/* Enhanced hover effects */
.feature-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: #86efac !important;
}

/* Staggered animations */
.feature-card:nth-child(1) {
    animation-delay: 0.1s;
}

.feature-card:nth-child(2) {
    animation-delay: 0.2s;
}

.feature-card:nth-child(3) {
    animation-delay: 0.3s;
}

.feature-card:nth-child(4) {
    animation-delay: 0.4s;
}

.feature-card:nth-child(5) {
    animation-delay: 0.5s;
}

.feature-card:nth-child(6) {
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

/* Green checkmark hover effect */
.feature-card:hover .bg-green-500 {
    transform: scale(1.15);
    box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);
    background-color: #16a34a;
}

/* Title hover effect */
.feature-card:hover h3 {
    color: #059669;
    transform: translateX(4px);
}

/* Description hover effect */
.feature-card:hover p {
    color: #374151;
}

/* Green checkmark styles */
.bg-green-500 {
    background-color: #22c55e;
    transition: all 0.3s ease;
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .why-choose-databricks-section {
        padding: 60px 0;
    }

    .why-choose-databricks-section h2 {
        font-size: 42px !important;
        line-height: 48px !important;
    }

    .why-choose-databricks-section > div > div > div > p {
        font-size: 20px !important;
        line-height: 30px !important;
    }

    .grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .why-choose-databricks-section {
        padding: 40px 0;
    }

    .why-choose-databricks-section h2 {
        font-size: 32px !important;
        line-height: 38px !important;
        margin-bottom: 1.5rem !important;
    }

    .why-choose-databricks-section > div > div > div > p {
        font-size: 18px !important;
        line-height: 27px !important;
        margin-bottom: 2rem !important;
    }

    .feature-card h3 {
        font-size: 18px !important;
        line-height: 24px !important;
    }

    .feature-card p {
        font-size: 14px !important;
        line-height: 21px !important;
    }
}

@media (max-width: 640px) {
    .why-choose-databricks-section {
        padding: 30px 0;
    }

    .why-choose-databricks-section h2 {
        font-size: 28px !important;
        line-height: 34px !important;
        margin-bottom: 1rem !important;
    }

    .why-choose-databricks-section > div > div > div > p {
        font-size: 16px !important;
        line-height: 24px !important;
        margin-bottom: 1.5rem !important;
    }

    .feature-card h3 {
        font-size: 16px !important;
        line-height: 22px !important;
        margin-bottom: 0.5rem !important;
    }

    .feature-card p {
        font-size: 14px !important;
        line-height: 20px !important;
    }

    .grid {
        gap: 1.5rem;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .feature-card {
        animation: none;
        opacity: 1;
    }

    .feature-card:hover {
        transform: none;
    }

    .feature-card:hover .bg-green-500 {
        transform: none;
    }
}
</style>