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
        <Head title="Reset Password - Sinki.ai" />

        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-0"></div>

        <!-- Reset Password Container -->
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
                        Set New Password
                    </h1>
                    <p class="text-white/80 text-sm md:text-base mb-4">
                        Create a strong new password for your account
                    </p>
                    <div class="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p class="text-white/90 text-sm">
                            👤 Account: <span class="font-mono text-brand-red">{{ email }}</span>
                        </p>
                    </div>
                </div>

                <!-- Reset Password Form -->
                <form @submit.prevent="submit" class="space-y-6">
                    <!-- Hidden reset token -->
                    <input type="hidden" v-model="form.reset_token" />

                    <!-- New Password Field -->
                    <div class="space-y-2">
                        <label for="password" class="block text-sm font-semibold text-white/90">
                            New Password
                        </label>
                        <div class="relative">
                            <input
                                id="password"
                                v-model="form.password"
                                :type="showPassword ? 'text' : 'password'"
                                class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                                :class="{ 'border-red-500 ring-2 ring-red-500': form.errors.password }"
                                placeholder="Enter new password"
                                required
                                autocomplete="new-password"
                                minlength="8"
                            />
                            <button
                                type="button"
                                @click="togglePasswordVisibility"
                                class="absolute inset-y-0 right-0 flex items-center pr-3 text-white/60 hover:text-white transition-colors duration-200"
                            >
                                <svg v-if="showPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M9.878 9.878H9m6.242 6.242l2.828 2.828M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.275 4.057-5.065 7-9.543 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </button>
                        </div>
                        <div v-if="form.errors.password" class="text-red-400 text-sm mt-1 font-medium">
                            {{ form.errors.password }}
                        </div>
                    </div>

                    <!-- Confirm Password Field -->
                    <div class="space-y-2">
                        <label for="password_confirmation" class="block text-sm font-semibold text-white/90">
                            Confirm New Password
                        </label>
                        <div class="relative">
                            <input
                                id="password_confirmation"
                                v-model="form.password_confirmation"
                                :type="showConfirmPassword ? 'text' : 'password'"
                                class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300"
                                :class="{
                                    'border-green-500 ring-2 ring-green-500': form.password && form.password_confirmation && form.password === form.password_confirmation,
                                    'border-red-500 ring-2 ring-red-500': form.password && form.password_confirmation && form.password !== form.password_confirmation
                                }"
                                placeholder="Confirm new password"
                                required
                                autocomplete="new-password"
                                minlength="8"
                            />
                            <button
                                type="button"
                                @click="toggleConfirmPasswordVisibility"
                                class="absolute inset-y-0 right-0 flex items-center pr-3 text-white/60 hover:text-white transition-colors duration-200"
                            >
                                <svg v-if="showConfirmPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M9.878 9.878H9m6.242 6.242l2.828 2.828M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.275 4.057-5.065 7-9.543 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </button>
                        </div>
                        <!-- Password match indicator -->
                        <div v-if="form.password && form.password_confirmation" class="text-sm mt-1 font-medium">
                            <span v-if="form.password === form.password_confirmation" class="text-green-400 flex items-center">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Passwords match
                            </span>
                            <span v-else class="text-red-400 flex items-center">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                Passwords don't match
                            </span>
                        </div>
                    </div>

                    <!-- Password Requirements -->
                    <div class="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p class="text-white/90 text-sm font-medium mb-2">Password Requirements:</p>
                        <ul class="text-white/70 text-xs space-y-1">
                            <li class="flex items-center" :class="{ 'text-green-400': passwordLength >= 8 }">
                                <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" v-if="passwordLength >= 8"></path>
                                    <circle cx="12" cy="12" r="10" v-else></circle>
                                </svg>
                                At least 8 characters
                            </li>
                            <li class="flex items-center" :class="{ 'text-green-400': hasUpperCase }">
                                <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" v-if="hasUpperCase"></path>
                                    <circle cx="12" cy="12" r="10" v-else></circle>
                                </svg>
                                One uppercase letter
                            </li>
                            <li class="flex items-center" :class="{ 'text-green-400': hasLowerCase }">
                                <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" v-if="hasLowerCase"></path>
                                    <circle cx="12" cy="12" r="10" v-else></circle>
                                </svg>
                                One lowercase letter
                            </li>
                            <li class="flex items-center" :class="{ 'text-green-400': hasNumber }">
                                <svg class="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" v-if="hasNumber"></path>
                                    <circle cx="12" cy="12" r="10" v-else></circle>
                                </svg>
                                One number
                            </li>
                        </ul>
                    </div>

                    <!-- Reset Button -->
                    <button
                        type="submit"
                        :disabled="form.processing || !passwordsMatch || !passwordRequirementsMet"
                        class="w-full bg-brand-red hover:bg-red-600 disabled:bg-red-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-transparent disabled:cursor-not-allowed transform hover:translate-y-[-2px] active:translate-y-0 shadow-lg hover:shadow-xl"
                    >
                        <span v-if="form.processing" class="flex items-center justify-center">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Resetting Password...
                        </span>
                        <span v-else class="flex items-center justify-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Reset Password
                        </span>
                    </button>
                </form>

                <!-- Security Notice -->
                <div class="mt-6 text-center">
                    <p class="text-white/60 text-xs">
                        🔒 After resetting, you'll be redirected to login with your new password
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
import { ref, computed } from 'vue';

const props = defineProps({
    email: String,
    resetToken: String,
});

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const form = useForm({
    password: '',
    password_confirmation: '',
    reset_token: props.resetToken,
});

// Password validation computed properties
const passwordLength = computed(() => form.password.length);
const hasUpperCase = computed(() => /[A-Z]/.test(form.password));
const hasLowerCase = computed(() => /[a-z]/.test(form.password));
const hasNumber = computed(() => /\d/.test(form.password));

const passwordRequirementsMet = computed(() => {
    return passwordLength.value >= 8 && hasUpperCase.value && hasLowerCase.value && hasNumber.value;
});

const passwordsMatch = computed(() => {
    return form.password && form.password_confirmation && form.password === form.password_confirmation;
});

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const toggleConfirmPasswordVisibility = () => {
    showConfirmPassword.value = !showConfirmPassword.value;
};

const submit = () => {
    if (!passwordsMatch.value || !passwordRequirementsMet.value) {
        return;
    }

    form.post(route('admin.password.reset'), {
        onFinish: () => {
            // Don't reset passwords on error
            if (!form.hasErrors) {
                form.reset('password', 'password_confirmation');
            }
        },
    });
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

/* Success state styling */
input.border-green-500 {
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}
</style>