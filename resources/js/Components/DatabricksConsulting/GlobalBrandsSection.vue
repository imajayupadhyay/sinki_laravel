<template>
    <section class="global-brands-section bg-white py-16 sm:py-20 lg:py-24">
        <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
            <div class="max-w-[1720px] mx-auto text-center">
                <!-- Section Title -->
                <h2 class="text-[#121212] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight font-instrument-sans mb-6">
                    Global Brands Accelerating Their Data Future
                    <br class="hidden sm:block">
                    with Databricks
                </h2>

                <!-- Section Subtitle -->
                <p class="text-[#666666] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed font-instrument-sans mb-12 sm:mb-16 lg:mb-20 max-w-6xl mx-auto">
                    Powering high-performance data platforms for some of the world's largest brands.
                </p>

                <!-- Brand Logos Grid -->
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 lg:gap-16 items-center justify-items-center">
                    <!-- TATA TMG Logo -->
                    <div class="brand-logo-wrapper">
                        <img
                            :src="brands[0]?.logo || '/images/placeholder-tata.png'"
                            :alt="brands[0]?.name || 'TATA TMG'"
                            class="brand-logo h-12 sm:h-16 md:h-20 lg:h-24 w-auto max-w-full object-contain transition-all duration-300"
                        />
                    </div>

                    <!-- Adobe Logo -->
                    <div class="brand-logo-wrapper">
                        <img
                            :src="brands[1]?.logo || '/images/placeholder-adobe.png'"
                            :alt="brands[1]?.name || 'Adobe'"
                            class="brand-logo h-12 sm:h-16 md:h-20 lg:h-24 w-auto max-w-full object-contain transition-all duration-300"
                        />
                    </div>

                    <!-- LaLiga Logo -->
                    <div class="brand-logo-wrapper">
                        <img
                            :src="brands[2]?.logo || '/images/placeholder-laliga.png'"
                            :alt="brands[2]?.name || 'LaLiga'"
                            class="brand-logo h-12 sm:h-16 md:h-20 lg:h-24 w-auto max-w-full object-contain transition-all duration-300"
                        />
                    </div>

                    <!-- Shell Logo -->
                    <div class="brand-logo-wrapper">
                        <img
                            :src="brands[3]?.logo || '/images/placeholder-shell.png'"
                            :alt="brands[3]?.name || 'Shell'"
                            class="brand-logo h-12 sm:h-16 md:h-20 lg:h-24 w-auto max-w-full object-contain transition-all duration-300"
                        />
                    </div>

                    <!-- Comcast Logo -->
                    <div class="brand-logo-wrapper">
                        <img
                            :src="brands[4]?.logo || '/images/placeholder-comcast.png'"
                            :alt="brands[4]?.name || 'Comcast'"
                            class="brand-logo h-12 sm:h-16 md:h-20 lg:h-24 w-auto max-w-full object-contain transition-all duration-300"
                        />
                    </div>

                    <!-- AT&T Logo -->
                    <div class="brand-logo-wrapper">
                        <img
                            :src="brands[5]?.logo || '/images/placeholder-att.png'"
                            :alt="brands[5]?.name || 'AT&T'"
                            class="brand-logo h-12 sm:h-16 md:h-20 lg:h-24 w-auto max-w-full object-contain transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    brands: {
        type: Array,
        default: () => [
            { name: 'TATA TMG', logo: '/images/placeholder-tata.png' },
            { name: 'Adobe', logo: '/images/placeholder-adobe.png' },
            { name: 'LaLiga', logo: '/images/placeholder-laliga.png' },
            { name: 'Shell', logo: '/images/placeholder-shell.png' },
            { name: 'Comcast', logo: '/images/placeholder-comcast.png' },
            { name: 'AT&T', logo: '/images/placeholder-att.png' }
        ]
    }
});
</script>

<style scoped>
/* Font Family - Instrument Sans */
.font-instrument-sans {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Container Custom */
.container-custom {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
}

/* Global Brands Section */
.global-brands-section {
    position: relative;
    background-color: #ffffff;
    overflow: hidden;
}

/* Brand Logo Wrapper */
.brand-logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    padding: 0 20px;
    transition: transform 0.3s ease;
}

.brand-logo-wrapper:hover {
    transform: translateY(-4px);
}

/* Brand Logo Styles */
.brand-logo {
    max-height: 80px;
    width: auto;
    object-fit: contain;
    transition: all 0.3s ease;
    opacity: 0.7;
}

.brand-logo:hover {
    opacity: 1;
    transform: scale(1.05);
}

/* Responsive Grid Adjustments */
@media (max-width: 1024px) {
    .global-brands-section .grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .global-brands-section .grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .brand-logo {
        max-height: 60px;
    }

    .brand-logo-wrapper {
        height: 70px;
        padding: 0 10px;
    }
}

@media (max-width: 640px) {
    .global-brands-section {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    .brand-logo {
        max-height: 48px;
    }

    .brand-logo-wrapper {
        height: 60px;
        padding: 0 8px;
    }

    .global-brands-section .grid {
        gap: 1rem;
    }
}

/* Animation for section entrance */
.global-brands-section {
    animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Accessibility */
.brand-logo-wrapper:focus-within {
    outline: 2px solid #FF3621;
    outline-offset: 4px;
    border-radius: 8px;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .brand-logo-wrapper,
    .brand-logo {
        transition: none;
    }

    .brand-logo-wrapper:hover {
        transform: none;
    }

    .brand-logo:hover {
        transform: none;
    }

    .global-brands-section {
        animation: none;
    }
}
</style>