<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <Head title="Page Not Found" />

        <div class="max-w-lg w-full text-center">
            <!-- SVG Illustration -->
            <div class="mb-8 flex justify-center">
                <svg
                    class="w-64 h-64 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <!-- Custom 404 SVG -->
                    <g transform="scale(0.8) translate(3, 3)">
                        <!-- Magnifying glass -->
                        <circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2" fill="none"/>
                        <path d="M21 21l-6-6" stroke="currentColor" stroke-width="2"/>

                        <!-- Question mark inside -->
                        <g transform="translate(10, 10)">
                            <circle cx="0" cy="0" r="5" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
                            <path d="M-1.5,-1.5 Q0,-3 1.5,-1.5 Q0,0 0,1" stroke="currentColor" stroke-width="1.5" fill="none"/>
                            <circle cx="0" cy="2.5" r="0.3" fill="currentColor"/>
                        </g>

                        <!-- Decorative elements -->
                        <circle cx="3" cy="5" r="1" fill="currentColor" opacity="0.2"/>
                        <circle cx="19" cy="7" r="0.8" fill="currentColor" opacity="0.15"/>
                        <circle cx="5" cy="18" r="0.6" fill="currentColor" opacity="0.1"/>
                        <circle cx="17" cy="16" r="0.9" fill="currentColor" opacity="0.2"/>
                    </g>
                </svg>
            </div>

            <!-- 404 Text -->
            <div class="mb-8">
                <h1 class="text-8xl md:text-9xl font-bold text-brand-red mb-4 tracking-tight">
                    404
                </h1>
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Page Not Found
                </h2>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                    Oops! The page you're looking for seems to have wandered off into the digital void.
                    Don't worry, it happens to the best of us.
                </p>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <!-- Back to Home Button -->
                <Link
                    href="/"
                    class="inline-flex items-center px-8 py-3 bg-brand-red text-white font-semibold rounded-full hover:bg-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-200"
                >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                    Back to Home
                </Link>

                <!-- Go Back Button -->
                <button
                    @click="goBack"
                    class="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-medium rounded-full border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200"
                >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    Go Back
                </button>
            </div>

            <!-- Additional Help -->
            <div class="mt-12 pt-8 border-t border-gray-200">
                <p class="text-sm text-gray-500 mb-4">
                    Need help? Here are some useful links:
                </p>
                <div class="flex flex-wrap gap-4 justify-center">
                    <Link
                        href="/"
                        class="text-brand-red hover:text-red-600 text-sm font-medium transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        href="/contact"
                        class="text-brand-red hover:text-red-600 text-sm font-medium transition-colors duration-200"
                    >
                        Contact Us
                    </Link>
                    <button
                        @click="reportIssue"
                        class="text-brand-red hover:text-red-600 text-sm font-medium transition-colors duration-200"
                    >
                        Report Issue
                    </button>
                </div>
            </div>

            <!-- Sinki.ai Branding -->
            <div class="mt-8">
                <img
                    src="/images/sinkilogo1.png"
                    alt="Sinki.ai"
                    class="h-8 w-auto mx-auto opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
            </div>
        </div>

        <!-- Floating Animation Elements -->
        <div class="fixed inset-0 pointer-events-none overflow-hidden">
            <div class="floating-element floating-element-1"></div>
            <div class="floating-element floating-element-2"></div>
            <div class="floating-element floating-element-3"></div>
            <div class="floating-element floating-element-4"></div>
            <div class="floating-element floating-element-5"></div>
        </div>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';

const goBack = () => {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = '/';
    }
};

const reportIssue = () => {
    const subject = encodeURIComponent('404 Error Report');
    const body = encodeURIComponent(`Hello Sinki.ai team,

I encountered a 404 error while trying to access: ${window.location.href}

Please investigate this issue.

Thank you!`);

    window.location.href = `mailto:support@sinki.ai?subject=${subject}&body=${body}`;
};
</script>

<style scoped>
/* Brand Colors */
.bg-brand-red {
    background-color: #FF3621;
}

.text-brand-red {
    color: #FF3621;
}

.hover\:bg-red-600:hover {
    background-color: #e53e3e;
}

.hover\:text-red-600:hover {
    color: #e53e3e;
}

.focus\:ring-red-200:focus {
    --tw-ring-color: rgba(255, 54, 33, 0.2);
}

/* Floating Animation Elements */
.floating-element {
    position: absolute;
    background: rgba(255, 54, 33, 0.1);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
    pointer-events: none;
}

.floating-element-1 {
    width: 60px;
    height: 60px;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
    animation-duration: 8s;
}

.floating-element-2 {
    width: 40px;
    height: 40px;
    top: 60%;
    right: 15%;
    animation-delay: 2s;
    animation-duration: 6s;
}

.floating-element-3 {
    width: 80px;
    height: 80px;
    bottom: 30%;
    left: 5%;
    animation-delay: 1s;
    animation-duration: 10s;
}

.floating-element-4 {
    width: 30px;
    height: 30px;
    top: 10%;
    right: 25%;
    animation-delay: 3s;
    animation-duration: 7s;
}

.floating-element-5 {
    width: 50px;
    height: 50px;
    bottom: 20%;
    right: 5%;
    animation-delay: 4s;
    animation-duration: 9s;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px) scale(1);
        opacity: 0.3;
    }
    50% {
        transform: translateY(-30px) scale(1.1);
        opacity: 0.6;
    }
}

/* Button Hover Effects */
.transform {
    transition: transform 0.3s ease;
}

.hover\:scale-105:hover {
    transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .floating-element {
        display: none;
    }
}

/* Smooth animations */
* {
    transition-property: transform, opacity, background-color, border-color, color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

/* Focus states for accessibility */
button:focus,
a:focus {
    outline: none;
}

/* Custom 404 number styling */
h1 {
    text-shadow: 0 4px 8px rgba(255, 54, 33, 0.1);
}

/* Subtle background pattern */
.min-h-screen {
    background-image:
        radial-gradient(circle at 25% 25%, rgba(255, 54, 33, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(255, 54, 33, 0.03) 0%, transparent 50%);
}
</style>