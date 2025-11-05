<template>
    <section class="blog-cta-section bg-white py-8 lg:py-12 relative overflow-hidden">
        <div class="container-custom max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-24">
            <!-- CTA Card Container -->
            <div class="cta-card-wrapper px-2 sm:px-4">
                <!-- CTA Card -->
                <div
                    class="cta-card relative rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-6 sm:p-8 md:p-10 lg:p-12 text-center overflow-hidden shadow-lg min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]"
                    :style="useBackgroundImage ? '' : `background-color: ${backgroundColor}`"
                >
                    <!-- Background Image (conditional) -->
                    <div v-if="useBackgroundImage" class="absolute inset-0 z-0">
                        <img :src="backgroundImage"
                             alt="CTA Background"
                             class="w-full h-full object-cover rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]">
                    </div>

                    <!-- Content -->
                    <div class="relative z-10 max-w-[800px] mx-auto h-full flex flex-col justify-center">
                        <!-- Main Heading -->
                        <h2
                            class="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-tight sm:leading-tight md:leading-tight lg:leading-[1.1] xl:leading-[1.1] mb-3 sm:mb-4 md:mb-5 animate-slide-up px-2 sm:px-4"
                            :class="useBackgroundImage ? 'text-white' : 'text-[#121212]'"
                        >
                            {{ title }}
                        </h2>

                        <!-- Description -->
                        <p
                            class="text-sm sm:text-base md:text-lg lg:text-[20px] xl:text-[22px] leading-relaxed sm:leading-relaxed md:leading-[1.6] lg:leading-[1.5] xl:leading-[32px] mb-6 sm:mb-7 md:mb-8 max-w-[95%] sm:max-w-[90%] md:max-w-[650px] mx-auto animate-slide-up-delayed px-2 sm:px-4"
                            :class="useBackgroundImage ? 'text-white' : 'text-[#666666]'"
                        >
                            {{ description }}
                        </p>

                        <!-- CTA Button -->
                        <div class="animate-fade-in-up">
                            <a
                                :href="buttonUrl"
                                class="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 border-2 rounded-full text-sm sm:text-base md:text-lg font-bold capitalize transition-all duration-300 btn-hover-effect shadow-lg hover:shadow-2xl group"
                                :class="useBackgroundImage ? 'bg-white border-white text-black hover:bg-transparent hover:text-white' : 'bg-black border-black text-white hover:bg-transparent hover:text-black'"
                            >
                                <span class="whitespace-nowrap">{{ buttonText }}</span>
                                <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
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
const props = defineProps({
    title: {
        type: String,
        default: 'Want to Boost Your Business with AI?'
    },
    description: {
        type: String,
        default: 'Let Jellyfish Technologies build powerful generative and predictive AI solutions to streamline your operations and increase ROI.'
    },
    buttonText: {
        type: String,
        default: 'Schedule A Free Consultation'
    },
    buttonUrl: {
        type: String,
        default: '/contact'
    },
    backgroundImage: {
        type: String,
        default: '/images/heroobannersinki.png'
    },
    backgroundColor: {
        type: String,
        default: '#F6F6E0'
    },
    useBackgroundImage: {
        type: Boolean,
        default: false
    }
});
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
.animate-fade-in {
    animation: fadeIn 0.8s ease-out;
}

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
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
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

/* Container Custom */
.container-custom {
    width: 100%;
    margin: 0 auto;
}

/* Responsive Typography */
@media (max-width: 1280px) {
    .cta-card {
        padding: 2.5rem 1.5rem;
    }

    h2 {
        font-size: clamp(1.5rem, 4vw, 2.5rem);
    }

    p {
        font-size: clamp(0.875rem, 1.6vw, 1.125rem);
    }
}

@media (max-width: 1024px) {
    .blog-cta-section {
        padding-bottom: 2.5rem;
        padding-top: 2.5rem;
    }

    .cta-card {
        padding: 2rem 1.25rem;
    }

    h2 {
        font-size: clamp(1.375rem, 3.5vw, 2.25rem);
        margin-bottom: 1rem;
    }

    p {
        font-size: clamp(0.8125rem, 1.4vw, 1rem);
        margin-bottom: 1.75rem;
    }
}

@media (max-width: 768px) {
    .blog-cta-section {
        padding-bottom: 2rem;
        padding-top: 2rem;
    }

    .cta-card-wrapper {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .cta-card {
        padding: 1.75rem 1rem;
        border-radius: 20px;
        min-height: 280px;
    }

    h2 {
        font-size: clamp(1.25rem, 3vw, 1.875rem);
        margin-bottom: 0.75rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    p {
        font-size: clamp(0.75rem, 1.2vw, 0.9375rem);
        margin-bottom: 1.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .btn-hover-effect {
        padding: 0.625rem 1.25rem;
        font-size: 0.8125rem;
    }
}

@media (max-width: 640px) {
    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .blog-cta-section {
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
    }

    .cta-card-wrapper {
        padding-left: 0.25rem;
        padding-right: 0.25rem;
    }

    .cta-card {
        padding: 1.5rem 0.875rem;
        border-radius: 18px;
        min-height: 260px;
    }

    h2 {
        font-size: clamp(1.125rem, 5vw, 1.5rem);
        margin-bottom: 0.625rem;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        word-wrap: break-word;
        hyphens: auto;
    }

    p {
        font-size: clamp(0.6875rem, 3vw, 0.8125rem);
        margin-bottom: 1.25rem;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
    }

    .btn-hover-effect {
        padding: 0.5rem 1rem;
        font-size: 0.75rem;
        gap: 0.5rem;
    }

    .btn-hover-effect svg {
        width: 1rem;
        height: 1rem;
    }
}

@media (max-width: 480px) {
    .cta-card {
        padding: 1.25rem 0.75rem;
        min-height: 240px;
    }

    h2 {
        font-size: clamp(1rem, 4.5vw, 1.375rem);
        line-height: 1.3;
    }

    p {
        font-size: clamp(0.625rem, 2.8vw, 0.75rem);
        line-height: 1.4;
    }

    .btn-hover-effect {
        padding: 0.5rem 0.875rem;
        font-size: 0.6875rem;
    }
}

/* Extra small devices */
@media (max-width: 360px) {
    .cta-card {
        padding: 1rem 0.625rem;
        min-height: 220px;
    }

    h2 {
        font-size: 1rem;
        line-height: 1.35;
    }

    p {
        font-size: 0.625rem;
        line-height: 1.4;
        margin-bottom: 1rem;
    }

    .btn-hover-effect {
        padding: 0.4375rem 0.75rem;
        font-size: 0.625rem;
    }

    .btn-hover-effect span {
        font-size: 0.625rem;
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
        transform: translateY(-2px);
    }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .cta-card {
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    }
}
</style>