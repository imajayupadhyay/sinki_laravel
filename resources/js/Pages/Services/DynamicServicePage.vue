<template>
    <div class="min-h-screen bg-white">
        <Head :title="servicePage.meta_title || servicePage.title">
            <meta v-if="!isPreview" name="description" :content="servicePage.meta_description || servicePage.subtitle" />
            <meta v-if="!isPreview && servicePage.meta_keywords" name="keywords" :content="servicePage.meta_keywords" />

            <!-- Prevent indexing of preview pages -->
            <meta v-if="isPreview" name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
            <meta v-if="isPreview" name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
            <meta v-if="isPreview" name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        </Head>

        <!-- Preview Banner -->
        <div v-if="isPreview" class="bg-yellow-500 text-black px-4 py-2 text-center font-medium">
            <span class="inline-flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                You are viewing a preview of this service page. This is not visible to the public.
            </span>
        </div>

        <!-- Header Component -->
        <Header />

        <!-- Service Hero Section -->
        <ServiceHero
            :title="servicePage.title"
            :subtitle="servicePage.subtitle"
            :cta-text="servicePage.cta_text || 'Talk To Our Experts'"
            :background-image="servicePage.hero_background_image"
            :background-color="servicePage.hero_background_color || '#121212'"
            :overlay-gradient="servicePage.hero_overlay_gradient"
            title-classes="text-[2.5rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[5rem]"
            subtitle-classes="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.375rem] 2xl:text-[1.5rem] leading-[1.6]"
            :show-decorative-elements="true"
            @cta-click="handleCtaClick"
        />

        <!-- Dynamic Sections based on configuration -->
        <template v-for="(section, sectionKey) in orderedSections" :key="sectionKey">
            <!-- Partner Badge Section -->
            <ParnerBadge v-if="sectionKey === 'partner_badge' && section.enabled" />

            <!-- Unlock the Full Potential Section -->
            <ImageContentSection
                v-if="sectionKey === 'image_content' && section.enabled"
                :title="servicePage.image_content_title || 'Unlock the Full Potential of Your Data'"
                :subtitle="servicePage.image_content_subtitle || 'Build Smarter, Faster, and Future-Ready Data Systems'"
                :descriptions="servicePage.image_content_descriptions || [
                    servicePage.description || 'Transform your business with our comprehensive service solutions.',
                    'At Sinki.ai, our solutions simplify complexity, accelerate insights, and give your teams the confidence to act on data faster, smarter, and with measurable impact.'
                ]"
                :image-src="servicePage.image_content_image || '/images/serviceside.webp'"
                :image-alt="servicePage.title + ' Services'"
                image-position="left"
                :cta-text="servicePage.image_content_cta_text || 'Start Your Transformation'"
                background-color="bg-gray-50"
                @cta-click="handleCtaClick"
            />

            <!-- Our Services Section -->
            <ServicesGrid
                v-if="sectionKey === 'services_grid' && section.enabled && servicePage.services_data?.length"
                :title="servicePage.services_grid_title || `Our ${servicePage.title} Services`"
                :description="servicePage.services_grid_description || 'We offer a comprehensive suite of services.'"
                :services="servicePage.services_data"
            />

            <!-- Our Approach Section -->
            <OurApproach v-if="sectionKey === 'our_approach' && section.enabled" />

            <!-- Key Benefits Section -->
            <KeyBenefits v-if="sectionKey === 'key_benefits' && section.enabled" />

            <!-- Platforms We Work With Section -->
            <PlatformsWeWorkWith
                v-if="sectionKey === 'platforms' && section.enabled"
                :section-id="`platforms-${servicePage.slug}`"
                section-label="Platforms We Work With"
                :title="servicePage.platforms_title || 'Built on the Platforms You Trust'"
                :description="servicePage.platforms_description || 'We bring the best solutions to life on the enterprise platforms you already rely on.'"
            />

            <!-- Why Choose Us Section -->
            <WhyChooseUs
                v-if="sectionKey === 'why_choose_us' && section.enabled"
                :title="servicePage.why_choose_title || `Why Choose us for your ${servicePage.title} needs?`"
                :description="servicePage.why_choose_description || 'We deliver exceptional results with our proven methodology and expert team.'"
                :reasons="servicePage.why_choose_data || []"
            />

            <!-- Service CTA Section -->
            <ServiceCTA
                v-if="sectionKey === 'service_cta' && section.enabled"
                :title="servicePage.service_cta_title || `Ready to Get Started with ${servicePage.title}?`"
                :description="servicePage.service_cta_description || `Let's simplify your journey, and turn challenges into real results.`"
                :cta-text="servicePage.service_cta_text || 'Get Started Now'"
                :cta-link="servicePage.cta_link || '/contact'"
                :background-image="servicePage.service_cta_image || '/images/cta.webp'"
            />

            <!-- Insights & Resources Section -->
            <InsightsResourcesSection
                v-if="sectionKey === 'insights_resources' && section.enabled"
                title="Insights & Resources"
                :description="`Stay updated with the latest trends and insights in ${servicePage.title.toLowerCase()}:`"
                :blogs="blogs || []"
                :max-blogs="3"
            />

            <!-- FAQ Section -->
            <FAQSection
                v-if="sectionKey === 'faq' && section.enabled && servicePage.faqs_data?.length"
                title="Frequently Asked Questions"
                :faqs="servicePage.faqs_data"
            />
        </template>

        <!-- Footer Section -->
        <FooterSection />
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import { computed } from 'vue';
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
import InsightsResourcesSection from '@/Components/Services/InsightsResourcesSection.vue';
import FAQSection from '@/Components/Services/FAQSection.vue';
import FooterSection from '@/Components/FooterSection.vue';
import { useCanonical } from '@/composables/useCanonical.js';

const props = defineProps({
    servicePage: {
        type: Object,
        required: true
    },
    isPreview: {
        type: Boolean,
        default: false
    },
    blogs: {
        type: Array,
        default: () => []
    }
});

// Set canonical URL for dynamic service pages (not for previews)
if (!props.isPreview && props.servicePage?.slug) {
    useCanonical(`https://www.sinki.ai/services/${props.servicePage.slug}`);
}

// Computed property to order sections based on the configuration
const orderedSections = computed(() => {
    if (!props.servicePage.sections) {
        return {};
    }

    // Sort sections by their order property
    return Object.entries(props.servicePage.sections)
        .sort(([, a], [, b]) => (a.order || 0) - (b.order || 0))
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
});


// Handle CTA button click
const handleCtaClick = () => {
    const ctaLink = props.servicePage.cta_link || '/contact';

    // If it's an external link or has a protocol, open it directly
    if (ctaLink.startsWith('http') || ctaLink.startsWith('mailto:') || ctaLink.startsWith('tel:')) {
        window.open(ctaLink, '_blank');
    } else {
        // Internal link - navigate using Inertia or standard navigation
        window.location.href = ctaLink;
    }
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