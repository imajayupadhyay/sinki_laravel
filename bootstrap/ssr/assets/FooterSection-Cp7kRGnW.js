import { ref, computed, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "FooterSection",
  __ssrInlineRender: true,
  setup(__props) {
    const footerData = ref(null);
    const isLoading = ref(true);
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
      { name: "AI & ML Solutions", url: "#services" }
    ]);
    const bottomLinks = ref([
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms & Conditions", url: "/terms-and-conditions" }
    ]);
    const currentYear = computed(() => (/* @__PURE__ */ new Date()).getFullYear());
    const fetchFooterData = async () => {
      try {
        const response = await fetch("/api/footer");
        if (response.ok) {
          footerData.value = await response.json();
        }
      } catch (error) {
        console.error("Error fetching footer data:", error);
      } finally {
        isLoading.value = false;
      }
    };
    onMounted(() => {
      fetchFooterData();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-[#121212] relative" }, _attrs))} data-v-4f0113ac><footer class="footer-section relative pt-16 sm:pt-20 lg:pt-24" data-v-4f0113ac><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24" data-v-4f0113ac><div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-16 xl:gap-20 pb-12 border-b border-white/10" data-v-4f0113ac><div class="flex-1 flex flex-col justify-center lg:max-w-sm footer-col" data-v-4f0113ac><div class="mb-6" data-v-4f0113ac><img${ssrRenderAttr("src", footerData.value?.content?.logo_url || "/images/sinkidarkmode.png")} alt="Sinki Logo" class="h-20 w-auto" data-v-4f0113ac></div><p class="text-white text-xl leading-[28px] tracking-[0.4px]" data-v-4f0113ac>${ssrInterpolate(footerData.value?.content?.description || "Data & AI That Drives Real Business Impact")}</p></div><div class="flex-1 footer-col" data-v-4f0113ac><h3 class="text-white text-2xl font-bold tracking-[0.48px] mb-8" data-v-4f0113ac> Quick Links </h3><ul class="space-y-5" data-v-4f0113ac><!--[-->`);
      ssrRenderList(footerData.value?.links?.quick_links || quickLinks.value, (link, index) => {
        _push(`<li data-v-4f0113ac><a${ssrRenderAttr("href", link.url)} class="text-white text-xl font-medium hover:text-brand-red transition-colors duration-300 inline-block relative" data-v-4f0113ac>${ssrInterpolate(link.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="flex-1 footer-col" data-v-4f0113ac><h3 class="text-white text-2xl font-bold tracking-[0.48px] mb-8" data-v-4f0113ac> Services </h3><ul class="space-y-5" data-v-4f0113ac><!--[-->`);
      ssrRenderList(footerData.value?.links?.services || services.value, (service, index) => {
        _push(`<li data-v-4f0113ac><a${ssrRenderAttr("href", service.url)} class="text-white text-xl font-medium hover:text-brand-red transition-colors duration-300 inline-block relative" data-v-4f0113ac>${ssrInterpolate(service.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="pt-8 pb-8 flex flex-col sm:flex-row justify-between items-center gap-4" data-v-4f0113ac><div class="flex items-center gap-4 text-white text-lg font-medium order-2 sm:order-1 flex-wrap justify-center sm:justify-start" data-v-4f0113ac><!--[-->`);
      ssrRenderList(footerData.value?.links?.bottom_links || bottomLinks.value, (link, index) => {
        _push(`<!--[--><a${ssrRenderAttr("href", link.url)} class="hover:text-brand-red transition-colors duration-300 whitespace-nowrap" data-v-4f0113ac>${ssrInterpolate(link.name)}</a>`);
        if (index < (footerData.value?.links?.bottom_links || bottomLinks.value).length - 1) {
          _push(`<span class="text-white/30" data-v-4f0113ac> | </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div><p class="text-white text-lg font-medium leading-[25.2px] tracking-[0.36px] order-1 sm:order-2" data-v-4f0113ac> Copyright © ${ssrInterpolate(currentYear.value)} ${ssrInterpolate(footerData.value?.content?.copyright_text || "All Rights Reserved.")}</p></div></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FooterSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FooterSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f0113ac"]]);
export {
  FooterSection as F
};
