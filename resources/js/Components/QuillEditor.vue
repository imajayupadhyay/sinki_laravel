<template>
    <div class="quill-editor-wrapper">
        <div ref="editorRef" class="quill-editor"></div>

        <!-- CTA Modal -->
        <div v-if="showCTAModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click.self="cancelCTA">
            <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Insert CTA Block</h3>

                <form @submit.prevent="submitCTA" class="space-y-4">
                    <!-- Title -->
                    <div>
                        <label for="cta-title" class="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            id="cta-title"
                            v-model="ctaForm.title"
                            type="text"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="Enter CTA title"
                            required
                        />
                    </div>

                    <!-- Description -->
                    <div>
                        <label for="cta-description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            id="cta-description"
                            v-model="ctaForm.description"
                            rows="3"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="Enter CTA description"
                            required
                        ></textarea>
                    </div>

                    <!-- Button Text -->
                    <div>
                        <label for="cta-button-text" class="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                        <input
                            id="cta-button-text"
                            v-model="ctaForm.buttonText"
                            type="text"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="Enter button text"
                            required
                        />
                    </div>

                    <!-- Button URL -->
                    <div>
                        <label for="cta-button-url" class="block text-sm font-medium text-gray-700 mb-1">Button URL</label>
                        <input
                            id="cta-button-url"
                            v-model="ctaForm.buttonUrl"
                            type="url"
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="Enter button URL (e.g., /contact)"
                            required
                        />
                    </div>

                    <!-- Modal Actions -->
                    <div class="flex justify-end space-x-3 pt-4">
                        <button
                            type="button"
                            @click="cancelCTA"
                            class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            class="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Insert CTA
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

// Enhanced Image with inline controls
const BlockEmbed = Quill.import('blots/block/embed');

// Import required Quill modules
const Block = Quill.import('blots/block');

// Custom format for raw HTML preservation
class RawHTMLBlot extends Block {
    static create(value) {
        const node = super.create();
        if (typeof value === 'string') {
            node.innerHTML = value;
        }
        return node;
    }

    static value(node) {
        return node.innerHTML;
    }

    html() {
        return this.domNode.innerHTML;
    }
}

RawHTMLBlot.blotName = 'rawhtml';
RawHTMLBlot.tagName = 'DIV';

// Only register if not already registered
try {
    Quill.register(RawHTMLBlot);
} catch (e) {
    // Already registered, ignore
}

// Custom CTA Blot
class CTABlot extends BlockEmbed {
    static create(value) {
        const node = super.create();
        node.setAttribute('data-cta', JSON.stringify(value));
        node.innerHTML = `
            <div style="
                position: relative;
                border-radius: 25px;
                padding: 48px 32px;
                text-align: center;
                overflow: hidden;
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
                min-height: 300px;
                background-color: #F6F6E0;
                border: 2px dashed #FF3621;
            ">
                <div style="
                    position: absolute;
                    top: -10px;
                    left: 10px;
                    background: #FF3621;
                    color: white;
                    padding: 2px 8px;
                    font-size: 12px;
                    border-radius: 4px;
                    font-weight: bold;
                    z-index: 20;
                ">CTA Block</div>
                <div style="position: relative; z-index: 10; margin: 0 auto;">
                    <h2 style="
                        color: #121212;
                        font-weight: 600;
                        font-size: 32px;
                        line-height: 1.2;
                        margin-bottom: 16px;
                        margin-top: 0;
                        font-family: 'Instrument Sans', sans-serif;
                    ">${value.title}</h2>
                    <p style="
                        color: #666666;
                        font-size: 18px;
                        line-height: 1.5;
                        margin-bottom: 32px;
                        margin-top: 0;
                        font-family: 'Instrument Sans', sans-serif;
                    ">${value.description}</p>
                    <a href="${value.buttonUrl}" style="
                        display: inline-flex;
                        align-items: center;
                        gap: 12px;
                        padding: 12px 24px;
                        background-color: black;
                        color: white;
                        text-decoration: none;
                        border-radius: 50px;
                        font-weight: bold;
                        font-size: 16px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                        transition: all 0.3s ease;
                        border: 2px solid black;
                        font-family: 'Instrument Sans', sans-serif;
                    ">
                        <span>${value.buttonText}</span>
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </a>
                </div>
            </div>
        `;
        return node;
    }

