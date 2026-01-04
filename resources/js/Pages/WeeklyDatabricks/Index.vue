<template>
    <div class="bg-white font-instrument">
        <Head title="This Week in Databricks - Sinki.ai" />

        <!-- Header Component -->
        <Header />

        <!-- Hero Section -->
        <WeeklyDatabricksHero />

        <!-- Spacing between Hero and Partner Badge -->
        <div class="py-16"></div>

        <!-- Partner Badge Section -->
        <PartnerBadge :partner-badge="null" />

        <!-- Weekly Databricks Listing Section -->
        <WeeklyDatabricksListing :weekly-articles="weeklyArticles" />

        <!-- Footer with CTA Section -->
        <FooterWithCTA />
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import Header from '@/Components/Header.vue';
import WeeklyDatabricksHero from '@/Components/WeeklyDatabricks/WeeklyDatabricksHero.vue';
import PartnerBadge from '@/Components/Home/PartnerBadge.vue';
import WeeklyDatabricksListing from '@/Components/WeeklyDatabricks/WeeklyDatabricksListing.vue';
import FooterWithCTA from '@/Components/FooterWithCTA.vue';
import { useCanonical } from '@/composables/useCanonical.js';

// Props
const props = defineProps({
    weeklyArticles: {
        type: Array,
        default: () => []
    },
    totalArticles: {
        type: Number,
        default: 0
    },
    hasMoreArticles: {
        type: Boolean,
        default: false
    }
});

// Set canonical URL for weekly databricks index page
useCanonical('https://www.sinki.ai/this-week-in-databricks');
</script>

<style scoped>
/* Instrument Sans Font Family */
.font-instrument {
    font-family: 'Instrument Sans', sans-serif;
}

/* Brand Colors */
.text-brand-red {
    color: #FF3621;
}

.bg-brand-red {
    background-color: #FF3621;
}

/* Custom hover effects for article cards */
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}

/* Smooth transitions */
* {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

/* Line clamp utility for title truncation */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Typography adjustments to match Figma exact specifications */
h2 {
    font-family: 'Instrument Sans', sans-serif;
    font-weight: 600;
    color: #121212;
    word-wrap: break-word;
}

/* Article card styling matching existing blog design */
article {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid #E0EAE4;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 1280px) {
    .text-\[48px\] {
        font-size: 40px;
        line-height: 48px;
    }
}

@media (max-width: 1024px) {
    .text-\[48px\] {
        font-size: 36px;
        line-height: 42px;
    }

    .text-\[24px\] {
        font-size: 20px;
        line-height: 26px;
    }

    .text-\[20px\] {
        font-size: 18px;
        line-height: 26px;
    }

    .h-\[560px\] {
        height: auto;
        min-height: 560px;
    }
}

@media (max-width: 768px) {
    .text-\[48px\] {
        font-size: 32px;
        line-height: 38px;
    }

    .text-\[24px\] {
        font-size: 18px;
        line-height: 24px;
    }

    .text-\[20px\] {
        font-size: 16px;
        line-height: 24px;
    }

    .px-6 {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}

@media (max-width: 640px) {
    .text-\[48px\] {
        font-size: 28px;
        line-height: 34px;
    }

    .text-\[18px\] {
        font-size: 16px;
    }
}

/* Loading spinner animation */
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>