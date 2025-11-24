<template>
    <AdminLayout page-title="Homepage Management" page-subtitle="Manage your website's homepage content">
        <!-- Hero Section Card -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
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
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
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
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
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
                            v-for="(item, index) in whatWeDoSection.items"
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
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
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
                            v-for="(item, index) in outcomesSection.items"
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
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
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
import { ref, onMounted } from 'vue'
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Components/Admin/AdminLayout.vue'

const props = defineProps({
    heroSection: Object,
    partnerBadge: Object,
    whatWeDoSection: Object,
    outcomesSection: Object,
    ourApproachSection: Object
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