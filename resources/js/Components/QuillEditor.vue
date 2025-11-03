<template>
    <div class="quill-editor-wrapper">
        <div ref="editorRef" class="quill-editor"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted, nextTick } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

// Custom CTA Blot
const BlockEmbed = Quill.import('blots/block/embed');

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
    if (!editorRef.value) return;

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

    // Listen for content changes
    quill.on('text-change', () => {
        const html = quill.root.innerHTML;
        emit('update:modelValue', html === '<p><br></p>' ? '' : html);
    });

    // Set editor height
    quill.root.style.minHeight = props.height;

    // Add custom table functionality
    addCustomButtons();
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

const insertCTA = () => {
    const title = prompt('CTA Title:', 'Want to Boost Your Business with AI?') || 'Want to Boost Your Business with AI?';
    const description = prompt('CTA Description:', 'Let Jellyfish Technologies build powerful generative and predictive AI solutions to streamline your operations and increase ROI.') || 'Let Jellyfish Technologies build powerful generative and predictive AI solutions to streamline your operations and increase ROI.';
    const buttonText = prompt('Button Text:', 'Schedule A Free Consultation') || 'Schedule A Free Consultation';
    const buttonUrl = prompt('Button URL:', '/contact') || '/contact';

    const ctaData = {
        title,
        description,
        buttonText,
        buttonUrl
    };

    const range = quill.getSelection();
    if (range) {
        quill.insertEmbed(range.index, 'cta', ctaData);
        quill.setSelection(range.index + 1);
    }
};

let htmlViewMode = false;
let originalContent = '';

// Removed JavaScript sticky functionality - using pure CSS flexbox solution

const toggleHTMLView = () => {
    if (!htmlViewMode) {
        // Switch to HTML view
        originalContent = quill.root.innerHTML;
        const textarea = document.createElement('textarea');
        textarea.value = originalContent;
        textarea.style.width = '100%';
        textarea.style.height = props.height;
        textarea.style.fontFamily = 'monospace';
        textarea.style.fontSize = '14px';
        textarea.style.border = 'none';
        textarea.style.outline = 'none';
        textarea.style.resize = 'vertical';
        textarea.style.padding = '12px';

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
            emit('update:modelValue', textarea.value);
        });

    } else {
        // Switch back to visual view
        const textarea = quill.root.parentNode.querySelector('textarea');
        if (textarea) {
            quill.root.innerHTML = textarea.value;
            textarea.remove();
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
}
</style>