    static value(node) {
        const data = node.getAttribute('data-cta');
        return data ? JSON.parse(data) : {};
    }

    static formats(node) {
        return this.value(node);
    }
}

CTABlot.blotName = 'cta';
CTABlot.tagName = 'div';
CTABlot.className = 'blog-cta-embed';

Quill.register(CTABlot);

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: 'Start writing your content...'
    },
    height: {
        type: String,
        default: '400px'
    }
});

const emit = defineEmits(['update:modelValue']);

const editorRef = ref(null);
let quill = null;

const initializeEditor = () => {
    if (!editorRef.value) {
        console.error('Editor reference not available');
        return;
    }

    try {

    // Quill configuration with advanced features
    const options = {
        theme: 'snow',
        placeholder: props.placeholder,
        modules: {
            toolbar: {
                container: [
                    // Format headers
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                    // Font styling
                    [{ 'font': [] }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],

                    // Text formatting
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'color': [] }, { 'background': [] }],

                    // Text alignment
                    [{ 'align': [] }],

                    // Lists
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],

                    // Quotes and code
                    ['blockquote', 'code-block'],

                    // Links and media
                    ['link', 'image', 'video'],

                    // Table (we'll add custom implementation)
                    ['table'],

                    // Clean formatting
                    ['clean'],

                    // Custom HTML view button
                    ['html-view'],

                    // Custom CTA button
                    ['cta-insert']
                ],
                handlers: {
                    'image': function() {
                        insertEnhancedImage();
                    },
                    'table': function() {
                        insertTable();
                    },
                    'html-view': function() {
                        toggleHTMLView();
                    },
                    'cta-insert': function() {
                        insertCTA();
                    }
                }
            },
            clipboard: {
                // More permissive clipboard settings
                matchVisual: false
            },
            history: {
                delay: 1000,
                maxStack: 100,
                userOnly: true
            }
        }
    };

    quill = new Quill(editorRef.value, options);

    // Set initial content
    if (props.modelValue) {
        quill.root.innerHTML = props.modelValue;
    }

    // Override paste behavior to preserve HTML
    quill.root.addEventListener('paste', (e) => {
        // Only intercept when in HTML mode transitioning back
        if (htmlViewMode) return;

        const clipboardData = e.clipboardData || window['clipboardData'];
        const htmlData = clipboardData.getData('text/html');

        if (htmlData && htmlData.includes('style=')) {
            e.preventDefault();
            const range = quill.getSelection();
            if (range) {
                // Use dangerouslyPasteHTML for style-rich content
                quill.clipboard.dangerouslyPasteHTML(range.index, htmlData);
            }
        }
    });

    // Listen for content changes
    quill.on('text-change', () => {
        const html = quill.root.innerHTML;
        emit('update:modelValue', html === '<p><br></p>' ? '' : html);
    });

    // Set editor height
    quill.root.style.minHeight = props.height;

    // Add custom table functionality
    addCustomButtons();

    // Add controls to existing images
    setTimeout(() => {
        addImageControls();
    }, 500);

    } catch (error) {
        console.error('Error initializing QuillEditor:', error);

        // Fallback: create a basic textarea
        const fallbackTextarea = document.createElement('textarea');
        fallbackTextarea.style.width = '100%';
        fallbackTextarea.style.height = props.height;
        fallbackTextarea.style.padding = '16px';
        fallbackTextarea.style.border = '1px solid #e5e7eb';
        fallbackTextarea.style.borderRadius = '8px';
        fallbackTextarea.value = props.modelValue || '';
        fallbackTextarea.placeholder = props.placeholder;

        fallbackTextarea.addEventListener('input', () => {
            emit('update:modelValue', fallbackTextarea.value);
        });

        editorRef.value.appendChild(fallbackTextarea);
    }
};

