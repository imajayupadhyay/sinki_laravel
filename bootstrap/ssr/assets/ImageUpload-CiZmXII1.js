import { ref, watch, onMounted, onUnmounted, mergeProps, useSSRContext, computed } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
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
    const BlockEmbed = Quill.import("blots/block/embed");
    class CTABlot extends BlockEmbed {
      static create(value) {
        const node = super.create();
        node.setAttribute("data-cta", JSON.stringify(value));
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
        const data = node.getAttribute("data-cta");
        return data ? JSON.parse(data) : {};
      }
      static formats(node) {
        return this.value(node);
      }
    }
    CTABlot.blotName = "cta";
    CTABlot.tagName = "div";
    CTABlot.className = "blog-cta-embed";
    Quill.register(CTABlot);
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
              ["html-view"],
              // Custom CTA button
              ["cta-insert"]
            ],
            handlers: {
              "image": function() {
                insertEnhancedImage();
              },
              "table": function() {
                insertTable();
              },
              "html-view": function() {
                toggleHTMLView();
              },
              "cta-insert": function() {
                insertCTA();
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
      setTimeout(() => {
        addImageControls();
      }, 500);
    };
    const insertEnhancedImage = () => {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.addEventListener("change", function() {
        const file = input.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            const range = quill.getSelection();
            if (range) {
              quill.insertEmbed(range.index, "image", e.target.result);
              setTimeout(() => {
                const newImage = quill.root.querySelector(`img[src="${e.target.result}"]`);
                if (newImage && !newImage.closest(".enhanced-image-wrapper")) {
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
    const addImageControls = () => {
      const images = quill.root.querySelectorAll("img");
      images.forEach((img) => {
        if (!img.closest(".enhanced-image-wrapper") && !img.querySelector(".image-controls")) {
          addControlsToImage(img);
        }
      });
    };
    const addControlsToImage = (img) => {
      try {
        if (img.hasAttribute("data-has-controls")) {
          return;
        }
        img.setAttribute("data-has-controls", "true");
        img.setAttribute("data-align", img.getAttribute("data-align") || "center");
        img.setAttribute("data-width", img.getAttribute("data-width") || "100");
        img.style.position = "relative";
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        img.style.borderRadius = "8px";
        img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        img.style.transition = "all 0.3s ease";
        updateImageAlignment(img, "center");
        img.addEventListener("mouseenter", () => showImageControls(img));
        img.addEventListener("mouseleave", () => hideImageControls(img));
      } catch (error) {
        console.error("Error adding image controls:", error);
      }
    };
    const showImageControls = (img) => {
      hideImageControls();
      const controls = document.createElement("div");
      controls.className = "floating-image-controls";
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
      const rect = img.getBoundingClientRect();
      const editorRect = quill.root.getBoundingClientRect();
      controls.style.position = "absolute";
      controls.style.top = rect.top - editorRect.top - 40 + "px";
      controls.style.left = rect.left - editorRect.left + "px";
      controls.style.zIndex = "1000";
      quill.root.appendChild(controls);
      controls.querySelector(".align-left").addEventListener("click", () => {
        updateImageAlignment(img, "left");
        hideImageControls();
      });
      controls.querySelector(".align-center").addEventListener("click", () => {
        updateImageAlignment(img, "center");
        hideImageControls();
      });
      controls.querySelector(".align-right").addEventListener("click", () => {
        updateImageAlignment(img, "right");
        hideImageControls();
      });
      controls.querySelector(".size-select").addEventListener("change", (e) => {
        updateImageSize(img, e.target.value);
      });
      controls.querySelector(".delete-image").addEventListener("click", () => {
        img.remove();
        hideImageControls();
      });
      const currentWidth = img.getAttribute("data-width") || "100";
      controls.querySelector(".size-select").value = currentWidth;
    };
    const hideImageControls = (img) => {
      const existingControls = quill.root.querySelector(".floating-image-controls");
      if (existingControls) {
        existingControls.remove();
      }
    };
    const updateImageAlignment = (img, align) => {
      img.setAttribute("data-align", align);
      img.classList.remove("img-left", "img-center", "img-right");
      switch (align) {
        case "left":
          img.classList.add("img-left");
          img.style.float = "left";
          img.style.margin = "0.5rem 1rem 0.5rem 0";
          img.style.display = "block";
          break;
        case "right":
          img.classList.add("img-right");
          img.style.float = "right";
          img.style.margin = "0.5rem 0 0.5rem 1rem";
          img.style.display = "block";
          break;
        case "center":
        default:
          img.classList.add("img-center");
          img.style.float = "none";
          img.style.margin = "1rem auto";
          img.style.display = "block";
          break;
      }
    };
    const updateImageSize = (img, width) => {
      img.setAttribute("data-width", width);
      img.style.width = width + "%";
      img.style.maxWidth = "100%";
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
    const showCTAModal = ref(false);
    const ctaForm = ref({
      title: "Want to Boost Your Business with AI?",
      description: "Let Jellyfish Technologies build powerful generative and predictive AI solutions to streamline your operations and increase ROI.",
      buttonText: "Schedule A Free Consultation",
      buttonUrl: "/contact"
    });
    let ctaInsertRange = null;
    const insertCTA = () => {
      ctaInsertRange = quill.getSelection();
      if (ctaInsertRange) {
        showCTAModal.value = true;
      }
    };
    let htmlViewMode = false;
    let originalContent = "";
    let urlMappings = /* @__PURE__ */ new Map();
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
    const restoreImageUrls = (html) => {
      let restoredHtml = html;
      urlMappings.forEach((originalUrl, placeholder) => {
        restoredHtml = restoredHtml.replace(new RegExp(`src="${placeholder.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`, "g"), originalUrl);
      });
      return restoredHtml;
    };
    const addImageStyleTemplate = (html) => {
      if (html.includes("[IMAGE_")) {
        const template = `<!--
IMAGE STYLING GUIDE:
- Replace [IMAGE_X] with your image URL
- Add inline styles for custom sizing:
  style="width: 300px; height: 200px; float: left; margin: 10px;"
- Common properties:
  * width: 50%, 300px, auto
  * height: auto, 200px
  * float: left, right, none
  * margin: 10px, 1rem
  * border-radius: 8px
  * box-shadow: 0 4px 8px rgba(0,0,0,0.1)

Example: <img src="your-url-here" style="width: 50%; float: left; margin: 0 20px 20px 0; border-radius: 8px;" alt="description">
-->

${html}`;
        return template;
      }
      return html;
    };
    const toggleHTMLView = () => {
      if (!htmlViewMode) {
        originalContent = quill.root.innerHTML;
        const shortenedContent = createImagePlaceholders(originalContent);
        const contentWithTemplate = addImageStyleTemplate(shortenedContent);
        const textarea = document.createElement("textarea");
        textarea.value = contentWithTemplate;
        textarea.style.width = "100%";
        textarea.style.height = props.height;
        textarea.style.fontFamily = '"Fira Code", "Consolas", "Monaco", monospace';
        textarea.style.fontSize = "13px";
        textarea.style.lineHeight = "1.6";
        textarea.style.border = "none";
        textarea.style.outline = "none";
        textarea.style.resize = "vertical";
        textarea.style.padding = "16px";
        textarea.style.backgroundColor = "#f8f9fa";
        textarea.style.color = "#333";
        quill.root.style.display = "none";
        quill.root.parentNode.appendChild(textarea);
        const htmlButton = document.querySelector(".ql-html-view");
        if (htmlButton) {
          htmlButton.textContent = "Visual";
          htmlButton.title = "Switch to visual editor";
        }
        htmlViewMode = true;
        textarea.addEventListener("input", () => {
          const restoredContent = restoreImageUrls(textarea.value);
          emit("update:modelValue", restoredContent);
        });
      } else {
        const textarea = quill.root.parentNode.querySelector("textarea");
        if (textarea) {
          const restoredContent = restoreImageUrls(textarea.value);
          quill.root.innerHTML = restoredContent;
          textarea.remove();
          setTimeout(() => {
            addImageControls();
          }, 200);
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
      const ctaButton = document.querySelector(".ql-cta-insert");
      if (ctaButton) {
        ctaButton.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
        `;
        ctaButton.title = "Insert CTA";
        ctaButton.style.background = "#FF3621";
        ctaButton.style.color = "white";
        ctaButton.style.borderRadius = "4px";
        ctaButton.style.border = "none";
        ctaButton.style.padding = "6px";
        ctaButton.style.margin = "0 2px";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "quill-editor-wrapper" }, _attrs))} data-v-d7598007><div class="quill-editor" data-v-d7598007></div>`);
      if (showCTAModal.value) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-v-d7598007><div class="bg-white rounded-lg p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto" data-v-d7598007><h3 class="text-lg font-semibold text-gray-900 mb-4" data-v-d7598007>Insert CTA Block</h3><form class="space-y-4" data-v-d7598007><div data-v-d7598007><label for="cta-title" class="block text-sm font-medium text-gray-700 mb-1" data-v-d7598007>Title</label><input id="cta-title"${ssrRenderAttr("value", ctaForm.value.title)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter CTA title" required data-v-d7598007></div><div data-v-d7598007><label for="cta-description" class="block text-sm font-medium text-gray-700 mb-1" data-v-d7598007>Description</label><textarea id="cta-description" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter CTA description" required data-v-d7598007>${ssrInterpolate(ctaForm.value.description)}</textarea></div><div data-v-d7598007><label for="cta-button-text" class="block text-sm font-medium text-gray-700 mb-1" data-v-d7598007>Button Text</label><input id="cta-button-text"${ssrRenderAttr("value", ctaForm.value.buttonText)} type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter button text" required data-v-d7598007></div><div data-v-d7598007><label for="cta-button-url" class="block text-sm font-medium text-gray-700 mb-1" data-v-d7598007>Button URL</label><input id="cta-button-url"${ssrRenderAttr("value", ctaForm.value.buttonUrl)} type="url" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Enter button URL (e.g., /contact)" required data-v-d7598007></div><div class="flex justify-end space-x-3 pt-4" data-v-d7598007><button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500" data-v-d7598007> Cancel </button><button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500" data-v-d7598007> Insert CTA </button></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/QuillEditor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const QuillEditor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d7598007"]]);
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
