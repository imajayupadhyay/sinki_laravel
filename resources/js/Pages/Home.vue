<template>
    <div class="min-h-screen bg-white">
        <Head title="Home - Databricks Consulting Services" />
        
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
</script>

<style scoped>
/* Any page-level styles can go here */
</style>