const insertEnhancedImage = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    input.addEventListener('change', function() {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const range = quill.getSelection();
                if (range) {
                    // Insert regular image first
                    quill.insertEmbed(range.index, 'image', e.target.result);

                    // Add controls to the specific image after insertion
                    setTimeout(() => {
                        const newImage = quill.root.querySelector(`img[src="${e.target.result}"]`);
                        if (newImage && !newImage.closest('.enhanced-image-wrapper')) {
                            addControlsToImage(newImage);
                        }
                    }, 200);

                    quill.setSelection(range.index + 1);
                }
            };
            reader.readAsDataURL(file);
        }
    });

    input.click();
};

// Function to add controls to all images in the editor
const addImageControls = () => {
    const images = quill.root.querySelectorAll('img');
    images.forEach(img => {
        // Check if image is already wrapped or has controls
        if (!img.closest('.enhanced-image-wrapper') && !img.querySelector('.image-controls')) {
            addControlsToImage(img);
        }
    });
};

// Simplified approach - add controls without wrapping
const addControlsToImage = (img) => {
    try {
        // Check if image already has controls
        if (img.hasAttribute('data-has-controls')) {
            return;
        }

        // Mark image as having controls
        img.setAttribute('data-has-controls', 'true');
        img.setAttribute('data-align', img.getAttribute('data-align') || 'center');
        img.setAttribute('data-width', img.getAttribute('data-width') || '100');

        // Set initial styles
        img.style.position = 'relative';
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '8px';
        img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        img.style.transition = 'all 0.3s ease';

        // Apply initial alignment
        updateImageAlignment(img, 'center');

        // Add hover events for controls
        img.addEventListener('mouseenter', () => showImageControls(img));
        img.addEventListener('mouseleave', () => hideImageControls());

    } catch (error) {
        console.error('Error adding image controls:', error);
    }
};

// Show image controls
const showImageControls = (img) => {
    // Remove any existing controls
    hideImageControls(img);

    const controls = document.createElement('div');
    controls.className = 'floating-image-controls';
    controls.innerHTML = `
        <div class="image-toolbar">
            <button type="button" class="image-btn align-left" title="Align Left">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/>
                </svg>
            </button>
            <button type="button" class="image-btn align-center" title="Center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/>
                </svg>
            </button>
            <button type="button" class="image-btn align-right" title="Align Right">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/>
                </svg>
            </button>
            <select class="size-select" title="Image Size">
                <option value="25">25%</option>
                <option value="50">50%</option>
                <option value="75">75%</option>
                <option value="100" selected>100%</option>
            </select>
            <button type="button" class="image-btn delete-image" title="Delete">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
            </button>
        </div>
    `;

    // Position controls above the image
    const rect = img.getBoundingClientRect();
    const editorRect = quill.root.getBoundingClientRect();

    controls.style.position = 'absolute';
    controls.style.top = (rect.top - editorRect.top - 40) + 'px';
    controls.style.left = (rect.left - editorRect.left) + 'px';
    controls.style.zIndex = '1000';

    quill.root.appendChild(controls);

    // Add event listeners
    controls.querySelector('.align-left').addEventListener('click', () => {
        updateImageAlignment(img, 'left');
        hideImageControls();
    });

    controls.querySelector('.align-center').addEventListener('click', () => {
        updateImageAlignment(img, 'center');
        hideImageControls();
    });

    controls.querySelector('.align-right').addEventListener('click', () => {
        updateImageAlignment(img, 'right');
        hideImageControls();
    });

    controls.querySelector('.size-select').addEventListener('change', (e) => {
        updateImageSize(img, e.target.value);
    });

    controls.querySelector('.delete-image').addEventListener('click', () => {
        img.remove();
        hideImageControls();
    });

    // Set current size
    const currentWidth = img.getAttribute('data-width') || '100';
    controls.querySelector('.size-select').value = currentWidth;
};

// Hide image controls
const hideImageControls = () => {
    const existingControls = quill.root.querySelector('.floating-image-controls');
    if (existingControls) {
        existingControls.remove();
    }
};

