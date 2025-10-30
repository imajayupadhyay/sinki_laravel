<template>
    <!-- Contact Section -->
    <section class="contact-section mt-15">
        <!-- Background Elements -->
        <div class="contact-background">
            <div class="absolute inset-0 bg-gradient-to-br from-beige/20 to-cream/30"></div>
            <div class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-brand-red/10 to-transparent rounded-full animate-pulse-slow"></div>
            <div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-brand-red/5 to-transparent rounded-full animate-pulse-slow-delayed"></div>
        </div>

        <div class="container-custom relative z-10">
            <!-- Header Section -->
            <div class="text-center mb-16 animate-fade-in">
                <h3 class="text-xl lg:text-2xl text-brand-red font-semibold mb-6">Get in Touch With Us</h3>
                <h1 class="contact-hero-title text-4xl sm:text-5xl md:text-6xl font-bold text-brand-dark leading-tight mb-8">
                    Let's Simplify Your Databricks Journey
                </h1>
                <p class="text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    Whether you're exploring Databricks for the first time, scaling AI, or fixing data challenges, you don't have to do it alone. Our experts are here to listen, guide, and get you results faster.
                </p>
            </div>

            <!-- Success Message -->
            <div v-if="$page.props.flash && $page.props.flash.success" class="mb-8 mx-auto max-w-4xl">
                <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-green-700 font-medium">
                                {{ $page.props.flash.success }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content Container -->
            <div class="w-full px-4 sm:px-8 lg:px-20 xl:px-32">
                <div class="overflow-hidden rounded-3xl shadow-2xl w-full">
                    <!-- Form Container - Full Width -->
                    <div class="bg-gray-50 p-6 sm:p-8 lg:p-12">
                        <form @submit.prevent="submitForm" class="contact-form space-y-6">
                            <!-- Row 1: Name, Email, Phone -->
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                                <!-- Name Field -->
                                <div class="form-group relative">
                                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        v-model="form.name"
                                        placeholder="Your First Name"
                                        class="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 text-gray-900 placeholder-gray-500"
                                        :class="{ 'border-red-500': form.errors.name }"
                                        required
                                    >
                                    <span v-if="form.errors.name" class="text-red-500 text-xs mt-1">{{ form.errors.name }}</span>
                                </div>

                                <!-- Email Field -->
                                <div class="form-group relative">
                                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        v-model="form.email"
                                        placeholder="Your Business Email"
                                        class="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 text-gray-900 placeholder-gray-500"
                                        :class="{ 'border-red-500': form.errors.email }"
                                        required
                                    >
                                    <span v-if="form.errors.email" class="text-red-500 text-xs mt-1">{{ form.errors.email }}</span>
                                </div>

                                <!-- Phone Field -->
                                <div class="form-group relative">
                                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        v-model="form.phone"
                                        placeholder="Your Phone number"
                                        class="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 text-gray-900 placeholder-gray-500"
                                        :class="{ 'border-red-500': form.errors.phone }"
                                        required
                                    >
                                    <span v-if="form.errors.phone" class="text-red-500 text-xs mt-1">{{ form.errors.phone }}</span>
                                </div>
                            </div>

                            <!-- Row 2: Company and Services -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                <!-- Company Field -->
                                <div class="form-group relative">
                                    <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        v-model="form.company"
                                        placeholder="Your Company Name"
                                        class="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 text-gray-900 placeholder-gray-500"
                                        :class="{ 'border-red-500': form.errors.company }"
                                        required
                                    >
                                    <span v-if="form.errors.company" class="text-red-500 text-xs mt-1">{{ form.errors.company }}</span>
                                </div>

                                <!-- Services Field -->
                                <div class="form-group relative">
                                    <label for="services" class="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                                    <select
                                        id="services"
                                        v-model="form.services"
                                        class="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 text-gray-900"
                                        :class="{ 'border-red-500': form.errors.services }"
                                        required
                                    >
                                        <option value="" disabled selected>Select a service</option>
                                        <option value="Databricks Implementation">Databricks Implementation</option>
                                        <option value="Data Engineering">Data Engineering</option>
                                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                                        <option value="Data Analytics">Data Analytics</option>
                                        <option value="Migration Services">Migration Services</option>
                                        <option value="Training & Support">Training & Support</option>
                                        <option value="Consulting">Consulting</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <span v-if="form.errors.services" class="text-red-500 text-xs mt-1">{{ form.errors.services }}</span>
                                </div>
                            </div>

                            <!-- Row 3: Message Field -->
                            <div class="form-group relative">
                                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    v-model="form.message"
                                    rows="4"
                                    placeholder="Tell us how we can help you with Databricks..."
                                    class="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-brand-red transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                                    :class="{ 'border-red-500': form.errors.message }"
                                    required
                                ></textarea>
                                <span v-if="form.errors.message" class="text-red-500 text-xs mt-1">{{ form.errors.message }}</span>
                            </div>

                            <!-- Submit Button -->
                            <div class="submit-button-container flex justify-end">
                                <button
                                    type="submit"
                                    :disabled="form.processing"
                                    class="btn-primary bg-brand-red text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full border-2 border-brand-red transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span v-if="!form.processing">Send Message</span>
                                    <span v-else>Sending...</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useForm, usePage } from '@inertiajs/vue3';
