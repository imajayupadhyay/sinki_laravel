import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "FooterSection",
  __ssrInlineRender: true,
  setup(__props) {
    const quickLinks = ref([
      { name: "Company", url: "#company" },
      { name: "Insights", url: "#insights" },
      { name: "Industries", url: "#industries" },
      { name: "Contact Us", url: "/contact" }
    ]);
    const services = ref([
      { name: "Data Engineering & Modernization", url: "#services" },
      { name: "Data Management & Governance", url: "#services" },
      { name: "Data Analytics & Business Intelligence", url: "#services" },
      { name: "Data Science", url: "#services" }
    ]);
    const bottomLinks = ref([
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms & Conditions", url: "/terms-and-conditions" }
    ]);
    const currentYear = computed(() => (/* @__PURE__ */ new Date()).getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-[#121212] relative" }, _attrs))} data-v-8fe90b95><footer class="footer-section relative pt-16 sm:pt-20 lg:pt-24" data-v-8fe90b95><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24" data-v-8fe90b95><div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-16 xl:gap-20 pb-12 border-b border-white/10" data-v-8fe90b95><div class="flex-1 flex flex-col justify-center lg:max-w-sm footer-col" data-v-8fe90b95><div class="mb-6" data-v-8fe90b95><img src="/images/sinkidarkmode.png" alt="Sinki Logo" class="h-20 w-auto" data-v-8fe90b95></div><p class="text-white text-xl leading-[28px] tracking-[0.4px]" data-v-8fe90b95> Data &amp; AI That Drives Real Business Impact </p></div><div class="flex-1 footer-col" data-v-8fe90b95><h3 class="text-white text-2xl font-bold tracking-[0.48px] mb-8" data-v-8fe90b95> Quick Links </h3><ul class="space-y-5" data-v-8fe90b95><!--[-->`);
      ssrRenderList(quickLinks.value, (link, index) => {
        _push(`<li data-v-8fe90b95><a${ssrRenderAttr("href", link.url)} class="text-white text-xl font-medium hover:text-brand-red transition-colors duration-300 inline-block relative" data-v-8fe90b95>${ssrInterpolate(link.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="flex-1 footer-col" data-v-8fe90b95><h3 class="text-white text-2xl font-bold tracking-[0.48px] mb-8" data-v-8fe90b95> Services </h3><ul class="space-y-5" data-v-8fe90b95><!--[-->`);
      ssrRenderList(services.value, (service, index) => {
        _push(`<li data-v-8fe90b95><a${ssrRenderAttr("href", service.url)} class="text-white text-xl font-medium hover:text-brand-red transition-colors duration-300 inline-block relative" data-v-8fe90b95>${ssrInterpolate(service.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="pt-8 pb-8 flex flex-col sm:flex-row justify-between items-center gap-4" data-v-8fe90b95><div class="flex items-center gap-4 text-white text-lg font-medium order-2 sm:order-1 flex-wrap justify-center sm:justify-start" data-v-8fe90b95><!--[-->`);
      ssrRenderList(bottomLinks.value, (link, index) => {
        _push(`<!--[--><a${ssrRenderAttr("href", link.url)} class="hover:text-brand-red transition-colors duration-300 whitespace-nowrap" data-v-8fe90b95>${ssrInterpolate(link.name)}</a>`);
        if (index < bottomLinks.value.length - 1) {
          _push(`<span class="text-white/30" data-v-8fe90b95> | </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><p class="text-white text-lg font-medium leading-[25.2px] tracking-[0.36px] order-1 sm:order-2" data-v-8fe90b95> Copyright © ${ssrInterpolate(currentYear.value)} All Rights Reserved. </p></div></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FooterSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FooterSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8fe90b95"]]);
export {
  FooterSection as F
};
