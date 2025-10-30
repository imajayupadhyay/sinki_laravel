<template>
    <section id="insights" class="insights-section bg-white py-20 lg:py-32 relative overflow-hidden">
        <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 xl:gap-10 items-start">
                
                <!-- Left Content -->
                <div class="insights-content">
                    <!-- Section Label -->
                    <div class="mb-8 animate-fade-in">
                        <span class="text-brand-dark text-lg font-medium uppercase tracking-[1.8px]">
                            Insights & Resources
                        </span>
                    </div>

                    <!-- Main Heading -->
                    <h2 class="text-brand-dark font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[78px] leading-tight lg:leading-tight xl:leading-[85.8px] mb-6 max-w-[834px] animate-slide-up">
                        Latest Insights on Databricks, Data & AI
                    </h2>

                    <!-- Description -->
                    <p class="text-brand-dark text-lg sm:text-xl lg:text-2xl xl:text-[30px] leading-relaxed lg:leading-relaxed xl:leading-[45px] mb-12 max-w-[769px] animate-slide-up-delayed">
                        Stay ahead with guides, blogs, and practical insights to help your enterprise scale smarter with Databricks.
                    </p>

                    <!-- CTA Button -->
                    <div class="animate-fade-in-up">
                        <a
                            href="/blog"
                            class="inline-flex items-center gap-3 px-8 py-3 bg-brand-dark border-2 border-brand-dark rounded-full text-white text-lg font-bold capitalize hover:bg-transparent hover:text-brand-dark transition-all duration-300 btn-hover-effect group"
                        >
                            Explore Resources
                            <svg class="w-10 h-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Right Content - Blog Cards -->
                <div class="insights-cards flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-8 animate-slide-in-right max-w-full overflow-visible">

                    <!-- Blog Card (v-for loop) -->
                    <a
                        v-for="(blog, index) in displayBlogs"
                        :key="index"
                        :href="blog.slug ? `/blog/${blog.slug}` : '#'"
                        :class="[
                            'blog-card group bg-white border border-gray-200 rounded-[25px] overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 block',
                            index === 0 ? 'blog-card-1 mt-0 sm:mt-20' : 'blog-card-2 mt-0 sm:-mt-10'
                        ]"
                    >
                        <!-- Image Container -->
                        <div class="relative overflow-hidden h-[229px]">
                            <img
                                :src="blog.image || '/assets/images/blog1.png'"
                                :alt="blog.title"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                @error="handleImageError"
                            >
                            <div class="blog-image-placeholder hidden items-center justify-center w-full h-full bg-gray-200">
                                <span class="text-gray-500 font-semibold">Blog Image</span>
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="p-6 flex flex-col h-[180px]">
                            <!-- Badge and Arrow -->
                            <div class="flex items-center justify-between mb-4">
                                <span class="inline-block px-5 py-1 bg-brand-gray rounded-[20px] text-brand-dark text-sm font-semibold tracking-wide uppercase">
                                    {{ blog.badge }}
                                </span>
                                <div class="w-8 h-8 flex items-center justify-center">
                                    <svg class="w-6 h-6 text-brand-dark group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Title -->
                            <h3 class="text-brand-dark text-[24px] sm:text-[28px] font-semibold leading-[28.8px] sm:leading-[33.6px] tracking-[0.48px] sm:tracking-[0.56px] mb-auto group-hover:text-brand-red transition-colors duration-300">
                                {{ blog.title }}
                            </h3>
                        </div>
                    </a>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';

// Define props to receive blog data from parent component
const props = defineProps({
    blogs: {
        type: Array,
        default: () => []
    }
});

// Computed property to format blogs data for display
const displayBlogs = computed(() => {
    // If no blogs from backend, use fallback data
    if (props.blogs.length === 0) {
        return [
            {
                title: "How To Make Your Data Ready For AI",
                badge: "Blog",
                image: "/assets/images/blog1.png"
            },
            {
                title: "The Anatomy Of A Healthcare Data Strategy",
                badge: "Blog",
                image: "/assets/images/blog2.png"
            }
        ];
    }

    // Format backend data to match component structure
    return props.blogs.map(blog => ({
        title: blog.title,
        badge: blog.category ? blog.category.name : "Blog",
        image: blog.featured_image || "/assets/images/blog1.png",
        slug: blog.slug
    }));
});


// Handle image loading errors
const handleImageError = (event) => {
    console.error('Failed to load blog image:', event.target.src);
    // Show placeholder instead of hiding the image
    event.target.style.display = 'none';
    const placeholder = event.target.nextElementSibling;
    if (placeholder && placeholder.classList.contains('blog-image-placeholder')) {
        placeholder.style.display = 'flex';
    }
};
</script>

<style scoped>
/* Animation keyframes */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Animation classes */
.animate-fade-in {
    animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
    animation: slideUp 0.8s ease-out 0.2s both;
}

