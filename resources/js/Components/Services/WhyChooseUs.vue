<template>
    <section class="why-choose-us-section py-20 lg:py-32 relative overflow-hidden">
        <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
            <!-- Section Header -->
            <div class="text-center mb-16 lg:mb-20">
                <h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-tight lg:leading-[64px] mb-6 animate-slide-up">
                    {{ title }}
                </h2>
                <p v-if="description" class="text-brand-dark text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[1200px] mx-auto animate-slide-up-delayed">
                    {{ description }}
                </p>
            </div>

            <!-- Reason Cards Grid - 3 in first row, 2 in second row (middle aligned) -->
            <div class="space-y-8">
                <!-- First Row - 3 Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        v-for="(reason, index) in firstRowReasons"
                        :key="index"
                        class="reason-card group bg-white border border-gray-200 rounded-[25px] p-10 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                    >
                        <!-- Icon -->
                        <div class="mb-8 flex justify-center">
                            <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                                <!-- Dynamic Icon -->
                                <component
                                    :is="'div'"
                                    v-html="reason.icon"
                                    class="w-12 h-12 text-white"
                                />
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="text-center">
                            <h3 class="text-brand-dark text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                {{ reason.title }}
                            </h3>
                            <p class="text-brand-dark text-[18px] font-normal leading-[27px] tracking-[0.36px]">
                                {{ reason.description }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Second Row - 2 Cards (Center Aligned) -->
                <div class="flex justify-center">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8" style="width: calc(66.666667% - 0.667rem);">
                        <div
                            v-for="(reason, index) in secondRowReasons"
                            :key="index + 3"
                            class="reason-card group bg-white border border-gray-200 rounded-[25px] p-10 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                        >
                            <!-- Icon -->
                            <div class="mb-8 flex justify-center">
                                <div class="icon-wrapper w-[90px] h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                                    <!-- Dynamic Icon -->
                                    <component
                                        :is="'div'"
                                        v-html="reason.icon"
                                        class="w-12 h-12 text-white"
                                    />
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="text-center">
                                <h3 class="text-brand-dark text-[24px] font-semibold leading-[31.2px] tracking-[0.48px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                    {{ reason.title }}
                                </h3>
                                <p class="text-brand-dark text-[18px] font-normal leading-[27px] tracking-[0.36px]">
                                    {{ reason.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';

// Props for customization
const props = defineProps({
    title: {
        type: String,
        default: 'Why Choose us for your Data Engineering needs?'
    },
    description: {
        type: String,
        default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    reasons: {
        type: Array,
        default: () => [
            {
                title: "Certified Databricks Expertise",
                description: "We bring deep, hands-on experience across the Databricks ecosystem, ensuring faster, more efficient deployments.",
                icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>`
            },
            {
                title: "End-to-End Support",
                description: "From design to deployment, we handle every stage of your data modernization journey.",
                icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>`
            },
            {
                title: "Tailored Solutions",
                description: "Every project is customized to fit your organization's data landscape and business goals.",
                icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>`
            },
            {
                title: "Business-Focused Approach",
                description: "We align data initiatives with measurable business outcomes, not just technical changes.",
                icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>`
            },
            {
                title: "Scalable & Secure Delivery",
                description: "Solutions are designed for compliance, growth, and long-term sustainability.",
                icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>`
            }
        ]
    }
});

// Split reasons into two rows: first 3 and last 2
const firstRowReasons = computed(() => props.reasons.slice(0, 3));
const secondRowReasons = computed(() => props.reasons.slice(3, 5));
</script>

<style scoped>
/* Font Family - Instrument Sans */
.why-choose-us-section {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(180deg, #f5f5dc 0%, #fffef8 100%);
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

.border-brand-red {
    border-color: #FF3621;
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

/* Reason Card Styles */
.reason-card {
    position: relative;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation: slideUp 0.8s ease-out;
    animation-fill-mode: backwards;
    overflow: hidden;
}

/* Ripple effect on hover */
.reason-card::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 54, 33, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
    z-index: 0;
}

.reason-card:hover::before {
    width: 400px;
    height: 400px;
}

/* Glow effect on hover */
.reason-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 25px;
    opacity: 0;
    transition: opacity 0.5s ease;
    background: radial-gradient(
        circle at center,
        rgba(255, 54, 33, 0.1) 0%,
        transparent 70%
    );
    z-index: 0;
    pointer-events: none;
}

.reason-card:hover::after {
    opacity: 1;
}

/* Ensure content is above effects */
.reason-card > * {
    position: relative;
    z-index: 1;
}

/* Icon Wrapper Effects */
.icon-wrapper {
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Stagger animation delays */
.reason-card:nth-child(1) {
    animation-delay: 0.6s;
}

.reason-card:nth-child(2) {
    animation-delay: 0.8s;
}

.reason-card:nth-child(3) {
    animation-delay: 1s;
}

/* Second row animations */
.reason-card:nth-child(4) {
    animation-delay: 1.2s;
}

.reason-card:nth-child(5) {
    animation-delay: 1.4s;
}

/* Responsive Styles */
@media (max-width: 1280px) {
    .why-choose-us-section h2 {
        font-size: 48px !important;
        line-height: 54px !important;
    }

    .why-choose-us-section > div > div > p {
        font-size: 24px !important;
        line-height: 36px !important;
    }
}

@media (max-width: 1024px) {
    .why-choose-us-section {
        padding: 60px 0;
    }

    .why-choose-us-section h2 {
        font-size: 42px !important;
        line-height: 48px !important;
    }

    .why-choose-us-section > div > div > p {
        font-size: 22px !important;
        line-height: 33px !important;
    }

    .container-custom {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}

@media (max-width: 768px) {
    .why-choose-us-section {
        padding: 40px 0;
    }

    .why-choose-us-section h2 {
        font-size: 36px !important;
        line-height: 42px !important;
        margin-bottom: 1.5rem !important;
    }

    .why-choose-us-section > div > div > p {
        font-size: 20px !important;
        line-height: 30px !important;
        margin-bottom: 2.5rem !important;
    }

    .reason-card {
        padding: 1.5rem !important;
    }

    .reason-card h3 {
        font-size: 20px !important;
        line-height: 26px !important;
    }

    .reason-card p {
        font-size: 16px !important;
        line-height: 24px !important;
    }

    .icon-wrapper {
        width: 70px !important;
        height: 70px !important;
    }

    .icon-wrapper svg,
    .icon-wrapper div {
        width: 36px !important;
        height: 36px !important;
    }

    /* Single column on mobile */
    .grid {
        grid-template-columns: 1fr !important;
    }
}

@media (max-width: 640px) {
    .why-choose-us-section {
        padding: 30px 0;
    }

    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .why-choose-us-section h2 {
        font-size: 28px !important;
        line-height: 36px !important;
        margin-bottom: 1rem !important;
    }

    .why-choose-us-section > div > div > p {
        font-size: 18px !important;
        line-height: 27px !important;
        margin-bottom: 2rem !important;
    }

    .reason-card {
        padding: 1.25rem !important;
    }

    .reason-card h3 {
        font-size: 18px !important;
        line-height: 24px !important;
        margin-bottom: 0.5rem !important;
    }

    .reason-card p {
        font-size: 14px !important;
        line-height: 20px !important;
    }

    .icon-wrapper {
        width: 60px !important;
        height: 60px !important;
        margin-bottom: 1rem !important;
    }

    .icon-wrapper svg,
    .icon-wrapper div {
        width: 32px !important;
        height: 32px !important;
    }
}

/* Hover state disabled on touch devices */
@media (hover: none) {
    .reason-card:hover {
        transform: none;
        box-shadow: none;
    }

    .reason-card:active {
        transform: translateY(-4px);
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .reason-card,
    .animate-slide-up,
    .animate-slide-up-delayed {
        animation: none;
        opacity: 1;
    }

    .reason-card:hover {
        transform: translateY(-2px);
    }

    .icon-wrapper {
        transition: none;
    }
}
</style>