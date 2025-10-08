<template>
    <div class="bg-white font-instrument">
        <Head title="Blog - Sinki.io" />

        <!-- Header Section -->
        <section class="pt-[271px] pb-16 bg-white relative">
            <div class="max-w-[1920px] mx-auto px-12">
                <div class="text-left ml-[6px]">
                    <p class="text-[18px] font-medium text-[#121212] uppercase tracking-[1.8px] mb-6 leading-[19.8px]">
                        Insights & Resources
                    </p>
                    <h1 class="text-[112px] font-semibold text-[#121212] mb-8 leading-[123.2px] max-w-[1500px]">
                        Latest Insights on <span class="block">Databricks, Data & AI</span>
                    </h1>
                    <p class="text-[30px] text-[#121212] font-normal leading-[45px] max-w-[899px]">
                        Stay ahead with guides, blogs, and practical insights to help your enterprise scale smarter with Databricks.
                    </p>
                </div>
            </div>
        </section>

        <!-- Blog Posts Section -->
        <section class="py-0 bg-white">
            <div class="max-w-[1920px] mx-auto px-6">
                <!-- Blog Grid -->
                <div v-if="blogs.length > 0" class="flex flex-wrap gap-[20px] ml-[24px]">
                    <article
                        v-for="blog in blogs"
                        :key="blog.id"
                        class="bg-white border border-[#E0EAE4] rounded-[25px] overflow-visible group w-[594px] h-[560px] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] relative"
                    >
                        <!-- Featured Image -->
                        <div class="relative overflow-hidden rounded-[20px] mx-[20px] mt-[20px]">
                            <img
                                :src="blog.featured_image || '/images/default-blog.jpg'"
                                :alt="blog.title"
                                class="w-[554px] h-[288px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[20px]"
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
                        <div class="px-[31px] pt-[37px]">
                            <!-- Category Badge -->
                            <div class="mb-[31px]">
                                <span class="inline-flex items-center justify-center bg-[#E0EAE4] text-black text-[14px] font-semibold px-[20px] py-[5px] rounded-[20px] uppercase tracking-[0.28px] leading-[16.8px]">
                                    BLOG
                                </span>
                            </div>

                            <!-- Title -->
                            <h3 class="text-[30px] font-semibold text-[#121212] mb-[19px] leading-[36px] tracking-[0.6px] max-w-[512px] min-h-[72px]">
                                <Link
                                    :href="route('blog.show', blog.slug)"
                                    class="hover:text-gray-700 transition-colors duration-200"
                                >
                                    {{ blog.title }}
                                </Link>
                            </h3>

                            <!-- Read More Button -->
                            <div class="mt-[15px] flex items-center">
                                <Link
                                    :href="route('blog.show', blog.slug)"
                                    class="inline-flex items-center text-[#FF3621] hover:text-[#e52e1c] font-semibold text-[21px] transition-colors duration-200 group/link leading-[25.2px] tracking-[0.42px]"
                                >
                                    Read more
                                    <div class="w-[40px] h-[40px] ml-[16px] flex items-center justify-center overflow-hidden">
                                        <!-- Arrow Line -->
                                        <svg class="absolute transition-transform duration-200 group-hover/link:translate-x-1" width="34" height="2" viewBox="0 0 34 2" fill="none">
                                            <rect width="33.08" height="1.28" fill="#FF3621"/>
                                        </svg>
                                        <!-- Arrow Head -->
                                        <svg class="relative ml-[23px] transition-transform duration-200 group-hover/link:translate-x-1" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                            <path d="M10.69 5.945L0 0V11.89L10.69 5.945Z" fill="#FF3621"/>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </article>
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
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';

// Props
const props = defineProps({
    blogs: {
        type: Array,
        default: () => []
    },
    totalBlogs: {
        type: Number,
        default: 0
    }
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

/* Typography adjustments to match Figma exact specifications */
h1 {
    font-family: 'Instrument Sans', sans-serif;
    font-weight: 600;
    color: #121212;
    word-wrap: break-word;
}

/* Blog card styling matching Figma */
article {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid #E0EAE4;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 1280px) {
    .text-\[112px\] {
        font-size: 72px;
        line-height: 80px;
    }
    
    .pt-\[271px\] {
        padding-top: 180px;
    }
}

@media (max-width: 1024px) {
    .text-\[112px\] {
        font-size: 64px;
        line-height: 70px;
    }

    .text-\[30px\] {
        font-size: 24px;
        line-height: 32px;
    }

    .w-\[594px\] {
        width: 100%;
        max-width: 594px;
    }

    .h-\[560px\] {
        height: auto;
        min-height: 560px;
    }

    .w-\[554px\] {
        width: 100%;
        max-width: 554px;
    }

    .pt-\[271px\] {
        padding-top: 8rem;
    }
}

@media (max-width: 768px) {
    .text-\[112px\] {
        font-size: 48px;
        line-height: 52px;
    }

    .text-\[18px\] {
        font-size: 16px;
    }

    .text-\[30px\] {
        font-size: 20px;
        line-height: 28px;
    }

    .pt-\[271px\] {
        padding-top: 4rem;
    }

    .px-12 {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .ml-\[6px\] {
        margin-left: 0;
    }
}
</style>