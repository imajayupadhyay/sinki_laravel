import { ref, reactive, onMounted, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, withModifiers, createTextVNode, withDirectives, vModelText, vModelCheckbox, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-DZUdEQLU.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    heroSection: Object,
    partnerBadge: Object,
    storySection: Object,
    whatWeDoSection: Object,
    approachSection: Object
  },
  setup(__props) {
    const props = __props;
    const activeSection = ref("hero-section");
    const sectionNav = ref(null);
    const heroProcessing = ref(false);
    const heroErrors = ref({});
    const partnerProcessing = ref(false);
    const partnerErrors = ref({});
    const storyProcessing = ref(false);
    const storyErrors = ref({});
    const whatWeDoProcessing = ref(false);
    const whatWeDoErrors = ref({});
    const showAddServiceModal = ref(false);
    const editingService = ref(null);
    const approachProcessing = ref(false);
    const approachErrors = ref({});
    const showAddApproachStepModal = ref(false);
    const editingApproachStep = ref(null);
    const sections = ref([
      {
        id: "hero-section",
        name: "Hero Section",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>'
      },
      {
        id: "partner-badge-section",
        name: "Partner Badge",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>'
      },
      {
        id: "story-section",
        name: "Story Section",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>'
      },
      {
        id: "what-we-do-section",
        name: "What We Do",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>'
      },
      {
        id: "approach-section",
        name: "Our Approach",
        icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
      }
    ]);
    const heroForm = reactive({
      heading: props.heroSection?.heading || "",
      paragraph: props.heroSection?.paragraph || "",
      cta_text: props.heroSection?.cta_text || "",
      cta_link: props.heroSection?.cta_link || "",
      is_active: props.heroSection?.is_active ?? true
    });
    const partnerForm = reactive({
      text: props.partnerBadge?.text || "",
      logo_alt: props.partnerBadge?.logo_alt || "",
      is_active: props.partnerBadge?.is_active ?? true
    });
    const storyForm = reactive({
      header_tag: props.storySection?.header_tag || "OUR STORY",
      title: props.storySection?.title || "",
      subtitle: props.storySection?.subtitle || "",
      descriptions: props.storySection?.descriptions || ["", "", ""],
      image_alt: props.storySection?.image_alt || "",
      image_position: props.storySection?.image_position || "left",
      background_color: props.storySection?.background_color || "bg-white",
      is_active: props.storySection?.is_active ?? true
    });
    const whatWeDoForm = reactive({
      header_tag: props.whatWeDoSection?.header_tag || "HOW WE HELP",
      title: props.whatWeDoSection?.title || "",
      subtitle: props.whatWeDoSection?.subtitle || "",
      is_active: props.whatWeDoSection?.is_active ?? true
    });
    const serviceForm = reactive({
      title: "",
      description: "",
      icon_svg: "",
      sort_order: 1,
      is_active: true
    });
    const serviceProcessing = ref(false);
    const serviceErrors = ref({});
    const approachForm = reactive({
      header_tag: props.approachSection?.header_tag || "HOW WE WORK",
      title: props.approachSection?.title || "Our Data-First Approach",
      subtitle: props.approachSection?.subtitle || "How We Transform Your Data Vision Into Reality",
      cta_text: props.approachSection?.cta_text || "Book A Discovery Session",
      cta_link: props.approachSection?.cta_link || "",
      background_color: props.approachSection?.background_color || "bg-white",
      is_active: props.approachSection?.is_active ?? true
    });
    const approachStepForm = reactive({
      number: 1,
      title: "",
      short_description: "",
      description: "",
      icon_svg: "",
      sort_order: 1,
      is_active: true
    });
    const approachStepProcessing = ref(false);
    const approachStepErrors = ref({});
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
        activeSection.value = sectionId;
      }
    };
    const updateHero = () => {
      heroProcessing.value = true;
      heroErrors.value = {};
      router.put(route("admin.about-us.hero.update"), heroForm, {
        onSuccess: () => {
          heroProcessing.value = false;
        },
        onError: (errors) => {
          heroErrors.value = errors;
          heroProcessing.value = false;
        }
      });
    };
    const uploadHeroImage = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("image", file);
      router.post(route("admin.about-us.hero.image.upload"), formData, {
        forceFormData: true,
        onSuccess: () => {
          event.target.value = "";
        }
      });
    };
    const deleteHeroImage = () => {
      if (confirm("Are you sure you want to delete the hero background image?")) {
        router.delete(route("admin.about-us.hero.image.delete"));
      }
    };
    const updatePartnerBadge = () => {
      partnerProcessing.value = true;
      partnerErrors.value = {};
      router.put(route("admin.about-us.partner-badge.update"), partnerForm, {
        onSuccess: () => {
          partnerProcessing.value = false;
        },
        onError: (errors) => {
          partnerErrors.value = errors;
          partnerProcessing.value = false;
        }
      });
    };
    const uploadPartnerLogo = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("image", file);
      router.post(route("admin.about-us.partner-badge.logo.upload"), formData, {
        forceFormData: true,
        onSuccess: () => {
          event.target.value = "";
        }
      });
    };
    const deletePartnerLogo = () => {
      if (confirm("Are you sure you want to delete the partner logo?")) {
        router.delete(route("admin.about-us.partner-badge.logo.delete"));
      }
    };
    const updateStorySection = () => {
      storyProcessing.value = true;
      storyErrors.value = {};
      router.put(route("admin.about-us.story-section.update"), storyForm, {
        onSuccess: () => {
          storyProcessing.value = false;
        },
        onError: (errors) => {
          storyErrors.value = errors;
          storyProcessing.value = false;
        }
      });
    };
    const uploadStoryImage = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("image", file);
      router.post(route("admin.about-us.story-section.image.upload"), formData, {
        forceFormData: true,
        onSuccess: () => {
          event.target.value = "";
        }
      });
    };
    const deleteStoryImage = () => {
      if (confirm("Are you sure you want to delete the story image?")) {
        router.delete(route("admin.about-us.story-section.image.delete"));
      }
    };
    const addDescription = () => {
      storyForm.descriptions.push("");
    };
    const removeDescription = (index) => {
      if (storyForm.descriptions.length > 1) {
        storyForm.descriptions.splice(index, 1);
      }
    };
    const updateWhatWeDo = () => {
      whatWeDoProcessing.value = true;
      whatWeDoErrors.value = {};
      router.put(route("admin.about-us.what-we-do.update"), whatWeDoForm, {
        onSuccess: () => {
          whatWeDoProcessing.value = false;
        },
        onError: (errors) => {
          whatWeDoErrors.value = errors;
          whatWeDoProcessing.value = false;
        }
      });
    };
    const uploadWhatWeDoBackground = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("image", file);
      router.post(route("admin.about-us.what-we-do.background.upload"), formData, {
        forceFormData: true,
        onSuccess: () => {
          event.target.value = "";
        }
      });
    };
    const deleteWhatWeDoBackground = () => {
      if (confirm("Are you sure you want to delete the background image?")) {
        router.delete(route("admin.about-us.what-we-do.background.delete"));
      }
    };
    const addService = () => {
      serviceForm.title = "";
      serviceForm.description = "";
      serviceForm.icon_svg = "";
      serviceForm.sort_order = props.whatWeDoSection?.items?.length ? Math.max(...props.whatWeDoSection.items.map((i) => i.sort_order)) + 1 : 1;
      serviceForm.is_active = true;
      editingService.value = null;
      showAddServiceModal.value = true;
    };
    const editService = (service) => {
      serviceForm.title = service.title;
      serviceForm.description = service.description;
      serviceForm.icon_svg = service.icon_svg;
      serviceForm.sort_order = service.sort_order;
      serviceForm.is_active = service.is_active;
      editingService.value = service;
      showAddServiceModal.value = true;
    };
    const saveService = () => {
      serviceProcessing.value = true;
      serviceErrors.value = {};
      const url = editingService.value ? route("admin.about-us.what-we-do.items.update", editingService.value.id) : route("admin.about-us.what-we-do.items.store");
      const method = editingService.value ? "put" : "post";
      router[method](url, serviceForm, {
        onSuccess: () => {
          serviceProcessing.value = false;
          showAddServiceModal.value = false;
          editingService.value = null;
        },
        onError: (errors) => {
          serviceErrors.value = errors;
          serviceProcessing.value = false;
        }
      });
    };
    const deleteService = (service) => {
      if (confirm(`Are you sure you want to delete "${service.title}"?`)) {
        router.delete(route("admin.about-us.what-we-do.items.delete", service.id));
      }
    };
    const cancelServiceEdit = () => {
      showAddServiceModal.value = false;
      editingService.value = null;
      serviceForm.title = "";
      serviceForm.description = "";
      serviceForm.icon_svg = "";
      serviceForm.sort_order = 1;
      serviceForm.is_active = true;
    };
    const updateApproach = () => {
      approachProcessing.value = true;
      approachErrors.value = {};
      router.put(route("admin.about-us.approach.update"), approachForm, {
        onSuccess: () => {
          approachProcessing.value = false;
        },
        onError: (errors) => {
          approachErrors.value = errors;
          approachProcessing.value = false;
        }
      });
    };
    const addApproachStep = () => {
      approachStepForm.number = props.approachSection?.steps?.length ? Math.max(...props.approachSection.steps.map((s) => s.number)) + 1 : 1;
      approachStepForm.title = "";
      approachStepForm.short_description = "";
      approachStepForm.description = "";
      approachStepForm.icon_svg = "";
      approachStepForm.sort_order = props.approachSection?.steps?.length ? Math.max(...props.approachSection.steps.map((s) => s.sort_order)) + 1 : 1;
      approachStepForm.is_active = true;
      editingApproachStep.value = null;
      showAddApproachStepModal.value = true;
    };
    const editApproachStep = (step) => {
      approachStepForm.number = step.number;
      approachStepForm.title = step.title;
      approachStepForm.short_description = step.short_description;
      approachStepForm.description = step.description;
      approachStepForm.icon_svg = step.icon_svg;
      approachStepForm.sort_order = step.sort_order;
      approachStepForm.is_active = step.is_active;
      editingApproachStep.value = step;
      showAddApproachStepModal.value = true;
    };
    const saveApproachStep = () => {
      approachStepProcessing.value = true;
      approachStepErrors.value = {};
      const url = editingApproachStep.value ? route("admin.about-us.approach.steps.update", editingApproachStep.value.id) : route("admin.about-us.approach.steps.store");
      const method = editingApproachStep.value ? "put" : "post";
      router[method](url, approachStepForm, {
        onSuccess: () => {
          approachStepProcessing.value = false;
          showAddApproachStepModal.value = false;
          editingApproachStep.value = null;
        },
        onError: (errors) => {
          approachStepErrors.value = errors;
          approachStepProcessing.value = false;
        }
      });
    };
    const deleteApproachStep = (step) => {
      if (confirm(`Are you sure you want to delete "${step.title}"?`)) {
        router.delete(route("admin.about-us.approach.steps.delete", step.id));
      }
    };
    const cancelApproachStepEdit = () => {
      showAddApproachStepModal.value = false;
      editingApproachStep.value = null;
      approachStepForm.number = 1;
      approachStepForm.title = "";
      approachStepForm.short_description = "";
      approachStepForm.description = "";
      approachStepForm.icon_svg = "";
      approachStepForm.sort_order = 1;
      approachStepForm.is_active = true;
    };
    onMounted(() => {
      const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -80% 0px",
        threshold: 0
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        });
      }, observerOptions);
      sections.value.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.observe(element);
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "About Us Management",
        "page-subtitle": "Manage your website's About Us page content"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm mb-8" data-v-ab1c3830${_scopeId}><div class="mx-auto" data-v-ab1c3830${_scopeId}><nav class="flex space-x-8 overflow-x-auto py-4 px-0" data-v-ab1c3830${_scopeId}><!--[-->`);
            ssrRenderList(sections.value, (section) => {
              _push2(`<button class="${ssrRenderClass([
                "whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 flex items-center space-x-2",
                activeSection.value === section.id ? "bg-blue-100 text-blue-700 border-blue-200 border" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              ])}" data-v-ab1c3830${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}>${section.icon ?? ""}</svg><span data-v-ab1c3830${_scopeId}>${ssrInterpolate(section.name)}</span></button>`);
            });
            _push2(`<!--]--></nav></div></div><div id="hero-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-ab1c3830${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-ab1c3830${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-ab1c3830${_scopeId}>Hero Section</h2><p class="text-sm text-gray-600 mt-1" data-v-ab1c3830${_scopeId}>Manage the main hero section with background image, heading, paragraph and call-to-action</p></div><div class="p-6" data-v-ab1c3830${_scopeId}><form data-v-ab1c3830${_scopeId}><div class="space-y-6" data-v-ab1c3830${_scopeId}><div data-v-ab1c3830${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Background Image </label>`);
            if (__props.heroSection?.background_image) {
              _push2(`<div class="mb-4" data-v-ab1c3830${_scopeId}><div class="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden" data-v-ab1c3830${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.heroSection.background_image}`)} alt="Hero background" class="w-full h-full object-cover" data-v-ab1c3830${_scopeId}><div class="absolute top-2 right-2" data-v-ab1c3830${_scopeId}><button type="button" class="bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors" data-v-ab1c3830${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-ab1c3830${_scopeId}></path></svg></button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-center w-full" data-v-ab1c3830${_scopeId}><label for="hero-image-upload" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100" data-v-ab1c3830${_scopeId}><div class="flex flex-col items-center justify-center pt-5 pb-6" data-v-ab1c3830${_scopeId}><svg class="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-v-ab1c3830${_scopeId}></path></svg><p class="mb-2 text-sm text-gray-500" data-v-ab1c3830${_scopeId}><span class="font-semibold" data-v-ab1c3830${_scopeId}>Click to upload</span> background image </p><p class="text-xs text-gray-500" data-v-ab1c3830${_scopeId}>PNG, JPG or GIF (MAX. 2MB)</p></div><input id="hero-image-upload" type="file" class="hidden" accept="image/*" data-v-ab1c3830${_scopeId}></label></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-ab1c3830${_scopeId}><div data-v-ab1c3830${_scopeId}><label for="hero_heading" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Heading <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><input type="text" id="hero_heading"${ssrRenderAttr("value", heroForm.heading)} placeholder="Enter hero heading" class="${ssrRenderClass([{ "border-red-500": heroErrors.value.heading }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (heroErrors.value.heading) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(heroErrors.value.heading)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-ab1c3830${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-ab1c3830${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(heroForm.is_active) ? ssrLooseContain(heroForm.is_active, null) : heroForm.is_active) ? " checked" : ""} class="sr-only peer" data-v-ab1c3830${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-ab1c3830${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-ab1c3830${_scopeId}>Hero Section Active</span></label></div></div><div data-v-ab1c3830${_scopeId}><label for="hero_paragraph" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Paragraph <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><textarea id="hero_paragraph" rows="4" placeholder="Enter hero paragraph content" class="${ssrRenderClass([{ "border-red-500": heroErrors.value.paragraph }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-ab1c3830${_scopeId}>${ssrInterpolate(heroForm.paragraph)}</textarea>`);
            if (heroErrors.value.paragraph) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(heroErrors.value.paragraph)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-ab1c3830${_scopeId}><div data-v-ab1c3830${_scopeId}><label for="hero_cta_text" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Call-to-Action Text </label><input type="text" id="hero_cta_text"${ssrRenderAttr("value", heroForm.cta_text)} placeholder="e.g., Get Started" class="${ssrRenderClass([{ "border-red-500": heroErrors.value.cta_text }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (heroErrors.value.cta_text) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(heroErrors.value.cta_text)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-ab1c3830${_scopeId}><label for="hero_cta_link" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Call-to-Action Link </label><input type="url" id="hero_cta_link"${ssrRenderAttr("value", heroForm.cta_link)} placeholder="https://example.com" class="${ssrRenderClass([{ "border-red-500": heroErrors.value.cta_link }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (heroErrors.value.cta_link) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(heroErrors.value.cta_link)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="flex justify-end" data-v-ab1c3830${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(heroProcessing.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed" data-v-ab1c3830${_scopeId}>`);
            if (heroProcessing.value) {
              _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-ab1c3830${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(heroProcessing.value ? "Saving..." : "Save Hero Section")}</button></div></div></form></div></div><div id="partner-badge-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-ab1c3830${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-ab1c3830${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-ab1c3830${_scopeId}>Partner Badge Section</h2><p class="text-sm text-gray-600 mt-1" data-v-ab1c3830${_scopeId}>Manage the partner badge text and logo display</p></div><div class="p-6" data-v-ab1c3830${_scopeId}><form data-v-ab1c3830${_scopeId}><div class="space-y-6" data-v-ab1c3830${_scopeId}><div data-v-ab1c3830${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Partner Logo </label>`);
            if (__props.partnerBadge?.logo_image) {
              _push2(`<div class="mb-4" data-v-ab1c3830${_scopeId}><div class="relative w-32 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center" data-v-ab1c3830${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.partnerBadge.logo_image}`)}${ssrRenderAttr("alt", partnerForm.logo_alt)} class="max-w-full max-h-full object-contain" data-v-ab1c3830${_scopeId}><div class="absolute top-1 right-1" data-v-ab1c3830${_scopeId}><button type="button" class="bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors" data-v-ab1c3830${_scopeId}><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-ab1c3830${_scopeId}></path></svg></button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-center w-full" data-v-ab1c3830${_scopeId}><label for="partner-logo-upload" class="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100" data-v-ab1c3830${_scopeId}><div class="flex flex-col items-center justify-center pt-3 pb-3" data-v-ab1c3830${_scopeId}><svg class="w-6 h-6 mb-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-v-ab1c3830${_scopeId}></path></svg><p class="text-xs text-gray-500" data-v-ab1c3830${_scopeId}><span class="font-semibold" data-v-ab1c3830${_scopeId}>Click to upload</span> partner logo </p><p class="text-xs text-gray-500" data-v-ab1c3830${_scopeId}>PNG, JPG or SVG (MAX. 2MB)</p></div><input id="partner-logo-upload" type="file" class="hidden" accept="image/*" data-v-ab1c3830${_scopeId}></label></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-ab1c3830${_scopeId}><div data-v-ab1c3830${_scopeId}><label for="partner_text" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Badge Text <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><input type="text" id="partner_text"${ssrRenderAttr("value", partnerForm.text)} placeholder="e.g., An Official Databricks Partner" class="${ssrRenderClass([{ "border-red-500": partnerErrors.value.text }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (partnerErrors.value.text) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(partnerErrors.value.text)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-ab1c3830${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-ab1c3830${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(partnerForm.is_active) ? ssrLooseContain(partnerForm.is_active, null) : partnerForm.is_active) ? " checked" : ""} class="sr-only peer" data-v-ab1c3830${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-ab1c3830${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-ab1c3830${_scopeId}>Partner Badge Active</span></label></div></div><div data-v-ab1c3830${_scopeId}><label for="partner_logo_alt" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Logo Alt Text </label><input type="text" id="partner_logo_alt"${ssrRenderAttr("value", partnerForm.logo_alt)} placeholder="e.g., Databricks Logo" class="${ssrRenderClass([{ "border-red-500": partnerErrors.value.logo_alt }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (partnerErrors.value.logo_alt) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(partnerErrors.value.logo_alt)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex justify-end" data-v-ab1c3830${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(partnerProcessing.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed" data-v-ab1c3830${_scopeId}>`);
            if (partnerProcessing.value) {
              _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-ab1c3830${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(partnerProcessing.value ? "Saving..." : "Save Partner Badge")}</button></div></div></form></div></div><div id="story-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-ab1c3830${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-ab1c3830${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-ab1c3830${_scopeId}>Story Section</h2><p class="text-sm text-gray-600 mt-1" data-v-ab1c3830${_scopeId}>Manage the about story content with image, title, and descriptions</p></div><div class="p-6" data-v-ab1c3830${_scopeId}><form data-v-ab1c3830${_scopeId}><div class="space-y-6" data-v-ab1c3830${_scopeId}><div data-v-ab1c3830${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Story Image </label>`);
            if (__props.storySection?.image_path) {
              _push2(`<div class="mb-4" data-v-ab1c3830${_scopeId}><div class="relative w-48 h-32 bg-gray-100 rounded-lg overflow-hidden" data-v-ab1c3830${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.storySection.image_path}`)}${ssrRenderAttr("alt", storyForm.image_alt)} class="w-full h-full object-cover" data-v-ab1c3830${_scopeId}><div class="absolute top-2 right-2" data-v-ab1c3830${_scopeId}><button type="button" class="bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors" data-v-ab1c3830${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-ab1c3830${_scopeId}></path></svg></button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-center w-full" data-v-ab1c3830${_scopeId}><label for="story-image-upload" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100" data-v-ab1c3830${_scopeId}><div class="flex flex-col items-center justify-center pt-5 pb-6" data-v-ab1c3830${_scopeId}><svg class="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-v-ab1c3830${_scopeId}></path></svg><p class="mb-2 text-sm text-gray-500" data-v-ab1c3830${_scopeId}><span class="font-semibold" data-v-ab1c3830${_scopeId}>Click to upload</span> story image </p><p class="text-xs text-gray-500" data-v-ab1c3830${_scopeId}>PNG, JPG or GIF (MAX. 2MB)</p></div><input id="story-image-upload" type="file" class="hidden" accept="image/*" data-v-ab1c3830${_scopeId}></label></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-ab1c3830${_scopeId}><div data-v-ab1c3830${_scopeId}><label for="story_header_tag" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Header Tag <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><input type="text" id="story_header_tag"${ssrRenderAttr("value", storyForm.header_tag)} placeholder="e.g., OUR STORY" class="${ssrRenderClass([{ "border-red-500": storyErrors.value.header_tag }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (storyErrors.value.header_tag) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(storyErrors.value.header_tag)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-ab1c3830${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-ab1c3830${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(storyForm.is_active) ? ssrLooseContain(storyForm.is_active, null) : storyForm.is_active) ? " checked" : ""} class="sr-only peer" data-v-ab1c3830${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-ab1c3830${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-ab1c3830${_scopeId}>Story Section Active</span></label></div></div><div data-v-ab1c3830${_scopeId}><label for="story_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Title <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><input type="text" id="story_title"${ssrRenderAttr("value", storyForm.title)} placeholder="e.g., Sinki, a Name with a Purpose" class="${ssrRenderClass([{ "border-red-500": storyErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (storyErrors.value.title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(storyErrors.value.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-ab1c3830${_scopeId}><label for="story_subtitle" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Subtitle (Optional) </label><input type="text" id="story_subtitle"${ssrRenderAttr("value", storyForm.subtitle)} placeholder="Optional subtitle text" class="${ssrRenderClass([{ "border-red-500": storyErrors.value.subtitle }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (storyErrors.value.subtitle) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(storyErrors.value.subtitle)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-ab1c3830${_scopeId}><div class="flex justify-between items-center mb-2" data-v-ab1c3830${_scopeId}><label class="block text-sm font-medium text-gray-700" data-v-ab1c3830${_scopeId}> Description Paragraphs <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><button type="button" class="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red" data-v-ab1c3830${_scopeId}><svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-ab1c3830${_scopeId}></path></svg> Add Paragraph </button></div><div class="space-y-4" data-v-ab1c3830${_scopeId}><!--[-->`);
            ssrRenderList(storyForm.descriptions, (description, index) => {
              _push2(`<div class="relative" data-v-ab1c3830${_scopeId}><div class="flex items-start space-x-2" data-v-ab1c3830${_scopeId}><div class="flex-1" data-v-ab1c3830${_scopeId}><textarea rows="3"${ssrRenderAttr("placeholder", `Paragraph ${index + 1} - You can use HTML tags like <em> and <strong>`)} class="${ssrRenderClass([{ "border-red-500": storyErrors.value[`descriptions.${index}`] }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-ab1c3830${_scopeId}>${ssrInterpolate(storyForm.descriptions[index])}</textarea>`);
              if (storyErrors.value[`descriptions.${index}`]) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(storyErrors.value[`descriptions.${index}`])}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (storyForm.descriptions.length > 1) {
                _push2(`<button type="button" class="flex-shrink-0 mt-2 p-1 text-red-600 hover:text-red-800 transition-colors" data-v-ab1c3830${_scopeId}><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-ab1c3830${_scopeId}></path></svg></button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-ab1c3830${_scopeId}><div data-v-ab1c3830${_scopeId}><label for="story_image_alt" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Image Alt Text </label><input type="text" id="story_image_alt"${ssrRenderAttr("value", storyForm.image_alt)} placeholder="e.g., Helsinki city representing our inspiration" class="${ssrRenderClass([{ "border-red-500": storyErrors.value.image_alt }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (storyErrors.value.image_alt) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(storyErrors.value.image_alt)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-ab1c3830${_scopeId}><label for="story_image_position" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Image Position <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><select id="story_image_position" class="${ssrRenderClass([{ "border-red-500": storyErrors.value.image_position }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}><option value="left" data-v-ab1c3830${ssrIncludeBooleanAttr(Array.isArray(storyForm.image_position) ? ssrLooseContain(storyForm.image_position, "left") : ssrLooseEqual(storyForm.image_position, "left")) ? " selected" : ""}${_scopeId}>Left</option><option value="right" data-v-ab1c3830${ssrIncludeBooleanAttr(Array.isArray(storyForm.image_position) ? ssrLooseContain(storyForm.image_position, "right") : ssrLooseEqual(storyForm.image_position, "right")) ? " selected" : ""}${_scopeId}>Right</option></select>`);
            if (storyErrors.value.image_position) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(storyErrors.value.image_position)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-ab1c3830${_scopeId}><label for="story_background_color" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Background Color <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><select id="story_background_color" class="${ssrRenderClass([{ "border-red-500": storyErrors.value.background_color }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}><option value="bg-white" data-v-ab1c3830${ssrIncludeBooleanAttr(Array.isArray(storyForm.background_color) ? ssrLooseContain(storyForm.background_color, "bg-white") : ssrLooseEqual(storyForm.background_color, "bg-white")) ? " selected" : ""}${_scopeId}>White</option><option value="bg-gray-50" data-v-ab1c3830${ssrIncludeBooleanAttr(Array.isArray(storyForm.background_color) ? ssrLooseContain(storyForm.background_color, "bg-gray-50") : ssrLooseEqual(storyForm.background_color, "bg-gray-50")) ? " selected" : ""}${_scopeId}>Light Gray</option><option value="bg-gray-100" data-v-ab1c3830${ssrIncludeBooleanAttr(Array.isArray(storyForm.background_color) ? ssrLooseContain(storyForm.background_color, "bg-gray-100") : ssrLooseEqual(storyForm.background_color, "bg-gray-100")) ? " selected" : ""}${_scopeId}>Gray</option><option value="bg-blue-50" data-v-ab1c3830${ssrIncludeBooleanAttr(Array.isArray(storyForm.background_color) ? ssrLooseContain(storyForm.background_color, "bg-blue-50") : ssrLooseEqual(storyForm.background_color, "bg-blue-50")) ? " selected" : ""}${_scopeId}>Light Blue</option><option value="bg-green-50" data-v-ab1c3830${ssrIncludeBooleanAttr(Array.isArray(storyForm.background_color) ? ssrLooseContain(storyForm.background_color, "bg-green-50") : ssrLooseEqual(storyForm.background_color, "bg-green-50")) ? " selected" : ""}${_scopeId}>Light Green</option></select>`);
            if (storyErrors.value.background_color) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(storyErrors.value.background_color)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="flex justify-end" data-v-ab1c3830${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(storyProcessing.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed" data-v-ab1c3830${_scopeId}>`);
            if (storyProcessing.value) {
              _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-ab1c3830${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(storyProcessing.value ? "Saving..." : "Save Story Section")}</button></div></div></form></div></div><div id="what-we-do-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-ab1c3830${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-ab1c3830${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-ab1c3830${_scopeId}>What We Do Section</h2><p class="text-sm text-gray-600 mt-1" data-v-ab1c3830${_scopeId}>Manage the what we do section header and background</p></div><div class="p-6" data-v-ab1c3830${_scopeId}><form data-v-ab1c3830${_scopeId}><div class="space-y-6" data-v-ab1c3830${_scopeId}><div data-v-ab1c3830${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Background Image </label>`);
            if (__props.whatWeDoSection?.background_image) {
              _push2(`<div class="mb-4" data-v-ab1c3830${_scopeId}><div class="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden" data-v-ab1c3830${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.whatWeDoSection.background_image}`)} alt="Background image" class="w-full h-full object-cover" data-v-ab1c3830${_scopeId}><div class="absolute top-2 right-2" data-v-ab1c3830${_scopeId}><button type="button" class="bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors" data-v-ab1c3830${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-ab1c3830${_scopeId}></path></svg></button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-center w-full" data-v-ab1c3830${_scopeId}><label for="what-we-do-bg-upload" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100" data-v-ab1c3830${_scopeId}><div class="flex flex-col items-center justify-center pt-5 pb-6" data-v-ab1c3830${_scopeId}><svg class="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-v-ab1c3830${_scopeId}></path></svg><p class="mb-2 text-sm text-gray-500" data-v-ab1c3830${_scopeId}><span class="font-semibold" data-v-ab1c3830${_scopeId}>Click to upload</span> background image </p><p class="text-xs text-gray-500" data-v-ab1c3830${_scopeId}>PNG, JPG or GIF (MAX. 2MB)</p></div><input id="what-we-do-bg-upload" type="file" class="hidden" accept="image/*" data-v-ab1c3830${_scopeId}></label></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-ab1c3830${_scopeId}><div data-v-ab1c3830${_scopeId}><label for="what_we_do_header_tag" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Header Tag <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><input type="text" id="what_we_do_header_tag"${ssrRenderAttr("value", whatWeDoForm.header_tag)} placeholder="e.g., HOW WE HELP" class="${ssrRenderClass([{ "border-red-500": whatWeDoErrors.value.header_tag }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (whatWeDoErrors.value.header_tag) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(whatWeDoErrors.value.header_tag)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-ab1c3830${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-ab1c3830${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(whatWeDoForm.is_active) ? ssrLooseContain(whatWeDoForm.is_active, null) : whatWeDoForm.is_active) ? " checked" : ""} class="sr-only peer" data-v-ab1c3830${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-ab1c3830${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-ab1c3830${_scopeId}>What We Do Section Active</span></label></div></div><div data-v-ab1c3830${_scopeId}><label for="what_we_do_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Title <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><input type="text" id="what_we_do_title"${ssrRenderAttr("value", whatWeDoForm.title)} placeholder="e.g., What We Do" class="${ssrRenderClass([{ "border-red-500": whatWeDoErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (whatWeDoErrors.value.title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(whatWeDoErrors.value.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-ab1c3830${_scopeId}><label for="what_we_do_subtitle" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Subtitle <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><textarea id="what_we_do_subtitle" rows="2" placeholder="e.g., We help enterprises harness the full power of Databricks to unify data, analytics, and AI." class="${ssrRenderClass([{ "border-red-500": whatWeDoErrors.value.subtitle }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-ab1c3830${_scopeId}>${ssrInterpolate(whatWeDoForm.subtitle)}</textarea>`);
            if (whatWeDoErrors.value.subtitle) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(whatWeDoErrors.value.subtitle)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="border border-gray-200 rounded-lg p-6" data-v-ab1c3830${_scopeId}><div class="flex justify-between items-center mb-4" data-v-ab1c3830${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-ab1c3830${_scopeId}>Service Items</h3><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-v-ab1c3830${_scopeId}><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-ab1c3830${_scopeId}></path></svg> Add Service </button></div>`);
            if (__props.whatWeDoSection?.items?.length) {
              _push2(`<div class="space-y-4" data-v-ab1c3830${_scopeId}><!--[-->`);
              ssrRenderList(__props.whatWeDoSection.items, (item, index) => {
                _push2(`<div class="border border-gray-300 rounded-lg p-4 bg-gray-50" data-v-ab1c3830${_scopeId}><div class="flex items-start justify-between" data-v-ab1c3830${_scopeId}><div class="flex-1 min-w-0" data-v-ab1c3830${_scopeId}><div class="flex items-center space-x-3 mb-2" data-v-ab1c3830${_scopeId}><div class="flex-shrink-0" data-v-ab1c3830${_scopeId}><div class="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center" data-v-ab1c3830${_scopeId}><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}>${item.icon_svg ?? ""}</svg></div></div><div class="flex-1 min-w-0" data-v-ab1c3830${_scopeId}><h4 class="text-sm font-medium text-gray-900 truncate" data-v-ab1c3830${_scopeId}>${ssrInterpolate(item.title)}</h4><p class="text-xs text-gray-500" data-v-ab1c3830${_scopeId}>Sort Order: ${ssrInterpolate(item.sort_order)}</p></div><div class="flex items-center space-x-2" data-v-ab1c3830${_scopeId}><span class="${ssrRenderClass([item.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}" data-v-ab1c3830${_scopeId}>${ssrInterpolate(item.is_active ? "Active" : "Inactive")}</span><button type="button" class="text-brand-red hover:text-red-700" data-v-ab1c3830${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-ab1c3830${_scopeId}></path></svg></button><button type="button" class="text-red-600 hover:text-red-800" data-v-ab1c3830${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-ab1c3830${_scopeId}></path></svg></button></div></div><p class="text-sm text-gray-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(item.description)}</p></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-8 text-gray-500" data-v-ab1c3830${_scopeId}><svg class="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-v-ab1c3830${_scopeId}></path></svg><p data-v-ab1c3830${_scopeId}>No service items found. Run the seeder or add services manually.</p></div>`);
            }
            _push2(`</div><div class="flex justify-end" data-v-ab1c3830${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(whatWeDoProcessing.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed" data-v-ab1c3830${_scopeId}>`);
            if (whatWeDoProcessing.value) {
              _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-ab1c3830${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(whatWeDoProcessing.value ? "Saving..." : "Save What We Do Section")}</button></div></div></form></div></div><div id="approach-section" class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8" data-v-ab1c3830${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-ab1c3830${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-ab1c3830${_scopeId}>Our Approach Section</h2><p class="text-sm text-gray-600 mt-1" data-v-ab1c3830${_scopeId}>Manage the approach section header and process steps</p></div><div class="p-6" data-v-ab1c3830${_scopeId}><form data-v-ab1c3830${_scopeId}><div class="space-y-6" data-v-ab1c3830${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-ab1c3830${_scopeId}><div data-v-ab1c3830${_scopeId}><label for="approach_header_tag" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Header Tag <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><input type="text" id="approach_header_tag"${ssrRenderAttr("value", approachForm.header_tag)} placeholder="e.g., HOW WE WORK" class="${ssrRenderClass([{ "border-red-500": approachErrors.value.header_tag }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (approachErrors.value.header_tag) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachErrors.value.header_tag)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center" data-v-ab1c3830${_scopeId}><label class="relative inline-flex items-center cursor-pointer" data-v-ab1c3830${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(approachForm.is_active) ? ssrLooseContain(approachForm.is_active, null) : approachForm.is_active) ? " checked" : ""} class="sr-only peer" data-v-ab1c3830${_scopeId}><div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[&#39;&#39;] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" data-v-ab1c3830${_scopeId}></div><span class="ml-3 text-sm font-medium text-gray-700" data-v-ab1c3830${_scopeId}>Approach Section Active</span></label></div></div><div data-v-ab1c3830${_scopeId}><label for="approach_title" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Title <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><input type="text" id="approach_title"${ssrRenderAttr("value", approachForm.title)} placeholder="e.g., Our Data-First Approach" class="${ssrRenderClass([{ "border-red-500": approachErrors.value.title }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (approachErrors.value.title) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachErrors.value.title)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-ab1c3830${_scopeId}><label for="approach_subtitle" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Subtitle <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><textarea id="approach_subtitle" rows="2" placeholder="e.g., How We Transform Your Data Vision Into Reality" class="${ssrRenderClass([{ "border-red-500": approachErrors.value.subtitle }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachForm.subtitle)}</textarea>`);
            if (approachErrors.value.subtitle) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachErrors.value.subtitle)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-v-ab1c3830${_scopeId}><div data-v-ab1c3830${_scopeId}><label for="approach_cta_text" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Call-to-Action Text <span class="text-red-500" data-v-ab1c3830${_scopeId}>*</span></label><input type="text" id="approach_cta_text"${ssrRenderAttr("value", approachForm.cta_text)} placeholder="e.g., Book A Discovery Session" class="${ssrRenderClass([{ "border-red-500": approachErrors.value.cta_text }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (approachErrors.value.cta_text) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachErrors.value.cta_text)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-ab1c3830${_scopeId}><label for="approach_background_color" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Background Color </label><select id="approach_background_color" class="${ssrRenderClass([{ "border-red-500": approachErrors.value.background_color }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}><option value="bg-white" data-v-ab1c3830${ssrIncludeBooleanAttr(Array.isArray(approachForm.background_color) ? ssrLooseContain(approachForm.background_color, "bg-white") : ssrLooseEqual(approachForm.background_color, "bg-white")) ? " selected" : ""}${_scopeId}>White</option><option value="bg-gray-50" data-v-ab1c3830${ssrIncludeBooleanAttr(Array.isArray(approachForm.background_color) ? ssrLooseContain(approachForm.background_color, "bg-gray-50") : ssrLooseEqual(approachForm.background_color, "bg-gray-50")) ? " selected" : ""}${_scopeId}>Light Gray</option><option value="bg-gray-100" data-v-ab1c3830${ssrIncludeBooleanAttr(Array.isArray(approachForm.background_color) ? ssrLooseContain(approachForm.background_color, "bg-gray-100") : ssrLooseEqual(approachForm.background_color, "bg-gray-100")) ? " selected" : ""}${_scopeId}>Gray</option><option value="bg-blue-50" data-v-ab1c3830${ssrIncludeBooleanAttr(Array.isArray(approachForm.background_color) ? ssrLooseContain(approachForm.background_color, "bg-blue-50") : ssrLooseEqual(approachForm.background_color, "bg-blue-50")) ? " selected" : ""}${_scopeId}>Light Blue</option><option value="bg-green-50" data-v-ab1c3830${ssrIncludeBooleanAttr(Array.isArray(approachForm.background_color) ? ssrLooseContain(approachForm.background_color, "bg-green-50") : ssrLooseEqual(approachForm.background_color, "bg-green-50")) ? " selected" : ""}${_scopeId}>Light Green</option></select>`);
            if (approachErrors.value.background_color) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachErrors.value.background_color)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div data-v-ab1c3830${_scopeId}><label for="approach_cta_link" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Call-to-Action Link (Optional) </label><input type="url" id="approach_cta_link"${ssrRenderAttr("value", approachForm.cta_link)} placeholder="https://example.com" class="${ssrRenderClass([{ "border-red-500": approachErrors.value.cta_link }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
            if (approachErrors.value.cta_link) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachErrors.value.cta_link)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="border border-gray-200 rounded-lg p-6" data-v-ab1c3830${_scopeId}><div class="flex justify-between items-center mb-4" data-v-ab1c3830${_scopeId}><h3 class="text-lg font-medium text-gray-900" data-v-ab1c3830${_scopeId}>Approach Steps</h3><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-v-ab1c3830${_scopeId}><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-ab1c3830${_scopeId}></path></svg> Add Step </button></div>`);
            if (__props.approachSection?.steps?.length) {
              _push2(`<div class="space-y-4" data-v-ab1c3830${_scopeId}><!--[-->`);
              ssrRenderList(__props.approachSection.steps, (step, index) => {
                _push2(`<div class="border border-gray-300 rounded-lg p-4 bg-gray-50" data-v-ab1c3830${_scopeId}><div class="flex items-start justify-between" data-v-ab1c3830${_scopeId}><div class="flex-1 min-w-0" data-v-ab1c3830${_scopeId}><div class="flex items-center space-x-3 mb-2" data-v-ab1c3830${_scopeId}><div class="flex-shrink-0" data-v-ab1c3830${_scopeId}><div class="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center" data-v-ab1c3830${_scopeId}><span class="text-white font-bold text-sm" data-v-ab1c3830${_scopeId}>${ssrInterpolate(step.number)}</span></div></div><div class="flex-1 min-w-0" data-v-ab1c3830${_scopeId}><h4 class="text-sm font-medium text-gray-900 truncate" data-v-ab1c3830${_scopeId}>${ssrInterpolate(step.title)}</h4><p class="text-xs text-gray-500" data-v-ab1c3830${_scopeId}>Sort Order: ${ssrInterpolate(step.sort_order)}</p></div><div class="flex items-center space-x-2" data-v-ab1c3830${_scopeId}><span class="${ssrRenderClass([step.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}" data-v-ab1c3830${_scopeId}>${ssrInterpolate(step.is_active ? "Active" : "Inactive")}</span><button type="button" class="text-brand-red hover:text-red-700" data-v-ab1c3830${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-ab1c3830${_scopeId}></path></svg></button><button type="button" class="text-red-600 hover:text-red-800" data-v-ab1c3830${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-ab1c3830${_scopeId}></path></svg></button></div></div><p class="text-sm text-gray-600 mb-1" data-v-ab1c3830${_scopeId}><strong data-v-ab1c3830${_scopeId}>Short:</strong> ${ssrInterpolate(step.short_description)}</p><p class="text-sm text-gray-600" data-v-ab1c3830${_scopeId}><strong data-v-ab1c3830${_scopeId}>Description:</strong> ${ssrInterpolate(step.description)}</p></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-8 text-gray-500" data-v-ab1c3830${_scopeId}><svg class="w-12 h-12 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-ab1c3830${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-ab1c3830${_scopeId}></path></svg><p data-v-ab1c3830${_scopeId}>No approach steps found. Run the seeder or add steps manually.</p></div>`);
            }
            _push2(`</div><div class="flex justify-end" data-v-ab1c3830${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(approachProcessing.value) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed" data-v-ab1c3830${_scopeId}>`);
            if (approachProcessing.value) {
              _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-ab1c3830${_scopeId}></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(approachProcessing.value ? "Saving..." : "Save Approach Section")}</button></div></div></form></div></div>`);
            if (showAddServiceModal.value) {
              _push2(`<div class="fixed inset-0 z-50 overflow-y-auto" data-v-ab1c3830${_scopeId}><div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" data-v-ab1c3830${_scopeId}><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" data-v-ab1c3830${_scopeId}></div><div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" data-v-ab1c3830${_scopeId}><div class="sm:flex sm:items-start" data-v-ab1c3830${_scopeId}><div class="mt-3 text-center sm:mt-0 sm:text-left w-full" data-v-ab1c3830${_scopeId}><h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" data-v-ab1c3830${_scopeId}>${ssrInterpolate(editingService.value ? "Edit Service Item" : "Add Service Item")}</h3><form data-v-ab1c3830${_scopeId}><div class="space-y-4" data-v-ab1c3830${_scopeId}><div data-v-ab1c3830${_scopeId}><label for="service-title" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Title </label><input id="service-title"${ssrRenderAttr("value", serviceForm.title)} type="text" required class="${ssrRenderClass([{ "border-red-500": serviceErrors.value.title }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
              if (serviceErrors.value.title) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(serviceErrors.value.title)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-ab1c3830${_scopeId}><label for="service-description" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Description </label><textarea id="service-description" rows="3" required class="${ssrRenderClass([{ "border-red-500": serviceErrors.value.description }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>${ssrInterpolate(serviceForm.description)}</textarea>`);
              if (serviceErrors.value.description) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(serviceErrors.value.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-ab1c3830${_scopeId}><label for="service-icon" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Icon SVG </label><textarea id="service-icon" rows="3" placeholder="&lt;path d=&#39;...&#39;/&gt;" class="${ssrRenderClass([{ "border-red-500": serviceErrors.value.icon_svg }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red font-mono"])}" data-v-ab1c3830${_scopeId}>${ssrInterpolate(serviceForm.icon_svg)}</textarea>`);
              if (serviceErrors.value.icon_svg) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(serviceErrors.value.icon_svg)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="mt-1 text-xs text-gray-500" data-v-ab1c3830${_scopeId}> Enter the path elements for the SVG icon (without &lt;svg&gt; wrapper) </p></div><div data-v-ab1c3830${_scopeId}><label for="service-sort-order" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Sort Order </label><input id="service-sort-order"${ssrRenderAttr("value", serviceForm.sort_order)} type="number" min="1" required class="${ssrRenderClass([{ "border-red-500": serviceErrors.value.sort_order }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
              if (serviceErrors.value.sort_order) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(serviceErrors.value.sort_order)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center" data-v-ab1c3830${_scopeId}><input id="service-is-active"${ssrIncludeBooleanAttr(Array.isArray(serviceForm.is_active) ? ssrLooseContain(serviceForm.is_active, null) : serviceForm.is_active) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-brand-red focus:ring-brand-red" data-v-ab1c3830${_scopeId}><label for="service-is-active" class="ml-2 block text-sm text-gray-700" data-v-ab1c3830${_scopeId}> Active </label></div></div><div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse" data-v-ab1c3830${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(serviceProcessing.value) ? " disabled" : ""} class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50" data-v-ab1c3830${_scopeId}>`);
              if (serviceProcessing.value) {
                _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-ab1c3830${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(serviceProcessing.value ? "Saving..." : editingService.value ? "Update" : "Add")} Service </button><button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:mt-0 sm:w-auto sm:text-sm" data-v-ab1c3830${_scopeId}> Cancel </button></div></form></div></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (showAddApproachStepModal.value) {
              _push2(`<div class="fixed inset-0 z-50 overflow-y-auto" data-v-ab1c3830${_scopeId}><div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" data-v-ab1c3830${_scopeId}><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" data-v-ab1c3830${_scopeId}></div><div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" data-v-ab1c3830${_scopeId}><div class="sm:flex sm:items-start" data-v-ab1c3830${_scopeId}><div class="mt-3 text-center sm:mt-0 sm:text-left w-full" data-v-ab1c3830${_scopeId}><h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" data-v-ab1c3830${_scopeId}>${ssrInterpolate(editingApproachStep.value ? "Edit Approach Step" : "Add Approach Step")}</h3><form data-v-ab1c3830${_scopeId}><div class="space-y-4" data-v-ab1c3830${_scopeId}><div data-v-ab1c3830${_scopeId}><label for="step-number" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Step Number </label><input id="step-number"${ssrRenderAttr("value", approachStepForm.number)} type="number" min="1" required class="${ssrRenderClass([{ "border-red-500": approachStepErrors.value.number }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
              if (approachStepErrors.value.number) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachStepErrors.value.number)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-ab1c3830${_scopeId}><label for="step-title" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Title </label><input id="step-title"${ssrRenderAttr("value", approachStepForm.title)} type="text" required class="${ssrRenderClass([{ "border-red-500": approachStepErrors.value.title }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
              if (approachStepErrors.value.title) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachStepErrors.value.title)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-ab1c3830${_scopeId}><label for="step-short-description" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Short Description </label><input id="step-short-description"${ssrRenderAttr("value", approachStepForm.short_description)} type="text" required class="${ssrRenderClass([{ "border-red-500": approachStepErrors.value.short_description }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
              if (approachStepErrors.value.short_description) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachStepErrors.value.short_description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-ab1c3830${_scopeId}><label for="step-description" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Description </label><textarea id="step-description" rows="3" required class="${ssrRenderClass([{ "border-red-500": approachStepErrors.value.description }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachStepForm.description)}</textarea>`);
              if (approachStepErrors.value.description) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachStepErrors.value.description)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-ab1c3830${_scopeId}><label for="step-icon" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Icon SVG </label><textarea id="step-icon" rows="3" placeholder="&lt;path d=&#39;...&#39;/&gt;" class="${ssrRenderClass([{ "border-red-500": approachStepErrors.value.icon_svg }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red font-mono"])}" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachStepForm.icon_svg)}</textarea>`);
              if (approachStepErrors.value.icon_svg) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachStepErrors.value.icon_svg)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<p class="mt-1 text-xs text-gray-500" data-v-ab1c3830${_scopeId}> Enter the path elements for the SVG icon (without &lt;svg&gt; wrapper) </p></div><div data-v-ab1c3830${_scopeId}><label for="step-sort-order" class="block text-sm font-medium text-gray-700 mb-2" data-v-ab1c3830${_scopeId}> Sort Order </label><input id="step-sort-order"${ssrRenderAttr("value", approachStepForm.sort_order)} type="number" min="1" required class="${ssrRenderClass([{ "border-red-500": approachStepErrors.value.sort_order }, "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-ab1c3830${_scopeId}>`);
              if (approachStepErrors.value.sort_order) {
                _push2(`<p class="mt-1 text-sm text-red-600" data-v-ab1c3830${_scopeId}>${ssrInterpolate(approachStepErrors.value.sort_order)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center" data-v-ab1c3830${_scopeId}><input id="step-is-active"${ssrIncludeBooleanAttr(Array.isArray(approachStepForm.is_active) ? ssrLooseContain(approachStepForm.is_active, null) : approachStepForm.is_active) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-brand-red focus:ring-brand-red" data-v-ab1c3830${_scopeId}><label for="step-is-active" class="ml-2 block text-sm text-gray-700" data-v-ab1c3830${_scopeId}> Active </label></div></div><div class="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse" data-v-ab1c3830${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(approachStepProcessing.value) ? " disabled" : ""} class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50" data-v-ab1c3830${_scopeId}>`);
              if (approachStepProcessing.value) {
                _push2(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" data-v-ab1c3830${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(approachStepProcessing.value ? "Saving..." : editingApproachStep.value ? "Update" : "Add")} Step </button><button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:mt-0 sm:w-auto sm:text-sm" data-v-ab1c3830${_scopeId}> Cancel </button></div></form></div></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm mb-8" }, [
                createVNode("div", { class: "mx-auto" }, [
                  createVNode("nav", {
                    class: "flex space-x-8 overflow-x-auto py-4 px-0",
                    ref_key: "sectionNav",
                    ref: sectionNav
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(sections.value, (section) => {
                      return openBlock(), createBlock("button", {
                        key: section.id,
                        onClick: ($event) => scrollToSection(section.id),
                        class: [
                          "whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 flex items-center space-x-2",
                          activeSection.value === section.id ? "bg-blue-100 text-blue-700 border-blue-200 border" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                        ]
                      }, [
                        (openBlock(), createBlock("svg", {
                          class: "w-4 h-4",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          innerHTML: section.icon
                        }, null, 8, ["innerHTML"])),
                        createVNode("span", null, toDisplayString(section.name), 1)
                      ], 10, ["onClick"]);
                    }), 128))
                  ], 512)
                ])
              ]),
              createVNode("div", {
                id: "hero-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Hero Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the main hero section with background image, heading, paragraph and call-to-action")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateHero, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Background Image "),
                        __props.heroSection?.background_image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden" }, [
                            createVNode("img", {
                              src: `/storage/${__props.heroSection.background_image}`,
                              alt: "Hero background",
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "absolute top-2 right-2" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: deleteHeroImage,
                                class: "bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ]))
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex items-center justify-center w-full" }, [
                          createVNode("label", {
                            for: "hero-image-upload",
                            class: "flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center pt-5 pb-6" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-8 h-8 mb-4 text-gray-500",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                })
                              ])),
                              createVNode("p", { class: "mb-2 text-sm text-gray-500" }, [
                                createVNode("span", { class: "font-semibold" }, "Click to upload"),
                                createTextVNode(" background image ")
                              ]),
                              createVNode("p", { class: "text-xs text-gray-500" }, "PNG, JPG or GIF (MAX. 2MB)")
                            ]),
                            createVNode("input", {
                              id: "hero-image-upload",
                              type: "file",
                              class: "hidden",
                              accept: "image/*",
                              onChange: uploadHeroImage
                            }, null, 32)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "hero_heading",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Heading "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "hero_heading",
                            "onUpdate:modelValue": ($event) => heroForm.heading = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": heroErrors.value.heading }],
                            placeholder: "Enter hero heading"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, heroForm.heading]
                          ]),
                          heroErrors.value.heading ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(heroErrors.value.heading), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => heroForm.is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, heroForm.is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Hero Section Active")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "hero_paragraph",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Paragraph "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "hero_paragraph",
                          "onUpdate:modelValue": ($event) => heroForm.paragraph = $event,
                          rows: "4",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": heroErrors.value.paragraph }],
                          placeholder: "Enter hero paragraph content"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, heroForm.paragraph]
                        ]),
                        heroErrors.value.paragraph ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(heroErrors.value.paragraph), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "hero_cta_text",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Call-to-Action Text "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "hero_cta_text",
                            "onUpdate:modelValue": ($event) => heroForm.cta_text = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": heroErrors.value.cta_text }],
                            placeholder: "e.g., Get Started"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, heroForm.cta_text]
                          ]),
                          heroErrors.value.cta_text ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(heroErrors.value.cta_text), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "hero_cta_link",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Call-to-Action Link "),
                          withDirectives(createVNode("input", {
                            type: "url",
                            id: "hero_cta_link",
                            "onUpdate:modelValue": ($event) => heroForm.cta_link = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": heroErrors.value.cta_link }],
                            placeholder: "https://example.com"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, heroForm.cta_link]
                          ]),
                          heroErrors.value.cta_link ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(heroErrors.value.cta_link), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: heroProcessing.value,
                          class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                        }, [
                          heroProcessing.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(heroProcessing.value ? "Saving..." : "Save Hero Section"), 1)
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", {
                id: "partner-badge-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Partner Badge Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the partner badge text and logo display")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updatePartnerBadge, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Partner Logo "),
                        __props.partnerBadge?.logo_image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative w-32 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center" }, [
                            createVNode("img", {
                              src: `/storage/${__props.partnerBadge.logo_image}`,
                              alt: partnerForm.logo_alt,
                              class: "max-w-full max-h-full object-contain"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", { class: "absolute top-1 right-1" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: deletePartnerLogo,
                                class: "bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-3 h-3",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ]))
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex items-center justify-center w-full" }, [
                          createVNode("label", {
                            for: "partner-logo-upload",
                            class: "flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center pt-3 pb-3" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-6 h-6 mb-2 text-gray-500",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                })
                              ])),
                              createVNode("p", { class: "text-xs text-gray-500" }, [
                                createVNode("span", { class: "font-semibold" }, "Click to upload"),
                                createTextVNode(" partner logo ")
                              ]),
                              createVNode("p", { class: "text-xs text-gray-500" }, "PNG, JPG or SVG (MAX. 2MB)")
                            ]),
                            createVNode("input", {
                              id: "partner-logo-upload",
                              type: "file",
                              class: "hidden",
                              accept: "image/*",
                              onChange: uploadPartnerLogo
                            }, null, 32)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "partner_text",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Badge Text "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "partner_text",
                            "onUpdate:modelValue": ($event) => partnerForm.text = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": partnerErrors.value.text }],
                            placeholder: "e.g., An Official Databricks Partner"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, partnerForm.text]
                          ]),
                          partnerErrors.value.text ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(partnerErrors.value.text), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => partnerForm.is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, partnerForm.is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Partner Badge Active")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "partner_logo_alt",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Logo Alt Text "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "partner_logo_alt",
                          "onUpdate:modelValue": ($event) => partnerForm.logo_alt = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": partnerErrors.value.logo_alt }],
                          placeholder: "e.g., Databricks Logo"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, partnerForm.logo_alt]
                        ]),
                        partnerErrors.value.logo_alt ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(partnerErrors.value.logo_alt), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: partnerProcessing.value,
                          class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                        }, [
                          partnerProcessing.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(partnerProcessing.value ? "Saving..." : "Save Partner Badge"), 1)
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", {
                id: "story-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Story Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the about story content with image, title, and descriptions")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateStorySection, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Story Image "),
                        __props.storySection?.image_path ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative w-48 h-32 bg-gray-100 rounded-lg overflow-hidden" }, [
                            createVNode("img", {
                              src: `/storage/${__props.storySection.image_path}`,
                              alt: storyForm.image_alt,
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", { class: "absolute top-2 right-2" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: deleteStoryImage,
                                class: "bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ]))
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex items-center justify-center w-full" }, [
                          createVNode("label", {
                            for: "story-image-upload",
                            class: "flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center pt-5 pb-6" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-8 h-8 mb-4 text-gray-500",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                })
                              ])),
                              createVNode("p", { class: "mb-2 text-sm text-gray-500" }, [
                                createVNode("span", { class: "font-semibold" }, "Click to upload"),
                                createTextVNode(" story image ")
                              ]),
                              createVNode("p", { class: "text-xs text-gray-500" }, "PNG, JPG or GIF (MAX. 2MB)")
                            ]),
                            createVNode("input", {
                              id: "story-image-upload",
                              type: "file",
                              class: "hidden",
                              accept: "image/*",
                              onChange: uploadStoryImage
                            }, null, 32)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "story_header_tag",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Header Tag "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "story_header_tag",
                            "onUpdate:modelValue": ($event) => storyForm.header_tag = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": storyErrors.value.header_tag }],
                            placeholder: "e.g., OUR STORY"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, storyForm.header_tag]
                          ]),
                          storyErrors.value.header_tag ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(storyErrors.value.header_tag), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => storyForm.is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, storyForm.is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Story Section Active")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "story_title",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Title "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "story_title",
                          "onUpdate:modelValue": ($event) => storyForm.title = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": storyErrors.value.title }],
                          placeholder: "e.g., Sinki, a Name with a Purpose"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, storyForm.title]
                        ]),
                        storyErrors.value.title ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(storyErrors.value.title), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "story_subtitle",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Subtitle (Optional) "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "story_subtitle",
                          "onUpdate:modelValue": ($event) => storyForm.subtitle = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": storyErrors.value.subtitle }],
                          placeholder: "Optional subtitle text"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, storyForm.subtitle]
                        ]),
                        storyErrors.value.subtitle ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(storyErrors.value.subtitle), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "flex justify-between items-center mb-2" }, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700" }, [
                            createTextVNode(" Description Paragraphs "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          createVNode("button", {
                            type: "button",
                            onClick: addDescription,
                            class: "inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red"
                          }, [
                            (openBlock(), createBlock("svg", {
                              class: "w-3 h-3 mr-1",
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
                            createTextVNode(" Add Paragraph ")
                          ])
                        ]),
                        createVNode("div", { class: "space-y-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(storyForm.descriptions, (description, index) => {
                            return openBlock(), createBlock("div", {
                              key: index,
                              class: "relative"
                            }, [
                              createVNode("div", { class: "flex items-start space-x-2" }, [
                                createVNode("div", { class: "flex-1" }, [
                                  withDirectives(createVNode("textarea", {
                                    "onUpdate:modelValue": ($event) => storyForm.descriptions[index] = $event,
                                    rows: "3",
                                    class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": storyErrors.value[`descriptions.${index}`] }],
                                    placeholder: `Paragraph ${index + 1} - You can use HTML tags like <em> and <strong>`
                                  }, null, 10, ["onUpdate:modelValue", "placeholder"]), [
                                    [vModelText, storyForm.descriptions[index]]
                                  ]),
                                  storyErrors.value[`descriptions.${index}`] ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "mt-1 text-sm text-red-600"
                                  }, toDisplayString(storyErrors.value[`descriptions.${index}`]), 1)) : createCommentVNode("", true)
                                ]),
                                storyForm.descriptions.length > 1 ? (openBlock(), createBlock("button", {
                                  key: 0,
                                  type: "button",
                                  onClick: ($event) => removeDescription(index),
                                  class: "flex-shrink-0 mt-2 p-1 text-red-600 hover:text-red-800 transition-colors"
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    class: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    })
                                  ]))
                                ], 8, ["onClick"])) : createCommentVNode("", true)
                              ])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "story_image_alt",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Image Alt Text "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "story_image_alt",
                            "onUpdate:modelValue": ($event) => storyForm.image_alt = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": storyErrors.value.image_alt }],
                            placeholder: "e.g., Helsinki city representing our inspiration"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, storyForm.image_alt]
                          ]),
                          storyErrors.value.image_alt ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(storyErrors.value.image_alt), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "story_image_position",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Image Position "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("select", {
                            id: "story_image_position",
                            "onUpdate:modelValue": ($event) => storyForm.image_position = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": storyErrors.value.image_position }]
                          }, [
                            createVNode("option", { value: "left" }, "Left"),
                            createVNode("option", { value: "right" }, "Right")
                          ], 10, ["onUpdate:modelValue"]), [
                            [vModelSelect, storyForm.image_position]
                          ]),
                          storyErrors.value.image_position ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(storyErrors.value.image_position), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "story_background_color",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Background Color "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("select", {
                            id: "story_background_color",
                            "onUpdate:modelValue": ($event) => storyForm.background_color = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": storyErrors.value.background_color }]
                          }, [
                            createVNode("option", { value: "bg-white" }, "White"),
                            createVNode("option", { value: "bg-gray-50" }, "Light Gray"),
                            createVNode("option", { value: "bg-gray-100" }, "Gray"),
                            createVNode("option", { value: "bg-blue-50" }, "Light Blue"),
                            createVNode("option", { value: "bg-green-50" }, "Light Green")
                          ], 10, ["onUpdate:modelValue"]), [
                            [vModelSelect, storyForm.background_color]
                          ]),
                          storyErrors.value.background_color ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(storyErrors.value.background_color), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: storyProcessing.value,
                          class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                        }, [
                          storyProcessing.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(storyProcessing.value ? "Saving..." : "Save Story Section"), 1)
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", {
                id: "what-we-do-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "What We Do Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the what we do section header and background")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateWhatWeDo, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Background Image "),
                        __props.whatWeDoSection?.background_image ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden" }, [
                            createVNode("img", {
                              src: `/storage/${__props.whatWeDoSection.background_image}`,
                              alt: "Background image",
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "absolute top-2 right-2" }, [
                              createVNode("button", {
                                type: "button",
                                onClick: deleteWhatWeDoBackground,
                                class: "bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition-colors"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ]))
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "flex items-center justify-center w-full" }, [
                          createVNode("label", {
                            for: "what-we-do-bg-upload",
                            class: "flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center justify-center pt-5 pb-6" }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-8 h-8 mb-4 text-gray-500",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                })
                              ])),
                              createVNode("p", { class: "mb-2 text-sm text-gray-500" }, [
                                createVNode("span", { class: "font-semibold" }, "Click to upload"),
                                createTextVNode(" background image ")
                              ]),
                              createVNode("p", { class: "text-xs text-gray-500" }, "PNG, JPG or GIF (MAX. 2MB)")
                            ]),
                            createVNode("input", {
                              id: "what-we-do-bg-upload",
                              type: "file",
                              class: "hidden",
                              accept: "image/*",
                              onChange: uploadWhatWeDoBackground
                            }, null, 32)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "what_we_do_header_tag",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Header Tag "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "what_we_do_header_tag",
                            "onUpdate:modelValue": ($event) => whatWeDoForm.header_tag = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": whatWeDoErrors.value.header_tag }],
                            placeholder: "e.g., HOW WE HELP"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, whatWeDoForm.header_tag]
                          ]),
                          whatWeDoErrors.value.header_tag ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(whatWeDoErrors.value.header_tag), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => whatWeDoForm.is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, whatWeDoForm.is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "What We Do Section Active")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "what_we_do_title",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Title "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "what_we_do_title",
                          "onUpdate:modelValue": ($event) => whatWeDoForm.title = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": whatWeDoErrors.value.title }],
                          placeholder: "e.g., What We Do"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, whatWeDoForm.title]
                        ]),
                        whatWeDoErrors.value.title ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(whatWeDoErrors.value.title), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "what_we_do_subtitle",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Subtitle "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "what_we_do_subtitle",
                          "onUpdate:modelValue": ($event) => whatWeDoForm.subtitle = $event,
                          rows: "2",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": whatWeDoErrors.value.subtitle }],
                          placeholder: "e.g., We help enterprises harness the full power of Databricks to unify data, analytics, and AI."
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, whatWeDoForm.subtitle]
                        ]),
                        whatWeDoErrors.value.subtitle ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(whatWeDoErrors.value.subtitle), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "border border-gray-200 rounded-lg p-6" }, [
                        createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                          createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Service Items"),
                          createVNode("button", {
                            type: "button",
                            onClick: addService,
                            class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          }, [
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
                                d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                              })
                            ])),
                            createTextVNode(" Add Service ")
                          ])
                        ]),
                        __props.whatWeDoSection?.items?.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-4"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.whatWeDoSection.items, (item, index) => {
                            return openBlock(), createBlock("div", {
                              key: item.id,
                              class: "border border-gray-300 rounded-lg p-4 bg-gray-50"
                            }, [
                              createVNode("div", { class: "flex items-start justify-between" }, [
                                createVNode("div", { class: "flex-1 min-w-0" }, [
                                  createVNode("div", { class: "flex items-center space-x-3 mb-2" }, [
                                    createVNode("div", { class: "flex-shrink-0" }, [
                                      createVNode("div", { class: "w-8 h-8 bg-brand-red rounded-full flex items-center justify-center" }, [
                                        (openBlock(), createBlock("svg", {
                                          class: "w-4 h-4 text-white",
                                          fill: "none",
                                          stroke: "currentColor",
                                          "stroke-width": "2",
                                          viewBox: "0 0 24 24",
                                          innerHTML: item.icon_svg
                                        }, null, 8, ["innerHTML"]))
                                      ])
                                    ]),
                                    createVNode("div", { class: "flex-1 min-w-0" }, [
                                      createVNode("h4", { class: "text-sm font-medium text-gray-900 truncate" }, toDisplayString(item.title), 1),
                                      createVNode("p", { class: "text-xs text-gray-500" }, "Sort Order: " + toDisplayString(item.sort_order), 1)
                                    ]),
                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                      createVNode("span", {
                                        class: [item.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"]
                                      }, toDisplayString(item.is_active ? "Active" : "Inactive"), 3),
                                      createVNode("button", {
                                        type: "button",
                                        onClick: ($event) => editService(item),
                                        class: "text-brand-red hover:text-red-700"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          class: "w-4 h-4",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                          })
                                        ]))
                                      ], 8, ["onClick"]),
                                      createVNode("button", {
                                        type: "button",
                                        onClick: ($event) => deleteService(item),
                                        class: "text-red-600 hover:text-red-800"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          class: "w-4 h-4",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                          })
                                        ]))
                                      ], 8, ["onClick"])
                                    ])
                                  ]),
                                  createVNode("p", { class: "text-sm text-gray-600" }, toDisplayString(item.description), 1)
                                ])
                              ])
                            ]);
                          }), 128))
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-center py-8 text-gray-500"
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-12 h-12 mx-auto mb-4 text-gray-400",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            })
                          ])),
                          createVNode("p", null, "No service items found. Run the seeder or add services manually.")
                        ]))
                      ]),
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: whatWeDoProcessing.value,
                          class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                        }, [
                          whatWeDoProcessing.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(whatWeDoProcessing.value ? "Saving..." : "Save What We Do Section"), 1)
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", {
                id: "approach-section",
                class: "bg-white rounded-lg shadow-sm border border-gray-200 mb-8"
              }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Our Approach Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Manage the approach section header and process steps")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateApproach, ["prevent"])
                  }, [
                    createVNode("div", { class: "space-y-6" }, [
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "approach_header_tag",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Header Tag "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "approach_header_tag",
                            "onUpdate:modelValue": ($event) => approachForm.header_tag = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachErrors.value.header_tag }],
                            placeholder: "e.g., HOW WE WORK"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, approachForm.header_tag]
                          ]),
                          approachErrors.value.header_tag ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(approachErrors.value.header_tag), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => approachForm.is_active = $event,
                              class: "sr-only peer"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, approachForm.is_active]
                            ]),
                            createVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red" }),
                            createVNode("span", { class: "ml-3 text-sm font-medium text-gray-700" }, "Approach Section Active")
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "approach_title",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Title "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          type: "text",
                          id: "approach_title",
                          "onUpdate:modelValue": ($event) => approachForm.title = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachErrors.value.title }],
                          placeholder: "e.g., Our Data-First Approach"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, approachForm.title]
                        ]),
                        approachErrors.value.title ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(approachErrors.value.title), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "approach_subtitle",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, [
                          createTextVNode(" Subtitle "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          id: "approach_subtitle",
                          "onUpdate:modelValue": ($event) => approachForm.subtitle = $event,
                          rows: "2",
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": approachErrors.value.subtitle }],
                          placeholder: "e.g., How We Transform Your Data Vision Into Reality"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, approachForm.subtitle]
                        ]),
                        approachErrors.value.subtitle ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(approachErrors.value.subtitle), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "approach_cta_text",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, [
                            createTextVNode(" Call-to-Action Text "),
                            createVNode("span", { class: "text-red-500" }, "*")
                          ]),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "approach_cta_text",
                            "onUpdate:modelValue": ($event) => approachForm.cta_text = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachErrors.value.cta_text }],
                            placeholder: "e.g., Book A Discovery Session"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, approachForm.cta_text]
                          ]),
                          approachErrors.value.cta_text ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(approachErrors.value.cta_text), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "approach_background_color",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Background Color "),
                          withDirectives(createVNode("select", {
                            id: "approach_background_color",
                            "onUpdate:modelValue": ($event) => approachForm.background_color = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachErrors.value.background_color }]
                          }, [
                            createVNode("option", { value: "bg-white" }, "White"),
                            createVNode("option", { value: "bg-gray-50" }, "Light Gray"),
                            createVNode("option", { value: "bg-gray-100" }, "Gray"),
                            createVNode("option", { value: "bg-blue-50" }, "Light Blue"),
                            createVNode("option", { value: "bg-green-50" }, "Light Green")
                          ], 10, ["onUpdate:modelValue"]), [
                            [vModelSelect, approachForm.background_color]
                          ]),
                          approachErrors.value.background_color ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(approachErrors.value.background_color), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", {
                          for: "approach_cta_link",
                          class: "block text-sm font-medium text-gray-700 mb-2"
                        }, " Call-to-Action Link (Optional) "),
                        withDirectives(createVNode("input", {
                          type: "url",
                          id: "approach_cta_link",
                          "onUpdate:modelValue": ($event) => approachForm.cta_link = $event,
                          class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachErrors.value.cta_link }],
                          placeholder: "https://example.com"
                        }, null, 10, ["onUpdate:modelValue"]), [
                          [vModelText, approachForm.cta_link]
                        ]),
                        approachErrors.value.cta_link ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-1 text-sm text-red-600"
                        }, toDisplayString(approachErrors.value.cta_link), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "border border-gray-200 rounded-lg p-6" }, [
                        createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                          createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "Approach Steps"),
                          createVNode("button", {
                            type: "button",
                            onClick: addApproachStep,
                            class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-brand-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          }, [
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
                                d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                              })
                            ])),
                            createTextVNode(" Add Step ")
                          ])
                        ]),
                        __props.approachSection?.steps?.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-4"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.approachSection.steps, (step, index) => {
                            return openBlock(), createBlock("div", {
                              key: step.id,
                              class: "border border-gray-300 rounded-lg p-4 bg-gray-50"
                            }, [
                              createVNode("div", { class: "flex items-start justify-between" }, [
                                createVNode("div", { class: "flex-1 min-w-0" }, [
                                  createVNode("div", { class: "flex items-center space-x-3 mb-2" }, [
                                    createVNode("div", { class: "flex-shrink-0" }, [
                                      createVNode("div", { class: "w-8 h-8 bg-brand-red rounded-full flex items-center justify-center" }, [
                                        createVNode("span", { class: "text-white font-bold text-sm" }, toDisplayString(step.number), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "flex-1 min-w-0" }, [
                                      createVNode("h4", { class: "text-sm font-medium text-gray-900 truncate" }, toDisplayString(step.title), 1),
                                      createVNode("p", { class: "text-xs text-gray-500" }, "Sort Order: " + toDisplayString(step.sort_order), 1)
                                    ]),
                                    createVNode("div", { class: "flex items-center space-x-2" }, [
                                      createVNode("span", {
                                        class: [step.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"]
                                      }, toDisplayString(step.is_active ? "Active" : "Inactive"), 3),
                                      createVNode("button", {
                                        type: "button",
                                        onClick: ($event) => editApproachStep(step),
                                        class: "text-brand-red hover:text-red-700"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          class: "w-4 h-4",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                          })
                                        ]))
                                      ], 8, ["onClick"]),
                                      createVNode("button", {
                                        type: "button",
                                        onClick: ($event) => deleteApproachStep(step),
                                        class: "text-red-600 hover:text-red-800"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          class: "w-4 h-4",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                          })
                                        ]))
                                      ], 8, ["onClick"])
                                    ])
                                  ]),
                                  createVNode("p", { class: "text-sm text-gray-600 mb-1" }, [
                                    createVNode("strong", null, "Short:"),
                                    createTextVNode(" " + toDisplayString(step.short_description), 1)
                                  ]),
                                  createVNode("p", { class: "text-sm text-gray-600" }, [
                                    createVNode("strong", null, "Description:"),
                                    createTextVNode(" " + toDisplayString(step.description), 1)
                                  ])
                                ])
                              ])
                            ]);
                          }), 128))
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-center py-8 text-gray-500"
                        }, [
                          (openBlock(), createBlock("svg", {
                            class: "w-12 h-12 mx-auto mb-4 text-gray-400",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M13 10V3L4 14h7v7l9-11h-7z"
                            })
                          ])),
                          createVNode("p", null, "No approach steps found. Run the seeder or add steps manually.")
                        ]))
                      ]),
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode("button", {
                          type: "submit",
                          disabled: approachProcessing.value,
                          class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 focus:bg-red-700 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                        }, [
                          approachProcessing.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                          })) : createCommentVNode("", true),
                          createTextVNode(" " + toDisplayString(approachProcessing.value ? "Saving..." : "Save Approach Section"), 1)
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              showAddServiceModal.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "fixed inset-0 z-50 overflow-y-auto"
              }, [
                createVNode("div", { class: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, [
                  createVNode("div", {
                    class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: cancelServiceEdit
                  }),
                  createVNode("div", { class: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" }, [
                    createVNode("div", { class: "sm:flex sm:items-start" }, [
                      createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, [
                        createVNode("h3", { class: "text-lg leading-6 font-medium text-gray-900 mb-4" }, toDisplayString(editingService.value ? "Edit Service Item" : "Add Service Item"), 1),
                        createVNode("form", {
                          onSubmit: withModifiers(saveService, ["prevent"])
                        }, [
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "service-title",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Title "),
                              withDirectives(createVNode("input", {
                                id: "service-title",
                                "onUpdate:modelValue": ($event) => serviceForm.title = $event,
                                type: "text",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": serviceErrors.value.title }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, serviceForm.title]
                              ]),
                              serviceErrors.value.title ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(serviceErrors.value.title), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "service-description",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Description "),
                              withDirectives(createVNode("textarea", {
                                id: "service-description",
                                "onUpdate:modelValue": ($event) => serviceForm.description = $event,
                                rows: "3",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": serviceErrors.value.description }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, serviceForm.description]
                              ]),
                              serviceErrors.value.description ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(serviceErrors.value.description), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "service-icon",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Icon SVG "),
                              withDirectives(createVNode("textarea", {
                                id: "service-icon",
                                "onUpdate:modelValue": ($event) => serviceForm.icon_svg = $event,
                                rows: "3",
                                placeholder: "<path d='...'/>",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red font-mono", { "border-red-500": serviceErrors.value.icon_svg }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, serviceForm.icon_svg]
                              ]),
                              serviceErrors.value.icon_svg ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(serviceErrors.value.icon_svg), 1)) : createCommentVNode("", true),
                              createVNode("p", { class: "mt-1 text-xs text-gray-500" }, " Enter the path elements for the SVG icon (without <svg> wrapper) ")
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "service-sort-order",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Sort Order "),
                              withDirectives(createVNode("input", {
                                id: "service-sort-order",
                                "onUpdate:modelValue": ($event) => serviceForm.sort_order = $event,
                                type: "number",
                                min: "1",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": serviceErrors.value.sort_order }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  serviceForm.sort_order,
                                  void 0,
                                  { number: true }
                                ]
                              ]),
                              serviceErrors.value.sort_order ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(serviceErrors.value.sort_order), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "flex items-center" }, [
                              withDirectives(createVNode("input", {
                                id: "service-is-active",
                                "onUpdate:modelValue": ($event) => serviceForm.is_active = $event,
                                type: "checkbox",
                                class: "rounded border-gray-300 text-brand-red focus:ring-brand-red"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, serviceForm.is_active]
                              ]),
                              createVNode("label", {
                                for: "service-is-active",
                                class: "ml-2 block text-sm text-gray-700"
                              }, " Active ")
                            ])
                          ]),
                          createVNode("div", { class: "mt-5 sm:mt-6 sm:flex sm:flex-row-reverse" }, [
                            createVNode("button", {
                              type: "submit",
                              disabled: serviceProcessing.value,
                              class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                            }, [
                              serviceProcessing.value ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                              })) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(serviceProcessing.value ? "Saving..." : editingService.value ? "Update" : "Add") + " Service ", 1)
                            ], 8, ["disabled"]),
                            createVNode("button", {
                              type: "button",
                              onClick: cancelServiceEdit,
                              class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:mt-0 sm:w-auto sm:text-sm"
                            }, " Cancel ")
                          ])
                        ], 32)
                      ])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true),
              showAddApproachStepModal.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "fixed inset-0 z-50 overflow-y-auto"
              }, [
                createVNode("div", { class: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, [
                  createVNode("div", {
                    class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                    onClick: cancelApproachStepEdit
                  }),
                  createVNode("div", { class: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" }, [
                    createVNode("div", { class: "sm:flex sm:items-start" }, [
                      createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, [
                        createVNode("h3", { class: "text-lg leading-6 font-medium text-gray-900 mb-4" }, toDisplayString(editingApproachStep.value ? "Edit Approach Step" : "Add Approach Step"), 1),
                        createVNode("form", {
                          onSubmit: withModifiers(saveApproachStep, ["prevent"])
                        }, [
                          createVNode("div", { class: "space-y-4" }, [
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "step-number",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Step Number "),
                              withDirectives(createVNode("input", {
                                id: "step-number",
                                "onUpdate:modelValue": ($event) => approachStepForm.number = $event,
                                type: "number",
                                min: "1",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachStepErrors.value.number }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  approachStepForm.number,
                                  void 0,
                                  { number: true }
                                ]
                              ]),
                              approachStepErrors.value.number ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(approachStepErrors.value.number), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "step-title",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Title "),
                              withDirectives(createVNode("input", {
                                id: "step-title",
                                "onUpdate:modelValue": ($event) => approachStepForm.title = $event,
                                type: "text",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachStepErrors.value.title }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, approachStepForm.title]
                              ]),
                              approachStepErrors.value.title ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(approachStepErrors.value.title), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "step-short-description",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Short Description "),
                              withDirectives(createVNode("input", {
                                id: "step-short-description",
                                "onUpdate:modelValue": ($event) => approachStepForm.short_description = $event,
                                type: "text",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachStepErrors.value.short_description }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, approachStepForm.short_description]
                              ]),
                              approachStepErrors.value.short_description ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(approachStepErrors.value.short_description), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "step-description",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Description "),
                              withDirectives(createVNode("textarea", {
                                id: "step-description",
                                "onUpdate:modelValue": ($event) => approachStepForm.description = $event,
                                rows: "3",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachStepErrors.value.description }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, approachStepForm.description]
                              ]),
                              approachStepErrors.value.description ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(approachStepErrors.value.description), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "step-icon",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Icon SVG "),
                              withDirectives(createVNode("textarea", {
                                id: "step-icon",
                                "onUpdate:modelValue": ($event) => approachStepForm.icon_svg = $event,
                                rows: "3",
                                placeholder: "<path d='...'/>",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red font-mono", { "border-red-500": approachStepErrors.value.icon_svg }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [vModelText, approachStepForm.icon_svg]
                              ]),
                              approachStepErrors.value.icon_svg ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(approachStepErrors.value.icon_svg), 1)) : createCommentVNode("", true),
                              createVNode("p", { class: "mt-1 text-xs text-gray-500" }, " Enter the path elements for the SVG icon (without <svg> wrapper) ")
                            ]),
                            createVNode("div", null, [
                              createVNode("label", {
                                for: "step-sort-order",
                                class: "block text-sm font-medium text-gray-700 mb-2"
                              }, " Sort Order "),
                              withDirectives(createVNode("input", {
                                id: "step-sort-order",
                                "onUpdate:modelValue": ($event) => approachStepForm.sort_order = $event,
                                type: "number",
                                min: "1",
                                required: "",
                                class: ["w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": approachStepErrors.value.sort_order }]
                              }, null, 10, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  approachStepForm.sort_order,
                                  void 0,
                                  { number: true }
                                ]
                              ]),
                              approachStepErrors.value.sort_order ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-1 text-sm text-red-600"
                              }, toDisplayString(approachStepErrors.value.sort_order), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "flex items-center" }, [
                              withDirectives(createVNode("input", {
                                id: "step-is-active",
                                "onUpdate:modelValue": ($event) => approachStepForm.is_active = $event,
                                type: "checkbox",
                                class: "rounded border-gray-300 text-brand-red focus:ring-brand-red"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, approachStepForm.is_active]
                              ]),
                              createVNode("label", {
                                for: "step-is-active",
                                class: "ml-2 block text-sm text-gray-700"
                              }, " Active ")
                            ])
                          ]),
                          createVNode("div", { class: "mt-5 sm:mt-6 sm:flex sm:flex-row-reverse" }, [
                            createVNode("button", {
                              type: "submit",
                              disabled: approachStepProcessing.value,
                              class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
                            }, [
                              approachStepProcessing.value ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                              })) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(approachStepProcessing.value ? "Saving..." : editingApproachStep.value ? "Update" : "Add") + " Step ", 1)
                            ], 8, ["disabled"]),
                            createVNode("button", {
                              type: "button",
                              onClick: cancelApproachStepEdit,
                              class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red sm:mt-0 sm:w-auto sm:text-sm"
                            }, " Cancel ")
                          ])
                        ], 32)
                      ])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/AboutUs/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab1c3830"]]);
export {
  Index as default
};
