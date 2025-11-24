import { ref, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withModifiers, withDirectives, vModelText, openBlock, toDisplayString, vModelCheckbox, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { A as AdminLayout } from "./AdminLayout-CunXkTIM.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    heroSection: Object,
    partnerBadge: Object
  },
  setup(__props) {
    const props = __props;
    const imagePreview = ref(null);
    const partnerLogoPreview = ref(null);
    const errors = ref({});
    const partnerErrors = ref({});
    const form = useForm({
      heading: props.heroSection?.heading || "We Help You Unlock The Value Of Your Data",
      paragraph: props.heroSection?.paragraph || "We turn raw data into intelligence with Databricks. From data foundations to AI adoption, we deliver secure, scalable systems.",
      cta_text: props.heroSection?.cta_text || "Schedule Free Consultation",
      cta_link: props.heroSection?.cta_link || "#contact",
      is_active: props.heroSection?.is_active ?? true
    });
    const partnerForm = useForm({
      text: props.partnerBadge?.text || "An Official Databricks Partner",
      logo_alt: props.partnerBadge?.logo_alt || "Databricks Logo",
      is_active: props.partnerBadge?.is_active ?? true
    });
    const updateHeroSection = () => {
      form.put(route("admin.homepage.hero.update"), {
        preserveScroll: true,
        onError: (formErrors) => {
          errors.value = formErrors;
        },
        onSuccess: () => {
          errors.value = {};
        }
      });
    };
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview.value = e.target.result;
      };
      reader.readAsDataURL(file);
      const imageForm = useForm({
        image: file
      });
      imageForm.post(route("admin.homepage.hero.image.upload"), {
        preserveScroll: true,
        onSuccess: () => {
          imagePreview.value = null;
          window.location.reload();
        },
        onError: (formErrors) => {
          errors.value = formErrors;
          imagePreview.value = null;
        }
      });
    };
    const deleteImage = () => {
      if (confirm("Are you sure you want to delete this background image?")) {
        const deleteForm = useForm({});
        deleteForm.delete(route("admin.homepage.hero.image.delete"), {
          preserveScroll: true,
          onSuccess: () => {
            window.location.reload();
          }
        });
      }
    };
    const updatePartnerBadge = () => {
      partnerForm.put(route("admin.homepage.partner-badge.update"), {
        preserveScroll: true,
        onError: (formErrors) => {
          partnerErrors.value = formErrors;
        },
        onSuccess: () => {
          partnerErrors.value = {};
        }
      });
    };
    const handlePartnerLogoUpload = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        partnerLogoPreview.value = e.target.result;
      };
      reader.readAsDataURL(file);
      const logoForm = useForm({
        image: file
      });
      logoForm.post(route("admin.homepage.partner-badge.logo.upload"), {
        preserveScroll: true,
        onSuccess: () => {
          partnerLogoPreview.value = null;
          window.location.reload();
        },
        onError: (formErrors) => {
          partnerErrors.value = formErrors;
          partnerLogoPreview.value = null;
        }
      });
    };
    const deletePartnerLogo = () => {
      if (confirm("Are you sure you want to delete this partner logo?")) {
        const deleteForm = useForm({});
        deleteForm.delete(route("admin.homepage.partner-badge.logo.delete"), {
          preserveScroll: true,
          onSuccess: () => {
            window.location.reload();
          }
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AdminLayout, mergeProps({
        "page-title": "Homepage Management",
        "page-subtitle": "Manage your website's homepage content"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white rounded-lg shadow-sm border border-gray-200" data-v-4bd3ed1e${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-4bd3ed1e${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-4bd3ed1e${_scopeId}>Hero Section</h2><p class="text-sm text-gray-600 mt-1" data-v-4bd3ed1e${_scopeId}>Customize the main banner section of your homepage</p></div><div class="p-6" data-v-4bd3ed1e${_scopeId}><form data-v-4bd3ed1e${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-4bd3ed1e${_scopeId}><div class="space-y-6" data-v-4bd3ed1e${_scopeId}><div data-v-4bd3ed1e${_scopeId}><label for="heading" class="block text-sm font-medium text-gray-700 mb-2" data-v-4bd3ed1e${_scopeId}> Heading </label><input type="text" id="heading"${ssrRenderAttr("value", unref(form).heading)} placeholder="Enter hero heading" class="${ssrRenderClass([{ "border-red-500": errors.value.heading }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-4bd3ed1e${_scopeId}>`);
            if (errors.value.heading) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-4bd3ed1e${_scopeId}>${ssrInterpolate(errors.value.heading)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-4bd3ed1e${_scopeId}><label for="paragraph" class="block text-sm font-medium text-gray-700 mb-2" data-v-4bd3ed1e${_scopeId}> Description </label><textarea id="paragraph" rows="4" placeholder="Enter hero description" class="${ssrRenderClass([{ "border-red-500": errors.value.paragraph }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none"])}" data-v-4bd3ed1e${_scopeId}>${ssrInterpolate(unref(form).paragraph)}</textarea>`);
            if (errors.value.paragraph) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-4bd3ed1e${_scopeId}>${ssrInterpolate(errors.value.paragraph)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-4bd3ed1e${_scopeId}><label for="cta_text" class="block text-sm font-medium text-gray-700 mb-2" data-v-4bd3ed1e${_scopeId}> Button Text </label><input type="text" id="cta_text"${ssrRenderAttr("value", unref(form).cta_text)} placeholder="Enter button text" class="${ssrRenderClass([{ "border-red-500": errors.value.cta_text }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-4bd3ed1e${_scopeId}>`);
            if (errors.value.cta_text) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-4bd3ed1e${_scopeId}>${ssrInterpolate(errors.value.cta_text)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-4bd3ed1e${_scopeId}><label for="cta_link" class="block text-sm font-medium text-gray-700 mb-2" data-v-4bd3ed1e${_scopeId}> Button Link </label><input type="text" id="cta_link"${ssrRenderAttr("value", unref(form).cta_link)} placeholder="Enter button link (e.g., #contact, /services)" class="${ssrRenderClass([{ "border-red-500": errors.value.cta_link }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-4bd3ed1e${_scopeId}>`);
            if (errors.value.cta_link) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-4bd3ed1e${_scopeId}>${ssrInterpolate(errors.value.cta_link)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-4bd3ed1e${_scopeId}><label class="flex items-center" data-v-4bd3ed1e${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).is_active) ? ssrLooseContain(unref(form).is_active, null) : unref(form).is_active) ? " checked" : ""} class="rounded border-gray-300 text-brand-red focus:ring-brand-red" data-v-4bd3ed1e${_scopeId}><span class="ml-2 text-sm text-gray-700" data-v-4bd3ed1e${_scopeId}>Active</span></label></div><div class="pt-4" data-v-4bd3ed1e${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150" data-v-4bd3ed1e${_scopeId}>`);
            if (unref(form).processing) {
              _push2(`<svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-4bd3ed1e${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-4bd3ed1e${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-4bd3ed1e${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(form).processing ? "Updating..." : "Update Hero Section")}</button></div></div><div data-v-4bd3ed1e${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-4bd3ed1e${_scopeId}> Background Image </label>`);
            if (__props.heroSection?.background_image || imagePreview.value) {
              _push2(`<div class="mb-4" data-v-4bd3ed1e${_scopeId}><div class="relative" data-v-4bd3ed1e${_scopeId}><img${ssrRenderAttr("src", imagePreview.value || `/storage/${__props.heroSection.background_image}`)} alt="Hero background" class="w-full h-48 object-cover rounded-lg border border-gray-200" data-v-4bd3ed1e${_scopeId}><button type="button" class="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors" title="Delete image" data-v-4bd3ed1e${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-4bd3ed1e${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16" data-v-4bd3ed1e${_scopeId}></path></svg></button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-2 border-dashed border-gray-300 rounded-lg p-6" data-v-4bd3ed1e${_scopeId}><div class="text-center" data-v-4bd3ed1e${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" data-v-4bd3ed1e${_scopeId}><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4bd3ed1e${_scopeId}></path></svg><div class="mt-4" data-v-4bd3ed1e${_scopeId}><label for="hero_image" class="cursor-pointer" data-v-4bd3ed1e${_scopeId}><span class="mt-2 block text-sm font-medium text-gray-900" data-v-4bd3ed1e${_scopeId}> Click to upload a new image </span><span class="mt-1 block text-xs text-gray-500" data-v-4bd3ed1e${_scopeId}> PNG, JPG, GIF up to 2MB </span></label><input id="hero_image" type="file" accept="image/*" class="sr-only" data-v-4bd3ed1e${_scopeId}></div></div></div></div></div></form></div></div><div class="bg-white rounded-lg shadow-sm border border-gray-200 mt-8" data-v-4bd3ed1e${_scopeId}><div class="px-6 py-4 border-b border-gray-200" data-v-4bd3ed1e${_scopeId}><h2 class="text-lg font-semibold text-gray-900" data-v-4bd3ed1e${_scopeId}>Partner Badge Section</h2><p class="text-sm text-gray-600 mt-1" data-v-4bd3ed1e${_scopeId}>Customize the partner badge that appears below the hero section</p></div><div class="p-6" data-v-4bd3ed1e${_scopeId}><form data-v-4bd3ed1e${_scopeId}><div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-4bd3ed1e${_scopeId}><div class="space-y-6" data-v-4bd3ed1e${_scopeId}><div data-v-4bd3ed1e${_scopeId}><label for="partner_text" class="block text-sm font-medium text-gray-700 mb-2" data-v-4bd3ed1e${_scopeId}> Partner Text </label><input type="text" id="partner_text"${ssrRenderAttr("value", unref(partnerForm).text)} placeholder="Enter partner text" class="${ssrRenderClass([{ "border-red-500": partnerErrors.value.text }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-4bd3ed1e${_scopeId}>`);
            if (partnerErrors.value.text) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-4bd3ed1e${_scopeId}>${ssrInterpolate(partnerErrors.value.text)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-4bd3ed1e${_scopeId}><label for="logo_alt" class="block text-sm font-medium text-gray-700 mb-2" data-v-4bd3ed1e${_scopeId}> Logo Alt Text </label><input type="text" id="logo_alt"${ssrRenderAttr("value", unref(partnerForm).logo_alt)} placeholder="Enter logo alt text (for accessibility)" class="${ssrRenderClass([{ "border-red-500": partnerErrors.value.logo_alt }, "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red"])}" data-v-4bd3ed1e${_scopeId}>`);
            if (partnerErrors.value.logo_alt) {
              _push2(`<p class="mt-1 text-sm text-red-600" data-v-4bd3ed1e${_scopeId}>${ssrInterpolate(partnerErrors.value.logo_alt)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-4bd3ed1e${_scopeId}><label class="flex items-center" data-v-4bd3ed1e${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(partnerForm).is_active) ? ssrLooseContain(unref(partnerForm).is_active, null) : unref(partnerForm).is_active) ? " checked" : ""} class="rounded border-gray-300 text-brand-red focus:ring-brand-red" data-v-4bd3ed1e${_scopeId}><span class="ml-2 text-sm text-gray-700" data-v-4bd3ed1e${_scopeId}>Active</span></label></div><div class="pt-4" data-v-4bd3ed1e${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(partnerForm).processing) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150" data-v-4bd3ed1e${_scopeId}>`);
            if (unref(partnerForm).processing) {
              _push2(`<svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-4bd3ed1e${_scopeId}><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-4bd3ed1e${_scopeId}></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-4bd3ed1e${_scopeId}></path></svg>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(partnerForm).processing ? "Updating..." : "Update Partner Badge")}</button></div></div><div data-v-4bd3ed1e${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2" data-v-4bd3ed1e${_scopeId}> Partner Logo </label>`);
            if (__props.partnerBadge?.logo_image || partnerLogoPreview.value) {
              _push2(`<div class="mb-4" data-v-4bd3ed1e${_scopeId}><div class="relative" data-v-4bd3ed1e${_scopeId}><img${ssrRenderAttr("src", partnerLogoPreview.value || `/storage/${__props.partnerBadge.logo_image}`)}${ssrRenderAttr("alt", __props.partnerBadge?.logo_alt || "Partner Logo")} class="w-full max-w-xs h-24 object-contain rounded-lg border border-gray-200 bg-gray-50 p-4" data-v-4bd3ed1e${_scopeId}><button type="button" class="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors" title="Delete logo" data-v-4bd3ed1e${_scopeId}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-4bd3ed1e${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16" data-v-4bd3ed1e${_scopeId}></path></svg></button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-2 border-dashed border-gray-300 rounded-lg p-6" data-v-4bd3ed1e${_scopeId}><div class="text-center" data-v-4bd3ed1e${_scopeId}><svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" data-v-4bd3ed1e${_scopeId}><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4bd3ed1e${_scopeId}></path></svg><div class="mt-4" data-v-4bd3ed1e${_scopeId}><label for="partner_logo" class="cursor-pointer" data-v-4bd3ed1e${_scopeId}><span class="mt-2 block text-sm font-medium text-gray-900" data-v-4bd3ed1e${_scopeId}> Click to upload a new logo </span><span class="mt-1 block text-xs text-gray-500" data-v-4bd3ed1e${_scopeId}> PNG, JPG, SVG up to 2MB </span></label><input id="partner_logo" type="file" accept="image/*" class="sr-only" data-v-4bd3ed1e${_scopeId}></div></div></div></div></div></form></div></div>`);
            if (_ctx.$page.props.flash.success) {
              _push2(`<div class="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg" data-v-4bd3ed1e${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.success)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.flash.error) {
              _push2(`<div class="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg" data-v-4bd3ed1e${_scopeId}>${ssrInterpolate(_ctx.$page.props.flash.error)}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "bg-white rounded-lg shadow-sm border border-gray-200" }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Hero Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Customize the main banner section of your homepage")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updateHeroSection, ["prevent"])
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, [
                      createVNode("div", { class: "space-y-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "heading",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Heading "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "heading",
                            "onUpdate:modelValue": ($event) => unref(form).heading = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": errors.value.heading }],
                            placeholder: "Enter hero heading"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).heading]
                          ]),
                          errors.value.heading ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(errors.value.heading), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "paragraph",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Description "),
                          withDirectives(createVNode("textarea", {
                            id: "paragraph",
                            "onUpdate:modelValue": ($event) => unref(form).paragraph = $event,
                            rows: "4",
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red resize-none", { "border-red-500": errors.value.paragraph }],
                            placeholder: "Enter hero description"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).paragraph]
                          ]),
                          errors.value.paragraph ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(errors.value.paragraph), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "cta_text",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Button Text "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "cta_text",
                            "onUpdate:modelValue": ($event) => unref(form).cta_text = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": errors.value.cta_text }],
                            placeholder: "Enter button text"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).cta_text]
                          ]),
                          errors.value.cta_text ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(errors.value.cta_text), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "cta_link",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Button Link "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "cta_link",
                            "onUpdate:modelValue": ($event) => unref(form).cta_link = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": errors.value.cta_link }],
                            placeholder: "Enter button link (e.g., #contact, /services)"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(form).cta_link]
                          ]),
                          errors.value.cta_link ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(errors.value.cta_link), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "flex items-center" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(form).is_active = $event,
                              class: "rounded border-gray-300 text-brand-red focus:ring-brand-red"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(form).is_active]
                            ]),
                            createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Active")
                          ])
                        ]),
                        createVNode("div", { class: "pt-4" }, [
                          createVNode("button", {
                            type: "submit",
                            disabled: unref(form).processing,
                            class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                          }, [
                            unref(form).processing ? (openBlock(), createBlock("svg", {
                              key: 0,
                              class: "animate-spin -ml-1 mr-3 h-4 w-4 text-white",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("circle", {
                                class: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                "stroke-width": "4"
                              }),
                              createVNode("path", {
                                class: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              })
                            ])) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(unref(form).processing ? "Updating..." : "Update Hero Section"), 1)
                          ], 8, ["disabled"])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Background Image "),
                        __props.heroSection?.background_image || imagePreview.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative" }, [
                            createVNode("img", {
                              src: imagePreview.value || `/storage/${__props.heroSection.background_image}`,
                              alt: "Hero background",
                              class: "w-full h-48 object-cover rounded-lg border border-gray-200"
                            }, null, 8, ["src"]),
                            createVNode("button", {
                              onClick: deleteImage,
                              type: "button",
                              class: "absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors",
                              title: "Delete image"
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
                                  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"
                                })
                              ]))
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "border-2 border-dashed border-gray-300 rounded-lg p-6" }, [
                          createVNode("div", { class: "text-center" }, [
                            (openBlock(), createBlock("svg", {
                              class: "mx-auto h-12 w-12 text-gray-400",
                              stroke: "currentColor",
                              fill: "none",
                              viewBox: "0 0 48 48"
                            }, [
                              createVNode("path", {
                                d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              })
                            ])),
                            createVNode("div", { class: "mt-4" }, [
                              createVNode("label", {
                                for: "hero_image",
                                class: "cursor-pointer"
                              }, [
                                createVNode("span", { class: "mt-2 block text-sm font-medium text-gray-900" }, " Click to upload a new image "),
                                createVNode("span", { class: "mt-1 block text-xs text-gray-500" }, " PNG, JPG, GIF up to 2MB ")
                              ]),
                              createVNode("input", {
                                id: "hero_image",
                                type: "file",
                                accept: "image/*",
                                onChange: handleImageUpload,
                                class: "sr-only"
                              }, null, 32)
                            ])
                          ])
                        ])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              createVNode("div", { class: "bg-white rounded-lg shadow-sm border border-gray-200 mt-8" }, [
                createVNode("div", { class: "px-6 py-4 border-b border-gray-200" }, [
                  createVNode("h2", { class: "text-lg font-semibold text-gray-900" }, "Partner Badge Section"),
                  createVNode("p", { class: "text-sm text-gray-600 mt-1" }, "Customize the partner badge that appears below the hero section")
                ]),
                createVNode("div", { class: "p-6" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(updatePartnerBadge, ["prevent"])
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, [
                      createVNode("div", { class: "space-y-6" }, [
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "partner_text",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Partner Text "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "partner_text",
                            "onUpdate:modelValue": ($event) => unref(partnerForm).text = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": partnerErrors.value.text }],
                            placeholder: "Enter partner text"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(partnerForm).text]
                          ]),
                          partnerErrors.value.text ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(partnerErrors.value.text), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", {
                            for: "logo_alt",
                            class: "block text-sm font-medium text-gray-700 mb-2"
                          }, " Logo Alt Text "),
                          withDirectives(createVNode("input", {
                            type: "text",
                            id: "logo_alt",
                            "onUpdate:modelValue": ($event) => unref(partnerForm).logo_alt = $event,
                            class: ["w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-red focus:border-brand-red", { "border-red-500": partnerErrors.value.logo_alt }],
                            placeholder: "Enter logo alt text (for accessibility)"
                          }, null, 10, ["onUpdate:modelValue"]), [
                            [vModelText, unref(partnerForm).logo_alt]
                          ]),
                          partnerErrors.value.logo_alt ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-1 text-sm text-red-600"
                          }, toDisplayString(partnerErrors.value.logo_alt), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "flex items-center" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(partnerForm).is_active = $event,
                              class: "rounded border-gray-300 text-brand-red focus:ring-brand-red"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(partnerForm).is_active]
                            ]),
                            createVNode("span", { class: "ml-2 text-sm text-gray-700" }, "Active")
                          ])
                        ]),
                        createVNode("div", { class: "pt-4" }, [
                          createVNode("button", {
                            type: "submit",
                            disabled: unref(partnerForm).processing,
                            class: "inline-flex items-center px-4 py-2 bg-brand-red border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 focus:bg-red-600 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                          }, [
                            unref(partnerForm).processing ? (openBlock(), createBlock("svg", {
                              key: 0,
                              class: "animate-spin -ml-1 mr-3 h-4 w-4 text-white",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("circle", {
                                class: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                "stroke-width": "4"
                              }),
                              createVNode("path", {
                                class: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              })
                            ])) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(unref(partnerForm).processing ? "Updating..." : "Update Partner Badge"), 1)
                          ], 8, ["disabled"])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, " Partner Logo "),
                        __props.partnerBadge?.logo_image || partnerLogoPreview.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "mb-4"
                        }, [
                          createVNode("div", { class: "relative" }, [
                            createVNode("img", {
                              src: partnerLogoPreview.value || `/storage/${__props.partnerBadge.logo_image}`,
                              alt: __props.partnerBadge?.logo_alt || "Partner Logo",
                              class: "w-full max-w-xs h-24 object-contain rounded-lg border border-gray-200 bg-gray-50 p-4"
                            }, null, 8, ["src", "alt"]),
                            createVNode("button", {
                              onClick: deletePartnerLogo,
                              type: "button",
                              class: "absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors",
                              title: "Delete logo"
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
                                  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"
                                })
                              ]))
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "border-2 border-dashed border-gray-300 rounded-lg p-6" }, [
                          createVNode("div", { class: "text-center" }, [
                            (openBlock(), createBlock("svg", {
                              class: "mx-auto h-12 w-12 text-gray-400",
                              stroke: "currentColor",
                              fill: "none",
                              viewBox: "0 0 48 48"
                            }, [
                              createVNode("path", {
                                d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              })
                            ])),
                            createVNode("div", { class: "mt-4" }, [
                              createVNode("label", {
                                for: "partner_logo",
                                class: "cursor-pointer"
                              }, [
                                createVNode("span", { class: "mt-2 block text-sm font-medium text-gray-900" }, " Click to upload a new logo "),
                                createVNode("span", { class: "mt-1 block text-xs text-gray-500" }, " PNG, JPG, SVG up to 2MB ")
                              ]),
                              createVNode("input", {
                                id: "partner_logo",
                                type: "file",
                                accept: "image/*",
                                onChange: handlePartnerLogoUpload,
                                class: "sr-only"
                              }, null, 32)
                            ])
                          ])
                        ])
                      ])
                    ])
                  ], 32)
                ])
              ]),
              _ctx.$page.props.flash.success ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg"
              }, toDisplayString(_ctx.$page.props.flash.success), 1)) : createCommentVNode("", true),
              _ctx.$page.props.flash.error ? (openBlock(), createBlock("div", {
                key: 1,
                class: "mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
              }, toDisplayString(_ctx.$page.props.flash.error), 1)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Homepage/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4bd3ed1e"]]);
export {
  Index as default
};
