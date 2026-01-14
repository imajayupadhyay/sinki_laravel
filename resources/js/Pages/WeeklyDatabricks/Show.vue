<template>
    <div class="min-h-screen bg-white">
        <Head :title="article.meta_title || article.title">
            <meta v-if="!isPreview" name="description" :content="article.meta_description" />
            <meta v-if="!isPreview" name="keywords" :content="article.meta_keywords" />

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
                You are viewing a preview of this draft weekly article. This is not visible to the public.
            </span>
        </div>

        <!-- Header Component -->
        <Header />

        <!-- Hero Section with Gradient Background -->
        <section class="hero-section relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-[#F6F6E0] via-[#F6F6E0]/90 to-transparent"></div>

            <div class="w-full relative z-10">
                <div class="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto pt-48 pb-24">
                    <!-- Category and Date Side by Side -->
                    <div class="mb-8 flex items-center gap-2">
                        <span class="inline-flex items-center justify-center bg-[#121212] text-white text-[12px] font-semibold px-[16px] py-[8px] rounded-[20px] uppercase tracking-[0.24px] leading-[14.4px] font-instrument-sans">
                            WEEKLY DATABRICKS
                        </span>
                        <span class="text-[16px] text-[#666666] font-normal leading-[19.2px] tracking-[0.32px] font-instrument-sans">|</span>
                        <span class="text-[16px] text-[#666666] font-normal leading-[19.2px] tracking-[0.32px] font-instrument-sans">
                            {{ formatDate(article.published_at) }}
                        </span>
                    </div>

                    <!-- Article Title - Reduced Font Size and Full Width -->
                    <h1 class="text-[#121212] text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[56px] font-semibold leading-tight font-instrument-sans mb-8 w-full">
                        {{ article.title }}
                    </h1>
                </div>
            </div>
        </section>

        <!-- Spacer Section -->
        <div class="spacer-section"></div>

        <!-- Article Content Section -->
        <section class="article-content-section pb-10">
            <div class="w-full">
                <!-- Content with 70% width and 15% margins on each side -->
                <div class="article-content text-[#333333] text-[20px] font-normal leading-[32px] tracking-[0.4px] font-instrument-sans space-y-8 w-[90%] sm:w-[85%] lg:w-[80%] mx-auto" v-html="article.content">
                </div>
            </div>
        </section>

        <!-- Previous/Next Navigation -->
        <section class="py-8 bg-white">
            <div class="w-full">
                <div class="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto">
                    <div class="flex items-center justify-center gap-4">
                        <!-- Previous Button -->
                        <button
                            v-if="previousArticle"
                            @click="$inertia.visit(route('weekly-databricks.show', previousArticle.slug))"
                            class="bg-black text-white px-8 py-3 rounded-[10px] font-semibold text-[16px] leading-[19.2px] tracking-[0.32px] font-instrument-sans hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center min-w-[120px]"
                        >
                            Previous
                        </button>

                        <!-- Disabled Previous Button -->
                        <button
                            v-else
                            disabled
                            class="bg-gray-300 text-gray-500 px-8 py-3 rounded-[10px] font-semibold text-[16px] leading-[19.2px] tracking-[0.32px] font-instrument-sans flex items-center justify-center min-w-[120px] cursor-not-allowed"
                        >
                            Previous
                        </button>

                        <!-- Back to Index -->
                        <Link
                            :href="route('weekly-databricks.index')"
                            class="bg-brand-red text-white px-8 py-3 rounded-[10px] font-semibold text-[16px] leading-[19.2px] tracking-[0.32px] font-instrument-sans hover:bg-brand-red/90 transition-colors duration-300 flex items-center justify-center min-w-[120px]"
                        >
                            All Editions
                        </Link>

                        <!-- Next Button -->
                        <button
                            v-if="nextArticle"
                            @click="$inertia.visit(route('weekly-databricks.show', nextArticle.slug))"
                            class="bg-black text-white px-8 py-3 rounded-[10px] font-semibold text-[16px] leading-[19.2px] tracking-[0.32px] font-instrument-sans hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center min-w-[120px]"
                        >
                            Next
                        </button>

                        <!-- Disabled Next Button -->
                        <button
                            v-else
                            disabled
                            class="bg-gray-300 text-gray-500 px-8 py-3 rounded-[10px] font-semibold text-[16px] leading-[19.2px] tracking-[0.32px] font-instrument-sans flex items-center justify-center min-w-[120px] cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer with CTA Component -->
        <FooterWithCTA />
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { ref, computed, onMounted } from 'vue';
import Header from '@/Components/Header.vue';
import FooterWithCTA from '@/Components/FooterWithCTA.vue';
import FooterSection from '@/Components/FooterSection.vue';

