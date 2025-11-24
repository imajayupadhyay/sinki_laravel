<template>
    <AdminLayout page-title="Homepage Management" page-subtitle="Manage your website's homepage content">
        <!-- Sticky Section Navigation -->
        <div class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm mb-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav class="flex space-x-8 overflow-x-auto py-4" ref="sectionNav">
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
        <!-- SEO Settings Section Card -->
        <div id="seo-settings" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">SEO Settings</h2>
                <p class="text-sm text-gray-600 mt-1">Manage meta tags, Open Graph, and Twitter Card settings for better SEO</p>
            </div>

            <div class="p-6">
                <form @submit.prevent="updateSeoSettings">
                    <!-- Basic SEO Settings -->
                    <div class="space-y-6">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <!-- Title -->
                            <div>
                                <label for="seo_title" class="block text-sm font-medium text-gray-700 mb-2">
                                    Page Title <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="seo_title"
                                    v-model="seoForm.title"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="Enter page title"
                                    :class="{ 'border-red-500': seoErrors.title }"
                                />
                                <p v-if="seoErrors.title" class="mt-1 text-sm text-red-600">{{ seoErrors.title }}</p>
                            </div>

                            <!-- Active Status -->
                            <div class="flex items-center">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        v-model="seoForm.is_active"
                                        class="sr-only peer"
                                    >
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                                    <span class="ml-3 text-sm font-medium text-gray-700">SEO Settings Active</span>
                                </label>
                            </div>
                        </div>

                        <!-- Meta Description -->
                        <div>
                            <label for="seo_description" class="block text-sm font-medium text-gray-700 mb-2">
                                Meta Description <span class="text-red-500">*</span>
                            </label>
                            <textarea
                                id="seo_description"
                                v-model="seoForm.description"
                                rows="3"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"
                                placeholder="Enter meta description (150-160 characters recommended)"
                                :class="{ 'border-red-500': seoErrors.description }"
                            ></textarea>
                            <p v-if="seoErrors.description" class="mt-1 text-sm text-red-600">{{ seoErrors.description }}</p>
                            <p class="mt-1 text-xs text-gray-500">{{ seoForm.description?.length || 0 }}/160 characters</p>
                        </div>

                        <!-- Keywords -->
                        <div>
                            <label for="seo_keywords" class="block text-sm font-medium text-gray-700 mb-2">
                                Keywords
                            </label>
                            <input
                                type="text"
                                id="seo_keywords"
                                v-model="seoForm.keywords"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                placeholder="Enter keywords separated by commas"
                                :class="{ 'border-red-500': seoErrors.keywords }"
                            />
                            <p v-if="seoErrors.keywords" class="mt-1 text-sm text-red-600">{{ seoErrors.keywords }}</p>
                            <p class="mt-1 text-xs text-gray-500">Separate keywords with commas</p>
                        </div>

                        <!-- Open Graph Settings -->
                        <div class="border-t border-gray-200 pt-6">
                            <h3 class="text-md font-medium text-gray-900 mb-4">Open Graph Settings</h3>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label for="og_title" class="block text-sm font-medium text-gray-700 mb-2">
                                        OG Title
                                    </label>
                                    <input
                                        type="text"
                                        id="og_title"
                                        v-model="seoForm.og_title"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                        placeholder="Leave empty to use page title"
                                        :class="{ 'border-red-500': seoErrors.og_title }"
                                    />
                                    <p v-if="seoErrors.og_title" class="mt-1 text-sm text-red-600">{{ seoErrors.og_title }}</p>
                                </div>

                                <div>
                                    <label for="og_url" class="block text-sm font-medium text-gray-700 mb-2">
                                        OG URL
                                    </label>
                                    <input
                                        type="url"
                                        id="og_url"
                                        v-model="seoForm.og_url"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                        placeholder="https://www.sinki.ai"
                                        :class="{ 'border-red-500': seoErrors.og_url }"
                                    />
                                    <p v-if="seoErrors.og_url" class="mt-1 text-sm text-red-600">{{ seoErrors.og_url }}</p>
                                </div>

                                <div class="lg:col-span-2">
                                    <label for="og_description" class="block text-sm font-medium text-gray-700 mb-2">
                                        OG Description
                                    </label>
                                    <textarea
                                        id="og_description"
                                        v-model="seoForm.og_description"
                                        rows="2"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"
                                        placeholder="Leave empty to use meta description"
                                        :class="{ 'border-red-500': seoErrors.og_description }"
                                    ></textarea>
                                    <p v-if="seoErrors.og_description" class="mt-1 text-sm text-red-600">{{ seoErrors.og_description }}</p>
                                </div>
                            </div>

                            <!-- OG Image Upload -->
                            <div class="mt-6">
                                <label class="block text-sm font-medium text-gray-700 mb-2">
                                    Open Graph Image
                                </label>
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <!-- Upload Area -->
                                    <div>
                                        <div class="border-2 border-dashed border-gray-300 rounded-lg p-4">
                                            <div class="text-center">
                                                <svg class="mx-auto h-8 w-8 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <div class="mt-2">
                                                    <label for="og_image" class="cursor-pointer">
                                                        <span class="text-sm font-medium text-gray-900">
                                                            Upload OG Image
                                                        </span>
                                                        <input
                                                            id="og_image"
                                                            type="file"
                                                            accept="image/*"
                                                            @change="handleSeoImageUpload($event, 'og_image')"
                                                            class="sr-only"
                                                        />
                                                    </label>
                                                </div>
                                                <p class="text-xs text-gray-500">Recommended: 1200x630px</p>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Preview -->
                                    <div>
                                        <div class="aspect-[1200/630] bg-gray-100 rounded-lg overflow-hidden">
                                            <div v-if="ogImagePreview || seoSettings?.og_image_url" class="w-full h-full relative group">
                                                <img
                                                    :src="ogImagePreview || seoSettings?.og_image_url"
                                                    alt="Open Graph image preview"
                                                    class="w-full h-full object-cover"
                                                />
                                                <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                                    <button
                                                        @click="deleteSeoImage('og_image')"
                                                        class="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                            <div v-else class="w-full h-full flex items-center justify-center">
                                                <p class="text-sm text-gray-500">No OG image</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Twitter Card Settings -->
                        <div class="border-t border-gray-200 pt-6">
                            <h3 class="text-md font-medium text-gray-900 mb-4">Twitter Card Settings</h3>
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <label for="twitter_card" class="block text-sm font-medium text-gray-700 mb-2">
                                        Card Type
                                    </label>
                                    <select
                                        id="twitter_card"
                                        v-model="seoForm.twitter_card"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                        :class="{ 'border-red-500': seoErrors.twitter_card }"
                                    >
                                        <option value="summary">Summary</option>
                                        <option value="summary_large_image">Summary Large Image</option>
                                        <option value="app">App</option>
                                        <option value="player">Player</option>
                                    </select>
                                    <p v-if="seoErrors.twitter_card" class="mt-1 text-sm text-red-600">{{ seoErrors.twitter_card }}</p>
                                </div>

                                <div>
                                    <label for="twitter_title" class="block text-sm font-medium text-gray-700 mb-2">
                                        Twitter Title
                                    </label>
                                    <input
                                        type="text"
                                        id="twitter_title"
                                        v-model="seoForm.twitter_title"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                        placeholder="Leave empty to use OG title"
                                        :class="{ 'border-red-500': seoErrors.twitter_title }"
                                    />
                                    <p v-if="seoErrors.twitter_title" class="mt-1 text-sm text-red-600">{{ seoErrors.twitter_title }}</p>
                                </div>

                                <div class="lg:col-span-2">
                                    <label for="twitter_description" class="block text-sm font-medium text-gray-700 mb-2">
                                        Twitter Description
                                    </label>
                                    <textarea
                                        id="twitter_description"
                                        v-model="seoForm.twitter_description"
                                        rows="2"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"
                                        placeholder="Leave empty to use OG description"
                                        :class="{ 'border-red-500': seoErrors.twitter_description }"
                                    ></textarea>
                                    <p v-if="seoErrors.twitter_description" class="mt-1 text-sm text-red-600">{{ seoErrors.twitter_description }}</p>
                                </div>
                            </div>

                            <!-- Twitter Image Upload -->
                            <div class="mt-6">
                                <label class="block text-sm font-medium text-gray-700 mb-2">
                                    Twitter Image
                                </label>
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <!-- Upload Area -->
                                    <div>
                                        <div class="border-2 border-dashed border-gray-300 rounded-lg p-4">
                                            <div class="text-center">
                                                <svg class="mx-auto h-8 w-8 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <div class="mt-2">
                                                    <label for="twitter_image" class="cursor-pointer">
                                                        <span class="text-sm font-medium text-gray-900">
                                                            Upload Twitter Image
                                                        </span>
                                                        <input
                                                            id="twitter_image"
                                                            type="file"
                                                            accept="image/*"
                                                            @change="handleSeoImageUpload($event, 'twitter_image')"
                                                            class="sr-only"
                                                        />
                                                    </label>
                                                </div>
                                                <p class="text-xs text-gray-500">Recommended: 1200x675px</p>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Preview -->
                                    <div>
                                        <div class="aspect-[1200/675] bg-gray-100 rounded-lg overflow-hidden">
                                            <div v-if="twitterImagePreview || seoSettings?.twitter_image_url" class="w-full h-full relative group">
                                                <img
                                                    :src="twitterImagePreview || seoSettings?.twitter_image_url"
                                                    alt="Twitter image preview"
                                                    class="w-full h-full object-cover"
                                                />
                                                <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                                    <button
                                                        @click="deleteSeoImage('twitter_image')"
                                                        class="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                            <div v-else class="w-full h-full flex items-center justify-center">
                                                <p class="text-sm text-gray-500">No Twitter image</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Custom Head Tags -->
                        <div class="border-t border-gray-200 pt-6">
                            <div>
                                <label for="custom_head_tags" class="block text-sm font-medium text-gray-700 mb-2">
                                    Custom Head Tags
                                </label>
                                <textarea
                                    id="custom_head_tags"
                                    v-model="seoForm.custom_head_tags"
                                    rows="4"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none font-mono text-sm"
                                    placeholder="Enter custom meta tags, schema markup, or other head elements"
                                    :class="{ 'border-red-500': seoErrors.custom_head_tags }"
                                ></textarea>
                                <p v-if="seoErrors.custom_head_tags" class="mt-1 text-sm text-red-600">{{ seoErrors.custom_head_tags }}</p>
                                <p class="mt-1 text-xs text-gray-500">Add custom HTML tags that will be inserted in the &lt;head&gt; section</p>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div class="pt-6 border-t border-gray-200">
                            <button
                                type="submit"
                                :disabled="seoForm.processing"
                                class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                            >
                                <svg v-if="seoForm.processing" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {{ seoForm.processing ? 'Updating...' : 'Update SEO Settings' }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- Hero Section Card -->
        <div id="hero-section" class="bg-white rounded-lg shadow-sm border border-gray-200">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Hero Section</h2>
                <p class="text-sm text-gray-600 mt-1">Customize the main banner section of your homepage</p>
            </div>

            <div class="p-6">
                <form @submit.prevent="updateHeroSection">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <!-- Left Column - Form -->
                        <div class="space-y-6">
                            <!-- Heading -->
                            <div>
                                <label for="heading" class="block text-sm font-medium text-gray-700 mb-2">
                                    Heading
                                </label>
                                <input
                                    type="text"
                                    id="heading"
                                    v-model="form.heading"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="Enter hero heading"
                                    :class="{ 'border-red-500': errors.heading }"
                                />
                                <p v-if="errors.heading" class="mt-1 text-sm text-red-600">{{ errors.heading }}</p>
                            </div>

                            <!-- Paragraph -->
                            <div>
                                <label for="paragraph" class="block text-sm font-medium text-gray-700 mb-2">
                                    Description
                                </label>
                                <textarea
                                    id="paragraph"
                                    v-model="form.paragraph"
                                    rows="4"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"
                                    placeholder="Enter hero description"
                                    :class="{ 'border-red-500': errors.paragraph }"
                                ></textarea>
                                <p v-if="errors.paragraph" class="mt-1 text-sm text-red-600">{{ errors.paragraph }}</p>
                            </div>

                            <!-- CTA Button Text -->
                            <div>
                                <label for="cta_text" class="block text-sm font-medium text-gray-700 mb-2">
                                    Button Text
                                </label>
                                <input
                                    type="text"
                                    id="cta_text"
                                    v-model="form.cta_text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="Enter button text"
                                    :class="{ 'border-red-500': errors.cta_text }"
                                />
                                <p v-if="errors.cta_text" class="mt-1 text-sm text-red-600">{{ errors.cta_text }}</p>
                            </div>

                            <!-- CTA Link -->
                            <div>
                                <label for="cta_link" class="block text-sm font-medium text-gray-700 mb-2">
                                    Button Link
                                </label>
                                <input
                                    type="text"
                                    id="cta_link"
                                    v-model="form.cta_link"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="Enter button link (e.g., #contact, /services)"
                                    :class="{ 'border-red-500': errors.cta_link }"
                                />
                                <p v-if="errors.cta_link" class="mt-1 text-sm text-red-600">{{ errors.cta_link }}</p>
                            </div>

                            <!-- Active Status -->
                            <div>
                                <label class="flex items-center">
                                    <input
                                        type="checkbox"
                                        v-model="form.is_active"
                                        class="rounded border-gray-300 text-brand-red focus:ring-brand-red"
                                    />
                                    <span class="ml-2 text-sm text-gray-700">Active</span>
                                </label>
                            </div>

                            <!-- Submit Button -->
                            <div class="pt-4">
                                <button
                                    type="submit"
                                    :disabled="form.processing"
                                    class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                                >
                                    <svg v-if="form.processing" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    {{ form.processing ? 'Updating...' : 'Update Hero Section' }}
                                </button>
                            </div>
                        </div>

                        <!-- Right Column - Background Image -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Background Image
                            </label>

                            <!-- Current Image Preview -->
                            <div v-if="heroSection?.background_image || imagePreview" class="mb-4">
                                <div class="relative">
                                    <img
                                        :src="imagePreview || `/storage/${heroSection.background_image}`"
                                        alt="Hero background"
                                        class="w-full h-48 object-cover rounded-lg border border-gray-200"
                                    />
                                    <button
                                        @click="deleteImage"
                                        type="button"
                                        class="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                                        title="Delete image"
                                    >
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <!-- Image Upload -->
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-6">
                                <div class="text-center">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="mt-4">
                                        <label for="hero_image" class="cursor-pointer">
                                            <span class="mt-2 block text-sm font-medium text-gray-900">
                                                Click to upload a new image
                                            </span>
                                            <span class="mt-1 block text-xs text-gray-500">
                                                PNG, JPG, GIF up to 2MB
                                            </span>
                                        </label>
                                        <input
                                            id="hero_image"
                                            type="file"
                                            accept="image/*"
                                            @change="handleImageUpload"
                                            class="sr-only"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- Partner Badge Section Card -->
        <div id="partner-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Partner Badge Section</h2>
                <p class="text-sm text-gray-600 mt-1">Customize the partner badge that appears below the hero section</p>
            </div>

            <div class="p-6">
                <form @submit.prevent="updatePartnerBadge">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <!-- Left Column - Form -->
                        <div class="space-y-6">
                            <!-- Text -->
                            <div>
                                <label for="partner_text" class="block text-sm font-medium text-gray-700 mb-2">
                                    Partner Text
                                </label>
                                <input
                                    type="text"
                                    id="partner_text"
                                    v-model="partnerForm.text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="Enter partner text"
                                    :class="{ 'border-red-500': partnerErrors.text }"
                                />
                                <p v-if="partnerErrors.text" class="mt-1 text-sm text-red-600">{{ partnerErrors.text }}</p>
                            </div>

                            <!-- Logo Alt Text -->
                            <div>
                                <label for="logo_alt" class="block text-sm font-medium text-gray-700 mb-2">
                                    Logo Alt Text
                                </label>
                                <input
                                    type="text"
                                    id="logo_alt"
                                    v-model="partnerForm.logo_alt"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    placeholder="Enter logo alt text (for accessibility)"
                                    :class="{ 'border-red-500': partnerErrors.logo_alt }"
                                />
                                <p v-if="partnerErrors.logo_alt" class="mt-1 text-sm text-red-600">{{ partnerErrors.logo_alt }}</p>
                            </div>

                            <!-- Active Status -->
                            <div>
                                <label class="flex items-center">
                                    <input
                                        type="checkbox"
                                        v-model="partnerForm.is_active"
                                        class="rounded border-gray-300 text-brand-red focus:ring-brand-red"
                                    />
                                    <span class="ml-2 text-sm text-gray-700">Active</span>
                                </label>
                            </div>

                            <!-- Submit Button -->
                            <div class="pt-4">
                                <button
                                    type="submit"
                                    :disabled="partnerForm.processing"
                                    class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                                >
                                    <svg v-if="partnerForm.processing" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    {{ partnerForm.processing ? 'Updating...' : 'Update Partner Badge' }}
                                </button>
                            </div>
                        </div>

                        <!-- Right Column - Logo Image -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Partner Logo
                            </label>

                            <!-- Current Logo Preview -->
                            <div v-if="partnerBadge?.logo_image || partnerLogoPreview" class="mb-4">
                                <div class="relative">
                                    <img
                                        :src="partnerLogoPreview || `/storage/${partnerBadge.logo_image}`"
                                        :alt="partnerBadge?.logo_alt || 'Partner Logo'"
                                        class="w-full max-w-xs h-24 object-contain rounded-lg border border-gray-200 bg-gray-50 p-4"
                                    />
                                    <button
                                        @click="deletePartnerLogo"
                                        type="button"
                                        class="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                                        title="Delete logo"
                                    >
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <!-- Logo Upload -->
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-6">
                                <div class="text-center">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="mt-4">
                                        <label for="partner_logo" class="cursor-pointer">
                                            <span class="mt-2 block text-sm font-medium text-gray-900">
                                                Click to upload a new logo
                                            </span>
                                            <span class="mt-1 block text-xs text-gray-500">
                                                PNG, JPG, SVG up to 2MB
                                            </span>
                                        </label>
                                        <input
                                            id="partner_logo"
                                            type="file"
                                            accept="image/*"
                                            @change="handlePartnerLogoUpload"
                                            class="sr-only"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- What We Do Section Card -->
        <div id="what-we-do-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">What We Do Section</h2>
                <p class="text-sm text-gray-600 mt-1">Manage the heading, description, and service containers</p>
            </div>

            <div class="p-6">
                <!-- Section Info Form -->
                <form @submit.prevent="updateWhatWeDo" class="mb-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <!-- Label -->
                        <div>
                            <label for="what_we_do_label" class="block text-sm font-medium text-gray-700 mb-2">
                                Section Label
                            </label>
                            <input
                                type="text"
                                id="what_we_do_label"
                                v-model="whatWeDoForm.label"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                placeholder="Enter section label"
                                :class="{ 'border-red-500': whatWeDoErrors.label }"
                            />
                            <p v-if="whatWeDoErrors.label" class="mt-1 text-sm text-red-600">{{ whatWeDoErrors.label }}</p>
                        </div>

                        <!-- Active Status -->
                        <div class="flex items-center">
                            <label class="flex items-center">
                                <input
                                    type="checkbox"
                                    v-model="whatWeDoForm.is_active"
                                    class="rounded border-gray-300 text-brand-red focus:ring-brand-red"
                                />
                                <span class="ml-2 text-sm text-gray-700">Active</span>
                            </label>
                        </div>

                        <!-- Heading -->
                        <div class="lg:col-span-2">
                            <label for="what_we_do_heading" class="block text-sm font-medium text-gray-700 mb-2">
                                Main Heading
                            </label>
                            <input
                                type="text"
                                id="what_we_do_heading"
                                v-model="whatWeDoForm.heading"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                placeholder="Enter main heading"
                                :class="{ 'border-red-500': whatWeDoErrors.heading }"
                            />
                            <p v-if="whatWeDoErrors.heading" class="mt-1 text-sm text-red-600">{{ whatWeDoErrors.heading }}</p>
                        </div>

                        <!-- Description -->
                        <div class="lg:col-span-2">
                            <label for="what_we_do_description" class="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                id="what_we_do_description"
                                v-model="whatWeDoForm.description"
                                rows="3"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"
                                placeholder="Enter section description"
                                :class="{ 'border-red-500': whatWeDoErrors.description }"
                            ></textarea>
                            <p v-if="whatWeDoErrors.description" class="mt-1 text-sm text-red-600">{{ whatWeDoErrors.description }}</p>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="mt-6">
                        <button
                            type="submit"
                            :disabled="whatWeDoForm.processing"
                            class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                        >
                            <svg v-if="whatWeDoForm.processing" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {{ whatWeDoForm.processing ? 'Updating...' : 'Update Section Info' }}
                        </button>
                    </div>
                </form>

                <!-- Service Items Management -->
                <div class="border-t border-gray-200 pt-8">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-lg font-medium text-gray-900">Service Containers</h3>
                        <button
                            @click="showAddItemModal = true"
                            type="button"
                            class="inline-flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 focus:bg-green-700 active:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        >
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                            </svg>
                            Add Container
                        </button>
                    </div>

                    <!-- Existing Items -->
                    <div v-if="whatWeDoSection?.items?.length" class="space-y-4">
                        <div
                            v-for="item in whatWeDoSection.items"
                            :key="item.id"
                            class="border border-gray-200 rounded-lg p-4 bg-gray-50"
                        >
                            <div class="flex justify-between items-start">
                                <div class="flex-1">
                                    <div class="flex items-center space-x-4 mb-2">
                                        <span class="text-sm font-medium text-gray-500">Order: {{ item.sort_order }}</span>
                                        <span class="text-sm font-medium" :class="item.is_active ? 'text-green-600' : 'text-red-600'">
                                            {{ item.is_active ? 'Active' : 'Inactive' }}
                                        </span>
                                    </div>
                                    <h4 class="text-lg font-medium text-gray-900 mb-2">{{ item.title }}</h4>
                                    <p class="text-gray-600 mb-3">{{ item.description }}</p>
                                    <div class="bg-white p-2 rounded border inline-block">
                                        <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center" v-html="item.icon_svg"></div>
                                    </div>
                                </div>
                                <div class="flex space-x-2 ml-4">
                                    <button
                                        @click="editItem(item)"
                                        class="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        @click="deleteItem(item.id)"
                                        class="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-else class="text-center py-8 text-gray-500">
                        No service containers added yet. Click "Add Container" to get started.
                    </div>
                </div>
            </div>
        </div>

        <!-- Add/Edit Item Modal -->
        <div v-if="showAddItemModal || showEditItemModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div class="px-6 py-4 border-b border-gray-200">
                    <h3 class="text-lg font-semibold text-gray-900">
                        {{ showEditItemModal ? 'Edit Service Container' : 'Add Service Container' }}
                    </h3>
                </div>

                <form @submit.prevent="showEditItemModal ? updateItem() : addItem()" class="p-6">
                    <div class="space-y-6">
                        <!-- Title -->
                        <div>
                            <label for="item_title" class="block text-sm font-medium text-gray-700 mb-2">
                                Title
                            </label>
                            <input
                                type="text"
                                id="item_title"
                                v-model="itemForm.title"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                placeholder="Enter container title"
                                :class="{ 'border-red-500': itemErrors.title }"
                            />
                            <p v-if="itemErrors.title" class="mt-1 text-sm text-red-600">{{ itemErrors.title }}</p>
                        </div>

                        <!-- Description -->
                        <div>
                            <label for="item_description" class="block text-sm font-medium text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                id="item_description"
                                v-model="itemForm.description"
                                rows="3"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"
                                placeholder="Enter container description"
                                :class="{ 'border-red-500': itemErrors.description }"
                            ></textarea>
                            <p v-if="itemErrors.description" class="mt-1 text-sm text-red-600">{{ itemErrors.description }}</p>
                        </div>

                        <!-- Icon SVG -->
                        <div>
                            <label for="item_icon_svg" class="block text-sm font-medium text-gray-700 mb-2">
                                Icon SVG Code
                            </label>
                            <textarea
                                id="item_icon_svg"
                                v-model="itemForm.icon_svg"
                                rows="4"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none font-mono text-xs"
                                placeholder="Enter SVG code for the icon"
                                :class="{ 'border-red-500': itemErrors.icon_svg }"
                            ></textarea>
                            <p v-if="itemErrors.icon_svg" class="mt-1 text-sm text-red-600">{{ itemErrors.icon_svg }}</p>
                            <p class="mt-1 text-xs text-gray-500">Paste the complete SVG code including &lt;svg&gt; tags</p>
                        </div>

                        <!-- Icon Preview -->
                        <div v-if="itemForm.icon_svg">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Icon Preview</label>
                            <div class="bg-gray-100 p-4 rounded-lg">
                                <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto" v-html="itemForm.icon_svg"></div>
                            </div>
                        </div>

                        <!-- Sort Order & Active Status -->
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="item_sort_order" class="block text-sm font-medium text-gray-700 mb-2">
                                    Sort Order
                                </label>
                                <input
                                    type="number"
                                    id="item_sort_order"
                                    v-model="itemForm.sort_order"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    min="1"
                                />
                            </div>
                            <div class="flex items-end">
                                <label class="flex items-center">
                                    <input
                                        type="checkbox"
                                        v-model="itemForm.is_active"
                                        class="rounded border-gray-300 text-brand-red focus:ring-brand-red"
                                    />
                                    <span class="ml-2 text-sm text-gray-700">Active</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Modal Buttons -->
                    <div class="flex justify-end space-x-3 mt-8">
                        <button
                            type="button"
                            @click="closeItemModal"
                            class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            :disabled="itemForm.processing"
                            class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                        >
                            {{ itemForm.processing ? 'Saving...' : (showEditItemModal ? 'Update Container' : 'Add Container') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Outcomes Section Card -->
        <div id="outcomes-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Outcomes Section</h2>
                <p class="text-sm text-gray-600 mt-1">Manage the outcomes you can expect section content</p>
            </div>

            <div class="p-6">
                <form @submit.prevent="updateOutcomes" class="mb-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <!-- Label -->
                        <div>
                            <label for="outcomes_label" class="block text-sm font-medium text-gray-700 mb-2">
                                Section Label
                            </label>
                            <input
                                type="text"
                                id="outcomes_label"
                                v-model="outcomesForm.label"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                :class="{ 'border-red-500': outcomesErrors.label }"
                            />
                            <p v-if="outcomesErrors.label" class="mt-1 text-sm text-red-600">{{ outcomesErrors.label }}</p>
                        </div>

                        <!-- Active Status -->
                        <div class="flex items-start">
                            <div class="mt-8">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        v-model="outcomesForm.is_active"
                                        class="sr-only peer"
                                    >
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                                    <span class="ml-3 text-sm font-medium text-gray-700">Section Active</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Heading -->
                    <div class="mt-6">
                        <label for="outcomes_heading" class="block text-sm font-medium text-gray-700 mb-2">
                            Section Heading
                        </label>
                        <input
                            type="text"
                            id="outcomes_heading"
                            v-model="outcomesForm.heading"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                            :class="{ 'border-red-500': outcomesErrors.heading }"
                        />
                        <p v-if="outcomesErrors.heading" class="mt-1 text-sm text-red-600">{{ outcomesErrors.heading }}</p>
                    </div>

                    <!-- Description -->
                    <div class="mt-6">
                        <label for="outcomes_description" class="block text-sm font-medium text-gray-700 mb-2">
                            Section Description
                        </label>
                        <textarea
                            id="outcomes_description"
                            v-model="outcomesForm.description"
                            rows="3"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"
                            :class="{ 'border-red-500': outcomesErrors.description }"
                        ></textarea>
                        <p v-if="outcomesErrors.description" class="mt-1 text-sm text-red-600">{{ outcomesErrors.description }}</p>
                    </div>

                    <!-- Submit Button -->
                    <div class="mt-6">
                        <button
                            type="submit"
                            :disabled="outcomesForm.processing"
                            class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                        >
                            <svg v-if="outcomesForm.processing" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {{ outcomesForm.processing ? 'Updating...' : 'Update Section Info' }}
                        </button>
                    </div>
                </form>

                <!-- Outcomes Items Management -->
                <div class="border-t border-gray-200 pt-8">
                    <div class="flex justify-between items-center mb-6">
                        <div>
                            <h3 class="text-lg font-medium text-gray-900">Outcome Items</h3>
                            <p class="text-sm text-gray-600 mt-1">Manage individual outcome cards</p>
                        </div>
                        <button
                            @click="showAddOutcomeModal"
                            class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 transition ease-in-out duration-150"
                        >
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            Add Outcome Item
                        </button>
                    </div>

                    <!-- Outcomes Items List -->
                    <div v-if="outcomesSection?.items?.length" class="space-y-4">
                        <div
                            v-for="item in outcomesSection.items"
                            :key="item.id"
                            class="bg-gray-50 border border-gray-200 rounded-lg p-4"
                        >
                            <div class="flex items-start justify-between">
                                <div class="flex items-start space-x-4 flex-1">
                                    <!-- Icon Preview -->
                                    <div class="flex-shrink-0">
                                        <div class="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                                            <div v-html="item.icon_svg" class="w-6 h-6 text-white"></div>
                                        </div>
                                    </div>

                                    <!-- Content -->
                                    <div class="flex-1 min-w-0">
                                        <h4 class="text-sm font-medium text-gray-900 mb-1">{{ item.title }}</h4>
                                        <p class="text-sm text-gray-600 mb-2">{{ item.description }}</p>
                                        <div class="flex items-center space-x-4 text-xs text-gray-500">
                                            <span>Sort Order: {{ item.sort_order }}</span>
                                            <span :class="item.is_active ? 'text-green-600' : 'text-red-600'">
                                                {{ item.is_active ? 'Active' : 'Inactive' }}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Actions -->
                                <div class="flex items-center space-x-2 ml-4">
                                    <button
                                        @click="editOutcomeItem(item)"
                                        class="text-blue-600 hover:text-blue-900 text-sm"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        @click="deleteOutcomeItem(item.id)"
                                        class="text-red-600 hover:text-red-900 text-sm"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- No Items Message -->
                    <div v-else class="text-center py-8">
                        <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                        <h3 class="text-sm font-medium text-gray-900 mb-1">No outcome items</h3>
                        <p class="text-sm text-gray-600">Get started by adding your first outcome item.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add/Edit Outcome Item Modal -->
        <div v-if="showAddOutcomeItemModal || showEditOutcomeItemModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
                <div class="mt-3">
                    <!-- Modal Header -->
                    <div class="flex items-center justify-between pb-4 border-b border-gray-200">
                        <h3 class="text-lg font-medium text-gray-900">
                            {{ showEditOutcomeItemModal ? 'Edit Outcome Item' : 'Add New Outcome Item' }}
                        </h3>
                        <button @click="closeOutcomeModal" class="text-gray-400 hover:text-gray-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <!-- Modal Body -->
                    <form @submit.prevent="submitOutcomeItem" class="mt-6 space-y-6">
                        <!-- Title -->
                        <div>
                            <label for="outcome_title" class="block text-sm font-medium text-gray-700 mb-2">
                                Title <span class="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="outcome_title"
                                v-model="outcomeItemForm.title"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                :class="{ 'border-red-500': outcomeItemErrors.title }"
                            />
                            <p v-if="outcomeItemErrors.title" class="mt-1 text-sm text-red-600">{{ outcomeItemErrors.title }}</p>
                        </div>

                        <!-- Description -->
                        <div>
                            <label for="outcome_description" class="block text-sm font-medium text-gray-700 mb-2">
                                Description <span class="text-red-500">*</span>
                            </label>
                            <textarea
                                id="outcome_description"
                                v-model="outcomeItemForm.description"
                                rows="3"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"
                                :class="{ 'border-red-500': outcomeItemErrors.description }"
                            ></textarea>
                            <p v-if="outcomeItemErrors.description" class="mt-1 text-sm text-red-600">{{ outcomeItemErrors.description }}</p>
                        </div>

                        <!-- Icon SVG -->
                        <div>
                            <label for="outcome_icon_svg" class="block text-sm font-medium text-gray-700 mb-2">
                                Icon SVG <span class="text-red-500">*</span>
                            </label>
                            <textarea
                                id="outcome_icon_svg"
                                v-model="outcomeItemForm.icon_svg"
                                rows="6"
                                placeholder="Paste your SVG code here..."
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none font-mono text-sm"
                                :class="{ 'border-red-500': outcomeItemErrors.icon_svg }"
                            ></textarea>
                            <p v-if="outcomeItemErrors.icon_svg" class="mt-1 text-sm text-red-600">{{ outcomeItemErrors.icon_svg }}</p>
                            <p class="mt-1 text-xs text-gray-500">Paste the complete SVG code including the opening and closing tags.</p>
                        </div>

                        <!-- Icon Preview -->
                        <div v-if="outcomeItemForm.icon_svg" class="flex items-center space-x-4">
                            <span class="text-sm font-medium text-gray-700">Preview:</span>
                            <div class="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                                <div v-html="outcomeItemForm.icon_svg" class="w-6 h-6 text-white"></div>
                            </div>
                        </div>

                        <!-- Sort Order and Active Status -->
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label for="outcome_sort_order" class="block text-sm font-medium text-gray-700 mb-2">
                                    Sort Order
                                </label>
                                <input
                                    type="number"
                                    id="outcome_sort_order"
                                    v-model="outcomeItemForm.sort_order"
                                    min="1"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                    :class="{ 'border-red-500': outcomeItemErrors.sort_order }"
                                />
                                <p v-if="outcomeItemErrors.sort_order" class="mt-1 text-sm text-red-600">{{ outcomeItemErrors.sort_order }}</p>
                            </div>

                            <div class="flex items-center">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        v-model="outcomeItemForm.is_active"
                                        class="sr-only peer"
                                    >
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                                    <span class="ml-3 text-sm font-medium text-gray-700">Active</span>
                                </label>
                            </div>
                        </div>

                        <!-- Modal Footer -->
                        <div class="flex items-center justify-end pt-6 border-t border-gray-200 space-x-3">
                            <button
                                type="button"
                                @click="closeOutcomeModal"
                                class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                :disabled="outcomeItemForm.processing"
                                class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                            >
                                {{ outcomeItemForm.processing ? 'Saving...' : (showEditOutcomeItemModal ? 'Update Outcome' : 'Add Outcome') }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Our Approach Section Card -->
        <div id="our-approach-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Our Approach Section</h2>
                <p class="text-sm text-gray-600 mt-1">Manage the our approach section content and image</p>
            </div>

            <div class="p-6">
                <form @submit.prevent="updateOurApproach" class="mb-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <!-- Label -->
                        <div>
                            <label for="approach_label" class="block text-sm font-medium text-gray-700 mb-2">
                                Section Label
                            </label>
                            <input
                                type="text"
                                id="approach_label"
                                v-model="ourApproachForm.label"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                                :class="{ 'border-red-500': ourApproachErrors.label }"
                            />
                            <p v-if="ourApproachErrors.label" class="mt-1 text-sm text-red-600">{{ ourApproachErrors.label }}</p>
                        </div>

                        <!-- Active Status -->
                        <div class="flex items-start">
                            <div class="mt-8">
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        v-model="ourApproachForm.is_active"
                                        class="sr-only peer"
                                    >
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                                    <span class="ml-3 text-sm font-medium text-gray-700">Section Active</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Heading -->
                    <div class="mt-6">
                        <label for="approach_heading" class="block text-sm font-medium text-gray-700 mb-2">
                            Section Heading
                        </label>
                        <input
                            type="text"
                            id="approach_heading"
                            v-model="ourApproachForm.heading"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                            :class="{ 'border-red-500': ourApproachErrors.heading }"
                        />
                        <p v-if="ourApproachErrors.heading" class="mt-1 text-sm text-red-600">{{ ourApproachErrors.heading }}</p>
                    </div>

                    <!-- Description -->
                    <div class="mt-6">
                        <label for="approach_description" class="block text-sm font-medium text-gray-700 mb-2">
                            Section Description
                        </label>
                        <textarea
                            id="approach_description"
                            v-model="ourApproachForm.description"
                            rows="3"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"
                            :class="{ 'border-red-500': ourApproachErrors.description }"
                        ></textarea>
                        <p v-if="ourApproachErrors.description" class="mt-1 text-sm text-red-600">{{ ourApproachErrors.description }}</p>
                    </div>

                    <!-- Image Alt Text -->
                    <div class="mt-6">
                        <label for="approach_image_alt" class="block text-sm font-medium text-gray-700 mb-2">
                            Image Alt Text
                        </label>
                        <input
                            type="text"
                            id="approach_image_alt"
                            v-model="ourApproachForm.image_alt"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"
                            :class="{ 'border-red-500': ourApproachErrors.image_alt }"
                            placeholder="e.g., Our 3-Step Approach Diagram"
                        />
                        <p v-if="ourApproachErrors.image_alt" class="mt-1 text-sm text-red-600">{{ ourApproachErrors.image_alt }}</p>
                        <p class="mt-1 text-xs text-gray-500">This text will be used for accessibility and SEO</p>
                    </div>

                    <!-- Submit Button -->
                    <div class="mt-6">
                        <button
                            type="submit"
                            :disabled="ourApproachForm.processing"
                            class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                        >
                            <svg v-if="ourApproachForm.processing" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {{ ourApproachForm.processing ? 'Updating...' : 'Update Section Info' }}
                        </button>
                    </div>
                </form>

                <!-- Image Management -->
                <div class="border-t border-gray-200 pt-8">
                    <div class="flex justify-between items-center mb-6">
                        <div>
                            <h3 class="text-lg font-medium text-gray-900">Section Image</h3>
                            <p class="text-sm text-gray-600 mt-1">Upload an image for the approach section</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <!-- Left Column - Upload -->
                        <div>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-6">
                                <div class="text-center">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="mt-4">
                                        <label for="approach-image-upload" class="cursor-pointer">
                                            <span class="mt-2 block text-sm font-medium text-gray-900">
                                                Upload a new approach image
                                            </span>
                                            <input id="approach-image-upload" name="approach-image-upload" type="file" class="sr-only" accept="image/*" @change="handleApproachImageUpload" />
                                        </label>
                                    </div>
                                    <p class="mt-2 text-xs text-gray-500">PNG, JPG, GIF, SVG up to 2MB</p>
                                </div>
                            </div>
                        </div>

                        <!-- Right Column - Preview -->
                        <div>
                            <div class="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                                <!-- Current Image or Preview -->
                                <div v-if="approachImagePreview || ourApproachSection?.image_url" class="w-full h-full relative group">
                                    <img
                                        :src="approachImagePreview || ourApproachSection?.image_url"
                                        :alt="ourApproachSection?.image_alt || 'Approach section preview'"
                                        class="w-full h-full object-contain"
                                    />
                                    <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                        <button
                                            @click="deleteApproachImage"
                                            class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
                                        >
                                            Delete Image
                                        </button>
                                    </div>
                                </div>

                                <!-- Placeholder -->
                                <div v-else class="text-center">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    <p class="mt-2 text-sm text-gray-500">No image uploaded</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Core Services Section Card -->
        <div id="core-services-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
            <div class="px-6 py-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">Core Services Section</h2>
                <p class="text-sm text-gray-600 mt-1">Manage the core services section content and service cards</p>
            </div>

            <div class="p-6">
                <!-- Section Info Form -->
                <form @submit.prevent="updateCoreServices" class="mb-8">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <label for="core_services_label" class="block text-sm font-medium text-gray-700 mb-2">
                                Section Label
                            </label>
                            <input
                                type="text"
                                id="core_services_label"
                                v-model="coreServicesForm.label"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                :class="{ 'border-red-500': coreServicesErrors.label }"
                                placeholder="e.g., Core Services"
                            />
                            <p v-if="coreServicesErrors.label" class="mt-1 text-sm text-red-600">{{ coreServicesErrors.label }}</p>
                        </div>

                        <div class="flex items-center">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    v-model="coreServicesForm.is_active"
                                    class="sr-only peer"
                                />
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                                <span class="ml-3 text-sm font-medium text-gray-700">Section Active</span>
                            </label>
                        </div>
                    </div>

                    <div class="mt-6">
                        <label for="core_services_heading" class="block text-sm font-medium text-gray-700 mb-2">
                            Section Heading
                        </label>
                        <input
                            type="text"
                            id="core_services_heading"
                            v-model="coreServicesForm.heading"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            :class="{ 'border-red-500': coreServicesErrors.heading }"
                            placeholder="e.g., Databricks Services We Deliver"
                        />
                        <p v-if="coreServicesErrors.heading" class="mt-1 text-sm text-red-600">{{ coreServicesErrors.heading }}</p>
                    </div>

                    <div class="mt-6">
                        <label for="core_services_description" class="block text-sm font-medium text-gray-700 mb-2">
                            Section Description
                        </label>
                        <textarea
                            id="core_services_description"
                            v-model="coreServicesForm.description"
                            rows="3"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            :class="{ 'border-red-500': coreServicesErrors.description }"
                            placeholder="Enter section description"
                        ></textarea>
                        <p v-if="coreServicesErrors.description" class="mt-1 text-sm text-red-600">{{ coreServicesErrors.description }}</p>
                    </div>

                    <div class="mt-6">
                        <button
                            type="submit"
                            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
                            :disabled="coreServicesForm.processing"
                        >
                            <svg v-if="coreServicesForm.processing" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {{ coreServicesForm.processing ? 'Updating...' : 'Update Section Info' }}
                        </button>
                    </div>
                </form>

                <!-- Service Cards Management -->
                <div class="border-t border-gray-200 pt-6">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-lg font-medium text-gray-900">Service Cards</h3>
                        <button
                            @click="showAddServiceModal = true"
                            class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center text-sm"
                        >
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            Add Service Card
                        </button>
                    </div>

                    <!-- Service Cards List -->
                    <div v-if="coreServicesSection?.services?.length" class="space-y-4">
                        <div
                            v-for="service in coreServicesSection.services"
                            :key="service.id"
                            class="bg-gray-50 rounded-lg p-6 border border-gray-200"
                        >
                            <div class="flex items-start justify-between">
                                <div class="flex-1">
                                    <h4 class="font-medium text-gray-900 mb-2">{{ service.title }}</h4>
                                    <p class="text-sm text-gray-600 mb-3">{{ service.description || 'No description' }}</p>

                                    <!-- Tags Display -->
                                    <div v-if="service.tags?.length" class="flex flex-wrap gap-2 mb-3">
                                        <span
                                            v-for="tag in service.tags"
                                            :key="tag"
                                            class="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                                        >
                                            {{ tag }}
                                        </span>
                                    </div>

                                    <div class="flex items-center space-x-4 text-xs text-gray-500">
                                        <span>Status: {{ service.is_active ? 'Active' : 'Inactive' }}</span>
                                        <span>Order: {{ service.sort_order }}</span>
                                        <span v-if="service.link_url">Link: {{ service.link_url }}</span>
                                    </div>
                                </div>

                                <div class="flex items-center space-x-2 ml-4">
                                    <button
                                        @click="editService(service)"
                                        class="text-blue-600 hover:text-blue-800 p-2"
                                        title="Edit Service"
                                    >
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                        </svg>
                                    </button>
                                    <button
                                        @click="deleteService(service.id)"
                                        class="text-red-600 hover:text-red-800 p-2"
                                        title="Delete Service"
                                    >
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Empty State -->
                    <div v-else class="text-center py-12">
                        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                        <h3 class="mt-2 text-sm font-medium text-gray-900">No service cards</h3>
                        <p class="mt-1 text-sm text-gray-500">Get started by creating your first service card.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add/Edit Service Modal -->
        <div v-if="showAddServiceModal || showEditServiceModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" @click.self="closeServiceModal">
            <div class="relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-white">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-medium text-gray-900">
                        {{ showEditServiceModal ? 'Edit Service Card' : 'Add Service Card' }}
                    </h3>
                    <button @click="closeServiceModal" class="text-gray-400 hover:text-gray-600">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <form @submit.prevent="submitServiceForm" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="service_title" class="block text-sm font-medium text-gray-700 mb-2">
                                Service Title *
                            </label>
                            <input
                                type="text"
                                id="service_title"
                                v-model="serviceForm.title"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                :class="{ 'border-red-500': serviceErrors.title }"
                                placeholder="Enter service title"
                                required
                            />
                            <p v-if="serviceErrors.title" class="mt-1 text-sm text-red-600">{{ serviceErrors.title }}</p>
                        </div>

                        <div>
                            <label for="service_link" class="block text-sm font-medium text-gray-700 mb-2">
                                Link URL
                            </label>
                            <input
                                type="text"
                                id="service_link"
                                v-model="serviceForm.link_url"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                :class="{ 'border-red-500': serviceErrors.link_url }"
                                placeholder="e.g., /services/data-engineering"
                            />
                            <p v-if="serviceErrors.link_url" class="mt-1 text-sm text-red-600">{{ serviceErrors.link_url }}</p>
                        </div>
                    </div>

                    <div>
                        <label for="service_description" class="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            id="service_description"
                            v-model="serviceForm.description"
                            rows="3"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            :class="{ 'border-red-500': serviceErrors.description }"
                            placeholder="Enter service description"
                        ></textarea>
                        <p v-if="serviceErrors.description" class="mt-1 text-sm text-red-600">{{ serviceErrors.description }}</p>
                    </div>

                    <div>
                        <label for="service_icon" class="block text-sm font-medium text-gray-700 mb-2">
                            Icon SVG Path *
                        </label>
                        <textarea
                            id="service_icon"
                            v-model="serviceForm.icon_svg"
                            rows="2"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            :class="{ 'border-red-500': serviceErrors.icon_svg }"
                            placeholder="Enter SVG path for the icon (e.g., M19.428 15.428a2 2 0 00-1.022-.547...)"
                            required
                        ></textarea>
                        <p v-if="serviceErrors.icon_svg" class="mt-1 text-sm text-red-600">{{ serviceErrors.icon_svg }}</p>
                        <p class="mt-1 text-xs text-gray-500">Enter the SVG path element for the icon</p>
                    </div>

                    <div>
                        <label for="service_tags" class="block text-sm font-medium text-gray-700 mb-2">
                            Tags (comma-separated)
                        </label>
                        <input
                            type="text"
                            id="service_tags"
                            v-model="serviceTagsInput"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g., Data Pipelines, Data Integration, Migration"
                        />
                        <p class="mt-1 text-xs text-gray-500">Separate multiple tags with commas</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="service_sort_order" class="block text-sm font-medium text-gray-700 mb-2">
                                Sort Order
                            </label>
                            <input
                                type="number"
                                id="service_sort_order"
                                v-model="serviceForm.sort_order"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                :class="{ 'border-red-500': serviceErrors.sort_order }"
                                placeholder="1"
                                min="1"
                            />
                            <p v-if="serviceErrors.sort_order" class="mt-1 text-sm text-red-600">{{ serviceErrors.sort_order }}</p>
                        </div>

                        <div class="flex items-center">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    v-model="serviceForm.is_active"
                                    class="sr-only peer"
                                />
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                                <span class="ml-3 text-sm font-medium text-gray-700">Service Active</span>
                            </label>
                        </div>
                    </div>

                    <div class="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
                        <button
                            type="button"
                            @click="closeServiceModal"
                            class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
                            :disabled="serviceForm.processing"
                        >
                            <svg v-if="serviceForm.processing" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {{ serviceForm.processing ? 'Saving...' : (showEditServiceModal ? 'Update Service' : 'Create Service') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Success/Error Messages -->
        <div v-if="$page.props.flash.success" class="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
            {{ $page.props.flash.success }}
        </div>

        <div v-if="$page.props.flash.error" class="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {{ $page.props.flash.error }}
        </div>
    </AdminLayout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Components/Admin/AdminLayout.vue'

// Section Navigation
const activeSection = ref('seo-settings')
const sectionNav = ref(null)

const sections = ref([
    {
        id: 'seo-settings',
        name: 'SEO Settings',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>'
    },
    {
        id: 'hero-section',
        name: 'Hero Section',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>'
    },
    {
        id: 'partner-section',
        name: 'Partner Badge',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
    },
    {
        id: 'what-we-do-section',
        name: 'What We Do',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>'
    },
    {
        id: 'outcomes-section',
        name: 'Outcomes',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>'
    },
    {
        id: 'our-approach-section',
        name: 'Our Approach',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>'
    },
    {
        id: 'core-services-section',
        name: 'Core Services',
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>'
    }
])

// Scroll to section function
const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
        const navHeight = 80 // Height of sticky nav
        const elementPosition = element.offsetTop - navHeight
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        })
        activeSection.value = sectionId
    }
}

// Update active section on scroll
const updateActiveSection = () => {
    const scrollPosition = window.scrollY + 100 // Add offset for sticky nav

    for (const section of sections.value) {
        const element = document.getElementById(section.id)
        if (element && element.offsetTop <= scrollPosition &&
            element.offsetTop + element.offsetHeight > scrollPosition) {
            activeSection.value = section.id
            break
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', updateActiveSection)
})

onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
})

const props = defineProps({
    heroSection: Object,
    partnerBadge: Object,
    whatWeDoSection: Object,
    outcomesSection: Object,
    ourApproachSection: Object,
    coreServicesSection: Object,
    seoSettings: Object
})

const imagePreview = ref(null)
const partnerLogoPreview = ref(null)
const errors = ref({})
const partnerErrors = ref({})
const whatWeDoErrors = ref({})
const itemErrors = ref({})
const outcomesErrors = ref({})
const outcomeItemErrors = ref({})
const ourApproachErrors = ref({})
const approachImagePreview = ref(null)
const seoErrors = ref({})
const ogImagePreview = ref(null)
const twitterImagePreview = ref(null)

// Core Services Modal states
const coreServicesErrors = ref({})
const serviceErrors = ref({})
const showAddServiceModal = ref(false)
const showEditServiceModal = ref(false)
const editingServiceId = ref(null)
const serviceTagsInput = ref('')

// What We Do Modal states
const showAddItemModal = ref(false)
const showEditItemModal = ref(false)
const editingItemId = ref(null)

// Outcomes Modal states
const showAddOutcomeItemModal = ref(false)
const showEditOutcomeItemModal = ref(false)
const editingOutcomeItemId = ref(null)

// Initialize hero form with existing data or defaults
const form = useForm({
    heading: props.heroSection?.heading || 'We Help You Unlock The Value Of Your Data',
    paragraph: props.heroSection?.paragraph || 'We turn raw data into intelligence with Databricks. From data foundations to AI adoption, we deliver secure, scalable systems.',
    cta_text: props.heroSection?.cta_text || 'Schedule Free Consultation',
    cta_link: props.heroSection?.cta_link || '#contact',
    is_active: props.heroSection?.is_active ?? true
})

// Initialize partner form with existing data or defaults
const partnerForm = useForm({
    text: props.partnerBadge?.text || 'An Official Databricks Partner',
    logo_alt: props.partnerBadge?.logo_alt || 'Databricks Logo',
    is_active: props.partnerBadge?.is_active ?? true
})

// Initialize What We Do form with existing data or defaults
const whatWeDoForm = useForm({
    label: props.whatWeDoSection?.label || 'What We Do',
    heading: props.whatWeDoSection?.heading || 'We Simplify Your Databricks Journey End-to-End',
    description: props.whatWeDoSection?.description || 'Wherever you are in your Databricks journey, planning, migrating, or scaling, we help you move faster and with confidence.',
    is_active: props.whatWeDoSection?.is_active ?? true
})

// Initialize Outcomes form with existing data or defaults
const outcomesForm = useForm({
    label: props.outcomesSection?.label || 'Outcomes You Can Expect',
    heading: props.outcomesSection?.heading || 'Real Results You\'ll Achieve With Us',
    description: props.outcomesSection?.description || 'Think outcomes, not overhead. Our expertise ensures Databricks delivers exactly what you need.',
    is_active: props.outcomesSection?.is_active ?? true
})

// Initialize item form for adding/editing items
const itemForm = useForm({
    title: '',
    description: '',
    icon_svg: '',
    sort_order: 1,
    is_active: true
})

// Initialize outcome item form for adding/editing outcome items
const outcomeItemForm = useForm({
    title: '',
    description: '',
    icon_svg: '',
    sort_order: 1,
    is_active: true
})

// Initialize Our Approach form with existing data or defaults
const ourApproachForm = useForm({
    label: props.ourApproachSection?.label || 'Our Approach',
    heading: props.ourApproachSection?.heading || 'How We Make Databricks Work for You',
    description: props.ourApproachSection?.description || 'Our proven 3-step approach ensures Databricks adapts to your business needs, not the other way around.',
    image_alt: props.ourApproachSection?.image_alt || 'Our 3-Step Approach',
    is_active: props.ourApproachSection?.is_active ?? true
})

// Initialize Core Services form with existing data or defaults
const coreServicesForm = useForm({
    label: props.coreServicesSection?.label || 'Core Services',
    heading: props.coreServicesSection?.heading || 'Databricks Services We Deliver',
    description: props.coreServicesSection?.description || 'From data engineering and governance to AI and analytics, we make sure your Databricks investment delivers measurable impact.',
    is_active: props.coreServicesSection?.is_active ?? true
})

// Initialize service form for adding/editing services
const serviceForm = useForm({
    title: '',
    description: '',
    icon_svg: '',
    link_url: '',
    sort_order: 1,
    is_active: true
})

// Initialize SEO form with existing data or defaults
const seoForm = useForm({
    title: props.seoSettings?.title || 'Sinki.ai: Your Databricks Strategy & Innovation Partner',
    description: props.seoSettings?.description || 'At Sinki.ai, we help organizations innovate with Databricks by unifying data, accelerating analytics, and delivering AI-powered business outcomes.',
    keywords: props.seoSettings?.keywords || 'Databricks, Data Analytics, AI Solutions, Business Intelligence, Data Strategy, Data Engineering, Machine Learning, Big Data',
    og_title: props.seoSettings?.og_title || '',
    og_description: props.seoSettings?.og_description || '',
    og_url: props.seoSettings?.og_url || 'https://www.sinki.ai',
    twitter_card: props.seoSettings?.twitter_card || 'summary_large_image',
    twitter_title: props.seoSettings?.twitter_title || '',
    twitter_description: props.seoSettings?.twitter_description || '',
    custom_head_tags: props.seoSettings?.custom_head_tags || '',
    is_active: props.seoSettings?.is_active ?? true
})

const updateHeroSection = () => {
    form.put(route('admin.homepage.hero.update'), {
        preserveScroll: true,
        onError: (formErrors) => {
            errors.value = formErrors
        },
        onSuccess: () => {
            errors.value = {}
        }
    })
}

const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (!file) return

    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
        imagePreview.value = e.target.result
    }
    reader.readAsDataURL(file)

    // Upload image
    const imageForm = useForm({
        image: file
    })

    imageForm.post(route('admin.homepage.hero.image.upload'), {
        preserveScroll: true,
        onSuccess: () => {
            imagePreview.value = null
            // Force page refresh to get updated image
            window.location.reload()
        },
        onError: (formErrors) => {
            errors.value = formErrors
            imagePreview.value = null
        }
    })
}

