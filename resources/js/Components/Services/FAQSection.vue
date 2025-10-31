<template>
    <section class="py-16 lg:py-20 xl:py-24 2xl:py-32 bg-white font-instrument">
        <div class="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
            <!-- Section Header -->
            <div class="text-center mb-12 lg:mb-16 xl:mb-20">
                <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-semibold text-[#121212] leading-tight lg:leading-[64px] max-w-[1200px] mx-auto">
                    {{ title }}
                </h2>
            </div>

            <!-- FAQ Accordion -->
            <div class="max-w-[1200px] mx-auto">
                <div
                    v-for="(faq, index) in faqs"
                    :key="index"
                    class="border-b border-gray-200 last:border-b-0"
                >
                    <button
                        @click="toggleFAQ(index)"
                        class="w-full py-6 lg:py-8 xl:py-10 flex items-center justify-between text-left group focus:outline-none"
                        :aria-expanded="openIndex === index"
                        :aria-controls="`faq-content-${index}`"
                    >
                        <!-- Question -->
                        <div class="flex items-start">
                            <span class="text-lg lg:text-xl xl:text-2xl font-semibold text-[#121212] mr-4 flex-shrink-0">
                                Q{{ index + 1 }}.
                            </span>
                            <h3 class="text-lg lg:text-xl xl:text-2xl font-semibold text-[#121212] leading-[1.3] pr-4">
                                {{ faq.question }}
                            </h3>
                        </div>

                        <!-- Plus/Minus Icon -->
                        <div class="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
                            <svg
                                class="w-6 h-6 lg:w-8 lg:h-8 transition-all duration-300 ease-in-out"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                            >
                                <!-- Plus Icon (when closed) -->
                                <path
                                    v-if="openIndex !== index"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 4v16m8-8H4"
                                />
                                <!-- Minus Icon (when open) -->
                                <path
                                    v-else
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M20 12H4"
                                />
                            </svg>
                        </div>
                    </button>

                    <!-- Answer Content -->
                    <div
                        :id="`faq-content-${index}`"
                        class="overflow-hidden transition-all duration-500 ease-in-out"
                        :style="{
                            maxHeight: openIndex === index ? contentHeights[index] + 'px' : '0px',
                            opacity: openIndex === index ? '1' : '0'
                        }"
                    >
                        <div
                            :ref="el => contentRefs[index] = el"
                            class="pb-6 lg:pb-8 xl:pb-10 pl-8 lg:pl-12"
                        >
                            <p class="text-base lg:text-lg xl:text-xl text-[#121212] leading-[1.6]">
                                {{ faq.answer }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

// Define props
const props = defineProps({
    title: {
        type: String,
        default: 'Frequently Asked Questions'
    },
    faqs: {
        type: Array,
        required: true
    }
});

// Reactive data
const openIndex = ref(0); // First item open by default
const contentRefs = ref([]);
const contentHeights = ref([]);

// Toggle FAQ function
const toggleFAQ = async (index) => {
    if (openIndex.value === index) {
        openIndex.value = null; // Close if already open
    } else {
        openIndex.value = index; // Open the clicked item
    }

    await nextTick();
    calculateHeights();
};

// Calculate content heights for smooth animation
const calculateHeights = async () => {
    await nextTick();
    contentRefs.value.forEach((ref, index) => {
        if (ref) {
            contentHeights.value[index] = ref.scrollHeight;
        }
    });
};

// Initialize heights on mount
onMounted(() => {
    calculateHeights();
});
</script>

<style scoped>
/* Instrument Sans Font Family */
.font-instrument {
    font-family: 'Instrument Sans', sans-serif;
}

/* Smooth transitions */
* {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Typography adjustments */
h2, h3 {
    font-family: 'Instrument Sans', sans-serif;
    color: #121212;
    word-wrap: break-word;
}

/* Button hover effects */
button:hover h3 {
    color: #FF3621;
    transition: color 0.3s ease;
}

button:hover svg {
    color: #FF3621;
    transition: color 0.3s ease;
}

/* Focus styles for accessibility */
button:focus {
    outline: none;
}

/* Custom border color */
.border-gray-200 {
    border-color: #E5E7EB;
}

/* Ensure smooth rotation animation */
.rotate-45 {
    transform: rotate(45deg);
}

/* Custom responsive adjustments */
@media (max-width: 768px) {
    .pl-8 {
        padding-left: 1.5rem;
    }

    .lg\:pl-12 {
        padding-left: 1.5rem;
    }
}

/* Smooth accordion animation */
[style*="max-height"] {
    transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>