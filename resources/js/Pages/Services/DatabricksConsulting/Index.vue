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
            :backgroundImage="'/images/consulting/ctaconsult1.webp'"
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
            :subtitle="'Move from planning to production with specialists who simplify complexity and engineer reliable, scalable data systems.'"
            :ctaText="'Start Your Databricks Implementation'"
            :ctaLink="'/contact'"
            :backgroundImage="'/images/consulting/ctaconsult2.webp'"
            @cta-click="handleCTAClick"
        />

        <!-- Delivery Approach Section -->
        <DeliveryApproachSection />

        <!-- Industry Challenges Section -->
        <IndustryChallengesSection />

        <!-- Why Trust Sinki Section -->
        <WhyTrustSinkiSection />

        <!-- Final CTA Section -->
        <CTASection
            :title="'Unlock Proven Databricks Solutions for Your Enterprise'"
            :subtitle="'From strategy to scale, get the expertise required to operationalize analytics and AI the right way.'"
            :ctaText="'Start Your Databricks Assessment'"
            :ctaLink="'/contact'"
            :backgroundImage="'/images/consulting/ctaconsult3.webp'"
            @cta-click="handleCTAClick"
        />

        <!-- Technology Stack Section -->
        <TechnologyStackSection />

        <!-- Enterprise Ready CTA Section -->
        <CTASection
            :title="'Ensure Your Databricks Platform Is Enterprise-Ready'"
            :subtitle="'Harden security, governance, and architecture with expert-led modernization support.'"
            :ctaText="'Schedule An Enterprise Review'"
            :ctaLink="'/contact'"
            :backgroundImage="'/images/consulting/ctaconsult1.webp'"
            @cta-click="handleCTAClick"
        />

        <!-- Why Standardize Section -->
        <WhyStandardizeSection />

        <!-- Final Transform CTA Section -->
        <CTASection
            :title="'Transform your data operations with a partner who knows Databricks end-to-end.'"
            :ctaText="'Start Your Databricks Project'"
            :ctaLink="'/contact'"
            :backgroundImage="'/images/consulting/ctaconsult2.webp'"
            @cta-click="handleCTAClick"
        />

        <!-- FAQ Section -->
        <FAQSection />

        <!-- Build Smarter CTA Section -->
        <CTASection
            :title="'Build Smarter, Faster, and More Reliable Data Systems with Sinki.ai.'"
            :subtitle="'We help enterprises unlock value from Databricks without the guesswork or risk.'"
            :ctaText="'Schedule A Strategy Session'"
            :ctaLink="'/contact'"
            :backgroundImage="'/images/consulting/ctaconsult3.webp'"
            @cta-click="handleCTAClick"
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
import GlobalBrandsSection from '@/Components/DatabricksConsulting/GlobalBrandsSection.vue';
import ProfessionalServicesSection from '@/Components/DatabricksConsulting/ProfessionalServicesSection.vue';
import WhyChooseDatabricksSection from '@/Components/DatabricksConsulting/WhyChooseDatabricksSection.vue';
import AllSolutionsSection from '@/Components/DatabricksConsulting/AllSolutionsSection.vue';
import HowDatabricksSection from '@/Components/DatabricksConsulting/HowDatabricksSection.vue';
import CoreStrengthsSection from '@/Components/DatabricksConsulting/CoreStrengthsSection.vue';
import AcceleratorsSection from '@/Components/DatabricksConsulting/AcceleratorsSection.vue';
import BusinessResultsSection from '@/Components/DatabricksConsulting/BusinessResultsSection.vue';
import DeliveryApproachSection from '@/Components/DatabricksConsulting/DeliveryApproachSection.vue';
import IndustryChallengesSection from '@/Components/DatabricksConsulting/IndustryChallengesSection.vue';
import WhyTrustSinkiSection from '@/Components/DatabricksConsulting/WhyTrustSinkiSection.vue';
import TechnologyStackSection from '@/Components/DatabricksConsulting/TechnologyStackSection.vue';
import WhyStandardizeSection from '@/Components/DatabricksConsulting/WhyStandardizeSection.vue';
import FAQSection from '@/Components/DatabricksConsulting/FAQSection.vue';
import CTASection from '@/Components/DatabricksConsulting/CTASection.vue';
import { useCanonical } from '@/composables/useCanonical.js';

// Set canonical URL for Databricks consulting page
useCanonical('https://www.sinki.ai/services/databricks-consulting');

const props = defineProps({
    // Props will be added as needed for each section
});

// Global brands data
const globalBrands = [
    { name: 'TATA TMG', logo: '/images/consulting/tata1mg.webp' },
    { name: 'Adobe', logo: '/images/consulting/adobe.webp' },
    { name: 'LaLiga', logo: '/images/consulting/laliga.webp' },
    { name: 'Shell', logo: '/images/consulting/shell.webp' },
    { name: 'Comcast', logo: '/images/consulting/comcast.webp' },
    { name: 'AT&T', logo: '/images/consulting/AT&T.webp' }
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