const deleteImage = () => {
    if (confirm('Are you sure you want to delete this background image?')) {
        const deleteForm = useForm({})
        deleteForm.delete(route('admin.homepage.hero.image.delete'), {
            preserveScroll: true,
            onSuccess: () => {
                // Force page refresh to update image display
                window.location.reload()
            }
        })
    }
}

// Partner Badge Functions
const updatePartnerBadge = () => {
    partnerForm.put(route('admin.homepage.partner-badge.update'), {
        preserveScroll: true,
        onError: (formErrors) => {
            partnerErrors.value = formErrors
        },
        onSuccess: () => {
            partnerErrors.value = {}
        }
    })
}

const handlePartnerLogoUpload = (event) => {
    const file = event.target.files[0]
    if (!file) return

    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
        partnerLogoPreview.value = e.target.result
    }
    reader.readAsDataURL(file)

    // Upload logo
    const logoForm = useForm({
        image: file
    })

    logoForm.post(route('admin.homepage.partner-badge.logo.upload'), {
        preserveScroll: true,
        onSuccess: () => {
            partnerLogoPreview.value = null
            // Force page refresh to get updated logo
            window.location.reload()
        },
        onError: (formErrors) => {
            partnerErrors.value = formErrors
            partnerLogoPreview.value = null
        }
    })
}

