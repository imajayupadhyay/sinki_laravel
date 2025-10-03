<template>
    <section id="platforms" class="bg-white py-20 lg:py-32 relative overflow-hidden">
        <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                <!-- Left Content -->
                <div class="platforms-content">
                    <!-- Section Label -->
                    <div class="mb-8 animate-fade-in">
                        <span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]">
                            Platforms We Work With
                        </span>
                    </div>

                    <!-- Main Heading -->
                    <h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight lg:leading-[85.8px] mb-6 max-w-[852px] animate-slide-up">
                        Built on the Platforms You Trust
                    </h2>

                    <!-- Description -->
                    <p class="text-brand-dark text-xl lg:text-[30px] leading-relaxed lg:leading-[45px] mb-12 max-w-[760px] animate-slide-up-delayed">
                        We bring Databricks to life on the enterprise platforms you already rely on.
                    </p>

                    <!-- Decorative Elements -->
                    <div class="hidden lg:block absolute -left-10 top-1/4 w-32 h-32 bg-brand-red/10 rounded-full animate-pulse-slow"></div>
                    <div class="hidden lg:block absolute -left-5 top-1/3 w-24 h-24 bg-brand-dark/5 rounded-full animate-pulse-slow-delayed"></div>
                </div>

                <!-- Right Content - Platform Logos Grid -->
                <div class="platforms-grid relative animate-slide-in-right">
                    <!-- Logo Grid Container - Row Structure -->
                    <div class="flex flex-col gap-6">
                        
                        <!-- Row 1 - Single Card (Databricks) -->
                        <div class="flex justify-center">
                            <div 
                                class="platform-logo-card group bg-white border border-gray-200 rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-brand-red transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] w-full max-w-[250px] sm:max-w-[286px]"
                                :style="{ animationDelay: '0s' }"
                            >
                                <img 
                                    :src="`/images/platforms/${platforms.row1[0].image}`"
                                    :alt="platforms.row1[0].name"
                                    class="max-w-full h-auto object-contain max-h-[60px] sm:max-h-[70px] lg:max-h-[80px] transition-transform duration-300 group-hover:scale-105"
                                    @error="handleImageError"
                                >
                            </div>
                        </div>

                        <!-- Row 2 - Three Cards (Azure, Google Cloud, AWS) -->
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                            <div 
                                v-for="(platform, index) in platforms.row2" 
                                :key="platform.name"
                                class="platform-logo-card group bg-white border border-gray-200 rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-brand-red transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] mx-auto w-full max-w-[200px] sm:max-w-none"
                                :style="{ animationDelay: `${(index + 1) * 0.5}s` }"
                            >
                                <img 
                                    :src="`/images/platforms/${platform.image}`"
                                    :alt="platform.name"
                                    class="max-w-full h-auto object-contain max-h-[50px] sm:max-h-[60px] lg:max-h-[70px] transition-transform duration-300 group-hover:scale-105"
                                    @error="handleImageError"
                                >
                            </div>
                        </div>

                        <!-- Row 3 - Two Cards (Power BI, Tableau) -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                            <div 
                                v-for="(platform, index) in platforms.row3" 
                                :key="platform.name"
                                class="platform-logo-card group bg-white border border-gray-200 rounded-[25px] p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-brand-red transition-all duration-500 cursor-pointer flex items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[143px] mx-auto w-full max-w-[200px] sm:max-w-none"
                                :style="{ animationDelay: `${(index + 4) * 0.5}s` }"
                            >
                                <img 
                                    :src="`/images/platforms/${platform.image}`"
                                    :alt="platform.name"
                                    class="max-w-full h-auto object-contain max-h-[50px] sm:max-h-[60px] lg:max-h-[70px] transition-transform duration-300 group-hover:scale-105"
                                    @error="handleImageError"
                                >
                            </div>
                        </div>

                    </div>

                    <!-- Decorative Background Elements -->
                    <div class="hidden lg:block absolute -right-10 bottom-1/4 w-32 h-32 bg-brand-red/10 rounded-full animate-pulse-slow"></div>
                    <div class="hidden lg:block absolute -right-5 bottom-1/3 w-24 h-24 bg-brand-dark/5 rounded-full animate-pulse-slow-delayed"></div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';

