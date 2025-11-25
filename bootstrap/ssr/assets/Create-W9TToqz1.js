import { computed, mergeProps, withCtx, unref, createBlock, createTextVNode, openBlock, createVNode, withModifiers, withDirectives, createCommentVNode, vModelText, toDisplayString, Fragment, renderList, vModelSelect, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-DZUdEQLU.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    defaultSections: Object,
    defaultServicesData: Array,
    defaultFaqsData: Array,
    errors: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      title: "",
      slug: "",
      subtitle: "",
      description: "",
      meta_title: "",
      meta_description: "",
      meta_keywords: "",
      hero_background_image: "",
      hero_background_color: "#121212",
      hero_overlay_gradient: "",
      cta_text: "Talk To Our Experts",
      cta_link: "/contact",
      sections: props.defaultSections,
      services_data: props.defaultServicesData,
      faqs_data: props.defaultFaqsData,
      custom_content: {},
      status: "draft",
      is_featured: false,
      sort_order: 0,
      // Section-specific content
      image_content_title: "",
      image_content_subtitle: "",
      image_content_descriptions: [],
      image_content_image: "",
      image_content_cta_text: "",
      services_grid_title: "",
      services_grid_description: "",
      platforms_title: "",
      platforms_description: "",
      why_choose_title: "",
      why_choose_description: "",
      why_choose_data: [],
      service_cta_title: "",
      service_cta_description: "",
      service_cta_text: "",
      service_cta_image: "",
      our_approach_title: "",
      our_approach_description: "",
      our_approach_content: [],
      key_benefits_title: "",
      key_benefits_description: "",
      key_benefits_content: []
    });
    const descriptionsText = computed({
      get: () => form.image_content_descriptions.join("\n"),
      set: (value) => {
        form.image_content_descriptions = value.split("\n").filter((line) => line.trim() !== "");
      }
    });
    const uploadImage = async (event, fieldName) => {
      const file = event.target.files[0];
      if (!file) return;
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp"];
      if (!allowedTypes.includes(file.type)) {
        alert("Please select a valid image file (JPEG, PNG, JPG, GIF, or WebP)");
        return;
      }
      if (file.size > 2048 * 1024) {
        alert("File size must be less than 2MB");
        return;
      }
      try {
        const formData = new FormData();
        formData.append("image", file);
        const response = await fetch(route("admin.service-pages.upload-image"), {
          method: "POST",
          body: formData,
          headers: {
            "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content")
          }
        });
        const result = await response.json();
        if (result.success) {
          form[fieldName] = result.url;
        } else {
          alert("Upload failed. Please try again.");
        }
      } catch (error) {
        console.error("Upload error:", error);
        alert("Upload failed. Please try again.");
      }
    };
    const submit = () => {
      form.post(route("admin.service-pages.store"));
    };
    const addService = () => {
      form.services_data.push({
        title: "",
        description: "",
        icon: '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
      });
    };
    const removeService = (index) => {
      form.services_data.splice(index, 1);
    };
    const addWhyChooseItem = () => {
      form.why_choose_data.push({
        title: "",
        description: "",
        icon: '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
      });
    };
    const removeWhyChooseItem = (index) => {
      form.why_choose_data.splice(index, 1);
    };
    const addFaq = () => {
      form.faqs_data.push({
        question: "",
        answer: ""
      });
    };
    const removeFaq = (index) => {
      form.faqs_data.splice(index, 1);
    };
    const addApproachStep = () => {
      form.our_approach_content.push({
        number: String(form.our_approach_content.length + 1).padStart(2, "0"),
        title: "",
        description: "",
        icon: '<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
      });
    };
    const removeApproachStep = (index) => {
      form.our_approach_content.splice(index, 1);
    };
    const addKeyBenefit = () => {
      form.key_benefits_content.push({
        title: "",
        description: "",
        icon: '<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
      });
    };
    const removeKeyBenefit = (index) => {
      form.key_benefits_content.splice(index, 1);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "Create Service Page",
        "page-subtitle": "Create a new service page with custom content"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Create Service Page - Admin Dashboard" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-6" data-v-37df76ff${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.service-pages.index"),
              class: "inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-37df76ff${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-37df76ff${_scopeId2}></path></svg> Back to Service Pages `);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 mr-2",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M15 19l-7-7 7-7"
                      })
                    ])),
                    createTextVNode(" Back to Service Pages ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><form data-v-37df76ff${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-v-37df76ff${_scopeId}><div class="lg:col-span-2 space-y-8" data-v-37df76ff${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-37df76ff${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-37df76ff${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-37df76ff${_scopeId}>Basic Information</h2></div><div class="p-6 space-y-6" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Title</label><input${ssrRenderAttr("value", unref(form).title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter page title" data-v-37df76ff${_scopeId}>`);
            if (__props.errors.title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-37df76ff${_scopeId}>${ssrInterpolate(__props.errors.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Slug</label><input${ssrRenderAttr("value", unref(form).slug)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="auto-generated-from-title" data-v-37df76ff${_scopeId}><p class="mt-1 text-sm text-gray-500" data-v-37df76ff${_scopeId}>Leave empty to auto-generate from title</p>`);
            if (__props.errors.slug) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-37df76ff${_scopeId}>${ssrInterpolate(__props.errors.slug)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Subtitle</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter page subtitle/description" data-v-37df76ff${_scopeId}>${ssrInterpolate(unref(form).subtitle)}</textarea>`);
            if (__props.errors.subtitle) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-37df76ff${_scopeId}>${ssrInterpolate(__props.errors.subtitle)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Description (Optional)</label><textarea rows="4" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Additional description for the page" data-v-37df76ff${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
            if (__props.errors.description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-37df76ff${_scopeId}>${ssrInterpolate(__props.errors.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-37df76ff${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-37df76ff${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-37df76ff${_scopeId}>Hero Section</h2></div><div class="p-6 space-y-6" data-v-37df76ff${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Background Image URL</label><div class="flex space-x-2" data-v-37df76ff${_scopeId}><input${ssrRenderAttr("value", unref(form).hero_background_image)} type="text" class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="/images/hero-bg.webp" data-v-37df76ff${_scopeId}><div class="relative" data-v-37df76ff${_scopeId}><input type="file" accept="image/*" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" data-v-37df76ff${_scopeId}><button type="button" class="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap" data-v-37df76ff${_scopeId}> Upload </button></div></div></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Background Color</label><input${ssrRenderAttr("value", unref(form).hero_background_color)} type="color" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-37df76ff${_scopeId}></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>CTA Text</label><input${ssrRenderAttr("value", unref(form).cta_text)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Talk To Our Experts" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>CTA Link</label><input${ssrRenderAttr("value", unref(form).cta_link)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="/contact" data-v-37df76ff${_scopeId}></div></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Overlay Gradient (CSS)</label><input${ssrRenderAttr("value", unref(form).hero_overlay_gradient)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)" data-v-37df76ff${_scopeId}></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-37df76ff${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-37df76ff${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-37df76ff${_scopeId}>Image Content Section</h2></div><div class="p-6 space-y-6" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Section Title</label><input${ssrRenderAttr("value", unref(form).image_content_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Unlock the Full Potential of Your Data" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Section Subtitle</label><input${ssrRenderAttr("value", unref(form).image_content_subtitle)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Build Smarter, Faster, and Future-Ready Systems" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Descriptions (one per line)</label><textarea rows="4" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="First description paragraph
Second description paragraph" data-v-37df76ff${_scopeId}>${ssrInterpolate(descriptionsText.value)}</textarea></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Section Image URL</label><div class="flex space-x-2" data-v-37df76ff${_scopeId}><input${ssrRenderAttr("value", unref(form).image_content_image)} type="text" class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="/images/service-content.webp" data-v-37df76ff${_scopeId}><div class="relative" data-v-37df76ff${_scopeId}><input type="file" accept="image/*" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" data-v-37df76ff${_scopeId}><button type="button" class="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap" data-v-37df76ff${_scopeId}> Upload </button></div></div></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>CTA Button Text</label><input${ssrRenderAttr("value", unref(form).image_content_cta_text)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Start Your Transformation" data-v-37df76ff${_scopeId}></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-37df76ff${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-37df76ff${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-37df76ff${_scopeId}>Services Grid Section</h2><p class="text-sm text-gray-600 mt-1" data-v-37df76ff${_scopeId}>Configure the services grid section title, description, and individual services</p></div><div class="p-6 space-y-6" data-v-37df76ff${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Section Title</label><input${ssrRenderAttr("value", unref(form).services_grid_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Our Services" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Section Description</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="We offer a comprehensive suite of services." data-v-37df76ff${_scopeId}>${ssrInterpolate(unref(form).services_grid_description)}</textarea></div></div><div class="border-t pt-6" data-v-37df76ff${_scopeId}><div class="flex justify-between items-center mb-4" data-v-37df76ff${_scopeId}><h3 class="text-md font-medium text-gray-900" data-v-37df76ff${_scopeId}>Individual Services</h3><button type="button" class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200" data-v-37df76ff${_scopeId}> Add Service </button></div>`);
            if (unref(form).services_data.length === 0) {
              _push2(`<div class="text-center py-8 text-gray-500" data-v-37df76ff${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-37df76ff${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-37df76ff${_scopeId}></path></svg><p data-v-37df76ff${_scopeId}>No services added yet. Click &quot;Add Service&quot; to get started.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(form).services_data, (service, index) => {
              _push2(`<div class="mb-6 p-4 border border-gray-200 rounded-lg" data-v-37df76ff${_scopeId}><div class="flex justify-between items-start mb-4" data-v-37df76ff${_scopeId}><h4 class="text-sm font-medium text-gray-900" data-v-37df76ff${_scopeId}>Service ${ssrInterpolate(index + 1)}</h4><button type="button" class="text-red-600 hover:text-red-800 text-sm" data-v-37df76ff${_scopeId}> Remove </button></div><div class="space-y-4" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Service Title</label><input${ssrRenderAttr("value", service.title)} type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter service title" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Service Description</label><textarea rows="3" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter service description" data-v-37df76ff${_scopeId}>${ssrInterpolate(service.description)}</textarea></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Service Icon (SVG)</label><textarea rows="2" class="w-full border border-gray-300 rounded px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="&lt;svg&gt;...&lt;/svg&gt;" data-v-37df76ff${_scopeId}>${ssrInterpolate(service.icon)}</textarea><p class="text-xs text-gray-500 mt-1" data-v-37df76ff${_scopeId}>Paste your SVG icon code here</p></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-37df76ff${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-37df76ff${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-37df76ff${_scopeId}>Platforms We Work With</h2><p class="text-sm text-gray-600 mt-1" data-v-37df76ff${_scopeId}>Configure the platforms section content</p></div><div class="p-6" data-v-37df76ff${_scopeId}><div class="space-y-4" data-v-37df76ff${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Title</label><input${ssrRenderAttr("value", unref(form).platforms_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Built on the Platforms You Trust" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Description</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="We bring solutions to life on the enterprise platforms you already rely on." data-v-37df76ff${_scopeId}>${ssrInterpolate(unref(form).platforms_description)}</textarea></div></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-37df76ff${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-37df76ff${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-37df76ff${_scopeId}>Why Choose Us</h2><p class="text-sm text-gray-600 mt-1" data-v-37df76ff${_scopeId}>Configure the why choose us section content and individual items</p></div><div class="p-6" data-v-37df76ff${_scopeId}><div class="space-y-6" data-v-37df76ff${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Section Title</label><input${ssrRenderAttr("value", unref(form).why_choose_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Why Choose us for your needs?" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Section Description</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="We deliver exceptional results with our proven methodology." data-v-37df76ff${_scopeId}>${ssrInterpolate(unref(form).why_choose_description)}</textarea></div></div><div class="border-t pt-4" data-v-37df76ff${_scopeId}><div class="flex justify-between items-center mb-4" data-v-37df76ff${_scopeId}><h4 class="text-sm font-medium text-gray-900" data-v-37df76ff${_scopeId}>Why Choose Us Items</h4><button type="button" class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200" data-v-37df76ff${_scopeId}> Add Item </button></div>`);
            if (unref(form).why_choose_data.length === 0) {
              _push2(`<div class="text-center py-6 text-gray-500" data-v-37df76ff${_scopeId}><svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-37df76ff${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-37df76ff${_scopeId}></path></svg><p class="text-sm" data-v-37df76ff${_scopeId}>No items added yet. Click &quot;Add Item&quot; to get started.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(form).why_choose_data, (item, index) => {
              _push2(`<div class="mb-4 p-4 border border-gray-200 rounded-lg" data-v-37df76ff${_scopeId}><div class="flex justify-between items-start mb-3" data-v-37df76ff${_scopeId}><h5 class="text-sm font-medium text-gray-900" data-v-37df76ff${_scopeId}>Item ${ssrInterpolate(index + 1)}</h5><button type="button" class="text-red-600 hover:text-red-800 text-sm" data-v-37df76ff${_scopeId}> Remove </button></div><div class="space-y-3" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Title</label><input${ssrRenderAttr("value", item.title)} type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter reason title" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Description</label><textarea rows="2" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter reason description" data-v-37df76ff${_scopeId}>${ssrInterpolate(item.description)}</textarea></div><div data-v-37df76ff${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Icon (SVG)</label><textarea rows="2" class="w-full border border-gray-300 rounded px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="&lt;svg&gt;...&lt;/svg&gt;" data-v-37df76ff${_scopeId}>${ssrInterpolate(item.icon)}</textarea><p class="text-xs text-gray-500 mt-1" data-v-37df76ff${_scopeId}>Paste your SVG icon code here</p></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-37df76ff${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-37df76ff${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-37df76ff${_scopeId}>Our Approach</h2><p class="text-sm text-gray-600 mt-1" data-v-37df76ff${_scopeId}>Configure the our approach section content and methodology steps</p></div><div class="p-6" data-v-37df76ff${_scopeId}><div class="space-y-6" data-v-37df76ff${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Section Title</label><input${ssrRenderAttr("value", unref(form).our_approach_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Our Approach" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Section Description</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="We follow a clear, outcome-driven methodology..." data-v-37df76ff${_scopeId}>${ssrInterpolate(unref(form).our_approach_description)}</textarea></div></div><div class="border-t pt-4" data-v-37df76ff${_scopeId}><div class="flex justify-between items-center mb-4" data-v-37df76ff${_scopeId}><h4 class="text-sm font-medium text-gray-900" data-v-37df76ff${_scopeId}>Approach Steps</h4><button type="button" class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200" data-v-37df76ff${_scopeId}> Add Step </button></div>`);
            if (unref(form).our_approach_content.length === 0) {
              _push2(`<div class="text-center py-6 text-gray-500" data-v-37df76ff${_scopeId}><svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-37df76ff${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-37df76ff${_scopeId}></path></svg><p class="text-sm" data-v-37df76ff${_scopeId}>No steps added yet. Click &quot;Add Step&quot; to get started.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(form).our_approach_content, (step, index) => {
              _push2(`<div class="mb-4 p-4 border border-gray-200 rounded-lg" data-v-37df76ff${_scopeId}><div class="flex justify-between items-start mb-3" data-v-37df76ff${_scopeId}><h5 class="text-sm font-medium text-gray-900" data-v-37df76ff${_scopeId}>Step ${ssrInterpolate(index + 1)}</h5><button type="button" class="text-red-600 hover:text-red-800 text-sm" data-v-37df76ff${_scopeId}> Remove </button></div><div class="space-y-3" data-v-37df76ff${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-3" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Step Number</label><input${ssrRenderAttr("value", step.number)} type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="01" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Title</label><input${ssrRenderAttr("value", step.title)} type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Assess &amp; Align" data-v-37df76ff${_scopeId}></div></div><div data-v-37df76ff${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Description</label><textarea rows="2" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter step description" data-v-37df76ff${_scopeId}>${ssrInterpolate(step.description)}</textarea></div><div data-v-37df76ff${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Icon (SVG)</label><textarea rows="2" class="w-full border border-gray-300 rounded px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="&lt;svg&gt;...&lt;/svg&gt;" data-v-37df76ff${_scopeId}>${ssrInterpolate(step.icon)}</textarea><p class="text-xs text-gray-500 mt-1" data-v-37df76ff${_scopeId}>Paste your SVG icon code here</p></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-37df76ff${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-37df76ff${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-37df76ff${_scopeId}>Key Benefits</h2><p class="text-sm text-gray-600 mt-1" data-v-37df76ff${_scopeId}>Configure the key benefits section content and individual benefits</p></div><div class="p-6" data-v-37df76ff${_scopeId}><div class="space-y-6" data-v-37df76ff${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Section Title</label><input${ssrRenderAttr("value", unref(form).key_benefits_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Key Benefits" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Section Description</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Experience the difference a well-engineered solution can make." data-v-37df76ff${_scopeId}>${ssrInterpolate(unref(form).key_benefits_description)}</textarea></div></div><div class="border-t pt-4" data-v-37df76ff${_scopeId}><div class="flex justify-between items-center mb-4" data-v-37df76ff${_scopeId}><h4 class="text-sm font-medium text-gray-900" data-v-37df76ff${_scopeId}>Benefits</h4><button type="button" class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200" data-v-37df76ff${_scopeId}> Add Benefit </button></div>`);
            if (unref(form).key_benefits_content.length === 0) {
              _push2(`<div class="text-center py-6 text-gray-500" data-v-37df76ff${_scopeId}><svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-37df76ff${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-37df76ff${_scopeId}></path></svg><p class="text-sm" data-v-37df76ff${_scopeId}>No benefits added yet. Click &quot;Add Benefit&quot; to get started.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(form).key_benefits_content, (benefit, index) => {
              _push2(`<div class="mb-4 p-4 border border-gray-200 rounded-lg" data-v-37df76ff${_scopeId}><div class="flex justify-between items-start mb-3" data-v-37df76ff${_scopeId}><h5 class="text-sm font-medium text-gray-900" data-v-37df76ff${_scopeId}>Benefit ${ssrInterpolate(index + 1)}</h5><button type="button" class="text-red-600 hover:text-red-800 text-sm" data-v-37df76ff${_scopeId}> Remove </button></div><div class="space-y-3" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Title</label><input${ssrRenderAttr("value", benefit.title)} type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Faster Insights" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Description</label><textarea rows="2" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Accelerate time from raw data to actionable insights." data-v-37df76ff${_scopeId}>${ssrInterpolate(benefit.description)}</textarea></div><div data-v-37df76ff${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Icon (SVG)</label><textarea rows="2" class="w-full border border-gray-300 rounded px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="&lt;svg&gt;...&lt;/svg&gt;" data-v-37df76ff${_scopeId}>${ssrInterpolate(benefit.icon)}</textarea><p class="text-xs text-gray-500 mt-1" data-v-37df76ff${_scopeId}>Paste your SVG icon code here</p></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-37df76ff${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-37df76ff${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-37df76ff${_scopeId}>Service CTA Section</h2><p class="text-sm text-gray-600 mt-1" data-v-37df76ff${_scopeId}>Configure the call-to-action section content</p></div><div class="p-6" data-v-37df76ff${_scopeId}><div class="space-y-4" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>CTA Section Title</label><input${ssrRenderAttr("value", unref(form).service_cta_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ready to Get Started?" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>CTA Section Description</label><textarea rows="2" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Let&#39;s simplify your journey, and turn challenges into real results." data-v-37df76ff${_scopeId}>${ssrInterpolate(unref(form).service_cta_description)}</textarea></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>CTA Button Text</label><input${ssrRenderAttr("value", unref(form).service_cta_text)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Get Started Now" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>CTA Background Image</label><div class="flex space-x-2" data-v-37df76ff${_scopeId}><input${ssrRenderAttr("value", unref(form).service_cta_image)} type="text" class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="/images/cta.webp" data-v-37df76ff${_scopeId}><div class="relative" data-v-37df76ff${_scopeId}><input type="file" accept="image/*" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" data-v-37df76ff${_scopeId}><button type="button" class="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap" data-v-37df76ff${_scopeId}> Upload </button></div></div></div></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-37df76ff${_scopeId}><div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center" data-v-37df76ff${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-37df76ff${_scopeId}>FAQs</h2><button type="button" class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200" data-v-37df76ff${_scopeId}> Add FAQ </button></div><div class="p-6" data-v-37df76ff${_scopeId}><!--[-->`);
            ssrRenderList(unref(form).faqs_data, (faq, index) => {
              _push2(`<div class="mb-6 p-4 border border-gray-200 rounded-lg" data-v-37df76ff${_scopeId}><div class="flex justify-between items-start mb-4" data-v-37df76ff${_scopeId}><h3 class="text-sm font-medium text-gray-900" data-v-37df76ff${_scopeId}>FAQ ${ssrInterpolate(index + 1)}</h3><button type="button" class="text-red-600 hover:text-red-800" data-v-37df76ff${_scopeId}> Remove </button></div><div class="space-y-4" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Question</label><input${ssrRenderAttr("value", faq.question)} type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm" placeholder="FAQ question" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-37df76ff${_scopeId}>Answer</label><textarea rows="3" class="w-full border border-gray-300 rounded px-3 py-2 text-sm" placeholder="FAQ answer" data-v-37df76ff${_scopeId}>${ssrInterpolate(faq.answer)}</textarea></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div><div class="space-y-6" data-v-37df76ff${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-37df76ff${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-37df76ff${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-37df76ff${_scopeId}>Publish</h2></div><div class="p-6 space-y-4" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Status</label><select class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-37df76ff${_scopeId}><option value="draft" data-v-37df76ff${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "draft") : ssrLooseEqual(unref(form).status, "draft")) ? " selected" : ""}${_scopeId}>Draft</option><option value="published" data-v-37df76ff${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "published") : ssrLooseEqual(unref(form).status, "published")) ? " selected" : ""}${_scopeId}>Published</option></select></div><div class="flex items-center" data-v-37df76ff${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_featured) ? ssrLooseContain(unref(form).is_featured, null) : unref(form).is_featured) ? " checked" : ""} type="checkbox" class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" data-v-37df76ff${_scopeId}><label class="ml-2 text-sm text-gray-700" data-v-37df76ff${_scopeId}>Featured Page</label></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Sort Order</label><input${ssrRenderAttr("value", unref(form).sort_order)} type="number" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0" data-v-37df76ff${_scopeId}></div><button type="submit"${ssrIncludeBooleanAttr(_ctx.processing) ? " disabled" : ""} class="w-full bg-brand-red hover:bg-red-600 disabled:bg-red-400 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200" data-v-37df76ff${_scopeId}>${ssrInterpolate(_ctx.processing ? "Creating..." : "Create Service Page")}</button></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-37df76ff${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-37df76ff${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-37df76ff${_scopeId}>SEO</h2></div><div class="p-6 space-y-4" data-v-37df76ff${_scopeId}><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Meta Title</label><input${ssrRenderAttr("value", unref(form).meta_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="SEO title" data-v-37df76ff${_scopeId}></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Meta Description</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="SEO description" data-v-37df76ff${_scopeId}>${ssrInterpolate(unref(form).meta_description)}</textarea></div><div data-v-37df76ff${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-37df76ff${_scopeId}>Meta Keywords</label><input${ssrRenderAttr("value", unref(form).meta_keywords)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="keyword1, keyword2, keyword3" data-v-37df76ff${_scopeId}></div></div></div></div></div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Create Service Page - Admin Dashboard" }),
              createVNode("div", { class: "mb-6" }, [
                createVNode(unref(Link), {
                  href: _ctx.route("admin.service-pages.index"),
                  class: "inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "w-4 h-4 mr-2",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M15 19l-7-7 7-7"
                      })
                    ])),
                    createTextVNode(" Back to Service Pages ")
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, [
                  createVNode("div", { class: "lg:col-span-2 space-y-8" }, [
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Basic Information")
                      ]),
                      createVNode("div", { class: "p-6 space-y-6" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Title"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).title = $event,
                            type: "text",
                            class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "Enter page title"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).title]
                          ]),
                          __props.errors.title ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(__props.errors.title), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Slug"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                            type: "text",
                            class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "auto-generated-from-title"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).slug]
                          ]),
                          createVNode("p", { class: "mt-1 text-sm text-gray-500" }, "Leave empty to auto-generate from title"),
                          __props.errors.slug ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(__props.errors.slug), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Subtitle"),
                          withDirectives(createVNode("textarea", {
                            "onUpdate:modelValue": ($event) => unref(form).subtitle = $event,
                            rows: "3",
                            class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "Enter page subtitle/description"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).subtitle]
                          ]),
                          __props.errors.subtitle ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(__props.errors.subtitle), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Description (Optional)"),
                          withDirectives(createVNode("textarea", {
                            "onUpdate:modelValue": ($event) => unref(form).description = $event,
                            rows: "4",
                            class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "Additional description for the page"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).description]
                          ]),
                          __props.errors.description ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(__props.errors.description), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Hero Section")
                      ]),
                      createVNode("div", { class: "p-6 space-y-6" }, [
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Background Image URL"),
                            createVNode("div", { class: "flex space-x-2" }, [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).hero_background_image = $event,
                                type: "text",
                                class: "flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "/images/hero-bg.webp"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).hero_background_image]
                              ]),
                              createVNode("div", { class: "relative" }, [
                                createVNode("input", {
                                  type: "file",
                                  accept: "image/*",
                                  onChange: ($event) => uploadImage($event, "hero_background_image"),
                                  class: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                }, null, 40, ["onChange"]),
                                createVNode("button", {
                                  type: "button",
                                  class: "bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                                }, " Upload ")
                              ])
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Background Color"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).hero_background_color = $event,
                              type: "color",
                              class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).hero_background_color]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "CTA Text"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).cta_text = $event,
                              type: "text",
                              class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                              placeholder: "Talk To Our Experts"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).cta_text]
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "CTA Link"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).cta_link = $event,
                              type: "text",
                              class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                              placeholder: "/contact"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).cta_link]
                            ])
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Overlay Gradient (CSS)"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).hero_overlay_gradient = $event,
                            type: "text",
                            class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).hero_overlay_gradient]
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Image Content Section")
                      ]),
                      createVNode("div", { class: "p-6 space-y-6" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Section Title"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).image_content_title = $event,
                            type: "text",
                            class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "Unlock the Full Potential of Your Data"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).image_content_title]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Section Subtitle"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).image_content_subtitle = $event,
                            type: "text",
                            class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "Build Smarter, Faster, and Future-Ready Systems"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).image_content_subtitle]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Descriptions (one per line)"),
                          withDirectives(createVNode("textarea", {
                            "onUpdate:modelValue": ($event) => descriptionsText.value = $event,
                            rows: "4",
                            class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "First description paragraph\nSecond description paragraph"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, descriptionsText.value]
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Section Image URL"),
                            createVNode("div", { class: "flex space-x-2" }, [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).image_content_image = $event,
                                type: "text",
                                class: "flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "/images/service-content.webp"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).image_content_image]
                              ]),
                              createVNode("div", { class: "relative" }, [
                                createVNode("input", {
                                  type: "file",
                                  accept: "image/*",
                                  onChange: ($event) => uploadImage($event, "image_content_image"),
                                  class: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                }, null, 40, ["onChange"]),
                                createVNode("button", {
                                  type: "button",
                                  class: "bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                                }, " Upload ")
                              ])
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "CTA Button Text"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).image_content_cta_text = $event,
                              type: "text",
                              class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                              placeholder: "Start Your Transformation"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).image_content_cta_text]
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Services Grid Section"),
                        createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Configure the services grid section title, description, and individual services")
                      ]),
                      createVNode("div", { class: "p-6 space-y-6" }, [
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Section Title"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).services_grid_title = $event,
                              type: "text",
                              class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                              placeholder: "Our Services"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).services_grid_title]
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Section Description"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).services_grid_description = $event,
                              rows: "3",
                              class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                              placeholder: "We offer a comprehensive suite of services."
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).services_grid_description]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "border-t pt-6" }, [
                          createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                            createVNode("h3", { class: "text-md font-medium text-gray-900" }, "Individual Services"),
                            createVNode("button", {
                              type: "button",
                              onClick: addService,
                              class: "bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200"
                            }, " Add Service ")
                          ]),
                          unref(form).services_data.length === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-center py-8 text-gray-500"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "mx-auto h-12 w-12 text-gray-400 mb-4",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                              })
                            ])),
                            createVNode("p", null, 'No services added yet. Click "Add Service" to get started.')
                          ])) : createCommentVNode("", true),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).services_data, (service, index) => {
                            return openBlock(), createBlock("div", {
                              key: index,
                              class: "mb-6 p-4 border border-gray-200 rounded-lg"
                            }, [
                              createVNode("div", { class: "flex justify-between items-start mb-4" }, [
                                createVNode("h4", { class: "text-sm font-medium text-gray-900" }, "Service " + toDisplayString(index + 1), 1),
                                createVNode("button", {
                                  type: "button",
                                  onClick: ($event) => removeService(index),
                                  class: "text-red-600 hover:text-red-800 text-sm"
                                }, " Remove ", 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "space-y-4" }, [
                                createVNode("div", null, [
                                  createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Service Title"),
                                  withDirectives(createVNode("input", {
                                    "onUpdate:modelValue": ($event) => service.title = $event,
                                    type: "text",
                                    class: "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    placeholder: "Enter service title"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, service.title]
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Service Description"),
                                  withDirectives(createVNode("textarea", {
                                    "onUpdate:modelValue": ($event) => service.description = $event,
                                    rows: "3",
                                    class: "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    placeholder: "Enter service description"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, service.description]
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Service Icon (SVG)"),
                                  withDirectives(createVNode("textarea", {
                                    "onUpdate:modelValue": ($event) => service.icon = $event,
                                    rows: "2",
                                    class: "w-full border border-gray-300 rounded px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    placeholder: "<svg>...</svg>"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, service.icon]
                                  ]),
                                  createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Paste your SVG icon code here")
                                ])
                              ])
                            ]);
                          }), 128))
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Platforms We Work With"),
                        createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Configure the platforms section content")
                      ]),
                      createVNode("div", { class: "p-6" }, [
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Title"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).platforms_title = $event,
                                type: "text",
                                class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "Built on the Platforms You Trust"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).platforms_title]
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Description"),
                              withDirectives(createVNode("textarea", {
                                "onUpdate:modelValue": ($event) => unref(form).platforms_description = $event,
                                rows: "3",
                                class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "We bring solutions to life on the enterprise platforms you already rely on."
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).platforms_description]
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Why Choose Us"),
                        createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Configure the why choose us section content and individual items")
                      ]),
                      createVNode("div", { class: "p-6" }, [
                        createVNode("div", { class: "space-y-6" }, [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Section Title"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).why_choose_title = $event,
                                type: "text",
                                class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "Why Choose us for your needs?"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).why_choose_title]
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Section Description"),
                              withDirectives(createVNode("textarea", {
                                "onUpdate:modelValue": ($event) => unref(form).why_choose_description = $event,
                                rows: "3",
                                class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "We deliver exceptional results with our proven methodology."
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).why_choose_description]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "border-t pt-4" }, [
                            createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                              createVNode("h4", { class: "text-sm font-medium text-gray-900" }, "Why Choose Us Items"),
                              createVNode("button", {
                                type: "button",
                                onClick: addWhyChooseItem,
                                class: "bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200"
                              }, " Add Item ")
                            ]),
                            unref(form).why_choose_data.length === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-center py-6 text-gray-500"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "mx-auto h-10 w-10 text-gray-400 mb-3",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                })
                              ])),
                              createVNode("p", { class: "text-sm" }, 'No items added yet. Click "Add Item" to get started.')
                            ])) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).why_choose_data, (item, index) => {
                              return openBlock(), createBlock("div", {
                                key: index,
                                class: "mb-4 p-4 border border-gray-200 rounded-lg"
                              }, [
                                createVNode("div", { class: "flex justify-between items-start mb-3" }, [
                                  createVNode("h5", { class: "text-sm font-medium text-gray-900" }, "Item " + toDisplayString(index + 1), 1),
                                  createVNode("button", {
                                    type: "button",
                                    onClick: ($event) => removeWhyChooseItem(index),
                                    class: "text-red-600 hover:text-red-800 text-sm"
                                  }, " Remove ", 8, ["onClick"])
                                ]),
                                createVNode("div", { class: "space-y-3" }, [
                                  createVNode("div", null, [
                                    createVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Title"),
                                    withDirectives(createVNode("input", {
                                      "onUpdate:modelValue": ($event) => item.title = $event,
                                      type: "text",
                                      class: "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                      placeholder: "Enter reason title"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, item.title]
                                    ])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Description"),
                                    withDirectives(createVNode("textarea", {
                                      "onUpdate:modelValue": ($event) => item.description = $event,
                                      rows: "2",
                                      class: "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                      placeholder: "Enter reason description"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, item.description]
                                    ])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Icon (SVG)"),
                                    withDirectives(createVNode("textarea", {
                                      "onUpdate:modelValue": ($event) => item.icon = $event,
                                      rows: "2",
                                      class: "w-full border border-gray-300 rounded px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500",
                                      placeholder: "<svg>...</svg>"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, item.icon]
                                    ]),
                                    createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Paste your SVG icon code here")
                                  ])
                                ])
                              ]);
                            }), 128))
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Our Approach"),
                        createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Configure the our approach section content and methodology steps")
                      ]),
                      createVNode("div", { class: "p-6" }, [
                        createVNode("div", { class: "space-y-6" }, [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Section Title"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).our_approach_title = $event,
                                type: "text",
                                class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "Our Approach"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).our_approach_title]
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Section Description"),
                              withDirectives(createVNode("textarea", {
                                "onUpdate:modelValue": ($event) => unref(form).our_approach_description = $event,
                                rows: "3",
                                class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "We follow a clear, outcome-driven methodology..."
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).our_approach_description]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "border-t pt-4" }, [
                            createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                              createVNode("h4", { class: "text-sm font-medium text-gray-900" }, "Approach Steps"),
                              createVNode("button", {
                                type: "button",
                                onClick: addApproachStep,
                                class: "bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200"
                              }, " Add Step ")
                            ]),
                            unref(form).our_approach_content.length === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-center py-6 text-gray-500"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "mx-auto h-10 w-10 text-gray-400 mb-3",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                })
                              ])),
                              createVNode("p", { class: "text-sm" }, 'No steps added yet. Click "Add Step" to get started.')
                            ])) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).our_approach_content, (step, index) => {
                              return openBlock(), createBlock("div", {
                                key: index,
                                class: "mb-4 p-4 border border-gray-200 rounded-lg"
                              }, [
                                createVNode("div", { class: "flex justify-between items-start mb-3" }, [
                                  createVNode("h5", { class: "text-sm font-medium text-gray-900" }, "Step " + toDisplayString(index + 1), 1),
                                  createVNode("button", {
                                    type: "button",
                                    onClick: ($event) => removeApproachStep(index),
                                    class: "text-red-600 hover:text-red-800 text-sm"
                                  }, " Remove ", 8, ["onClick"])
                                ]),
                                createVNode("div", { class: "space-y-3" }, [
                                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                                    createVNode("div", null, [
                                      createVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Step Number"),
                                      withDirectives(createVNode("input", {
                                        "onUpdate:modelValue": ($event) => step.number = $event,
                                        type: "text",
                                        class: "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                        placeholder: "01"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, step.number]
                                      ])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Title"),
                                      withDirectives(createVNode("input", {
                                        "onUpdate:modelValue": ($event) => step.title = $event,
                                        type: "text",
                                        class: "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                        placeholder: "Assess & Align"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, step.title]
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Description"),
                                    withDirectives(createVNode("textarea", {
                                      "onUpdate:modelValue": ($event) => step.description = $event,
                                      rows: "2",
                                      class: "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                      placeholder: "Enter step description"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, step.description]
                                    ])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Icon (SVG)"),
                                    withDirectives(createVNode("textarea", {
                                      "onUpdate:modelValue": ($event) => step.icon = $event,
                                      rows: "2",
                                      class: "w-full border border-gray-300 rounded px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500",
                                      placeholder: "<svg>...</svg>"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, step.icon]
                                    ]),
                                    createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Paste your SVG icon code here")
                                  ])
                                ])
                              ]);
                            }), 128))
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Key Benefits"),
                        createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Configure the key benefits section content and individual benefits")
                      ]),
                      createVNode("div", { class: "p-6" }, [
                        createVNode("div", { class: "space-y-6" }, [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Section Title"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).key_benefits_title = $event,
                                type: "text",
                                class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "Key Benefits"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).key_benefits_title]
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Section Description"),
                              withDirectives(createVNode("textarea", {
                                "onUpdate:modelValue": ($event) => unref(form).key_benefits_description = $event,
                                rows: "3",
                                class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "Experience the difference a well-engineered solution can make."
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).key_benefits_description]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "border-t pt-4" }, [
                            createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                              createVNode("h4", { class: "text-sm font-medium text-gray-900" }, "Benefits"),
                              createVNode("button", {
                                type: "button",
                                onClick: addKeyBenefit,
                                class: "bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200"
                              }, " Add Benefit ")
                            ]),
                            unref(form).key_benefits_content.length === 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-center py-6 text-gray-500"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "mx-auto h-10 w-10 text-gray-400 mb-3",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                })
                              ])),
                              createVNode("p", { class: "text-sm" }, 'No benefits added yet. Click "Add Benefit" to get started.')
                            ])) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).key_benefits_content, (benefit, index) => {
                              return openBlock(), createBlock("div", {
                                key: index,
                                class: "mb-4 p-4 border border-gray-200 rounded-lg"
                              }, [
                                createVNode("div", { class: "flex justify-between items-start mb-3" }, [
                                  createVNode("h5", { class: "text-sm font-medium text-gray-900" }, "Benefit " + toDisplayString(index + 1), 1),
                                  createVNode("button", {
                                    type: "button",
                                    onClick: ($event) => removeKeyBenefit(index),
                                    class: "text-red-600 hover:text-red-800 text-sm"
                                  }, " Remove ", 8, ["onClick"])
                                ]),
                                createVNode("div", { class: "space-y-3" }, [
                                  createVNode("div", null, [
                                    createVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Title"),
                                    withDirectives(createVNode("input", {
                                      "onUpdate:modelValue": ($event) => benefit.title = $event,
                                      type: "text",
                                      class: "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                      placeholder: "Faster Insights"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, benefit.title]
                                    ])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Description"),
                                    withDirectives(createVNode("textarea", {
                                      "onUpdate:modelValue": ($event) => benefit.description = $event,
                                      rows: "2",
                                      class: "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                      placeholder: "Accelerate time from raw data to actionable insights."
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, benefit.description]
                                    ])
                                  ]),
                                  createVNode("div", null, [
                                    createVNode("label", { class: "block text-xs font-medium text-gray-700 mb-1" }, "Icon (SVG)"),
                                    withDirectives(createVNode("textarea", {
                                      "onUpdate:modelValue": ($event) => benefit.icon = $event,
                                      rows: "2",
                                      class: "w-full border border-gray-300 rounded px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500",
                                      placeholder: "<svg>...</svg>"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, benefit.icon]
                                    ]),
                                    createVNode("p", { class: "text-xs text-gray-500 mt-1" }, "Paste your SVG icon code here")
                                  ])
                                ])
                              ]);
                            }), 128))
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Service CTA Section"),
                        createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Configure the call-to-action section content")
                      ]),
                      createVNode("div", { class: "p-6" }, [
                        createVNode("div", { class: "space-y-4" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "CTA Section Title"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).service_cta_title = $event,
                              type: "text",
                              class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                              placeholder: "Ready to Get Started?"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).service_cta_title]
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "CTA Section Description"),
                            withDirectives(createVNode("textarea", {
                              "onUpdate:modelValue": ($event) => unref(form).service_cta_description = $event,
                              rows: "2",
                              class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                              placeholder: "Let's simplify your journey, and turn challenges into real results."
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).service_cta_description]
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "CTA Button Text"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).service_cta_text = $event,
                                type: "text",
                                class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "Get Started Now"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).service_cta_text]
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "CTA Background Image"),
                              createVNode("div", { class: "flex space-x-2" }, [
                                withDirectives(createVNode("input", {
                                  "onUpdate:modelValue": ($event) => unref(form).service_cta_image = $event,
                                  type: "text",
                                  class: "flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                  placeholder: "/images/cta.webp"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, unref(form).service_cta_image]
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode("input", {
                                    type: "file",
                                    accept: "image/*",
                                    onChange: ($event) => uploadImage($event, "service_cta_image"),
                                    class: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                  }, null, 40, ["onChange"]),
                                  createVNode("button", {
                                    type: "button",
                                    class: "bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                                  }, " Upload ")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200 flex justify-between items-center" }, [
                        createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "FAQs"),
                        createVNode("button", {
                          type: "button",
                          onClick: addFaq,
                          class: "bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200"
                        }, " Add FAQ ")
                      ]),
                      createVNode("div", { class: "p-6" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(form).faqs_data, (faq, index) => {
                          return openBlock(), createBlock("div", {
                            key: index,
                            class: "mb-6 p-4 border border-gray-200 rounded-lg"
                          }, [
                            createVNode("div", { class: "flex justify-between items-start mb-4" }, [
                              createVNode("h3", { class: "text-sm font-medium text-gray-900" }, "FAQ " + toDisplayString(index + 1), 1),
                              createVNode("button", {
                                type: "button",
                                onClick: ($event) => removeFaq(index),
                                class: "text-red-600 hover:text-red-800"
                              }, " Remove ", 8, ["onClick"])
                            ]),
                            createVNode("div", { class: "space-y-4" }, [
                              createVNode("div", null, [
                                createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Question"),
                                withDirectives(createVNode("input", {
                                  "onUpdate:modelValue": ($event) => faq.question = $event,
                                  type: "text",
                                  class: "w-full border border-gray-300 rounded px-3 py-2 text-sm",
                                  placeholder: "FAQ question"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, faq.question]
                                ])
                              ]),
                              createVNode("div", null, [
                                createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Answer"),
                                withDirectives(createVNode("textarea", {
                                  "onUpdate:modelValue": ($event) => faq.answer = $event,
                                  rows: "3",
                                  class: "w-full border border-gray-300 rounded px-3 py-2 text-sm",
                                  placeholder: "FAQ answer"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, faq.answer]
                                ])
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Publish")
                      ]),
                      createVNode("div", { class: "p-6 space-y-4" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Status"),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => unref(form).status = $event,
                            class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          }, [
                            createVNode("option", { value: "draft" }, "Draft"),
                            createVNode("option", { value: "published" }, "Published")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).status]
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).is_featured = $event,
                            type: "checkbox",
                            class: "h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(form).is_featured]
                          ]),
                          createVNode("label", { class: "ml-2 text-sm text-gray-700" }, "Featured Page")
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Sort Order"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).sort_order = $event,
                            type: "number",
                            class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "0"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).sort_order]
                          ])
                        ]),
                        createVNode("button", {
                          type: "submit",
                          disabled: _ctx.processing,
                          class: "w-full bg-brand-red hover:bg-red-600 disabled:bg-red-400 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                        }, toDisplayString(_ctx.processing ? "Creating..." : "Create Service Page"), 9, ["disabled"])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "SEO")
                      ]),
                      createVNode("div", { class: "p-6 space-y-4" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Meta Title"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).meta_title = $event,
                            type: "text",
                            class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "SEO title"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).meta_title]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Meta Description"),
                          withDirectives(createVNode("textarea", {
                            "onUpdate:modelValue": ($event) => unref(form).meta_description = $event,
                            rows: "3",
                            class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "SEO description"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).meta_description]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Meta Keywords"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).meta_keywords = $event,
                            type: "text",
                            class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "keyword1, keyword2, keyword3"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).meta_keywords]
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ServicePages/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-37df76ff"]]);
export {
  Create as default
};
