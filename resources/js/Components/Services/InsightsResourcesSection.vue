<template>
    <section class="py-16 lg:py-20 xl:py-24 2xl:py-32 bg-white font-instrument relative overflow-hidden">
        <div class="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
            <!-- Section Header -->
            <div class="text-center mb-12 lg:mb-16 xl:mb-20">
                <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-semibold text-[#121212] leading-tight lg:leading-[64px] max-w-[1200px] mx-auto">
                    {{ title }}
                </h2>
                <p class="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#121212] font-normal leading-[1.5] max-w-[899px] mx-auto mt-6 lg:mt-8">
                    {{ description }}
                </p>
            </div>

            <!-- Blog Cards Grid -->
            <div v-if="displayBlogs.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 xl:gap-8">
                <a
                    v-for="blog in displayBlogs"
                    :key="blog.id || blog.title"
                    :href="blog.slug ? `/blog/${blog.slug}` : '#'"
                    class="bg-white border border-[#E0EAE4] rounded-[25px] overflow-visible group w-full h-auto min-h-[560px] lg:min-h-[580px] xl:min-h-[600px] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] relative block hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                >
                    <!-- Featured Image -->
                    <div class="relative overflow-hidden rounded-[20px] mx-5 mt-5">
                        <img
                            :src="blog.image || blog.featured_image || '/images/default-blog.jpg'"
                            :alt="blog.title"
                            class="w-full h-[288px] lg:h-[300px] xl:h-[320px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[20px]"
                        />

                        <!-- Arrow Icon Overlay (positioned absolutely on top right) -->
                        <div class="absolute top-[-30px] right-[-30px] w-[30px] h-[30px] bg-transparent overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg class="w-full h-full" viewBox="0 0 30 30" fill="none">
                                <path d="M7.48 7.5L22.51 7.5L22.51 22.53" stroke="#121212" stroke-width="2"/>
                                <path d="M22.51 7.5L7.48 22.53" stroke="#121212" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="px-6 lg:px-7 xl:px-8 pt-8 lg:pt-9 xl:pt-10 pb-6 lg:pb-7 xl:pb-8">
                        <!-- Category Badge -->
                        <div class="mb-6 lg:mb-7 xl:mb-8">
                            <span class="inline-flex items-center justify-center bg-[#E0EAE4] text-black text-sm font-semibold px-5 py-1 rounded-[20px] uppercase tracking-[0.28px] leading-[1.2]">
                                {{ blog.badge || 'BLOG' }}
                            </span>
                        </div>

                        <!-- Title -->
                        <h3 class="text-xl lg:text-2xl xl:text-3xl font-semibold text-[#121212] mb-4 lg:mb-5 xl:mb-6 leading-[1.2] tracking-[0.6px] min-h-[60px] lg:min-h-[72px] xl:min-h-[84px]">
                            {{ blog.title }}
                        </h3>

                        <!-- Read More Button -->
                        <div class="mt-auto flex items-center">
                            <div class="inline-flex items-center text-[#FF3621] font-semibold text-lg lg:text-xl xl:text-2xl leading-[1.2] tracking-[0.42px]">
                                Read more
                                <div class="w-8 h-8 lg:w-10 lg:h-10 ml-3 lg:ml-4 flex items-center justify-center overflow-hidden">
                                    <!-- Arrow Line -->
                                    <svg class="absolute transition-transform duration-200 group-hover:translate-x-1" width="34" height="2" viewBox="0 0 34 2" fill="none">
                                        <rect width="33.08" height="1.28" fill="#FF3621"/>
                                    </svg>
                                    <!-- Arrow Head -->
                                    <svg class="relative ml-[23px] transition-transform duration-200 group-hover:translate-x-1" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                        <path d="M10.69 5.945L0 0V11.89L10.69 5.945Z" fill="#FF3621"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-16">
                <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                <h3 class="text-lg font-medium text-gray-900 mb-2">No blog posts yet</h3>
                <p class="text-gray-500">Check back soon for our latest articles and insights.</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';

// Define props
const props = defineProps({
    title: {
        type: String,
        default: 'Latest Insights on Databricks, Data & AI'
    },
    description: {
        type: String,
        default: 'Stay updated with the latest trends and insights in data engineering and modernization:'
    },
    blogs: {
        type: Array,
        default: () => []
    },
    maxBlogs: {
        type: Number,
        default: 3
    }
});

// Computed property to format and limit blogs
const displayBlogs = computed(() => {
    if (props.blogs.length === 0) {
        // Fallback data matching screenshot
        return [
            {
                title: "Generative AI vs Predictive AI: The Ultimate Comparison Guide",
                badge: "BLOG",
                image: "/assets/images/blog1.png",
                slug: null
            },
            {
                title: "Generative AI vs Predictive AI: The Ultimate Comparison Guide",
                badge: "BLOG",
                image: "/assets/images/blog2.png",
                slug: null
            },
            {
                title: "Generative AI vs Predictive AI: The Ultimate Comparison Guide",
                badge: "BLOG",
                image: "/assets/images/blog1.png",
                slug: null
            }
        ].slice(0, props.maxBlogs);
    }

    // Format backend data and limit to maxBlogs
    return props.blogs.slice(0, props.maxBlogs).map(blog => ({
        id: blog.id,
        title: blog.title,
        badge: blog.category ? blog.category.name : "BLOG",
        image: blog.featured_image,
        slug: blog.slug
    }));
});
</script>

<style scoped>
/* Instrument Sans Font Family */
.font-instrument {
    font-family: 'Instrument Sans', sans-serif;
}

/* Custom hover effects for blog cards */
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}

/* Smooth transitions */
* {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

/* Typography adjustments to match exact specifications */
h2 {
    font-family: 'Instrument Sans', sans-serif;
    font-weight: 600;
    color: #121212;
    word-wrap: break-word;
}

h3 {
    font-family: 'Instrument Sans', sans-serif;
    color: #121212;
    word-wrap: break-word;
}

/* Blog card styling matching exact specifications */
.group {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid #E0EAE4;
}

/* Custom responsive adjustments */
@media (max-width: 768px) {
    .grid-cols-3 {
        grid-template-columns: 1fr;
    }

    .grid-cols-2 {
        grid-template-columns: 1fr;
    }
}

/* Ensure cards maintain aspect ratio on very large screens */
@media (min-width: 1920px) {
    .min-h-\[560px\] {
        min-height: 620px;
    }

    .lg\:min-h-\[580px\] {
        min-height: 640px;
    }

    .xl\:min-h-\[600px\] {
        min-height: 660px;
    }
}
</style>