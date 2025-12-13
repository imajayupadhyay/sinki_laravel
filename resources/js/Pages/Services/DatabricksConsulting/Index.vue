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

        <!-- Global Brands Section -->
        <GlobalBrandsSection :brands="globalBrands" />

        <!-- Professional Services Section -->
        <ProfessionalServicesSection />

        <!-- Why Choose Databricks Section -->
        <WhyChooseDatabricksSection />

        <!-- CTA Section -->
        <CTASection
            :title="'Unlock the full potential of Databricks with expert-led guidance built for enterprise scale.'"
            :ctaText="'Book A Free Strategy Call'"
            :ctaLink="'/contact'"
            @cta-click="handleCTAClick"
        />

        <!-- All Databricks Solutions Section -->
        <AllSolutionsSection />

        <!-- How Databricks Simplifies Section -->
        <HowDatabricksSection />

        <!-- Core Strengths Section -->
        <CoreStrengthsSection @cta-click="handleCoreStrengthsCTA" />

        <!-- Accelerators Section -->
        <AcceleratorsSection />

        <!-- Business Results Section -->
        <BusinessResultsSection />

        <!-- CTA Section 2 -->
        <CTASection
            :title="'Start Building a High-Performing Databricks Environment'"
            :subtitle="'Leverage battle-tested frameworks, accelerators, and experience trusted by global enterprises.'"
            :ctaText="'Talk To Our Experts'"
            :ctaLink="'/contact'"
            :backgroundImage="'/images/databricks-cta-bg.jpg'"
            @cta-click="handleCTAClick"
        />

        <!-- Delivery Approach Section -->
        <DeliveryApproachSection />

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
import GlobalBrandsSection from '@/Components/DatabricksConsulting/GlobalBrandsSection.vue';
import ProfessionalServicesSection from '@/Components/DatabricksConsulting/ProfessionalServicesSection.vue';
import WhyChooseDatabricksSection from '@/Components/DatabricksConsulting/WhyChooseDatabricksSection.vue';
import AllSolutionsSection from '@/Components/DatabricksConsulting/AllSolutionsSection.vue';
import HowDatabricksSection from '@/Components/DatabricksConsulting/HowDatabricksSection.vue';
import CoreStrengthsSection from '@/Components/DatabricksConsulting/CoreStrengthsSection.vue';
import AcceleratorsSection from '@/Components/DatabricksConsulting/AcceleratorsSection.vue';
import BusinessResultsSection from '@/Components/DatabricksConsulting/BusinessResultsSection.vue';
import DeliveryApproachSection from '@/Components/DatabricksConsulting/DeliveryApproachSection.vue';
import CTASection from '@/Components/DatabricksConsulting/CTASection.vue';
import { useCanonical } from '@/composables/useCanonical.js';

// Set canonical URL for Databricks consulting page
useCanonical('https://www.sinki.ai/services/databricks-consulting');

const props = defineProps({
    // Props will be added as needed for each section
});

// Global brands data (using placeholders for now)
const globalBrands = [
    { name: 'TATA TMG', logo: '/images/placeholder-tata.png' },
    { name: 'Adobe', logo: '/images/placeholder-adobe.png' },
    { name: 'LaLiga', logo: '/images/placeholder-laliga.png' },
    { name: 'Shell', logo: '/images/placeholder-shell.png' },
    { name: 'Comcast', logo: '/images/placeholder-comcast.png' },
    { name: 'AT&T', logo: '/images/placeholder-att.png' }
];

const handleHeroCTA = () => {
    // Handle hero CTA click - can be customized
    console.log('Hero CTA clicked');
};

const handleCTAClick = () => {
    // Handle CTA section click - can be customized
    console.log('CTA section clicked');
};

const handleCoreStrengthsCTA = () => {
    // Handle core strengths CTA click - can be customized
    console.log('Core Strengths CTA clicked');
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