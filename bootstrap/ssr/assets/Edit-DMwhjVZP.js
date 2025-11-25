import { ref, computed, mergeProps, withCtx, unref, createBlock, createTextVNode, openBlock, createVNode, createCommentVNode, withModifiers, withDirectives, vModelText, toDisplayString, Fragment, renderList, vModelSelect, vModelCheckbox, Teleport, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderTeleport } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-DZUdEQLU.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    servicePage: Object,
    defaultSections: Object,
    errors: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      title: props.servicePage.title,
      slug: props.servicePage.slug,
      subtitle: props.servicePage.subtitle,
      description: props.servicePage.description || "",
      meta_title: props.servicePage.meta_title || "",
      meta_description: props.servicePage.meta_description || "",
      meta_keywords: props.servicePage.meta_keywords || "",
      hero_background_image: props.servicePage.hero_background_image || "",
      hero_background_color: props.servicePage.hero_background_color || "#121212",
      hero_overlay_gradient: props.servicePage.hero_overlay_gradient || "",
      cta_text: props.servicePage.cta_text || "Talk To Our Experts",
      cta_link: props.servicePage.cta_link || "/contact",
      sections: props.servicePage.sections || props.defaultSections,
      services_data: props.servicePage.services_data || [],
      faqs_data: props.servicePage.faqs_data || [],
      custom_content: props.servicePage.custom_content || {},
      status: props.servicePage.status,
      is_featured: props.servicePage.is_featured,
      sort_order: props.servicePage.sort_order,
      // Section-specific content fields
      image_content_title: props.servicePage.image_content_title || "",
      image_content_subtitle: props.servicePage.image_content_subtitle || "",
      image_content_descriptions: props.servicePage.image_content_descriptions || [],
      image_content_image: props.servicePage.image_content_image || "",
      image_content_cta_text: props.servicePage.image_content_cta_text || "",
      services_grid_title: props.servicePage.services_grid_title || "",
      services_grid_description: props.servicePage.services_grid_description || "",
      platforms_title: props.servicePage.platforms_title || "",
      platforms_description: props.servicePage.platforms_description || "",
      why_choose_title: props.servicePage.why_choose_title || "",
      why_choose_description: props.servicePage.why_choose_description || "",
      why_choose_data: props.servicePage.why_choose_data || [],
      service_cta_title: props.servicePage.service_cta_title || "",
      service_cta_description: props.servicePage.service_cta_description || "",
      service_cta_text: props.servicePage.service_cta_text || "",
      service_cta_image: props.servicePage.service_cta_image || "",
      our_approach_title: props.servicePage.our_approach_title || "",
      our_approach_description: props.servicePage.our_approach_description || "",
      our_approach_content: props.servicePage.our_approach_content || [],
      key_benefits_title: props.servicePage.key_benefits_title || "",
      key_benefits_description: props.servicePage.key_benefits_description || "",
      key_benefits_content: props.servicePage.key_benefits_content || []
    });
    const showSuccessModal = ref(false);
    const submit = () => {
      form.put(route("admin.service-pages.update", props.servicePage.id), {
        onSuccess: () => {
          showSuccessModal.value = true;
        }
      });
    };
    const closeSuccessModal = () => {
      showSuccessModal.value = false;
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
    const descriptionsText = computed({
      get() {
        if (Array.isArray(form.image_content_descriptions)) {
          return form.image_content_descriptions.join("\n\n");
        }
        return form.image_content_descriptions || "";
      },
      set(value) {
        form.image_content_descriptions = value.split("\n\n").filter((desc) => desc.trim() !== "");
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
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": `Edit ${__props.servicePage.title}`,
        "page-subtitle": "Update your service page content"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), {
              title: `Edit ${__props.servicePage.title} - Admin Dashboard`
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center justify-between mb-6" data-v-046e07bc${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.service-pages.index"),
              class: "inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-046e07bc${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-046e07bc${_scopeId2}></path></svg> Back to Service Pages `);
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
            _push2(`<div class="flex items-center space-x-3" data-v-046e07bc${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("admin.service-pages.preview", __props.servicePage.id),
              target: "_blank",
              class: "bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Preview `);
                } else {
                  return [
                    createTextVNode(" Preview ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.servicePage.status === "published") {
              _push2(ssrRenderComponent(unref(Link), {
                href: __props.servicePage.url,
                target: "_blank",
                class: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` View Live `);
                  } else {
                    return [
                      createTextVNode(" View Live ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><form data-v-046e07bc${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-v-046e07bc${_scopeId}><div class="lg:col-span-2 space-y-8" data-v-046e07bc${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-046e07bc${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-046e07bc${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-046e07bc${_scopeId}>Basic Information</h2></div><div class="p-6 space-y-6" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Title</label><input${ssrRenderAttr("value", unref(form).title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter page title" data-v-046e07bc${_scopeId}>`);
            if (__props.errors.title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-046e07bc${_scopeId}>${ssrInterpolate(__props.errors.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Slug</label><input${ssrRenderAttr("value", unref(form).slug)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="auto-generated-from-title" data-v-046e07bc${_scopeId}><p class="mt-1 text-sm text-gray-500" data-v-046e07bc${_scopeId}>Current URL: /services/${ssrInterpolate(unref(form).slug)}</p>`);
            if (__props.errors.slug) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-046e07bc${_scopeId}>${ssrInterpolate(__props.errors.slug)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Subtitle</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter page subtitle/description" data-v-046e07bc${_scopeId}>${ssrInterpolate(unref(form).subtitle)}</textarea>`);
            if (__props.errors.subtitle) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-046e07bc${_scopeId}>${ssrInterpolate(__props.errors.subtitle)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Description (Optional)</label><textarea rows="4" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Additional description for the page" data-v-046e07bc${_scopeId}>${ssrInterpolate(unref(form).description)}</textarea>`);
            if (__props.errors.description) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-046e07bc${_scopeId}>${ssrInterpolate(__props.errors.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-046e07bc${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-046e07bc${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-046e07bc${_scopeId}>Hero Section</h2></div><div class="p-6 space-y-6" data-v-046e07bc${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Background Image URL</label><div class="flex space-x-2" data-v-046e07bc${_scopeId}><input${ssrRenderAttr("value", unref(form).hero_background_image)} type="text" class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="/images/hero-bg.webp" data-v-046e07bc${_scopeId}><div class="relative" data-v-046e07bc${_scopeId}><input type="file" accept="image/*" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" data-v-046e07bc${_scopeId}><button type="button" class="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap" data-v-046e07bc${_scopeId}> Upload </button></div></div></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Background Color</label><input${ssrRenderAttr("value", unref(form).hero_background_color)} type="color" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-046e07bc${_scopeId}></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>CTA Text</label><input${ssrRenderAttr("value", unref(form).cta_text)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Talk To Our Experts" data-v-046e07bc${_scopeId}></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>CTA Link</label><input${ssrRenderAttr("value", unref(form).cta_link)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="/contact" data-v-046e07bc${_scopeId}></div></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Overlay Gradient (CSS)</label><input${ssrRenderAttr("value", unref(form).hero_overlay_gradient)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)" data-v-046e07bc${_scopeId}></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-046e07bc${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-046e07bc${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-046e07bc${_scopeId}>Image Content Section</h2><p class="text-sm text-gray-600 mt-1" data-v-046e07bc${_scopeId}>Configure the &quot;Unlock the Full Potential&quot; section content</p></div><div class="p-6 space-y-6" data-v-046e07bc${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Title</label><input${ssrRenderAttr("value", unref(form).image_content_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Unlock the Full Potential of Your Data" data-v-046e07bc${_scopeId}></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Subtitle</label><input${ssrRenderAttr("value", unref(form).image_content_subtitle)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Build Smarter, Faster, and Future-Ready Data Systems" data-v-046e07bc${_scopeId}></div></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Descriptions</label><textarea rows="6" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Transform your business with our comprehensive service solutions.

At Sinki.ai, our solutions simplify complexity, accelerate insights, and give your teams the confidence to act on data faster, smarter, and with measurable impact." data-v-046e07bc${_scopeId}>${ssrInterpolate(descriptionsText.value)}</textarea><p class="text-sm text-gray-500 mt-1" data-v-046e07bc${_scopeId}>Enter each description paragraph on a new line</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Image URL</label><div class="flex space-x-2" data-v-046e07bc${_scopeId}><input${ssrRenderAttr("value", unref(form).image_content_image)} type="text" class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="/images/serviceside.webp" data-v-046e07bc${_scopeId}><div class="relative" data-v-046e07bc${_scopeId}><input type="file" accept="image/*" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" data-v-046e07bc${_scopeId}><button type="button" class="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap" data-v-046e07bc${_scopeId}> Upload </button></div></div></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>CTA Text</label><input${ssrRenderAttr("value", unref(form).image_content_cta_text)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Start Your Transformation" data-v-046e07bc${_scopeId}></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-046e07bc${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-046e07bc${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-046e07bc${_scopeId}>Services Grid Section</h2><p class="text-sm text-gray-600 mt-1" data-v-046e07bc${_scopeId}>Configure the services grid section content and individual services</p></div><div class="p-6 space-y-6" data-v-046e07bc${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Section Title</label><input${ssrRenderAttr("value", unref(form).services_grid_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"${ssrRenderAttr("placeholder", `Our ${unref(form).title} Services`)} data-v-046e07bc${_scopeId}></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Section Description</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="We offer a comprehensive suite of services." data-v-046e07bc${_scopeId}>${ssrInterpolate(unref(form).services_grid_description)}</textarea></div></div><div class="border-t pt-6" data-v-046e07bc${_scopeId}><div class="flex justify-between items-center mb-4" data-v-046e07bc${_scopeId}><h3 class="text-md font-medium text-gray-900" data-v-046e07bc${_scopeId}>Individual Services</h3><button type="button" class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200" data-v-046e07bc${_scopeId}> Add Service </button></div><!--[-->`);
            ssrRenderList(unref(form).services_data, (service, index) => {
              _push2(`<div class="mb-6 p-4 border border-gray-200 rounded-lg" data-v-046e07bc${_scopeId}><div class="flex justify-between items-start mb-4" data-v-046e07bc${_scopeId}><h4 class="text-sm font-medium text-gray-900" data-v-046e07bc${_scopeId}>Service ${ssrInterpolate(index + 1)}</h4><button type="button" class="text-red-600 hover:text-red-800" data-v-046e07bc${_scopeId}> Remove </button></div><div class="space-y-4" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Title</label><input${ssrRenderAttr("value", service.title)} type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm" placeholder="Service title" data-v-046e07bc${_scopeId}></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Description</label><textarea rows="3" class="w-full border border-gray-300 rounded px-3 py-2 text-sm" placeholder="Service description" data-v-046e07bc${_scopeId}>${ssrInterpolate(service.description)}</textarea></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Icon (SVG)</label><textarea rows="2" class="w-full border border-gray-300 rounded px-3 py-2 text-sm font-mono" placeholder="&lt;svg&gt;...&lt;/svg&gt;" data-v-046e07bc${_scopeId}>${ssrInterpolate(service.icon)}</textarea></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-046e07bc${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-046e07bc${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-046e07bc${_scopeId}>Platforms We Work With</h2><p class="text-sm text-gray-600 mt-1" data-v-046e07bc${_scopeId}>Configure the platforms section content</p></div><div class="p-6" data-v-046e07bc${_scopeId}><div class="space-y-4" data-v-046e07bc${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Title</label><input${ssrRenderAttr("value", unref(form).platforms_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Built on the Platforms You Trust" data-v-046e07bc${_scopeId}></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Description</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="We bring the best solutions to life on the enterprise platforms you already rely on." data-v-046e07bc${_scopeId}>${ssrInterpolate(unref(form).platforms_description)}</textarea></div></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-046e07bc${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-046e07bc${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-046e07bc${_scopeId}>Why Choose Us</h2><p class="text-sm text-gray-600 mt-1" data-v-046e07bc${_scopeId}>Configure the why choose us section content and individual items</p></div><div class="p-6" data-v-046e07bc${_scopeId}><div class="space-y-6" data-v-046e07bc${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Section Title</label><input${ssrRenderAttr("value", unref(form).why_choose_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"${ssrRenderAttr("placeholder", `Why Choose us for your ${unref(form).title} needs?`)} data-v-046e07bc${_scopeId}></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Section Description</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="We deliver exceptional results with our proven methodology and expert team." data-v-046e07bc${_scopeId}>${ssrInterpolate(unref(form).why_choose_description)}</textarea></div></div><div class="border-t pt-4" data-v-046e07bc${_scopeId}><div class="flex justify-between items-center mb-4" data-v-046e07bc${_scopeId}><h4 class="text-sm font-medium text-gray-900" data-v-046e07bc${_scopeId}>Why Choose Us Items</h4><button type="button" class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200" data-v-046e07bc${_scopeId}> Add Item </button></div>`);
            if (unref(form).why_choose_data.length === 0) {
              _push2(`<div class="text-center py-6 text-gray-500" data-v-046e07bc${_scopeId}><svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-046e07bc${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-046e07bc${_scopeId}></path></svg><p class="text-sm" data-v-046e07bc${_scopeId}>No items added yet. Click &quot;Add Item&quot; to get started.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(form).why_choose_data, (item, index) => {
              _push2(`<div class="mb-4 p-4 border border-gray-200 rounded-lg" data-v-046e07bc${_scopeId}><div class="flex justify-between items-start mb-3" data-v-046e07bc${_scopeId}><h5 class="text-sm font-medium text-gray-900" data-v-046e07bc${_scopeId}>Item ${ssrInterpolate(index + 1)}</h5><button type="button" class="text-red-600 hover:text-red-800 text-sm" data-v-046e07bc${_scopeId}> Remove </button></div><div class="space-y-3" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Title</label><input${ssrRenderAttr("value", item.title)} type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter reason title" data-v-046e07bc${_scopeId}></div><div data-v-046e07bc${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Description</label><textarea rows="2" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter reason description" data-v-046e07bc${_scopeId}>${ssrInterpolate(item.description)}</textarea></div><div data-v-046e07bc${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Icon (SVG)</label><textarea rows="2" class="w-full border border-gray-300 rounded px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="&lt;svg&gt;...&lt;/svg&gt;" data-v-046e07bc${_scopeId}>${ssrInterpolate(item.icon)}</textarea><p class="text-xs text-gray-500 mt-1" data-v-046e07bc${_scopeId}>Paste your SVG icon code here</p></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-046e07bc${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-046e07bc${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-046e07bc${_scopeId}>Our Approach</h2><p class="text-sm text-gray-600 mt-1" data-v-046e07bc${_scopeId}>Configure the our approach section content and methodology steps</p></div><div class="p-6" data-v-046e07bc${_scopeId}><div class="space-y-6" data-v-046e07bc${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Section Title</label><input${ssrRenderAttr("value", unref(form).our_approach_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Our Approach" data-v-046e07bc${_scopeId}></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Section Description</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="We follow a clear, outcome-driven methodology..." data-v-046e07bc${_scopeId}>${ssrInterpolate(unref(form).our_approach_description)}</textarea></div></div><div class="border-t pt-4" data-v-046e07bc${_scopeId}><div class="flex justify-between items-center mb-4" data-v-046e07bc${_scopeId}><h4 class="text-sm font-medium text-gray-900" data-v-046e07bc${_scopeId}>Approach Steps</h4><button type="button" class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200" data-v-046e07bc${_scopeId}> Add Step </button></div>`);
            if (unref(form).our_approach_content.length === 0) {
              _push2(`<div class="text-center py-6 text-gray-500" data-v-046e07bc${_scopeId}><svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-046e07bc${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-046e07bc${_scopeId}></path></svg><p class="text-sm" data-v-046e07bc${_scopeId}>No steps added yet. Click &quot;Add Step&quot; to get started.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(form).our_approach_content, (step, index) => {
              _push2(`<div class="mb-4 p-4 border border-gray-200 rounded-lg" data-v-046e07bc${_scopeId}><div class="flex justify-between items-start mb-3" data-v-046e07bc${_scopeId}><h5 class="text-sm font-medium text-gray-900" data-v-046e07bc${_scopeId}>Step ${ssrInterpolate(index + 1)}</h5><button type="button" class="text-red-600 hover:text-red-800 text-sm" data-v-046e07bc${_scopeId}> Remove </button></div><div class="space-y-3" data-v-046e07bc${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-3" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Step Number</label><input${ssrRenderAttr("value", step.number)} type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="01" data-v-046e07bc${_scopeId}></div><div data-v-046e07bc${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Title</label><input${ssrRenderAttr("value", step.title)} type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Assess &amp; Align" data-v-046e07bc${_scopeId}></div></div><div data-v-046e07bc${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Description</label><textarea rows="2" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter step description" data-v-046e07bc${_scopeId}>${ssrInterpolate(step.description)}</textarea></div><div data-v-046e07bc${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Icon (SVG)</label><textarea rows="2" class="w-full border border-gray-300 rounded px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="&lt;svg&gt;...&lt;/svg&gt;" data-v-046e07bc${_scopeId}>${ssrInterpolate(step.icon)}</textarea><p class="text-xs text-gray-500 mt-1" data-v-046e07bc${_scopeId}>Paste your SVG icon code here</p></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-046e07bc${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-046e07bc${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-046e07bc${_scopeId}>Key Benefits</h2><p class="text-sm text-gray-600 mt-1" data-v-046e07bc${_scopeId}>Configure the key benefits section content and individual benefits</p></div><div class="p-6" data-v-046e07bc${_scopeId}><div class="space-y-6" data-v-046e07bc${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Section Title</label><input${ssrRenderAttr("value", unref(form).key_benefits_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Key Benefits" data-v-046e07bc${_scopeId}></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Section Description</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Experience the difference a well-engineered solution can make." data-v-046e07bc${_scopeId}>${ssrInterpolate(unref(form).key_benefits_description)}</textarea></div></div><div class="border-t pt-4" data-v-046e07bc${_scopeId}><div class="flex justify-between items-center mb-4" data-v-046e07bc${_scopeId}><h4 class="text-sm font-medium text-gray-900" data-v-046e07bc${_scopeId}>Benefits</h4><button type="button" class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200" data-v-046e07bc${_scopeId}> Add Benefit </button></div>`);
            if (unref(form).key_benefits_content.length === 0) {
              _push2(`<div class="text-center py-6 text-gray-500" data-v-046e07bc${_scopeId}><svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-046e07bc${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-046e07bc${_scopeId}></path></svg><p class="text-sm" data-v-046e07bc${_scopeId}>No benefits added yet. Click &quot;Add Benefit&quot; to get started.</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(form).key_benefits_content, (benefit, index) => {
              _push2(`<div class="mb-4 p-4 border border-gray-200 rounded-lg" data-v-046e07bc${_scopeId}><div class="flex justify-between items-start mb-3" data-v-046e07bc${_scopeId}><h5 class="text-sm font-medium text-gray-900" data-v-046e07bc${_scopeId}>Benefit ${ssrInterpolate(index + 1)}</h5><button type="button" class="text-red-600 hover:text-red-800 text-sm" data-v-046e07bc${_scopeId}> Remove </button></div><div class="space-y-3" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Title</label><input${ssrRenderAttr("value", benefit.title)} type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Faster Insights" data-v-046e07bc${_scopeId}></div><div data-v-046e07bc${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Description</label><textarea rows="2" class="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Accelerate time from raw data to actionable insights." data-v-046e07bc${_scopeId}>${ssrInterpolate(benefit.description)}</textarea></div><div data-v-046e07bc${_scopeId}><label class="block text-xs font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Icon (SVG)</label><textarea rows="2" class="w-full border border-gray-300 rounded px-3 py-2 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="&lt;svg&gt;...&lt;/svg&gt;" data-v-046e07bc${_scopeId}>${ssrInterpolate(benefit.icon)}</textarea><p class="text-xs text-gray-500 mt-1" data-v-046e07bc${_scopeId}>Paste your SVG icon code here</p></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-046e07bc${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-046e07bc${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-046e07bc${_scopeId}>Service CTA Section</h2><p class="text-sm text-gray-600 mt-1" data-v-046e07bc${_scopeId}>Configure the call-to-action section content</p></div><div class="p-6" data-v-046e07bc${_scopeId}><div class="space-y-6" data-v-046e07bc${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Title</label><input${ssrRenderAttr("value", unref(form).service_cta_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"${ssrRenderAttr("placeholder", `Ready to Get Started with ${unref(form).title}?`)} data-v-046e07bc${_scopeId}></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>CTA Text</label><input${ssrRenderAttr("value", unref(form).service_cta_text)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Get Started Now" data-v-046e07bc${_scopeId}></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Description</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Let&#39;s simplify your journey, and turn challenges into real results." data-v-046e07bc${_scopeId}>${ssrInterpolate(unref(form).service_cta_description)}</textarea></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Background Image URL</label><div class="flex space-x-2" data-v-046e07bc${_scopeId}><input${ssrRenderAttr("value", unref(form).service_cta_image)} type="text" class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="/images/cta.webp" data-v-046e07bc${_scopeId}><div class="relative" data-v-046e07bc${_scopeId}><input type="file" accept="image/*" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" data-v-046e07bc${_scopeId}><button type="button" class="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap" data-v-046e07bc${_scopeId}> Upload </button></div></div></div></div></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-046e07bc${_scopeId}><div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center" data-v-046e07bc${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-046e07bc${_scopeId}>FAQs</h2><button type="button" class="bg-brand-red hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200" data-v-046e07bc${_scopeId}> Add FAQ </button></div><div class="p-6" data-v-046e07bc${_scopeId}><!--[-->`);
            ssrRenderList(unref(form).faqs_data, (faq, index) => {
              _push2(`<div class="mb-6 p-4 border border-gray-200 rounded-lg" data-v-046e07bc${_scopeId}><div class="flex justify-between items-start mb-4" data-v-046e07bc${_scopeId}><h3 class="text-sm font-medium text-gray-900" data-v-046e07bc${_scopeId}>FAQ ${ssrInterpolate(index + 1)}</h3><button type="button" class="text-red-600 hover:text-red-800" data-v-046e07bc${_scopeId}> Remove </button></div><div class="space-y-4" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Question</label><input${ssrRenderAttr("value", faq.question)} type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm" placeholder="FAQ question" data-v-046e07bc${_scopeId}></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-1" data-v-046e07bc${_scopeId}>Answer</label><textarea rows="3" class="w-full border border-gray-300 rounded px-3 py-2 text-sm" placeholder="FAQ answer" data-v-046e07bc${_scopeId}>${ssrInterpolate(faq.answer)}</textarea></div></div></div>`);
            });
            _push2(`<!--]--></div></div></div><div class="space-y-6" data-v-046e07bc${_scopeId}><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-046e07bc${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-046e07bc${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-046e07bc${_scopeId}>Publish</h2></div><div class="p-6 space-y-4" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Status</label><select class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" data-v-046e07bc${_scopeId}><option value="draft" data-v-046e07bc${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "draft") : ssrLooseEqual(unref(form).status, "draft")) ? " selected" : ""}${_scopeId}>Draft</option><option value="published" data-v-046e07bc${ssrIncludeBooleanAttr(Array.isArray(unref(form).status) ? ssrLooseContain(unref(form).status, "published") : ssrLooseEqual(unref(form).status, "published")) ? " selected" : ""}${_scopeId}>Published</option></select></div><div class="flex items-center" data-v-046e07bc${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_featured) ? ssrLooseContain(unref(form).is_featured, null) : unref(form).is_featured) ? " checked" : ""} type="checkbox" class="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" data-v-046e07bc${_scopeId}><label class="ml-2 text-sm text-gray-700" data-v-046e07bc${_scopeId}>Featured Page</label></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Sort Order</label><input${ssrRenderAttr("value", unref(form).sort_order)} type="number" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="0" data-v-046e07bc${_scopeId}></div><button type="submit"${ssrIncludeBooleanAttr(_ctx.processing) ? " disabled" : ""} class="w-full bg-brand-red hover:bg-red-600 disabled:bg-red-400 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200" data-v-046e07bc${_scopeId}>${ssrInterpolate(_ctx.processing ? "Updating..." : "Update Service Page")}</button></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-046e07bc${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-046e07bc${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-046e07bc${_scopeId}>SEO</h2></div><div class="p-6 space-y-4" data-v-046e07bc${_scopeId}><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Meta Title</label><input${ssrRenderAttr("value", unref(form).meta_title)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="SEO title" data-v-046e07bc${_scopeId}></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Meta Description</label><textarea rows="3" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="SEO description" data-v-046e07bc${_scopeId}>${ssrInterpolate(unref(form).meta_description)}</textarea></div><div data-v-046e07bc${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-046e07bc${_scopeId}>Meta Keywords</label><input${ssrRenderAttr("value", unref(form).meta_keywords)} type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="keyword1, keyword2, keyword3" data-v-046e07bc${_scopeId}></div></div></div><div class="bg-white rounded-xl shadow-sm border border-gray-200" data-v-046e07bc${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-046e07bc${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-046e07bc${_scopeId}>Page Info</h2></div><div class="p-6 space-y-3 text-sm" data-v-046e07bc${_scopeId}><div class="flex justify-between" data-v-046e07bc${_scopeId}><span class="text-gray-600" data-v-046e07bc${_scopeId}>Created:</span><span class="text-gray-900" data-v-046e07bc${_scopeId}>${ssrInterpolate(formatDate(__props.servicePage.created_at))}</span></div><div class="flex justify-between" data-v-046e07bc${_scopeId}><span class="text-gray-600" data-v-046e07bc${_scopeId}>Updated:</span><span class="text-gray-900" data-v-046e07bc${_scopeId}>${ssrInterpolate(formatDate(__props.servicePage.updated_at))}</span></div><div class="flex justify-between" data-v-046e07bc${_scopeId}><span class="text-gray-600" data-v-046e07bc${_scopeId}>URL:</span><span class="text-gray-900 font-mono text-xs" data-v-046e07bc${_scopeId}>/services/${ssrInterpolate(__props.servicePage.slug)}</span></div></div></div></div></div></form>`);
            ssrRenderTeleport(_push2, (_push3) => {
              if (showSuccessModal.value) {
                _push3(`<div class="fixed inset-0 z-50 overflow-y-auto" data-v-046e07bc${_scopeId}><div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" data-v-046e07bc${_scopeId}><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" data-v-046e07bc${_scopeId}></div><div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" data-v-046e07bc${_scopeId}><div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" data-v-046e07bc${_scopeId}><div class="sm:flex sm:items-start" data-v-046e07bc${_scopeId}><div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10" data-v-046e07bc${_scopeId}><svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-046e07bc${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-046e07bc${_scopeId}></path></svg></div><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" data-v-046e07bc${_scopeId}><h3 class="text-lg leading-6 font-medium text-gray-900" data-v-046e07bc${_scopeId}>Service Page Updated Successfully!</h3><div class="mt-2" data-v-046e07bc${_scopeId}><p class="text-sm text-gray-500" data-v-046e07bc${_scopeId}> Your service page &quot;<strong data-v-046e07bc${_scopeId}>${ssrInterpolate(__props.servicePage.title)}</strong>&quot; has been updated and saved successfully. </p></div></div></div></div><div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" data-v-046e07bc${_scopeId}>`);
                _push3(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("admin.service-pages.preview", __props.servicePage.id),
                  target: "_blank",
                  class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm"
                }, {
                  default: withCtx((_2, _push4, _parent3, _scopeId2) => {
                    if (_push4) {
                      _push4(` Preview Changes `);
                    } else {
                      return [
                        createTextVNode(" Preview Changes ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push3(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("admin.service-pages.index"),
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, {
                  default: withCtx((_2, _push4, _parent3, _scopeId2) => {
                    if (_push4) {
                      _push4(` Back to Service Pages `);
                    } else {
                      return [
                        createTextVNode(" Back to Service Pages ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push3(`<button class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm" data-v-046e07bc${_scopeId}> Continue Editing </button></div></div></div></div>`);
              } else {
                _push3(`<!---->`);
              }
            }, "body", false, _parent2);
          } else {
            return [
              createVNode(unref(Head), {
                title: `Edit ${__props.servicePage.title} - Admin Dashboard`
              }, null, 8, ["title"]),
              createVNode("div", { class: "flex items-center justify-between mb-6" }, [
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
                }, 8, ["href"]),
                createVNode("div", { class: "flex items-center space-x-3" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("admin.service-pages.preview", __props.servicePage.id),
                    target: "_blank",
                    class: "bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Preview ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  __props.servicePage.status === "published" ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: __props.servicePage.url,
                    target: "_blank",
                    class: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" View Live ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ])
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
                          createVNode("p", { class: "mt-1 text-sm text-gray-500" }, "Current URL: /services/" + toDisplayString(unref(form).slug), 1),
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
                        createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Image Content Section"),
                        createVNode("p", { class: "text-sm text-gray-600 mt-1" }, 'Configure the "Unlock the Full Potential" section content')
                      ]),
                      createVNode("div", { class: "p-6 space-y-6" }, [
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Title"),
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
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Subtitle"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).image_content_subtitle = $event,
                              type: "text",
                              class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                              placeholder: "Build Smarter, Faster, and Future-Ready Data Systems"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).image_content_subtitle]
                            ])
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Descriptions"),
                          withDirectives(createVNode("textarea", {
                            "onUpdate:modelValue": ($event) => descriptionsText.value = $event,
                            rows: "6",
                            class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "Transform your business with our comprehensive service solutions.\n\nAt Sinki.ai, our solutions simplify complexity, accelerate insights, and give your teams the confidence to act on data faster, smarter, and with measurable impact."
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, descriptionsText.value]
                          ]),
                          createVNode("p", { class: "text-sm text-gray-500 mt-1" }, "Enter each description paragraph on a new line")
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Image URL"),
                            createVNode("div", { class: "flex space-x-2" }, [
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).image_content_image = $event,
                                type: "text",
                                class: "flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "/images/serviceside.webp"
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
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "CTA Text"),
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
                        createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Configure the services grid section content and individual services")
                      ]),
                      createVNode("div", { class: "p-6 space-y-6" }, [
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Section Title"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).services_grid_title = $event,
                              type: "text",
                              class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                              placeholder: `Our ${unref(form).title} Services`
                            }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
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
                                  class: "text-red-600 hover:text-red-800"
                                }, " Remove ", 8, ["onClick"])
                              ]),
                              createVNode("div", { class: "space-y-4" }, [
                                createVNode("div", null, [
                                  createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Title"),
                                  withDirectives(createVNode("input", {
                                    "onUpdate:modelValue": ($event) => service.title = $event,
                                    type: "text",
                                    class: "w-full border border-gray-300 rounded px-3 py-2 text-sm",
                                    placeholder: "Service title"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, service.title]
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Description"),
                                  withDirectives(createVNode("textarea", {
                                    "onUpdate:modelValue": ($event) => service.description = $event,
                                    rows: "3",
                                    class: "w-full border border-gray-300 rounded px-3 py-2 text-sm",
                                    placeholder: "Service description"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, service.description]
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Icon (SVG)"),
                                  withDirectives(createVNode("textarea", {
                                    "onUpdate:modelValue": ($event) => service.icon = $event,
                                    rows: "2",
                                    class: "w-full border border-gray-300 rounded px-3 py-2 text-sm font-mono",
                                    placeholder: "<svg>...</svg>"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, service.icon]
                                  ])
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
                                placeholder: "We bring the best solutions to life on the enterprise platforms you already rely on."
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
                                placeholder: `Why Choose us for your ${unref(form).title} needs?`
                              }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                                [vModelText, unref(form).why_choose_title]
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Section Description"),
                              withDirectives(createVNode("textarea", {
                                "onUpdate:modelValue": ($event) => unref(form).why_choose_description = $event,
                                rows: "3",
                                class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "We deliver exceptional results with our proven methodology and expert team."
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
                        createVNode("div", { class: "space-y-6" }, [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Title"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).service_cta_title = $event,
                                type: "text",
                                class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: `Ready to Get Started with ${unref(form).title}?`
                              }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                                [vModelText, unref(form).service_cta_title]
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "CTA Text"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).service_cta_text = $event,
                                type: "text",
                                class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "Get Started Now"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).service_cta_text]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Description"),
                              withDirectives(createVNode("textarea", {
                                "onUpdate:modelValue": ($event) => unref(form).service_cta_description = $event,
                                rows: "3",
                                class: "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                placeholder: "Let's simplify your journey, and turn challenges into real results."
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(form).service_cta_description]
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Background Image URL"),
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
                        }, toDisplayString(_ctx.processing ? "Updating..." : "Update Service Page"), 9, ["disabled"])
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
                    ]),
                    createVNode("div", { class: "bg-white rounded-xl shadow-sm border border-gray-200" }, [
                      createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                        createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Page Info")
                      ]),
                      createVNode("div", { class: "p-6 space-y-3 text-sm" }, [
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("span", { class: "text-gray-600" }, "Created:"),
                          createVNode("span", { class: "text-gray-900" }, toDisplayString(formatDate(__props.servicePage.created_at)), 1)
                        ]),
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("span", { class: "text-gray-600" }, "Updated:"),
                          createVNode("span", { class: "text-gray-900" }, toDisplayString(formatDate(__props.servicePage.updated_at)), 1)
                        ]),
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("span", { class: "text-gray-600" }, "URL:"),
                          createVNode("span", { class: "text-gray-900 font-mono text-xs" }, "/services/" + toDisplayString(__props.servicePage.slug), 1)
                        ])
                      ])
                    ])
                  ])
                ])
              ], 32),
              (openBlock(), createBlock(Teleport, { to: "body" }, [
                showSuccessModal.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "fixed inset-0 z-50 overflow-y-auto"
                }, [
                  createVNode("div", { class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, [
                    createVNode("div", {
                      class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                      onClick: closeSuccessModal
                    }),
                    createVNode("div", { class: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" }, [
                      createVNode("div", { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, [
                        createVNode("div", { class: "sm:flex sm:items-start" }, [
                          createVNode("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                            (openBlock(), createBlock("svg", {
                              class: "h-6 w-6 text-green-600",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M5 13l4 4L19 7"
                              })
                            ]))
                          ]),
                          createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, [
                            createVNode("h3", { class: "text-lg leading-6 font-medium text-gray-900" }, "Service Page Updated Successfully!"),
                            createVNode("div", { class: "mt-2" }, [
                              createVNode("p", { class: "text-sm text-gray-500" }, [
                                createTextVNode(' Your service page "'),
                                createVNode("strong", null, toDisplayString(__props.servicePage.title), 1),
                                createTextVNode('" has been updated and saved successfully. ')
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("admin.service-pages.preview", __props.servicePage.id),
                          target: "_blank",
                          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Preview Changes ")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(unref(Link), {
                          href: _ctx.route("admin.service-pages.index"),
                          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Back to Service Pages ")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode("button", {
                          onClick: closeSuccessModal,
                          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                        }, " Continue Editing ")
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ServicePages/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-046e07bc"]]);
export {
  Edit as default
};