const deletePartnerLogo = () => {
    if (confirm('Are you sure you want to delete this partner logo?')) {
        const deleteForm = useForm({})
        deleteForm.delete(route('admin.homepage.partner-badge.logo.delete'), {
            preserveScroll: true,
            onSuccess: () => {
                // Force page refresh to update logo display
                window.location.reload()
            }
        })
    }
}

// What We Do Functions
const updateWhatWeDo = () => {
    whatWeDoForm.put(route('admin.homepage.what-we-do.update'), {
        preserveScroll: true,
        onError: (formErrors) => {
            whatWeDoErrors.value = formErrors
        },
        onSuccess: () => {
            whatWeDoErrors.value = {}
        }
    })
}

const closeItemModal = () => {
    showAddItemModal.value = false
    showEditItemModal.value = false
    editingItemId.value = null
    itemForm.reset()
    itemErrors.value = {}
}

const addItem = () => {
    itemForm.post(route('admin.homepage.what-we-do.items.store'), {
        preserveScroll: true,
        onError: (formErrors) => {
            itemErrors.value = formErrors
        },
        onSuccess: () => {
            itemErrors.value = {}
            closeItemModal()
            // Force page refresh to show new item
            window.location.reload()
        }
    })
}

const editItem = (item) => {
    editingItemId.value = item.id
    itemForm.title = item.title
    itemForm.description = item.description
    itemForm.icon_svg = item.icon_svg
    itemForm.sort_order = item.sort_order
    itemForm.is_active = item.is_active
    showEditItemModal.value = true
}

