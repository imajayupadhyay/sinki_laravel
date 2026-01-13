<template>
    <!-- Combined CTA and Footer Section -->
    <section class="footer-with-cta-section bg-white relative overflow-hidden">
        <!-- Background Image Container -->
        <div class="w-full relative overflow-hidden"
            style="background-image: url('/images/aboutussecbanner.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">
            <!-- Dark overlay for better text visibility -->
            <div class="absolute inset-0 bg-black/70 z-[1]"></div>

            <!-- CTA Section with Glass Effect -->
            <div class="relative z-[2] pt-20 lg:pt-32 pb-0">
                <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24">
                    <!-- CTA Card with Glass Effect -->
                    <div class="cta-card-glass bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12 shadow-2xl overflow-hidden group">
                        <div class="flex flex-col lg:flex-row items-center lg:items-center gap-8">

                            <!-- Left Container - 70% -->
                            <div class="flex-1 w-full lg:w-[70%] space-y-6">
                                <!-- Row 1: Heading -->
                                <div>
                                    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-white leading-tight lg:leading-[61.6px]">
                                        Want to stop guessing and start getting results?
                                    </h2>
                                </div>

                                <!-- Row 2: Split into two columns on desktop, stacked on mobile -->
                                <div class="flex flex-col lg:flex-row space-y-6 lg:space-y-0">
                                    <!-- Left column: Paragraph -->
                                    <div class="flex-1 lg:pr-8">
                                        <p class="text-lg sm:text-xl lg:text-[22px] text-white leading-relaxed lg:leading-[32px]">
                                            Stop wrestling with data. Let's turn it into outcomes that matter.
                                        </p>
                                    </div>

                                    <!-- Right column: Button -->
                                    <div class="flex justify-center lg:justify-start lg:items-center">
                                        <a href="/contact" class="bg-brand-red text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 lg:px-10 rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm sm:text-[16px] uppercase tracking-[0.36px] border-2 border-brand-red">
                                            <span>TALK TO AN EXPERT</span>
                                            <div class="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                                                <svg class="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <!-- Right Container - 30% (Hidden on mobile and tablet) -->
                            <div class="hidden xl:flex w-[30%] justify-center items-center">
                                <!-- Circular Badge with Curved Text -->
                                <div class="relative group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <!-- Outer Circle -->
                                    <div class="w-[180px] h-[180px] rounded-full border-2 border-white flex items-center justify-center group-hover:border-brand-red transition-all duration-500">
                                        <!-- Inner Circle -->
                                        <div class="w-[120px] h-[120px] rounded-full border-2 border-white flex items-center justify-center group-hover:border-brand-red transition-all duration-500">
                                            <!-- Center Icon/Logo -->
                                            <div class="w-[80px] h-[80px] bg-brand-red rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-500 shadow-2xl">
                                                <svg class="w-8 h-8 text-white group-hover:text-brand-red transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                                </svg>
                                            </div>
                                        </div>

                                        <!-- Curved Text around the circle -->
                                        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 180 180">
                                            <defs>
                                                <path id="circle-path" d="M 90,90 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"/>
                                            </defs>
                                            <text class="fill-white group-hover:fill-brand-red text-[14px] font-bold uppercase tracking-wide transition-all duration-500" style="font-family: 'Instrument Sans', sans-serif;">
                                                <textPath href="#circle-path" startOffset="0%">
                                                    START A CONVERSATION ~ START A CONVERSATION ~
                                                </textPath>
                                            </text>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Content -->
            <!-- <footer class="footer-section relative z-[2] border-t border-white/10">
                <div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 py-16 lg:py-20">

                    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-16 xl:gap-20 pb-12 border-b border-white/10">

                        <div class="flex-1 flex flex-col justify-center lg:max-w-sm footer-col">
                            <div class="mb-6">
                                <img
                                    :src="footerData?.content?.logo_url || '/images/sinkidarkmode.png'"
                                    alt="Sinki Logo"
                                    class="h-20 w-auto"
                                    @error="handleImageError"
                                >
                            </div>

                            <p class="text-white text-xl leading-[28px] tracking-[0.4px] mb-6">
                                {{ footerData?.content?.description || 'Data & AI That Drives Real Business Impact' }}
                            </p>

                            <div class="flex items-center gap-4 text-white text-lg font-medium flex-wrap">
                                <a
                                    href="/help"
                                    class="hover:text-brand-red transition-colors duration-300 whitespace-nowrap"
                                >
                                    Help
                                </a>
                                <span class="text-white/30">|</span>
                                <a
                                    href="/privacy-policy"
                                    class="hover:text-brand-red transition-colors duration-300 whitespace-nowrap"
                                >
                                    Privacy Policy
                                </a>
                                <span class="text-white/30">|</span>
                                <a
                                    href="/terms-and-conditions"
                                    class="hover:text-brand-red transition-colors duration-300 whitespace-nowrap"
                                >
                                    Terms & Condition
                                </a>
                            </div>
                        </div>

                        <div class="flex-1 footer-col">
                            <h3 class="text-white text-2xl font-bold tracking-[0.48px] mb-8">
                                Quick Link
                            </h3>
                            <ul class="space-y-5">
                                <li v-for="(link, index) in (footerData?.links?.quick_links || quickLinks)" :key="link.id || index">
                                    <a
                                        :href="link.url"
                                        class="text-white text-xl font-medium hover:text-brand-red transition-colors duration-300 inline-block relative"
                                    >
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="flex-1 footer-col">
                            <h3 class="text-white text-2xl font-bold tracking-[0.48px] mb-8">
                                Services
                            </h3>
                            <ul class="space-y-5">
                                <li v-for="(service, index) in (footerData?.links?.services || services)" :key="service.id || index">
                                    <a
                                        :href="service.url"
                                        class="text-white text-xl font-medium hover:text-brand-red transition-colors duration-300 inline-block relative"
                                    >
                                        {{ service.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="flex-1 footer-col">
                            <h3 class="text-white text-2xl font-bold tracking-[0.48px] mb-8">
                                Contact
                            </h3>
                            <div class="space-y-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                        </svg>
                                    </div>
                                    <a href="tel:+123456789" class="text-white text-xl hover:text-brand-red transition-colors duration-300">
                                        +123 456 789
                                    </a>
                                </div>

                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                        </svg>
                                    </div>
                                    <a href="mailto:domain@gmail.com" class="text-white text-xl hover:text-brand-red transition-colors duration-300">
                                        domain@gmail.com
                                    </a>
                                </div>

                                <div class="flex items-start gap-3">
                                    <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                        </svg>
                                    </div>
                                    <div class="text-white text-xl">
                                        D-5, Third Floor, Logix Infotech Park,<br>
                                        Sec- 59, Noida - 201301
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="pt-8 flex justify-center">
                        <p class="text-white text-lg font-medium leading-[25.2px] tracking-[0.36px] text-center">
                            Copyright © {{ currentYear }} {{ footerData?.content?.copyright_text || 'All Rights Reserved.' }}
                        </p>
                    </div>

                </div>
            </footer> -->

            <FooterSection />
        </div>
    </section>
</template>



<script setup>
import { ref, computed, onMounted } from 'vue';
import FooterSection from '@/Components/FooterSection.vue';
// Footer data from API
const footerData = ref(null);
const isLoading = ref(true);

// Default/fallback data
const quickLinks = ref([
    { name: 'Company', url: '/about' },
    { name: 'Insights', url: '/this-week-in-databricks' },
    { name: 'Contact Us', url: '/contact' }
]);

const services = ref([
    { name: 'Data Engineering & Modernization', url: '/services/data-engineering' },
    { name: 'Data Management & Governance', url: '/services/data-management' },
    { name: 'Data Analytics & Business Intelligence', url: '/services/data-analytics' },
    { name: 'Data Science', url: '/services/data-science' }
]);

// Current Year
const currentYear = computed(() => 2026);

// Fetch footer data from API
const fetchFooterData = async () => {
    try {
        const response = await fetch('/api/footer');
        if (response.ok) {
            footerData.value = await response.json();
        }
    } catch (error) {
        console.error('Error fetching footer data:', error);
    } finally {
        isLoading.value = false;
    }
};

// Handle image loading errors
const handleImageError = (event) => {
    console.error('Failed to load footer logo:', event.target.src);
    event.target.style.display = 'none';
};

// Fetch data on component mount
onMounted(() => {
    fetchFooterData();
});
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

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out 0.6s both;
}

/* CTA Card Glass Effect */
.cta-card-glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-card-glass:hover {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transform: translateY(-5px);
    box-shadow:
        0 20px 40px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

/* Enhanced glass effect for better visibility */
.cta-card-glass::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.05) 50%,
        rgba(255, 255, 255, 0.1) 100%
    );
    border-radius: inherit;
    pointer-events: none;
}

