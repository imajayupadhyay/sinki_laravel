<template>
    <section
        class="why-partner-section relative overflow-hidden pt-20 lg:pt-32 pb-20 lg:pb-32"
        :style="backgroundStyle"
    >

        <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10">
            <!-- Section Header - Center Aligned -->
            <div class="text-center mb-18 lg:mb-24">
                <!-- Main Title -->
                <h2 class="text-gray-900 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] mb-4 simple-fade-title">
                    {{ title }}
                </h2>

                <!-- Subtitle -->
                <p class="text-gray-700 text-xl lg:text-[28px] leading-relaxed lg:leading-[42px] max-w-[1000px] mx-auto simple-fade-subtitle">
                    {{ subtitle }}
                </p>
            </div>

            <!-- Features Grid - 2x3 Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
                <div
                    v-for="(feature, index) in dynamicFeatures"
                    :key="index"
                    class="feature-card group bg-white border border-[#FFE1DE] rounded-[25px] p-8 lg:p-10 hover:bg-gray-50 hover:border-[#FFE1DE] transition-all duration-500"
                    :class="`fade-up-${index + 1}`"
                >
                    <div class="flex items-start gap-6">
                        <!-- Checkmark Icon -->
                        <div class="flex-shrink-0">
                            <div class="checkmark-wrapper w-[32px] h-[32px] bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="flex-1">
                            <h3 class="text-gray-900 text-[24px] font-semibold leading-[31.2px] mb-3 group-hover:text-brand-red transition-colors duration-300">
                                {{ feature.title }}
                            </h3>
                            <p class="text-gray-600 text-[18px] font-normal leading-[27px]">
                                {{ feature.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps, computed } from 'vue';

// Props for customization
const props = defineProps({
    title: {
        type: String,
        default: 'Why Partner With Us'
    },
    subtitle: {
        type: String,
        default: 'We combine strategy, engineering, and agility to turn your data vision into a measurable business impact.'
    },
    backgroundImage: {
        type: String,
        default: null
    },
    backgroundColor: {
        type: String,
        default: null
    },
    features: {
        type: Array,
        default: () => []
    }
});

// Computed properties for dynamic content
const backgroundStyle = computed(() => {
    if (props.backgroundImage) {
        // Use dynamic background image from database
        const imagePath = props.backgroundImage.startsWith('/storage/')
            ? props.backgroundImage
            : `/storage/${props.backgroundImage}`;
        return {
            backgroundImage: `url(${imagePath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        };
    } else if (props.backgroundColor) {
        return {
            backgroundColor: props.backgroundColor
        };
    } else {
        // Fallback to default white background
        return {
            backgroundColor: 'white'
        };
    }
});

const dynamicFeatures = computed(() => {
    if (props.features && props.features.length > 0) {
        return props.features;
    }

    // Fallback to default features
    return [
        {
            title: 'Certified Databricks Expertise',
            description: 'Our certified specialists bring deep technical and business understanding of the Databricks ecosystem.'
        },
        {
            title: 'End-to-End Implementation',
            description: 'From data foundation to AI integration, we support your journey across every stage, design, build, and maintain.'
        },
        {
            title: 'Tailored Data Solutions',
            description: 'Every architecture, workflow, and integration is designed around your unique data and business needs.'
        },
        {
            title: 'Scalable & Secure Delivery',
            description: 'We ensure your Databricks environment is performance-ready, compliant, and built for long-term growth.'
        },
        {
            title: 'Collaborative Partnership',
            description: 'We work as an extension of your team, transparent, proactive, and committed to measurable outcomes.'
        },
        {
            title: 'Continuous Improvement',
            description: 'Beyond delivery, we help you evolve, refining pipelines, models, and data strategy for lasting value.'
        }
    ];
});
</script>

<style scoped>
/* Font Family - Instrument Sans */
.why-partner-section {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Container Custom */
.container-custom {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
}

/* Brand Colors */
.text-brand-red {
    color: #FF3621;
}

.bg-brand-red {
    background-color: #FF3621;
}

/* Simple Fade Up Animation */
@keyframes simpleFadeUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.simple-fade-title {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 0.2s;
    animation-fill-mode: both;
}

.simple-fade-subtitle {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 0.4s;
    animation-fill-mode: both;
}

.fade-up-1 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 0.6s;
    animation-fill-mode: both;
}

.fade-up-2 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 0.8s;
    animation-fill-mode: both;
}

.fade-up-3 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 1.0s;
    animation-fill-mode: both;
}

.fade-up-4 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 1.2s;
    animation-fill-mode: both;
}

.fade-up-5 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 1.4s;
    animation-fill-mode: both;
}

.fade-up-6 {
    animation: simpleFadeUp 0.8s ease-out;
    animation-delay: 1.6s;
    animation-fill-mode: both;
}

/* Feature Card Styles */
.feature-card {
    position: relative;
    background: white;
    border: 1px solid #FFE1DE;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation: slideUp 0.8s ease-out;
    animation-fill-mode: backwards;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* Stagger animation delays */
.feature-card:nth-child(1) {
    animation-delay: 0.6s;
}

.feature-card:nth-child(2) {
    animation-delay: 0.7s;
}

.feature-card:nth-child(3) {
    animation-delay: 0.8s;
}

.feature-card:nth-child(4) {
    animation-delay: 0.9s;
}

.feature-card:nth-child(5) {
    animation-delay: 1.0s;
}

.feature-card:nth-child(6) {
    animation-delay: 1.1s;
}

/* Card Hover Effects */
.feature-card:hover {
    background: #f9fafb;
    border-color: #FFE1DE;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

/* Checkmark Wrapper Styles */
.checkmark-wrapper {
    position: relative;
    box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.checkmark-wrapper::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    border: 2px solid #22c55e;
    opacity: 0;
    transition: all 0.5s ease;
}

.feature-card:hover .checkmark-wrapper::after {
    opacity: 0.3;
    inset: -4px;
}

/* Icon Animation */
.feature-card:hover .checkmark-wrapper svg {
    animation: checkPulse 0.6s ease;
}

@keyframes checkPulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.15);
    }
}

/* Ensure content is above effects */
.feature-card > * {
    position: relative;
    z-index: 3;
}

/* Responsive Styles */
@media (max-width: 1280px) {
    .why-partner-section h2 {
        font-size: 48px !important;
        line-height: 54px !important;
    }

    .why-partner-section > div > div > p {
        font-size: 24px !important;
        line-height: 36px !important;
    }
}

@media (max-width: 1024px) {
    .why-partner-section {
        padding: 60px 0;
    }

    .why-partner-section h2 {
        font-size: 42px !important;
        line-height: 48px !important;
    }

    .why-partner-section > div > div > p {
        font-size: 22px !important;
        line-height: 33px !important;
    }

    .container-custom {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
}

@media (max-width: 768px) {
    .why-partner-section {
        padding: 40px 0;
    }

    .why-partner-section h2 {
        font-size: 36px !important;
        line-height: 42px !important;
        margin-bottom: 1.5rem !important;
    }

    .why-partner-section > div > div > p {
        font-size: 20px !important;
        line-height: 30px !important;
        margin-bottom: 2.5rem !important;
    }

    .feature-card {
        padding: 1.5rem !important;
    }

    .feature-card h3 {
        font-size: 20px !important;
        line-height: 26px !important;
    }

    .feature-card p {
        font-size: 16px !important;
        line-height: 24px !important;
    }

    .checkmark-wrapper {
        width: 28px !important;
        height: 28px !important;
    }

    .checkmark-wrapper svg {
        width: 14px !important;
        height: 14px !important;
    }

    .flex {
        gap: 1rem !important;
    }
}

@media (max-width: 640px) {
    .why-partner-section {
        padding: 30px 0;
    }

    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .why-partner-section h2 {
        font-size: 28px !important;
        line-height: 36px !important;
        margin-bottom: 1rem !important;
    }

    .why-partner-section > div > div > p {
        font-size: 18px !important;
        line-height: 27px !important;
        margin-bottom: 2rem !important;
    }

    .feature-card {
        padding: 1.25rem !important;
    }

    .feature-card h3 {
        font-size: 18px !important;
        line-height: 24px !important;
        margin-bottom: 0.5rem !important;
    }

    .feature-card p {
        font-size: 14px !important;
        line-height: 20px !important;
    }

    .checkmark-wrapper {
        width: 26px !important;
        height: 26px !important;
    }

    .checkmark-wrapper svg {
        width: 12px !important;
        height: 12px !important;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .feature-card,
    .animate-slide-up,
    .animate-slide-up-delayed {
        animation: none;
        opacity: 1;
    }

    .feature-card:hover {
        transform: translateY(-1px);
    }

    .checkmark-wrapper {
        transition: none;
    }
}
</style>