import { useCanonical } from '@/composables/useCanonical.js';

// Props from Controller
const props = defineProps({
    article: {
        type: Object,
        required: true
    },
    previousArticle: {
        type: Object,
        default: null
    },
    nextArticle: {
        type: Object,
        default: null
    },
    relatedArticles: {
        type: Array,
        default: () => []
    },
    isPreview: {
        type: Boolean,
        default: false
    }
});

// Set canonical URL for individual weekly articles (not for previews)
if (!props.isPreview && props.article?.slug) {
    useCanonical(`https://www.sinki.ai/this-week-in-databricks/${props.article.slug}`);
}

// Reactive data
const newsletterEmail = ref('');
const tableOfContents = ref([]);
const failedImages = new Set();

// Computed properties
const estimatedReadTime = computed(() => {
    const wordsPerMinute = 200;
    const wordCount = props.article.content ? props.article.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0;
    return Math.max(1, Math.round(wordCount / wordsPerMinute));
});

// Methods
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const handleImageError = (event) => {
    const imgSrc = event.target.src;

    if (failedImages.has(imgSrc)) {
        console.warn('Image failed to load, using fallback:', imgSrc);
        event.target.style.display = 'none';
        return;
    }

    failedImages.add(imgSrc);

    if (imgSrc.includes('placeholder.png')) {
        event.target.style.display = 'none';
    } else {
        event.target.src = '/images/placeholder.png';
    }
};

const handleNewsletterSignup = () => {
    if (!newsletterEmail.value || !isValidEmail(newsletterEmail.value)) {
        alert('Please enter a valid email address');
        return;
    }

    // Handle newsletter signup logic here
    console.log('Newsletter signup:', newsletterEmail.value);
    alert('Thank you for subscribing to This Week in Databricks!');
    newsletterEmail.value = '';
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const generateTableOfContents = () => {
    const headings = document.querySelectorAll('.article-content h2, .article-content h3');
    tableOfContents.value = Array.from(headings).map((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        return {
            id,
            text: heading.textContent,
            level: heading.tagName.toLowerCase()
        };
    });
};

onMounted(() => {
    generateTableOfContents();
});
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

/* Hero Section */
.hero-section {
    position: relative;
}

/* Article Content Styling */
.article-content {
    word-break: break-word;
}

.article-content :deep(h1) {
    font-size: 42px;
    font-weight: 600;
    line-height: 50.4px;
    letter-spacing: 0.84px;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
    color: #121212;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.article-content :deep(h2) {
    font-size: 36px;
    font-weight: 600;
    line-height: 43.2px;
    letter-spacing: 0.72px;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    color: #121212;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.article-content :deep(h3) {
    font-size: 28px;
    font-weight: 600;
    line-height: 33.6px;
    letter-spacing: 0.56px;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #121212;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.article-content :deep(p) {
    margin-bottom: 1.5rem;
    color: #121212;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.article-content :deep(ul),
.article-content :deep(ol) {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
    color: #121212;
}

.article-content :deep(li) {
    margin-bottom: 0.5rem;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.article-content :deep(a) {
    color: #FF3621;
    text-decoration: underline;
    transition: color 0.3s ease;
}

.article-content :deep(a:hover) {
    color: #121212;
}

.article-content :deep(strong),
.article-content :deep(b) {
    font-weight: 600;
    color: #121212;
}

.article-content :deep(blockquote) {
    border-left: 4px solid #FF3621;
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: #666666;
    font-size: 24px;
    line-height: 36px;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.article-content :deep(img) {
    width: 100%;
    height: auto;
    margin: 2rem 0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Brand Colors */
.text-brand-red {
    color: #FF3621;
}

.bg-brand-red {
    background-color: #FF3621;
}

.border-brand-red {
    border-color: #FF3621;
}

/* Line clamp utility */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Newsletter CTA Styling */
.newsletter-cta-section input:focus {
    box-shadow: 0 0 0 3px rgba(255, 54, 33, 0.1);
}

/* Smooth Scroll */
html {
    scroll-behavior: smooth;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .hero-section h1 {
        font-size: 42px !important;
        line-height: 1.25 !important;
    }

    .article-content {
        font-size: 18px;
        line-height: 32px;
    }

    .grid.lg\\:grid-cols-4 {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .hero-section h1 {
        font-size: 36px !important;
        line-height: 1.3 !important;
    }

    .article-content {
        font-size: 16px;
        line-height: 28px;
    }
}

@media (max-width: 640px) {
    .hero-section h1 {
        font-size: 28px !important;
        line-height: 1.35 !important;
    }

    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
</style>