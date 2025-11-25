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

        <!-- Partner Badge Section Card -->
        <div id="partner-badge-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Partner Badge Section</h2>
                <p class="text-sm text-gray-600 mt-1">Manage the partner badge text and logo display</p>
            </div>

            <div class="p-6">
                <form @submit.prevent="updatePartnerBadge">
                    <div class="space-y-6">
                        <!-- Logo Image Upload -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Partner Logo
                            </label>

                            <!-- Current Logo Display -->
                            <div v-if="partnerBadge?.logo_image" class="mb-4">
                                <div class="relative w-32 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                                    <img
                                        :src="`/storage/${partnerBadge.logo_image}`"
                                        :alt="partnerForm.logo_alt"
                                        class="max-w-full max-h-full object-contain"
                                    />
                                    <div class="absolute top-1 right-1">
                                        <button
                                            type="button"
                                            @click="deletePartnerLogo"
                                            class="bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors"
                                        >
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Upload New Logo -->
                            <div class="flex items-center justify-center w-full">
                                <label for="partner-logo-upload" class="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                    <div class="flex flex-col items-center justify-center pt-3 pb-3">
                                        <svg class="w-6 h-6 mb-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                        </svg>
                                        <p class="text-xs text-gray-500">
                                            <span class="font-semibold">Click to upload</span> partner logo
                                        </p>
                                        <p class="text-xs text-gray-500">PNG, JPG or SVG (MAX. 2MB)</p>
                                    </div>
                                    <input
                                        id="partner-logo-upload"
                                        type="file"
                                        class="hidden"
                                        accept="image/*"
                                        @change="uploadPartnerLogo"
                                    />
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- Badge Text -->
                            <div>
                                <label for="partner_text" class="block text-sm font-medium text-gray-700 mb-2">
                                    Badge Text <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="partner_text"
                                    v-model="partnerForm.text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="e.g., An Official Databricks Partner"
                                    :class="{ 'border-red-500': partnerErrors.text }"
                                />
                                <p v-if="partnerErrors.text" class="mt-1 text-sm text-red-600">{{ partnerErrors.text }}</p>
                            </div>

                            <!-- Active Status -->
                            <div class="flex items-center">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        v-model="partnerForm.is_active"
                                        class="sr-only peer"
                                    >
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                                    <span class="ml-3 text-sm font-medium text-gray-700">Partner Badge Active</span>
                                </label>
                            </div>
                        </div>

                        <!-- Logo Alt Text -->
                        <div>
                            <label for="partner_logo_alt" class="block text-sm font-medium text-gray-700 mb-2">
                                Logo Alt Text
                            </label>
                            <input
                                type="text"
                                id="partner_logo_alt"
                                v-model="partnerForm.logo_alt"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                placeholder="e.g., Databricks Logo"
                                :class="{ 'border-red-500': partnerErrors.logo_alt }"
                            />
                            <p v-if="partnerErrors.logo_alt" class="mt-1 text-sm text-red-600">{{ partnerErrors.logo_alt }}</p>
                        </div>

                        <!-- Submit Button -->
                        <div class="flex justify-end">
                            <button
                                type="submit"
                                :disabled="partnerProcessing"
                                class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span v-if="partnerProcessing" class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                                {{ partnerProcessing ? 'Saving...' : 'Save Partner Badge' }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Story Section Card -->
        <div id="story-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Story Section</h2>
                <p class="text-sm text-gray-600 mt-1">Manage the about story content with image, title, and descriptions</p>
            </div>

            <div class="p-6">
                <form @submit.prevent="updateStorySection">
                    <div class="space-y-6">
                        <!-- Image Upload -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Story Image
                            </label>

                            <!-- Current Image Display -->
                            <div v-if="storySection?.image_path" class="mb-4">
                                <div class="relative w-48 h-32 bg-gray-100 rounded-lg overflow-hidden">
                                    <img
                                        :src="`/storage/${storySection.image_path}`"
                                        :alt="storyForm.image_alt"
                                        class="w-full h-full object-cover"
                                    />
                                    <div class="absolute top-2 right-2">
                                        <button
                                            type="button"
                                            @click="deleteStoryImage"
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
                                <label for="story-image-upload" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500">
                                            <span class="font-semibold">Click to upload</span> story image
                                        </p>
                                        <p class="text-xs text-gray-500">PNG, JPG or GIF (MAX. 2MB)</p>
                                    </div>
                                    <input
                                        id="story-image-upload"
                                        type="file"
                                        class="hidden"
                                        accept="image/*"
                                        @change="uploadStoryImage"
                                    />
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- Header Tag -->
                            <div>
                                <label for="story_header_tag" class="block text-sm font-medium text-gray-700 mb-2">
                                    Header Tag <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="story_header_tag"
                                    v-model="storyForm.header_tag"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="e.g., OUR STORY"
                                    :class="{ 'border-red-500': storyErrors.header_tag }"
                                />
                                <p v-if="storyErrors.header_tag" class="mt-1 text-sm text-red-600">{{ storyErrors.header_tag }}</p>
                            </div>

                            <!-- Active Status -->
                            <div class="flex items-center">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        v-model="storyForm.is_active"
                                        class="sr-only peer"
                                    >
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                                    <span class="ml-3 text-sm font-medium text-gray-700">Story Section Active</span>
                                </label>
                            </div>
                        </div>

                        <!-- Title -->
                        <div>
                            <label for="story_title" class="block text-sm font-medium text-gray-700 mb-2">
                                Title <span class="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="story_title"
                                v-model="storyForm.title"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                placeholder="e.g., Sinki, a Name with a Purpose"
                                :class="{ 'border-red-500': storyErrors.title }"
                            />
                            <p v-if="storyErrors.title" class="mt-1 text-sm text-red-600">{{ storyErrors.title }}</p>
                        </div>

                        <!-- Subtitle (Optional) -->
                        <div>
                            <label for="story_subtitle" class="block text-sm font-medium text-gray-700 mb-2">
                                Subtitle (Optional)
                            </label>
                            <input
                                type="text"
                                id="story_subtitle"
                                v-model="storyForm.subtitle"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                placeholder="Optional subtitle text"
                                :class="{ 'border-red-500': storyErrors.subtitle }"
                            />
                            <p v-if="storyErrors.subtitle" class="mt-1 text-sm text-red-600">{{ storyErrors.subtitle }}</p>
                        </div>

                        <!-- Descriptions -->
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <label class="block text-sm font-medium text-gray-700">
                                    Description Paragraphs <span class="text-red-500">*</span>
                                </label>
                                <button
                                    type="button"
                                    @click="addDescription"
                                    class="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red"
                                >
                                    <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                    Add Paragraph
                                </button>
                            </div>
                            <div class="space-y-4">
                                <div
                                    v-for="(description, index) in storyForm.descriptions"
                                    :key="index"
                                    class="relative"
                                >
                                    <div class="flex items-start space-x-2">
                                        <div class="flex-1">
                                            <textarea
                                                v-model="storyForm.descriptions[index]"
                                                rows="3"
                                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"
                                                :placeholder="`Paragraph ${index + 1} - You can use HTML tags like <em> and <strong>`"
                                                :class="{ 'border-red-500': storyErrors[`descriptions.${index}`] }"
                                            ></textarea>
                                            <p v-if="storyErrors[`descriptions.${index}`]" class="mt-1 text-sm text-red-600">{{ storyErrors[`descriptions.${index}`] }}</p>
                                        </div>
                                        <button
                                            v-if="storyForm.descriptions.length > 1"
                                            type="button"
                                            @click="removeDescription(index)"
                                            class="flex-shrink-0 mt-2 p-1 text-red-600 hover:text-red-800 transition-colors"
                                        >
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <!-- Image Alt Text -->
                            <div>
                                <label for="story_image_alt" class="block text-sm font-medium text-gray-700 mb-2">
                                    Image Alt Text
                                </label>
                                <input
                                    type="text"
                                    id="story_image_alt"
                                    v-model="storyForm.image_alt"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="e.g., Helsinki city representing our inspiration"
                                    :class="{ 'border-red-500': storyErrors.image_alt }"
                                />
                                <p v-if="storyErrors.image_alt" class="mt-1 text-sm text-red-600">{{ storyErrors.image_alt }}</p>
                            </div>

                            <!-- Image Position -->
                            <div>
                                <label for="story_image_position" class="block text-sm font-medium text-gray-700 mb-2">
                                    Image Position <span class="text-red-500">*</span>
                                </label>
                                <select
                                    id="story_image_position"
                                    v-model="storyForm.image_position"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    :class="{ 'border-red-500': storyErrors.image_position }"
                                >
                                    <option value="left">Left</option>
                                    <option value="right">Right</option>
                                </select>
                                <p v-if="storyErrors.image_position" class="mt-1 text-sm text-red-600">{{ storyErrors.image_position }}</p>
                            </div>

                            <!-- Background Color -->
                            <div>
                                <label for="story_background_color" class="block text-sm font-medium text-gray-700 mb-2">
                                    Background Color <span class="text-red-500">*</span>
                                </label>
                                <select
                                    id="story_background_color"
                                    v-model="storyForm.background_color"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    :class="{ 'border-red-500': storyErrors.background_color }"
                                >
                                    <option value="bg-white">White</option>
                                    <option value="bg-gray-50">Light Gray</option>
                                    <option value="bg-gray-100">Gray</option>
                                    <option value="bg-blue-50">Light Blue</option>
                                    <option value="bg-green-50">Light Green</option>
                                </select>
                                <p v-if="storyErrors.background_color" class="mt-1 text-sm text-red-600">{{ storyErrors.background_color }}</p>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div class="flex justify-end">
                            <button
                                type="submit"
                                :disabled="storyProcessing"
                                class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span v-if="storyProcessing" class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                                {{ storyProcessing ? 'Saving...' : 'Save Story Section' }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- What We Do Section Card -->
        <div id="what-we-do-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">What We Do Section</h2>
                <p class="text-sm text-gray-600 mt-1">Manage the what we do section header and background</p>
            </div>

            <div class="p-6">
                <form @submit.prevent="updateWhatWeDo">
                    <div class="space-y-6">
                        <!-- Background Image Upload -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Background Image
                            </label>

                            <!-- Current Background Display -->
                            <div v-if="whatWeDoSection?.background_image" class="mb-4">
                                <div class="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
                                    <img
                                        :src="`/storage/${whatWeDoSection.background_image}`"
                                        alt="Background image"
                                        class="w-full h-full object-cover"
                                    />
                                    <div class="absolute top-2 right-2">
                                        <button
                                            type="button"
                                            @click="deleteWhatWeDoBackground"
                                            class="bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors"
                                        >
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Upload New Background -->
                            <div class="flex items-center justify-center w-full">
                                <label for="what-we-do-bg-upload" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
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
                                        id="what-we-do-bg-upload"
                                        type="file"
                                        class="hidden"
                                        accept="image/*"
                                        @change="uploadWhatWeDoBackground"
                                    />
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- Header Tag -->
                            <div>
                                <label for="what_we_do_header_tag" class="block text-sm font-medium text-gray-700 mb-2">
                                    Header Tag <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="what_we_do_header_tag"
                                    v-model="whatWeDoForm.header_tag"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="e.g., HOW WE HELP"
                                    :class="{ 'border-red-500': whatWeDoErrors.header_tag }"
                                />
                                <p v-if="whatWeDoErrors.header_tag" class="mt-1 text-sm text-red-600">{{ whatWeDoErrors.header_tag }}</p>
                            </div>

                            <!-- Active Status -->
                            <div class="flex items-center">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        v-model="whatWeDoForm.is_active"
                                        class="sr-only peer"
                                    >
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                                    <span class="ml-3 text-sm font-medium text-gray-700">What We Do Section Active</span>
                                </label>
                            </div>
                        </div>

                        <!-- Title -->
                        <div>
                            <label for="what_we_do_title" class="block text-sm font-medium text-gray-700 mb-2">
                                Title <span class="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="what_we_do_title"
                                v-model="whatWeDoForm.title"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                placeholder="e.g., What We Do"
                                :class="{ 'border-red-500': whatWeDoErrors.title }"
                            />
                            <p v-if="whatWeDoErrors.title" class="mt-1 text-sm text-red-600">{{ whatWeDoErrors.title }}</p>
                        </div>

                        <!-- Subtitle -->
                        <div>
                            <label for="what_we_do_subtitle" class="block text-sm font-medium text-gray-700 mb-2">
                                Subtitle <span class="text-red-500">*</span>
                            </label>
                            <textarea
                                id="what_we_do_subtitle"
                                v-model="whatWeDoForm.subtitle"
                                rows="2"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"
                                placeholder="e.g., We help enterprises harness the full power of Databricks to unify data, analytics, and AI."
                                :class="{ 'border-red-500': whatWeDoErrors.subtitle }"
                            ></textarea>
                            <p v-if="whatWeDoErrors.subtitle" class="mt-1 text-sm text-red-600">{{ whatWeDoErrors.subtitle }}</p>
                        </div>

                        <!-- Service Items Management -->
                        <div class="border border-gray-200 rounded-lg p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-lg font-medium text-gray-900">Service Items</h3>
                                <button
                                    type="button"
                                    @click="addService"
                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                    Add Service
                                </button>
                            </div>

                            <!-- Service Items List -->
                            <div v-if="whatWeDoSection?.items?.length" class="space-y-4">
                                <div
                                    v-for="(item, index) in whatWeDoSection.items"
                                    :key="item.id"
                                    class="border border-gray-300 rounded-lg p-4 bg-gray-50"
                                >
                                    <div class="flex items-start justify-between">
                                        <div class="flex-1 min-w-0">
                                            <div class="flex items-center space-x-3 mb-2">
                                                <div class="flex-shrink-0">
                                                    <div class="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                                                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" v-html="item.icon_svg"></svg>
                                                    </div>
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <h4 class="text-sm font-medium text-gray-900 truncate">{{ item.title }}</h4>
                                                    <p class="text-xs text-gray-500">Sort Order: {{ item.sort_order }}</p>
                                                </div>
                                                <div class="flex items-center space-x-2">
                                                    <span :class="item.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                                                        {{ item.is_active ? 'Active' : 'Inactive' }}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        @click="editService(item)"
                                                        class="text-brand-red hover:text-red-700"
                                                    >
                                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                                        </svg>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        @click="deleteService(item)"
                                                        class="text-red-600 hover:text-red-800"
                                                    >
                                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <p class="text-sm text-gray-600">{{ item.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-else class="text-center py-8 text-gray-500">
                                <svg class="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                                <p>No service items found. Run the seeder or add services manually.</p>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div class="flex justify-end">
                            <button
                                type="submit"
                                :disabled="whatWeDoProcessing"
                                class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span v-if="whatWeDoProcessing" class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                                {{ whatWeDoProcessing ? 'Saving...' : 'Save What We Do Section' }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Our Approach Section Card -->
        <div id="approach-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Our Approach Section</h2>
                <p class="text-sm text-gray-600 mt-1">Manage the approach section header and process steps</p>
            </div>

            <div class="p-6">
                <form @submit.prevent="updateApproach">
                    <div class="space-y-6">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- Header Tag -->
                            <div>
                                <label for="approach_header_tag" class="block text-sm font-medium text-gray-700 mb-2">
                                    Header Tag <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="approach_header_tag"
                                    v-model="approachForm.header_tag"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="e.g., HOW WE WORK"
                                    :class="{ 'border-red-500': approachErrors.header_tag }"
                                />
                                <p v-if="approachErrors.header_tag" class="mt-1 text-sm text-red-600">{{ approachErrors.header_tag }}</p>
                            </div>

                            <!-- Active Status -->
                            <div class="flex items-center">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        v-model="approachForm.is_active"
                                        class="sr-only peer"
                                    >
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                                    <span class="ml-3 text-sm font-medium text-gray-700">Approach Section Active</span>
                                </label>
                            </div>
                        </div>

                        <!-- Title -->
                        <div>
                            <label for="approach_title" class="block text-sm font-medium text-gray-700 mb-2">
                                Title <span class="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="approach_title"
                                v-model="approachForm.title"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                placeholder="e.g., Our Data-First Approach"
                                :class="{ 'border-red-500': approachErrors.title }"
                            />
                            <p v-if="approachErrors.title" class="mt-1 text-sm text-red-600">{{ approachErrors.title }}</p>
                        </div>

                        <!-- Subtitle -->
                        <div>
                            <label for="approach_subtitle" class="block text-sm font-medium text-gray-700 mb-2">
                                Subtitle <span class="text-red-500">*</span>
                            </label>
                            <textarea
                                id="approach_subtitle"
                                v-model="approachForm.subtitle"
                                rows="2"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"
                                placeholder="e.g., How We Transform Your Data Vision Into Reality"
                                :class="{ 'border-red-500': approachErrors.subtitle }"
                            ></textarea>
                            <p v-if="approachErrors.subtitle" class="mt-1 text-sm text-red-600">{{ approachErrors.subtitle }}</p>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- CTA Text -->
                            <div>
                                <label for="approach_cta_text" class="block text-sm font-medium text-gray-700 mb-2">
                                    Call-to-Action Text <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="approach_cta_text"
                                    v-model="approachForm.cta_text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="e.g., Book A Discovery Session"
                                    :class="{ 'border-red-500': approachErrors.cta_text }"
                                />
                                <p v-if="approachErrors.cta_text" class="mt-1 text-sm text-red-600">{{ approachErrors.cta_text }}</p>
                            </div>

                            <!-- Background Color -->
                            <div>
                                <label for="approach_background_color" class="block text-sm font-medium text-gray-700 mb-2">
                                    Background Color
                                </label>
                                <select
                                    id="approach_background_color"
                                    v-model="approachForm.background_color"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    :class="{ 'border-red-500': approachErrors.background_color }"
                                >
                                    <option value="bg-white">White</option>
                                    <option value="bg-gray-50">Light Gray</option>
                                    <option value="bg-gray-100">Gray</option>
                                    <option value="bg-blue-50">Light Blue</option>
                                    <option value="bg-green-50">Light Green</option>
                                </select>
                                <p v-if="approachErrors.background_color" class="mt-1 text-sm text-red-600">{{ approachErrors.background_color }}</p>
                            </div>
                        </div>

                        <!-- CTA Link -->
                        <div>
                            <label for="approach_cta_link" class="block text-sm font-medium text-gray-700 mb-2">
                                Call-to-Action Link (Optional)
                            </label>
                            <input
                                type="url"
                                id="approach_cta_link"
                                v-model="approachForm.cta_link"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                placeholder="https://example.com"
                                :class="{ 'border-red-500': approachErrors.cta_link }"
                            />
                            <p v-if="approachErrors.cta_link" class="mt-1 text-sm text-red-600">{{ approachErrors.cta_link }}</p>
                        </div>

                        <!-- Approach Steps Management -->
                        <div class="border border-gray-200 rounded-lg p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-lg font-medium text-gray-900">Approach Steps</h3>
                                <button
                                    type="button"
                                    @click="addApproachStep"
                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                    Add Step
                                </button>
                            </div>

                            <!-- Approach Steps List -->
                            <div v-if="approachSection?.steps?.length" class="space-y-4">
                                <div
                                    v-for="(step, index) in approachSection.steps"
                                    :key="step.id"
                                    class="border border-gray-300 rounded-lg p-4 bg-gray-50"
                                >
                                    <div class="flex items-start justify-between">
                                        <div class="flex-1 min-w-0">
                                            <div class="flex items-center space-x-3 mb-2">
                                                <div class="flex-shrink-0">
                                                    <div class="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                                                        <span class="text-white font-bold text-sm">{{ step.number }}</span>
                                                    </div>
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <h4 class="text-sm font-medium text-gray-900 truncate">{{ step.title }}</h4>
                                                    <p class="text-xs text-gray-500">Sort Order: {{ step.sort_order }}</p>
                                                </div>
                                                <div class="flex items-center space-x-2">
                                                    <span :class="step.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                                                        {{ step.is_active ? 'Active' : 'Inactive' }}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        @click="editApproachStep(step)"
                                                        class="text-brand-red hover:text-red-700"
                                                    >
                                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                                        </svg>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        @click="deleteApproachStep(step)"
                                                        class="text-red-600 hover:text-red-800"
                                                    >
                                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <p class="text-sm text-gray-600 mb-1"><strong>Short:</strong> {{ step.short_description }}</p>
                                            <p class="text-sm text-gray-600"><strong>Description:</strong> {{ step.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-else class="text-center py-8 text-gray-500">
                                <svg class="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                                <p>No approach steps found. Run the seeder or add steps manually.</p>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div class="flex justify-end">
                            <button
                                type="submit"
                                :disabled="approachProcessing"
                                class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span v-if="approachProcessing" class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                                {{ approachProcessing ? 'Saving...' : 'Save Approach Section' }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Leadership Section Card -->
        <div id="leadership-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Leadership Section</h2>
                <p class="text-sm text-gray-600 mt-1">Manage the leadership section header and team members</p>
            </div>

            <div class="p-6">
                <form @submit.prevent="updateLeadership">
                    <div class="space-y-6">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- Header Tag -->
                            <div>
                                <label for="leadership_header_tag" class="block text-sm font-medium text-gray-700 mb-2">
                                    Header Tag <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="leadership_header_tag"
                                    v-model="leadershipForm.header_tag"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="e.g., OUR LEADERSHIP"
                                    :class="{ 'border-red-500': leadershipErrors.header_tag }"
                                />
                                <p v-if="leadershipErrors.header_tag" class="mt-1 text-sm text-red-600">{{ leadershipErrors.header_tag }}</p>
                            </div>

                            <!-- Active Status -->
                            <div class="flex items-center">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        v-model="leadershipForm.is_active"
                                        class="sr-only peer"
                                    >
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                                    <span class="ml-3 text-sm font-medium text-gray-700">Leadership Section Active</span>
                                </label>
                            </div>
                        </div>

                        <!-- Title -->
                        <div>
                            <label for="leadership_title" class="block text-sm font-medium text-gray-700 mb-2">
                                Title <span class="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="leadership_title"
                                v-model="leadershipForm.title"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                placeholder="e.g., Visionaries Behind Sinki"
                                :class="{ 'border-red-500': leadershipErrors.title }"
                            />
                            <p v-if="leadershipErrors.title" class="mt-1 text-sm text-red-600">{{ leadershipErrors.title }}</p>
                        </div>

                        <!-- Description -->
                        <div>
                            <label for="leadership_description" class="block text-sm font-medium text-gray-700 mb-2">
                                Description <span class="text-red-500">*</span>
                            </label>
                            <textarea
                                id="leadership_description"
                                v-model="leadershipForm.description"
                                rows="3"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"
                                placeholder="e.g., Our leadership brings years of experience..."
                                :class="{ 'border-red-500': leadershipErrors.description }"
                            ></textarea>
                            <p v-if="leadershipErrors.description" class="mt-1 text-sm text-red-600">{{ leadershipErrors.description }}</p>
                        </div>

                        <!-- Background Image Upload -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Background Image
                            </label>

                            <!-- Current Image Display -->
                            <div v-if="leadershipSection?.background_image" class="mb-4">
                                <div class="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                                    <img
                                        :src="`/storage/${leadershipSection.background_image}`"
                                        alt="Leadership background"
                                        class="w-full h-full object-cover"
                                    />
                                    <div class="absolute top-2 right-2">
                                        <button
                                            type="button"
                                            @click="deleteLeadershipBackground"
                                            class="bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors"
                                        >
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- Upload Input -->
                            <input
                                type="file"
                                accept="image/*"
                                @change="uploadLeadershipBackground"
                                class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-red file:text-white hover:file:bg-red-700"
                            />
                            <p class="mt-1 text-xs text-gray-500">
                                Upload a background image for the leadership section. Recommended size: 1920x1080px.
                            </p>
                        </div>

                        <!-- Background Color -->
                        <div>
                            <label for="leadership_background_color" class="block text-sm font-medium text-gray-700 mb-2">
                                Background Color (Optional)
                            </label>
                            <select
                                id="leadership_background_color"
                                v-model="leadershipForm.background_color"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                            >
                                <option value="">Default</option>
                                <option value="bg-white">White</option>
                                <option value="bg-gray-50">Light Gray</option>
                                <option value="bg-gray-900">Dark Gray</option>
                                <option value="bg-blue-50">Light Blue</option>
                                <option value="bg-green-50">Light Green</option>
                            </select>
                        </div>

                        <!-- Team Members Management -->
                        <div class="border border-gray-200 rounded-lg p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-lg font-medium text-gray-900">Team Members</h3>
                                <button
                                    type="button"
                                    @click="addLeadershipMember"
                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                    Add Member
                                </button>
                            </div>

                            <!-- Team Members List -->
                            <div v-if="leadershipSection?.members?.length" class="space-y-4">
                                <div
                                    v-for="(member, index) in leadershipSection.members"
                                    :key="member.id"
                                    class="border border-gray-300 rounded-lg p-4 bg-gray-50"
                                >
                                    <div class="flex items-start justify-between">
                                        <div class="flex items-start space-x-4 flex-1">
                                            <!-- Member Image -->
                                            <div class="flex-shrink-0">
                                                <div class="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                                                    <img
                                                        v-if="member.image"
                                                        :src="`/storage/${member.image}`"
                                                        :alt="member.name"
                                                        class="w-full h-full object-cover"
                                                    />
                                                    <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                                                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Member Info -->
                                            <div class="flex-1 min-w-0">
                                                <div class="flex items-center space-x-3 mb-2">
                                                    <h4 class="text-sm font-medium text-gray-900 truncate">{{ member.name }}</h4>
                                                    <span :class="member.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                                                        {{ member.is_active ? 'Active' : 'Inactive' }}
                                                    </span>
                                                </div>
                                                <p class="text-sm text-gray-600 mb-1"><strong>Position:</strong> {{ member.position }}</p>
                                                <p class="text-xs text-gray-500">Sort Order: {{ member.sort_order }}</p>
                                                <div v-if="member.bio" class="mt-2">
                                                    <p class="text-sm text-gray-600"><strong>Bio:</strong> {{ member.bio.substring(0, 100) }}{{ member.bio.length > 100 ? '...' : '' }}</p>
                                                </div>
                                            </div>

                                            <!-- Actions -->
                                            <div class="flex items-center space-x-2 flex-shrink-0">
                                                <button
                                                    type="button"
                                                    @click="editLeadershipMember(member)"
                                                    class="text-brand-red hover:text-red-700"
                                                >
                                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                                    </svg>
                                                </button>
                                                <button
                                                    type="button"
                                                    @click="deleteLeadershipMember(member)"
                                                    class="text-red-600 hover:text-red-800"
                                                >
                                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-else class="text-center py-8 text-gray-500">
                                <svg class="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                                <p>No team members found. Add the first member to get started.</p>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div class="flex justify-end">
                            <button
                                type="submit"
                                :disabled="leadershipProcessing"
                                class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span v-if="leadershipProcessing" class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                                {{ leadershipProcessing ? 'Saving...' : 'Save Leadership Section' }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Service Modal -->
        <div v-if="showAddServiceModal" class="fixed inset-0 z-50 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <!-- Background overlay -->
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="cancelServiceEdit"></div>

                <!-- Modal content -->
                <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div class="sm:flex sm:items-start">
                        <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                                {{ editingService ? 'Edit Service Item' : 'Add Service Item' }}
                            </h3>

                            <form @submit.prevent="saveService">
                                <div class="space-y-4">
                                    <!-- Title -->
                                    <div>
                                        <label for="service-title" class="block text-sm font-medium text-gray-700 mb-2">
                                            Title
                                        </label>
                                        <input
                                            id="service-title"
                                            v-model="serviceForm.title"
                                            type="text"
                                            required
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"
                                            :class="{ 'border-red-500': serviceErrors.title }"
                                        />
                                        <p v-if="serviceErrors.title" class="mt-1 text-sm text-red-600">
                                            {{ serviceErrors.title }}
                                        </p>
                                    </div>

                                    <!-- Description -->
                                    <div>
                                        <label for="service-description" class="block text-sm font-medium text-gray-700 mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            id="service-description"
                                            v-model="serviceForm.description"
                                            rows="3"
                                            required
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"
                                            :class="{ 'border-red-500': serviceErrors.description }"
                                        ></textarea>
                                        <p v-if="serviceErrors.description" class="mt-1 text-sm text-red-600">
                                            {{ serviceErrors.description }}
                                        </p>
                                    </div>

                                    <!-- Icon SVG -->
                                    <div>
                                        <label for="service-icon" class="block text-sm font-medium text-gray-700 mb-2">
                                            Icon SVG
                                        </label>
                                        <textarea
                                            id="service-icon"
                                            v-model="serviceForm.icon_svg"
                                            rows="3"
                                            placeholder="<path d='...'/>"
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red font-mono"
                                            :class="{ 'border-red-500': serviceErrors.icon_svg }"
                                        ></textarea>
                                        <p v-if="serviceErrors.icon_svg" class="mt-1 text-sm text-red-600">
                                            {{ serviceErrors.icon_svg }}
                                        </p>
                                        <p class="mt-1 text-xs text-gray-500">
                                            Enter the path elements for the SVG icon (without &lt;svg&gt; wrapper)
                                        </p>
                                    </div>

                                    <!-- Sort Order -->
                                    <div>
                                        <label for="service-sort-order" class="block text-sm font-medium text-gray-700 mb-2">
                                            Sort Order
                                        </label>
                                        <input
                                            id="service-sort-order"
                                            v-model.number="serviceForm.sort_order"
                                            type="number"
                                            min="1"
                                            required
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"
                                            :class="{ 'border-red-500': serviceErrors.sort_order }"
                                        />
                                        <p v-if="serviceErrors.sort_order" class="mt-1 text-sm text-red-600">
                                            {{ serviceErrors.sort_order }}
                                        </p>
                                    </div>

                                    <!-- Is Active -->
                                    <div class="flex items-center">
                                        <input
                                            id="service-is-active"
                                            v-model="serviceForm.is_active"
                                            type="checkbox"
                                            class="rounded border-gray-300 text-brand-red focus:ring-brand-red"
                                        />
                                        <label for="service-is-active" class="ml-2 block text-sm text-gray-700">
                                            Active
                                        </label>
                                    </div>
                                </div>

                                <div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="submit"
                                        :disabled="serviceProcessing"
                                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                                    >
                                        <span v-if="serviceProcessing" class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                                        {{ serviceProcessing ? 'Saving...' : (editingService ? 'Update' : 'Add') }} Service
                                    </button>
                                    <button
                                        type="button"
                                        @click="cancelServiceEdit"
                                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:mt-0 sm:w-auto sm:text-sm"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Approach Step Modal -->
        <div v-if="showAddApproachStepModal" class="fixed inset-0 z-50 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <!-- Background overlay -->
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="cancelApproachStepEdit"></div>

                <!-- Modal content -->
                <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div class="sm:flex sm:items-start">
                        <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                                {{ editingApproachStep ? 'Edit Approach Step' : 'Add Approach Step' }}
                            </h3>

                            <form @submit.prevent="saveApproachStep">
                                <div class="space-y-4">
                                    <!-- Number -->
                                    <div>
                                        <label for="step-number" class="block text-sm font-medium text-gray-700 mb-2">
                                            Step Number
                                        </label>
                                        <input
                                            id="step-number"
                                            v-model.number="approachStepForm.number"
                                            type="number"
                                            min="1"
                                            required
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"
                                            :class="{ 'border-red-500': approachStepErrors.number }"
                                        />
                                        <p v-if="approachStepErrors.number" class="mt-1 text-sm text-red-600">
                                            {{ approachStepErrors.number }}
                                        </p>
                                    </div>

                                    <!-- Title -->
                                    <div>
                                        <label for="step-title" class="block text-sm font-medium text-gray-700 mb-2">
                                            Title
                                        </label>
                                        <input
                                            id="step-title"
                                            v-model="approachStepForm.title"
                                            type="text"
                                            required
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"
                                            :class="{ 'border-red-500': approachStepErrors.title }"
                                        />
                                        <p v-if="approachStepErrors.title" class="mt-1 text-sm text-red-600">
                                            {{ approachStepErrors.title }}
                                        </p>
                                    </div>

                                    <!-- Short Description -->
                                    <div>
                                        <label for="step-short-description" class="block text-sm font-medium text-gray-700 mb-2">
                                            Short Description
                                        </label>
                                        <input
                                            id="step-short-description"
                                            v-model="approachStepForm.short_description"
                                            type="text"
                                            required
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"
                                            :class="{ 'border-red-500': approachStepErrors.short_description }"
                                        />
                                        <p v-if="approachStepErrors.short_description" class="mt-1 text-sm text-red-600">
                                            {{ approachStepErrors.short_description }}
                                        </p>
                                    </div>

                                    <!-- Description -->
                                    <div>
                                        <label for="step-description" class="block text-sm font-medium text-gray-700 mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            id="step-description"
                                            v-model="approachStepForm.description"
                                            rows="3"
                                            required
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"
                                            :class="{ 'border-red-500': approachStepErrors.description }"
                                        ></textarea>
                                        <p v-if="approachStepErrors.description" class="mt-1 text-sm text-red-600">
                                            {{ approachStepErrors.description }}
                                        </p>
                                    </div>

                                    <!-- Icon SVG -->
                                    <div>
                                        <label for="step-icon" class="block text-sm font-medium text-gray-700 mb-2">
                                            Icon SVG
                                        </label>
                                        <textarea
                                            id="step-icon"
                                            v-model="approachStepForm.icon_svg"
                                            rows="3"
                                            placeholder="<path d='...'/>"
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red font-mono"
                                            :class="{ 'border-red-500': approachStepErrors.icon_svg }"
                                        ></textarea>
                                        <p v-if="approachStepErrors.icon_svg" class="mt-1 text-sm text-red-600">
                                            {{ approachStepErrors.icon_svg }}
                                        </p>
                                        <p class="mt-1 text-xs text-gray-500">
                                            Enter the path elements for the SVG icon (without &lt;svg&gt; wrapper)
                                        </p>
                                    </div>

                                    <!-- Sort Order -->
                                    <div>
                                        <label for="step-sort-order" class="block text-sm font-medium text-gray-700 mb-2">
                                            Sort Order
                                        </label>
                                        <input
                                            id="step-sort-order"
                                            v-model.number="approachStepForm.sort_order"
                                            type="number"
                                            min="1"
                                            required
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"
                                            :class="{ 'border-red-500': approachStepErrors.sort_order }"
                                        />
                                        <p v-if="approachStepErrors.sort_order" class="mt-1 text-sm text-red-600">
                                            {{ approachStepErrors.sort_order }}
                                        </p>
                                    </div>

                                    <!-- Is Active -->
                                    <div class="flex items-center">
                                        <input
                                            id="step-is-active"
                                            v-model="approachStepForm.is_active"
                                            type="checkbox"
                                            class="rounded border-gray-300 text-brand-red focus:ring-brand-red"
                                        />
                                        <label for="step-is-active" class="ml-2 block text-sm text-gray-700">
                                            Active
                                        </label>
                                    </div>
                                </div>

                                <div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="submit"
                                        :disabled="approachStepProcessing"
                                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                                    >
                                        <span v-if="approachStepProcessing" class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                                        {{ approachStepProcessing ? 'Saving...' : (editingApproachStep ? 'Update' : 'Add') }} Step
                                    </button>
                                    <button
                                        type="button"
                                        @click="cancelApproachStepEdit"
                                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:mt-0 sm:w-auto sm:text-sm"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Leadership Member Modal -->
        <div v-if="showAddLeadershipMemberModal" class="fixed inset-0 z-50 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <!-- Background overlay -->
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="cancelLeadershipMemberEdit"></div>

                <!-- Modal content -->
                <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div class="sm:flex sm:items-start">
                        <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
                                {{ editingLeadershipMember ? 'Edit Team Member' : 'Add Team Member' }}
                            </h3>

                            <form @submit.prevent="saveLeadershipMember">
                                <div class="space-y-4">
                                    <!-- Name -->
                                    <div>
                                        <label for="member-name" class="block text-sm font-medium text-gray-700 mb-2">
                                            Name <span class="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="member-name"
                                            v-model="leadershipMemberForm.name"
                                            type="text"
                                            required
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"
                                            :class="{ 'border-red-500': leadershipMemberErrors.name }"
                                        />
                                        <p v-if="leadershipMemberErrors.name" class="mt-1 text-sm text-red-600">
                                            {{ leadershipMemberErrors.name }}
                                        </p>
                                    </div>

                                    <!-- Position -->
                                    <div>
                                        <label for="member-position" class="block text-sm font-medium text-gray-700 mb-2">
                                            Position <span class="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="member-position"
                                            v-model="leadershipMemberForm.position"
                                            type="text"
                                            required
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"
                                            :class="{ 'border-red-500': leadershipMemberErrors.position }"
                                        />
                                        <p v-if="leadershipMemberErrors.position" class="mt-1 text-sm text-red-600">
                                            {{ leadershipMemberErrors.position }}
                                        </p>
                                    </div>

                                    <!-- Bio -->
                                    <div>
                                        <label for="member-bio" class="block text-sm font-medium text-gray-700 mb-2">
                                            Bio (Optional)
                                        </label>
                                        <textarea
                                            id="member-bio"
                                            v-model="leadershipMemberForm.bio"
                                            rows="3"
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"
                                            :class="{ 'border-red-500': leadershipMemberErrors.bio }"
                                            placeholder="Brief description of the team member"
                                        ></textarea>
                                        <p v-if="leadershipMemberErrors.bio" class="mt-1 text-sm text-red-600">
                                            {{ leadershipMemberErrors.bio }}
                                        </p>
                                    </div>

                                    <!-- Image Upload -->
                                    <div>
                                        <label for="member-image" class="block text-sm font-medium text-gray-700 mb-2">
                                            Profile Image (Optional)
                                        </label>
                                        <input
                                            id="member-image"
                                            @change="leadershipMemberForm.image = $event.target.files[0]"
                                            type="file"
                                            accept="image/*"
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-red file:text-white hover:file:bg-red-700"
                                        />
                                        <p v-if="leadershipMemberErrors.image" class="mt-1 text-sm text-red-600">
                                            {{ leadershipMemberErrors.image }}
                                        </p>
                                        <p class="mt-1 text-xs text-gray-500">
                                            Upload a profile image. Recommended size: 300x400px (3:4 aspect ratio).
                                        </p>
                                    </div>

                                    <!-- LinkedIn URL -->
                                    <div>
                                        <label for="member-linkedin" class="block text-sm font-medium text-gray-700 mb-2">
                                            LinkedIn URL (Optional)
                                        </label>
                                        <input
                                            id="member-linkedin"
                                            v-model="leadershipMemberForm.linkedin_url"
                                            type="url"
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"
                                            :class="{ 'border-red-500': leadershipMemberErrors.linkedin_url }"
                                            placeholder="https://linkedin.com/in/username"
                                        />
                                        <p v-if="leadershipMemberErrors.linkedin_url" class="mt-1 text-sm text-red-600">
                                            {{ leadershipMemberErrors.linkedin_url }}
                                        </p>
                                    </div>

                                    <!-- Twitter URL -->
                                    <div>
                                        <label for="member-twitter" class="block text-sm font-medium text-gray-700 mb-2">
                                            Twitter URL (Optional)
                                        </label>
                                        <input
                                            id="member-twitter"
                                            v-model="leadershipMemberForm.twitter_url"
                                            type="url"
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"
                                            :class="{ 'border-red-500': leadershipMemberErrors.twitter_url }"
                                            placeholder="https://twitter.com/username"
                                        />
                                        <p v-if="leadershipMemberErrors.twitter_url" class="mt-1 text-sm text-red-600">
                                            {{ leadershipMemberErrors.twitter_url }}
                                        </p>
                                    </div>

                                    <!-- Sort Order -->
                                    <div>
                                        <label for="member-sort-order" class="block text-sm font-medium text-gray-700 mb-2">
                                            Sort Order
                                        </label>
                                        <input
                                            id="member-sort-order"
                                            v-model.number="leadershipMemberForm.sort_order"
                                            type="number"
                                            min="1"
                                            required
                                            class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"
                                            :class="{ 'border-red-500': leadershipMemberErrors.sort_order }"
                                        />
                                        <p v-if="leadershipMemberErrors.sort_order" class="mt-1 text-sm text-red-600">
                                            {{ leadershipMemberErrors.sort_order }}
                                        </p>
                                    </div>

                                    <!-- Is Active -->
                                    <div class="flex items-center">
                                        <input
                                            id="member-is-active"
                                            v-model="leadershipMemberForm.is_active"
                                            type="checkbox"
                                            class="rounded border-gray-300 text-brand-red focus:ring-brand-red"
                                        />
                                        <label for="member-is-active" class="ml-2 block text-sm text-gray-700">
                                            Active
                                        </label>
                                    </div>
                                </div>

                                <div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="submit"
                                        :disabled="leadershipMemberProcessing"
                                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                                    >
                                        <span v-if="leadershipMemberProcessing" class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                                        {{ leadershipMemberProcessing ? 'Saving...' : (editingLeadershipMember ? 'Update' : 'Add') }} Member
                                    </button>
                                    <button
                                        type="button"
                                        @click="cancelLeadershipMemberEdit"
                                        class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:mt-0 sm:w-auto sm:text-sm"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Why Partner Section Card -->
        <div id="why-partner-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Why Partner With Us Section</h2>
                <p class="text-sm text-gray-600 mt-1">Manage the why partner section content and features</p>
            </div>

            <div class="p-6">
                <form @submit.prevent="updateWhyPartner">
                    <div class="space-y-6">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- Title -->
                            <div>
                                <label for="why_partner_title" class="block text-sm font-medium text-gray-700 mb-2">
                                    Title <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="why_partner_title"
                                    v-model="whyPartnerForm.title"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="e.g., Why Partner With Us"
                                    :class="{ 'border-red-500': whyPartnerErrors.title }"
                                />
                                <p v-if="whyPartnerErrors.title" class="mt-1 text-sm text-red-600">{{ whyPartnerErrors.title }}</p>
                            </div>

                            <!-- Background Color -->
                            <div>
                                <label for="why_partner_background_color" class="block text-sm font-medium text-gray-700 mb-2">
                                    Background Color
                                </label>
                                <input
                                    type="text"
                                    id="why_partner_background_color"
                                    v-model="whyPartnerForm.background_color"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="e.g., #ffffff or white"
                                />
                            </div>
                        </div>

                        <!-- Subtitle -->
                        <div>
                            <label for="why_partner_subtitle" class="block text-sm font-medium text-gray-700 mb-2">
                                Subtitle <span class="text-red-500">*</span>
                            </label>
                            <textarea
                                id="why_partner_subtitle"
                                v-model="whyPartnerForm.subtitle"
                                rows="3"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                placeholder="Enter the subtitle description..."
                                :class="{ 'border-red-500': whyPartnerErrors.subtitle }"
                            ></textarea>
                            <p v-if="whyPartnerErrors.subtitle" class="mt-1 text-sm text-red-600">{{ whyPartnerErrors.subtitle }}</p>
                        </div>

                        <!-- Background Image Upload -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Background Image
                            </label>

                            <!-- Current Image Display -->
                            <div v-if="whyPartnerSection?.background_image" class="mb-4">
                                <div class="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                                    <img
                                        :src="`/storage/${whyPartnerSection.background_image}`"
                                        alt="Why Partner background"
                                        class="w-full h-full object-cover"
                                    />
                                    <div class="absolute top-2 right-2">
                                        <button
                                            type="button"
                                            @click="deleteWhyPartnerBackground"
                                            class="bg-red-500 hover:bg-red-600 text-white p-1 rounded-md transition-colors duration-200"
                                        >
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- File Upload -->
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-brand-red transition-colors duration-200">
                                <input
                                    type="file"
                                    ref="whyPartnerBgFileInput"
                                    @change="uploadWhyPartnerBackground"
                                    accept="image/*"
                                    class="hidden"
                                />

                                <div class="text-center">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="mt-4">
                                        <button
                                            type="button"
                                            @click="$refs.whyPartnerBgFileInput.click()"
                                            class="bg-brand-red hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                                        >
                                            {{ whyPartnerSection?.background_image ? 'Change Background Image' : 'Upload Background Image' }}
                                        </button>
                                    </div>
                                    <p class="mt-2 text-sm text-gray-500">PNG, JPG, GIF up to 5MB</p>
                                </div>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div class="flex justify-end space-x-4">
                            <button
                                type="submit"
                                :disabled="whyPartnerProcessing"
                                class="bg-brand-red hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {{ whyPartnerProcessing ? 'Updating...' : 'Update Section' }}
                            </button>
                        </div>
                    </div>
                </form>

                <!-- Features Management -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-lg font-medium text-gray-900">Features</h3>
                        <button
                            @click="addWhyPartnerFeature"
                            class="bg-brand-red hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
                        >
                            Add Feature
                        </button>
                    </div>

                    <!-- Features List -->
                    <div class="space-y-4">
                        <div
                            v-for="(feature, index) in whyPartnerSection?.features || []"
                            :key="feature.id"
                            class="bg-gray-50 p-4 rounded-lg border"
                        >
                            <div class="flex items-start justify-between">
                                <div class="flex-1">
                                    <h4 class="text-lg font-medium text-gray-900">{{ feature.title }}</h4>
                                    <p class="text-sm text-gray-600 mt-1">{{ feature.description }}</p>
                                    <div class="flex items-center mt-2 space-x-4">
                                        <span class="text-xs text-gray-500">Sort Order: {{ feature.sort_order }}</span>
                                        <span class="text-xs text-gray-500">Status: {{ feature.is_active ? 'Active' : 'Inactive' }}</span>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-2 ml-4">
                                    <button
                                        @click="editWhyPartnerFeature(feature)"
                                        class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        @click="deleteWhyPartnerFeature(feature.id)"
                                        class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Empty State -->
                        <div v-if="!whyPartnerSection?.features?.length" class="text-center py-8">
                            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            <h3 class="mt-2 text-sm font-medium text-gray-900">No features</h3>
                            <p class="mt-1 text-sm text-gray-500">Get started by adding your first feature.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Why Partner Feature Modal -->
        <div v-if="whyPartnerFeatureModalOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div class="mt-3">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-medium text-gray-900">
                            {{ whyPartnerFeatureModalMode === 'create' ? 'Add New Feature' : 'Edit Feature' }}
                        </h3>
                        <button
                            @click="cancelWhyPartnerFeatureEdit"
                            class="text-gray-400 hover:text-gray-600"
                        >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <form @submit.prevent="saveWhyPartnerFeature">
                        <div class="space-y-4">
                            <!-- Title -->
                            <div>
                                <label for="feature_title" class="block text-sm font-medium text-gray-700 mb-1">
                                    Title <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="feature_title"
                                    v-model="whyPartnerFeatureForm.title"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="e.g., Certified Databricks Expertise"
                                    required
                                />
                            </div>

                            <!-- Description -->
                            <div>
                                <label for="feature_description" class="block text-sm font-medium text-gray-700 mb-1">
                                    Description <span class="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="feature_description"
                                    v-model="whyPartnerFeatureForm.description"
                                    rows="3"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="Enter the feature description..."
                                    required
                                ></textarea>
                            </div>

                            <!-- Sort Order -->
                            <div>
                                <label for="feature_sort_order" class="block text-sm font-medium text-gray-700 mb-1">
                                    Sort Order <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="feature_sort_order"
                                    v-model.number="whyPartnerFeatureForm.sort_order"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="1"
                                    min="0"
                                    required
                                />
                            </div>

                            <!-- Active Status (only for edit) -->
                            <div v-if="whyPartnerFeatureModalMode === 'edit'" class="flex items-center">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        v-model="whyPartnerFeatureForm.is_active"
                                        class="sr-only peer"
                                    >
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                                    <span class="ml-3 text-sm font-medium text-gray-700">Feature Active</span>
                                </label>
                            </div>
                        </div>

                        <div class="flex justify-end space-x-3 mt-6">
                            <button
                                type="button"
                                @click="cancelWhyPartnerFeatureEdit"
                                class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md font-medium transition-colors duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                :disabled="whyPartnerFeatureProcessing"
                                class="bg-brand-red hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {{ whyPartnerFeatureProcessing ? 'Saving...' : (whyPartnerFeatureModalMode === 'create' ? 'Add Feature' : 'Update Feature') }}
                            </button>
                        </div>
                    </form>
                </div>
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
    heroSection: Object,
    partnerBadge: Object,
    storySection: Object,
    whatWeDoSection: Object,
    approachSection: Object,
    leadershipSection: Object,
    whyPartnerSection: Object
});

// Reactive data
const activeSection = ref('hero-section');
const sectionNav = ref(null);
const heroProcessing = ref(false);
const heroErrors = ref({});
const partnerProcessing = ref(false);
const partnerErrors = ref({});
const storyProcessing = ref(false);
const storyErrors = ref({});
const whatWeDoProcessing = ref(false);
const whatWeDoErrors = ref({});
const showAddServiceModal = ref(false);
const editingService = ref(null);
const approachProcessing = ref(false);
const approachErrors = ref({});
const showAddApproachStepModal = ref(false);
const editingApproachStep = ref(null);

// Define sections for navigation
const sections = ref([
    {
        id: 'hero-section',
        name: 'Hero Section',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>'
    },
    {
        id: 'partner-badge-section',
        name: 'Partner Badge',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>'
    },
    {
        id: 'story-section',
        name: 'Story Section',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>'
    },
    {
        id: 'what-we-do-section',
        name: 'What We Do',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>'
    },
    {
        id: 'approach-section',
        name: 'Our Approach',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
    },
    {
        id: 'leadership-section',
        name: 'Leadership',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>'
    },
    {
        id: 'why-partner-section',
        name: 'Why Partner',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>'
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

// Partner Badge form
const partnerForm = reactive({
    text: props.partnerBadge?.text || '',
    logo_alt: props.partnerBadge?.logo_alt || '',
    is_active: props.partnerBadge?.is_active ?? true
});

// Story Section form
const storyForm = reactive({
    header_tag: props.storySection?.header_tag || 'OUR STORY',
    title: props.storySection?.title || '',
    subtitle: props.storySection?.subtitle || '',
    descriptions: props.storySection?.descriptions || ['', '', ''],
    image_alt: props.storySection?.image_alt || '',
    image_position: props.storySection?.image_position || 'left',
    background_color: props.storySection?.background_color || 'bg-white',
    is_active: props.storySection?.is_active ?? true
});

// What We Do form
const whatWeDoForm = reactive({
    header_tag: props.whatWeDoSection?.header_tag || 'HOW WE HELP',
    title: props.whatWeDoSection?.title || '',
    subtitle: props.whatWeDoSection?.subtitle || '',
    is_active: props.whatWeDoSection?.is_active ?? true
});

// Service Item form
const serviceForm = reactive({
    title: '',
    description: '',
    icon_svg: '',
    sort_order: 1,
    is_active: true
});

const serviceProcessing = ref(false);
const serviceErrors = ref({});

// Approach form
const approachForm = reactive({
    header_tag: props.approachSection?.header_tag || 'HOW WE WORK',
    title: props.approachSection?.title || 'Our Data-First Approach',
    subtitle: props.approachSection?.subtitle || 'How We Transform Your Data Vision Into Reality',
    cta_text: props.approachSection?.cta_text || 'Book A Discovery Session',
    cta_link: props.approachSection?.cta_link || '',
    background_color: props.approachSection?.background_color || 'bg-white',
    is_active: props.approachSection?.is_active ?? true
});

// Approach Step form
const approachStepForm = reactive({
    number: 1,
    title: '',
    short_description: '',
    description: '',
    icon_svg: '',
    sort_order: 1,
    is_active: true
});

const approachStepProcessing = ref(false);
const approachStepErrors = ref({});

// Leadership form
const leadershipForm = reactive({
    header_tag: props.leadershipSection?.header_tag || 'OUR LEADERSHIP',
    title: props.leadershipSection?.title || 'Visionaries Behind Sinki',
    description: props.leadershipSection?.description || 'Our leadership brings years of experience in solving real enterprise data challenges and a shared belief that systems work best when they are intentional, structured, and built for long-term clarity.',
    background_color: props.leadershipSection?.background_color || '',
    is_active: props.leadershipSection?.is_active ?? true
});

// Leadership Member form
const leadershipMemberForm = reactive({
    name: '',
    position: '',
    bio: '',
    linkedin_url: '',
    twitter_url: '',
    sort_order: 1,
    is_active: true,
    image: null
});

const leadershipProcessing = ref(false);
const leadershipErrors = ref({});
const showAddLeadershipMemberModal = ref(false);
const editingLeadershipMember = ref(null);
const leadershipMemberProcessing = ref(false);

// Why Partner form
const whyPartnerForm = reactive({
    title: props.whyPartnerSection?.title || 'Why Partner With Us',
    subtitle: props.whyPartnerSection?.subtitle || 'We combine strategy, engineering, and agility to turn your data vision into a measurable business impact.',
    background_color: props.whyPartnerSection?.background_color || '',
    is_active: props.whyPartnerSection?.is_active ?? true
});

// Why Partner Feature form
const whyPartnerFeatureForm = reactive({
    title: '',
    description: '',
    icon: '',
    sort_order: 1,
    is_active: true
});

// Why Partner state
const whyPartnerProcessing = ref(false);
const whyPartnerErrors = ref({});
const whyPartnerFeatureModalOpen = ref(false);
const whyPartnerFeatureModalMode = ref('create');
const editingWhyPartnerFeature = ref(null);
const whyPartnerFeatureProcessing = ref(false);
const leadershipMemberErrors = ref({});

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

const updatePartnerBadge = () => {
    partnerProcessing.value = true;
    partnerErrors.value = {};

    router.put(route('admin.about-us.partner-badge.update'), partnerForm, {
        onSuccess: () => {
            partnerProcessing.value = false;
        },
        onError: (errors) => {
            partnerErrors.value = errors;
            partnerProcessing.value = false;
        }
    });
};

const uploadPartnerLogo = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    router.post(route('admin.about-us.partner-badge.logo.upload'), formData, {
        forceFormData: true,
        onSuccess: () => {
            event.target.value = '';
        }
    });
};

const deletePartnerLogo = () => {
    if (confirm('Are you sure you want to delete the partner logo?')) {
        router.delete(route('admin.about-us.partner-badge.logo.delete'));
    }
};

const updateStorySection = () => {
    storyProcessing.value = true;
    storyErrors.value = {};

    router.put(route('admin.about-us.story-section.update'), storyForm, {
        onSuccess: () => {
            storyProcessing.value = false;
        },
        onError: (errors) => {
            storyErrors.value = errors;
            storyProcessing.value = false;
        }
    });
};

const uploadStoryImage = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    router.post(route('admin.about-us.story-section.image.upload'), formData, {
        forceFormData: true,
        onSuccess: () => {
            event.target.value = '';
        }
    });
};

const deleteStoryImage = () => {
    if (confirm('Are you sure you want to delete the story image?')) {
        router.delete(route('admin.about-us.story-section.image.delete'));
    }
};

const addDescription = () => {
    storyForm.descriptions.push('');
};

const removeDescription = (index) => {
    if (storyForm.descriptions.length > 1) {
        storyForm.descriptions.splice(index, 1);
    }
};

const updateWhatWeDo = () => {
    whatWeDoProcessing.value = true;
    whatWeDoErrors.value = {};

    router.put(route('admin.about-us.what-we-do.update'), whatWeDoForm, {
        onSuccess: () => {
            whatWeDoProcessing.value = false;
        },
        onError: (errors) => {
            whatWeDoErrors.value = errors;
            whatWeDoProcessing.value = false;
        }
    });
};

const uploadWhatWeDoBackground = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    router.post(route('admin.about-us.what-we-do.background.upload'), formData, {
        forceFormData: true,
        onSuccess: () => {
            event.target.value = '';
        }
    });
};

const deleteWhatWeDoBackground = () => {
    if (confirm('Are you sure you want to delete the background image?')) {
        router.delete(route('admin.about-us.what-we-do.background.delete'));
    }
};

// Service Item Methods
const addService = () => {
    serviceForm.title = '';
    serviceForm.description = '';
    serviceForm.icon_svg = '';
    serviceForm.sort_order = props.whatWeDoSection?.items?.length ? Math.max(...props.whatWeDoSection.items.map(i => i.sort_order)) + 1 : 1;
    serviceForm.is_active = true;
    editingService.value = null;
    showAddServiceModal.value = true;
};

const editService = (service) => {
    serviceForm.title = service.title;
    serviceForm.description = service.description;
    serviceForm.icon_svg = service.icon_svg;
    serviceForm.sort_order = service.sort_order;
    serviceForm.is_active = service.is_active;
    editingService.value = service;
    showAddServiceModal.value = true;
};

const saveService = () => {
    serviceProcessing.value = true;
    serviceErrors.value = {};

    const url = editingService.value
        ? route('admin.about-us.what-we-do.items.update', editingService.value.id)
        : route('admin.about-us.what-we-do.items.store');

    const method = editingService.value ? 'put' : 'post';

    router[method](url, serviceForm, {
        onSuccess: () => {
            serviceProcessing.value = false;
            showAddServiceModal.value = false;
            editingService.value = null;
        },
        onError: (errors) => {
            serviceErrors.value = errors;
            serviceProcessing.value = false;
        }
    });
};

const deleteService = (service) => {
    if (confirm(`Are you sure you want to delete "${service.title}"?`)) {
        router.delete(route('admin.about-us.what-we-do.items.delete', service.id));
    }
};

const cancelServiceEdit = () => {
    showAddServiceModal.value = false;
    editingService.value = null;
    serviceForm.title = '';
    serviceForm.description = '';
    serviceForm.icon_svg = '';
    serviceForm.sort_order = 1;
    serviceForm.is_active = true;
};

// Approach Section Methods
const updateApproach = () => {
    approachProcessing.value = true;
    approachErrors.value = {};

    router.put(route('admin.about-us.approach.update'), approachForm, {
        onSuccess: () => {
            approachProcessing.value = false;
        },
        onError: (errors) => {
            approachErrors.value = errors;
            approachProcessing.value = false;
        }
    });
};

// Approach Step Methods
const addApproachStep = () => {
    approachStepForm.number = props.approachSection?.steps?.length ? Math.max(...props.approachSection.steps.map(s => s.number)) + 1 : 1;
    approachStepForm.title = '';
    approachStepForm.short_description = '';
    approachStepForm.description = '';
    approachStepForm.icon_svg = '';
    approachStepForm.sort_order = props.approachSection?.steps?.length ? Math.max(...props.approachSection.steps.map(s => s.sort_order)) + 1 : 1;
    approachStepForm.is_active = true;
    editingApproachStep.value = null;
    showAddApproachStepModal.value = true;
};

const editApproachStep = (step) => {
    approachStepForm.number = step.number;
    approachStepForm.title = step.title;
    approachStepForm.short_description = step.short_description;
    approachStepForm.description = step.description;
    approachStepForm.icon_svg = step.icon_svg;
    approachStepForm.sort_order = step.sort_order;
    approachStepForm.is_active = step.is_active;
    editingApproachStep.value = step;
    showAddApproachStepModal.value = true;
};

const saveApproachStep = () => {
    approachStepProcessing.value = true;
    approachStepErrors.value = {};

    const url = editingApproachStep.value
        ? route('admin.about-us.approach.steps.update', editingApproachStep.value.id)
        : route('admin.about-us.approach.steps.store');

    const method = editingApproachStep.value ? 'put' : 'post';

    router[method](url, approachStepForm, {
        onSuccess: () => {
            approachStepProcessing.value = false;
            showAddApproachStepModal.value = false;
            editingApproachStep.value = null;
        },
        onError: (errors) => {
            approachStepErrors.value = errors;
            approachStepProcessing.value = false;
        }
    });
};

const deleteApproachStep = (step) => {
    if (confirm(`Are you sure you want to delete "${step.title}"?`)) {
        router.delete(route('admin.about-us.approach.steps.delete', step.id));
    }
};

const cancelApproachStepEdit = () => {
    showAddApproachStepModal.value = false;
    editingApproachStep.value = null;
    approachStepForm.number = 1;
    approachStepForm.title = '';
    approachStepForm.short_description = '';
    approachStepForm.description = '';
    approachStepForm.icon_svg = '';
    approachStepForm.sort_order = 1;
    approachStepForm.is_active = true;
};

// Leadership Section Methods
const updateLeadership = () => {
    leadershipProcessing.value = true;
    leadershipErrors.value = {};

    router.put(route('admin.about-us.leadership.update'), leadershipForm, {
        onSuccess: () => {
            leadershipProcessing.value = false;
        },
        onError: (errors) => {
            leadershipErrors.value = errors;
            leadershipProcessing.value = false;
        }
    });
};

const uploadLeadershipBackground = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('background_image', file);

    router.post(route('admin.about-us.leadership.background.upload'), formData, {
        onSuccess: () => {
            // Reset file input
            event.target.value = '';
        },
        onError: (errors) => {
            console.error('Upload error:', errors);
        }
    });
};

const deleteLeadershipBackground = () => {
    if (confirm('Are you sure you want to delete the background image?')) {
        router.delete(route('admin.about-us.leadership.background.delete'));
    }
};

// Leadership Member Methods
const addLeadershipMember = () => {
    leadershipMemberForm.name = '';
    leadershipMemberForm.position = '';
    leadershipMemberForm.bio = '';
    leadershipMemberForm.linkedin_url = '';
    leadershipMemberForm.twitter_url = '';
    leadershipMemberForm.sort_order = props.leadershipSection?.members?.length ? Math.max(...props.leadershipSection.members.map(m => m.sort_order)) + 1 : 1;
    leadershipMemberForm.is_active = true;
    leadershipMemberForm.image = null;
    editingLeadershipMember.value = null;
    showAddLeadershipMemberModal.value = true;
};

const editLeadershipMember = (member) => {
    leadershipMemberForm.name = member.name;
    leadershipMemberForm.position = member.position;
    leadershipMemberForm.bio = member.bio || '';
    leadershipMemberForm.linkedin_url = member.linkedin_url || '';
    leadershipMemberForm.twitter_url = member.twitter_url || '';
    leadershipMemberForm.sort_order = member.sort_order;
    leadershipMemberForm.is_active = member.is_active;
    leadershipMemberForm.image = null; // Don't pre-fill image
    editingLeadershipMember.value = member;
    showAddLeadershipMemberModal.value = true;
};

const saveLeadershipMember = () => {
    leadershipMemberProcessing.value = true;
    leadershipMemberErrors.value = {};

    const formData = new FormData();
    formData.append('name', leadershipMemberForm.name);
    formData.append('position', leadershipMemberForm.position);
    formData.append('bio', leadershipMemberForm.bio);
    formData.append('linkedin_url', leadershipMemberForm.linkedin_url);
    formData.append('twitter_url', leadershipMemberForm.twitter_url);
    formData.append('sort_order', leadershipMemberForm.sort_order);
    formData.append('is_active', leadershipMemberForm.is_active ? '1' : '0');

    if (leadershipMemberForm.image) {
        formData.append('image', leadershipMemberForm.image);
    }

    const url = editingLeadershipMember.value
        ? route('admin.about-us.leadership.members.update', editingLeadershipMember.value.id)
        : route('admin.about-us.leadership.members.store');

    const method = editingLeadershipMember.value ? 'post' : 'post'; // Both use POST for file uploads

    if (editingLeadershipMember.value) {
        formData.append('_method', 'PUT');
    }

    router.post(url, formData, {
        onSuccess: () => {
            leadershipMemberProcessing.value = false;
            showAddLeadershipMemberModal.value = false;
            editingLeadershipMember.value = null;
        },
        onError: (errors) => {
            leadershipMemberErrors.value = errors;
            leadershipMemberProcessing.value = false;
        }
    });
};

const deleteLeadershipMember = (member) => {
    if (confirm(`Are you sure you want to delete "${member.name}"?`)) {
        router.delete(route('admin.about-us.leadership.members.delete', member.id));
    }
};

const cancelLeadershipMemberEdit = () => {
    showAddLeadershipMemberModal.value = false;
    editingLeadershipMember.value = null;
    leadershipMemberForm.name = '';
    leadershipMemberForm.position = '';
    leadershipMemberForm.bio = '';
    leadershipMemberForm.linkedin_url = '';
    leadershipMemberForm.twitter_url = '';
    leadershipMemberForm.sort_order = 1;
    leadershipMemberForm.is_active = true;
    leadershipMemberForm.image = null;
};

// Why Partner methods
const updateWhyPartner = () => {
    whyPartnerProcessing.value = true;
    whyPartnerErrors.value = {};

    router.put(route('admin.about-us.why-partner.update'), {
        title: whyPartnerForm.title,
        subtitle: whyPartnerForm.subtitle,
        background_color: whyPartnerForm.background_color,
        is_active: whyPartnerForm.is_active
    }, {
        onSuccess: () => {
            whyPartnerProcessing.value = false;
        },
        onError: (errors) => {
            whyPartnerErrors.value = errors;
            whyPartnerProcessing.value = false;
        }
    });
};

const uploadWhyPartnerBackground = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('background_image', file);

    router.post(route('admin.about-us.why-partner.background.upload'), formData, {
        forceFormData: true,
        onSuccess: () => {
            // Clear the file input
            event.target.value = '';
        },
        onError: (errors) => {
            console.error('Upload failed:', errors);
            event.target.value = '';
        }
    });
};

const deleteWhyPartnerBackground = () => {
    if (confirm('Are you sure you want to delete the background image?')) {
        router.delete(route('admin.about-us.why-partner.background.delete'));
    }
};

const addWhyPartnerFeature = () => {
    whyPartnerFeatureModalMode.value = 'create';
    whyPartnerFeatureForm.title = '';
    whyPartnerFeatureForm.description = '';
    whyPartnerFeatureForm.icon = '';
    whyPartnerFeatureForm.sort_order = (props.whyPartnerSection?.features?.length || 0) + 1;
    whyPartnerFeatureForm.is_active = true;
    whyPartnerFeatureModalOpen.value = true;
};

const editWhyPartnerFeature = (feature) => {
    whyPartnerFeatureModalMode.value = 'edit';
    editingWhyPartnerFeature.value = feature;
    whyPartnerFeatureForm.title = feature.title;
    whyPartnerFeatureForm.description = feature.description;
    whyPartnerFeatureForm.icon = feature.icon || '';
    whyPartnerFeatureForm.sort_order = feature.sort_order;
    whyPartnerFeatureForm.is_active = feature.is_active;
    whyPartnerFeatureModalOpen.value = true;
};

const saveWhyPartnerFeature = () => {
    whyPartnerFeatureProcessing.value = true;

    const data = {
        title: whyPartnerFeatureForm.title,
        description: whyPartnerFeatureForm.description,
        icon: whyPartnerFeatureForm.icon,
        sort_order: whyPartnerFeatureForm.sort_order,
        is_active: whyPartnerFeatureForm.is_active
    };

    if (whyPartnerFeatureModalMode.value === 'create') {
        router.post(route('admin.about-us.why-partner.features.store'), data, {
            onSuccess: () => {
                whyPartnerFeatureProcessing.value = false;
                whyPartnerFeatureModalOpen.value = false;
            },
            onError: (errors) => {
                whyPartnerFeatureProcessing.value = false;
                console.error('Create failed:', errors);
            }
        });
    } else {
        router.put(route('admin.about-us.why-partner.features.update', editingWhyPartnerFeature.value.id), data, {
            onSuccess: () => {
                whyPartnerFeatureProcessing.value = false;
                whyPartnerFeatureModalOpen.value = false;
                editingWhyPartnerFeature.value = null;
            },
            onError: (errors) => {
                whyPartnerFeatureProcessing.value = false;
                console.error('Update failed:', errors);
            }
        });
    }
};

const deleteWhyPartnerFeature = (featureId) => {
    if (confirm('Are you sure you want to delete this feature?')) {
        router.delete(route('admin.about-us.why-partner.features.delete', featureId));
    }
};

const cancelWhyPartnerFeatureEdit = () => {
    whyPartnerFeatureModalOpen.value = false;
    editingWhyPartnerFeature.value = null;
    whyPartnerFeatureForm.title = '';
    whyPartnerFeatureForm.description = '';
    whyPartnerFeatureForm.icon = '';
    whyPartnerFeatureForm.sort_order = 1;
    whyPartnerFeatureForm.is_active = true;
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