// Update image alignment
const updateImageAlignment = (img, align) => {
    img.setAttribute('data-align', align);

    // Remove existing alignment classes
    img.classList.remove('img-left', 'img-center', 'img-right');

    switch(align) {
        case 'left':
            img.classList.add('img-left');
            img.style.float = 'left';
            img.style.margin = '0.5rem 1rem 0.5rem 0';
            img.style.display = 'block';
            break;
        case 'right':
            img.classList.add('img-right');
            img.style.float = 'right';
            img.style.margin = '0.5rem 0 0.5rem 1rem';
            img.style.display = 'block';
            break;
        case 'center':
        default:
            img.classList.add('img-center');
            img.style.float = 'none';
            img.style.margin = '1rem auto';
            img.style.display = 'block';
            break;
    }
};

// Update image size
const updateImageSize = (img, width) => {
    img.setAttribute('data-width', width);
    img.style.width = width + '%';
    img.style.maxWidth = '100%';
};

const insertTable = () => {
    const rows = prompt('Number of rows:', '3');
    const cols = prompt('Number of columns:', '3');

    if (rows && cols && rows > 0 && cols > 0) {
        let tableHTML = '<table style="border-collapse: collapse; width: 100%; border: 1px solid #ccc;">';

        for (let i = 0; i < parseInt(rows); i++) {
            tableHTML += '<tr>';
            for (let j = 0; j < parseInt(cols); j++) {
                tableHTML += '<td style="border: 1px solid #ccc; padding: 8px; min-width: 50px;">&nbsp;</td>';
            }
            tableHTML += '</tr>';
        }
        tableHTML += '</table><p><br></p>';

        const range = quill.getSelection();
        if (range) {
            quill.clipboard.dangerouslyPasteHTML(range.index, tableHTML);
        }
    }
};

// CTA Modal state
const showCTAModal = ref(false);
const ctaForm = ref({
    title: 'Want to Boost Your Business with AI?',
    description: 'Let Jellyfish Technologies build powerful generative and predictive AI solutions to streamline your operations and increase ROI.',
    buttonText: 'Schedule A Free Consultation',
    buttonUrl: '/contact'
});
let ctaInsertRange = null;

const insertCTA = () => {
    ctaInsertRange = quill.getSelection();
    if (ctaInsertRange) {
        showCTAModal.value = true;
    }
};

const submitCTA = () => {
    if (ctaInsertRange) {
        const ctaData = { ...ctaForm.value };
        quill.insertEmbed(ctaInsertRange.index, 'cta', ctaData);
        quill.setSelection(ctaInsertRange.index + 1);
    }
    showCTAModal.value = false;
    ctaInsertRange = null;
};

const cancelCTA = () => {
    showCTAModal.value = false;
    ctaInsertRange = null;
};

let htmlViewMode = false;
let originalContent = '';
let urlMappings = new Map(); // Store URL mappings for shorter placeholders

// Function to create shorter placeholders for long URLs
const createImagePlaceholders = (html) => {
    urlMappings.clear();
    let imageCounter = 1;

    return html.replace(/src="data:image\/[^"]*"/g, (match) => {
        const placeholder = `[IMAGE_${imageCounter}]`;
        urlMappings.set(placeholder, match);
        imageCounter++;
        return `src="${placeholder}"`;
    });
};

