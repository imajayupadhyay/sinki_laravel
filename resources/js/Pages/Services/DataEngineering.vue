<template>
    <div class="min-h-screen bg-white">
        <Head title="Data Engineering & Modernization Services | Sinki.ai">
            <meta name="description" content="We help enterprises design, modernize, and manage data systems that accelerate insights, drive innovation, and optimize costs." />
        </Head>

        <!-- Header Component -->
        <Header />
        
        <!-- Service Hero Section -->
        <ServiceHero
            title="Data Engineering & Modernization Services"
            subtitle="We help enterprises design, modernize, and manage data systems that accelerate insights, drive innovation, and optimize costs."
            cta-text="Talk To Our Experts"
            :background-image="heroBackgroundImage"
            background-color="#121212"
            overlay-gradient="linear-gradient(180deg, rgba(18,18,18,0.4) 0%, rgba(18,18,18,0.4) 100%)"
            min-height="95vh"
            title-classes="text-[5rem]"
            subtitle-classes="text-[1.25rem] sm:text-[1.375rem] md:text-[1.5rem] lg:text-[1.625rem] xl:text-[1.75rem] leading-[1.6]"
            :show-decorative-elements="true"
            @cta-click="handleCtaClick"
        />

        <!-- Partner Badge Section -->
        <ParnerBadge />

        <!-- Additional Sections Will Go Here -->
        <!-- You can add more sections as needed -->
        
        <!-- Example: Service Features Section (Placeholder) -->
        <section class="py-20 bg-gray-50">
            <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
                <div class="max-w-[1518px] mx-auto text-center">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
                        Our Expertise
                    </h2>
                    <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                        More sections will be added here based on your Figma designs.
                    </p>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <CTASection />
        
        <!-- Footer Section -->
        <FooterSection />
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import Header from '@/Components/Header.vue';
import ServiceHero from '@/Components/Services/ServiceHero.vue';
import ParnerBadge from '@/Components/Services/ParnerBadge.vue';
import CTASection from '@/Components/CTASection.vue';
import FooterSection from '@/Components/FooterSection.vue';

// Hero background image - you can change this to your uploaded image path
const heroBackgroundImage = '/images/herobannerservice.webp';

// Handle CTA button click
const handleCtaClick = () => {
    // You can implement Calendly modal or redirect to contact page
    // Example: Open Calendly modal (if you have it set up in your Header component)
    window.Calendly?.initPopupWidget({
        url: 'https://calendly.com/your-calendly-link'
    });
    
    // Or redirect to contact page
    // window.location.href = '/contact';
};
</script>

<style scoped>
/* Font Family - Instrument Sans */
* {
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

.text-brand-red {
    color: #FF3621;
}

.bg-brand-red {
    background-color: #FF3621;
}

/* Smooth Scroll */
html {
    scroll-behavior: smooth;
}
</style>