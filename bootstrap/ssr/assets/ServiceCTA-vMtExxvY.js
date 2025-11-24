import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "ParnerBadge",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "partner-badge-section bg-brand-light border-b border-gray-200" }, _attrs))} data-v-96195df5><div class="container mx-auto px-6 sm:px-8 lg:px-12" data-v-96195df5><div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 h-auto sm:h-[60px] py-4 sm:py-0" data-v-96195df5><span class="text-brand-dark text-base sm:text-xl font-medium tracking-wide text-center" data-v-96195df5> An Official Databricks Partner </span><div class="databricks-logo-wrapper w-full sm:w-auto flex justify-center" data-v-96195df5><img src="/images/databricks-dark.webp" alt="Databricks Logo" class="h-5 sm:h-6 partner-logo w-auto max-w-full" data-v-96195df5></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services/ParnerBadge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ParnerBadge = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-96195df5"]]);
const _sfc_main = {
  __name: "ServiceCTA",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Ready to Get More from Databricks?"
    },
    description: {
      type: String,
      default: "Let's simplify your Databricks journey, and turn data into real results."
    },
    ctaText: {
      type: String,
      default: "Get Started Now"
    },
    ctaLink: {
      type: String,
      default: "/contact"
    },
    backgroundImage: {
      type: String,
      default: "/images/heroobannersinki.png"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "service-cta-section bg-white pb-20 lg:pb-28 relative overflow-hidden" }, _attrs))} data-v-dc9ec78c><div class="container-custom max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20" data-v-dc9ec78c><div class="cta-card-wrapper px-2 sm:px-4 lg:px-16" data-v-dc9ec78c><div class="cta-card relative rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] p-8 sm:p-10 md:p-12 lg:p-16 text-center overflow-hidden shadow-lg min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]" data-v-dc9ec78c><div class="absolute inset-0 z-0" data-v-dc9ec78c><img${ssrRenderAttr("src", __props.backgroundImage)} alt="Background" class="w-full h-full object-cover rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]" data-v-dc9ec78c></div><div class="relative z-10 max-w-[1469px] mx-auto h-full flex flex-col justify-center" data-v-dc9ec78c><h2 class="text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-[48px] leading-tight sm:leading-tight md:leading-tight lg:leading-[1.1] xl:leading-[1.1] 2xl:leading-[52px] mb-4 sm:mb-5 md:mb-6 animate-slide-up px-2 sm:px-4 md:px-6" data-v-dc9ec78c>${__props.title ?? ""}</h2><p class="text-white text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[24px] leading-relaxed sm:leading-relaxed md:leading-[1.6] lg:leading-[1.5] xl:leading-[36px] mb-8 sm:mb-9 md:mb-10 max-w-[95%] sm:max-w-[90%] md:max-w-[770px] mx-auto animate-slide-up-delayed px-2 sm:px-4" data-v-dc9ec78c>${ssrInterpolate(__props.description)}</p><div class="animate-fade-in-up" data-v-dc9ec78c><a${ssrRenderAttr("href", __props.ctaLink)} class="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-brand-red border-2 border-brand-red rounded-full text-white text-base sm:text-lg font-bold capitalize hover:bg-transparent hover:text-brand-white transition-all duration-300 btn-hover-effect shadow-lg hover:shadow-2xl group" data-v-dc9ec78c><span class="whitespace-nowrap" data-v-dc9ec78c>${ssrInterpolate(__props.ctaText)}</span><svg class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-dc9ec78c><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" data-v-dc9ec78c></path></svg></a></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Services/ServiceCTA.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ServiceCTA = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dc9ec78c"]]);
export {
  ParnerBadge as P,
  ServiceCTA as S
};
