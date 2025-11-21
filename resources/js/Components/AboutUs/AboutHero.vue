<template>
    <section class="relative overflow-hidden min-h-[65vh]">
        <!-- Background Image -->
        <div class="absolute inset-0">
            <img
                src="/images/aboutheroback.png"
                alt="About Us Banner"
                class="w-full h-full object-cover"
            />
            <!-- Optional overlay for text readability -->
            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        <div class="relative max-w-[1440px] mx-auto px-6 lg:px-20 pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-16 sm:pb-20 md:pb-28 lg:pb-36">
            <div class="flex flex-col lg:flex-row gap-12 items-center">
                <!-- Left Side - Content (75%) -->
                <div class="flex-1 lg:w-3/4 space-y-6" data-aos="fade-right">
                    <h1 class="text-[48px] lg:text-[64px] xl:text-[72px] leading-[1.1] font-bold text-white mt-6">
                        We Turn Complex Data<br />
                        into Clear, Actionable Intelligence
                    </h1>

                    <p class="text-[18px] lg:text-[20px] leading-relaxed text-white/80 max-w-[600px]">
                        Sinki helps enterprises use Databricks to create organized, consistent, and human-centered data systems that accelerate analytics and AI.
                    </p>
                </div>

                <!-- Right Side - 3D Logo (25%) -->
                <div class="lg:w-1/4 flex justify-center lg:justify-end" data-aos="fade-left">
                    <div class="relative">
                        <!-- Right Side Logo Image -->
                        <div class="relative w-[280px] h-[280px] lg:w-[300px] lg:h-[300px]">
                            <img
                                src="/images/rightlogo.png"
                                alt="Sinki Logo"
                                class="w-full h-full object-contain"
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
/* Custom animations */
@keyframes float {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-10px) rotate(2deg);
    }
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