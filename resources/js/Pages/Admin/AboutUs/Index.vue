<template>
    <AdminLayout page-title="About Us Management" page-subtitle="Manage your website's About Us page content">
        <!-- Sticky Section Navigation -->
        <div class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm mb-8">
            <div class="mx-auto">
                <nav class="flex space-x-8 overflow-x-auto py-4 px-0" ref="sectionNav">
                    <button
                        v-for="section in sections"
                        :key="section.id"
                        @click="scrollToSection(section.id)"
                        :class="[
                            'whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 flex items-center space-x-2',
                            activeSection === section.id
                                ? 'bg-blue-100 text-blue-700 border-blue-200 border'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                        ]"
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="section.icon"></svg>
                        <span>{{ section.name }}</span>
                    </button>
                </nav>
            </div>
        </div>

        <!-- Hero Section Card -->
        <div id="hero-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Hero Section</h2>
                <p class="text-sm text-gray-600 mt-1">Manage the main hero section with background image, heading, paragraph and call-to-action</p>
            </div>

            <div class="p-6">
                <form @submit.prevent="updateHero">
                    <div class="space-y-6">
                        <!-- Background Image Upload -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Background Image
                            </label>

                            <!-- Current Image Display -->
                            <div v-if="heroSection?.background_image" class="mb-4">
                                <div class="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                                    <img
                                        :src="`/storage/${heroSection.background_image}`"
                                        alt="Hero background"
                                        class="w-full h-full object-cover"
                                    />
                                    <div class="absolute top-2 right-2">
                                        <button
                                            type="button"
                                            @click="deleteHeroImage"
                                            class="bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors"
                                        >
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Upload New Image -->
                            <div class="flex items-center justify-center w-full">
                                <label for="hero-image-upload" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500">
                                            <span class="font-semibold">Click to upload</span> background image
                                        </p>
                                        <p class="text-xs text-gray-500">PNG, JPG or GIF (MAX. 2MB)</p>
                                    </div>
                                    <input
                                        id="hero-image-upload"
                                        type="file"
                                        class="hidden"
                                        accept="image/*"
                                        @change="uploadHeroImage"
                                    />
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- Heading -->
                            <div>
                                <label for="hero_heading" class="block text-sm font-medium text-gray-700 mb-2">
                                    Heading <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="hero_heading"
                                    v-model="heroForm.heading"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="Enter hero heading"
                                    :class="{ 'border-red-500': heroErrors.heading }"
                                />
                                <p v-if="heroErrors.heading" class="mt-1 text-sm text-red-600">{{ heroErrors.heading }}</p>
                            </div>

                            <!-- Active Status -->
                            <div class="flex items-center">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        v-model="heroForm.is_active"
                                        class="sr-only peer"
                                    >
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                                    <span class="ml-3 text-sm font-medium text-gray-700">Hero Section Active</span>
                                </label>
                            </div>
                        </div>

                        <!-- Paragraph -->
                        <div>
                            <label for="hero_paragraph" class="block text-sm font-medium text-gray-700 mb-2">
                                Paragraph <span class="text-red-500">*</span>
                            </label>
                            <textarea
                                id="hero_paragraph"
                                v-model="heroForm.paragraph"
                                rows="4"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"
                                placeholder="Enter hero paragraph content"
                                :class="{ 'border-red-500': heroErrors.paragraph }"
                            ></textarea>
                            <p v-if="heroErrors.paragraph" class="mt-1 text-sm text-red-600">{{ heroErrors.paragraph }}</p>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- CTA Text -->
                            <div>
                                <label for="hero_cta_text" class="block text-sm font-medium text-gray-700 mb-2">
                                    Call-to-Action Text
                                </label>
                                <input
                                    type="text"
                                    id="hero_cta_text"
                                    v-model="heroForm.cta_text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="e.g., Get Started"
                                    :class="{ 'border-red-500': heroErrors.cta_text }"
                                />
                                <p v-if="heroErrors.cta_text" class="mt-1 text-sm text-red-600">{{ heroErrors.cta_text }}</p>
                            </div>

                            <!-- CTA Link -->
                            <div>
                                <label for="hero_cta_link" class="block text-sm font-medium text-gray-700 mb-2">
                                    Call-to-Action Link
                                </label>
                                <input
                                    type="url"
                                    id="hero_cta_link"
                                    v-model="heroForm.cta_link"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="https://example.com"
                                    :class="{ 'border-red-500': heroErrors.cta_link }"
                                />
                                <p v-if="heroErrors.cta_link" class="mt-1 text-sm text-red-600">{{ heroErrors.cta_link }}</p>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div class="flex justify-end">
                            <button
                                type="submit"
                                :disabled="heroProcessing"
                                class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span v-if="heroProcessing" class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                                {{ heroProcessing ? 'Saving...' : 'Save Hero Section' }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { router } from '@inertiajs/vue3';
import AdminLayout from '@/Components/Admin/AdminLayout.vue';

// Props
const props = defineProps({
    heroSection: Object
});

// Reactive data
const activeSection = ref('hero-section');
const sectionNav = ref(null);
const heroProcessing = ref(false);
const heroErrors = ref({});

// Define sections for navigation
const sections = ref([
    {
        id: 'hero-section',
        name: 'Hero Section',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>'
    }
]);

// Hero form
const heroForm = reactive({
    heading: props.heroSection?.heading || '',
    paragraph: props.heroSection?.paragraph || '',
    cta_text: props.heroSection?.cta_text || '',
    cta_link: props.heroSection?.cta_link || '',
    is_active: props.heroSection?.is_active ?? true
});

// Methods
const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
        activeSection.value = sectionId;
    }
};

const updateHero = () => {
    heroProcessing.value = true;
    heroErrors.value = {};

    router.put(route('admin.about-us.hero.update'), heroForm, {
        onSuccess: () => {
            heroProcessing.value = false;
        },
        onError: (errors) => {
            heroErrors.value = errors;
            heroProcessing.value = false;
        }
    });
};

const uploadHeroImage = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    router.post(route('admin.about-us.hero.image.upload'), formData, {
        forceFormData: true,
        onSuccess: () => {
            event.target.value = '';
        }
    });
};

const deleteHeroImage = () => {
    if (confirm('Are you sure you want to delete the hero background image?')) {
        router.delete(route('admin.about-us.hero.image.delete'));
    }
};

// Intersection Observer for active section highlighting
onMounted(() => {
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -80% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id;
            }
        });
    }, observerOptions);

    // Observe all section elements
    sections.value.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
            observer.observe(element);
        }
    });
});
</script>

<style scoped>
.bg-brand-red {
    background-color: #FF3621;
}

.text-brand-red {
    color: #FF3621;
}

.hover\:bg-red-700:hover {
    background-color: #dc2626;
}

.focus\:bg-red-700:focus {
    background-color: #dc2626;
}

.active\:bg-red-900:active {
    background-color: #7f1d1d;
}

.focus\:ring-brand-red:focus {
    --tw-ring-color: #FF3621;
}

.border-brand-red {
    border-color: #FF3621;
}

.focus\:border-brand-red:focus {
    border-color: #FF3621;
}

/* Custom scrollbar for navigation */
.overflow-x-auto {
    scrollbar-width: thin;
    scrollbar-color: #FF3621 #f1f5f9;
}

.overflow-x-auto::-webkit-scrollbar {
    height: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
    background: #f1f5f9;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
    background-color: #FF3621;
    border-radius: 2px;
}
</style>