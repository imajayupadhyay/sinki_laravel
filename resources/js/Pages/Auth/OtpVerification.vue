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
        <Head title="Security Verification - Sinki.ai" />

        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-0"></div>

        <!-- OTP Verification Container -->
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
                    <div class="text-6xl mb-4">🔐</div>
                    <h1 class="text-2xl md:text-3xl font-bold text-white mb-2">
                        Security Verification
                    </h1>
                    <p class="text-white/80 text-sm md:text-base mb-4">
                        Check your email for the verification code
                    </p>
                    <div class="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p class="text-white/90 text-sm">
                            📧 Sent to: <span class="font-mono text-brand-red">{{ email }}</span>
                        </p>
                    </div>
                </div>

                <!-- Success Message -->
                <div v-if="$page.props.flash?.success || message" class="mb-6">
                    <div class="bg-green-500/20 border border-green-500/30 rounded-xl p-4">
                        <div class="flex items-center">
                            <svg class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <p class="text-green-400 text-sm font-medium">
                                {{ $page.props.flash?.success || message }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- OTP Verification Form -->
                <form @submit.prevent="verifyOtp" class="space-y-6">
                    <!-- OTP Input -->
                    <div class="space-y-2">
                        <label for="otp_code" class="block text-sm font-semibold text-white/90">
                            Verification Code
                        </label>
                        <div class="relative">
                            <input
                                id="otp_code"
                                v-model="form.otp_code"
                                type="text"
                                maxlength="6"
                                pattern="[0-9]{6}"
                                inputmode="numeric"
                                autocomplete="one-time-code"
                                class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300 text-center text-xl tracking-[0.5em] font-mono"
                                :class="{ 'border-red-500 ring-2 ring-red-500': form.errors.otp_code }"
                                placeholder="000000"
                                required
                                @input="handleOtpInput"
                                @paste="handlePaste"
                            />
                            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg class="h-5 w-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div v-if="form.errors.otp_code" class="text-red-400 text-sm mt-1 font-medium">
                            {{ form.errors.otp_code }}
                        </div>
                    </div>

                    <!-- Timer Display -->
                    <div class="text-center">
                        <div class="bg-white/5 rounded-xl p-3 border border-white/10">
                            <p class="text-white/80 text-sm">
                                <span v-if="timeRemaining > 0">
                                    ⏱️ Code expires in: <span class="font-mono text-brand-red font-bold">{{ formatTime(timeRemaining) }}</span>
                                </span>
                                <span v-else class="text-red-400">
                                    ⚠️ Verification code has expired
                                </span>
                            </p>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="space-y-3">
                        <!-- Verify Button -->
                        <button
                            type="submit"
                            :disabled="form.processing || form.otp_code.length !== 6"
                            class="w-full bg-brand-red hover:bg-red-600 disabled:bg-red-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed transform hover:translate-y-[-2px] active:translate-y-0 shadow-lg hover:shadow-xl"
                        >
                            <span v-if="form.processing" class="flex items-center justify-center">
                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Verifying...
                            </span>
                            <span v-else class="flex items-center justify-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Verify Code
                            </span>
                        </button>

                        <!-- Resend Button -->
                        <button
                            type="button"
                            @click="resendOtp"
                            :disabled="resendForm.processing || canResend === false"
                            class="w-full bg-white/10 hover:bg-white/20 disabled:bg-white/5 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 disabled:cursor-not-allowed border border-white/20"
                        >
                            <span v-if="resendForm.processing" class="flex items-center justify-center">
                                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                            <span v-else class="flex items-center justify-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                {{ canResend ? 'Resend Code' : `Resend in ${resendCooldown}s` }}
                            </span>
                        </button>

                        <!-- Back to Login -->
                        <button
                            type="button"
                            @click="goBackToLogin"
                            class="w-full text-white/60 hover:text-white font-medium py-2 transition-colors duration-300"
                        >
                            ← Back to Login
                        </button>
                    </div>
                </form>

                <!-- Security Notice -->
                <div class="mt-6 text-center">
                    <p class="text-white/60 text-xs">
                        🔒 This code is valid for {{ expiresIn }} minutes only
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
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    email: String,
    expiresIn: Number,
    message: String,
});

const form = useForm({
    otp_code: '',
});

const resendForm = useForm({});

// Timer functionality
const timeRemaining = ref(props.expiresIn * 60); // Convert minutes to seconds
const canResend = ref(false);
const resendCooldown = ref(60);
let timer = null;
let resendTimer = null;

// Auto-submit when OTP is complete
const handleOtpInput = (event) => {
    // Only allow numeric input
    const value = event.target.value.replace(/[^0-9]/g, '');
    event.target.value = value;
    form.otp_code = value;

    // Auto-submit when 6 digits entered
    if (value.length === 6) {
        setTimeout(() => {
            verifyOtp();
        }, 500);
    }
};

// Handle paste functionality
const handlePaste = (event) => {
    event.preventDefault();
    const paste = (event.clipboardData || window.clipboardData).getData('text');
    const numericPaste = paste.replace(/[^0-9]/g, '').slice(0, 6);
    form.otp_code = numericPaste;

    if (numericPaste.length === 6) {
        setTimeout(() => {
            verifyOtp();
        }, 500);
    }
};

// Format time display
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

// Start countdown timer
const startTimer = () => {
    timer = setInterval(() => {
        if (timeRemaining.value > 0) {
            timeRemaining.value--;
        } else {
            clearInterval(timer);
        }
    }, 1000);
};

// Start resend cooldown
const startResendCooldown = () => {
    canResend.value = false;
    resendCooldown.value = 60;

    resendTimer = setInterval(() => {
        if (resendCooldown.value > 0) {
            resendCooldown.value--;
        } else {
            canResend.value = true;
            clearInterval(resendTimer);
        }
    }, 1000);
};

// Verify OTP
const verifyOtp = () => {
    if (form.otp_code.length !== 6) {
        return;
    }

    form.post(route('admin.otp.verify'), {
        onFinish: () => {
            // Don't reset form on error to preserve entered code
            if (!form.hasErrors) {
                form.reset('otp_code');
            }
        },
    });
};

// Resend OTP
const resendOtp = () => {
    if (!canResend.value) {
        return;
    }

    resendForm.post(route('admin.otp.resend'), {
        onSuccess: () => {
            // Reset timer and start cooldown
            timeRemaining.value = props.expiresIn * 60;
            startResendCooldown();
        },
    });
};

// Go back to login
const goBackToLogin = () => {
    window.location.href = route('admin.login');
};

// Lifecycle
onMounted(() => {
    startTimer();
    startResendCooldown();
});

onUnmounted(() => {
    if (timer) clearInterval(timer);
    if (resendTimer) clearInterval(resendTimer);
});
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

/* OTP input special styling */
input[inputmode="numeric"] {
    font-variant-numeric: tabular-nums;
}
</style>