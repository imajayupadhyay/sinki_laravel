<template>
    <div class="min-h-screen bg-white">
        <Head title="Databricks Consulting Services">
            <meta name="description" content="Expert Databricks consulting services to accelerate your data analytics and AI transformation journey." />
        </Head>

        <!-- Header Component -->
        <Header />

        <!-- Hero Section -->
        <HeroSection @cta-click="handleHeroCTA" />

        <!-- Partner Section -->
        <PartnerSection
            :partnerText="'An Official Databricks Partner'"
            :logoImage="'/images/databricks-dark.webp'"
            :logoAlt="'Databricks Partner Logo'"
        />

        <!-- Additional sections will be added here -->
        <div>
            <!-- Future sections will be added here -->
        </div>

        <!-- Footer Section -->
        <FooterSection />
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import Header from '@/Components/Header.vue';
import FooterSection from '@/Components/FooterSection.vue';
import HeroSection from '@/Components/DatabricksConsulting/HeroSection.vue';
import PartnerSection from '@/Components/DatabricksConsulting/PartnerSection.vue';
import { useCanonical } from '@/composables/useCanonical.js';

// Set canonical URL for Databricks consulting page
useCanonical('https://www.sinki.ai/services/databricks-consulting');

const props = defineProps({
    // Props will be added as needed for each section
});

const handleHeroCTA = () => {
    // Handle hero CTA click - can be customized
    console.log('Hero CTA clicked');
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