const updateItem = () => {
    itemForm.put(route('admin.homepage.what-we-do.items.update', editingItemId.value), {
        preserveScroll: true,
        onError: (formErrors) => {
            itemErrors.value = formErrors
        },
        onSuccess: () => {
            itemErrors.value = {}
            closeItemModal()
            // Force page refresh to show updated item
            window.location.reload()
        }
    })
}

const deleteItem = (itemId) => {
    if (confirm('Are you sure you want to delete this service container?')) {
        const deleteForm = useForm({})
        deleteForm.delete(route('admin.homepage.what-we-do.items.delete', itemId), {
            preserveScroll: true,
            onSuccess: () => {
                // Force page refresh to remove deleted item
                window.location.reload()
            }
        })
    }
}

// Outcomes Functions
const updateOutcomes = () => {
    outcomesForm.put(route('admin.homepage.outcomes.update'), {
        preserveScroll: true,
        onError: (formErrors) => {
            outcomesErrors.value = formErrors
        },
        onSuccess: () => {
            outcomesErrors.value = {}
        }
    })
}

const showAddOutcomeModal = () => {
    // Reset form
    outcomeItemForm.title = ''
    outcomeItemForm.description = ''
    outcomeItemForm.icon_svg = ''
    outcomeItemForm.sort_order = 1
    outcomeItemForm.is_active = true
    outcomeItemErrors.value = {}

    showAddOutcomeItemModal.value = true
}