import { onMounted } from 'vue';

const page = usePage();

const form = useForm({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: '',
    message: '',
    'g-recaptcha-response': ''
});

// reCAPTCHA configuration
const siteKey = page.props.captcha_site_key;
let recaptchaLoaded = false;

// Load reCAPTCHA script
const loadRecaptcha = () => {
    return new Promise((resolve, reject) => {
        if (window.grecaptcha && window.grecaptcha.render) {
            recaptchaLoaded = true;
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            window.grecaptcha.ready(() => {
                recaptchaLoaded = true;
                resolve();
            });
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
};

// Execute reCAPTCHA
const executeRecaptcha = () => {
    return new Promise((resolve, reject) => {
        if (!recaptchaLoaded || !window.grecaptcha) {
            reject(new Error('reCAPTCHA not loaded'));
            return;
        }

        window.grecaptcha.execute(siteKey, { action: 'contact_form' })
            .then(token => {
                resolve(token);
            })
            .catch(reject);
    });
};

// Function to get user's IP and location data
const getLocationData = async () => {
    try {
        // Try to get location data from ipapi.co
        const response = await fetch('https://ipapi.co/json/', {
            method: 'GET',
            headers: {
                'User-Agent': 'Sinki.ai Contact Form'
            }
        });

        if (response.ok) {
            const data = await response.json();
            return {
                ip: data.ip || 'Unknown',
                country: data.country_name || 'Unknown',
                city: data.city || 'Unknown'
            };
        }
    } catch (error) {
        console.warn('Failed to get location from ipapi.co:', error);
    }

    // Fallback to ip-api.com
    try {
        const response = await fetch('https://ip-api.com/json/?fields=status,country,city,query', {
            method: 'GET'
        });

        if (response.ok) {
            const data = await response.json();
            if (data.status === 'success') {
                return {
                    ip: data.query || 'Unknown',
                    country: data.country || 'Unknown',
                    city: data.city || 'Unknown'
                };
            }
        }
    } catch (error) {
        console.warn('Failed to get location from ip-api.com:', error);
    }

    // Return default values if all services fail
    return {
        ip: 'Unknown',
        country: 'Unknown',
        city: 'Unknown'
    };
};

const submitToHubSpot = async (formData, locationData) => {
    try {
        // Prepare fields array with location data
        const fields = [
            {
                name: "firstname",
                value: formData.name
            },
            {
                name: "email",
                value: formData.email
            },
            {
                name: "mobilephone",
                value: formData.phone
            },
            {
                name: "company",
                value: formData.company
            },
            {
                name: "services",
                value: formData.services
            },
            {
                name: "message",
                value: formData.message
            }
        ];

        // Add location data if available
        if (locationData.country && locationData.country !== 'Unknown') {
            fields.push({
                name: "location_country",
                value: locationData.country
            });
        }

        if (locationData.city && locationData.city !== 'Unknown') {
            fields.push({
                name: "location_city",
                value: locationData.city
            });
        }

        if (locationData.ip && locationData.ip !== 'Unknown') {
            fields.push({
                name: "ip_address",
                value: locationData.ip
            });
        }

        // Submit directly to HubSpot API
        const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/21685715/d33f0520-ee9c-475b-9c42-e44c797693a3`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fields: fields,
                context: {
                    pageUri: window.location.href,
                    pageName: document.title,
                    ipAddress: locationData.ip
                }
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HubSpot API error: ${response.status} - ${errorText}`);
        }

        console.log('Successfully submitted to HubSpot with location data:', locationData);
        return await response.json();
    } catch (error) {
        console.error('HubSpot submission error:', error);
        // Don't fail the entire form submission if HubSpot fails
        throw error;
    }
};

const submitForm = async () => {
    try {
        // Execute reCAPTCHA before submitting
        const recaptchaToken = await executeRecaptcha();
        form['g-recaptcha-response'] = recaptchaToken;

        // First submit to our Laravel backend
        form.post(route('contact.store'), {
            preserveScroll: true,
            onSuccess: async () => {
                // On successful Laravel submission, also submit to HubSpot
                const formData = {
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    company: form.company,
                    services: form.services,
                    message: form.message
                };

                // Get location data
                console.log('Getting location data for HubSpot submission...');
                const locationData = await getLocationData();
                console.log('Location data retrieved:', locationData);

                // Submit to HubSpot with location data
                await submitToHubSpot(formData, locationData);
                form.reset();
            },
            onError: (errors) => {
                // Reset reCAPTCHA token on error
                form['g-recaptcha-response'] = '';
                console.error('Form submission errors:', errors);
            }
        });
    } catch (error) {
        console.error('reCAPTCHA execution failed:', error);
        // Optionally, you can still submit the form without reCAPTCHA
        // or show an error message to the user
    }
};

// Component lifecycle
onMounted(async () => {
    try {
        await loadRecaptcha();
        console.log('reCAPTCHA loaded successfully');
    } catch (error) {
        console.error('Failed to load reCAPTCHA:', error);
    }
});
</script>

<style scoped>
/* Contact Section Styles */
.contact-section {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(180deg, #f5f5dc 0%, #fffef8 100%);
    font-family: 'Instrument Sans', sans-serif;
    padding: 120px 0 80px;
    overflow: hidden;
    padding-top: 180px;
}

/* Background Elements */
.contact-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
}

/* Brand Colors */
.text-brand-dark {
    color: #121212;
}

.text-brand-red {
    color: #FF3621;
}

.bg-brand-red {
    background-color: #FF3621;
}

.border-brand-red {
    border-color: #FF3621;
}

/* Beige/Cream Colors for Background */
.from-beige\/20 {
    --tw-gradient-from: rgb(245 245 220 / 0.2);
}

.to-cream\/30 {
    --tw-gradient-to: rgb(255 254 248 / 0.3);
}

/* Container Custom */
.contact-section .container-custom {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;
}

/* Contact Hero Title */
.contact-hero-title {
    letter-spacing: -0.02em;
}

/* Form Styles */
.contact-form input,
.contact-form select,
.contact-form textarea {
    font-family: 'Instrument Sans', sans-serif;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 54, 33, 0.15);
}

