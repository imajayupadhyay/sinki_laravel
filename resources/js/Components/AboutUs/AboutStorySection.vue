<template>
    <!-- About Story Section - Based on ImageContentSection with modifications -->
    <section
        class="about-story-section py-20 sm:py-24 lg:py-32"
        :class="backgroundColor"
    >
        <div class="container-custom mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div class="max-w-[1518px] mx-auto">
                <div
                    class="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center"
                    :class="imagePosition === 'right' ? 'lg:flex-row-reverse' : ''"
                >
                    <!-- Content Side - Shows first on mobile -->
                    <div
                        class="content-container w-full lg:w-[70%] flex-grow order-1"
                        :class="imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'"
                    >
                        <!-- Our Story Header -->
                        <div class="section-header mb-4 sm:mb-6 animate-fade-in-up">
                            <span class="section-tag text-gray-600 text-sm sm:text-base font-medium uppercase tracking-wider">
                                {{ headerTag }}
                            </span>
                        </div>

                        <!-- Main Heading -->
                        <h2
                            class="section-title text-brand-dark font-semibold mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] break-words animate-fade-in-up-delayed"
                        >
                            {{ title }}
                        </h2>

                        <!-- Subtitle (Optional) -->
                        <h3
                            v-if="subtitle"
                            class="section-subtitle text-gray-700 font-medium mb-4 text-xl sm:text-2xl lg:text-[26px] leading-relaxed animate-fade-in-up-more"
                        >
                            {{ subtitle }}
                        </h3>

                        <!-- Description Paragraphs -->
                        <div class="section-description space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-7">
                            <p
                                v-for="(paragraph, index) in descriptions"
                                :key="index"
                                class="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed animate-fade-in-up-staggered"
                                :style="{ animationDelay: `${1.2 + index * 0.3}s` }"
                                v-html="paragraph"
                            >
                            </p>
                        </div>
                    </div>

                    <!-- Image Side - Shows second on mobile -->
                    <div
                        class="image-container w-full lg:w-[30%] flex-shrink-0 order-2 animate-scale-in"
                        :class="imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'"
                    >
                        <div class="relative rounded-3xl overflow-hidden shadow-xl">
                            <img
                                :src="imageSrc"
                                :alt="imageAlt"
                                class="w-full h-48 sm:h-56 md:h-64 lg:h-[65vh] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

// Props for customization
const props = defineProps({
    headerTag: {
        type: String,
        default: 'OUR STORY'
    },
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        default: ''
    },
    descriptions: {
        type: Array,
        required: true,
        default: () => []
    },
    imageSrc: {
        type: String,
        required: true
    },
    imageAlt: {
        type: String,
        default: 'About story image'
    },
    imagePosition: {
        type: String,
        default: 'left', // 'left' or 'right'
        validator: (value) => ['left', 'right'].includes(value)
    },
    backgroundColor: {
        type: String,
        default: 'bg-white'
    }
});
</script>

<style scoped>
/* Animations */
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes scaleIn {
    0% {
        opacity: 0;
        transform: scale(0.9) translateY(20px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    animation-delay: 0.2s;
    opacity: 0;
}

.animate-fade-in-up-delayed {
    animation: fadeInUp 0.8s ease-out forwards;
    animation-delay: 0.4s;
    opacity: 0;
}

.animate-fade-in-up-more {
    animation: fadeInUp 0.8s ease-out forwards;
    animation-delay: 0.6s;
    opacity: 0;
}

.animate-fade-in-up-staggered {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
}

.animate-scale-in {
    animation: scaleIn 1s ease-out forwards;
    animation-delay: 0.8s;
    opacity: 0;
}

/* Font Family - Instrument Sans */
.about-story-section {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Ensure proper text wrapping */
.about-story-section * {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
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

/* Section Tag */
.section-tag {
    color: #6B7280;
    letter-spacing: 0.1em;
}

/* Image Container */
.image-container img {
    transition: transform 0.3s ease;
}

.image-container:hover img {
    transform: scale(1.02);
}

/* Section Title */
.section-title {
    line-height: 1.1;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
}

/* Section Subtitle */
.section-subtitle {
    line-height: 1.4;
}

/* Description Text */
.section-description p {
    line-height: 1.7;
}

/* Responsive Styles */

/* Extra Large Screens */
@media (max-width: 1536px) {
    .section-title {
        font-size: 60px !important;
        line-height: 1.1;
    }
}

/* Medium Large Screens */
@media (max-width: 1400px) {
    .section-title {
        font-size: 56px !important;
        line-height: 1.1;
    }

    .section-subtitle {
        font-size: 22px;
    }

    .section-description {
        space-y: 1rem;
    }

    .section-description p {
        font-size: 15px;
        margin-bottom: 1rem;
    }
}

/* Large Screens */
@media (max-width: 1280px) {
    .section-title {
        font-size: 54px !important;
        line-height: 1.1;
    }

    .section-subtitle {
        font-size: 24px;
    }

    .section-description p {
        font-size: 16px;
    }
}

/* Laptop/Tablet Landscape */
@media (max-width: 1024px) {
    .about-story-section {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    .section-title {
        font-size: 48px !important;
        line-height: 1.1;
        margin-bottom: 1.5rem;
    }

    .section-subtitle {
        font-size: 22px;
        margin-bottom: 1.5rem;
    }

    .section-description {
        margin-bottom: 2rem;
    }

    .section-description p {
        font-size: 15px;
    }
}

/* Tablet Portrait */
@media (max-width: 768px) {
    .about-story-section {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    .section-title {
        font-size: 40px !important;
        line-height: 1.1;
        margin-bottom: 1.25rem;
    }

    .section-subtitle {
        font-size: 20px;
        margin-bottom: 1.25rem;
    }

    .section-description {
        margin-bottom: 1.75rem;
    }

    .section-description p {
        font-size: 14px;
    }
}

/* Mobile */
@media (max-width: 640px) {
    .about-story-section {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
    }

    .section-header {
        margin-bottom: 1.5rem !important;
    }

    .section-title {
        font-size: 36px !important;
        line-height: 1.1;
        margin-bottom: 1rem;
    }

    .section-subtitle {
        font-size: 18px;
        margin-bottom: 1rem;
    }

    .section-description {
        margin-bottom: 1.5rem;
        gap: 1rem;
    }

    .section-description p {
        font-size: 12px;
    }
}

/* Small Mobile */
@media (max-width: 480px) {
    .section-header {
        margin-bottom: 1rem !important;
    }

    .section-title {
        font-size: 32px !important;
        line-height: 1.1;
    }

    .section-subtitle {
        font-size: 17px;
    }

    .section-description p {
        font-size: 11px;
    }
}
</style>