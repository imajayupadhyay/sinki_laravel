<template>
    <section class="what-we-do-section bg-white py-20 lg:py-32 relative overflow-hidden">
        <!-- Animated Background Elements -->
        <div class="absolute top-10 right-10 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-10 left-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl animate-pulse-delayed"></div>

        <div class="container-custom max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
            <!-- Section Label -->
            <div class="mb-6 sm:mb-8 animate-fade-in ml-0 sm:ml-3">
                <span class="text-brand-dark text-base sm:text-lg font-medium uppercase tracking-[1.8px]">
                    What We Do
                </span>
            </div>

            <!-- Main Heading -->
            <h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[78px] leading-tight sm:leading-tight lg:leading-[85.8px] mb-4 sm:mb-6 max-w-full lg:max-w-[1167px] ml-0 sm:ml-3 animate-slide-up">
                We Simplify Your Databricks Journey End-to-End
            </h2>

            <!-- Description -->
            <p class="text-brand-dark text-lg sm:text-xl lg:text-[30px] leading-relaxed sm:leading-relaxed lg:leading-[45px] mb-12 sm:mb-16 max-w-full lg:max-w-[1074px] ml-0 sm:ml-3 animate-slide-up-delayed">
                Wherever you are in your Databricks journey, planning, migrating, or scaling, we help you move faster and with confidence.
            </p>

            <!-- Service Cards Grid - 3 Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-0 sm:px-3">
                
                <!-- Card 1: Strategy & Planning -->
                <div class="service-card group bg-white border border-black/10 rounded-[15px] p-6 sm:p-8 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                    <div class="flex items-start gap-4 sm:gap-6">
                        <!-- Icon Left -->
                        <div class="flex-shrink-0">
                            <div class="icon-wrapper w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                                <!-- Target/Bullseye Icon -->
                                <svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10"/>
                                    <circle cx="12" cy="12" r="6"/>
                                    <circle cx="12" cy="12" r="2"/>
                                </svg>
                            </div>
                        </div>
                        
                        <!-- Content Right -->
                        <div class="card-content flex-1">
                            <h3 class="text-brand-dark text-xl sm:text-[24px] font-semibold leading-tight sm:leading-[36px] tracking-[0.48px] mb-2 group-hover:text-brand-red transition-colors duration-300">
                                Strategy & Planning
                            </h3>
                            <p class="text-brand-dark text-lg sm:text-[21px] font-normal leading-relaxed sm:leading-[31.5px] tracking-[0.42px]">
                                Design data & AI roadmaps tailored to your business goals
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Implementation & Migration -->
                <div class="service-card group bg-white border border-black/10 rounded-[15px] p-6 sm:p-8 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                    <div class="flex items-start gap-4 sm:gap-6">
                        <!-- Icon Left -->
                        <div class="flex-shrink-0">
                            <div class="icon-wrapper w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                                <!-- Rocket/Deploy Icon -->
                                <svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                        </div>
                        
                        <!-- Content Right -->
                        <div class="card-content flex-1">
                            <h3 class="text-brand-dark text-xl sm:text-[24px] font-semibold leading-tight sm:leading-[36px] tracking-[0.48px] mb-2 group-hover:text-brand-red transition-colors duration-300">
                                Implementation & Migration
                            </h3>
                            <p class="text-brand-dark text-lg sm:text-[21px] font-normal leading-relaxed sm:leading-[31.5px] tracking-[0.42px]">
                                 Migrate workloads and deploy scalable, reliable data systems
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Support & Enablement -->
                <div class="service-card group bg-white border border-black/10 rounded-[15px] p-6 sm:p-8 hover:border-brand-red transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
                    <div class="flex items-start gap-4 sm:gap-6">
                        <!-- Icon Left -->
                        <div class="flex-shrink-0">
                            <div class="icon-wrapper w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                                <!-- Support/Headset Icon -->
                                <svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                                </svg>
                            </div>
                        </div>
                        
                        <!-- Content Right -->
                        <div class="card-content flex-1">
                            <h3 class="text-brand-dark text-xl sm:text-[24px] font-semibold leading-tight sm:leading-[36px] tracking-[0.48px] mb-2 group-hover:text-brand-red transition-colors duration-300">
                                Support & Enablement
                            </h3>
                            <p class="text-brand-dark text-lg sm:text-[21px] font-normal leading-relaxed sm:leading-[31.5px] tracking-[0.42px]">
                                Train teams and optimize Databricks adoption for long-term success
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
// No props needed
</script>

