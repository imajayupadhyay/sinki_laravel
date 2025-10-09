<template>
    <div class="min-h-screen bg-white">
        <Head :title="blog.meta_title || blog.title">
            <meta name="description" :content="blog.meta_description" />
            <meta name="keywords" :content="blog.meta_keywords" />
        </Head>

        <!-- Header Component -->
        <Header />

        <!-- Hero Section with Gradient Background -->
        <section class="hero-section relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-[#F6F6E0] via-[#F6F6E0]/90 to-transparent"></div>
            
            <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] relative z-10">
                <div class="max-w-[1720px] mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-36 pb-24">

                        <!-- Left Content - 60% -->
                        <div class="lg:col-span-7 space-y-8">
                            <!-- Blog Title -->
                            <h1 class="text-[#121212] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-semibold leading-tight md:leading-snug lg:leading-[1.2] xl:leading-[1.15] font-instrument-sans">
                                {{ blog.title }}
                            </h1>

                            <!-- Author Info -->
                            <div class="flex items-center space-x-4">
                                <!-- Author Avatar -->
                                <img
                                    :src="blog.author.avatar || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiNGM0Y0RjYiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIxOCIgeT0iMTgiPgo8cGF0aCBkPSJNMTIgMTJDMTQuNzYxNCAxMiAxNyA5Ljc2MTQyIDE3IDdDMTcgNC4yMzg1OCAxNC43NjE0IDIgMTIgMkM5LjIzODU4IDIgNyA0LjIzODU4IDcgN0M3IDkuNzYxNDIgOS4yMzg1OCAxMiAxMiAxMloiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTEyIDEzQzguMTM0MDEgMTMgNSAxNi4xMzQgNSAyMEMyMSAyMC4yNzYxIDIxIDIwIDIxIDIwQzIxIDE2LjEzNDEgMTcuODY2IDEzIDEyIDEzWiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4KPC9zdmc+'"
                                    :alt="blog.author.name"
                                    class="w-[60px] h-[60px] rounded-full object-cover bg-gray-100"
                                    @error="handleImageError"
                                />

                                <!-- Author Details -->
                                <div>
                                    <h3 class="text-black text-xl font-semibold leading-5 font-instrument-sans">
                                        {{ blog.author.name }}
                                    </h3>
                                    <p class="text-[#666666] text-base font-medium leading-5 mt-1 font-instrument-sans">
                                        {{ blog.author.role || 'Author' }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Right Content - Featured Image - 40% -->
                        <div class="lg:col-span-5 relative">
                            <div class="w-full aspect-[100/50] bg-gray-100 rounded-[20px] overflow-hidden shadow-lg">
                                <img
                                    :src="blog.featured_image || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjxzdmcgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMTY4IiB5PSIxMTgiPgo8cGF0aCBkPSJNNTYgNDhWMTZIOFY0OEg1NlpNMTYgMjRIMjRWMzJIMTZWMjRaTTMyIDM2SDE2VjQwSDMyVjM2Wk00OCAzNkg0MFY0MEg0OFYzNlpNNDggMjRINDBWMzJINDhWMjRaIiBmaWxsPSIjOUNBNEFGIi8+Cjwvc3ZnPgo8L3N2Zz4='"
                                    :alt="blog.title"
                                    class="w-full h-full object-cover"
                                    @error="handleImageError"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- Spacer Section -->
        <div class="spacer-section"></div>

        <!-- Blog Content Section -->
        <section class="blog-content-section">
            <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
                <div class="max-w-[1720px] mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">

                        <!-- Main Content Area - 75% -->
                        <div class="lg:col-span-3">
                            <!-- Blog Content -->
                            <div
                                class="blog-content text-[#121212] text-[21px] font-normal leading-[37.8px] tracking-[0.42px] text-justify font-instrument-sans space-y-8"
                                v-html="blog.content"
                            ></div>

                            <!-- Quote Section (if exists) -->
                            <div v-if="blog.quote" class="quote-section my-16 flex items-start space-x-6">
                                <!-- Quote Icon -->
                                <div class="w-[83px] h-[64px] flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-lg">
                                    <svg width="40" height="32" viewBox="0 0 40 32" fill="#9CA4AF">
                                        <path d="M12 8C8 8 5 11 5 15v10h8V15H9c0-2 2-4 4-4V8zm15 0c-4 0-7 3-7 7v10h8V15h-4c0-2 2-4 4-4V8z"/>
                                    </svg>
                                </div>

                                <!-- Quote Content -->
                                <div>
                                    <blockquote class="text-[#121212] text-[30px] font-semibold leading-[45px] tracking-[0.6px] font-instrument-sans mb-4">
                                        "{{ blog.quote.text }}"
                                    </blockquote>
                                    <cite class="text-[#121212] text-[21px] font-normal leading-[37.8px] tracking-[0.42px] font-instrument-sans not-italic">
                                        ─ {{ blog.quote.author }}
                                    </cite>
                                </div>
                            </div>

                            <!-- Comparison Table (if exists) -->
                            <div v-if="blog.comparison_table" class="comparison-table-section my-16">
                                <h2 class="text-[#121212] text-4xl font-semibold leading-[43.2px] tracking-[0.72px] font-instrument-sans mb-8">
                                    {{ blog.comparison_table.title }}
                                </h2>

                                <div class="overflow-x-auto rounded-[5px] border border-[#CDD7D1]">
                                    <table class="w-full">
                                        <thead>
                                            <tr class="bg-[#FFFBE5]">
                                                <th class="px-6 py-4 text-left text-[#121212] text-[25px] font-semibold leading-[30px] tracking-[0.5px] font-instrument-sans border-b border-r border-[#CDD7D1]">
                                                    Feature
                                                </th>
                                                <th class="px-6 py-4 text-left text-[#121212] text-[25px] font-semibold leading-[30px] tracking-[0.5px] font-instrument-sans border-b border-r border-[#CDD7D1]">
                                                    Generative AI
                                                </th>
                                                <th class="px-6 py-4 text-left text-[#121212] text-[25px] font-semibold leading-[30px] tracking-[0.5px] font-instrument-sans border-b border-[#CDD7D1]">
                                                    Predictive AI
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(row, index) in blog.comparison_table.rows" :key="index" :class="index % 2 === 0 ? 'bg-[#FFFBE5]' : 'bg-white'">
                                                <td class="px-6 py-4 text-[#121212] text-[22px] font-semibold leading-[26.4px] tracking-[0.44px] font-instrument-sans border-b border-r border-[#CDD7D1]">
                                                    {{ row.feature }}
                                                </td>
                                                <td class="px-6 py-4 text-[#121212] text-[21px] font-normal leading-[37.8px] tracking-[0.42px] font-instrument-sans border-b border-r border-[#CDD7D1]">
                                                    {{ row.generative }}
                                                </td>
                                                <td class="px-6 py-4 text-[#121212] text-[21px] font-normal leading-[37.8px] tracking-[0.42px] font-instrument-sans border-b border-[#CDD7D1]">
                                                    {{ row.predictive }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Sidebar Area - 25% (Reserved for future use) -->
                        <div class="lg:col-span-1">
                            <div class="sticky top-8">
                                <!-- Future sidebar content will go here -->
                                <div class="hidden lg:block">
                                    <!-- Placeholder for future sidebar -->
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="cta-section py-16">
            <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
                <div class="max-w-[1720px] mx-auto">
                    <div class="bg-[#FFFBE5] rounded-[20px] overflow-hidden p-12 text-center">
                        <h2 class="text-[#121212] text-4xl font-semibold leading-[43.2px] tracking-[0.72px] font-instrument-sans mb-4">
                            Want to Boost Your Business with AI?
                        </h2>
                        <p class="text-[#121212] text-[21px] font-normal leading-[37.8px] tracking-[0.42px] font-instrument-sans mb-8 max-w-[939px] mx-auto">
                            Let Jellyfish Technologies build powerful generative and predictive AI solutions to streamline your operations and increase ROI.
                        </p>
                        
                        <!-- CTA Button -->
                        <a 
                            href="/contact"
                            class="inline-flex items-center justify-center gap-2 px-9 py-3 bg-[#121212] text-white text-lg font-bold leading-[27px] tracking-[0.36px] rounded-[47px] border-2 border-[#121212] hover:bg-[#FF3621] hover:border-[#FF3621] transition-all duration-300 font-instrument-sans"
                        >
                            Schedule a Free consultation
                            <svg class="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="20" x2="33" y2="20" stroke="currentColor" stroke-width="1.28"/>
                                <path d="M29.31 14.05L40 20L29.31 25.94" stroke="currentColor" stroke-width="1.28"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Related Blogs Section (Optional) -->
        <section v-if="relatedBlogs && relatedBlogs.length > 0" class="related-blogs-section py-16 bg-white">
            <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
                <div class="max-w-[1720px] mx-auto">
                <h2 class="text-[#121212] text-5xl font-semibold leading-[62.4px] tracking-[1.04px] font-instrument-sans mb-12 text-center">
                    Related Articles
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <a
                        v-for="relatedBlog in relatedBlogs"
                        :key="relatedBlog.id"
                        :href="`/blog/${relatedBlog.slug}`"
                        class="group bg-white rounded-[25px] border border-[#E8E8E8] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                        <!-- Image -->
                        <div class="relative overflow-hidden h-[229px] bg-gray-100">
                            <img
                                :src="relatedBlog.featured_image || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyOSIgdmlld0JveD0iMCAwIDQwMCAyMjkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI5IiBmaWxsPSIjRjNGNEY2Ii8+Cjxzdmcgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgNDggNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMTc2IiB5PSI5MCI+CjxwYXRoIGQ9Ik00MCAzNlYxMkg4VjM2SDQwWk0xNiAxOEgyMFYyNEgxNlYxOFpNMjQgMjhIMTZWMzBIMjRWMjhaTTMyIDI4SDI0VjMwSDMyVjI4Wk0zMiAxOEgyNFYyNEgzMlYxOFoiIGZpbGw9IiM5Q0E0QUYiLz4KPC9zdmc+Cjwvc3ZnPg=='"
                                :alt="relatedBlog.title"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                @error="handleImageError"
                            />
                        </div>

                        <!-- Content -->
                        <div class="p-6">
                            <h3 class="text-[#121212] text-2xl font-semibold leading-[28.8px] tracking-[0.48px] font-instrument-sans mb-4 group-hover:text-[#FF3621] transition-colors duration-300">
                                {{ relatedBlog.title }}
                            </h3>
                            <p class="text-gray-500 text-base tracking-wide font-instrument-sans">
                                {{ relatedBlog.published_at }}
                            </p>
                        </div>
                    </a>
                </div>
                </div>
            </div>
        </section>

        <!-- Footer Component -->
        <FooterSection />
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import Header from '@/Components/Header.vue';
import FooterSection from '@/Components/FooterSection.vue';

// Props from BlogController
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

// Track failed images to prevent infinite loops
const failedImages = new Set();

// Handle image loading errors
const handleImageError = (event) => {
    const imgSrc = event.target.src;

    // Prevent infinite loop if placeholder also fails
    if (failedImages.has(imgSrc)) {
        console.warn('Image failed to load, using fallback:', imgSrc);
        event.target.style.display = 'none'; // Hide broken image
        return;
    }

    failedImages.add(imgSrc);

    // Try a different fallback or hide the image
    if (imgSrc.includes('placeholder.png')) {
        event.target.style.display = 'none'; // Hide if placeholder fails
    } else {
        // Only try placeholder once
        event.target.src = '/images/placeholder.png';
    }
};
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
    min-height: 677px;
}

/* Blog Content Styling */
.blog-content {
    word-break: break-word;
}

.blog-content h2 {
    font-size: 36px;
    font-weight: 600;
    line-height: 43.2px;
    letter-spacing: 0.72px;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    color: #121212;
}

.blog-content h3 {
    font-size: 28px;
    font-weight: 600;
    line-height: 33.6px;
    letter-spacing: 0.56px;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #121212;
}

.blog-content p {
    margin-bottom: 1.5rem;
}

.blog-content ul,
.blog-content ol {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
}

.blog-content li {
    margin-bottom: 0.5rem;
}

.blog-content a {
    color: #FF3621;
    text-decoration: underline;
    transition: color 0.3s ease;
}

.blog-content a:hover {
    color: #121212;
}

/* Quote Section */
.quote-section blockquote {
    position: relative;
}

/* Comparison Table Responsive */
@media (max-width: 768px) {
    .comparison-table-section table {
        font-size: 16px;
    }
    
    .comparison-table-section th,
    .comparison-table-section td {
        padding: 1rem;
        font-size: 16px;
        line-height: 24px;
    }
}

/* Responsive Typography */
@media (max-width: 1024px) {
    .hero-section h1 {
        font-size: 42px !important;
        line-height: 1.25 !important;
    }

    .blog-content {
        font-size: 18px;
        line-height: 32px;
    }

    .blog-content h2 {
        font-size: 30px;
        line-height: 38px;
    }

    .blog-content h3 {
        font-size: 24px;
        line-height: 30px;
    }

    /* Grid adjustments for tablets */
    .grid.lg\\:grid-cols-12,
    .grid.lg\\:grid-cols-4 {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .hero-section h1 {
        font-size: 36px !important;
        line-height: 1.3 !important;
    }
}

@media (max-width: 480px) {
    .hero-section h1 {
        font-size: 24px !important;
        line-height: 1.4 !important;
    }
}

@media (max-width: 640px) {
    .hero-section {
        min-height: auto;
    }

    .hero-section h1 {
        font-size: 28px !important;
        line-height: 1.35 !important;
    }

    .blog-content {
        font-size: 16px;
        line-height: 28px;
    }

    .blog-content h2 {
        font-size: 24px;
        line-height: 32px;
    }

    .blog-content h3 {
        font-size: 20px;
        line-height: 26px;
    }

    .quote-section {
        flex-direction: column;
    }

    .quote-section blockquote {
        font-size: 24px;
        line-height: 36px;
    }

    .cta-section h2 {
        font-size: 28px;
        line-height: 36px;
    }

    .cta-section p {
        font-size: 18px;
        line-height: 30px;
    }

    /* Mobile grid adjustments */
    .grid.lg\\:grid-cols-12,
    .grid.lg\\:grid-cols-4 {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    /* Mobile spacing adjustments */
    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    /* Mobile hero section adjustments */
    .hero-section .lg\\:col-span-7,
    .hero-section .lg\\:col-span-5 {
        order: 1;
    }

    .hero-section .lg\\:col-span-5 {
        order: 2;
    }
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero-section,
.blog-content-section,
.cta-section {
    animation: fadeIn 0.8s ease-out;
}

/* Button Hover Effect */
.cta-section a {
    position: relative;
    overflow: hidden;
}

.cta-section a::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.cta-section a:hover::before {
    width: 300px;
    height: 300px;
}
</style>