const closeOutcomeModal = () => {
    showAddOutcomeItemModal.value = false
    showEditOutcomeItemModal.value = false
    editingOutcomeItemId.value = null
    outcomeItemForm.clearErrors()
    outcomeItemErrors.value = {}
}

const submitOutcomeItem = () => {
    if (showEditOutcomeItemModal.value) {
        updateOutcomeItem()
    } else {
        addOutcomeItem()
    }
}

const addOutcomeItem = () => {
    outcomeItemForm.post(route('admin.homepage.outcomes.items.store'), {
        preserveScroll: true,
        onError: (formErrors) => {
            outcomeItemErrors.value = formErrors
        },
        onSuccess: () => {
            outcomeItemErrors.value = {}
            closeOutcomeModal()
            // Force page refresh to show new item
            window.location.reload()
        }
    })
}

const editOutcomeItem = (item) => {
    editingOutcomeItemId.value = item.id
    outcomeItemForm.title = item.title
    outcomeItemForm.description = item.description
    outcomeItemForm.icon_svg = item.icon_svg
    outcomeItemForm.sort_order = item.sort_order
    outcomeItemForm.is_active = item.is_active
    showEditOutcomeItemModal.value = true
}

const updateOutcomeItem = () => {
    outcomeItemForm.put(route('admin.homepage.outcomes.items.update', editingOutcomeItemId.value), {
        preserveScroll: true,
        onError: (formErrors) => {
            outcomeItemErrors.value = formErrors
        },
        onSuccess: () => {
            outcomeItemErrors.value = {}
            closeOutcomeModal()
            // Force page refresh to show updated item
            window.location.reload()
        }
    })
}

