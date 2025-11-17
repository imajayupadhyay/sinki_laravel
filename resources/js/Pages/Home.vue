<template>
    <div class="min-h-screen bg-white">
        <Head title="Sinki.ai: Your Databricks Strategy & Innovation Partner">
            <meta name="description" content="At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes." />
        </Head>

        <!-- Header Component -->
        <Header />
        
        <!-- Hero Section Component -->
        <Hero />
        
        <!-- Partner Badge Component -->
        <PartnerBadge />
        
        <!-- What We Do Section -->
        <WhatWeDo />
        
        <!-- Outcomes You Can Expect Section -->
        <Outcomes />
        
        <!-- Our Approach Section -->
        <OurApproach />
        <CoreServices />
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
    }
});

// Set canonical URL for homepage
useCanonical('https://www.sinki.ai/');

</script>

<style scoped>
/* Any page-level styles can go here */
</style>