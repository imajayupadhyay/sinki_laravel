<template>
    <div class="min-h-screen bg-[#FFFBE5]">
        <Head title="About Sinki.ai | Databricks Experts & Consulting Services">
            <meta name="description" content="We are Databricks experts who support your entire Databricks journey, from platform build-out to GenAI. We modernize your data infrastructure, implement GenAI on Databricks, and accelerate your migration to the Databricks Data Intelligence Platform." />
            <meta name="keywords" content="about sinki.ai, databricks consulting, data engineering experts, helsinki inspired data solutions, certified databricks specialists, enterprise data strategy, lakehouse architecture, data modernization team" />

            <!-- Open Graph / Facebook -->
            <meta property="og:type" content="website" />
            <meta property="og:title" content="About Sinki.ai | Databricks Experts & Consulting Services" />
            <meta property="og:description" content="We are Databricks experts who support your entire Databricks journey, from platform build-out to GenAI. We modernize your data infrastructure, implement GenAI on Databricks, and accelerate your migration to the Databricks Data Intelligence Platform." />
            <meta property="og:url" content="https://www.sinki.ai/about-us" />
            <meta property="og:site_name" content="Sinki.ai" />
            <meta property="og:image" content="https://www.sinki.ai/images/sinki-about-og-image.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <!-- Twitter -->
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="About Sinki.ai | Databricks Experts & Consulting Services" />
            <meta name="twitter:description" content="We are Databricks experts who support your entire Databricks journey, from platform build-out to GenAI. We modernize your data infrastructure, implement GenAI on Databricks, and accelerate your migration to the Databricks Data Intelligence Platform." />
            <meta name="twitter:image" content="https://www.sinki.ai/images/sinki-about-og-image.jpg" />

            <!-- Additional SEO -->
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Sinki.ai" />
            <link rel="canonical" href="https://www.sinki.ai/about-us" />

        </Head>
        <!-- Header Navigation -->
        <Header />

        <!-- About Hero Section -->
        <AboutHero :hero-section="heroSection" />

        <!-- Partner Badge Section -->
        <PartnerBadge :partner-badge="partnerBadge" />

        <!-- About Story Section -->
        <AboutStorySection
            :header-tag="storySection?.header_tag || 'OUR STORY'"
            :title="storySection?.title || 'Sinki, a Name with a Purpose'"
            :subtitle="storySection?.subtitle || ''"
            :descriptions="storySection?.descriptions || [
                'The name <em>Sinki</em> is inspired by <strong>Helsinki</strong> — the beautifully designed city of Finland, where every building, lane, and public square is deliberately planned around the needs of its people. Just like Helsinki, where design serves function and purpose, we believe that <strong>data should be organized, purposeful, and designed to serve the people who rely on it.</strong>',
                'Sinki.ai combines Databricks-certified expertise, strategic data thinking, and hands-on engineering to help enterprises turn their data into a foundation that is reliable, compliant, and ready to deliver real business impact, just like a city built for its citizens.',
                'As Helsinki balances functionality with thoughtful design, Sinki.ai delivers structured, reliable, and actionable data solutions that help organizations make smarter decisions.'
            ]"
            :image-src="storySection?.image_path ? `/storage/${storySection.image_path}` : '/images/our story image.png'"
            :image-alt="storySection?.image_alt || 'Helsinki city representing our inspiration'"
            :image-position="storySection?.image_position || 'left'"
            :background-color="storySection?.background_color || 'bg-white'"
        />

        <!-- What We Do Section -->
        <WhatWeDoSection
            :header-tag="whatWeDoSection?.header_tag || 'HOW WE HELP'"
            :title="whatWeDoSection?.title || 'What We Do'"
            :subtitle="whatWeDoSection?.subtitle || 'We help enterprises harness the full power of Databricks to unify data, analytics, and AI.'"
            :background-image="whatWeDoSection?.background_image"
            :services="whatWeDoSection?.items || []"
        />

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
import { onMounted } from 'vue';

// Props
const props = defineProps({
    heroSection: Object,
    partnerBadge: Object,
    storySection: Object,
    whatWeDoSection: Object
});
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
import { useCanonical } from '@/composables/useCanonical.js';

// Set canonical URL for About Us page
useCanonical('https://www.sinki.ai/about-us');

// Add structured data on component mount
onMounted(() => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sinki.ai",
        "url": "https://www.sinki.ai",
        "logo": "https://www.sinki.ai/images/sinki-logo.png",
        "description": "Expert Databricks consulting and data engineering services helping enterprises turn complex data into actionable intelligence.",
        "foundingDate": "2023",
        "serviceArea": {
            "@type": "Place",
            "name": "Global"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Databricks Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Data Engineering & Modernization",
                        "description": "Design and build resilient lakehouse architectures & automated pipelines"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Data Management & Governance",
                        "description": "Establish strong governance with Unity Catalog-aligned lineage and compliance automation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Data Analytics & Business Intelligence",
                        "description": "Transform raw data into interactive dashboards and insights"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "AI & ML Solutions",
                        "description": "Operationalize AI with scalable, production-ready models"
                    }
                }
            ]
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-XXX-XXX-XXXX",
            "contactType": "customer service",
            "availableLanguage": "English"
        },
        "sameAs": [
            "https://www.linkedin.com/company/sinki-ai",
            "https://twitter.com/sinki_ai"
        ]
    };

    // Create script element and add to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
});

// Define page meta
defineOptions({
    layout: null,
});
</script>