<template>
    <div class="bg-white font-instrument">
        <Head :title="blog.meta_title || blog.title" />

        <!-- Meta tags for SEO -->
        <Head>
            <meta name="description" :content="blog.meta_description" />
            <meta name="keywords" :content="blog.meta_keywords" />
            <meta property="og:title" :content="blog.meta_title || blog.title" />
            <meta property="og:description" :content="blog.meta_description" />
            <meta property="og:image" :content="blog.featured_image" />
            <meta property="og:type" content="article" />
        </Head>

        <!-- Hero Section -->
        <section class="relative bg-[#121212] text-white pt-[200px] pb-[100px]">
            <div v-if="blog.featured_image" class="absolute inset-0">
                <img
                    :src="blog.featured_image"
                    :alt="blog.title"
                    class="w-full h-full object-cover opacity-20"
                />
            </div>
            <div class="absolute inset-0 bg-[#121212] opacity-80"></div>
            
            <div class="max-w-[1920px] mx-auto px-12 relative z-10">
                <div class="max-w-[1400px]">
                    <!-- Category Badge -->
                    <div class="mb-8">
                        <span class="inline-flex items-center justify-center bg-[#E0EAE4] text-[#121212] text-[14px] font-semibold px-[20px] py-[5px] rounded-[20px] uppercase tracking-[0.28px] leading-[16.8px]">
                            {{ blog.category?.name || 'BLOG' }}
                        </span>
                    </div>

                    <!-- Title -->
                    <h1 class="text-[64px] md:text-[80px] font-semibold text-white mb-8 leading-[70.4px] md:leading-[88px] tracking-tight">
                        {{ blog.title }}
                    </h1>

                    <!-- Meta Information -->
                    <div class="flex flex-wrap items-center gap-8 text-white text-[18px] font-medium">
                        <div class="flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                            <span>{{ blog.author?.name || 'Admin' }}</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span>{{ blog.published_at }}</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>{{ blog.read_time || '5 min read' }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <section class="py-20 bg-white">
            <div class="max-w-[1920px] mx-auto px-12">
                <div class="max-w-[1200px] mx-auto">
                    <!-- Blog Content -->
                    <div class="prose prose-lg max-w-none mb-16">
                        <div v-html="blog.content" class="blog-content"></div>
                    </div>

                    <!-- Tags Section -->
                    <div v-if="blog.tags && blog.tags.length > 0" class="mb-16 pb-16 border-b border-[#E0EAE4]">
                        <h3 class="text-[24px] font-bold text-[#121212] mb-6 tracking-[0.48px]">Tags</h3>
                        <div class="flex flex-wrap gap-3">
                            <span
                                v-for="tag in blog.tags"
                                :key="tag.id"
                                class="inline-flex items-center bg-[#E0EAE4] text-[#121212] px-5 py-2 rounded-[20px] text-[16px] font-medium hover:bg-[#d0dace] transition-colors duration-200 cursor-pointer"
                            >
                                #{{ tag.name }}
                            </span>
                        </div>
                    </div>

                    <!-- Social Share Section -->
                    <div class="mb-16">
                        <h3 class="text-[24px] font-bold text-[#121212] mb-6 tracking-[0.48px]">Share this article</h3>
                        <div class="flex flex-wrap gap-4">
                            
                                :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-3 px-8 py-4 bg-[#121212] text-white rounded-[47px] text-[18px] font-bold uppercase tracking-[0.36px] hover:bg-[#FF3621] transition-all duration-300 border-2 border-[#121212] hover:border-[#FF3621]"
                            >
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                                Tweet
                            </a>
                            
                                :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-3 px-8 py-4 bg-[#121212] text-white rounded-[47px] text-[18px] font-bold uppercase tracking-[0.36px] hover:bg-[#FF3621] transition-all duration-300 border-2 border-[#121212] hover:border-[#FF3621]"
                            >
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                Share
                            </a>
                            
                                :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-3 px-8 py-4 bg-[#121212] text-white rounded-[47px] text-[18px] font-bold uppercase tracking-[0.36px] hover:bg-[#FF3621] transition-all duration-300 border-2 border-[#121212] hover:border-[#FF3621]"
                            >
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                Share
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Related Posts Section -->
        <section v-if="relatedBlogs && relatedBlogs.length > 0" class="py-20 bg-white border-t border-[#E0EAE4]">
            <div class="max-w-[1920px] mx-auto px-12">
                <div class="mb-16">
                    <h2 class="text-[48px] font-semibold text-[#121212] mb-4 leading-[57.6px] tracking-[0.96px]">Related Articles</h2>
                    <p class="text-[20px] text-[#121212] leading-[28px]">Continue reading with these related insights</p>
                </div>
                
                <div class="flex flex-wrap gap-[20px]">
                    <article
                        v-for="relatedBlog in relatedBlogs.slice(0, 3)"
                        :key="relatedBlog.id"
                        class="bg-white border border-[#E0EAE4] rounded-[25px] overflow-visible group w-[594px] h-[560px] shadow-[0px_4px_4px_rgba(0,0,0,0.05)] relative hover:shadow-lg transition-shadow duration-300"
                    >
                        <!-- Featured Image -->
                        <div class="relative overflow-hidden rounded-[20px] mx-[20px] mt-[20px]">
                            <img
                                :src="relatedBlog.featured_image || '/images/default-blog.jpg'"
                                :alt="relatedBlog.title"
                                class="w-[554px] h-[288px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-[20px]"
                            />
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
                            <h3 class="text-[28px] font-semibold text-[#121212] mb-[19px] leading-[33.6px] tracking-[0.56px] max-w-[512px] min-h-[68px] line-clamp-2">
                                <Link
                                    :href="route('blog.show', relatedBlog.slug)"
                                    class="hover:text-gray-700 transition-colors duration-200"
                                >
                                    {{ relatedBlog.title }}
                                </Link>
                            </h3>

                            <!-- Read More Button -->
                            <div class="mt-[15px] flex items-center">
                                <Link
                                    :href="route('blog.show', relatedBlog.slug)"
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
            </div>
        </section>

        <!-- Back to Blog -->
        <section class="py-16 bg-white border-t border-[#E0EAE4]">
            <div class="max-w-[1920px] mx-auto px-12 text-center">
                <Link
                    :href="route('blog.index')"
                    class="inline-flex items-center gap-3 text-[#FF3621] hover:text-[#121212] font-bold text-[21px] transition-colors duration-200 uppercase tracking-[0.42px]"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Back to Blog
                </Link>
            </div>
        </section>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';

// Props
const props = defineProps({
    blog: {
        type: Object,
        required: true
    },
    relatedBlogs: {
        type: Array,
        default: () => []
    }
});
</script>

<style scoped>
/* Instrument Sans Font Family */
.font-instrument {
    font-family: 'Instrument Sans', sans-serif;
}

/* Line clamp utilities */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Blog content styling */
.blog-content {
    line-height: 1.8;
    color: #121212;
}

.blog-content h1,
.blog-content h2,
.blog-content h3,
.blog-content h4,
.blog-content h5,
.blog-content h6 {
    font-weight: 600;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    color: #121212;
    font-family: 'Instrument Sans', sans-serif;
}

.blog-content h1 {
    font-size: 2.5rem;
    line-height: 1.2;
}

.blog-content h2 {
    font-size: 2rem;
    line-height: 1.3;
}

.blog-content h3 {
    font-size: 1.75rem;
    line-height: 1.4;
}

.blog-content p {
    margin-bottom: 1.5rem;
    color: #121212;
    font-size: 1.125rem;
    line-height: 1.8;
}

.blog-content ul,
.blog-content ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
}

.blog-content li {
    margin-bottom: 0.75rem;
    color: #121212;
}

.blog-content blockquote {
    border-left: 4px solid #FF3621;
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: #121212;
    font-size: 1.25rem;
}

.blog-content code {
    background-color: #E0EAE4;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    color: #121212;
}

.blog-content pre {
    background-color: #121212;
    color: #ffffff;
    padding: 1.5rem;
    border-radius: 0.75rem;
    overflow-x: auto;
    margin: 2rem 0;
}

.blog-content pre code {
    background-color: transparent;
    padding: 0;
    color: inherit;
}

.blog-content img {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    margin: 2rem 0;
}

.blog-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
}

.blog-content th,
.blog-content td {
    border: 1px solid #E0EAE4;
    padding: 1rem;
    text-align: left;
}

.blog-content th {
    background-color: #E0EAE4;
    font-weight: 600;
}

.blog-content a {
    color: #FF3621;
    text-decoration: underline;
    font-weight: 500;
}

.blog-content a:hover {
    color: #121212;
}

/* Prose styling */
.prose {
    max-width: 75ch;
}

.prose-lg {
    font-size: 1.125rem;
    line-height: 1.8;
}

/* Smooth transitions */
* {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
    .text-\[64px\] {
        font-size: 48px;
        line-height: 56px;
    }
    
    .text-\[80px\] {
        font-size: 56px;
        line-height: 64px;
    }

    .pt-\[200px\] {
        padding-top: 120px;
    }

    .pb-\[100px\] {
        padding-bottom: 60px;
    }
}

@media (max-width: 768px) {
    .text-\[64px\] {
        font-size: 36px;
        line-height: 42px;
    }
    
    .text-\[48px\] {
        font-size: 32px;
        line-height: 38px;
    }

    .pt-\[200px\] {
        padding-top: 80px;
    }

    .pb-\[100px\] {
        padding-bottom: 40px;
    }

    .px-12 {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .w-\[594px\] {
        width: 100%;
        max-width: 594px;
    }
}
</style>