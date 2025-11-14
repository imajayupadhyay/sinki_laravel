<template>
    <div class="bg-white font-instrument">
        <Head title="Blog - Sinki.io" />

        <!-- Header Component -->
        <Header />

        <!-- Header Section -->
        <section class="pt-[166px] relative blog-hero-section">
            <!-- Background Elements -->
            <div class="blog-background">
                <div class="absolute inset-0 bg-gradient-to-br from-beige/15 to-cream/8"></div>
                <div class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-red/12 to-transparent rounded-full animate-pulse-slow"></div>
                <div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-brand-red/6 to-transparent rounded-full animate-pulse-slow-delayed"></div>
            </div>

            <div class="max-w-[1920px] mx-auto px-12 relative z-10">
                <div class="text-left ml-[6px]">
                    <p class="text-[18px] font-medium text-[#121212] uppercase tracking-[1.8px] mb-6 leading-[19.8px] mt-[15px]">
                        Insights & Resources
                    </p>
                    <h1 class="text-[102px] font-semibold text-[#121212] mb-8 leading-[112.2px] max-w-[1500px]">
                        Latest Insights on <span class="block">Databricks, Data & AI</span>
                    </h1>
                    <p class="text-[30px] text-[#121212] font-normal leading-[45px] max-w-[899px]">
                        Stay ahead with guides, blogs, and practical insights to help your enterprise scale smarter with Databricks.
                    </p>
                </div>
            </div>
        </section>

        <!-- Blog Posts Section -->
        <section class="py-16 bg-white">
            <div class="max-w-[1920px] mx-auto px-6">
                <!-- Blog Grid -->
                <div v-if="blogs.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mx-[24px]">
                    <Link
                        :href="route('blog.show', blog.slug)"
                        v-for="blog in blogs"
                        :key="blog.id"
                        class="bg-white border border-[#E0EAE4] rounded-[25px] overflow-visible group w-full h-[560px] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] relative block hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    >
                        <!-- Featured Image -->
                        <div class="relative overflow-hidden rounded-[20px] mx-[20px] mt-[20px]">
                            <img
                                :src="blog.featured_image || '/images/default-blog.jpg'"
                                :alt="blog.title"
                                class="w-full h-[288px] transition-transform duration-300 group-hover:scale-105 rounded-[20px]"
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
                            <h3 class="text-[24px] font-semibold text-[#121212] mb-[19px] leading-[30px] tracking-[0.48px] max-w-[512px] min-h-[60px] line-clamp-2">
                                {{ blog.title }}
                            </h3>

                            <!-- Read More Button -->
                            <div class="mt-[15px] flex items-center">
                                <div class="inline-flex items-center text-[#FF3621] font-semibold text-[21px] leading-[25.2px] tracking-[0.42px]">
                                    Read more
                                    <div class="w-[40px] h-[40px] ml-[16px] flex items-center justify-center overflow-hidden">
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
                    </Link>
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

        <!-- Contact CTA Section -->
        <ContactCTA />

        <!-- Footer Section -->
        <FooterSection />
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Header from '@/Components/Header.vue';
import ContactCTA from '@/Components/Contact/ContactCTA.vue';
import FooterSection from '@/Components/FooterSection.vue';

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

/* Blog Hero Section Styles */
.blog-hero-section {
    background: linear-gradient(180deg, rgba(235, 235, 210, 0.9) 0%, rgba(235, 235, 210, 0.6) 50%, rgba(245, 245, 220, 0.2) 80%, transparent 100%);
    overflow: hidden;
}

/* Background Elements */
.blog-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
}

/* Beige/Cream Colors for Background */
.from-beige\/15 {
    --tw-gradient-from: rgb(235 235 210 / 0.15);
}

.to-cream\/8 {
    --tw-gradient-to: rgb(245 245 220 / 0.08);
}

/* Brand Colors */
.text-brand-red {
    color: #FF3621;
}

.bg-brand-red {
    background-color: #FF3621;
}

/* Animations */
@keyframes pulse-slow {
    0%, 100% {
        opacity: 0.4;
        transform: scale(1);
    }
    50% {
        opacity: 0.6;
        transform: scale(1.05);
    }
}

@keyframes pulse-slow-delayed {
    0%, 100% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.08);
    }
}

.animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
}

.animate-pulse-slow-delayed {
    animation: pulse-slow-delayed 10s ease-in-out infinite;
    animation-delay: 2s;
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

/* Line clamp utility for title truncation */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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
    .text-\[102px\] {
        font-size: 68px;
        line-height: 75px;
    }
    
    .pt-\[150px\] {
        padding-top: 120px;
    }
}

@media (max-width: 1024px) {
    .text-\[102px\] {
        font-size: 60px;
        line-height: 66px;
    }

    .text-\[24px\] {
        font-size: 20px;
        line-height: 26px;
    }

    .text-\[30px\] {
        font-size: 24px;
        line-height: 32px;
    }

    .h-\[560px\] {
        height: auto;
        min-height: 560px;
    }

    .pt-\[150px\] {
        padding-top: 6rem;
    }
}

@media (max-width: 768px) {
    .text-\[102px\] {
        font-size: 46px;
        line-height: 50px;
    }

    .text-\[18px\] {
        font-size: 16px;
    }

    .text-\[24px\] {
        font-size: 18px;
        line-height: 24px;
    }

    .text-\[30px\] {
        font-size: 20px;
        line-height: 28px;
    }

    .pt-\[150px\] {
        padding-top: 3rem;
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