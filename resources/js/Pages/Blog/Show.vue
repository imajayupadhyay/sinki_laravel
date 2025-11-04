<template>
    <div class="min-h-screen bg-white">
        <Head :title="blog.meta_title || blog.title">
            <meta name="description" :content="blog.meta_description" />
            <meta name="keywords" :content="blog.meta_keywords" />
        </Head>

        <!-- Preview Banner -->
        <div v-if="isPreview" class="bg-yellow-500 text-black px-4 py-2 text-center font-medium">
            <span class="inline-flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                You are viewing a preview of this draft blog post. This is not visible to the public.
            </span>
        </div>

        <!-- Header Component -->
        <Header />

        <!-- Hero Section with Gradient Background -->
        <section class="hero-section relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-[#F6F6E0] via-[#F6F6E0]/90 to-transparent"></div>
            
            <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] relative z-10">
                <div class="max-w-[1720px] mx-auto">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-48 pb-24">

                        <!-- Left Content - 60% -->
                        <div class="lg:col-span-7 space-y-8">
                            <!-- Blog Title -->
                            <h1 class="text-[#121212] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-semibold leading-tight md:leading-snug lg:leading-[1.2] xl:leading-[1.15] font-instrument-sans">
                                {{ blog.title }}
                            </h1>

                            <!-- Author Info -->
                            <div class="flex items-center space-x-4">
                                <!-- Author Avatar -->
                                <div class="w-[60px] h-[60px] rounded-full flex-shrink-0 overflow-hidden">
                                    <img
                                        v-if="blog.author.profile_image_url"
                                        :src="blog.author.profile_image_url"
                                        :alt="blog.author.name"
                                        class="w-full h-full object-cover"
                                        @error="handleImageError"
                                    />
                                    <div v-else class="w-full h-full bg-[#FF3621] flex items-center justify-center">
                                        <span class="text-white text-xl font-semibold font-instrument-sans">{{ blog.author.name.charAt(0).toUpperCase() }}</span>
                                    </div>
                                </div>

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
                            <div class="w-4/5 lg:w-4/5 w-full aspect-[100/60] bg-gray-100 rounded-[20px] overflow-hidden shadow-lg">
                                <img
                                    :src="blog.featured_image || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjxzdmcgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMTY4IiB5PSIxMTgiPgo8cGF0aCBkPSJNNTYgNDhWMTZIOFY0OEg1NlpNMTYgMjRIMjRWMzJIMTZWMjRaTTMyIDM2SDE2VjQwSDMyVjM2Wk00OCAzNkg0MFY0MEg0OFYzNlpNNDggMjRINDBWMzJINDhWMjRaIiBmaWxsPSIjOUNBNEFGIi8+Cjwvc3ZnPgo8L3N2Zz4='"
                                    :alt="blog.title"
                                    class="w-full h-full"
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
        <section class="blog-content-section pb-10">
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

        <!-- Previous/Next Navigation -->
        <section v-if="previousBlog || nextBlog" class="py-16 bg-white">
            <div class="container-custom mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px]">
                <div class="max-w-[1720px] mx-auto">
                    <div class="flex items-center justify-center gap-4">
                        <!-- Previous Button -->
                        <Link
                            v-if="previousBlog"
                            :href="route('blog.show', previousBlog.slug)"
                            class="bg-black text-white px-8 py-4 rounded-[10px] font-semibold text-[16px] leading-[19.2px] tracking-[0.32px] font-instrument-sans hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center min-w-[120px]"
                        >
                            Previous
                        </Link>

                        <!-- Spacer when previous doesn't exist -->
                        <div v-else class="min-w-[120px]"></div>

                        <!-- Next Button -->
                        <Link
                            v-if="nextBlog"
                            :href="route('blog.show', nextBlog.slug)"
                            class="bg-black text-white px-8 py-4 rounded-[10px] font-semibold text-[16px] leading-[19.2px] tracking-[0.32px] font-instrument-sans hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center min-w-[120px]"
                        >
                            Next
                        </Link>

                        <!-- Spacer when next doesn't exist -->
                        <div v-else class="min-w-[120px]"></div>
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
                            <h3 class="text-[#121212] text-2xl font-semibold leading-[28.8px] tracking-[0.48px] font-instrument-sans mb-4">
                                {{ relatedBlog.title }}
                            </h3>

                            <!-- Read More Button -->
                            <div class="mt-4 flex items-center">
                                <div class="inline-flex items-center text-[#FF3621] font-semibold text-[21px] leading-[25.2px] tracking-[0.42px] font-instrument-sans">
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
import { Head, Link } from '@inertiajs/vue3';
import { onMounted, nextTick } from 'vue';
import Header from '@/Components/Header.vue';
import FooterSection from '@/Components/FooterSection.vue';
import BlogCTA from '@/Components/BlogCTA.vue';