<style scoped>
/* What We Do Section Styles */
.what-we-do-section {
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

.text-brand-red {
    color: #FF3621;
}

.border-brand-red {
    border-color: #FF3621;
}

/* Animated Background Pulse */
@keyframes pulse-delayed {
    0%, 100% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.1);
    }
}

.animate-pulse-delayed {
    animation: pulse-delayed 4s ease-in-out infinite;
    animation-delay: 1s;
}

/* Fade In Animation */
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

/* Slide Up Animations */
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

/* Service Card Styles */
.service-card {
    position: relative;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation: slideUp 0.8s ease-out;
    animation-fill-mode: backwards;
}

.service-card:nth-child(1) {
    animation-delay: 0.6s;
}

.service-card:nth-child(2) {
    animation-delay: 0.8s;
}

.service-card:nth-child(3) {
    animation-delay: 1s;
}

/* Card Hover Effects */
.service-card:hover {
    transform: translateY(-8px);
}

/* Icon Wrapper Effects */
.icon-wrapper {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Card Content */
.card-content h3 {
    transition: all 0.3s ease;
}

.service-card:hover .card-content h3 {
    transform: translateX(5px);
}

/* Responsive Styles */
@media (min-width: 1536px) {
    .container-custom {
        padding-left: 3rem;
        padding-right: 3rem;
    }
}

@media (max-width: 1280px) {
    .what-we-do-section h2 {
        font-size: 64px;
        line-height: 70px;
    }
    
    .what-we-do-section > div > p {
        font-size: 26px;
        line-height: 39px;
    }
}

@media (max-width: 1024px) {
    .what-we-do-section {
        padding: 60px 0;
    }
    
    .what-we-do-section h2 {
        font-size: 52px;
        line-height: 58px;
    }
    
    .what-we-do-section > div > p {
        font-size: 22px;
        line-height: 33px;
    }
}

@media (max-width: 768px) {
    .what-we-do-section h2 {
        font-size: 40px;
        line-height: 48px;
    }
    
    .what-we-do-section > div > p {
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
    
    .service-card h3 {
        font-size: 22px !important;
    }
    
    .service-card p {
        font-size: 18px !important;
        line-height: 27px !important;
    }
}

@media (max-width: 640px) {
    .what-we-do-section {
        padding: 40px 0;
    }
    
    .what-we-do-section h2 {
        font-size: 32px;
        line-height: 40px;
    }
    
    .what-we-do-section > div > p {
        font-size: 18px;
        line-height: 27px;
    }
    
    .service-card {
        padding: 1.5rem !important;
    }
}

@media (max-width: 480px) {
    .what-we-do-section {
        padding: 30px 0;
    }
    
    .what-we-do-section h2 {
        font-size: 28px;
        line-height: 36px;
    }
    
    .what-we-do-section > div > p {
        font-size: 16px;
        line-height: 24px;
    }
    
    .service-card {
        padding: 1.25rem !important;
    }
    
    .icon-wrapper {
        width: 60px !important;
        height: 60px !important;
    }
    
    .icon-wrapper svg {
        width: 32px !important;
        height: 32px !important;
    }
    
    .service-card h3 {
        font-size: 18px !important;
        line-height: 26px !important;
    }
    
    .service-card p {
        font-size: 16px !important;
        line-height: 24px !important;
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .service-card,
    .animate-fade-in,
    .animate-slide-up,
    .animate-slide-up-delayed {
        animation: none;
        opacity: 1;
    }
    
    .service-card:hover {
        transform: none;
    }
    
    .icon-wrapper {
        transition: none;
    }
}
</style>