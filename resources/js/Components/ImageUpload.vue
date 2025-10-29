<template>
    <div class="image-upload-wrapper">
        <label class="block text-sm font-medium text-gray-700 mb-2">{{ label }}</label>

        <!-- Upload Area -->
        <div
            @drop="handleDrop"
            @dragover.prevent
            @dragenter.prevent
            class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors"
            :class="{ 'border-red-500': hasError, 'border-brand-red': isDragging }"
        >
            <!-- Show uploaded image -->
            <div v-if="imageUrl" class="mb-4">
                <div class="relative inline-block">
                    <img
                        :src="imageUrl"
                        :alt="altText"
                        class="max-w-full h-48 object-cover rounded-lg shadow-md"
                    />
                    <button
                        type="button"
                        @click="removeImage"
                        class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        title="Remove image"
                    >
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <p class="text-sm text-gray-600 mt-2">{{ filename }}</p>
            </div>

            <!-- Upload prompt -->
            <div v-else>
                <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-brand-red hover:text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-red">
                        <span>Upload a file</span>
                        <input
                            id="file-upload"
                            ref="fileInput"
                            type="file"
                            class="sr-only"
                            accept="image/*"
                            @change="handleFileSelect"
                        />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500 mt-2">PNG, JPG, GIF, WebP up to 5MB</p>
            </div>
        </div>

        <!-- URL Input Option -->
        <div class="mt-4">
            <label class="flex items-center">
                <input
                    type="checkbox"
                    v-model="useUrl"
                    class="rounded border-gray-300 text-brand-red focus:border-brand-red focus:ring-brand-red"
                />
                <span class="ml-2 text-sm text-gray-600">Or use image URL instead</span>
            </label>
        </div>

        <!-- URL Input -->
        <div v-if="useUrl" class="mt-3">
            <input
                v-model="urlInput"
                type="url"
                placeholder="https://example.com/image.jpg"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                @input="handleUrlInput"
            />
        </div>

        <!-- Error Message -->
        <div v-if="errorMessage" class="text-red-600 text-sm mt-2">
            {{ errorMessage }}
        </div>

        <!-- Loading State -->
        <div v-if="isUploading" class="mt-2">
            <div class="flex items-center text-sm text-gray-600">
                <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-brand-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Uploading...
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { router } from '@inertiajs/vue3';
import axios from 'axios';

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: 'Featured Image'
    },
    altText: {
        type: String,
        default: 'Featured image'
    }
});

const emit = defineEmits(['update:modelValue']);

// Reactive state
const isDragging = ref(false);
const isUploading = ref(false);
const errorMessage = ref('');
const useUrl = ref(false);
const urlInput = ref('');
const fileInput = ref(null);

// Computed properties
const imageUrl = computed(() => props.modelValue);
const hasError = computed(() => !!errorMessage.value);

const filename = computed(() => {
    if (imageUrl.value) {
        const url = imageUrl.value;
        const parts = url.split('/');
        return parts[parts.length - 1];
    }
    return '';
});

// Watch for URL input changes
watch(urlInput, (newUrl) => {
    if (useUrl.value && newUrl) {
        emit('update:modelValue', newUrl);
        errorMessage.value = '';
    }
});

// Watch for useUrl toggle
watch(useUrl, (newValue) => {
    if (newValue) {
        urlInput.value = imageUrl.value;
    } else {
        urlInput.value = '';
    }
});

// File handling methods
const handleDrop = (e) => {
    e.preventDefault();
    isDragging.value = false;

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        uploadFile(files[0]);
    }
};

const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
        uploadFile(file);
    }
};

const handleUrlInput = () => {
    emit('update:modelValue', urlInput.value);
};

const uploadFile = async (file) => {
    // Validate file
    if (!file.type.startsWith('image/')) {
        errorMessage.value = 'Please select an image file';
        return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB
        errorMessage.value = 'Image size must be less than 5MB';
        return;
    }

    isUploading.value = true;
    errorMessage.value = '';

    const formData = new FormData();
    formData.append('image', file);

    try {
        // Use axios which automatically handles CSRF tokens for Laravel
        const response = await axios.post(route('admin.upload.featured-image'), formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-Requested-With': 'XMLHttpRequest'
            }
        });

        const data = response.data;

        if (data.success) {
            emit('update:modelValue', data.url);
            useUrl.value = false; // Switch back to upload mode
        } else {
            errorMessage.value = data.message || 'Upload failed';
        }
    } catch (error) {
        console.error('Upload error:', error);

        if (error.response) {
            // Server responded with error status
            const status = error.response.status;
            const responseData = error.response.data;

            if (status === 419) {
                errorMessage.value = 'Session expired. Please refresh the page and try again.';
            } else if (status === 422 && responseData.errors) {
                // Validation errors
                const firstError = Object.values(responseData.errors)[0];
                errorMessage.value = Array.isArray(firstError) ? firstError[0] : firstError;
            } else {
                errorMessage.value = responseData.message || `Upload failed with status ${status}`;
            }
        } else if (error.request) {
            // Network error
            errorMessage.value = 'Network error. Please check your connection and try again.';
        } else {
            // Other error
            errorMessage.value = error.message || 'Upload failed. Please try again.';
        }
    } finally {
        isUploading.value = false;
        if (fileInput.value) {
            fileInput.value.value = '';
        }
    }
};

const removeImage = async () => {
    if (!imageUrl.value) return;

    // If it's an uploaded image (starts with /storage/), delete it from server
    if (imageUrl.value.startsWith('/storage/')) {
        try {
            await axios.delete(route('admin.upload.delete-image'), {
                data: {
                    path: imageUrl.value
                },
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });
        } catch (error) {
            console.error('Delete error:', error);
            if (error.response?.status === 419) {
                console.warn('Session expired during image deletion');
            }
        }
    }

    emit('update:modelValue', '');
    urlInput.value = '';
    useUrl.value = false;
    errorMessage.value = '';
};
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

/* Drag and drop styling */
.image-upload-wrapper [dragging="true"] {
    border-color: #FF3621;
    background-color: rgba(255, 54, 33, 0.05);
}

/* Loading animation */
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

/* File input focus styles */
input[type="file"]:focus + label {
    outline: 2px solid #FF3621;
    outline-offset: 2px;
}

/* Checkbox styling */
input[type="checkbox"]:checked {
    background-color: #FF3621;
    border-color: #FF3621;
}

input[type="checkbox"]:focus {
    ring-color: #FF3621;
}
</style>