const deleteOutcomeItem = (itemId) => {
    if (confirm('Are you sure you want to delete this outcome item?')) {
        const deleteForm = useForm({})
        deleteForm.delete(route('admin.homepage.outcomes.items.delete', itemId), {
            preserveScroll: true,
            onSuccess: () => {
                // Force page refresh to remove deleted item
                window.location.reload()
            }
        })
    }
}

// Our Approach Functions
const updateOurApproach = () => {
    ourApproachForm.put(route('admin.homepage.our-approach.update'), {
        preserveScroll: true,
        onError: (formErrors) => {
            ourApproachErrors.value = formErrors
        },
        onSuccess: () => {
            ourApproachErrors.value = {}
        }
    })
}

const handleApproachImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        // Create a preview
        const reader = new FileReader()
        reader.onload = (e) => {
            approachImagePreview.value = e.target.result
        }
        reader.readAsDataURL(file)

        // Upload the file
        const formData = new FormData()
        formData.append('image', file)

        const uploadForm = useForm(formData)
        uploadForm.post(route('admin.homepage.our-approach.image.upload'), {
            preserveScroll: true,
            onSuccess: () => {
                // Force page refresh to show new image
                window.location.reload()
            }
        })
    }
}

const deleteApproachImage = () => {
    if (confirm('Are you sure you want to delete this image?')) {
        const deleteForm = useForm({})
        deleteForm.delete(route('admin.homepage.our-approach.image.delete'), {
            preserveScroll: true,
            onSuccess: () => {
                approachImagePreview.value = null
                // Force page refresh to remove image
                window.location.reload()
            }
        })
    }
}

