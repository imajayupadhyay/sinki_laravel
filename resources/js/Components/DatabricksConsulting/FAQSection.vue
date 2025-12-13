<template>
    <section class="faq-section py-16 sm:py-20 lg:py-24 bg-white">
        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
            <div class="max-w-[1720px] mx-auto">

                <!-- Section Header -->
                <div class="mb-16 sm:mb-20 lg:mb-24">
                    <h2 class="text-[#1a1a1a] text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-tight font-instrument-sans">
                        Frequently Asked Questions
                    </h2>
                </div>

                <!-- FAQ Accordion -->
                <div class="space-y-0">

                    <!-- FAQ Item 1 -->
                    <div class="faq-item border-b border-[#E5E5E5]">
                        <button
                            @click="toggleFAQ(0)"
                            class="w-full text-left py-6 flex justify-between items-start transition-all duration-300"
                        >
                            <div class="flex-1 pr-4">
                                <h3 class="text-[#1a1a1a] text-lg sm:text-xl lg:text-2xl font-semibold font-instrument-sans">
                                    Q1. What does a Databricks consultant do?
                                </h3>
                            </div>
                            <div class="flex-shrink-0">
                                <svg
                                    :class="{ 'rotate-45': activeFAQ === 0 }"
                                    class="w-6 h-6 text-[#1a1a1a] transform transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </div>
                        </button>
                        <div
                            v-show="activeFAQ === 0"
                            class="faq-content pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                        >
                            A Databricks consultant helps organizations build reliable data foundations by fixing broken pipelines, improving engineering workflows, guiding architectural decisions, and ensuring teams use the platform correctly so analytics, governance, and AI run smoothly without operational friction.
                        </div>
                    </div>

                    <!-- FAQ Item 2 -->
                    <div class="faq-item border-b border-[#E5E5E5]">
                        <button
                            @click="toggleFAQ(1)"
                            class="w-full text-left py-6 flex justify-between items-start transition-all duration-300"
                        >
                            <div class="flex-1 pr-4">
                                <h3 class="text-[#1a1a1a] text-lg sm:text-xl lg:text-2xl font-semibold font-instrument-sans">
                                    Q2. How can Databricks improve my existing data architecture?
                                </h3>
                            </div>
                            <div class="flex-shrink-0">
                                <svg
                                    :class="{ 'rotate-45': activeFAQ === 1 }"
                                    class="w-6 h-6 text-[#1a1a1a] transform transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </div>
                        </button>
                        <div
                            v-show="activeFAQ === 1"
                            class="faq-content pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                        >
                            Databricks can consolidate fragmented data systems into a unified lakehouse architecture, eliminate data silos, improve processing speeds through optimized Spark clusters, enhance data governance with Unity Catalog, and enable advanced analytics and ML capabilities that weren't possible with traditional data warehouses.
                        </div>
                    </div>

                    <!-- FAQ Item 3 -->
                    <div class="faq-item border-b border-[#E5E5E5]">
                        <button
                            @click="toggleFAQ(2)"
                            class="w-full text-left py-6 flex justify-between items-start transition-all duration-300"
                        >
                            <div class="flex-1 pr-4">
                                <h3 class="text-[#1a1a1a] text-lg sm:text-xl lg:text-2xl font-semibold font-instrument-sans">
                                    Q3. Is Databricks a data warehouse or a data lake?
                                </h3>
                            </div>
                            <div class="flex-shrink-0">
                                <svg
                                    :class="{ 'rotate-45': activeFAQ === 2 }"
                                    class="w-6 h-6 text-[#1a1a1a] transform transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </div>
                        </button>
                        <div
                            v-show="activeFAQ === 2"
                            class="faq-content pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                        >
                            Databricks is neither - it's a lakehouse platform that combines the best of both worlds. It provides the structured data management and performance of a data warehouse with the flexibility and cost-effectiveness of a data lake, all built on Delta Lake technology for reliable, ACID-compliant data storage.
                        </div>
                    </div>

                    <!-- FAQ Item 4 -->
                    <div class="faq-item border-b border-[#E5E5E5]">
                        <button
                            @click="toggleFAQ(3)"
                            class="w-full text-left py-6 flex justify-between items-start transition-all duration-300"
                        >
                            <div class="flex-1 pr-4">
                                <h3 class="text-[#1a1a1a] text-lg sm:text-xl lg:text-2xl font-semibold font-instrument-sans">
                                    Q4. How long does a typical Databricks implementation take?
                                </h3>
                            </div>
                            <div class="flex-shrink-0">
                                <svg
                                    :class="{ 'rotate-45': activeFAQ === 3 }"
                                    class="w-6 h-6 text-[#1a1a1a] transform transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </div>
                        </button>
                        <div
                            v-show="activeFAQ === 3"
                            class="faq-content pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                        >
                            Implementation timelines vary based on scope and complexity. A basic setup can take 4-8 weeks, while comprehensive enterprise implementations with data migration, governance setup, and team training typically take 3-6 months. Our accelerators and proven frameworks help reduce these timelines significantly.
                        </div>
                    </div>

                    <!-- FAQ Item 5 -->
                    <div class="faq-item border-b border-[#E5E5E5]">
                        <button
                            @click="toggleFAQ(4)"
                            class="w-full text-left py-6 flex justify-between items-start transition-all duration-300"
                        >
                            <div class="flex-1 pr-4">
                                <h3 class="text-[#1a1a1a] text-lg sm:text-xl lg:text-2xl font-semibold font-instrument-sans">
                                    Q5. What is the difference between Databricks and Snowflake?
                                </h3>
                            </div>
                            <div class="flex-shrink-0">
                                <svg
                                    :class="{ 'rotate-45': activeFAQ === 4 }"
                                    class="w-6 h-6 text-[#1a1a1a] transform transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </div>
                        </button>
                        <div
                            v-show="activeFAQ === 4"
                            class="faq-content pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                        >
                            While Snowflake is primarily a cloud data warehouse optimized for SQL analytics, Databricks is a comprehensive lakehouse platform that excels at both analytics and machine learning. Databricks natively supports multiple languages (Python, Scala, R, SQL), provides built-in ML capabilities with MLflow, and is designed for data science and engineering workflows beyond just querying data.
                        </div>
                    </div>

                    <!-- FAQ Item 6 -->
                    <div class="faq-item border-b border-[#E5E5E5]">
                        <button
                            @click="toggleFAQ(5)"
                            class="w-full text-left py-6 flex justify-between items-start transition-all duration-300"
                        >
                            <div class="flex-1 pr-4">
                                <h3 class="text-[#1a1a1a] text-lg sm:text-xl lg:text-2xl font-semibold font-instrument-sans">
                                    Q6. Can Databricks integrate with my current data tools and cloud platforms?
                                </h3>
                            </div>
                            <div class="flex-shrink-0">
                                <svg
                                    :class="{ 'rotate-45': activeFAQ === 5 }"
                                    class="w-6 h-6 text-[#1a1a1a] transform transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </div>
                        </button>
                        <div
                            v-show="activeFAQ === 5"
                            class="faq-content pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                        >
                            Yes, Databricks offers extensive integration capabilities. It runs natively on AWS, Azure, and Google Cloud, connects to popular BI tools like Tableau, Power BI, and Looker, integrates with data tools like dbt, Fivetran, and Kafka, and supports standard APIs and connectors for seamless integration with your existing data ecosystem.
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

