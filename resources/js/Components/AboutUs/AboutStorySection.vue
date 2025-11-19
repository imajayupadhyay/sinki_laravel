<template>
    <!-- About Story Section - Based on ImageContentSection with modifications -->
    <section
        class="about-story-section py-16 sm:py-20 lg:py-28"
        :class="backgroundColor"
    >
        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
            <div class="max-w-[1518px] mx-auto">
                <div
                    class="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center"
                    :class="imagePosition === 'right' ? 'lg:flex-row-reverse' : ''"
                >
                    <!-- Content Side - Shows first on mobile -->
                    <div
                        class="content-container w-full lg:w-[65%] flex-grow order-1"
                        :class="imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'"
                    >
                        <!-- Our Story Header -->
                        <div class="section-header mb-6 sm:mb-8">
                            <span class="section-tag text-gray-600 text-sm sm:text-base font-medium uppercase tracking-wider">
                                {{ headerTag }}
                            </span>
                        </div>

                        <!-- Main Heading -->
                        <h2
                            class="section-title text-brand-dark font-semibold mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[64px] break-words"
                        >
                            {{ title }}
                        </h2>

                        <!-- Subtitle (Optional) -->
                        <h3
                            v-if="subtitle"
                            class="section-subtitle text-gray-700 font-medium mb-6 text-xl sm:text-2xl lg:text-[26px] leading-relaxed"
                        >
                            {{ subtitle }}
                        </h3>

                        <!-- Description Paragraphs -->
                        <div class="section-description space-y-4 sm:space-y-5">
                            <p
                                v-for="(paragraph, index) in descriptions"
                                :key="index"
                                class="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
                                v-html="paragraph"
                            >
                            </p>
                        </div>
                    </div>

                    <!-- Image Side - Shows second on mobile -->
                    <div
                        class="image-container w-full lg:w-[35%] flex-shrink-0 order-2"
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
        font-size: 14px;
    }
}

/* Small Mobile */
@media (max-width: 480px) {
    .section-title {
        font-size: 32px !important;
        line-height: 1.1;
    }

    .section-subtitle {
        font-size: 17px;
    }
}
</style>