/* Custom Select Styling */
.contact-form select {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse-slow {
    0%, 100% {
        opacity: 0.4;
        transform: scale(1);
    }
    50% {
        opacity: 0.6;
        transform: scale(1.05);
    }
}

@keyframes pulse-slow-delayed {
    0%, 100% {
        opacity: 0.3;
        transform: scale(1);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.08);
    }
}

.animate-fade-in {
    animation: fadeIn 0.8s ease-out;
}

.animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
}

.animate-pulse-slow-delayed {
    animation: pulse-slow-delayed 10s ease-in-out infinite;
    animation-delay: 2s;
}

/* Primary Button Hover Effect - Same as Hero Section */
.btn-primary {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover:not(:disabled) {
    background-color: white;
    color: #FF3621;
    border-color: #FF3621;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 54, 33, 0.3);
}

.btn-primary:active:not(:disabled) {
    transform: translateY(-1px);
}

.btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .contact-section {
        padding: 100px 0 60px;
        padding-top: 160px;
    }
}

@media (max-width: 768px) {
    .contact-section {
        padding: 80px 0 40px;
        padding-top: 140px;
    }
    
    .contact-hero-title {
        font-size: 2.5rem;
        line-height: 1.2;
    }
}

@media (max-width: 640px) {
    .contact-section {
        padding: 60px 0 30px;
        padding-top: 120px;
    }
    
    .contact-hero-title {
        font-size: 2rem;
        line-height: 1.2;
    }
}
</style>