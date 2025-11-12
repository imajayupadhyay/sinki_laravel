<template>
    <section class="service-cta-section bg-white pt-16 lg:pt-20 pb-20 lg:pb-24 relative overflow-hidden">
        <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
            <!-- CTA Card Container with spacing -->
            <div class="cta-card-wrapper px-2 sm:px-4 lg:px-16">
                <!-- CTA Card with Background Image -->
                <div class="cta-card relative rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-8 sm:p-10 md:p-12 lg:p-16 text-center overflow-hidden shadow-lg min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
                    <!-- Background Image -->
                    <div class="absolute inset-0 z-0">
                        <img :src="backgroundImage"
                             alt="Background"
                             class="w-full h-full object-cover rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]">
                    </div>

                    <!-- Content -->
                    <div class="relative z-10 max-w-[1469px] mx-auto h-full flex flex-col justify-center">
                        <!-- Main Heading -->
                        <h2 class="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] 2xl:text-[60px] leading-tight sm:leading-tight md:leading-tight lg:leading-[1.1] xl:leading-[1.1] 2xl:leading-[66px] mb-4 sm:mb-5 md:mb-6 animate-slide-up px-2 sm:px-4 md:px-6">
                            {{ title }}
                        </h2>

                        <!-- Description -->
                        <p class="text-white text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-relaxed sm:leading-relaxed md:leading-[1.6] lg:leading-[1.5] xl:leading-[36px] mb-8 sm:mb-9 md:mb-10 max-w-[95%] sm:max-w-[90%] md:max-w-[770px] mx-auto animate-slide-up-delayed px-2 sm:px-4">
                            {{ description }}
                        </p>

                        <!-- CTA Button -->
                        <div class="animate-fade-in-up">
                            <a
                                :href="ctaLink"
                                class="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-brand-red border-2 border-brand-red rounded-full text-white text-base sm:text-lg font-bold capitalize hover:bg-transparent hover:text-brand-white transition-all duration-300 btn-hover-effect shadow-lg hover:shadow-2xl group"
                            >
                                <span class="whitespace-nowrap">{{ ctaText }}</span>
                                <svg class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Props for customization
const props = defineProps({
    title: {
        type: String,
        default: 'Ready to Get More from Databricks?'
    },
    description: {
        type: String,
        default: "Let's simplify your Databricks journey, and turn data into real results."
    },
    ctaText: {
        type: String,
        default: 'Get Started Now'
    },
    ctaLink: {
        type: String,
        default: '/contact'
    },
    backgroundImage: {
        type: String,
        default: '/images/heroobannersinki.png'
    }
});
</script>

<style scoped>
/* Font Family - Instrument Sans */
.service-cta-section {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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

/* Animation keyframes */
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

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Animation classes */
.animate-slide-up {
    animation: slideUp 0.8s ease-out 0.2s both;
}

.animate-slide-up-delayed {
    animation: slideUp 0.8s ease-out 0.4s both;
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out 0.6s both;
}

/* CTA Card Styles */
.cta-card {
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cta-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

/* Background Image Container */
.cta-card .absolute.inset-0.z-0 {
    z-index: 0;
}

.cta-card .absolute.inset-0.z-0 img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Content should be above background */
.cta-card .relative.z-10 {
    z-index: 10 !important;
    position: relative;
}

/* Button hover effect */
.btn-hover-effect {
    position: relative;
    overflow: hidden;
}

.btn-hover-effect::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn-hover-effect:hover::before {
    width: 300px;
    height: 300px;
}

/* Ensure content is above effects - but not the background image container */
.cta-card > div.relative {
    position: relative;
}

/* Responsive Typography - Fine-tuned */
@media (max-width: 1536px) {
    h2 {
        font-size: clamp(2.5rem, 5vw, 4rem);
    }

    p {
        font-size: clamp(1.125rem, 2vw, 1.5rem);
    }
}

@media (max-width: 1280px) {
    .cta-card {
        padding: 3rem 2rem;
    }

    h2 {
        font-size: clamp(2rem, 4.5vw, 3.5rem);
    }

    p {
        font-size: clamp(1rem, 1.8vw, 1.375rem);
    }
}

@media (max-width: 1024px) {
    .service-cta-section {
        padding-bottom: 3rem;
    }

    .cta-card {
        padding: 2.5rem 1.5rem;
    }

    h2 {
        font-size: clamp(1.75rem, 4vw, 3rem);
        margin-bottom: 1.25rem;
    }

    p {
        font-size: clamp(0.9375rem, 1.6vw, 1.25rem);
        margin-bottom: 2rem;
    }
}

@media (max-width: 768px) {
    .service-cta-section {
        padding-bottom: 2.5rem;
    }

    .cta-card-wrapper {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .cta-card {
        padding: 2rem 1.25rem;
        border-radius: 20px;
    }

    h2 {
        font-size: clamp(1.5rem, 3.5vw, 2.25rem);
        margin-bottom: 1rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    p {
        font-size: clamp(0.875rem, 1.5vw, 1.125rem);
        margin-bottom: 1.75rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .btn-hover-effect {
        padding: 0.75rem 1.5rem;
        font-size: 0.9375rem;
    }
}

@media (max-width: 640px) {
    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .service-cta-section {
        padding-bottom: 2rem;
    }

    .cta-card-wrapper {
        padding-left: 0.25rem;
        padding-right: 0.25rem;
    }

    .cta-card {
        padding: 1.75rem 1rem;
        border-radius: 18px;
    }

    h2 {
        font-size: clamp(1.375rem, 6vw, 1.875rem);
        margin-bottom: 0.75rem;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        word-wrap: break-word;
        hyphens: auto;
    }

    p {
        font-size: clamp(0.8125rem, 3.5vw, 1rem);
        margin-bottom: 1.5rem;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
    }

    .btn-hover-effect {
        padding: 0.65rem 1.25rem;
        font-size: 0.875rem;
        gap: 0.5rem;
    }

    .btn-hover-effect svg {
        width: 1.25rem;
        height: 1.25rem;
    }
}

@media (max-width: 480px) {
    .cta-card {
        padding: 1.5rem 0.875rem;
    }

    h2 {
        font-size: clamp(1.25rem, 5.5vw, 1.625rem);
        line-height: 1.3;
    }

    p {
        font-size: clamp(0.75rem, 3.2vw, 0.9375rem);
        line-height: 1.5;
    }

    .btn-hover-effect {
        padding: 0.6rem 1rem;
        font-size: 0.8125rem;
    }
}

/* Extra small devices */
@media (max-width: 360px) {
    .cta-card {
        padding: 1.25rem 0.75rem;
    }

    h2 {
        font-size: 1.125rem;
        line-height: 1.35;
    }

    p {
        font-size: 0.75rem;
        line-height: 1.5;
        margin-bottom: 1.25rem;
    }

    .btn-hover-effect {
        padding: 0.5rem 0.875rem;
        font-size: 0.75rem;
    }

    .btn-hover-effect span {
        font-size: 0.75rem;
    }
}

/* Ensure text remains readable on all screen sizes */
h2, p {
    text-wrap: balance;
}

/* Touch device adjustments */
@media (hover: none) {
    .cta-card:hover {
        transform: none;
    }

    .cta-card:active {
        transform: translateY(-3px);
    }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .cta-card {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    }
}
</style>