// Props from BlogController
const props = defineProps({
    blog: {
        type: Object,
        required: true
    },
    previousBlog: {
        type: Object,
        default: null
    },
    nextBlog: {
        type: Object,
        default: null
    },
    relatedBlogs: {
        type: Array,
        default: () => []
    },
    isPreview: {
        type: Boolean,
        default: false
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

// Process CTA blocks in blog content
const processCTABlocks = () => {
    nextTick(() => {
        const blogContent = document.querySelector('.blog-content');
        if (!blogContent) return;

        // Find all CTA embed elements
        const ctaElements = blogContent.querySelectorAll('.blog-cta-embed[data-cta]');

        ctaElements.forEach(element => {
            try {
                const ctaData = JSON.parse(element.getAttribute('data-cta'));

                // Create the properly styled CTA HTML
                const ctaHTML = `
                    <div class="blog-cta-wrapper-processed" style="padding: 0;">
                        <div class="blog-cta-container-processed" style="
                            position: relative;
                            border-radius: 25px;
                            padding: 48px 32px;
                            text-align: center;
                            overflow: hidden;
                            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                            min-height: 320px;
                            background-color: #F6F6E0;
                            transition: transform 0.3s ease, box-shadow 0.3s ease;
                            display: block;
                        ">
                            <div style="position: relative; z-index: 10; margin: 0 auto;">
                                <h2 style="
                                    color: #121212;
                                    font-weight: 600;
                                    font-size: 36px;
                                    line-height: 1.2;
                                    margin-bottom: 16px;
                                    margin-top: 0;
                                    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                                    display: block;
                                ">${ctaData.title}</h2>
                                <p style="
                                    color: #666666;
                                    font-size: 20px;
                                    line-height: 1.5;
                                    margin-bottom: 32px;
                                    margin-top: 0;
                                    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                                    margin-left: auto;
                                    margin-right: auto;
                                    margin-bottom: 32px;
                                    display: block;
                                ">${ctaData.description}</p>
                                <a href="${ctaData.buttonUrl}" style="
                                    display: inline-flex;
                                    align-items: center;
                                    gap: 12px;
                                    padding: 14px 28px;
                                    background-color: black;
                                    color: white;
                                    text-decoration: none;
                                    border-radius: 50px;
                                    font-weight: bold;
                                    font-size: 18px;
                                    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
                                    transition: all 0.3s ease;
                                    border: 2px solid black;
                                    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                                    margin: 0 auto;
                                " onmouseover="this.style.backgroundColor='transparent'; this.style.color='black';" onmouseout="this.style.backgroundColor='black'; this.style.color='white';">
                                    <span style="color: inherit; text-decoration: none;">${ctaData.buttonText}</span>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="transition: transform 0.3s ease;">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                `;

                // Replace the element with the styled version
                element.outerHTML = ctaHTML;
            } catch (error) {
                console.warn('Failed to process CTA block:', error);
            }
        });
    });
};

onMounted(() => {
    processCTABlocks();
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

/* Blog Content Styling */
.blog-content {
    word-break: break-word;
}

.blog-content :deep(h1) {
    font-size: 42px;
    font-weight: 600;
    line-height: 50.4px;
    letter-spacing: 0.84px;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
    color: #121212;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.blog-content :deep(h2) {
    font-size: 36px;
    font-weight: 600;
    line-height: 43.2px;
    letter-spacing: 0.72px;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    color: #121212;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.blog-content :deep(h3) {
    font-size: 28px;
    font-weight: 600;
    line-height: 33.6px;
    letter-spacing: 0.56px;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #121212;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.blog-content :deep(h4) {
    font-size: 24px;
    font-weight: 600;
    line-height: 28.8px;
    letter-spacing: 0.48px;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #121212;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.blog-content :deep(h5) {
    font-size: 22px;
    font-weight: 600;
    line-height: 26.4px;
    letter-spacing: 0.44px;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
    color: #121212;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.blog-content :deep(h6) {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.4px;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
    color: #121212;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.blog-content :deep(p) {
    margin-bottom: 1.5rem;
    color: #121212;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.blog-content :deep(ul),
.blog-content :deep(ol) {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
    color: #121212;
}

.blog-content :deep(li) {
    margin-bottom: 0.5rem;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.blog-content :deep(a) {
    color: #FF3621;
    text-decoration: underline;
    transition: color 0.3s ease;
}

.blog-content :deep(a:hover) {
    color: #121212;
}

/* Override default link styling for CTA buttons specifically */
.blog-content :deep(.blog-cta-container a),
.blog-content :deep(div.blog-cta-container a) {
    color: white !important;
    text-decoration: none !important;
}

.blog-content :deep(.blog-cta-container a:hover),
.blog-content :deep(div.blog-cta-container a:hover) {
    color: black !important;
    text-decoration: none !important;
}

.blog-content :deep(blockquote) {
    border-left: 4px solid #FF3621;
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: #666666;
    font-size: 24px;
    line-height: 36px;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.blog-content :deep(strong),
.blog-content :deep(b) {
    font-weight: 600;
    color: #121212;
}

.blog-content :deep(em),
.blog-content :deep(i) {
    font-style: italic;
}

.blog-content :deep(code) {
    background-color: #f5f5f5;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
    color: #333;
}

.blog-content :deep(pre) {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1.5rem 0;
    border: 1px solid #e9ecef;
}

.blog-content :deep(pre code) {
    background: none;
    padding: 0;
    border-radius: 0;
    font-size: 14px;
    line-height: 1.6;
}

/* Image Styling - Full Width */
.blog-content :deep(img) {
    width: 100%;
    height: auto;
    margin: 2rem 0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* CTA Block Styling in Blog Content - More Specific Selectors */
.blog-content :deep(.blog-cta-wrapper),
.blog-content :deep(div.blog-cta-wrapper) {
    margin: 3rem 0 !important;
    padding: 0 !important;
    border: none !important;
    display: block !important;
}

.blog-content :deep(.blog-cta-container),
.blog-content :deep(div.blog-cta-container) {
    position: relative !important;
    border-radius: 25px !important;
    padding: 48px 32px !important;
    text-align: center !important;
    overflow: hidden !important;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1) !important;
    min-height: 320px !important;
    background-color: #F6F6E0 !important;
    background-image: none !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease !important;
    display: block !important;
}

.blog-content :deep(.blog-cta-container:hover),
.blog-content :deep(div.blog-cta-container:hover) {
    transform: translateY(-3px) !important;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
}

.blog-content :deep(.blog-cta-content),
.blog-content :deep(div.blog-cta-content) {
    position: relative !important;
    z-index: 10 !important;
    max-width: 600px !important;
    margin: 0 auto !important;
    display: block !important;
}

.blog-content :deep(.blog-cta-container h2),
.blog-content :deep(div.blog-cta-container h2) {
    color: #121212 !important;
    font-weight: 600 !important;
    font-size: 36px !important;
    line-height: 1.2 !important;
    margin-bottom: 16px !important;
    margin-top: 0 !important;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    text-shadow: none !important;
    display: block !important;
}

.blog-content :deep(.blog-cta-container p),
.blog-content :deep(div.blog-cta-container p) {
    color: #666666 !important;
    font-size: 20px !important;
    line-height: 1.5 !important;
    margin-bottom: 32px !important;
    margin-top: 0 !important;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    max-width: 600px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    text-shadow: none !important;
    display: block !important;
}

.blog-content :deep(.blog-cta-container a),
.blog-content :deep(div.blog-cta-container a) {
    display: inline-flex !important;
    align-items: center !important;
    gap: 12px !important;
    padding: 14px 28px !important;
    background-color: black !important;
    color: white !important;
    text-decoration: none !important;
    border-radius: 50px !important;
    font-weight: bold !important;
    font-size: 18px !important;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15) !important;
    transition: all 0.3s ease !important;
    border: 2px solid black !important;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    text-shadow: none !important;
    margin: 0 auto !important;
}

.blog-content :deep(.blog-cta-container a:hover),
.blog-content :deep(div.blog-cta-container a:hover) {
    background-color: transparent !important;
    color: black !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2) !important;
    text-decoration: none !important;
}

.blog-content :deep(.blog-cta-container a span),
.blog-content :deep(div.blog-cta-container a span) {
    color: inherit !important;
    text-decoration: none !important;
}

.blog-content :deep(.blog-cta-container a svg),
.blog-content :deep(div.blog-cta-container a svg) {
    transition: transform 0.3s ease !important;
    fill: none !important;
    stroke: currentColor !important;
}

.blog-content :deep(.blog-cta-container a svg) {
    transition: transform 0.3s ease;
}

.blog-content :deep(.blog-cta-container a:hover svg) {
    transform: translateX(4px);
}

.blog-content :deep(figure) {
    margin: 2rem 0;
    text-align: center;
}

.blog-content :deep(figure img) {
    margin: 0 auto;
}

.blog-content :deep(figcaption) {
    font-size: 16px;
    color: #666666;
    font-style: italic;
    margin-top: 0.5rem;
    text-align: center;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Table Styling */
.blog-content :deep(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    border: 1px solid #CDD7D1;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.blog-content :deep(thead) {
    background-color: #FFFBE5;
}

.blog-content :deep(th) {
    padding: 20px 24px;
    text-align: left;
    font-size: 25px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0.5px;
    color: #121212;
    border-bottom: 1px solid #CDD7D1;
    border-right: 1px solid #CDD7D1;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.blog-content :deep(th:last-child) {
    border-right: none;
}

.blog-content :deep(tbody tr:nth-child(even)) {
    background-color: #FFFBE5;
}

.blog-content :deep(tbody tr:nth-child(odd)) {
    background-color: white;
}

.blog-content :deep(td) {
    padding: 20px 24px;
    font-size: 21px;
    font-weight: 400;
    line-height: 37.8px;
    letter-spacing: 0.42px;
    color: #121212;
    border-bottom: 1px solid #CDD7D1;
    border-right: 1px solid #CDD7D1;
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.blog-content :deep(td:last-child) {
    border-right: none;
}

.blog-content :deep(td:first-child) {
    font-weight: 600;
    font-size: 22px;
    line-height: 26.4px;
    letter-spacing: 0.44px;
}

.blog-content :deep(tbody tr:last-child td) {
    border-bottom: none;
}

/* Quote Section */
.quote-section blockquote {
    position: relative;
}

/* Table Responsive Styles */
@media (max-width: 768px) {
    .blog-content :deep(table) {
        font-size: 14px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .blog-content :deep(th) {
        padding: 12px 16px;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.36px;
    }

    .blog-content :deep(td) {
        padding: 12px 16px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.32px;
    }

    .blog-content :deep(td:first-child) {
        font-size: 17px;
        line-height: 20px;
        letter-spacing: 0.34px;
    }

    /* Comparison Table Responsive */
    .comparison-table-section table {
        font-size: 14px;
    }

    .comparison-table-section th,
    .comparison-table-section td {
        padding: 12px 16px;
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

    .blog-content h1 {
        font-size: 34px;
        line-height: 42px;
    }

    .blog-content :deep(h2) {
        font-size: 30px;
        line-height: 38px;
    }

    .blog-content :deep(h3) {
        font-size: 24px;
        line-height: 30px;
    }

    .blog-content :deep(h4) {
        font-size: 20px;
        line-height: 26px;
    }

    .blog-content :deep(h5) {
        font-size: 18px;
        line-height: 24px;
    }

    .blog-content :deep(h6) {
        font-size: 16px;
        line-height: 22px;
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

    .blog-content h1 {
        font-size: 28px;
        line-height: 36px;
    }

    .blog-content :deep(h2) {
        font-size: 24px;
        line-height: 32px;
    }

    .blog-content :deep(h3) {
        font-size: 20px;
        line-height: 26px;
    }

    .blog-content :deep(h4) {
        font-size: 18px;
        line-height: 24px;
    }

    .blog-content :deep(h5) {
        font-size: 16px;
        line-height: 22px;
    }

    .blog-content :deep(h6) {
        font-size: 15px;
        line-height: 20px;
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

    /* CTA Block Responsive */
    .blog-content :deep(.blog-cta-container) {
        padding: 32px 16px;
        min-height: 280px;
        border-radius: 20px;
    }

    .blog-content :deep(.blog-cta-container h2) {
        font-size: 24px;
        margin-bottom: 12px;
    }

    .blog-content :deep(.blog-cta-container p) {
        font-size: 16px;
        margin-bottom: 24px;
    }

    .blog-content :deep(.blog-cta-container a) {
        padding: 12px 20px;
        font-size: 16px;
        gap: 8px;
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

@media (max-width: 480px) {
    /* CTA Block Extra Small */
    .blog-content :deep(.blog-cta-container) {
        padding: 24px 12px;
        min-height: 240px;
        border-radius: 16px;
    }

    .blog-content :deep(.blog-cta-container h2) {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .blog-content :deep(.blog-cta-container p) {
        font-size: 14px;
        margin-bottom: 20px;
    }

    .blog-content :deep(.blog-cta-container a) {
        padding: 10px 16px;
        font-size: 14px;
        gap: 6px;
    }

    .blog-content :deep(.blog-cta-container a svg) {
        width: 16px;
        height: 16px;
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