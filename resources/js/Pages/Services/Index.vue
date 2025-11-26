<template>
    <div class="min-h-screen bg-white">
        <Head title="Our Services">
            <meta name="description" content="Explore our comprehensive range of technology services designed to transform your business." />
        </Head>

        <!-- Header Component -->
        <Header />

        <!-- Hero Section -->
        <section class="hero-section relative overflow-hidden pt-32 pb-24">
            <div class="absolute inset-0 bg-gradient-to-b from-[#F6F6E0] via-[#F6F6E0]/90 to-transparent"></div>

            <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] relative z-10">
                <div class="max-w-[1720px] mx-auto text-center">
                    <h1 class="text-[#121212] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-semibold leading-tight font-instrument-sans mb-6">
                        Our Services
                    </h1>
                    <p class="text-[#666666] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed font-instrument-sans max-w-3xl mx-auto">
                        Comprehensive technology solutions to accelerate your digital transformation journey
                    </p>
                </div>
            </div>
        </section>

        <!-- Services Grid -->
        <section class="py-16 bg-white">
            <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
                <div class="max-w-[1720px] mx-auto">
                    <div v-if="servicePages.length === 0" class="text-center py-20">
                        <div class="max-w-md mx-auto">
                            <svg class="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                            </svg>
                            <h2 class="text-2xl font-semibold text-gray-900 mb-2">No Services Available</h2>
                            <p class="text-gray-600">Our service offerings are being updated. Please check back soon.</p>
                        </div>
                    </div>

                    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Link
                            v-for="service in servicePages"
                            :key="service.id"
                            :href="`/services/${service.slug}`"
                            class="group bg-white rounded-[25px] border border-[#E8E8E8] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <!-- Image -->
                            <div class="relative overflow-hidden h-[250px] bg-gray-100">
                                <img
                                    :src="service.hero_background_image || '/images/placeholder-service.jpg'"
                                    :alt="service.title"
                                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    @error="handleImageError"
                                />
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>

                            <!-- Content -->
                            <div class="p-8">
                                <h3 class="text-[#121212] text-2xl font-semibold leading-tight tracking-wide font-instrument-sans mb-4">
                                    {{ service.title }}
                                </h3>

                                <p class="text-[#666666] text-base leading-relaxed font-instrument-sans mb-6">
                                    {{ service.subtitle }}
                                </p>

                                <!-- Learn More Button -->
                                <div class="flex items-center text-[#FF3621] font-semibold text-lg leading-tight tracking-wide font-instrument-sans group-hover:translate-x-2 transition-transform duration-300">
                                    Learn more
                                    <div class="w-[40px] h-[40px] ml-4 flex items-center justify-center overflow-hidden">
                                        <!-- Arrow Line -->
                                        <svg class="absolute transition-transform duration-200 group-hover:translate-x-1" width="34" height="2" viewBox="0 0 34 2" fill="none">
                                            <rect width="33.08" height="1.28" fill="#FF3621"/>
                                        </svg>
                                        <!-- Arrow Head -->
                                        <svg class="relative ml-[23px] transition-transform duration-200 group-hover:translate-x-1" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                            <path d="M10.69 5.945L0 0V11.89L10.69 5.945Z" fill="#FF3621"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer Section -->
        <FooterSection />
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Header from '@/Components/Header.vue';
import FooterSection from '@/Components/FooterSection.vue';
import { useCanonical } from '@/composables/useCanonical.js';

// Set canonical URL for services index page
useCanonical('https://www.sinki.ai/services');

const props = defineProps({
    servicePages: {
        type: Array,
        default: () => []
    }
});

const failedImages = new Set();

const handleImageError = (event) => {
    const imgSrc = event.target.src;

    if (failedImages.has(imgSrc)) {
        console.warn('Image failed to load, hiding:', imgSrc);
        event.target.style.display = 'none';
        return;
    }

    failedImages.add(imgSrc);

    if (imgSrc.includes('placeholder')) {
        event.target.style.display = 'none';
    } else {
        event.target.src = '/images/placeholder-service.jpg';
    }
};
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

/* Brand Colors */
.text-brand-red {
    color: #FF3621;
}

/* Smooth Scroll */
html {
    scroll-behavior: smooth;
}
</style>