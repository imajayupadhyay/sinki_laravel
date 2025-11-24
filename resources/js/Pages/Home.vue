<template>
    <div class="min-h-screen bg-white">
        <Head :title="seoSettings?.title || 'Sinki.ai: Your Databricks Strategy & Innovation Partner'">
            <!-- Basic Meta Tags -->
            <meta name="description" :content="seoSettings?.description || 'At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes.'" />
            <meta name="keywords" :content="seoSettings?.keywords || 'Databricks, Data Analytics, AI Solutions, Business Intelligence'" v-if="seoSettings?.keywords" />

            <!-- Open Graph Meta Tags -->
            <meta property="og:title" :content="seoSettings?.og_title || seoSettings?.title || 'Sinki.ai: Your Databricks Strategy & Innovation Partner'" />
            <meta property="og:description" :content="seoSettings?.og_description || seoSettings?.description || 'At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes.'" />
            <meta property="og:url" :content="seoSettings?.og_url || 'https://www.sinki.ai'" />
            <meta property="og:type" content="website" />
            <meta property="og:image" :content="seoSettings?.og_image_url || '/images/og-default.jpg'" v-if="seoSettings?.og_image_url" />

            <!-- Twitter Meta Tags -->
            <meta name="twitter:card" :content="seoSettings?.twitter_card || 'summary_large_image'" />
            <meta name="twitter:title" :content="seoSettings?.twitter_title || seoSettings?.og_title || seoSettings?.title || 'Sinki.ai: Your Databricks Strategy & Innovation Partner'" />
            <meta name="twitter:description" :content="seoSettings?.twitter_description || seoSettings?.og_description || seoSettings?.description || 'At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes.'" />
            <meta name="twitter:image" :content="seoSettings?.twitter_image_url || seoSettings?.og_image_url || '/images/og-default.jpg'" v-if="seoSettings?.twitter_image_url || seoSettings?.og_image_url" />

            <!-- Custom Head Tags -->
            <template v-if="seoSettings?.custom_head_tags" v-html="seoSettings.custom_head_tags"></template>
        </Head>

        <!-- Header Component -->
        <Header />
        
        <!-- Hero Section Component -->
        <Hero :hero-section="heroSection" />
        
        <!-- Partner Badge Component -->
        <PartnerBadge :partner-badge="partnerBadge" />
        
        <!-- What We Do Section -->
        <WhatWeDo :what-we-do-section="whatWeDoSection" />
        
        <!-- Outcomes You Can Expect Section -->
        <Outcomes :outcomes-section="outcomesSection" />
        
        <!-- Our Approach Section -->
        <OurApproach :our-approach-section="ourApproachSection" />
        <CoreServices :core-services-section="coreServicesSection" />
        <PlatformsSection />
         <!-- What Sets Us Apart Section -->
    <WhatSetsUsApartSection />
    <InsightsResourcesSection :blogs="latestBlogs" />
         <!-- CTA Section - Let's Get Started -->
    <CTASection />
    <FooterSection />
        <!-- Future sections will go here -->
        <!-- <Services /> -->
        <!-- <Platforms /> -->
        <!-- <Insights /> -->
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import Header from '@/Components/Header.vue';
import Hero from '@/Components/Home/Hero.vue';
import PartnerBadge from '@/Components/Home/PartnerBadge.vue';
import WhatWeDo from '@/Components/Home/WhatWeDo.vue';
import Outcomes from '@/Components/Home/OutcomesYouCanExpect.vue';
import OurApproach from '@/Components/Home/OurApproach.vue';
import CoreServices from '@/Components/Home/CoreServices.vue';
import PlatformsSection from '@/Components/Home/PlatformsSection.vue';
import WhatSetsUsApartSection from '@/Components/Home/WhatSetsUsApartSection.vue';
import InsightsResourcesSection from '@/Components/Home/InsightsResourcesSection.vue';
import CTASection from '@/Components/CTASection.vue';
import FooterSection from '@/Components/FooterSection.vue';
import { useCanonical } from '@/composables/useCanonical.js';

// Define props to receive data from the backend
const props = defineProps({
    latestBlogs: {
        type: Array,
        default: () => []
    },
    heroSection: {
        type: Object,
        default: () => null
    },
    partnerBadge: {
        type: Object,
        default: () => null
    },
    whatWeDoSection: {
        type: Object,
        default: () => null
    },
    outcomesSection: {
        type: Object,
        default: () => null
    },
    ourApproachSection: {
        type: Object,
        default: () => null
    },
    coreServicesSection: {
        type: Object,
        default: () => null
    },
    seoSettings: {
        type: Object,
        default: () => null
    }
});

// Set canonical URL for homepage
useCanonical('https://www.sinki.ai/');

</script>

<style scoped>
/* Any page-level styles can go here */
</style>