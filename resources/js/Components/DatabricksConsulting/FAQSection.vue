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
                            Databricks strengthens your architecture by removing data silos, improving processing efficiency, unifying engineering and analytics workloads, and giving teams a single environment to manage ingestion, transformation, governance, and AI development with far greater stability and performance than fragmented systems.
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
                            Databricks functions as both because it uses the Lakehouse architecture, which combines the low-cost storage of data lakes with the performance and reliability of data warehouses, allowing teams to handle analytics, streaming, and machine learning in one unified environment.
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
                            A focused proof of concept usually takes a few weeks, while enterprise-scale deployments involving migration, governance, pipeline builds, BI integration, and machine learning readiness often take several months depending on legacy complexity and the number of systems involved.
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
                            Snowflake specializes in data warehousing and analytics, while Databricks supports engineering, notebooks, streaming, machine learning, exploratory data science, and production pipelines in one platform. Teams choose Databricks when they want a unified environment for the entire data lifecycle.
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
                            Yes. Databricks connects easily with warehouses, BI tools, orchestration platforms, security systems, and cloud services across AWS, Azure, and GCP, allowing organizations to modernize their stack without disrupting existing workflows or replacing tools that already work well.
                        </div>
                    </div>

                    <!-- FAQ Item 7 -->
                    <div class="faq-item border-b border-[#E5E5E5]">
                        <button
                            @click="toggleFAQ(6)"
                            class="w-full text-left py-6 flex justify-between items-start transition-all duration-300"
                        >
                            <div class="flex-1 pr-4">
                                <h3 class="text-[#1a1a1a] text-lg sm:text-xl lg:text-2xl font-semibold font-instrument-sans">
                                    Q7. How does Databricks support AI and Machine Learning workloads?
                                </h3>
                            </div>
                            <div class="flex-shrink-0">
                                <svg
                                    :class="{ 'rotate-45': activeFAQ === 6 }"
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
                            v-show="activeFAQ === 6"
                            class="faq-content pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                        >
                            Databricks centralizes feature engineering, experimentation, model tracking, and production deployment. Scalable compute, collaborative notebooks, and MLflow create an end-to-end environment where data scientists build, refine, and launch models faster with consistent structure and governance.
                        </div>
                    </div>

                    <!-- FAQ Item 8 -->
                    <div class="faq-item border-b border-[#E5E5E5]">
                        <button
                            @click="toggleFAQ(7)"
                            class="w-full text-left py-6 flex justify-between items-start transition-all duration-300"
                        >
                            <div class="flex-1 pr-4">
                                <h3 class="text-[#1a1a1a] text-lg sm:text-xl lg:text-2xl font-semibold font-instrument-sans">
                                    Q8. What is Unity Catalog, and why is it essential for governance?
                                </h3>
                            </div>
                            <div class="flex-shrink-0">
                                <svg
                                    :class="{ 'rotate-45': activeFAQ === 7 }"
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
                            v-show="activeFAQ === 7"
                            class="faq-content pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                        >
                            Unity Catalog creates consistent governance by managing permissions, lineage, auditing, and data access across tables, files, dashboards, and machine learning models. It gives enterprises a single place to control security, maintain compliance, and ensure trusted data usage at scale.
                        </div>
                    </div>

                    <!-- FAQ Item 9 -->
                    <div class="faq-item border-b border-[#E5E5E5]">
                        <button
                            @click="toggleFAQ(8)"
                            class="w-full text-left py-6 flex justify-between items-start transition-all duration-300"
                        >
                            <div class="flex-1 pr-4">
                                <h3 class="text-[#1a1a1a] text-lg sm:text-xl lg:text-2xl font-semibold font-instrument-sans">
                                    Q9. How does Databricks ensure data security and compliance?
                                </h3>
                            </div>
                            <div class="flex-shrink-0">
                                <svg
                                    :class="{ 'rotate-45': activeFAQ === 8 }"
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
                            v-show="activeFAQ === 8"
                            class="faq-content pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                        >
                            Databricks secures data through encryption, identity controls, audit logging, private networks, and policy-driven governance. It applies consistent security across compute, storage, and collaboration layers, helping organizations meet regulatory expectations while maintaining fast and reliable access to trusted information.
                        </div>
                    </div>

                    <!-- FAQ Item 10 -->
                    <div class="faq-item border-b border-[#E5E5E5]">
                        <button
                            @click="toggleFAQ(9)"
                            class="w-full text-left py-6 flex justify-between items-start transition-all duration-300"
                        >
                            <div class="flex-1 pr-4">
                                <h3 class="text-[#1a1a1a] text-lg sm:text-xl lg:text-2xl font-semibold font-instrument-sans">
                                    Q10. Can Databricks help reduce cloud and compute costs?
                                </h3>
                            </div>
                            <div class="flex-shrink-0">
                                <svg
                                    :class="{ 'rotate-45': activeFAQ === 9 }"
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
                            v-show="activeFAQ === 9"
                            class="faq-content pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                        >
                            Yes. Databricks reduces cloud waste with auto-scaling, job clusters, efficient caching, optimized storage formats, and workload scheduling. Organizations typically see lower compute bills once pipelines, transformations, and machine learning tasks follow recommended patterns and efficient design.
                        </div>
                    </div>

                    <!-- FAQ Item 11 -->
                    <div class="faq-item border-b border-[#E5E5E5]">
                        <button
                            @click="toggleFAQ(10)"
                            class="w-full text-left py-6 flex justify-between items-start transition-all duration-300"
                        >
                            <div class="flex-1 pr-4">
                                <h3 class="text-[#1a1a1a] text-lg sm:text-xl lg:text-2xl font-semibold font-instrument-sans">
                                    Q11. How do I know if my business is ready for Databricks?
                                </h3>
                            </div>
                            <div class="flex-shrink-0">
                                <svg
                                    :class="{ 'rotate-45': activeFAQ === 10 }"
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
                            v-show="activeFAQ === 10"
                            class="faq-content pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                        >
                            You are ready if your teams struggle with slow pipelines, inconsistent dashboards, complex data systems, rising cloud costs, or stalled AI projects. Databricks helps streamline everything by creating one environment where data and intelligence workflows work together cleanly.
                        </div>
                    </div>

                    <!-- FAQ Item 12 -->
                    <div class="faq-item border-b border-[#E5E5E5]">
                        <button
                            @click="toggleFAQ(11)"
                            class="w-full text-left py-6 flex justify-between items-start transition-all duration-300"
                        >
                            <div class="flex-1 pr-4">
                                <h3 class="text-[#1a1a1a] text-lg sm:text-xl lg:text-2xl font-semibold font-instrument-sans">
                                    Q12. What are the benefits of hiring a certified Databricks consulting partner?
                                </h3>
                            </div>
                            <div class="flex-shrink-0">
                                <svg
                                    :class="{ 'rotate-45': activeFAQ === 11 }"
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
                            v-show="activeFAQ === 11"
                            class="faq-content pb-6 text-[#666666] text-base sm:text-lg font-normal font-instrument-sans leading-relaxed"
                        >
                            A certified partner brings proven blueprints, reusable accelerators, and real implementation expertise. They help avoid common pitfalls, shorten delivery timelines, establish proper governance, and build a Databricks foundation that remains stable, scalable, and valuable as your data grows.
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