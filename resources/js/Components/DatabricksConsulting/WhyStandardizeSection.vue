<template>
    <section class="why-standardize-section py-16 sm:py-20 lg:py-24 bg-white">
        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
            <div class="max-w-[1720px] mx-auto">

                <div class="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
                    <!-- Left Column - Header Content -->
                    <div class="lg:w-[45%]">
                        <h2 class="text-[#1a1a1a] text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-tight font-instrument-sans mb-6 sm:mb-8">
                            Why Leading<br>
                            Enterprises Standardize<br>
                            on Databricks
                        </h2>
                        <p class="text-[#666666] text-lg sm:text-xl lg:text-2xl font-normal font-instrument-sans leading-relaxed">
                            Databricks simplifies every layer of the data journey, enabling faster insights, stronger governance, and scalable AI-driven outcomes.
                        </p>
                    </div>

                    <!-- Right Column - Accordion -->
                    <div class="lg:w-[55%] space-y-0">

                        <!-- Accordion Item 1 - Unified Platform Architecture -->
                        <div class="accordion-item border-b border-[#E5E5E5]">
                            <button
                                @click="toggleAccordion(0)"
                                class="w-full text-left p-6 flex justify-between items-center transition-all duration-300 bg-white hover:bg-[#F9F9F9]"
                                :class="{ 'bg-[#F9F9F9]': activeAccordion === 0 }"
                            >
                                <span class="text-[#1a1a1a] text-lg sm:text-xl font-semibold font-instrument-sans">
                                    Unified Platform Architecture
                                </span>
                                <svg
                                    :class="{ 'rotate-180': activeAccordion === 0 }"
                                    class="w-5 h-5 text-[#666666] transform transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div
                                v-show="activeAccordion === 0"
                                class="accordion-content px-6 pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                            >
                                Databricks unifies engineering, analytics, and AI in one environment, reducing complexity and enabling seamless collaboration supported by Certified Databricks Consultants.
                            </div>
                        </div>

                        <!-- Accordion Item 2 - High-Performance Data Processing -->
                        <div class="accordion-item border-b border-[#E5E5E5]">
                            <button
                                @click="toggleAccordion(1)"
                                class="w-full text-left p-6 flex justify-between items-center transition-all duration-300 bg-white hover:bg-[#F9F9F9]"
                                :class="{ 'bg-[#F9F9F9]': activeAccordion === 1 }"
                            >
                                <span class="text-[#1a1a1a] text-lg sm:text-xl font-semibold font-instrument-sans">
                                    High-Performance Data Processing
                                </span>
                                <svg
                                    :class="{ 'rotate-180': activeAccordion === 1 }"
                                    class="w-5 h-5 text-[#666666] transform transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div
                                v-show="activeAccordion === 1"
                                class="accordion-content px-6 pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                            >
                                Built on Apache Spark, Databricks delivers exceptional performance for large-scale data processing, analytics, and machine learning workloads with optimized compute clusters.
                            </div>
                        </div>

                        <!-- Accordion Item 3 - Consistent Governance and Security -->
                        <div class="accordion-item border-b border-[#E5E5E5]">
                            <button
                                @click="toggleAccordion(2)"
                                class="w-full text-left p-6 flex justify-between items-center transition-all duration-300 bg-white hover:bg-[#F9F9F9]"
                                :class="{ 'bg-[#F9F9F9]': activeAccordion === 2 }"
                            >
                                <span class="text-[#1a1a1a] text-lg sm:text-xl font-semibold font-instrument-sans">
                                    Consistent Governance and Security
                                </span>
                                <svg
                                    :class="{ 'rotate-180': activeAccordion === 2 }"
                                    class="w-5 h-5 text-[#666666] transform transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div
                                v-show="activeAccordion === 2"
                                class="accordion-content px-6 pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                            >
                                Unity Catalog provides centralized data governance with fine-grained access controls, data lineage tracking, and enterprise-grade security across all data assets.
                            </div>
                        </div>

                        <!-- Accordion Item 4 - AI and ML Built In -->
                        <div class="accordion-item border-b border-[#E5E5E5]">
                            <button
                                @click="toggleAccordion(3)"
                                class="w-full text-left p-6 flex justify-between items-center transition-all duration-300 bg-white hover:bg-[#F9F9F9]"
                                :class="{ 'bg-[#F9F9F9]': activeAccordion === 3 }"
                            >
                                <span class="text-[#1a1a1a] text-lg sm:text-xl font-semibold font-instrument-sans">
                                    AI and ML Built In
                                </span>
                                <svg
                                    :class="{ 'rotate-180': activeAccordion === 3 }"
                                    class="w-5 h-5 text-[#666666] transform transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div
                                v-show="activeAccordion === 3"
                                class="accordion-content px-6 pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                            >
                                Native machine learning capabilities with MLflow for experiment tracking, model management, and deployment, plus integrated support for popular ML frameworks.
                            </div>
                        </div>

                        <!-- Accordion Item 5 - Cost-Efficient Scalability -->
                        <div class="accordion-item border-b border-[#E5E5E5]">
                            <button
                                @click="toggleAccordion(4)"
                                class="w-full text-left p-6 flex justify-between items-center transition-all duration-300 bg-white hover:bg-[#F9F9F9]"
                                :class="{ 'bg-[#F9F9F9]': activeAccordion === 4 }"
                            >
                                <span class="text-[#1a1a1a] text-lg sm:text-xl font-semibold font-instrument-sans">
                                    Cost-Efficient Scalability
                                </span>
                                <svg
                                    :class="{ 'rotate-180': activeAccordion === 4 }"
                                    class="w-5 h-5 text-[#666666] transform transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div
                                v-show="activeAccordion === 4"
                                class="accordion-content px-6 pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                            >
                                Auto-scaling clusters and serverless compute options optimize resource usage and costs while maintaining performance for varying workloads and data volumes.
                            </div>
                        </div>

                        <!-- Accordion Item 6 - Cross-Cloud Flexibility -->
                        <div class="accordion-item border-b border-[#E5E5E5]">
                            <button
                                @click="toggleAccordion(5)"
                                class="w-full text-left p-6 flex justify-between items-center transition-all duration-300 bg-white hover:bg-[#F9F9F9]"
                                :class="{ 'bg-[#F9F9F9]': activeAccordion === 5 }"
                            >
                                <span class="text-[#1a1a1a] text-lg sm:text-xl font-semibold font-instrument-sans">
                                    Cross-Cloud Flexibility
                                </span>
                                <svg
                                    :class="{ 'rotate-180': activeAccordion === 5 }"
                                    class="w-5 h-5 text-[#666666] transform transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div
                                v-show="activeAccordion === 5"
                                class="accordion-content px-6 pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                            >
                                Available across AWS, Azure, and Google Cloud, enabling multi-cloud strategies and preventing vendor lock-in while maintaining consistent functionality.
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// Active accordion state
const activeAccordion = ref(0); // First item expanded by default

