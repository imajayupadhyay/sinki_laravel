<template>
    <div
        class="min-h-screen relative flex items-center justify-center overflow-hidden"
        :style="{
            backgroundImage: 'url(/images/heroobannersinki.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }"
    >
        <Head title="Forgot Password" />

        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-0"></div>

        <!-- Forgot Password Container -->
        <div class="relative z-10 w-full max-w-md mx-4">
            <!-- Glass morphism card -->
            <div class="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-10">

                <!-- Logo Section -->
                <div class="text-center mb-8">
                    <div class="mb-6">
                        <img
                            src="/images/sinkilogo1.png"
                            alt="Sinki.ai Logo"
                            class="h-16 md:h-20 w-auto mx-auto object-contain"
                        />
                    </div>
                    <div class="text-6xl mb-4">🔑</div>
                    <h1 class="text-2xl md:text-3xl font-bold text-white mb-2">
                        Forgot Password
                    </h1>
                    <p class="text-white/80 text-sm md:text-base">
                        Enter your email to receive a password reset code
                    </p>
                </div>

                <!-- Success Message -->
                <div v-if="$page.props.flash?.success" class="mb-6">
                    <div class="bg-green-500/20 border border-green-500/30 rounded-xl p-4">
                        <div class="flex items-center">
                            <svg class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <p class="text-green-400 text-sm font-medium">
                                {{ $page.props.flash.success }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Forgot Password Form -->
                <form @submit.prevent="submit" class="space-y-6">
                    <!-- Email Field -->
                    <div class="space-y-2">
                        <label for="email" class="block text-sm font-semibold text-white/90">
                            Admin Email Address
                        </label>
                        <div class="relative">
                            <input
                                id="email"
                                v-model="form.email"
                                type="email"
                                class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                                :class="{ 'border-red-500 ring-2 ring-red-500': form.errors.email }"
                                placeholder="Enter your admin email"
                                required
                                autocomplete="email"
                            />
                            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg class="h-5 w-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                        </div>
                        <div v-if="form.errors.email" class="text-red-400 text-sm mt-1 font-medium">
                            {{ form.errors.email }}
                        </div>
                    </div>

                    <!-- Security Notice -->
                    <div class="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div class="flex items-start">
                            <svg class="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <p class="text-white/90 text-sm font-medium">Security Notice</p>
                                <p class="text-white/70 text-xs mt-1">
                                    A verification code will be sent to your email. This helps ensure account security.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="space-y-3">
                        <!-- Send Code Button -->
                        <button
                            type="submit"
                            :disabled="form.processing"
                            class="w-full bg-brand-red hover:bg-red-600 disabled:bg-red-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed transform hover:translate-y-[-2px] active:translate-y-0 shadow-lg hover:shadow-xl"
                        >
                            <span v-if="form.processing" class="flex items-center justify-center">
                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                            <span v-else class="flex items-center justify-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Send Reset Code
                            </span>
                        </button>

                        <!-- Back to Login -->
                        <button
                            type="button"
                            @click="goToLogin"
                            class="w-full text-white/60 hover:text-white font-medium py-2 transition-colors duration-300"
                        >
                            ← Back to Login
                        </button>
                    </div>
                </form>

                <!-- Additional Security Info -->
                <div class="mt-6 text-center">
                    <p class="text-white/60 text-xs">
                        🔒 Reset codes expire after 15 minutes for security
                    </p>
                </div>
            </div>
        </div>

        <!-- Floating Particles Effect -->
        <div class="absolute inset-0 pointer-events-none z-0">
            <div class="floating-particle particle-1"></div>
            <div class="floating-particle particle-2"></div>
            <div class="floating-particle particle-3"></div>
            <div class="floating-particle particle-4"></div>
            <div class="floating-particle particle-5"></div>
        </div>
    </div>
</template>

<script setup>
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('admin.forgot-password.send'), {
        onFinish: () => {
            // Don't reset email on error to preserve entered email
            if (!form.hasErrors) {
                form.reset('email');
            }
        },
    });
};

const goToLogin = () => {
    window.location.href = route('admin.login');
};
</script>

<style scoped>
/* Brand Colors matching your theme */
.bg-brand-red {
    background-color: #FF3621;
}

.ring-brand-red {
    --tw-ring-color: #FF3621;
}

.text-brand-red {
    color: #FF3621;
}

/* Floating Particles Animation */
.floating-particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
}

.particle-1 {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
    animation-duration: 6s;
}

.particle-2 {
    top: 60%;
    left: 80%;
    animation-delay: 1s;
    animation-duration: 8s;
}

.particle-3 {
    top: 30%;
    right: 15%;
    animation-delay: 2s;
    animation-duration: 7s;
}

.particle-4 {
    bottom: 30%;
    left: 20%;
    animation-delay: 3s;
    animation-duration: 9s;
}

.particle-5 {
    bottom: 60%;
    right: 25%;
    animation-delay: 4s;
    animation-duration: 5s;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
        opacity: 0.3;
    }
    50% {
        transform: translateY(-20px) rotate(180deg);
        opacity: 0.8;
    }
}

/* Glass morphism enhancements */
.backdrop-blur-xl {
    backdrop-filter: blur(24px);
}

/* Input focus enhancements */
input:focus {
    box-shadow: 0 0 0 2px rgba(255, 54, 33, 0.2);
}

/* Button hover animations */
button[type="submit"]:hover {
    box-shadow: 0 10px 25px rgba(255, 54, 33, 0.4);
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .backdrop-blur-xl {
        backdrop-filter: blur(16px);
    }
}

/* Loading spinner animation */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}

/* Enhanced glassmorphism effect for different screen sizes */
@media (max-width: 768px) {
    .bg-white\/10 {
        background-color: rgba(255, 255, 255, 0.15);
    }

    .backdrop-blur-xl {
        backdrop-filter: blur(20px);
    }
}

/* Smooth transitions for all interactive elements */
* {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced border effects on focus */
input:focus {
    border-color: #FF3621;
    box-shadow: 0 0 0 3px rgba(255, 54, 33, 0.1);
}

/* Error state styling */
input.border-red-500 {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
</style>