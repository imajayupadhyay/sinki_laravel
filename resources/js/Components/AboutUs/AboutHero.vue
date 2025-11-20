<template>
    <section class="relative overflow-hidden min-h-[90vh]">
        <!-- Background Image -->
        <div class="absolute inset-0">
            <img
                src="/images/ABoutbanner.png"
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
                        <!-- 3D Sinki Logo -->
                        <div class="relative w-[280px] h-[280px] lg:w-[300px] lg:h-[300px]">
                            <!-- Main Logo Container with 3D effect -->
                            <div class="absolute inset-0 bg-gradient-to-br from-[#FF3621] to-[#CC2B1A] rounded-[48px] shadow-2xl transform rotate-6 opacity-90"></div>
                            <div class="absolute inset-0 bg-gradient-to-br from-[#FF3621] to-[#CC2B1A] rounded-[48px] shadow-2xl transform -rotate-3 opacity-70"></div>
                            <div class="absolute inset-0 bg-gradient-to-br from-[#FF4A38] to-[#FF3621] rounded-[48px] shadow-2xl flex items-center justify-center">
                                <!-- Sinki Icon -->
                                <svg class="w-32 h-32 lg:w-36 lg:h-36 text-white" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M60 60L100 100L60 140M100 60L140 100L100 140" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>

                            <!-- Glow Effect -->
                            <div class="absolute -inset-4 bg-[#FF3621] rounded-[52px] blur-xl opacity-30 animate-pulse"></div>
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

/* Responsive height adjustments to match services page */
@media (min-width: 1536px) {
    section {
        min-height: 95vh !important;
    }
}

@media (max-width: 1536px) {
    section {
        min-height: 90vh !important;
    }
}

@media (max-width: 1280px) {
    section {
        min-height: 85vh !important;
    }
}

@media (max-width: 1024px) {
    section {
        min-height: 80vh !important;
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