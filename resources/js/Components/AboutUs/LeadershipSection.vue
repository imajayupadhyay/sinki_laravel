<template>
    <section
        class="leadership-section py-20 lg:py-32 relative overflow-hidden w-full"
        :style="{
            backgroundImage: 'url(/images/aboutussecbanner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }"
    >
        <!-- Background decorative elements -->
        <div class="absolute top-20 left-20 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl animate-pulse-delayed"></div>

        <div class="w-full px-6 sm:px-8 lg:px-12 xl:px-20">
            <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                <!-- Left Content (35%) -->
                <div class="w-full lg:w-[35%] space-y-8">
                    <!-- Header Tag -->
                    <div class="animate-fade-in-up">
                        <span class="text-white text-sm sm:text-base font-medium uppercase tracking-wider opacity-80">
                            {{ headerTag }}
                        </span>
                    </div>

                    <!-- Main Title -->
                    <h2 class="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight animate-slide-up-title">
                        {{ title }}
                    </h2>

                    <!-- Description -->
                    <p class="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed opacity-90 animate-slide-up-subtitle mt-4">
                        {{ description }}
                    </p>
                </div>

                <!-- Right Content - Team Cards in Horizontal Layout (65%) -->
                <div class="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                    <div
                        v-for="(member, index) in teamMembers"
                        :key="index"
                        class="team-card bg-white rounded-2xl p-4 lg:p-6 flex flex-col items-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 animate-team-card"
                        :style="`animation-delay: ${0.8 + index * 0.2}s`"
                    >
                        <!-- Profile Image -->
                        <div class="flex-shrink-0 mb-3 w-full">
                            <div class="w-full aspect-[3/4] rounded-xl overflow-hidden bg-gray-200">
                                <img
                                    :src="member.image"
                                    :alt="member.name"
                                    class="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>

                        <!-- Member Info -->
                        <div class="flex-1 text-left w-full">
                            <h3 class="text-brand-dark text-base lg:text-lg font-semibold mb-0.5">
                                {{ member.name }}
                            </h3>
                            <p class="text-gray-600 text-xs lg:text-sm font-medium">
                                {{ member.position }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

// Props for customization
const props = defineProps({
    headerTag: {
        type: String,
        default: 'OUR LEADERSHIP'
    },
    title: {
        type: String,
        default: 'Visionaries Behind Sinki'
    },
    description: {
        type: String,
        default: 'Our leadership brings years of experience in solving real enterprise data challenges and a shared belief that systems work best when they are intentional, structured, and built for long-term clarity.'
    },
    teamMembers: {
        type: Array,
        default: () => [
            {
                name: 'Gaurav Chauhan',
                position: 'Founder & CEO',
                image: '/images/Mr Gaurav Chauhan.png'
            },
            {
                name: 'Amit Kumar Pandey',
                position: 'Co-Founder & CTO',
                image: '/images/Mr Amit Pandey.png'
            },
            {
                name: 'Neeraj Kumar',
                position: 'Chief Operating Officer',
                image: '/images/Mr Neeraj Kumar.png'
            }
        ]
    }
});
</script>

<style scoped>
/* Font Family - Instrument Sans */
.leadership-section {
    font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Brand Colors */
.text-brand-dark {
    color: #121212;
}

.bg-brand-red {
    background-color: #FF3621;
}

/* Animated Background Pulse */
@keyframes pulse-delayed {
    0%, 100% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.1);
    }
}

.animate-pulse-delayed {
    animation: pulse-delayed 4s ease-in-out infinite;
    animation-delay: 1s;
}