// Active FAQ state
const activeFAQ = ref(0); // First item expanded by default

const toggleFAQ = (index) => {
    activeFAQ.value = activeFAQ.value === index ? null : index;
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
.faq-section {
    position: relative;
}

/* FAQ Content Animation */
.faq-content {
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

/* FAQ Button Focus State */
button:focus {
    outline: none;
}

/* FAQ Item Hover Effect */
.faq-item:hover {
    background-color: rgba(249, 249, 249, 0.5);
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .faq-section {
        padding: 3rem 0;
    }

    .faq-section h2 {
        font-size: 2.5rem !important;
        line-height: 1.2 !important;
        margin-bottom: 2rem !important;
    }

    .faq-item h3 {
        font-size: 1.25rem !important;
    }

    .faq-content {
        font-size: 1rem !important;
    }
}

@media (max-width: 768px) {
    .faq-section {
        padding: 2.5rem 0;
    }

    .faq-section h2 {
        font-size: 2rem !important;
        line-height: 1.2 !important;
        margin-bottom: 1.5rem !important;
    }

    .faq-item button {
        padding: 1rem 0 !important;
    }

    .faq-item h3 {
        font-size: 1.125rem !important;
    }

    .faq-content {
        font-size: 0.9rem !important;
        padding-bottom: 1rem !important;
    }

    .faq-item button .flex-1 {
        padding-right: 1rem !important;
    }
}

@media (max-width: 640px) {
    .faq-section h2 {
        font-size: 1.75rem !important;
        line-height: 1.3 !important;
    }

    .faq-item h3 {
        font-size: 1rem !important;
    }

    .faq-content {
        font-size: 0.85rem !important;
        line-height: 1.4 !important;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .faq-content {
        animation: none;
    }

    svg {
        transition: none !important;
    }
}
</style>