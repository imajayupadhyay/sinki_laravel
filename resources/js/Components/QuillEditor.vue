<template>
    <div class="quill-editor-wrapper">
        <div ref="editorRef" class="quill-editor"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

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
                    ['html-view']
                ],
                handlers: {
                    'table': function() {
                        insertTable();
                    },
                    'html-view': function() {
                        toggleHTMLView();
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

let htmlViewMode = false;
let originalContent = '';

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
}

:deep(.ql-toolbar) {
    border: none;
    border-bottom: 1px solid #e5e7eb;
    background: #f9fafb;
    padding: 12px;
}

:deep(.ql-container) {
    border: none;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
    font-size: 16px;
    line-height: 1.6;
}

:deep(.ql-editor) {
    padding: 16px;
    min-height: 400px;
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