/* Enhanced Modern Animations */
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUpTitle {
    0% {
        opacity: 0;
        transform: translateY(60px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideUpSubtitle {
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes teamCardIn {
    0% {
        opacity: 0;
        transform: translateY(50px) scale(0.9) rotateY(15deg);
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1) rotateY(0deg);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    animation-delay: 0.2s;
    opacity: 0;
}

.animate-slide-up-title {
    animation: slideUpTitle 1s ease-out forwards;
    animation-delay: 0.4s;
    opacity: 0;
}

.animate-slide-up-subtitle {
    animation: slideUpSubtitle 1s ease-out forwards;
    animation-delay: 0.6s;
    opacity: 0;
}

.animate-team-card {
    animation: teamCardIn 0.8s ease-out forwards;
    opacity: 0;
}

/* Legacy animations for backward compatibility */
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-up {
    animation: slideUp 0.8s ease-out;
    animation-fill-mode: backwards;
}

/* Team Card Styles */
.team-card {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.team-card:hover {
    transform: translateY(-8px);
    box-shadow:
        0 25px 50px rgba(0, 0, 0, 0.25),
        0 0 0 1px rgba(255, 255, 255, 0.05);
}

/* Profile Image Hover Effect */
.team-card:hover img {
    transform: scale(1.05);
}

.team-card img {
    transition: transform 0.3s ease;
}

/* Image Container Responsive Styles */
.team-card .aspect-\[3\/4\] {
    aspect-ratio: 3/4;
    /* Fallback for browsers that don't support aspect-ratio */
    position: relative;
}

/* Fallback for older browsers */
.team-card .aspect-\[3\/4\]::before {
    content: '';
    display: block;
    padding-top: 133.33%; /* 4/3 ratio fallback */
}

/* Ensure image positioning works with fallback */
.team-card .aspect-\[3\/4\] img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

/* Responsive Styles */
@media (max-width: 1280px) {
    .leadership-section h2 {
        font-size: 60px !important;
        line-height: 1.1;
    }

    /* Adjust image aspect ratio for larger tablets */
    .team-card .aspect-\[3\/4\] {
        aspect-ratio: 4/5;
    }

    /* Fallback padding adjustment for 4/5 ratio */
    .team-card .aspect-\[3\/4\]::before {
        padding-top: 125%; /* 5/4 ratio fallback */
    }
}

@media (max-width: 1024px) {
    .leadership-section {
        padding: 60px 0;
    }

    .leadership-section h2 {
        font-size: 48px !important;
        line-height: 1.1;
    }

    .leadership-section p {
        font-size: 20px !important;
        line-height: 1.5;
    }
}

@media (max-width: 768px) {
    .leadership-section {
        padding: 40px 0;
    }

    .leadership-section h2 {
        font-size: 40px !important;
        line-height: 1.1;
    }

    .leadership-section p {
        font-size: 18px !important;
        line-height: 1.6;
    }

    .team-card {
        padding: 1rem !important;
    }

    .team-card h3 {
        font-size: 16px !important;
    }

    .team-card p {
        font-size: 12px !important;
    }

    /* Adjust image aspect ratio for mobile tablets */
    .team-card .aspect-\[3\/4\] {
        aspect-ratio: 1/1;
    }

    /* Fallback padding adjustment for square ratio */
    .team-card .aspect-\[3\/4\]::before {
        padding-top: 100%; /* 1/1 ratio fallback */
    }
}

@media (max-width: 640px) {
    .leadership-section {
        padding: 30px 0;
    }

    .grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .leadership-section h2 {
        font-size: 32px !important;
        line-height: 1.2;
    }

    .leadership-section p {
        font-size: 16px !important;
        line-height: 1.6;
    }

    .team-card {
        padding: 1rem !important;
    }

    /* Square aspect ratio for small mobile screens */
    .team-card .aspect-\[3\/4\] {
        aspect-ratio: 1/1;
    }

    /* Fallback padding for square ratio on small screens */
    .team-card .aspect-\[3\/4\]::before {
        padding-top: 100%; /* 1/1 ratio fallback */
    }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
    .animate-slide-up {
        animation: none;
        opacity: 1;
    }

    .team-card:hover {
        transform: translateY(-2px);
    }

    .team-card img {
        transition: none;
    }
}
</style>