.animate-slide-up-delayed {
    animation: slideUp 0.8s ease-out 0.4s both;
}

.animate-slide-in-right {
    animation: slideInRight 0.8s ease-out 0.3s both;
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out 0.5s both;
}

/* Button hover effect */
.btn-hover-effect {
    position: relative;
    overflow: hidden;
}

.btn-hover-effect::before {
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

.btn-hover-effect:hover::before {
    width: 300px;
    height: 300px;
}

/* Blog Cards */
.blog-card {
    width: calc(20vw);
    min-width: 280px;
    max-width: 380px;
    flex-shrink: 0;
    height: 440px;
}

.insights-cards {
    width: 100%;
}

/* Card hover effects */
.blog-card {
    position: relative;
}

.blog-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 25px;
    opacity: 0;
    transition: opacity 0.5s ease;
    background: linear-gradient(
        135deg,
        rgba(255, 54, 33, 0.05) 0%,
        transparent 50%
    );
    pointer-events: none;
}

.blog-card:hover::after {
    opacity: 1;
}

/* Image zoom effect container */
.blog-card .relative {
    position: relative;
    overflow: hidden;
}

/* Responsive Styles */
@media (max-width: 1536px) {
    .container-custom {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
}

@media (max-width: 1280px) {
    .container-custom {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    h2 {
        font-size: 64px !important;
        line-height: 70px !important;
    }

    p {
        font-size: 26px !important;
        line-height: 39px !important;
    }

    .blog-card {
        width: calc(18vw) !important;
        max-width: 340px;
        min-width: 260px;
    }

    .blog-card h3 {
        font-size: 24px !important;
        line-height: 30px !important;
    }
}

/* New breakpoint for medium screens (1200px) */
@media (max-width: 1200px) {
    h2 {
        font-size: 56px !important;
        line-height: 62px !important;
    }

    p {
        font-size: 24px !important;
        line-height: 36px !important;
    }

    .blog-card {
        width: calc(16vw) !important;
        max-width: 300px !important;
        min-width: 240px !important;
        height: 400px !important;
    }

    .blog-card h3 {
        font-size: 20px !important;
        line-height: 26px !important;
    }

    .blog-card .p-6 {
        height: 160px !important;
    }
}

/* Additional breakpoint for smaller medium screens (1100px) */
@media (max-width: 1100px) {
    .blog-card {
        width: calc(15vw) !important;
        max-width: 280px !important;
        min-width: 220px !important;
        height: 380px !important;
    }

    .blog-card h3 {
        font-size: 18px !important;
        line-height: 24px !important;
    }

    .blog-card .p-6 {
        height: 150px !important;
        padding: 1rem !important;
    }
}

@media (max-width: 1024px) {
    section {
        padding: 60px 0;
    }
    
    .container-custom {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    
    h2 {
        font-size: 52px !important;
        line-height: 58px !important;
    }
    
    p {
        font-size: 22px !important;
        line-height: 33px !important;
    }

    .insights-cards {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .blog-card {
        margin-top: 0 !important;
    }
}

@media (max-width: 768px) {
    section {
        padding: 40px 0;
    }

    h2 {
        font-size: 40px !important;
        line-height: 48px !important;
        margin-bottom: 1.5rem !important;
    }

    p {
        font-size: 20px !important;
        line-height: 30px !important;
        margin-bottom: 2.5rem !important;
    }

    .grid {
        gap: 2rem !important;
    }

    .insights-cards {
        flex-direction: column;
        align-items: center;
    }

    .blog-card-1 {
        margin-top: 0 !important;
    }

    .blog-card-2 {
        margin-top: 0 !important;
    }

    .blog-card {
        width: 100% !important;
        min-width: unset !important;
        max-width: 100% !important;
    }

    .blog-card h3 {
        font-size: 22px !important;
        line-height: 28px !important;
        min-height: 56px;
    }
}

@media (max-width: 640px) {
    section {
        padding: 40px 0;
    }

    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    h2 {
        font-size: 32px !important;
        line-height: 40px !important;
        margin-bottom: 1rem !important;
    }

    p {
        font-size: 18px !important;
        line-height: 27px !important;
        margin-bottom: 2rem !important;
    }

    .blog-card {
        width: 100% !important;
        min-width: unset !important;
        max-width: 100% !important;
        height: auto !important;
    }

    .blog-card h3 {
        font-size: 20px !important;
        line-height: 26px !important;
    }

    .blog-card .p-6 {
        height: auto !important;
        min-height: 160px;
    }
}


/* Brand color utilities */
.bg-brand-gray {
    background-color: var(--brand-gray, #E8E8E8);
}

.border-brand-gray {
    border-color: var(--brand-gray, #E8E8E8);
}

/* Touch device adjustments */
@media (hover: none) {
    .blog-card:hover {
        transform: none;
    }

    .blog-card:active {
        transform: translateY(-8px);
    }
}
</style>