// SEO Functions
const updateSeoSettings = () => {
    seoForm.put(route('admin.homepage.seo.update'), {
        preserveScroll: true,
        onError: (formErrors) => {
            seoErrors.value = formErrors
        },
        onSuccess: () => {
            seoErrors.value = {}
        }
    })
}

const handleSeoImageUpload = (event, type) => {
    const file = event.target.files[0]
    if (!file) return

    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
        if (type === 'og_image') {
            ogImagePreview.value = e.target.result
        } else if (type === 'twitter_image') {
            twitterImagePreview.value = e.target.result
        }
    }
    reader.readAsDataURL(file)

    // Upload image
    const imageForm = useForm({
        image: file,
        type: type
    })

    imageForm.post(route('admin.homepage.seo.image.upload'), {
        preserveScroll: true,
        onSuccess: () => {
            if (type === 'og_image') {
                ogImagePreview.value = null
            } else if (type === 'twitter_image') {
                twitterImagePreview.value = null
            }
            // Force page refresh to get updated image
            window.location.reload()
        },
        onError: (formErrors) => {
            seoErrors.value = formErrors
            if (type === 'og_image') {
                ogImagePreview.value = null
            } else if (type === 'twitter_image') {
                twitterImagePreview.value = null
            }
        }
    })
}