/* Footer Section Styles */
.footer-section {
    font-family: 'Instrument Sans', sans-serif;
}

/* Footer Column Animation */
.footer-col {
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: backwards;
    min-width: 0;
}

.footer-col:nth-child(1) { animation-delay: 0.1s; }
.footer-col:nth-child(2) { animation-delay: 0.2s; }
.footer-col:nth-child(3) { animation-delay: 0.3s; }
.footer-col:nth-child(4) { animation-delay: 0.4s; }

/* Link Hover Effects */
.footer-col a {
    position: relative;
}

.footer-col a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #FF3621;
    transition: width 0.3s ease;
}

.footer-col a:hover::after {
    width: 100%;
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
        font-size: clamp(2.5rem, 5vw, 3.5rem);
    }

    h3 {
        font-size: 20px;
    }

    p, a {
        font-size: 18px;
    }
}

@media (max-width: 1024px) {
    .container-custom {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    h2 {
        font-size: clamp(2rem, 4.5vw, 3rem);
    }

    .flex.flex-col.lg\:flex-row {
        gap: 2rem;
    }
}

@media (max-width: 768px) {
    .container-custom {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }

    h2 {
        font-size: clamp(1.75rem, 4vw, 2.5rem);
    }

    h3 {
        font-size: 18px;
        margin-bottom: 1.5rem;
    }

    p, a {
        font-size: 16px;
    }

    .flex.items-center.gap-4 {
        gap: 0.75rem;
        font-size: 14px;
    }

    /* Hide circular badge on mobile */
    .absolute.top-8.right-8 {
        display: none !important;
    }
}

@media (max-width: 640px) {
    .container-custom {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    h2 {
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    h3 {
        font-size: 16px;
    }

    p, a {
        font-size: 14px;
    }

    .flex.items-center.gap-4 {
        font-size: 12px;
        gap: 0.5rem;
        flex-direction: column;
        align-items: flex-start;
    }

    .flex.items-center.gap-4 span {
        display: none;
    }

    img.h-20 {
        height: 3rem;
    }
}

/* Responsive text wrapping */
h2, p {
    text-wrap: balance;
}

/* Touch device adjustments */
@media (hover: none) {
    .btn-hover-effect:hover::before {
        width: 0;
        height: 0;
    }

    .btn-hover-effect:active::before {
        width: 150px;
        height: 150px;
    }
}
</style>