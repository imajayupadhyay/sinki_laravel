<template>
    <section class="relative overflow-hidden min-h-[65vh]">
        <!-- Background Image -->
        <div class="absolute inset-0">
            <img
                :src="heroSection?.background_image ? `/storage/${heroSection.background_image}` : '/images/aboutheroback.png'"
                alt="About Us Banner"
                class="w-full h-full object-cover"
            />
            <!-- Optional overlay for text readability -->
            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] relative z-10 pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-48 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-36">
            <div class="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                <!-- Left Side - Content (75%) -->
                <div class="flex-1 lg:w-3/4 space-y-4 sm:space-y-5 md:space-y-6">
                    <h1 class="text-[28px] sm:text-[32px] md:text-[42px] lg:text-[56px] xl:text-[64px] leading-[1.1] sm:leading-[1.15] md:leading-[1.1] font-bold text-white mt-2 sm:mt-4 md:mt-6 animate-slide-up">
                        <!-- Use dynamic heading if available, otherwise fall back to static content -->
                        <span v-if="heroSection?.heading" v-html="heroSection.heading"></span>
                        <template v-else>
                            We Turn Complex Data<br class="hidden sm:block" />
                            <span class="sm:hidden"> into Clear,</span>
                            <span class="hidden sm:inline"> into Clear, Actionable Intelligence</span>
                            <br class="sm:hidden" />
                            <span class="sm:hidden">Actionable Intelligence</span>
                        </template>
                    </h1>

                    <p class="text-[16px] sm:text-[18px] md:text-xl lg:text-[28px] leading-relaxed sm:leading-[28px] md:leading-relaxed lg:leading-[42px] text-white/80 animate-slide-up-delayed">
                        <!-- Use dynamic paragraph if available, otherwise fall back to static content -->
                        <span v-if="heroSection?.paragraph">{{ heroSection.paragraph }}</span>
                        <span v-else>Sinki helps enterprises use Databricks to create organized, consistent, and human-centered data systems that accelerate analytics and AI.</span>
                    </p>

                    <!-- CTA Button - only show if CTA text and link are provided -->
                    <div v-if="heroSection?.cta_text && heroSection?.cta_link" class="animate-slide-up-delayed">
                        <a
                            :href="heroSection.cta_link"
                            class="inline-flex items-center px-6 py-3 bg-brand-red text-white font-semibold text-lg rounded-lg hover:bg-red-700 transition-colors duration-300"
                        >
                            {{ heroSection.cta_text }}
                        </a>
                    </div>
                </div>

                <!-- Right Side - 3D Logo (25%) -->
                <div class="lg:w-1/4 flex justify-center lg:justify-end">
                    <div class="relative">
                        <!-- Right Side Logo Image -->
                        <div class="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] animate-float-in">
                            <img
                                src="/images/rightlogo.png"
                                alt="Sinki Logo"
                                class="w-full h-full object-contain animate-glow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';

// Props
const props = defineProps({
    heroSection: Object
});

// Initialize AOS if available
onMounted(() => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }
});
</script>

<style scoped>
/* Brand colors */
.bg-brand-red {
    background-color: #FF3621;
}

.hover\:bg-red-700:hover {
    background-color: #dc2626;
}

/* Modern entrance animations */
@keyframes slideUp {
    0% {
        transform: translateY(60px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slideUpDelayed {
    0% {
        transform: translateY(40px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes floatIn {
    0% {
        transform: translateY(30px) scale(0.9);
        opacity: 0;
    }
    100% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
}

@keyframes glow {
    0%, 100% {
        filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
    }
    50% {
        filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.5));
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-10px) rotate(2deg);
    }
}

/* Animation classes */
.animate-slide-up {
    animation: slideUp 1s ease-out forwards;
    animation-delay: 0.2s;
    opacity: 0;
}

.animate-slide-up-delayed {
    animation: slideUpDelayed 1s ease-out forwards;
    animation-delay: 0.6s;
    opacity: 0;
}

.animate-float-in {
    animation: floatIn 1.2s ease-out forwards;
    animation-delay: 0.8s;
    opacity: 0;
}

.animate-glow {
    animation: glow 3s ease-in-out infinite;
    animation-delay: 2s;
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

/* Responsive height adjustments */
@media (min-width: 1536px) {
    section {
        min-height: 65vh !important;
    }
}

@media (max-width: 1536px) {
    section {
        min-height: 65vh !important;
    }
}

@media (max-width: 1280px) {
    section {
        min-height: 65vh !important;
    }
}

@media (max-width: 1024px) {
    section {
        min-height: 65vh !important;
    }
}

@media (max-width: 768px) {
    section {
        min-height: 60vh !important;
    }
}

@media (max-width: 640px) {
    section {
        min-height: 60vh !important;
    }
}

@media (max-width: 480px) {
    section {
        min-height: 60vh !important;
    }
}

@media (max-width: 375px) {
    section {
        min-height: 60vh !important;
    }
}
</style>