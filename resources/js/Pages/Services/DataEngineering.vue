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



           <!-- Unlock the Full Potential Section -->
        <ImageContentSection
            title="Unlock the Full Potential of Your Data"
            subtitle="Build Smarter, Faster, and Future-Ready Data Systems"
            :descriptions="[
                'Data Engineering & Modernization is about turning your raw data into a dependable, scalable foundation that drives business outcomes. From robust pipelines to Lakehouse architectures, we help enterprises using Databricks organize, govern, and optimize their data for analytics, AI, and smarter decision-making.',
                'At Sinki.ai, our Databricks-powered solutions simplify complexity, accelerate insights, and give your teams the confidence to act on data faster, smarter, and with measurable impact.'
            ]"
            image-src="/images/serviceside.webp"
            image-alt="Data Engineering Services"
            image-position="left"
            cta-text="Start Your Transformation"
            background-color="bg-gray-50"
            @cta-click="handleCtaClick"
        />

        <!-- Our Data Engineering Services Section -->
        <ServicesGrid
            title="Our Data Engineering & Modernization Services"
            description="We offer a comprehensive suite of data engineering and modernization services."
            :services="dataEngineeringServices"
        />

        <!-- Our Approach Section -->
        <OurApproach />

        <!-- Key Benefits Section -->
        <KeyBenefits />

        <!-- Platforms We Work With Section -->
        <PlatformsWeWorkWith
            section-id="platforms-data-engineering"
            section-label="Platforms We Work With"
            title="Built on the Platforms You Trust"
            description="We bring Databricks to life on the enterprise platforms you already rely on."
        />

        <!-- Why Choose Us Section -->
        <WhyChooseUs
            title="Why Choose us for your Data Engineering needs?"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />

        <!-- Service CTA Section -->
        <ServiceCTA
            title="Ready to Get More from Databricks?"
            description="Let's simplify your Databricks journey, and turn data into real results."
            cta-text="Get Started Now"
            cta-link="/contact"
            background-image="/images/cta.webp"
        />

        <!-- Additional Sections Will Go Here -->
    

        
        <!-- Footer Section -->
        <FooterSection />
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import Header from '@/Components/Header.vue';
import ServiceHero from '@/Components/Services/ServiceHero.vue';
import ParnerBadge from '@/Components/Services/ParnerBadge.vue';
import ImageContentSection from '@/Components/Services/ImageContentSection.vue';
import ServicesGrid from '@/Components/Services/ServicesGrid.vue';
import OurApproach from '@/Components/Services/OurApproach.vue';
import KeyBenefits from '@/Components/Services/KeyBenefits.vue';
import PlatformsWeWorkWith from '@/Components/Services/PlatformsWeWorkWith.vue';
import WhyChooseUs from '@/Components/Services/WhyChooseUs.vue';
import ServiceCTA from '@/Components/Services/ServiceCTA.vue';
import FooterSection from '@/Components/FooterSection.vue';

// Hero background image - you can change this to your uploaded image path
const heroBackgroundImage = '/images/herobannerservice.webp';

// Data Engineering Services Data
const dataEngineeringServices = [
    {
        title: "Data Pipelines",
        description: "We build reliable batch and streaming pipelines using Delta Lake and Auto Loader, ensuring your data flows efficiently from source to target, ready for analytics and AI.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>`
    },
    {
        title: "Data Orchestration",
        description: "Automate and manage workflows with Databricks Workflows. From job scheduling to monitoring, we ensure your pipelines run smoothly and are fully auditable.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>`
    },
    {
        title: "Data Integration",
        description: "Seamlessly connect diverse sources, databases, APIs, streaming data, or third-party SaaS into Databricks. We use tools like Unity Catalog and Delta Live Tables to maintain secure, consistent access.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
        </svg>`
    },
    {
        title: "Data Migration",
        description: "We execute phased, low-risk migrations to Databricks Lakehouse architecture, utilizing tools like Auto Loader and Delta Lake to ensure data integrity, minimal downtime, and business continuity.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>`
    },
    {
        title: "Data Modernization",
        description: "Upgrade legacy systems with Lakehouse architecture, leveraging Delta Lake for ACID transactions, partitioning strategies for performance, decoupled compute for scalability, & cost management best practices.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>`
    },
    {
        title: "Data Lakehouse Consulting",
        description: "Our experts provide guidance on architecture, modeling, governance, and analytics integration, ensuring your Lakehouse is optimized for insights, BI, and AI initiatives.",
        icon: `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>`
    }
];

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