// Function to restore original URLs from placeholders
const restoreImageUrls = (html) => {
    let restoredHtml = html;
    urlMappings.forEach((originalUrl, placeholder) => {
        restoredHtml = restoredHtml.replace(new RegExp(`src="${placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'), originalUrl);
    });
    return restoredHtml;
};

// Function to add helpful template for styling
const addImageStyleTemplate = (html) => {
    const needsTemplate = html.includes('[IMAGE_') || html.length < 200;

    if (needsTemplate) {
        const template = `<!--
HTML/CSS STYLING GUIDE:
=======================

IMAGES:
- Replace [IMAGE_X] with your image URL
- Add inline styles: style="width: 50%; float: left; margin: 0 20px 20px 0;"

COMMON CSS PROPERTIES:
- width: 50%, 300px, auto
- height: auto, 200px
- float: left, right, none
- margin: 10px, 1rem
- padding: 10px 20px
- border-radius: 8px
- box-shadow: 0 4px 8px rgba(0,0,0,0.1)
- background-color: #f5f5f5
- text-align: center, left, right
- font-size: 16px, 1.2rem
- color: #333, red, blue
- border: 1px solid #ddd

CUSTOM CONTAINERS:
<div style="padding: 20px; background: #f8f9fa; border-left: 4px solid #007bff; margin: 20px 0;">
  <h3 style="color: #007bff; margin-top: 0;">Info Box</h3>
  <p>Your content here...</p>
</div>

BUTTONS:
<a href="/contact" style="display: inline-block; padding: 12px 24px; background: #007bff; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">Call to Action</a>

TABLES:
<table style="width: 100%; border-collapse: collapse;">
  <tr><th style="border: 1px solid #ddd; padding: 8px; background: #f2f2f2;">Header</th></tr>
  <tr><td style="border: 1px solid #ddd; padding: 8px;">Content</td></tr>
</table>

NOTE: When you switch back to Visual mode, all your custom HTML/CSS will be preserved!
-->

${html}`;
        return template;
    }
    return html;
};

const toggleHTMLView = () => {
    if (!quill) return; // Safety check

    if (!htmlViewMode) {
        // Switch to HTML view
        originalContent = quill.root.innerHTML;

        // Create shortened version with placeholders
        const shortenedContent = createImagePlaceholders(originalContent);
        const contentWithTemplate = addImageStyleTemplate(shortenedContent);

        const textarea = document.createElement('textarea');
        textarea.value = contentWithTemplate;
        textarea.style.width = '100%';
        textarea.style.height = props.height;
        textarea.style.fontFamily = '"Fira Code", "Consolas", "Monaco", monospace';
        textarea.style.fontSize = '13px';
        textarea.style.lineHeight = '1.6';
        textarea.style.border = 'none';
        textarea.style.outline = 'none';
        textarea.style.resize = 'vertical';
        textarea.style.padding = '16px';
        textarea.style.backgroundColor = '#f8f9fa';
        textarea.style.color = '#333';

        // Replace editor with textarea
        quill.root.style.display = 'none';
        quill.root.parentNode.appendChild(textarea);

        // Update button text
        const htmlButton = document.querySelector('.ql-html-view');
        if (htmlButton) {
            htmlButton.textContent = 'Visual';
            htmlButton.title = 'Switch to visual editor';
        }

        htmlViewMode = true;

        // Listen for changes in HTML
        textarea.addEventListener('input', () => {
            // Restore URLs before saving
            const restoredContent = restoreImageUrls(textarea.value);
            emit('update:modelValue', restoredContent);
        });

    } else {
        // Switch back to visual view
        const textarea = quill.root.parentNode.querySelector('textarea');
        if (textarea) {
            // Get the updated HTML content
            let restoredContent = restoreImageUrls(textarea.value);

            // Remove HTML comments (template guides)
            restoredContent = restoredContent.replace(/<!--[\s\S]*?-->/g, '').trim();

            // Method 1: Try using dangerouslyPasteHTML (preserves styles)
            try {
                // Clear editor content
                quill.setContents([{ insert: '' }]);

                // Insert the HTML content with preserved styling
                if (restoredContent) {
                    quill.clipboard.dangerouslyPasteHTML(0, restoredContent);
                }

                // Emit the updated content
                emit('update:modelValue', restoredContent);
            } catch (error) {
                // Method 2: Fallback to direct innerHTML (might strip some styles)
                console.warn('dangerouslyPasteHTML failed, using direct innerHTML:', error);
                try {
                    quill.root.innerHTML = restoredContent || '<p><br></p>';
                    emit('update:modelValue', restoredContent);
                } catch (innerError) {
                    // Method 3: Final fallback with text content
                    console.warn('Direct innerHTML failed, using text fallback:', innerError);
                    quill.setText(restoredContent || '');
                    emit('update:modelValue', restoredContent);
                }
            }

            textarea.remove();

            // Re-add controls to images after a short delay
            setTimeout(() => {
                addImageControls();
            }, 300);
        }

        quill.root.style.display = '';

        // Update button text
        const htmlButton = document.querySelector('.ql-html-view');
        if (htmlButton) {
            htmlButton.textContent = 'HTML';
            htmlButton.title = 'Edit HTML source';
        }

        htmlViewMode = false;
    }
};

const addCustomButtons = () => {
    // Add custom table button
    const tableButton = document.querySelector('.ql-table');
    if (tableButton) {
        tableButton.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 18 18">
                <rect class="ql-stroke" height="12" width="12" x="3" y="3"></rect>
                <rect class="ql-fill" height="2" width="3" x="5" y="5"></rect>
                <rect class="ql-fill" height="2" width="4" x="9" y="5"></rect>
                <rect class="ql-fill" height="2" width="3" x="5" y="8"></rect>
                <rect class="ql-fill" height="2" width="4" x="9" y="8"></rect>
                <rect class="ql-fill" height="2" width="3" x="5" y="11"></rect>
                <rect class="ql-fill" height="2" width="4" x="9" y="11"></rect>
            </svg>
        `;
        tableButton.title = 'Insert table';
    }

    // Add custom HTML view button
    const htmlButton = document.querySelector('.ql-html-view');
    if (htmlButton) {
        htmlButton.innerHTML = 'HTML';
        htmlButton.title = 'Edit HTML source';
        htmlButton.style.width = 'auto';
        htmlButton.style.padding = '0 8px';
        htmlButton.style.fontSize = '12px';
        htmlButton.style.fontWeight = 'bold';
    }

    // Add custom CTA button
    const ctaButton = document.querySelector('.ql-cta-insert');
    if (ctaButton) {
        ctaButton.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
        `;
        ctaButton.title = 'Insert CTA';
        ctaButton.style.background = '#FF3621';
        ctaButton.style.color = 'white';
        ctaButton.style.borderRadius = '4px';
        ctaButton.style.border = 'none';
        ctaButton.style.padding = '6px';
        ctaButton.style.margin = '0 2px';
    }
};

// Watch for external changes to modelValue
watch(() => props.modelValue, (newValue) => {
    if (quill && !htmlViewMode) {
        const currentContent = quill.root.innerHTML;
        if (currentContent !== newValue) {
            quill.root.innerHTML = newValue || '';
        }
    }
});

onMounted(() => {
    initializeEditor();
});

onUnmounted(() => {
    if (quill) {
        quill = null;
    }
});
</script>

<style scoped>
.quill-editor-wrapper {
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    height: 600px;
    display: flex;
    flex-direction: column;
}

:deep(.ql-toolbar) {
    border: none;
    border-bottom: 1px solid #e5e7eb;
    background: #f9fafb;
    padding: 12px;
    border-radius: 8px 8px 0 0;
    margin: 0;
    flex-shrink: 0;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: box-shadow 0.2s ease;
}

:deep(.ql-toolbar:hover) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

:deep(.ql-container) {
    border: none;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    font-size: 16px;
    line-height: 1.6;
    border-radius: 0 0 8px 8px;
    overflow-y: auto;
    flex: 1;
    height: 0;
}

:deep(.ql-editor) {
    padding: 16px;
    min-height: calc(100vh - 200px);
    height: auto;
}

:deep(.ql-editor.ql-blank::before) {
    color: #9ca3af;
    font-style: italic;
}

/* Table styling */
:deep(.ql-editor table) {
    border-collapse: collapse;
    width: 100%;
    margin: 12px 0;
}

:deep(.ql-editor table td),
:deep(.ql-editor table th) {
    border: 1px solid #d1d5db;
    padding: 8px 12px;
    min-width: 50px;
    vertical-align: top;
}

:deep(.ql-editor table th) {
    background-color: #f3f4f6;
    font-weight: 600;
}

/* List styling */
:deep(.ql-editor ul),
:deep(.ql-editor ol) {
    padding-left: 24px;
    margin: 12px 0;
}

:deep(.ql-editor li) {
    margin: 4px 0;
}

/* Code block styling */
:deep(.ql-editor .ql-code-block-container) {
    background: #f3f4f6;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    margin: 12px 0;
}

:deep(.ql-editor .ql-code-block) {
    background: transparent;
    border: none;
    color: #374151;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    padding: 12px;
}

/* Blockquote styling */
:deep(.ql-editor blockquote) {
    border-left: 4px solid #6b7280;
    margin: 16px 0;
    padding: 8px 0 8px 16px;
    background: #f9fafb;
    font-style: italic;
}

/* Image styling */
:deep(.ql-editor img) {
    max-width: 100%;
    height: auto;
    margin: 12px 0;
    border-radius: 6px;
}

/* Link styling */
:deep(.ql-editor a) {
    color: #3b82f6;
    text-decoration: underline;
}

:deep(.ql-editor a:hover) {
    color: #1d4ed8;
}

/* Custom button styling */
:deep(.ql-html-view) {
    background: none;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    color: #374151;
    cursor: pointer;
    font-family: inherit;
    padding: 4px 8px;
    margin-left: 8px;
}

:deep(.ql-html-view:hover) {
    background: #f3f4f6;
}

/* CTA button styling */
:deep(.ql-cta-insert) {
    background: #FF3621 !important;
    border: none !important;
    border-radius: 4px !important;
    color: white !important;
    cursor: pointer;
    padding: 6px !important;
    margin: 0 2px !important;
}

:deep(.ql-cta-insert:hover) {
    background: #e53e3e !important;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* CTA content styling in editor */
:deep(.ql-editor .blog-cta-wrapper),
:deep(.ql-editor div.blog-cta-wrapper) {
    margin: 20px 0 !important;
    padding: 0 !important;
    border: 2px dashed #FF3621 !important;
    border-radius: 8px !important;
    position: relative !important;
    display: block !important;
}

:deep(.ql-editor .blog-cta-wrapper::before),
:deep(.ql-editor div.blog-cta-wrapper::before) {
    content: 'CTA Block' !important;
    position: absolute !important;
    top: -10px !important;
    left: 10px !important;
    background: #FF3621 !important;
    color: white !important;
    padding: 2px 8px !important;
    font-size: 12px !important;
    border-radius: 4px !important;
    font-weight: bold !important;
    z-index: 20 !important;
}

:deep(.ql-editor .blog-cta-container),
:deep(.ql-editor div.blog-cta-container) {
    position: relative !important;
    border-radius: 20px !important;
    padding: 40px 24px !important;
    text-align: center !important;
    overflow: hidden !important;
    min-height: 250px !important;
    background-color: #F6F6E0 !important;
    background-image: none !important;
    display: block !important;
}

:deep(.ql-editor .blog-cta-content),
:deep(.ql-editor div.blog-cta-content) {
    position: relative !important;
    z-index: 10 !important;
    max-width: 600px !important;
    margin: 0 auto !important;
    display: block !important;
}

:deep(.ql-editor .blog-cta-container h2),
:deep(.ql-editor div.blog-cta-container h2) {
    color: #121212 !important;
    font-weight: 600 !important;
    font-size: 28px !important;
    line-height: 1.2 !important;
    margin-bottom: 12px !important;
    margin-top: 0 !important;
    text-shadow: none !important;
    display: block !important;
}

:deep(.ql-editor .blog-cta-container p),
:deep(.ql-editor div.blog-cta-container p) {
    color: #666666 !important;
    font-size: 16px !important;
    line-height: 1.5 !important;
    margin-bottom: 24px !important;
    margin-top: 0 !important;
    text-shadow: none !important;
    display: block !important;
}

:deep(.ql-editor .blog-cta-container a),
:deep(.ql-editor div.blog-cta-container a) {
    display: inline-flex !important;
    align-items: center !important;
    gap: 8px !important;
    padding: 10px 20px !important;
    background-color: black !important;
    color: white !important;
    text-decoration: none !important;
    border-radius: 50px !important;
    font-weight: bold !important;
    font-size: 14px !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
    transition: all 0.3s ease !important;
    border: 2px solid black !important;
    text-shadow: none !important;
}

:deep(.ql-editor .blog-cta-container a:hover),
:deep(.ql-editor div.blog-cta-container a:hover) {
    background-color: transparent !important;
    color: black !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2) !important;
    text-decoration: none !important;
}

:deep(.ql-editor .blog-cta-container a span),
:deep(.ql-editor div.blog-cta-container a span) {
    color: inherit !important;
    text-decoration: none !important;
}

:deep(.ql-editor .blog-cta-container a svg),
:deep(.ql-editor div.blog-cta-container a svg) {
    fill: none !important;
    stroke: currentColor !important;
}

/* Focus styling */
.quill-editor-wrapper:focus-within {
    border-color: #FF3621;
    box-shadow: 0 0 0 3px rgba(255, 54, 33, 0.1);
}

/* Enhanced Image Styling */
:deep(.ql-editor img[data-has-controls]) {
    cursor: pointer;
    transition: all 0.3s ease;
}

:deep(.ql-editor img[data-has-controls]:hover) {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15) !important;
    transform: translateY(-2px);
}

/* Floating Image Controls */
:deep(.ql-editor .floating-image-controls) {
    position: absolute;
    z-index: 1000;
    pointer-events: all;
}

:deep(.ql-editor .image-toolbar) {
    background: rgba(0, 0, 0, 0.85);
    border-radius: 6px;
    padding: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

:deep(.ql-editor .image-btn) {
    background: rgba(255, 255, 255, 0.15);
    border: none;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    padding: 5px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
}

:deep(.ql-editor .image-btn:hover) {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.1);
}

:deep(.ql-editor .image-btn.delete-image:hover) {
    background: rgba(239, 68, 68, 0.8);
}

:deep(.ql-editor .size-select) {
    background: rgba(255, 255, 255, 0.15);
    border: none;
    border-radius: 3px;
    color: white;
    cursor: pointer;
    padding: 3px 6px;
    font-size: 11px;
    outline: none;
    min-width: 50px;
}

:deep(.ql-editor .size-select:hover) {
    background: rgba(255, 255, 255, 0.25);
}

:deep(.ql-editor .size-select option) {
    background: #333;
    color: white;
}

/* Image Alignment Classes */
:deep(.ql-editor .img-left) {
    float: left;
    margin: 0.5rem 1rem 0.5rem 0;
    clear: left;
}

:deep(.ql-editor .img-right) {
    float: right;
    margin: 0.5rem 0 0.5rem 1rem;
    clear: right;
}

:deep(.ql-editor .img-center) {
    display: block;
    margin: 1rem auto;
    float: none;
    clear: both;
}

/* Clear floats */
:deep(.ql-editor):after {
    content: "";
    display: table;
    clear: both;
}

/* Raw HTML content preservation */
:deep(.ql-editor [data-raw-html]) {
    all: unset;
    display: block;
}

:deep(.ql-editor .rawhtml) {
    margin: 12px 0;
    padding: 0;
    border: 1px dashed #ccc;
    border-radius: 4px;
    position: relative;
}

:deep(.ql-editor .rawhtml::before) {
    content: 'Custom HTML';
    position: absolute;
    top: -8px;
    left: 8px;
    background: white;
    color: #666;
    font-size: 10px;
    padding: 0 4px;
    font-weight: bold;
    z-index: 1;
}

/* Responsive toolbar */
:deep(.ql-toolbar) {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}

@media (max-width: 768px) {
    :deep(.ql-toolbar .ql-formats) {
        margin-right: 8px;
        margin-bottom: 4px;
    }

    :deep(.ql-editor .image-toolbar) {
        flex-direction: column;
        padding: 6px;
        gap: 4px;
    }

    :deep(.ql-editor .image-size-control) {
        font-size: 10px;
    }

    :deep(.ql-editor .size-select) {
        padding: 2px 4px;
        font-size: 10px;
    }
}
</style>