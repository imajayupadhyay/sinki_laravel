<template>
    <!-- Image + Content Section - Reusable Component -->
    <section 
        class="image-content-section py-16 sm:py-20 lg:py-28"
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
                        <div class="section-description space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                            <p
                                v-for="(paragraph, index) in descriptions"
                                :key="index"
                                class="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
                            >
                                {{ paragraph }}
                            </p>
                        </div>

                        <!-- CTA Button -->
                        <div class="flex">
                            <button
                                v-if="ctaText"
                                @click="handleCtaClick"
                                class="cta-button group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-dark hover:bg-brand-red border-2 border-brand-dark hover:border-brand-red rounded-full text-white text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                            >
                                {{ ctaText }}
                                <div class="w-6 h-6 flex items-center justify-center">
                                    <svg 
                                        class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        stroke-width="2" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                    </svg>
                                </div>
                            </button>
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
import { defineProps, defineEmits } from 'vue';

// Props for customization
const props = defineProps({
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
        default: 'Section image'
    },
    imagePosition: {
        type: String,
        default: 'left', // 'left' or 'right'
        validator: (value) => ['left', 'right'].includes(value)
    },
    ctaText: {
        type: String,
        default: 'Start Your Transformation'
    },
    backgroundColor: {
        type: String,
        default: 'bg-white'
    }
});

// Emits
const emit = defineEmits(['cta-click']);

// Handle CTA click
const handleCtaClick = () => {
    emit('cta-click');
};
</script>

<style scoped>
/* Font Family - Instrument Sans */
.image-content-section {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Ensure proper text wrapping */
.image-content-section * {
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

.bg-brand-dark {
    background-color: #121212;
}

.bg-brand-red {
    background-color: #FF3621;
}

.border-brand-dark {
    border-color: #121212;
}

.border-brand-red {
    border-color: #FF3621;
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

/* CTA Button */
.cta-button {
    position: relative;
    overflow: hidden;
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 54, 33, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.cta-button:hover::before {
    width: 400px;
    height: 400px;
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
    .image-content-section {
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
    
    .cta-button {
        padding: 0.875rem 1.75rem;
        font-size: 16px;
    }
}

/* Tablet Portrait */
@media (max-width: 768px) {
    .image-content-section {
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
    
    .cta-button {
        padding: 0.75rem 1.5rem;
        font-size: 15px;
    }
}

/* Mobile */
@media (max-width: 640px) {
    .image-content-section {
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
    
    .cta-button {
        width: 100%;
        padding: 0.75rem 1.5rem;
        font-size: 14px;
    }
    
    .cta-button svg {
        width: 16px;
        height: 16px;
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