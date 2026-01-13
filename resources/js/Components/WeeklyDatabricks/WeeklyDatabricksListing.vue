<template>
    <!-- Insights & Resources Section for Weekly Databricks -->
    <section class="weekly-databricks-listing-section bg-white py-20">
        <div class="max-w-[1920px] mx-auto px-6 sm:px-12">
            <!-- Section Header -->
            <div class="mb-16">
                <h2 class="text-[64px] font-semibold text-[#121212] mb-6 leading-[76.8px] tracking-[1.28px] font-instrument-sans">
                    Insights & Resources
                </h2>
                <p class="text-[24px] text-[#666666] font-normal leading-[36px] tracking-[0.48px] font-instrument-sans">
                    Stay updated with the latest Databricks updates, platform enhancements, and real-world implementation learnings.
                </p>
            </div>

            <!-- Articles List -->
            <div class="space-y-12" v-if="weeklyArticles && weeklyArticles.length > 0">
                <!-- Dynamic Articles -->
                <article
                    v-for="(article, index) in weeklyArticles"
                    :key="article.id"
                    :class="[
                        'weekly-article-item pb-12',
                        index < weeklyArticles.length - 1 ? 'border-b border-[#E0E0E0]' : ''
                    ]"
                >
                  {{ console.log(article) }}
                    <div class="w-full">
                        <!-- Category Badge -->
                        <div class="mb-6">
                            <span class="inline-flex items-center justify-center bg-[#121212] text-white text-[12px] font-semibold px-[16px] py-[8px] rounded-[20px] uppercase tracking-[0.24px] leading-[14.4px] font-instrument-sans">
                                {{ article.category ? article.category.name : 'WEEKLY DATABRICKS' }}
                            </span>
                        </div>

                        <!-- Date and Week Info -->
                        <div class="mb-4 flex items-center gap-4">
                            <span class="text-[16px] text-[#666666] font-normal leading-[19.2px] tracking-[0.32px] font-instrument-sans">
                                {{ article.published_at_formatted }}
                            </span>
                            <span class="text-[14px] text-[#999999] font-medium font-instrument-sans">
                                {{ article.formatted_week }}
                            </span>
                        </div>

                        <!-- Title -->
                        <Link :href="route('weekly-databricks.show', article.slug)">
                            <h3 class="text-[32px] font-semibold text-[#121212] mb-6 leading-[38.4px] tracking-[0.64px] font-instrument-sans hover:text-[#FF3621] transition-colors duration-300 cursor-pointer">
                                {{ article.title }}
                            </h3>
                        </Link>

                        <!-- Excerpt -->
                        <div class="excerpt-container text-[20px] text-[#333333] font-normal leading-[32px] tracking-[0.4px] font-instrument-sans mb-8 line-clamp-3">
                            {{ article.excerpt }}
                        </div>

                        <!-- Tags -->
                        <div v-if="article.tags && article.tags.length > 0" class="mb-6 flex flex-wrap gap-2">
                            <span
                                v-for="tag in article.tags.slice(0, 3)"
                                :key="tag.name"
                                class="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium bg-gray-100 text-gray-700"
                            >
                                {{ tag.name }}
                            </span>
                            <span
                                v-if="article.tags.length > 3"
                                class="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium bg-gray-200 text-gray-600"
                            >
                                +{{ article.tags.length - 3 }} more
                            </span>
                        </div>

                        <!-- Read More Link -->
                        <Link :href="route('weekly-databricks.show', article.slug)" class="inline-flex items-center group cursor-pointer">
                            <span class="text-[20px] text-[#FF3621] font-semibold leading-[24px] tracking-[0.4px] font-instrument-sans group-hover:text-[#121212] transition-colors duration-300">
                                Read more
                            </span>
                            <div class="w-[40px] h-[40px] ml-[16px] flex items-center justify-center overflow-hidden">
                                <!-- Arrow Line -->
                                <svg class="absolute transition-transform duration-200 group-hover:translate-x-1" width="34" height="2" viewBox="0 0 34 2" fill="none">
                                    <rect width="33.08" height="1.28" fill="#FF3621" class="group-hover:fill-[#121212] transition-colors duration-300"/>
                                </svg>
                                <!-- Arrow Head -->
                                <svg class="relative ml-[23px] transition-transform duration-200 group-hover:translate-x-1" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                    <path d="M10.69 5.945L0 0V11.89L10.69 5.945Z" fill="#FF3621" class="group-hover:fill-[#121212] transition-colors duration-300"/>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </article>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-12">
                <svg class="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <h3 class="text-[28px] font-semibold text-[#121212] mb-4 font-instrument-sans">
                    No Weekly Databricks Articles Yet
                </h3>
                <p class="text-[18px] text-[#666666] font-instrument-sans">
                    Check back soon for the latest Databricks insights and updates.
                </p>
            </div>


        </div>
    </section>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

// Props
const props = defineProps({
    weeklyArticles: {
        type: Array,
        default: () => []
    }
});
</script>

<style scoped>
/* Instrument Sans Font Family */
.font-instrument-sans {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Weekly Databricks Listing Section */
.weekly-databricks-listing-section {
    position: relative;
    background: white;
}

/* Article Item Styling */
.weekly-article-item {
    position: relative;
}

/* Line clamp utility for excerpt truncation */
.weekly-article-item .excerpt-container.line-clamp-3 {
    display: -webkit-box !important;
    -webkit-line-clamp: 3 !important;
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    max-height: 96px; /* Maximum height for 3 lines with 32px line-height */
    word-wrap: break-word;
}

/* Category Badge Styling */
.weekly-article-item span {
    font-family: 'Instrument Sans', sans-serif;
}

/* Title Hover Effects */
.weekly-article-item h3:hover {
    color: #FF3621;
    cursor: pointer;
}

/* Read More Link Animations */
.group:hover .group-hover\\:translate-x-1 {
    transform: translateX(4px);
}

.group:hover .group-hover\\:fill-\\[\\#121212\\] {
    fill: #121212;
}

.group:hover .group-hover\\:text-\\[\\#121212\\] {
    color: #121212;
}

/* Image Container Styling */
.weekly-article-item img {
    transition: transform 0.5s ease;
}

.weekly-article-item img:hover {
    transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .text-\\[64px\\] {
        font-size: 48px;
        line-height: 56px;
    }

    .text-\\[32px\\] {
        font-size: 28px;
        line-height: 34px;
    }

    .text-\\[24px\\] {
        font-size: 20px;
        line-height: 28px;
    }
}

@media (max-width: 768px) {
    .text-\\[64px\\] {
        font-size: 36px;
        line-height: 42px;
    }

    .text-\\[32px\\] {
        font-size: 24px;
        line-height: 30px;
    }

    .text-\\[24px\\] {
        font-size: 18px;
        line-height: 26px;
    }

    .text-\\[18px\\] {
        font-size: 16px;
        line-height: 24px;
    }

    /* Stack layout on mobile */
    .weekly-article-item .flex-col.lg\\:flex-row {
        gap: 1.5rem;
    }

    .weekly-article-item .w-full.lg\\:w-\\[400px\\] {
        width: 100%;
    }
}

@media (max-width: 640px) {
    .text-\\[64px\\] {
        font-size: 32px;
        line-height: 38px;
    }

    .text-\\[20px\\] {
        font-size: 18px;
    }

    .py-20 {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    .space-y-12 > * + * {
        margin-top: 2rem;
    }
}

/* Smooth transitions */
* {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}
</style>