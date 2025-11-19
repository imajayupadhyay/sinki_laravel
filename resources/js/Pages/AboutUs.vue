<template>
    <div class="min-h-screen bg-[#FFFBE5]">
        <!-- Header Navigation -->
        <Header />

        <!-- About Hero Section -->
        <AboutHero />

        <!-- Partner Badge Section -->
        <PartnerBadge />

        <!-- About Story Section -->
        <AboutStorySection
            :title="'Sinki, a Name with a Purpose'"
            :descriptions="[
                'The name <em>Sinki</em> is inspired by <strong>Helsinki</strong> — the beautifully designed city of Finland, where every building, lane, and public square is deliberately planned around the needs of its people. Just like Helsinki, where design serves function and purpose, we believe that <strong>data should be organized, purposeful, and designed to serve the people who rely on it.</strong>',
                'Sinki.ai combines Databricks-certified expertise, strategic data thinking, and hands-on engineering to help enterprises turn their data into a foundation that is reliable, compliant, and ready to deliver real business impact, just like a city built for its citizens.',
                'As Helsinki balances functionality with thoughtful design, Sinki.ai delivers structured, reliable, and actionable data solutions that help organizations make smarter decisions.'
            ]"
            :image-src="'/images/helsinki-placeholder.jpg'"
            :image-alt="'Helsinki city representing our inspiration'"
            :image-position="'left'"
            :background-color="'bg-white'"
        />

        <!-- What We Do Section -->
        <WhatWeDoSection />

        <!-- Our Approach Section -->
        <OurApproachSection />

        <!-- Leadership Section -->
        <LeadershipSection />

        <!-- Why Partner With Us Section -->
        <WhyPartnerWithUs />

        <!-- CTA Section -->
        <ServiceCTA
            title="Wherever you are in your data journey, we can<br />help you move faster."
            description="We'll help you adopt, scale, and succeed with Databricks."
            cta-text="Start A Conversation"
            cta-link="/contact"
            background-image="/images/cta.webp"
        />

        <!-- Future sections will be added here -->
        <!-- <AboutStats /> -->
        <!-- <AboutStory /> -->
        <!-- <AboutValues /> -->
        <!-- <AboutTeam /> -->

        <!-- Footer -->
        <FooterSection />
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import Header from '@/Components/Header.vue';
import FooterSection from '@/Components/FooterSection.vue';
import AboutHero from '@/Components/AboutUs/AboutHero.vue';
import PartnerBadge from '@/Components/Services/ParnerBadge.vue';
import AboutStorySection from '@/Components/AboutUs/AboutStorySection.vue';
import WhatWeDoSection from '@/Components/AboutUs/WhatWeDoSection.vue';
import OurApproachSection from '@/Components/AboutUs/OurApproachSection.vue';
import WhyPartnerWithUs from '@/Components/AboutUs/WhyPartnerWithUs.vue';
import LeadershipSection from '@/Components/AboutUs/LeadershipSection.vue';
import ServiceCTA from '@/Components/Services/ServiceCTA.vue';

// Define page meta
defineOptions({
    layout: null,
});
</script>