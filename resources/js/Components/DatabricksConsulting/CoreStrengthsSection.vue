<template>
    <section class="core-strengths-section bg-white py-16 sm:py-20 lg:py-24">
        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
            <div class="max-w-[1720px] mx-auto">

                <!-- Section Header -->
                <div class="text-center mb-12 sm:mb-16 lg:mb-20">
                    <!-- Main Title -->
                    <h2 class="text-[#121212] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight font-instrument-sans mb-6">
                        Core Strengths of Our Databricks Consultants
                    </h2>

                    <!-- Section Subtitle -->
                    <p class="text-[#666666] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed font-instrument-sans max-w-7xl mx-auto">
                        Our team combines deep technical expertise with proven industry experience to deliver transformational<br class="hidden lg:block"> Databricks implementations that drive measurable business outcomes.
                    </p>
                </div>

                <!-- Main Content Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    <!-- Left Column: FAQ -->
                    <div class="lg:col-span-8">
                        <div class="space-y-6">

                            <!-- FAQ 1: Deep Platform Mastery -->
                            <div class="faq-item border-b border-gray-200 pb-6">
                                <button
                                    class="faq-header w-full text-left flex items-center justify-between group"
                                    @click="toggleAccordion(0)"
                                >
                                    <h3 class="text-[#121212] text-xl sm:text-2xl font-semibold font-instrument-sans pr-4 group-hover:text-[#FF3621] transition-colors duration-200">
                                        Deep Platform Mastery
                                    </h3>
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-[#FF3621] flex items-center justify-center transition-all duration-200"
                                            :class="activeAccordion === 0 ? 'border-[#FF3621] bg-[#FF3621]' : ''"
                                        >
                                            <svg
                                                class="w-4 h-4 transition-all duration-200"
                                                :class="activeAccordion === 0 ? 'text-white rotate-45' : 'text-gray-400 group-hover:text-[#FF3621]'"
                                                fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                                <div
                                    class="faq-content overflow-hidden transition-all duration-300"
                                    :class="activeAccordion === 0 ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'"
                                >
                                    <p class="text-[#666666] text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                                        Comprehensive understanding of Databricks architecture, Delta Lake optimization, cluster management, and advanced Spark configurations to maximize performance and efficiency across complex enterprise workloads.
                                    </p>
                                </div>
                            </div>

                            <!-- FAQ 2: Enterprise Implementation Experience -->
                            <div class="faq-item border-b border-gray-200 pb-6">
                                <button
                                    class="faq-header w-full text-left flex items-center justify-between group"
                                    @click="toggleAccordion(1)"
                                >
                                    <h3 class="text-[#121212] text-xl sm:text-2xl font-semibold font-instrument-sans pr-4 group-hover:text-[#FF3621] transition-colors duration-200">
                                        Enterprise Implementation Experience
                                    </h3>
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-[#FF3621] flex items-center justify-center transition-all duration-200"
                                            :class="activeAccordion === 1 ? 'border-[#FF3621] bg-[#FF3621]' : ''"
                                        >
                                            <svg
                                                class="w-4 h-4 transition-all duration-200"
                                                :class="activeAccordion === 1 ? 'text-white rotate-45' : 'text-gray-400 group-hover:text-[#FF3621]'"
                                                fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                                <div
                                    class="faq-content overflow-hidden transition-all duration-300"
                                    :class="activeAccordion === 1 ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'"
                                >
                                    <p class="text-[#666666] text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                                        Proven track record delivering large-scale Databricks transformations for Fortune 500 companies, with expertise in migration planning, change management, and seamless integration with existing enterprise systems and workflows.
                                    </p>
                                </div>
                            </div>

                            <!-- FAQ 3: Industry-Specific Solutions -->
                            <div class="faq-item border-b border-gray-200 pb-6">
                                <button
                                    class="faq-header w-full text-left flex items-center justify-between group"
                                    @click="toggleAccordion(2)"
                                >
                                    <h3 class="text-[#121212] text-xl sm:text-2xl font-semibold font-instrument-sans pr-4 group-hover:text-[#FF3621] transition-colors duration-200">
                                        Industry-Specific Solutions
                                    </h3>
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-[#FF3621] flex items-center justify-center transition-all duration-200"
                                            :class="activeAccordion === 2 ? 'border-[#FF3621] bg-[#FF3621]' : ''"
                                        >
                                            <svg
                                                class="w-4 h-4 transition-all duration-200"
                                                :class="activeAccordion === 2 ? 'text-white rotate-45' : 'text-gray-400 group-hover:text-[#FF3621]'"
                                                fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                                <div
                                    class="faq-content overflow-hidden transition-all duration-300"
                                    :class="activeAccordion === 2 ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'"
                                >
                                    <p class="text-[#666666] text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                                        Deep knowledge of industry-specific challenges in finance, healthcare, retail, manufacturing, and technology, enabling tailored Databricks implementations that address unique regulatory, compliance, and business requirements.
                                    </p>
                                </div>
                            </div>

                            <!-- FAQ 4: AI/ML Production Excellence -->
                            <div class="faq-item border-b border-gray-200 pb-6">
                                <button
                                    class="faq-header w-full text-left flex items-center justify-between group"
                                    @click="toggleAccordion(3)"
                                >
                                    <h3 class="text-[#121212] text-xl sm:text-2xl font-semibold font-instrument-sans pr-4 group-hover:text-[#FF3621] transition-colors duration-200">
                                        AI/ML Production Excellence
                                    </h3>
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-[#FF3621] flex items-center justify-center transition-all duration-200"
                                            :class="activeAccordion === 3 ? 'border-[#FF3621] bg-[#FF3621]' : ''"
                                        >
                                            <svg
                                                class="w-4 h-4 transition-all duration-200"
                                                :class="activeAccordion === 3 ? 'text-white rotate-45' : 'text-gray-400 group-hover:text-[#FF3621]'"
                                                fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                                <div
                                    class="faq-content overflow-hidden transition-all duration-300"
                                    :class="activeAccordion === 3 ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'"
                                >
                                    <p class="text-[#666666] text-base sm:text-lg font-normal leading-relaxed font-instrument-sans">
                                        Specialized expertise in MLflow, model deployment pipelines, automated retraining workflows, and production monitoring to ensure AI/ML models deliver consistent, reliable results at enterprise scale with proper governance and observability.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- Right Column: CTA Card -->
                    <div class="lg:col-span-4">
                        <div class="sticky top-8">
                            <div class="cta-card bg-white border border-gray-200 rounded-lg p-8 lg:p-10 text-center shadow-sm">
                                <!-- Content -->
                                <div>
                                    <!-- Icon -->
                                    <div class="mb-6">
                                        <div class="w-16 h-16 bg-[#8B5CF6] rounded-full flex items-center justify-center mx-auto">
                                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                            </svg>
                                        </div>
                                    </div>

                                    <!-- Headline -->
                                    <h3 class="text-[#121212] text-2xl sm:text-3xl font-semibold leading-tight font-instrument-sans mb-4">
                                        Ready to Advance Your Databricks Strategy?
                                    </h3>

                                    <!-- Description -->
                                    <p class="text-[#666666] text-base sm:text-lg font-normal leading-relaxed font-instrument-sans mb-8">
                                        Connect with our certified consultants to accelerate your data transformation and unlock the full potential of your Databricks investment.
                                    </p>

                                    <!-- CTA Button -->
                                    <button
                                        class="group bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-4 rounded-[50px] text-lg font-semibold font-instrument-sans transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 flex items-center justify-center space-x-3 hover:scale-105 w-full"
                                        @click="handleCTAClick"
                                    >
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                        <span>Schedule Consultation</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const props = defineProps({
    strengths: {
        type: Array,
        default: () => []
    }
});

const emit = defineEmits(['cta-click']);

// Accordion state - first FAQ open by default
const activeAccordion = ref(0);

const toggleAccordion = (index) => {
    if (activeAccordion.value === index) {
        activeAccordion.value = null;
    } else {
        activeAccordion.value = index;
    }
};

const handleCTAClick = () => {
    emit('cta-click');
    // Default behavior - navigate to contact
    window.location.href = '/contact';
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

/* Core Strengths Section */
.core-strengths-section {
    position: relative;
    background-color: #ffffff;
    overflow: hidden;
}

/* FAQ Styles */
.faq-item {
    transition: all 0.3s ease;
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
}

/* Staggered animations */
.faq-item:nth-child(1) {
    animation-delay: 0.1s;
}

.faq-item:nth-child(2) {
    animation-delay: 0.2s;
}

.faq-item:nth-child(3) {
    animation-delay: 0.3s;
}

.faq-item:nth-child(4) {
    animation-delay: 0.4s;
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

/* FAQ hover effects */
.faq-item:hover {
    border-color: #FF3621;
}

.faq-header:hover h3 {
    color: #FF3621;
}

/* CTA Card */
.cta-card {
    animation: fadeInUp 0.8s ease-out;
    animation-delay: 0.5s;
    animation-fill-mode: both;
    transition: all 0.3s ease;
}

/* CTA Card hover effects */
.cta-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Button hover effects */
.cta-card button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

/* Purple icon hover effect */
.cta-card .bg-[#8B5CF6]:hover {
    transform: scale(1.1);
    background-color: #7C3AED;
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .core-strengths-section {
        padding: 60px 0;
    }

    .core-strengths-section h2 {
        font-size: 42px !important;
        line-height: 48px !important;
    }

    .core-strengths-section > div > div > div > p {
        font-size: 20px !important;
        line-height: 30px !important;
    }

    .grid {
        grid-template-columns: 1fr;
    }

    .sticky {
        position: relative;
        top: auto;
    }
}

@media (max-width: 768px) {
    .core-strengths-section {
        padding: 40px 0;
    }

    .core-strengths-section h2 {
        font-size: 32px !important;
        line-height: 38px !important;
        margin-bottom: 1.5rem !important;
    }

    .core-strengths-section > div > div > div > p {
        font-size: 18px !important;
        line-height: 27px !important;
        margin-bottom: 2rem !important;
    }

    .faq-header h3 {
        font-size: 18px !important;
        line-height: 24px !important;
    }

    .faq-content p {
        font-size: 14px !important;
        line-height: 21px !important;
    }

    .cta-card {
        padding: 2rem !important;
    }

    .cta-card h3 {
        font-size: 1.5rem !important;
        line-height: 1.3 !important;
    }

    .cta-card p {
        font-size: 0.875rem !important;
        line-height: 1.4 !important;
    }

    .cta-card button {
        padding: 0.875rem 1.5rem !important;
        font-size: 0.875rem !important;
    }
}

@media (max-width: 640px) {
    .core-strengths-section {
        padding: 30px 0;
    }

    .core-strengths-section h2 {
        font-size: 28px !important;
        line-height: 34px !important;
        margin-bottom: 1rem !important;
    }

    .core-strengths-section > div > div > div > p {
        font-size: 16px !important;
        line-height: 24px !important;
        margin-bottom: 1.5rem !important;
    }

    .faq-header {
        padding: 1rem 0 !important;
    }

    .faq-header h3 {
        font-size: 16px !important;
        line-height: 22px !important;
    }

    .faq-content {
        padding: 0 !important;
    }

    .faq-content p {
        font-size: 14px !important;
        line-height: 20px !important;
    }

    .w-8.h-8 {
        width: 1.75rem !important;
        height: 1.75rem !important;
    }

    .w-8.h-8 svg {
        width: 1rem !important;
        height: 1rem !important;
    }

    .cta-card h3 {
        font-size: 1.375rem !important;
        margin-bottom: 1rem !important;
    }

    .cta-card .w-16.h-16 {
        width: 3rem !important;
        height: 3rem !important;
    }

    .cta-card .w-16.h-16 svg {
        width: 1.5rem !important;
        height: 1.5rem !important;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .faq-item,
    .cta-card {
        animation: none;
        opacity: 1;
    }

    .faq-item:hover,
    .cta-card:hover {
        transform: none;
    }

    .cta-card .bg-[#8B5CF6]:hover {
        transform: none;
    }

    .cta-card button:hover {
        transform: none;
    }
}
</style>