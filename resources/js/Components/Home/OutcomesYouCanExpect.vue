<template>
    <section class="outcomes-section relative overflow-hidden py-20 lg:py-32">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                 alt="Background" 
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90"></div>
        </div>

        <div class="container-custom max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
            <!-- Section Label -->
            <div class="mb-6 sm:mb-8 text-center animate-fade-in">
                <span class="text-white text-base sm:text-lg font-medium uppercase tracking-[1.8px]">
                    {{ outcomesSection?.label || 'Outcomes You Can Expect' }}
                </span>
            </div>

            <!-- Main Heading -->
            <h2 class="text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight sm:leading-tight lg:leading-[85.8px] mb-4 sm:mb-6 text-center max-w-full lg:max-w-[1275px] mx-auto animate-slide-up">
                {{ outcomesSection?.heading || 'Real Results You\'ll Achieve With Us' }}
            </h2>

            <!-- Description -->
            <p class="text-white text-lg sm:text-xl lg:text-[30px] leading-relaxed sm:leading-relaxed lg:leading-[45px] mb-12 sm:mb-16 text-center max-w-full lg:max-w-[1145px] mx-auto animate-slide-up-delayed">
                {{ outcomesSection?.description || 'Think outcomes, not overhead. Our expertise ensures Databricks delivers exactly what you need.' }}
            </p>

            <!-- Outcome Cards Grid - Dynamic Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

                <!-- Dynamic Outcome Cards -->
                <div
                    v-for="(item, index) in outcomesSection?.active_items || []"
                    :key="item.id"
                    class="outcome-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[25px] p-6 sm:p-10 hover:bg-white/10 transition-all duration-500 cursor-pointer"
                    :style="{ 'animation-delay': `${0.6 + (index * 0.1)}s` }"
                >
                    <!-- Icon -->
                    <div class="mb-6 sm:mb-8 flex justify-center">
                        <div class="icon-wrapper w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                            <!-- Dynamic Icon -->
                            <div v-html="item.icon_svg" class="flex items-center justify-center"></div>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="text-center">
                        <h3 class="text-white text-xl sm:text-[24px] lg:text-[28px] font-semibold leading-tight sm:leading-[36px] lg:leading-[42px] tracking-[0.48px] lg:tracking-[0.56px] mb-2 sm:mb-3 group-hover:text-brand-red transition-colors duration-300">
                            {{ item.title }}
                        </h3>
                        <p class="text-white text-lg sm:text-[21px] lg:text-[24px] font-normal leading-relaxed sm:leading-[31.5px] lg:leading-[36px] tracking-[0.42px] lg:tracking-[0.48px] opacity-90">
                            {{ item.description }}
                        </p>
                    </div>
                </div>


            </div>
        </div>
    </section>
</template>

<script setup>
// Define props to receive outcomesSection data from parent
const props = defineProps({
    outcomesSection: {
        type: Object,
        default: () => null
    }
});
</script>

<style scoped>
/* Outcomes Section Styles */
.outcomes-section {
    position: relative;
    background: #121212;
}

/* Container Custom */
.container-custom {
    width: 100%;
    max-w: 1920px;
    margin: 0 auto;
}

/* Brand Colors */
.bg-brand-red {
    background-color: #FF3621;
}

.text-brand-red {
    color: #FF3621;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fadeIn 0.8s ease-out;
}

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
    animation: slideUp 0.8s ease-out 0.2s;
    animation-fill-mode: backwards;
}

.animate-slide-up-delayed {
    animation: slideUp 0.8s ease-out 0.4s;
    animation-fill-mode: backwards;
}

