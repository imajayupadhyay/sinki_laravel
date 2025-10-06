<template>
    <section id="approach" class="approach-section bg-white py-20 lg:py-32 relative overflow-hidden">
        <div class="container-custom max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                <!-- Left Content -->
                <div class="approach-content">
                    <!-- Section Label -->
                    <div class="mb-6 sm:mb-8 animate-fade-in">
                        <span class="text-brand-dark text-base sm:text-lg font-medium uppercase tracking-[1.8px]">
                            Our Approach
                        </span>
                    </div>

                    <!-- Main Heading -->
                    <h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight sm:leading-tight lg:leading-[85.8px] mb-4 sm:mb-6 max-w-full lg:max-w-[925px] animate-slide-up">
                        How We Make Databricks Work for You
                    </h2>

                    <!-- Description -->
                    <p class="text-brand-dark text-lg sm:text-xl lg:text-[30px] leading-relaxed sm:leading-relaxed lg:leading-[45px] mb-8 sm:mb-12 max-w-full lg:max-w-[747px] animate-slide-up-delayed">
                        Our proven 3-step approach ensures Databricks adapts to your business needs, not the other way around.
                    </p>
                </div>

                <!-- Right Content - Flow Diagram -->
                <div class="approach-diagram relative animate-slide-in-right p-2">
                    <!-- Responsive Flow Diagram Images -->
                    <div class="diagram-container relative w-full h-[400px] sm:h-[500px] lg:h-[700px] flex items-center justify-center">

                        <!-- Infographic Image -->
                        <img 
                            src="/images/Infographic.png"
                            alt="Our 3-Step Approach"
                            class="w-full h-full object-contain transition-all duration-300 hover:scale-105"
                        />

                    </div>

                    <!-- Decorative Elements -->
                    <div class="absolute -top-10 -right-10 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl animate-pulse-slow"></div>
                    <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
// No props needed
</script>

<style scoped>
/* Approach Section Styles */
.approach-section {
    position: relative;
    background: #ffffff;
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

.bg-brand-red {
    background-color: #FF3621;
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

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(60px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-slide-in-right {
    animation: slideInRight 1s ease-out 0.6s;
    animation-fill-mode: backwards;
}

/* Pulse animations for decorative elements */
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

.animate-pulse-slow {
    animation: pulseSlow 4s ease-in-out infinite;
}

.animate-pulse-slow-delayed {
    animation: pulseSlowDelayed 5s ease-in-out infinite;
    animation-delay: 1s;
}

/* Diagram Container */
.diagram-container {
    position: relative;
    transition: transform 0.3s ease;
}

.diagram-container:hover {
    transform: scale(1.02);
}

.diagram-container img {
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
    transition: all 0.3s ease;
}

.diagram-container:hover img {
    filter: drop-shadow(0 15px 40px rgba(255, 54, 33, 0.2));
    transform: scale(1.05);
}

/* Responsive Styles */
@media (min-width: 1536px) {
    .container-custom {
        padding-left: 3rem;
        padding-right: 3rem;
    }

    .diagram-container {
        height: 700px;
    }
}

@media (max-width: 1536px) {
    .diagram-container {
        height: 600px;
    }
}

@media (max-width: 1280px) {
    .approach-section h2 {
        font-size: 64px;
        line-height: 70px;
    }
    
    .approach-section p {
        font-size: 26px;
        line-height: 39px;
    }

    .diagram-container {
        height: 550px;
    }
}

@media (max-width: 1024px) {
    .approach-section {
        padding: 60px 0;
    }
    
    .approach-section h2 {
        font-size: 52px;
        line-height: 58px;
    }
    
    .approach-section p {
        font-size: 22px;
        line-height: 33px;
    }

    .diagram-container {
        height: 500px;
    }
}

@media (max-width: 768px) {
    .approach-section h2 {
        font-size: 40px;
        line-height: 48px;
    }
    
    .approach-section p {
        font-size: 20px;
        line-height: 30px;
    }

    .diagram-container {
        height: 450px;
    }
}

@media (max-width: 640px) {
    .approach-section {
        padding: 40px 0;
    }
    
    .approach-section h2 {
        font-size: 32px;
        line-height: 40px;
    }
    
    .approach-section p {
        font-size: 18px;
        line-height: 27px;
    }

    .diagram-container {
        height: 400px;
    }
}

@media (max-width: 480px) {
    .approach-section {
        padding: 30px 0;
    }
    
    .approach-section h2 {
        font-size: 28px;
        line-height: 36px;
    }
    
    .approach-section p {
        font-size: 16px;
        line-height: 24px;
    }

    .diagram-container {
        height: 350px;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .animate-fade-in,
    .animate-slide-up,
    .animate-slide-up-delayed,
    .animate-slide-in-right {
        animation: none;
        opacity: 1;
    }
    
    .diagram-container:hover {
        transform: none;
    }
    
    .diagram-container img {
        transition: none;
    }
}
</style>