const toggleAccordion = (index) => {
    activeAccordion.value = activeAccordion.value === index ? null : index;
};
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

/* Section Styles */
.why-standardize-section {
    position: relative;
}

/* Accordion Animation */
.accordion-content {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Accordion Item Hover Effects */
.accordion-item {
    transition: all 0.3s ease;
}

.accordion-item:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

/* Button Focus State */
button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 54, 33, 0.5);
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .why-standardize-section {
        padding: 3rem 0;
    }

    .grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .why-standardize-section h2 {
        font-size: 2.5rem !important;
        line-height: 1.2 !important;
    }
}

@media (max-width: 768px) {
    .why-standardize-section {
        padding: 2.5rem 0;
    }

    .why-standardize-section h2 {
        font-size: 2rem !important;
        line-height: 1.2 !important;
        margin-bottom: 1rem !important;
    }

    .why-standardize-section > div > div > div > p {
        font-size: 1rem !important;
        line-height: 1.5 !important;
    }

    .accordion-item button {
        padding: 1rem !important;
    }

    .accordion-item button span {
        font-size: 1rem !important;
    }

    .accordion-content {
        padding: 0 1rem 1rem 1rem !important;
        font-size: 0.9rem !important;
    }
}

@media (max-width: 640px) {
    .why-standardize-section h2 {
        font-size: 1.75rem !important;
        line-height: 1.3 !important;
    }

    .accordion-item button span {
        font-size: 0.9rem !important;
    }

    .accordion-content {
        font-size: 0.85rem !important;
        line-height: 1.4 !important;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .accordion-content {
        animation: none;
    }

    .accordion-item {
        transition: none;
    }

    svg {
        transition: none !important;
    }
}
</style>