/* Enhanced Outcome Card Styles with Glass Effect */
.outcome-card {
    position: relative;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation: slideUp 0.8s ease-out;
    animation-fill-mode: backwards;
    min-height: 320px;
    box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Stagger animation delays */
.outcome-card:nth-child(1) {
    animation-delay: 0.6s;
}

.outcome-card:nth-child(2) {
    animation-delay: 0.7s;
}

.outcome-card:nth-child(3) {
    animation-delay: 0.8s;
}

.outcome-card:nth-child(4) {
    animation-delay: 0.9s;
}

.outcome-card:nth-child(5) {
    animation-delay: 1s;
}

.outcome-card:nth-child(6) {
    animation-delay: 1.1s;
}

/* Glass effect enhancement */
.outcome-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 25px;
    background: linear-gradient(135deg, rgba(255, 54, 33, 0.1) 0%, transparent 50%, rgba(255, 54, 33, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 1;
}

.outcome-card:hover::before {
    opacity: 1;
}

/* Card Hover Effects */
.outcome-card:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 54, 33, 0.3);
    transform: translateY(-5px);
    box-shadow:
        0 15px 45px rgba(255, 54, 33, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* Icon Wrapper Styles */
.icon-wrapper {
    position: relative;
    box-shadow: 0 10px 30px rgba(255, 54, 33, 0.5);
}

.icon-wrapper::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 2px solid #FF3621;
    opacity: 0;
    transition: all 0.5s ease;
}

.outcome-card:hover .icon-wrapper::after {
    opacity: 0.5;
    inset: -8px;
}

/* Icon Animation */
.outcome-card:hover .icon-wrapper svg {
    animation: iconPulse 0.6s ease;
}

@keyframes iconPulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}

/* Ensure content is above effects */
.outcome-card > * {
    position: relative;
    z-index: 3;
}

/* Responsive Styles */
@media (min-width: 1536px) {
    .container-custom {
        padding-left: 3rem;
        padding-right: 3rem;
    }
}

@media (max-width: 1280px) {
    .outcomes-section h2 {
        font-size: 64px;
        line-height: 70px;
    }
    
    .outcomes-section > div > p {
        font-size: 26px;
        line-height: 39px;
    }

    .outcome-card h3 {
        font-size: 24px !important;
        line-height: 36px !important;
    }

    .outcome-card p {
        font-size: 20px !important;
        line-height: 30px !important;
    }
}

@media (max-width: 1024px) {
    .outcomes-section {
        padding: 60px 0;
    }
    
    .outcomes-section h2 {
        font-size: 52px;
        line-height: 58px;
    }
    
    .outcomes-section > div > p {
        font-size: 22px;
        line-height: 33px;
    }

    .outcome-card {
        min-height: auto;
        padding: 2rem;
    }
}

@media (max-width: 768px) {
    .outcomes-section h2 {
        font-size: 40px;
        line-height: 48px;
    }
    
    .outcomes-section > div > p {
        font-size: 20px;
        line-height: 30px;
    }
    
    .icon-wrapper {
        width: 70px !important;
        height: 70px !important;
    }
    
    .icon-wrapper svg {
        width: 36px !important;
        height: 36px !important;
    }
    
    .outcome-card h3 {
        font-size: 22px !important;
        line-height: 32px !important;
    }
    
    .outcome-card p {
        font-size: 18px !important;
        line-height: 27px !important;
    }
}

@media (max-width: 640px) {
    .outcomes-section {
        padding: 40px 0;
    }
    
    .outcomes-section h2 {
        font-size: 32px;
        line-height: 40px;
    }
    
    .outcomes-section > div > p {
        font-size: 18px;
        line-height: 27px;
    }
    
    .outcome-card {
        padding: 1.5rem;
    }
}

@media (max-width: 480px) {
    .outcomes-section {
        padding: 30px 0;
    }
    
    .outcomes-section h2 {
        font-size: 28px;
        line-height: 36px;
    }
    
    .outcomes-section > div > p {
        font-size: 16px;
        line-height: 24px;
    }
    
    .outcome-card {
        padding: 1.25rem;
    }
    
    .icon-wrapper {
        width: 60px !important;
        height: 60px !important;
    }
    
    .icon-wrapper svg {
        width: 32px !important;
        height: 32px !important;
    }
    
    .outcome-card h3 {
        font-size: 20px !important;
        line-height: 28px !important;
    }
    
    .outcome-card p {
        font-size: 16px !important;
        line-height: 24px !important;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .outcome-card,
    .animate-fade-in,
    .animate-slide-up,
    .animate-slide-up-delayed {
        animation: none;
        opacity: 1;
    }
    
    .outcome-card:hover {
        transform: none;
    }
    
    .icon-wrapper {
        transition: none;
    }
}
</style>