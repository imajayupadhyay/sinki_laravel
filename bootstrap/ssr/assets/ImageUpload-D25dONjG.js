import { ref, watch, onMounted, onUnmounted, mergeProps, useSSRContext, computed } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import Quill from "quill";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
const _sfc_main$1 = {
  __name: "QuillEditor",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Start writing your content..."
    },
    height: {
      type: String,
      default: "400px"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editorRef = ref(null);
    let quill = null;
    const initializeEditor = () => {
      if (!editorRef.value) return;
      const options = {
        theme: "snow",
        placeholder: props.placeholder,
        modules: {
          toolbar: {
            container: [
              // Format headers
              [{ "header": [1, 2, 3, 4, 5, 6, false] }],
              // Font styling
              [{ "font": [] }],
              [{ "size": ["small", false, "large", "huge"] }],
              // Text formatting
              ["bold", "italic", "underline", "strike"],
              [{ "color": [] }, { "background": [] }],
              // Text alignment
              [{ "align": [] }],
              // Lists
              [{ "list": "ordered" }, { "list": "bullet" }, { "list": "check" }],
              [{ "indent": "-1" }, { "indent": "+1" }],
              // Quotes and code
              ["blockquote", "code-block"],
              // Links and media
              ["link", "image", "video"],
              // Table (we'll add custom implementation)
              ["table"],
              // Clean formatting
              ["clean"],
              // Custom HTML view button
              ["html-view"]
            ],
            handlers: {
              "table": function() {
                insertTable();
              },
              "html-view": function() {
                toggleHTMLView();
              }
            }
          },
          history: {
            delay: 1e3,
            maxStack: 100,
            userOnly: true
          }
        }
      };
      quill = new Quill(editorRef.value, options);
      if (props.modelValue) {
        quill.root.innerHTML = props.modelValue;
      }
      quill.on("text-change", () => {
        const html = quill.root.innerHTML;
        emit("update:modelValue", html === "<p><br></p>" ? "" : html);
      });
      quill.root.style.minHeight = props.height;
      addCustomButtons();
    };
    const insertTable = () => {
      const rows = prompt("Number of rows:", "3");
      const cols = prompt("Number of columns:", "3");
      if (rows && cols && rows > 0 && cols > 0) {
        let tableHTML = '<table style="border-collapse: collapse; width: 100%; border: 1px solid #ccc;">';
        for (let i = 0; i < parseInt(rows); i++) {
          tableHTML += "<tr>";
          for (let j = 0; j < parseInt(cols); j++) {
            tableHTML += '<td style="border: 1px solid #ccc; padding: 8px; min-width: 50px;">&nbsp;</td>';
          }
          tableHTML += "</tr>";
        }
        tableHTML += "</table><p><br></p>";
        const range = quill.getSelection();
        if (range) {
          quill.clipboard.dangerouslyPasteHTML(range.index, tableHTML);
        }
      }
    };
    let htmlViewMode = false;
    let originalContent = "";
    const toggleHTMLView = () => {
      if (!htmlViewMode) {
        originalContent = quill.root.innerHTML;
        const textarea = document.createElement("textarea");
        textarea.value = originalContent;
        textarea.style.width = "100%";
        textarea.style.height = props.height;
        textarea.style.fontFamily = "monospace";
        textarea.style.fontSize = "14px";
        textarea.style.border = "none";
        textarea.style.outline = "none";
        textarea.style.resize = "vertical";
        textarea.style.padding = "12px";
        quill.root.style.display = "none";
        quill.root.parentNode.appendChild(textarea);
        const htmlButton = document.querySelector(".ql-html-view");
        if (htmlButton) {
          htmlButton.textContent = "Visual";
          htmlButton.title = "Switch to visual editor";
        }
        htmlViewMode = true;
        textarea.addEventListener("input", () => {
          emit("update:modelValue", textarea.value);
        });
      } else {
        const textarea = quill.root.parentNode.querySelector("textarea");
        if (textarea) {
          quill.root.innerHTML = textarea.value;
          textarea.remove();
        }
        quill.root.style.display = "";
        const htmlButton = document.querySelector(".ql-html-view");
        if (htmlButton) {
          htmlButton.textContent = "HTML";
          htmlButton.title = "Edit HTML source";
        }
        htmlViewMode = false;
      }
    };
    const addCustomButtons = () => {
      const tableButton = document.querySelector(".ql-table");
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
        tableButton.title = "Insert table";
      }
      const htmlButton = document.querySelector(".ql-html-view");
      if (htmlButton) {
        htmlButton.innerHTML = "HTML";
        htmlButton.title = "Edit HTML source";
        htmlButton.style.width = "auto";
        htmlButton.style.padding = "0 8px";
        htmlButton.style.fontSize = "12px";
        htmlButton.style.fontWeight = "bold";
      }
    };
    watch(() => props.modelValue, (newValue) => {
      if (quill && !htmlViewMode) {
        const currentContent = quill.root.innerHTML;
        if (currentContent !== newValue) {
          quill.root.innerHTML = newValue || "";
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "quill-editor-wrapper" }, _attrs))} data-v-4da20d66><div class="quill-editor" data-v-4da20d66></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/QuillEditor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const QuillEditor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4da20d66"]]);
const _sfc_main = {
  __name: "ImageUpload",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Featured Image"
    },
    altText: {
      type: String,
      default: "Featured image"
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isDragging = ref(false);
    const isUploading = ref(false);
    const errorMessage = ref("");
    const useUrl = ref(false);
    const urlInput = ref("");
    ref(null);
    const imageUrl = computed(() => props.modelValue);
    const hasError = computed(() => !!errorMessage.value);
    const filename = computed(() => {
      if (imageUrl.value) {
        const url = imageUrl.value;
        const parts = url.split("/");
        return parts[parts.length - 1];
      }
      return "";
    });
    watch(urlInput, (newUrl) => {
      if (useUrl.value && newUrl) {
        emit("update:modelValue", newUrl);
        errorMessage.value = "";
      }
    });
    watch(useUrl, (newValue) => {
      if (newValue) {
        urlInput.value = imageUrl.value;
      } else {
        urlInput.value = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "image-upload-wrapper" }, _attrs))} data-v-a78007fe><label class="block text-sm font-medium text-gray-700 mb-2" data-v-a78007fe>${ssrInterpolate(__props.label)}</label><div class="${ssrRenderClass([{ "border-red-500": hasError.value, "border-brand-red": isDragging.value }, "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors"])}" data-v-a78007fe>`);
      if (imageUrl.value) {
        _push(`<div class="mb-4" data-v-a78007fe><div class="relative inline-block" data-v-a78007fe><img${ssrRenderAttr("src", imageUrl.value)}${ssrRenderAttr("alt", __props.altText)} class="max-w-full h-48 object-cover rounded-lg shadow-md" data-v-a78007fe><button type="button" class="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors" title="Remove image" data-v-a78007fe><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-a78007fe><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-a78007fe></path></svg></button></div><p class="text-sm text-gray-600 mt-2" data-v-a78007fe>${ssrInterpolate(filename.value)}</p></div>`);
      } else {
        _push(`<div data-v-a78007fe><svg class="mx-auto h-12 w-12 text-gray-400 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48" data-v-a78007fe><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a78007fe></path></svg><div class="text-sm text-gray-600" data-v-a78007fe><label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-brand-red hover:text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-red" data-v-a78007fe><span data-v-a78007fe>Upload a file</span><input id="file-upload" type="file" class="sr-only" accept="image/*" data-v-a78007fe></label><p class="pl-1" data-v-a78007fe>or drag and drop</p></div><p class="text-xs text-gray-500 mt-2" data-v-a78007fe>PNG, JPG, GIF, WebP up to 5MB</p></div>`);
      }
      _push(`</div><div class="mt-4" data-v-a78007fe><label class="flex items-center" data-v-a78007fe><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(useUrl.value) ? ssrLooseContain(useUrl.value, null) : useUrl.value) ? " checked" : ""} class="rounded border-gray-300 text-brand-red focus:border-brand-red focus:ring-brand-red" data-v-a78007fe><span class="ml-2 text-sm text-gray-600" data-v-a78007fe>Or use image URL instead</span></label></div>`);
      if (useUrl.value) {
        _push(`<div class="mt-3" data-v-a78007fe><input${ssrRenderAttr("value", urlInput.value)} type="url" placeholder="https://example.com/image.jpg" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent" data-v-a78007fe></div>`);
      } else {
        _push(`<!---->`);
      }
      if (errorMessage.value) {
        _push(`<div class="text-red-600 text-sm mt-2" data-v-a78007fe>${ssrInterpolate(errorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (isUploading.value) {
        _push(`<div class="mt-2" data-v-a78007fe><div class="flex items-center text-sm text-gray-600" data-v-a78007fe><svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-brand-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-a78007fe><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-a78007fe></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-a78007fe></path></svg> Uploading... </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ImageUpload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImageUpload = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a78007fe"]]);
export {
  ImageUpload as I,
  QuillEditor as Q
};
