<template>
    <div class="min-h-screen bg-white">
        <Head title="Contact Us - Databricks Consulting Services" />

        <!-- Header Component -->
        <HeaderSimple />
        <!-- Contact Hero & Form Section -->
        <ContactHero />
        
        <!-- CTA Section -->
        <ContactCTA />
        
        <!-- Footer Component -->
        <FooterSection />
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import HeaderSimple from '@/Components/HeaderSimple.vue';
import ContactHero from '@/Components/Contact/ContactHero.vue';
import ContactCTA from '@/Components/Contact/ContactCTA.vue';
import FooterSection from '@/Components/FooterSection.vue';
import { useCanonical } from '@/composables/useCanonical.js';

// Set canonical URL for contact page
useCanonical('https://www.sinki.ai/contact');
</script>

<style scoped>
/* Any page-level styles can go here */
</style>