const deleteSeoImage = (type) => {
    if (confirm(`Are you sure you want to delete this ${type.replace('_', ' ')}?`)) {
        const deleteForm = useForm({ type: type })
        deleteForm.delete(route('admin.homepage.seo.image.delete'), {
            preserveScroll: true,
            onSuccess: () => {
                if (type === 'og_image') {
                    ogImagePreview.value = null
                } else if (type === 'twitter_image') {
                    twitterImagePreview.value = null
                }
                // Force page refresh to update image display
                window.location.reload()
            }
        })
    }
}

// Core Services Functions
const updateCoreServices = () => {
    coreServicesForm.put(route('admin.homepage.core-services.update'), {
        preserveScroll: true,
        onError: (formErrors) => {
            coreServicesErrors.value = formErrors
        },
        onSuccess: () => {
            coreServicesErrors.value = {}
        }
    })
}

// Service Management Functions
const closeServiceModal = () => {
    showAddServiceModal.value = false
    showEditServiceModal.value = false
    editingServiceId.value = null
    serviceForm.reset()
    serviceErrors.value = {}
    serviceTagsInput.value = ''
}

const editService = (service) => {
    editingServiceId.value = service.id
    serviceForm.title = service.title
    serviceForm.description = service.description || ''
    serviceForm.icon_svg = service.icon_svg
    serviceForm.link_url = service.link_url || ''
    serviceForm.sort_order = service.sort_order
    serviceForm.is_active = service.is_active
    serviceTagsInput.value = service.tags ? service.tags.join(', ') : ''
    showEditServiceModal.value = true
}

const submitServiceForm = () => {
    // Process tags
    const tags = serviceTagsInput.value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0)

    serviceForm.tags = tags

    if (showEditServiceModal.value) {
        serviceForm.put(route('admin.homepage.core-services.service.update', editingServiceId.value), {
            preserveScroll: true,
            onError: (formErrors) => {
                serviceErrors.value = formErrors
            },
            onSuccess: () => {
                closeServiceModal()
                window.location.reload() // Refresh to show updated data
            }
        })
    } else {
        serviceForm.post(route('admin.homepage.core-services.service.store'), {
            preserveScroll: true,
            onError: (formErrors) => {
                serviceErrors.value = formErrors
            },
            onSuccess: () => {
                closeServiceModal()
                window.location.reload() // Refresh to show new service
            }
        })
    }
}

const deleteService = (serviceId) => {
    if (confirm('Are you sure you want to delete this service? This action cannot be undone.')) {
        const deleteForm = useForm({})
        deleteForm.delete(route('admin.homepage.core-services.service.destroy', serviceId), {
            preserveScroll: true,
            onSuccess: () => {
                window.location.reload() // Refresh to remove deleted service
            }
        })
    }
}
</script>

<style scoped>
.bg-brand-red {
    background-color: #FF3621;
}

.text-brand-red {
    color: #FF3621;
}

.border-brand-red {
    border-color: #FF3621;
}

.focus\:ring-brand-red:focus {
    --tw-ring-color: #FF3621;
}

.focus\:border-brand-red:focus {
    border-color: #FF3621;
}
</style>