<template>
    <AdminLayout
        :page-title="`Edit ${servicePage.title}`"
        page-subtitle="Update your service page content"
    >
        <Head :title="`Edit ${servicePage.title} - Admin Dashboard`" />

        <!-- Back Link & Actions -->
        <div class="flex items-center justify-between mb-6">
            <Link
                :href="route('admin.service-pages.index')"
                class="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
                Back to Service Pages
            </Link>

            <div class="flex items-center space-x-3">
                <Link
                    :href="route('admin.service-pages.preview', servicePage.id)"
                    target="_blank"
                    class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                    Preview
                </Link>
                <Link
                    :href="servicePage.url"
                    target="_blank"
                    v-if="servicePage.status === 'published'"
                    class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                    View Live
                </Link>
            </div>
        </div>

        <!-- Form -->
        <form @submit.prevent="submit">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Main Content -->
                <div class="lg:col-span-2 space-y-8">
                    <!-- Basic Information -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h2 class="text-lg font-semibold text-gray-900">Basic Information</h2>
                        </div>
                        <div class="p-6 space-y-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                <input
                                    v-model="form.title"
                                    type="text"
                                    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter page title"
                                />
                                <p v-if="errors.title" class="mt-1 text-sm text-red-600">{{ errors.title }}</p>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                                <input
                                    v-model="form.slug"
                                    type="text"
                                    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="auto-generated-from-title"
                                />
                                <p class="mt-1 text-sm text-gray-500">Current URL: /services/{{ form.slug }}</p>
                                <p v-if="errors.slug" class="mt-1 text-sm text-red-600">{{ errors.slug }}</p>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                                <textarea
                                    v-model="form.subtitle"
                                    rows="3"
                                    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter page subtitle/description"
                                />
                                <p v-if="errors.subtitle" class="mt-1 text-sm text-red-600">{{ errors.subtitle }}</p>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
                                <textarea
                                    v-model="form.description"
                                    rows="4"
                                    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Additional description for the page"
                                />
                                <p v-if="errors.description" class="mt-1 text-sm text-red-600">{{ errors.description }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Hero Section -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h2 class="text-lg font-semibold text-gray-900">Hero Section</h2>
                        </div>
                        <div class="p-6 space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Background Image URL</label>
                                    <div class="flex space-x-2">
                                        <input
                                            v-model="form.hero_background_image"
                                            type="text"
                                            class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="/images/hero-bg.webp"
                                        />
                                        <div class="relative">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                @change="uploadImage($event, 'hero_background_image')"
                                                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            <button
                                                type="button"
                                                class="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                                            >
                                                Upload
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                                    <input
                                        v-model="form.hero_background_color"
                                        type="color"
                                        class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">CTA Text</label>
                                    <input
                                        v-model="form.cta_text"
                                        type="text"
                                        class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Talk To Our Experts"
                                    />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">CTA Link</label>
                                    <input
                                        v-model="form.cta_link"
                                        type="text"
                                        class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="/contact"
                                    />
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Overlay Gradient (CSS)</label>
                                <input
                                    v-model="form.hero_overlay_gradient"
                                    type="text"
                                    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)"
                                />
                            </div>
                        </div>
                    </div>

                    <!-- Image Content Section -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h2 class="text-lg font-semibold text-gray-900">Image Content Section</h2>
                            <p class="text-sm text-gray-600 mt-1">Configure the "Unlock the Full Potential" section content</p>
                        </div>
                        <div class="p-6 space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                    <input
                                        v-model="form.image_content_title"
                                        type="text"
                                        class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Unlock the Full Potential of Your Data"
                                    />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                                    <input
                                        v-model="form.image_content_subtitle"
                                        type="text"
                                        class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Build Smarter, Faster, and Future-Ready Data Systems"
                                    />
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Descriptions</label>
                                <textarea
                                    v-model="descriptionsText"
                                    rows="6"
                                    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Transform your business with our comprehensive service solutions.&#10;&#10;At Sinki.ai, our solutions simplify complexity, accelerate insights, and give your teams the confidence to act on data faster, smarter, and with measurable impact."
                                />
                                <p class="text-sm text-gray-500 mt-1">Enter each description paragraph on a new line</p>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                                    <div class="flex space-x-2">
                                        <input
                                            v-model="form.image_content_image"
                                            type="text"
                                            class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="/images/serviceside.webp"
                                        />
                                        <div class="relative">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                @change="uploadImage($event, 'image_content_image')"
                                                class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            <button
                                                type="button"
                                                class="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                                            >
                                                Upload
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">CTA Text</label>
                                    <input
                                        v-model="form.image_content_cta_text"
                                        type="text"
                                        class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Start Your Transformation"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Services Grid Section -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h2 class="text-lg font-semibold text-gray-900">Services Grid Section</h2>
                            <p class="text-sm text-gray-600 mt-1">Configure the services grid section content and individual services</p>
                        </div>
                        <div class="p-6 space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                                    <input
                                        v-model="form.services_grid_title"
                                        type="text"
                                        class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        :placeholder="`Our ${form.title} Services`"
                                    />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Section Description</label>
                                    <textarea
                                        v-model="form.services_grid_description"
                                        rows="3"
                                        class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="We offer a comprehensive suite of services."
                                    />
                                </div>
                            </div>

                            <div class="border-t pt-6">
                                <div class="flex justify-between items-center mb-4">
                                    <h3 class="text-md font-medium text-gray-900">Individual Services</h3>
                                    <button
                                        type="button"
                                        @click="addService"
                                        class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200"
                                    >
                                        Add Service
                                    </button>
                                </div>
                                <div v-for="(service, index) in form.services_data" :key="index" class="mb-6 p-4 border border-gray-200 rounded-lg">
                                    <div class="flex justify-between items-start mb-4">
                                        <h4 class="text-sm font-medium text-gray-900">Service {{ index + 1 }}</h4>
                                        <button
                                            type="button"
                                            @click="removeService(index)"
                                            class="text-red-600 hover:text-red-800"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    <div class="space-y-4">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                            <input
                                                v-model="service.title"
                                                type="text"
                                                class="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                                                placeholder="Service title"
                                            />
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                            <textarea
                                                v-model="service.description"
                                                rows="3"
                                                class="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                                                placeholder="Service description"
                                            />
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Icon (SVG)</label>
                                            <textarea
                                                v-model="service.icon"
                                                rows="2"
                                                class="w-full border border-gray-300 rounded px-3 py-2 text-sm font-mono"
                                                placeholder="<svg>...</svg>"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Platforms We Work With Section -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h2 class="text-lg font-semibold text-gray-900">Platforms We Work With</h2>
                            <p class="text-sm text-gray-600 mt-1">Configure the platforms section content</p>
                        </div>
                        <div class="p-6">
                            <div class="space-y-4">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                        <input
                                            v-model="form.platforms_title"
                                            type="text"
                                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Built on the Platforms You Trust"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                        <textarea
                                            v-model="form.platforms_description"
                                            rows="3"
                                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="We bring the best solutions to life on the enterprise platforms you already rely on."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Why Choose Us Section -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h2 class="text-lg font-semibold text-gray-900">Why Choose Us</h2>
                            <p class="text-sm text-gray-600 mt-1">Configure the why choose us section content and individual items</p>
                        </div>
                        <div class="p-6">
                            <div class="space-y-6">
                                <!-- Section Title and Description -->
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                                        <input
                                            v-model="form.why_choose_title"
                                            type="text"
                                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            :placeholder="`Why Choose us for your ${form.title} needs?`"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Section Description</label>
                                        <textarea
                                            v-model="form.why_choose_description"
                                            rows="3"
                                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="We deliver exceptional results with our proven methodology and expert team."
                                        />
                                    </div>
                                </div>

                                <!-- Individual Reasons/Items -->
                                <div class="border-t pt-4">
                                    <div class="flex justify-between items-center mb-4">
                                        <h4 class="text-sm font-medium text-gray-900">Why Choose Us Items</h4>
                                        <button
                                            type="button"
                                            @click="addWhyChooseItem"
                                            class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200"
                                        >
                                            Add Item
                                        </button>
                                    </div>

                                    <div v-if="form.why_choose_data.length === 0" class="text-center py-6 text-gray-500">
                                        <svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                        </svg>
                                        <p class="text-sm">No items added yet. Click "Add Item" to get started.</p>
                                    </div>

                                    <div v-for="(item, index) in form.why_choose_data" :key="index" class="mb-4 p-4 border border-gray-200 rounded-lg">
                                        <div class="flex justify-between items-start mb-3">
                                            <h5 class="text-sm font-medium text-gray-900">Item {{ index + 1 }}</h5>
                                            <button
                                                type="button"
                                                @click="removeWhyChooseItem(index)"
                                                class="text-red-600 hover:text-red-800 text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        <div class="space-y-3">
                                            <div>
                                                <label class="block text-xs font-medium text-gray-700 mb-1">Title</label>
                                                <input
                                                    v-model="item.title"
                                                    type="text"
                                                    class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Enter reason title"
                                                />
                                            </div>
                                            <div>
                                                <label class="block text-xs font-medium text-gray-700 mb-1">Description</label>
                                                <textarea
                                                    v-model="item.description"
                                                    rows="2"
                                                    class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Enter reason description"
                                                />
                                            </div>
                                            <div>
                                                <label class="block text-xs font-medium text-gray-700 mb-1">Icon (SVG)</label>
                                                <textarea
                                                    v-model="item.icon"
                                                    rows="2"
                                                    class="w-full border border-gray-300 rounded px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="<svg>...</svg>"
                                                />
                                                <p class="text-xs text-gray-500 mt-1">Paste your SVG icon code here</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Our Approach Section -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h2 class="text-lg font-semibold text-gray-900">Our Approach</h2>
                            <p class="text-sm text-gray-600 mt-1">Configure the our approach section content and methodology steps</p>
                        </div>
                        <div class="p-6">
                            <div class="space-y-6">
                                <!-- Section Title and Description -->
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                                        <input
                                            v-model="form.our_approach_title"
                                            type="text"
                                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Our Approach"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Section Description</label>
                                        <textarea
                                            v-model="form.our_approach_description"
                                            rows="3"
                                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="We follow a clear, outcome-driven methodology..."
                                        />
                                    </div>
                                </div>

                                <!-- Individual Steps -->
                                <div class="border-t pt-4">
                                    <div class="flex justify-between items-center mb-4">
                                        <h4 class="text-sm font-medium text-gray-900">Approach Steps</h4>
                                        <button
                                            type="button"
                                            @click="addApproachStep"
                                            class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200"
                                        >
                                            Add Step
                                        </button>
                                    </div>

                                    <div v-if="form.our_approach_content.length === 0" class="text-center py-6 text-gray-500">
                                        <svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                        </svg>
                                        <p class="text-sm">No steps added yet. Click "Add Step" to get started.</p>
                                    </div>

                                    <div v-for="(step, index) in form.our_approach_content" :key="index" class="mb-4 p-4 border border-gray-200 rounded-lg">
                                        <div class="flex justify-between items-start mb-3">
                                            <h5 class="text-sm font-medium text-gray-900">Step {{ index + 1 }}</h5>
                                            <button
                                                type="button"
                                                @click="removeApproachStep(index)"
                                                class="text-red-600 hover:text-red-800 text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        <div class="space-y-3">
                                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div>
                                                    <label class="block text-xs font-medium text-gray-700 mb-1">Step Number</label>
                                                    <input
                                                        v-model="step.number"
                                                        type="text"
                                                        class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        placeholder="01"
                                                    />
                                                </div>
                                                <div>
                                                    <label class="block text-xs font-medium text-gray-700 mb-1">Title</label>
                                                    <input
                                                        v-model="step.title"
                                                        type="text"
                                                        class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        placeholder="Assess & Align"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label class="block text-xs font-medium text-gray-700 mb-1">Description</label>
                                                <textarea
                                                    v-model="step.description"
                                                    rows="2"
                                                    class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Enter step description"
                                                />
                                            </div>
                                            <div>
                                                <label class="block text-xs font-medium text-gray-700 mb-1">Icon (SVG)</label>
                                                <textarea
                                                    v-model="step.icon"
                                                    rows="2"
                                                    class="w-full border border-gray-300 rounded px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="<svg>...</svg>"
                                                />
                                                <p class="text-xs text-gray-500 mt-1">Paste your SVG icon code here</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Key Benefits Section -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h2 class="text-lg font-semibold text-gray-900">Key Benefits</h2>
                            <p class="text-sm text-gray-600 mt-1">Configure the key benefits section content and individual benefits</p>
                        </div>
                        <div class="p-6">
                            <div class="space-y-6">
                                <!-- Section Title and Description -->
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                                        <input
                                            v-model="form.key_benefits_title"
                                            type="text"
                                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Key Benefits"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Section Description</label>
                                        <textarea
                                            v-model="form.key_benefits_description"
                                            rows="3"
                                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Experience the difference a well-engineered solution can make."
                                        />
                                    </div>
                                </div>

                                <!-- Individual Benefits -->
                                <div class="border-t pt-4">
                                    <div class="flex justify-between items-center mb-4">
                                        <h4 class="text-sm font-medium text-gray-900">Benefits</h4>
                                        <button
                                            type="button"
                                            @click="addKeyBenefit"
                                            class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200"
                                        >
                                            Add Benefit
                                        </button>
                                    </div>

                                    <div v-if="form.key_benefits_content.length === 0" class="text-center py-6 text-gray-500">
                                        <svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                        </svg>
                                        <p class="text-sm">No benefits added yet. Click "Add Benefit" to get started.</p>
                                    </div>

                                    <div v-for="(benefit, index) in form.key_benefits_content" :key="index" class="mb-4 p-4 border border-gray-200 rounded-lg">
                                        <div class="flex justify-between items-start mb-3">
                                            <h5 class="text-sm font-medium text-gray-900">Benefit {{ index + 1 }}</h5>
                                            <button
                                                type="button"
                                                @click="removeKeyBenefit(index)"
                                                class="text-red-600 hover:text-red-800 text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        <div class="space-y-3">
                                            <div>
                                                <label class="block text-xs font-medium text-gray-700 mb-1">Title</label>
                                                <input
                                                    v-model="benefit.title"
                                                    type="text"
                                                    class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Faster Insights"
                                                />
                                            </div>
                                            <div>
                                                <label class="block text-xs font-medium text-gray-700 mb-1">Description</label>
                                                <textarea
                                                    v-model="benefit.description"
                                                    rows="2"
                                                    class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Accelerate time from raw data to actionable insights."
                                                />
                                            </div>
                                            <div>
                                                <label class="block text-xs font-medium text-gray-700 mb-1">Icon (SVG)</label>
                                                <textarea
                                                    v-model="benefit.icon"
                                                    rows="2"
                                                    class="w-full border border-gray-300 rounded px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="<svg>...</svg>"
                                                />
                                                <p class="text-xs text-gray-500 mt-1">Paste your SVG icon code here</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Service CTA Section -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h2 class="text-lg font-semibold text-gray-900">Service CTA Section</h2>
                            <p class="text-sm text-gray-600 mt-1">Configure the call-to-action section content</p>
                        </div>
                        <div class="p-6">
                            <div class="space-y-6">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                        <input
                                            v-model="form.service_cta_title"
                                            type="text"
                                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            :placeholder="`Ready to Get Started with ${form.title}?`"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">CTA Text</label>
                                        <input
                                            v-model="form.service_cta_text"
                                            type="text"
                                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Get Started Now"
                                        />
                                    </div>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                        <textarea
                                            v-model="form.service_cta_description"
                                            rows="3"
                                            class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Let's simplify your journey, and turn challenges into real results."
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Background Image URL</label>
                                        <div class="flex space-x-2">
                                            <input
                                                v-model="form.service_cta_image"
                                                type="text"
                                                class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="/images/cta.webp"
                                            />
                                            <div class="relative">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    @change="uploadImage($event, 'service_cta_image')"
                                                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                />
                                                <button
                                                    type="button"
                                                    class="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                                                >
                                                    Upload
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- FAQs -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 class="text-lg font-semibold text-gray-900">FAQs</h2>
                            <button
                                type="button"
                                @click="addFaq"
                                class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200"
                            >
                                Add FAQ
                            </button>
                        </div>
                        <div class="p-6">
                            <div v-for="(faq, index) in form.faqs_data" :key="index" class="mb-6 p-4 border border-gray-200 rounded-lg">
                                <div class="flex justify-between items-start mb-4">
                                    <h3 class="text-sm font-medium text-gray-900">FAQ {{ index + 1 }}</h3>
                                    <button
                                        type="button"
                                        @click="removeFaq(index)"
                                        class="text-red-600 hover:text-red-800"
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div class="space-y-4">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Question</label>
                                        <input
                                            v-model="faq.question"
                                            type="text"
                                            class="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                                            placeholder="FAQ question"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Answer</label>
                                        <textarea
                                            v-model="faq.answer"
                                            rows="3"
                                            class="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                                            placeholder="FAQ answer"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="space-y-6">
                    <!-- Publish -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h2 class="text-lg font-semibold text-gray-900">Publish</h2>
                        </div>
                        <div class="p-6 space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                <select
                                    v-model="form.status"
                                    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                            </div>

                            <div class="flex items-center">
                                <input
                                    v-model="form.is_featured"
                                    type="checkbox"
                                    class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                />
                                <label class="ml-2 text-sm text-gray-700">Featured Page</label>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Sort Order</label>
                                <input
                                    v-model="form.sort_order"
                                    type="number"
                                    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="0"
                                />
                            </div>

                            <button
                                type="submit"
                                :disabled="processing"
                                class="w-full bg-brand-red hover:bg-red-600 disabled:bg-red-400 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                            >
                                {{ processing ? 'Updating...' : 'Update Service Page' }}
                            </button>
                        </div>
                    </div>

                    <!-- SEO -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h2 class="text-lg font-semibold text-gray-900">SEO</h2>
                        </div>
                        <div class="p-6 space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
                                <input
                                    v-model="form.meta_title"
                                    type="text"
                                    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="SEO title"
                                />
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                                <textarea
                                    v-model="form.meta_description"
                                    rows="3"
                                    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="SEO description"
                                />
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Meta Keywords</label>
                                <input
                                    v-model="form.meta_keywords"
                                    type="text"
                                    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="keyword1, keyword2, keyword3"
                                />
                            </div>
                        </div>
                    </div>

                    <!-- Page Info -->
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200">
                        <div class="px-6 py-4 border-b border-gray-200">
                            <h2 class="text-lg font-semibold text-gray-900">Page Info</h2>
                        </div>
                        <div class="p-6 space-y-3 text-sm">
                            <div class="flex justify-between">
                                <span class="text-gray-600">Created:</span>
                                <span class="text-gray-900">{{ formatDate(servicePage.created_at) }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">Updated:</span>
                                <span class="text-gray-900">{{ formatDate(servicePage.updated_at) }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600">URL:</span>
                                <span class="text-gray-900 font-mono text-xs">/services/{{ servicePage.slug }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>

<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import { computed } from 'vue';
import AdminLayout from '@/Components/Admin/AdminLayout.vue';

const props = defineProps({
    servicePage: Object,
    defaultSections: Object,
    errors: Object
});

const form = useForm({
    title: props.servicePage.title,
    slug: props.servicePage.slug,
    subtitle: props.servicePage.subtitle,
    description: props.servicePage.description || '',
    meta_title: props.servicePage.meta_title || '',
    meta_description: props.servicePage.meta_description || '',
    meta_keywords: props.servicePage.meta_keywords || '',
    hero_background_image: props.servicePage.hero_background_image || '',
    hero_background_color: props.servicePage.hero_background_color || '#121212',
    hero_overlay_gradient: props.servicePage.hero_overlay_gradient || '',
    cta_text: props.servicePage.cta_text || 'Talk To Our Experts',
    cta_link: props.servicePage.cta_link || '/contact',
    sections: props.servicePage.sections || props.defaultSections,
    services_data: props.servicePage.services_data || [],
    faqs_data: props.servicePage.faqs_data || [],
    custom_content: props.servicePage.custom_content || {},
    status: props.servicePage.status,
    is_featured: props.servicePage.is_featured,
    sort_order: props.servicePage.sort_order,
    // Section-specific content fields
    image_content_title: props.servicePage.image_content_title || '',
    image_content_subtitle: props.servicePage.image_content_subtitle || '',
    image_content_descriptions: props.servicePage.image_content_descriptions || [],
    image_content_image: props.servicePage.image_content_image || '',
    image_content_cta_text: props.servicePage.image_content_cta_text || '',
    services_grid_title: props.servicePage.services_grid_title || '',
    services_grid_description: props.servicePage.services_grid_description || '',
    platforms_title: props.servicePage.platforms_title || '',
    platforms_description: props.servicePage.platforms_description || '',
    why_choose_title: props.servicePage.why_choose_title || '',
    why_choose_description: props.servicePage.why_choose_description || '',
    why_choose_data: props.servicePage.why_choose_data || [],
    service_cta_title: props.servicePage.service_cta_title || '',
    service_cta_description: props.servicePage.service_cta_description || '',
    service_cta_text: props.servicePage.service_cta_text || '',
    service_cta_image: props.servicePage.service_cta_image || '',
    our_approach_title: props.servicePage.our_approach_title || '',
    our_approach_description: props.servicePage.our_approach_description || '',
    our_approach_content: props.servicePage.our_approach_content || [],
    key_benefits_title: props.servicePage.key_benefits_title || '',
    key_benefits_description: props.servicePage.key_benefits_description || '',
    key_benefits_content: props.servicePage.key_benefits_content || []
});

const submit = () => {
    form.put(route('admin.service-pages.update', props.servicePage.id));
};

const addService = () => {
    form.services_data.push({
        title: '',
        description: '',
        icon: '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
    });
};

const removeService = (index) => {
    form.services_data.splice(index, 1);
};

const addWhyChooseItem = () => {
    form.why_choose_data.push({
        title: '',
        description: '',
        icon: '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
    });
};

const removeWhyChooseItem = (index) => {
    form.why_choose_data.splice(index, 1);
};

const addFaq = () => {
    form.faqs_data.push({
        question: '',
        answer: ''
    });
};

const removeFaq = (index) => {
    form.faqs_data.splice(index, 1);
};

const addApproachStep = () => {
    form.our_approach_content.push({
        number: String(form.our_approach_content.length + 1).padStart(2, '0'),
        title: '',
        description: '',
        icon: '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
    });
};

const removeApproachStep = (index) => {
    form.our_approach_content.splice(index, 1);
};

const addKeyBenefit = () => {
    form.key_benefits_content.push({
        title: '',
        description: '',
        icon: '<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
    });
};

const removeKeyBenefit = (index) => {
    form.key_benefits_content.splice(index, 1);
};

// Computed property for handling descriptions as text
const descriptionsText = computed({
    get() {
        if (Array.isArray(form.image_content_descriptions)) {
            return form.image_content_descriptions.join('\n\n');
        }
        return form.image_content_descriptions || '';
    },
    set(value) {
        form.image_content_descriptions = value.split('\n\n').filter(desc => desc.trim() !== '');
    }
});

// Image upload functionality
const uploadImage = async (event, fieldName) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
        alert('Please select a valid image file (JPEG, PNG, JPG, GIF, or WebP)');
        return;
    }

    // Validate file size (max 2MB)
    if (file.size > 2048 * 1024) {
        alert('File size must be less than 2MB');
        return;
    }

    try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch(route('admin.service-pages.upload-image'), {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });

        const result = await response.json();

        if (result.success) {
            form[fieldName] = result.url;
        } else {
            alert('Upload failed. Please try again.');
        }
    } catch (error) {
        console.error('Upload error:', error);
        alert('Upload failed. Please try again.');
    }
};

const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
</script>

<style scoped>
.bg-brand-red {
    background-color: #FF3621;
}

.text-brand-red {
    color: #FF3621;
}

.hover\:bg-red-600:hover {
    background-color: #dc2626;
}

.disabled\:bg-red-400:disabled {
    background-color: #f87171;
}
</style>