// Platform data structure matching your PHP project
const platforms = reactive({
    row1: [
        { name: 'Databricks', image: 'databricks.png' }
    ],
    row2: [
        { name: 'Microsoft Azure', image: 'azure-logo.png' },
        { name: 'Google Cloud', image: 'Google-Cloud.png' },
        { name: 'AWS', image: 'aws-logo.png' }
    ],
    row3: [
        { name: 'Power BI', image: 'Power-Bi-Logo.png' },
        { name: 'Tableau', image: 'Tableau.png' }
    ]
});

// Handle image loading errors
const handleImageError = (event) => {
    console.error('Failed to load image:', event.target.src);
    event.target.style.display = 'none';
};
</script>

<style scoped>
/* Animation keyframes */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes pulseSlow {
    0%, 100% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.2);
    }
}

@keyframes pulseSlowDelayed {
    0%, 100% {
        opacity: 0.2;
        transform: scale(1);
    }
    50% {
        opacity: 0.4;
        transform: scale(1.15);
    }
}

@keyframes cardFloat {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-8px);
    }
}

@keyframes imageFloat {
    0%, 100% {
        transform: translateX(0px) translateY(0px);
    }
    25% {
        transform: translateX(2px) translateY(-2px);
    }
    50% {
        transform: translateX(0px) translateY(-4px);
    }
    75% {
        transform: translateX(-2px) translateY(-2px);
    }
}

/* Animation classes */
.animate-fade-in {
    animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
    animation: slideUp 0.8s ease-out 0.2s both;
}

.animate-slide-up-delayed {
    animation: slideUp 0.8s ease-out 0.4s both;
}

.animate-slide-in-right {
    animation: slideInRight 0.8s ease-out 0.3s both;
}

.animate-pulse-slow {
    animation: pulseSlow 4s ease-in-out infinite;
}

.animate-pulse-slow-delayed {
    animation: pulseSlowDelayed 5s ease-in-out infinite;
    animation-delay: 1s;
}

/* Platform Logo Cards */
.platform-logo-card {
    position: relative;
    transition: all 0.3s ease;
    background: white;
    animation: cardFloat 3s ease-in-out infinite;
}

.platform-logo-card:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    animation: none;
    transform: translateY(-12px);
}

.platform-logo-card img {
    animation: imageFloat 4s ease-in-out infinite;
}

.platform-logo-card:hover img {
    animation: none;
}

/* Responsive Styles */
@media (max-width: 1536px) {
    .container-custom {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
}

@media (max-width: 1280px) {
    .container-custom {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    
    h2 {
        font-size: 64px !important;
        line-height: 70px !important;
    }
    
    p {
        font-size: 26px !important;
        line-height: 39px !important;
    }
}

@media (max-width: 1024px) {
    section {
        padding: 60px 0;
    }
    
    .container-custom {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    
    h2 {
        font-size: 52px !important;
        line-height: 58px !important;
    }
    
    p {
        font-size: 22px !important;
        line-height: 33px !important;
    }

    .platforms-grid .flex,
    .platforms-grid .grid {
        gap: 3rem;
    }
}

@media (max-width: 768px) {
    section {
        padding: 40px 0;
    }
    
    h2 {
        font-size: 36px !important;
        line-height: 44px !important;
        margin-bottom: 1.5rem !important;
    }
    
    p {
        font-size: 18px !important;
        line-height: 27px !important;
        margin-bottom: 2.5rem !important;
    }

    .platform-logo-card {
        min-height: 100px;
        padding: 1.25rem;
        width: 100%;
    }

    .platform-logo-card img {
        max-height: 50px !important;
    }

    .animate-pulse-slow,
    .animate-pulse-slow-delayed {
        width: 80px;
        height: 80px;
    }
}

@media (max-width: 480px) {
    section {
        padding: 30px 0;
    }

    .container-custom {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }

    h2 {
        font-size: 28px !important;
        line-height: 36px !important;
        margin-bottom: 1rem !important;
    }

    p {
        font-size: 16px !important;
        line-height: 24px !important;
        margin-bottom: 2rem !important;
    }

    .platforms-grid .flex .platform-logo-card {
        width: 100%;
        max-width: 280px;
        padding: 1.5rem;
    }

    .platforms-grid .grid {
        gap: 0.75rem;
    }

    .platform-logo-card {
        min-height: 90px;
        padding: 1rem;
    }

    .platform-logo-card img {
        max-height: 45px !important;
    }

    .animate-pulse-slow,
    .animate-pulse-slow-delayed {
        display: none;
    }
}
</style>